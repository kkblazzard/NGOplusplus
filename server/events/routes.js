const controller=require('./controller');
module.exports=function(app){
    app
    .get('/api/events', controller.eventAll)
    .post('/api/events', controller.eventNew)
    .get('/api/events/:id', controller.eventDetails)
    .put('/api/events/:id', controller.eventUpdate)
    .patch('/api/events/:id', controller.messageNew)
    .delete('/api/events/:id', controller.eventRemove)
    .delete('/api/events/:eventid/:messageid', controller.messageDelete)
    .post('/api/events/name', controller.eventName)
}