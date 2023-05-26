
import express from 'express'
import artistRoutes from './artistRoutes.js'
import showRoutes from './showRoutes.js'
import songRoutes from './songRoutes.js'

const router = express.Router()



router.use('/artist', artistRoutes);
router.use('/show', showRoutes);
router.use('/show', songRoutes);

export default router;