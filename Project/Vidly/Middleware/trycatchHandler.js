module.exports = function(handler){
    return async(req,res,next) => {
        try {
             handler(res,res);
        } catch (error) {
            console.log(error);
        }
    }
}