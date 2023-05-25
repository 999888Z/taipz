import router from 'express'
import { Artist } from '../../models/artistModel'

router = express.Router();


router.post ('/',  (req, res) => {

    console.log(req.body)
    // const newArtist = Artist.create(req.body)
  try {
    
  } catch (error) {
    console.log(error)
  }
  })

