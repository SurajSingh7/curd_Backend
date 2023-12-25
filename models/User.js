// Import the Mongoose library
const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
        id: {
			type: String,
			required: true,
			trim: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		
		// Define the email field with type String, required, and trimmed
		email: {
			type: String,
			required: true,
			trim: true,
		},
        phone: {
			type: String,
			required: true,
			trim: true,
		},
        address: {
			type: String,
			required: true,
			trim: true,
		},

        deliveryNo: {
			type: String,
			required: true,
			trim: true,
		},
	},
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("users", userSchema);