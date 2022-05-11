const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const cors = require('cors')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
//routers
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin')
const aboutUsRouter = require('./routes/aboutUs')
const aboutUsRouterInfo = require('./routes/aboutUsInfo')
const contactUsRouter = require('./routes/contactUs')
const subscribersRouter = require('./routes/subscribers')
const contactsRouter = require('./routes/contacts')
const homeBannerRouter = require('./routes/homeBanner')
const aboutUsBannerRouter = require('./routes/aboutUsBanner')
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')
const basketRouter = require('./routes/basket')
const wishRouter = require('./routes/wishList')
const homeFooterRouter = require('./routes/homeFooter')
const aboutFooterRouter = require('./routes/aboutFooter')
const productFooterRouter = require('./routes/productFooter')
const detailFooterRouter = require('./routes/detailFooter')
const chooseRouter = require('./routes/choose')
const deleveryRouter = require('./routes/delevery')
const termsRouter = require('./routes/terms')
const DeleveryValuesRouter = require('./routes/deleveryValues')
const DeleveryDataRouter = require('./routes/deleveryData')
const TermDataRouter = require('./routes/termData')
const productBannerRouter = require('./routes/productBanner')
const wishBannerRouter = require('./routes/wishBanner')
const basketBannerRouter = require('./routes/bassketBanner')
const detailBannerRouter = require('./routes/detailBanner')
const orderRouter = require('./routes/orders')
require('dotenv').config()
app.use(cors())

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Cake Backend API Documentation',
        version: '1.0.0',
    },
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//use Routes
app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/aboutUs', aboutUsRouter);
app.use('/api/v1/aboutUsInfo', aboutUsRouterInfo);
app.use('/api/v1/contactUs', contactUsRouter);
app.use('/api/v1/subscribers', subscribersRouter);
app.use('/api/v1/contacts', contactsRouter);
app.use('/api/v1/homeBanner', homeBannerRouter);
app.use('/api/v1/aboutUsBanner', aboutUsBannerRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/basket', basketRouter);
app.use('/api/v1/wish', wishRouter);
app.use('/api/v1/homeFooter', homeFooterRouter);
app.use('/api/v1/aboutFooter', aboutFooterRouter);
app.use('/api/v1/productFooter', productFooterRouter);
app.use('/api/v1/detailFooter', detailFooterRouter);
app.use('/api/v1/choose', chooseRouter);
app.use('/api/v1/delevery', deleveryRouter);
app.use('/api/v1/terms', termsRouter);
app.use('/api/v1/deleveryValue', DeleveryValuesRouter);
app.use('/api/v1/deleveryData',DeleveryDataRouter)
app.use('/api/v1/termData',TermDataRouter)
app.use('/api/v1/productBanner',productBannerRouter)
app.use('/api/v1/wishBanner',wishBannerRouter)
app.use('/api/v1/basketBanner',basketBannerRouter)
app.use('/api/v1/detailBanner',detailBannerRouter)
app.use('/api/v1/orders',orderRouter)

//end useRoutes

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
