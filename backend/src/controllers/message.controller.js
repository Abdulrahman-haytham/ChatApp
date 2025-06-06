import User from '../models/user.model.js';
import Message from '../models/message.model.js';
import cloudinary from '../lib/cloudinary.js';


export   const getUsersForSidebar=async(req,res)=>{
try {
    const loggedInUser=req.user._id;
    const filteredUsers=await User.find({_id:{$ne:loggedInUser}}).select("-password");
    res.status(200).json(filteredUsers)

} catch (error) {
    console.log("Error im message controler ", error)
    res.status(500).json({Message:"Internal server error"})
}
}

export const getMessages=async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const myId=req.user._id;
        const messages=await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId}
            ]
        });

        res.status(200).json(messages)

        
    } catch (error) {
        console.log("Error in getMessages conroller",error);
        res.status(500).json({message:"Internal server Error"});
    }

}

export const sendMessage=async(req,res)=>{
    try {
        const {text,image}=req.body;
        const{id:receiverId}=req.params;

        let imageUrl;
        if(image){
            const uploadResponse=await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url;
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        });

        await newMessage.save();
    } catch (error) {
        
    }
}