const xp = require("express");
const router = require("./server/routes.js");


const app = xp();
// app.use(express.static(__dirname + '/public/dist/public'));

router(app);

app.listen(8000, (errs) => console.log(errs?errs:"Now listening on port 8000"));