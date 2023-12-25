const User = require("../models/User");

exports.createUser = async (req, res) => {
    try {
      // Destructure fields from the request body
      const {id, name, email, phone, address,deliveryNo} = req.body;

      // Check if All Details are there or not
      if ( !id || !name || !email || !phone || !address || !deliveryNo) {
        return res.status(403).send({
          success: false,
          message: "All Fields are required",
        })
      }

       // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists.",
      })
    }
  
  
      const user = await User.create({ id, name, email, phone, address,deliveryNo });
  
      return res.status(200).json({
        success: true,
        user,
        message: "userDetails create successfully",
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Please try again.",
      })
    }
  }

  //getAllUser
exports.getAllUser = async (req, res) => {
    try{      
         const getAllUser = await User.find({});

          return res.status(200).json({
                success:true,
                message:"All user fetched successfully",
                data:getAllUser,
           });
    }   
    catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    } 
}

  //getUser
exports.getUser = async (req, res) => {
    try{      
        let id = req.params.id;
        
        let user = await User.findById(id);

        return res.status(200).json({
            success:true,
            message: "single user",
            data:user
        });
    }   
    catch(error) {
        return res.status(500).json({
        success:false,
        message:error.message,
        })
    } 
}

  //deleteUser
exports.deleteUser = async (req, res) => {
    try{      
        let id = req.params.id;

        let user = await User.findByIdAndDelete(id);

        return res.status(200).json({
            success:true,
            message: "user has been deleted",
            data:user
        });
    }   
    catch(error) {
        return res.status(500).json({
        success:false,
        message:error.message,
        })
    } 
}

  //updateUser
exports.updateUser = async (req, res) => {
    try{      
        let id = req.params.id;
        let user = await User.findById(id);

        let dataToBeUpdated = req.body;

        if(user){

            for(key in dataToBeUpdated) {
                user[key] = dataToBeUpdated[key];
            }
            const updatedData = await user.save();

            return res.status(200).json({
                success:true,
                 message: "data updated succesfully",
                data:updatedData
            });

        }else{

            return res.status(404).json({
                success:false,
                message: "user not found",
            });
        }


    }   
    catch(error) {
        return res.status(500).json({
        success:false,
        message:error.message,
        })
    } 
}









