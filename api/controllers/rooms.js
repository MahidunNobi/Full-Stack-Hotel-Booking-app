import express from "express";
import Hotel from "../models/Hotel.js";
import Room from "../models/Rooms.js";


// Create Room
export const createRoom= async(req, res, next)=>{
    const hotelId = req.params.hotelId
    try {
        const room = await Room.create(req.body)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: room._id}
            })
        } catch (error) {
            next(error)   
        }
        res.json(room)
    } catch (error) {
        next(error)
    }
}
export const getAllRooms = async(req, res, next)=>{      
    try {
        const rooms = await Room.find({})
        res.status(200).json(rooms)

    } catch (error) {
        next(error)
    }
}
export const getSingleRoom =  async(req, res, next)=>{      
    const id = req.params.id
    try {
        const room = await Room.findById(id)
        res.status(200).json(room)

    } catch (error) {
        next(error)
    }
}
export const updateRoom = async(req, res, next)=>{      
    const id = req.params.id
    try {
        const room = await Room.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(room)

    } catch (error) {
        next(error)
    }
}
export const updateRoomAvailability = async(req, res, next)=>{      
    const id = req.params.id
    try {
     await Room.updateOne(
            {"roomNumbers._id": id},
            {
                $push:{
                    "roomNumbers.$.unavailableDates": req.body.dates
                }
            }   
        )
        res.status(200).json({
            success: true,
            message: "Rooms Availability Updated"
        })

    } catch (error) {
        next(error)
    }
}

export const deletRoom = async(req, res, next)=>{      
    const roomId = req.params.roomId
    const hotelId = req.params.hotelId
    try {
        const room = await Room.findByIdAndDelete(roomId)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: room._id}
            })
        } catch (error) {
            next(error)   
        }
        res.status(200).json(room)

    } catch (error) {
       next(error)
    }
}


