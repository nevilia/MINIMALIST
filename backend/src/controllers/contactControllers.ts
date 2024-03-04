import { Request, Response } from 'express'
import Contact from '../models/conatctModel'

export const getAllContact = async (req: Request, res: Response) => {
    try {
        const allContacts = await Contact.find()
        return res.json(allContacts)

    } catch (error) {
        return res.status(500).json({ error: "error getting all contacts" })
    }
}

export const getContactById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId

        const userContact = await Contact.findOne({ user: userId })

        if (!userContact) {
            return res.status(404).json({ error: "No Contacts for this user" })
        }

        return res.status(200).json(userContact)

    } catch (error) {
        return res.status(500).json({ error: "error getting contact for this id" })
    }
}

export const addContact = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId

        const { address, pincode, city, state, country, phoneNo } = req.body

        const newContact = new Contact({
            user: userId,
            address: address,
            pincode: pincode,
            city: city,
            state: state,
            country: country,
            phoneNo: phoneNo
        })

        const savedContact = await newContact.save()

        return res.status(201).json(savedContact)


    } catch (error) {
        return res.status(500).json({ error: "error adding contact" })
    }
}

export const updateContact = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const updatedContact = await Contact.findOneAndUpdate({ user: userId }, req.body, {new: true})

        if (!updatedContact) {
            return res.status(404).json({error: "No Contact found for this user"})
        }

        return res.status(200).json(updatedContact)

    } catch (error) {
        return res.status(500).json({ error: "error updating contact" })
    }
}

export const deleteContact = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const userContact = await Contact.findOneAndDelete({ user: userId })

        if (!userContact) {
            return res.status(404).json({ error: "No Contact found for this user" });
        }
        
        return res.status(200).json({userContact, message: "Deleted Successfully"})

    } catch (error) {
        return res.status(500).json({ error: "error deleting contact or contact does not exist" })
    }
}