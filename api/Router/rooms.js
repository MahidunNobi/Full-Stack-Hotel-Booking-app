import express from "express"
import { createRoom, getAllRooms, getSingleRoom, updateRoom, deletRoom, updateRoomAvailability } from "../controllers/rooms.js"
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router()

// GET All HOtell
router.get("/", getAllRooms)
// GET Single Room
router.get("/:id", getSingleRoom)

// Create
router.post("/:hotelId", createRoom)
// Update
router.patch("/:id", updateRoom)

// Update Availability
router.patch("/availability/:id", updateRoomAvailability)

// Delete
router.delete("/:roomId/:hotelId", deletRoom)


export default router;
