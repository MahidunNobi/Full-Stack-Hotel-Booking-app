import express from "express"
import { getAllUser, getSingleUser, updateUser, deleteUser } from "../controllers/user.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res)=>{
//     res.send("You are ready to rock and roll")
// })
// router.get("/checkuser/:id", verifyUser, (req, res)=>{
//     res.send("You are ready to rock and roll from verify user")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res)=>{
//     res.send("You are ready to rock and roll Boss!!")
// })

// GET All Users
router.get("/", getAllUser)
// GET Single Users
router.get("/:id", getSingleUser)
// Update
router.patch("/:id", updateUser)
// Delete
router.delete("/:id", deleteUser)


export default router;
