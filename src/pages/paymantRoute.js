const express=require('express');
const payment_route=express();

const bodyParser=require('body-parser');
payment_route.use(bodyParser.json());
payment_route.use(bodyParser.urlencoded({ extended: true }));

const path=require('path');

payment_route.set('view engine','ejs');
payment_route.set('views',path.join(path.dirname(__dirname, '../pages'));

const paymentController=require('../controllers/paymentController');

payment_route.get('/',paymentController.renderProductPage);
payment_route.post('/',paymentController.renderProductPage);

module.exports=payment_route;