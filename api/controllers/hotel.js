import Hotel from "../models/Hotel.js";
import Room from "../models/Rooms.js";
import { connect } from "../utils/connectDB.js";

export const getAllHotel = async (req, res, next) => {
  const { limit, max, min, ...other } = req.query;

  try {
    await connect();
    const hotel = await Hotel.find({
      ...other,
      CheapestPrice: {
        $gte: min || 1,
        $lte: max || 999,
      },
    }).limit(limit);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const getSingleHotel = async (req, res, next) => {
  const id = req.params.id;

  try {
    await connect();
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const createHotel = async (req, res, next) => {
  try {
    await connect();
    const savedHotel = await Hotel.create(req.body);
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};
export const updateHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    await connect();
    const savedHotel = await Hotel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};
export const deleteHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    await connect();
    const savedHotel = await Hotel.findByIdAndDelete(id);
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    await connect();
    const count = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.json(count);
  } catch (error) {
    next(error);
  }
};
export const countByType = async (req, res, next) => {
  try {
    await connect();

    const HotelCount = await Hotel.countDocuments({ type: "hotel" });
    const AppertmentCount = await Hotel.countDocuments({ type: "appertment" });
    const ResortCount = await Hotel.countDocuments({ type: "resort" });
    const MotelCount = await Hotel.countDocuments({ type: "motel" });
    res.json([
      { type: "hotel", count: HotelCount },
      { type: "appertment", count: AppertmentCount },
      { type: "resort", count: ResortCount },
      { type: "motel", count: MotelCount },
    ]);
  } catch (error) {
    next(error);
  }
};
export const getSingleHotelRooms = async (req, res, next) => {
  const hotelId = req.params.id;
  try {
    await connect();

    const hotel = await Hotel.findById(hotelId);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.json(list);
  } catch (error) {
    next(error);
  }
};
