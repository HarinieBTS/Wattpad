const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const User=require("..//models/userModel")

exports. register=async(req,res)=>{
    const user=req.body;
    try{
        const registerDetails=await User.create(user)
        res.send(registerDetails);
    }catch(err){
        console.log(err);
    }
}

exports. login= async(req,res)=>{
    const{Email,password}=req.body;
    const user=await User.findOne({Email});

    try{
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    const isValidPassword=await bcrypt.compare(password,user.password);
    if(!isValidPassword){
        return res.status(401).json({message:"Invalid password"});
    }
    const token=jwt.sign({userId:user._id},"secret_key",{
        expiresIn:"1h",
    });
    res.json({token});
}catch(err){
    console.log(err);
}
}
