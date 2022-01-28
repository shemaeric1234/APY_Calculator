import express from 'express';
import apyRoute from './apy.route';

const Router = express.Router();
Router.use('/apy', apyRoute);


export default Router;
