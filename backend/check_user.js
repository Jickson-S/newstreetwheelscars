const mongoose = require("mongoose");
const User = require("./models/User");

const MONGODB_URI = "mongodb+srv://Jickson:Jickson%40143@mern.xcphwar.mongodb.net/car_rental";

async function run() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    const user = await User.findOne({ phone: "919626763906" });
    if (user) {
      console.log("User found:", {
        _id: user._id,
        name: user.name,
        phone: user.phone,
        hasPassword: !!user.password,
        createdAt: user.createdAt
      });
    } else {
      console.log("User NOT found.");
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.disconnect();
  }
}

run();
