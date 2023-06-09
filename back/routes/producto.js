var express = require('express');
var productoController = require('../controllers/productoController');
var authenticate = require('../middlewares/authenticate');
var multipart = require('connect-multiparty');

var api = express.Router();
var path = multipart({ uploadDir: './uploads/productos' }); //carpeta para guardar imagenes de productos
var path_ingreso = multipart({ uploadDir: './uploads/facturas' });

api.post('/registro_producto_admin', [authenticate.decodeToken, path], productoController.registro_producto_admin);

api.get('/listar_productos_admin/:filtro?', authenticate.decodeToken, productoController.listar_productos_admin);
api.get('/listar_activos_productos_admin', authenticate.decodeToken, productoController.listar_activos_productos_admin);
api.get('/obtener_portada_producto/:img', productoController.obtener_portada_producto);
api.get('/obtener_producto_admin/:id', authenticate.decodeToken, productoController.obtener_producto_admin);

api.put('/actualizar_producto_admin/:id', [authenticate.decodeToken, path], productoController.actualizar_producto_admin);

/////////////

api.post('/registro_variedad_producto', authenticate.decodeToken, productoController.registro_variedad_producto);
api.get('/obtener_variedades_producto/:id', authenticate.decodeToken, productoController.obtener_variedades_producto);
api.delete('/eliminar_variedad_producto/:id', authenticate.decodeToken, productoController.eliminar_variedad_producto);

///////////////

api.post('/registro_ingreso_admin', [authenticate.decodeToken, path_ingreso], productoController.registro_ingreso_admin);



module.exports = api;