//ท็อป
const express = require('express');
const app = express();
const register = require('./routes/registerAPI');
const adminAPI = require('./routes/adminAPI');
const fontAPI = require('./routes/fontAPI');
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user",register);
app.use("/user!",adminAPI);
app.use("/prod",fontAPI)


app.listen(3002, () => {
  console.log("Server listening on port 3002");
});