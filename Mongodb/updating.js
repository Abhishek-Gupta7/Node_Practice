const config = require("config");
//ServerName
const serverName = config.get("name");

const mongoose = require("mongoose");
//connecting to database
mongoose
  .connect(serverName)
  .then(() => {
    console.log("Connected to database..");
  })
  .catch((err) => {
    console.log("failed to connect : ", err);
  });

const excersie_schema = new mongoose.Schema({
  _id: String,
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

//creating model
const Course = new mongoose.model("course", excersie_schema);

async function getData() {
  return await Course.find({
    $and: [
      { isPublished: false },
      { $or: [{ tags: "frontend" }, { tags: "backend" }] },
    ],
  })
    .sort("-price")
    .select({ name: 1, author: 1, price: 1 });
}
async function run() {
  const result = await getData();
  console.log(result);
}
//run();

//Update First Method
async function updateFirst(id) {
  const result = await Course.updateOne({_id : id} , {
    $set : {
        author : "Mosh",
        isPublished : false
    }
  });
  

//   const result_save = await updateCourse.save();
  console.log(result);
}
//updateFirst("5a68fdf95db93f6477053ddd");



// Query   First   Method
async function update(id) {
  const updateCourse = await Course.findById(id);
  if (!updateCourse) {
    console.log(updateCourse);
    console.log("Id Not Found!");
    return;
  }
  // updateCourse.ispublished = true;
  // updateCourse.author = "Another author";
  updateCourse.set({
    isPublished: false,
    author: "Another Author",
  });
  const result_save = await updateCourse.save();
  console.log(result_save);
}
//update("5a68fdf95db93f6477053ddd");

//Update First Method
async function removeCourse(id) {
    //const result = await Course.deleteMany({_id : id});
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
    //console.log(result);
  }
  removeCourse("5a68fdf95db93f6477053ddd");
