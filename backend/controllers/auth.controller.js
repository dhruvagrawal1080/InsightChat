const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ms = require('ms');
const mailSender = require('../utils/mailSender');
const { welcomeEmail } = require('../templates/WelcomeTemplate');

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        })

        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        // mail user for congratulation of account creation
        mailSender(
            email,
            '🎉 Welcome to InsightChat!',
            welcomeEmail(user.firstName, user.lastName, user.email)
        )

        res.cookie('token', token, {
            expires: new Date(Date.now() + ms(process.env.JWT_EXPIRES_IN)),
            httpOnly: true,
            sameSite: 'strict',
        }).status(201).json({
            success: true,
            message: 'User created successfully',
            user,
            token
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password'
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'invaid credentials'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'invaid credentials'
            });
        }

        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.cookie('token', token, {
            expires: new Date(Date.now() + ms(process.env.JWT_EXPIRES_IN)),
            httpOnly: true,
            sameSite: 'strict',
        }).status(200).json({
            success: true,
            message: 'User logged in successfully',
            user,
            token
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: 'User logged out successfully'
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: 'Please provide email'
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const resetPasswordToken = crypto.randomBytes(20).toString('hex');

        user.resetPasswordToken = resetPasswordToken;
        user.resetPasswordExpires = Date.now() + 3600000;
        user.save();

        // mail user for reset password link
        const resetUrl = `${process.env.FRONTEND_URL}/updatePassword/${resetPasswordToken}`;

        await mailSender(
            email,
            '🔒 Reset Your Password',
            resetPasswordEmail(resetUrl)
        );

        res.status(200).json({
            success: true,
            message: 'Reset password link sent to your email'
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

exports.changePassword = async (req, res) => {
    try {
        const { password, token } = req.body;

        if (!token || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide token and password'
            });
        }

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Invalid or Expired token'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        user.save();

        // mail user for password update
        await mailSender(
            user.email,
            '🔑 Password Updated Successfully',
            passwordUpdatedEmail()
        );

        res.status(200).json({
            success: true,
            message: 'Password updated successfully'
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}