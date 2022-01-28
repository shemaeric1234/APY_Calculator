import express from 'express';
import userController from '../controllers/user';
import apy from '../controllers/apy';
import DeleteData from '../controllers/DeleteData';
const router = express.Router();
router.post('/add', userController.CreacteUser);
router.post('/addApy', apy.CreacteApy);
router.get('/getUsers', userController.GetAllusers);
router.get('/getUser/:userID', userController.GetUser);
router.get('/getApys/:userID', apy.GetAllApy);
router.delete('/delete/:tableName/:id', DeleteData.DeleteData);
router.delete('/delete/:userID', DeleteData.DeleteAllApy);

export default router;