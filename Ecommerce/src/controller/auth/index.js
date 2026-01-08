import { createUser } from "../../services/user/index.js";

const signUpController=async(req,res)=>{
    const {name,email,password,type}=req.body;
    const user=await createUser({name,email,password,type})
    res.status(200).json({success:true,message:'User Signed Up',data:user})
}
export {signUpController}