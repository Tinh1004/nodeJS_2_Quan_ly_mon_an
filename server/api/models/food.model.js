const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        Image: {
            type: String,
        },
        
    },
    { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
