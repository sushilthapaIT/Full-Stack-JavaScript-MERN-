import express from 'express';
import {test} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test' ,test); //req-request from client/user //request-res->from api/server

export default router;