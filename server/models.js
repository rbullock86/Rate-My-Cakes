// imports
const mongoose = require("mongoose");

// model schemas
const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        default: ""
    }
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({
    bakerName: {
        type: String,
        minlength: 2,
        required: true,
    },
    cakeImage: {
        type: String,
        required: true
    },
    reviews : [ReviewSchema]
}, {timestamps: true});

// connect
mongoose.connect("mongodb://localhost:27017/ratemycakes_db", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db connected"));

// exports
const Review = mongoose.model('review', ReviewSchema);
const Cake = mongoose.model('cake', CakeSchema);

module.exports = {Review, Cake};

