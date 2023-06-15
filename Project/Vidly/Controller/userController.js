const { User , validateUser } =  require('../Model/user');
const bcrypt = require('bcrypt')
const _ = require('lodash');

exports. insertUser = async( req,res) => {
    try { 
        console.log("User File :",req.file);
        console.log(req.body);
        let {error} = validateUser(req.body);
        if (error) return res.status(400).send(error.message);
        let {name , email , password} = req.body;
        // check email 
        let emailExists = await User.findOne({email});
        //console.log("Email Exists :",emailExists);
        if (emailExists) return res.status(200).send("Email Exists. Please change!");
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt);
        // const user = new User({
        //     name,
        //     email,
        //     password,

        // });
        // let result = await user.save();
        // console.log(result);
        // res.status(200).send(_.pick(result,['_id','name','email']));
        res.send("photo");
    } catch (error) {
        console.log("Error : ",error.message);
        console.log("Stack : ",error.stack);
        res.status(500).send(error.message);
    }

}

exports.getUser = async(req,resp) => {
    const user = await User.find();
    if (user.length > 0) return res.status(200).send(user);
    res.status(400).send("No User Found");
}