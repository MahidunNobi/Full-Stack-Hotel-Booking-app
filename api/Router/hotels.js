import express from "express"
import { 
    createHotel, 
    deleteHotel, 
    getAllHotel, 
    getSingleHotel, 
    updateHotel, 
    countByCity, 
    countByType,
    getSingleHotelRooms
 } from "../controllers/hotel.js"
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js"

const router = express.Router()

// GET All HOtell
router.get("/", getAllHotel)
// GET Single Hotel
router.get("/find/:id", getSingleHotel)
// GET Single Hotel Rooms
router.get("/find/:id/rooms", verifyToken, getSingleHotelRooms)

// Create
router.post("/", verifyAdmin, createHotel)
// Update
router.patch("/:id", verifyAdmin, updateHotel)
// Delete
router.delete("/:id", verifyAdmin, deleteHotel)

router.get("/countByCity", countByCity)
router.get("/countByType", countByType)



export default router;