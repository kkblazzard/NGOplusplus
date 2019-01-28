const Orgs=require('./models');
module.exports={
    orgAll: (req, res)=>Orgs
        .find().then(all=>console.log(all) || res.json(all))
        .catch(err=>console.log(err)|| res.json(err)),
    orgNew: (req, res) => {
        console.log("entered new controller", req.body);
        Orgs
        .create(req.body)
        .then(anew=>console.log("created in controller",anew))
        .then(res.json(anew))
        .catch(err=>console.log(err) || res.json(err))
    },
    orgRemove: (req, res) => Orgs
        .findByIdAndDelete(req.params.id)
        .then(deleted=>console.log("deleted") ||res.json(deleted))
        .catch(err=>console.log(err) || res.json(err)),
    orgDetails:(req, res) => Orgs
        .findById(req.params.id).then(one=>console.log(aAuthor) || res.json(one))
        .catch(err=>console.log(err) || res.json(err)),
    orgUpdate: (req, res) => Orgs
        .findByIdAndUpdate(req.params.id,req.body,{new: true})
        .then(updated =>console.log("updated",updated)||res.json(updated))
        .catch(err=>console.log(err) || res.json(err))
}
