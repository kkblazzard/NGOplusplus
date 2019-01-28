const controller=require('./controller');
module.exports=function(app){
    app
        .get('/api/orgs', controller.all)
        .post('/api/orgs', controller.new)
        .get('/api/orgs/:id', controller.details)
        .put('/api/orgs/:id', controller.update)
        .delete('/api/orgs/:id', controller.remove)
    }