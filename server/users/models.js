var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/NGOplusplusdb', function(err){
        console.log("Connected to DB");
        if(err){console.log(err);
        }
});


var userSchema = new mongoose.Schema({
    username: {type: String, required:true, minlength:4},
    email: {type: String},
    password: {type: String, required:true, minlength:4}
}, {timestamps:true})

module.exports=mongoose.model('user', userSchema);