const { Customer , validateCustomer }= require('../Model/customer');

exports.insertCustomer = async(req,res) => {
try {
    console.log(req.body);
    let {name , isGold , phone} = req.body;
    const {error} = validateCustomer(req.body);
    if (error) return res.status(400).send(error.message);

    const customer = new Customer({
        name,
        isGold,
        phone
    });
    const result = await customer.save();
    console.log(result);


    res.status(200).send(result);
} catch (error) {
    console.log(error);
    res.status(500).send(error);
}

}

exports.getCustomer = async(req,res) => {


}