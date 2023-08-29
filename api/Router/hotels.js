import express from "express"
import { createHotel, deleteHotel, getAllHotel, getSingleHotel, updateHotel, countByCity, countByType } from "../controllers/hotel.js"
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router()

// GET All HOtell
router.get("/", getAllHotel)
// GET Single Hotel
router.get("/find/:id", getSingleHotel)

// Create
router.post("/", verifyAdmin, createHotel)
// Update
router.patch("/:id", verifyAdmin, updateHotel)
// Delete
router.delete("/:id", verifyAdmin, deleteHotel)

router.get("/countByCity", countByCity)
router.get("/countByType", countByType)



export default router;