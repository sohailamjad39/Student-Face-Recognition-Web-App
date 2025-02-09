const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const adminModel = require("./databases/admin.js");

require('dotenv').config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);

app.get("/seed", function (req, res) {
  async function clearDatabase() {
    await adminModel.deleteMany({});
  }

  async function seedDatabase() {
    const hash = await bcrypt.hash("admin", 10);
    try {
      await clearDatabase();

      // Create an admin
      const admin = new adminModel({
        adminId: "admin001",
        firstName: "John",
        lastName: "Doe",
        email: "admin@admin.com",
        password: hash,
        role: "admin",
      });
      await admin.save();

      console.log("Admin seeded successfully!");
    } catch (error) {
      console.error("Error seeding database:", error);
    } finally {
      mongoose.connection.close();
    }
  }

  seedDatabase();
  res.send("Admin seeded successfully.");
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});