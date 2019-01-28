var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/QuoteRankdb', function(err){
        console.log("Connected to DB");
        if(err){console.log(err);}});
var productSchema = new mongoose.Schema({
        author:{type: String, required:true, minlength:4},
        quotes:[{quote:{type: String, minlength:4}, vote:{type: Number, default:0}}],
        },
        {timestamps:true},);
        module.exports=mongoose.model('product', productSchema);
