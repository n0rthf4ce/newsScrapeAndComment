var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var HeadlineSchema = new Schema({
    // `title` is required and of type String
    headline: {
        type: String,
        required: true
    },
    // `link` is required and of type String
    link: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ]
});

// This creates our model from the above schema, using mongoose's model method
var Headline = mongoose.model("Article", HeadlineSchema);

// Export the Article model
module.exports = Headline;
