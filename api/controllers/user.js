import User from "../models/User.js";

export const getAllUser = async (req, res, next) => {
  try {
    await connect();
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const getSingleUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    await connect();
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    await connect();
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    await connect();
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
