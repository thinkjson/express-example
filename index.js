const Express = require("express");

const PORT = 3000;

const app = new Express();
const publicDir = require("path").join(__dirname, "/public");
app.use(Express.static(publicDir));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
