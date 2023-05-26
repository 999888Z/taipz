import express from 'express'
// import { Artist } from '../../models/artistModel.js'
const router = express.Router()



router.post ('/',  (req, res) => {

    console.log(req.body)
    // const newArtist = Artist.create(req.body)
  try {
    res.status(200).json({name:'THIS IS AWESOME'})
  } catch (error) {
    console.log(error)
  }
  })

  export default router

