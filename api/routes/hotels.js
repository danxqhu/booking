import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels } from '../controllers/hotel.js';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createHotel);

// UPDATE
router.put('/:id', verifyAdmin, updateHotel);

// DELETE
router.delete('/:id', verifyAdmin, deleteHotel);

// GET
router.get('/:id', getHotel);

// GET ALL
router.get('/', getHotels);

// router.get('/register', (req, res) => {
//   res.send('Hello, this is auth register endpoint');
// });

export default router;
