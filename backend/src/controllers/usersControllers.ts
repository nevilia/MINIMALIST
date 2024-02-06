import { Request, Response } from 'express';
import User from '../models/userModel';

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
            return res.status(400).json({ messgae: "Email already in use" })
        }
        const newUser = new User({ fname, lname, email, password })
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


export { getUsers, getUserById, addUser, updateUser, deleteUser }