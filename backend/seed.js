const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User'); // Double check this path!

dotenv.config();

const seedDatabase = async () => {
  try {
    // 1. Connect to your MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    // 2. Clear out any existing users so we have a fresh start
    await User.deleteMany();
    console.log("Old users cleared.");

    // 3. Prepare the Admin (Scrambling the password for security)
    const adminPassword = await bcrypt.hash('admin123', 10);
    const adminUser = new User({
      username: 'admin',
      email: 'admin@vivahasya.com',
      password: adminPassword,
      role: 'admin'
    });

    // 4. Prepare the Client
    const clientPassword = await bcrypt.hash('client123', 10);
    const clientUser = new User({
      username: 'client_user',
      email: 'client@gmail.com',
      password: clientPassword,
      role: 'client'
    });

    // 5. Save them to the Database
    await adminUser.save();
    await clientUser.save();

    console.log("✅ Seeding complete!");
    console.log("--------------------------------------");
    console.log("Use these to login:");
    console.log("ADMIN -> Email: admin@vivahasya.com | Pass: admin123");
    console.log("CLIENT -> Email: client@gmail.com | Pass: client123");
    console.log("--------------------------------------");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();