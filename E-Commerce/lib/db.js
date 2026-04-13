import mongoose from "mongoose";

export let connectDB = async () => {
	try {
		let conn = await mongoose.connect("mongodb://localhost:27017/E-commerse");
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	}
};

