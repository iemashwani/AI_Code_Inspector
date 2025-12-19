const app = require("./src/app.js");
require("dotenv").config();
const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
