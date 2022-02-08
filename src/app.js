import express from "express";
import cors from "cors";
import routes from "./routes";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const PORT = process.env.NODE_LOCAL_PORT;

app.use(routes);
app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`);
});
