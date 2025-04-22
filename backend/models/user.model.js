const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            default: null,
        },
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
        },
        about: {
            type: String,
            default: null,
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('User', userSchema);