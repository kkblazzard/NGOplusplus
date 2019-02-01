var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/NGOplusplusdb', function(err){
        console.log("Connected to DB");
        if(err){console.log(err);
        }
});

var orgSchema = new mongoose.Schema({
        name:{type: String},
        mission:{type:String}, 
        logo:{type:String},
        admins:[{type:String}],
        events:[{type:String}],
        webAddress:{type:String},
        fbAddress:{type:String},
        twAddress:{type:String},
        street:{type:String},
        city:{type:String},
        state:{type:String},
        zip:{type:Number},
        phone:{type:String},
        email:{type:String},
        ein:{type:Number, minlength:9, maxlength:9}
        },
        {timestamps:true},);
module.exports=mongoose.model('org', orgSchema);

