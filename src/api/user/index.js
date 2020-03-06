import express, { Router } from 'express';
import controller from './user.controller';

const router = express.Router();

router.post('/', controller.create);

module.exports = router;