const Events=require('./models');
var mongoose=require('mongoose');

module.exports={
    eventAll: (req, res)=>Events
        .find().then(all=>console.log(all) || res.json(all))
        .catch(err=>console.log(err)|| res.json(err)),
    eventNew: (req, res) => {
        console.log("entered event controller", req.body);
        Events
        .create(req.body)
        .then(anew=>console.log("created in controller",anew)|| res.json(anew))
        .catch(err=>console.log(err) || res.json(err))
    },
    messageNew:(req,res)=>{
        Events.findByIdAndUpdate(req.params.id, {$push:{messages:req.body}})
            .then(event=>res.json(event))
            .catch(err=>res.json(err))
    },
    messageDelete:(req, res)=>{
        console.log("In messageDelete in controller");
        var eventId= mongoose.Types.ObjectId(req.params.eventid);
        var messageId= mongoose.Types.ObjectId(req.params.messageid);

        Events.findByIdAndUpdate(eventId, { $pull: { messages: { _id: messageId } } }, { new: true})
        .then(event => res.json(event))
        .catch(err => console.log("There have been mesasge deletion errors")||res.json(err))
    },
    eventRemove: (req, res) => Events
        .findByIdAndDelete(req.params.id)
        .then(deleted=>console.log("deleted") ||res.json(deleted))
        .catch(err=>console.log(err) || res.json(err)),
    eventDetails:(req, res) => Events
        .findById(req.params.id).then(one=>console.log(one) || res.json(one))
        .catch(err=>console.log(err) || res.json(err)),

    eventUpdate: (req, res) => Events
        .findByIdAndUpdate(req.params.id,req.body,{new: true})
        .then(updated =>console.log("updated",updated)||res.json(updated))
        .catch(err=>console.log(err) || res.json(err)),

    eventName: (req, res) =>{
        console.log("in event name",req.body)
        Events.find({title:req.body.title})
        .then( event=> console.log("in Event controller search name", event) || res.json(event))
        .catch(err=>console.log(err) || res.json(err))
        }
}