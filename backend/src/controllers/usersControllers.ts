import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
// import './env';
dotenv.config();


const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params
    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(401).json({ error: 'User not found' })
        }
        return res.status(200).json({ user })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

const addUser = async (req: Request, res: Response) => {
    const { fname, lname, email, password } = req.body

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({ fname, lname, email, password: hashedPassword })
        await newUser.save()

        return res.status(200).json({ message: "New User created successfully" })

    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }

}

const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params
    try {
        const existingUser = await User.findById(userId)
        if (!existingUser) {
            return res.status(401).json({ error: 'User not found' })
        }

        Object.assign(existingUser, req.body)
        const updatedUser = await existingUser.save()

        return res.status(200).json({ updatedUser })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params
    try {
        const existingUser = await User.findById(userId)
        if (!existingUser) {
            return res.status(401).json({ error: 'User not found' })
        }

        await User.deleteOne({ _id: userId })
        return res.status(200).json({ messgae: "User removed" })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

const login = async (req: Request, res: Response) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // error handing because of type null
        if (process.env.JWT_SECRET === undefined) {
            throw new Error('JWT_SECRET environment variable is not defined');
          }
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET , {
            expiresIn: '12h',
        });

        res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' })
    }
}


export { getUsers, getUserById, addUser, updateUser, deleteUser, login }