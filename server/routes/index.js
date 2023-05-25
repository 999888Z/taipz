import router from 'express'
import apiRoutes from './api'

router = express.Router();

router.use('/api', apiRoutes);

router.use((req, res) => res.send('You Went the wrong way bro'));

module.exports = router;