import express from 'express'
import apiRoutes from './api/index.js'
const router = express.Router()

router.use('/api', apiRoutes);

router.use((req, res) => res.send('You Went the wrong way bro'));

export default router 