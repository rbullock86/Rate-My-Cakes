const api = require("./controllers.js");
const bp = require("body-parser");

module.exports = function(app){
    app.use(bp.json());

    app.get("/api/cakes", api.grabAllCakes);
    app.get("/api/cakes/:id", api.grabOneCake);
    app.post("/api/cakes", api.createCake);
    app.put("/api/cakes/:id", api.updateCake);
    app.delete("/api/cakes/:id", api.deleteCake);

    // app.get("/cakes/:id/reviews", api.grabReviews);
    app.put("/api/cakes/:id/reviews", api.createReview);

}