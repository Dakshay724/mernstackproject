const router = require("express").Router();
const { User } = require("../models/user");

 
// router.post("/signup", async (req, res) => {
// 	try {
// 		let user = await User.send(req.body);
// 		res.status(200).json({ message: "User created successfully" ,user});
// 	} catch (error) {
//         console.log(error)
// 		res.status(500).json({ message: "Internal Server Error" });
// 	}
// });
router.post('/signup', async(req,res)=>{

    try {

        let user = await User.send(req.body)

        res.status(200).json({sucess:true,user})

    } catch (error) {

        console.log(error)

        res.status(500).json({message:"Internal server error"})

    }

})

module.exports = router;