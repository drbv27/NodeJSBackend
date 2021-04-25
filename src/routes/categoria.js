import routerx from 'express-promise-router';
import CatController from '../controllers/Categoria'

const app = routerx();
//post
app.post('/add', CatController.add);
//get
app.get('/query', CatController.query);
app.get('/list', CatController.list);
//put
app.put('/update');
app.put('/activate');
app.put('/deactivate',);

//delete
app.delete('/remove',);

export default app;