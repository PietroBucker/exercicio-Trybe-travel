import express from 'express';
import PackageController from '../controllers/Package.controller';

const packageRoute = express.Router();

packageRoute.patch('/:id', PackageController.upDate);
packageRoute.delete('/:id', PackageController.packageDelete);
export default packageRoute;