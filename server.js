const express = require("express");

const path = require("path");
const port = process.env.PORT || 6500;
const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use("/", express.static(path.join(__dirname, "build")));
app.get("/*", (request, response) => {
  let siteResponseFile = path.join(__dirname, "build", "index.html");
  response.sendFile(siteResponseFile);
});
app.listen(port, () => console.info(`Server is listening on port ${port}`));
