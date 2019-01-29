const controller=require('./controller');
module.exports=function(app){
    app
        // orgs
        .get('/api/orgs', controller.orgAll)
        .post('/api/orgs', controller.orgNew)
        .get('/api/orgs/:id', controller.orgDetails)
        .put('/api/orgs/:id', controller.orgUpdate)
        .delete('/api/orgs/:id', controller.orgRemove)
    }