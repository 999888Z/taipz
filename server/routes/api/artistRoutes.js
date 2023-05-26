import express from 'express'
import Artist from '../../models/artistModel.js'
import Show from '../../models/artistModel.js'
const router = express.Router()



router.post ('/', async (req, res) => {

    // console.log(req.body)
    // const newArtist = Artist.create(req.body)
    const { artistName, artistImage, venue, date, city, state, country, tourName, showImage, songName, audioLink, track } = req.body;
 
  try {
    
 
    const newArtist = await Artist.create({
      artistName,
      artistImage,
          venue, 
      date,
      city,
      state,
      country,
      tourName,
      showImage,
      songName,
      audioLink,
      track
      
    });
    console.log(newArtist._id)
    // const newShow = await Show.create({
    //   venue, 
    //   date,
    //   city,
    //   state,
    //   country,
    //   tourName,
    //   showImage



    //  })
    res.status(200).json({name:`You added ${artistName} to the database` })
  } catch (error) {
    console.log(error)
  }
  })

  export default router

