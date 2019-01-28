const controller=require('./controller');
module.exports=function(app){
    app
        .get('/api/authors', controller.authors)
        .post('/api/authors', controller.new)
        .get('/api/authors/:id', controller.details)
        .put('/api/authors/:id', controller.update)
        .delete('/api/authors/:id', controller.remove)
    }