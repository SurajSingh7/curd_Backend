const express = require("express");
const {connect} = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/User");

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
connect();

//middlewares
app.use(express.json());



app.use(
	cors({
		// frontend url
		origin:"*",
		credentials:true,
	})
)


//routes
app.use("/api/v1", userRoutes);



//def route
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})