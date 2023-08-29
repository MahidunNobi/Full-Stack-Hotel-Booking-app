import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken =(req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
      return next(createError(401, "You are not authenticated!"));
    }
  
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not Match!"));
        req.user = user
        return next();
      });
   
  };

export const verifyUser = (req, res, next) =>{
    verifyToken(req, res, (err)=>{
        if(err){
            return next(err)
        }else{
            if(req.user.id === req.params.id) {
                return next()
            }else{
                return next(createError(403, "The id you provide at the params is not valid"))
            }
        }
        next()        
    })
}
export const verifyAdmin = (req, res, next) =>{
    verifyToken(req, res, (err)=>{
        if(err){
            return next(err)
        }else{
            if(req.user.isAdmin) {
                return next()
            }else{
                return next(createError(403, "You are not an admin"))
            }
        }
        next()        
    })
}