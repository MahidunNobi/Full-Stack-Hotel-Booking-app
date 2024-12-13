import { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";

const Register = () => {
  const { loading, err, dispatch } = useAuthContext();
  const [img, setImg] = useState(null);

  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const ImgData = new FormData();
    ImgData.append("file", img);
    ImgData.append("upload_preset", "PresetN");

    try {
      const file = await axios.post(
        "https://api.cloudinary.com/v1_1/mahidunnobi/image/upload",
        ImgData
      );
      const { url } = file.data;
      const newUserData = {
        ...credentials,
        img: url,
      };
      const res = await axios.post(
        "https://full-stack-hotel-booking-app-eosin.vercel.app/api/auth/register",
        newUserData
      );
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const habdleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.size >= 500000) {
      alert("File size can't more than 500KB");
    } else {
      setImg(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-6 py-6 flex justify-center items-center">
        <form className="formContainer">
          <h2 className="text-2xl mb-6"> Register</h2>
          <div className="img flex flex-col items-center space-y-2">
            <img
              className="w-[80px] rounded-full overflow-hidden"
              src={
                img
                  ? URL.createObjectURL(img)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <label
              className="border border-orange-500 rounded-md text-orange-500 hover:text-white hover:bg-orange-500 duration-300 cursor-pointer px-2 py-1"
              htmlFor="image"
            >
              Select Image
            </label>

            <input
              type="file"
              name="image"
              id="image"
              className="hidden"
              onChange={habdleFileChange}
            />
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            id="country"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            id="city"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Mobile"
            name="mobile"
            id="mobile"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          {err && <p className="text-red-700">{err.message}</p>}
          <button disabled={loading} onClick={handleRegister}>
            {" "}
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
