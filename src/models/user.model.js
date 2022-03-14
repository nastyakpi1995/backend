const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const validator = require("validator")
const {roles} = require('../config/roles')

const userSchema = mongoose.Schema(
    {
        name: {trim: true, required: true, type: String},
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Invalid email')
                }
            },
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minLength: 8,
            validate(value) {
                if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                    throw new Error('Password must contain at least one letter and one number')
                }
            }
        },
        role: {type: String, enum: roles, default: 'user'}
    },
    {timestamps: true}
)

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User