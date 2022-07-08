//-------------------
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const register = require("./routes/register");
const login = require("./routes/login");
const student = require("./routes/student");
const teacher = require("./routes/teacher");
const parent = require("./routes/parent");
const server = express();

//-------------------
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());



// Connect to mongoDB
const password = encodeURIComponent("")
mongoose.connect(`mongodb+srv://manishReddy:${password}@cluster0.xnkhp.mongodb.net/?retryWrites=true&w=majority`, {
    useUnifiedtopology: true,
    useNewUrlParser: true
}).then(
    () => console.log('DB connected..')
).catch(err => console.log(err))

//-------------------
server.use("/register", register);
server.use("/login", login);
server.use("/student", student);
server.use("/teacher", teacher);
server.use("/parent", parent);

//-------------------
server.listen(5000, () => {
  console.log(`Server is listening on port 500 !`);
});
