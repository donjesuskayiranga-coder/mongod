const mongoose = require("mongoose");
const User = require("./models/user");
mongoose.connect("mongodb://127.0.0.1:27018/ecommerce", {
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Connection Error:", err));
async function createUser() {
    const user = new User({
        name: "Jesus",
        email: "jesus@gmail.com"
    });
    await user.save();
    console.log(user);
}
async function getUsers() {
    const users = await User.find();
   console.log(users); 
} 
getUsers();
createUser();






