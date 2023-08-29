import express from "express"
import { createRoom, getAllRooms, getSingleRoom, updateRoom, deletRoom } from "../controllers/rooms.js"
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router()

// GET All HOtell
router.get("/", getAllRooms)
// GET Single Room
router.get("/:id", getSingleRoom)

// Create
router.post("/:hotelId", verifyAdmin, createRoom)
// Update
router.patch("/:id", verifyAdmin, updateRoom)
// Delete
router.delete("/:roomId/:hotelId", verifyAdmin, deletRoom)


export default router;