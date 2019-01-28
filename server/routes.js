const controller=require('./controller');
module.exports=function(app){
    app
        .get('/api/org', controller.authors)
        .post('/api/org', controller.new)
        .get('/api/org/:id', controller.details)
        .put('/api/org/:id', controller.update)
        .delete('/api/org/:id', controller.remove)
    }