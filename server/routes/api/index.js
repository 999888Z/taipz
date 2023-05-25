
// const userRoutes = require('./uRoutes');

// const thoughtRoutes = require('./thoughtRoutes');
import router from 'express'
import artistRoutes from './artistRoutes'
import showRoutes from './showRoutes'
import songRoutes from './songRoutes'


router = express.Router();

router.use('/artist', artistRoutes);
router.use('/show', showRoutes);
router.use('/show', songRoutes);

module.exports = router;