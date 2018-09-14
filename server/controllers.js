const {Cake, Review} = require("./models.js");

module.exports = {
    grabAllCakes : (req, res) => Cake.find({})
                                     .then(data => console.log("controllers: grabAllCakes", data) || res.json(data))
                                     .catch(errs => console.log("controllers: grabAllCakes had errors", errs) || res.json(errs)),
    grabOneCake : (req, res) => Cake.findById(req.params.id)
                                    .then(data => console.log("controllers: grabOneCake", data) || res.json(data))
                                    .catch(errs => console.log("controllers: grabOneCake had errors", errs) || res.json(errs)),
    createCake : (req, res) => Cake.create(req.body)
                                 .then(data => console.log("controllers: makeCake", data) || res.json(data))
                                 .catch(errs => console.log("controllers: makeCake had errors", errs) || res.json(errs)),
    updateCake : (req, res) => Cake.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true })
                                   .then(data => console.log("controllers: updateCake", data) || res.json(data))
                                   .catch(errs => console.log("controllers: updateCake had errors", errs) || res.json(errs)),
    deleteCake : (req, res) => Cake.findByIdAndRemove(req.params.id)
                                   .then(data => console.log("controllers: deleteCake", data) || res.json(data))
                                   .catch(errs => console.log("controllers: deleteCake had errors", errs) || res.json(errs)),
    createReview : (req, res) => Cake.findOneAndUpdate(req.params.id, {$push: {reviews: {rating: req.body.rating, comment: req.body.comment}}}, {runValidators: true, new: true})
                                     .then(data => console.log("controllers: createReview", data) || res.json(data))
                                     .catch(errs => console.log("controllers: createReview had errors", errs) || res.json(data))
    // grabReviews : (req, res) => Cake.find(req.params.id)
    //                                   .then(data => console.log("controllers: grabReviews", data) || res.json(data))
    //                                   .catch(errs => console.log("controllers: grabReviews had errors", errs) || res.json(errs))

}