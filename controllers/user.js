import User from '../models/user'

export const userById = async(request,response,next,id)=>{
    const user = await User.findById(id).exec();
    if(!user){
        return response.status(400).json({
            message:"Khong tim thay user"
        })
    }
    request.profile = user;
    request.profile.password = undefined;

    next();
}
export const listUser = async (request,response)=>{
    try{
        const users = await User.find().exec()
        response.json(users)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}