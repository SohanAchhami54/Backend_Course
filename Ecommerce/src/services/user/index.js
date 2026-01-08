import { User } from "../../model/user.js"
const createUser=async(userData)=>{
  const user=await User.create(userData);
  return user;
}
export {createUser}
