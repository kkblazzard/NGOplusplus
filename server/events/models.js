var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/NGOplusplusdb', function(err){
        console.log("Connected to DB");
        if(err){console.log(err);
        }
});

var messageSchema = new mongoose.Schema({
        authorId:{type:String},
        content:{type:String}
}, {timestamps:true})

var eventSchema = new mongoose.Schema({
        title:{type: String, required:true, minlength:4},
        date:{type: Date}, 
        time:{type: String},
        ampm:{type: String},
        street:{type:String},
        city:{type:String},
        state:{type:String},
        zip:{type:Number},
        host:[String],
        photo:{type:String},
        details:{type:String},
        messages:[messageSchema]
},{timestamps:true}
)

module.exports=mongoose.model('event', eventSchema);

