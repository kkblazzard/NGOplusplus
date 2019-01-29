var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/NGOplusplusdb', function(err){
        console.log("Connected to DB");
        if(err){console.log(err);}});
var orgSchema = new mongoose.Schema({
        name:{type: String, required:true, minlength:4},
        mission:{type:String}, 
        logo:{type:String},
        admins:[{userId:String}],
        events:[{eventId:String}],
        webAddress:{webAddress:String},
        fbAddress:{fbAddress:String},
        twAddress:{twAddress:String},
        street:{type:String},
        city:{type:String},
        State:{type:String},
        zip:{type:Number},
        phone:{type:String},
        email:{type:String},
        ein:{type:Number, minlength:9, maxlength:9}
        },
        {timestamps:true},);
        module.exports=mongoose.model('org', orgSchema);
