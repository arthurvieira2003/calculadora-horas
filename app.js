const express = require("express");
const calcHorasRoute = require("./routes/calcHorasRoute");

const app = express();
const port = 3000;

app.use(express.json());
calcHorasRoute(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
