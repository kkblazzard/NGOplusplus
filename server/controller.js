const Authors=require('./models');
module.exports={
    authors: (req, res)=>Authors
        .find().then(allAuthors=>console.log(allAuthors) || res.json(allAuthors))
        .catch(err=>console.log(err)|| res.json(err)),
    new: (req, res) => {
        console.log("entered new controller", req.body);
        Authors
        .create(req.body)
        .then(console.log("created in controller",req.body))
        .then(res.json(req.body))
        .catch(err=>console.log(err) || res.json(err))
    },
    remove: (req, res) => Authors
        .findByIdAndDelete(req.params.id)
        .then(console.log("deleted") ||res.json("deleted"))
        .catch(err=>console.log(err) || res.json(err)),
    details:(req, res) => Authors
        .findById(req.params.id).then(aAuthor=>console.log(aAuthor) || res.json(aAuthor))
        .catch(err=>console.log(err) || res.json(err)),
    update: (req, res) => Authors
        .findByIdAndUpdate(req.params.id,req.body,{new: true})
        .then(aAuthor =>console.log(aAuthor)||res.json(aAuthor))
        .catch(err=>console.log(err) || res.json(err))
}
