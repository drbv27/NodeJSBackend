import routerx from 'express-promise-router';

const app = routerx();

//post
app.post('/add',);

//get
app.get('/query',);
app.get('/queryCodigo',);
app.get('/list',);

//put
app.put('/update',);
app.put('/activate',);
app.put('/deactivate',);

//delete
app.delete('/remove',);

export default app;