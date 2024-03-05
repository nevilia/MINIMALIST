import express from 'express';
import {
    getAllContact,
    getContactById,
    addContact,
    updateContact,
    deleteContact
} from '../controllers/contactControllers';

const router = express.Router();

// Route to get all contacts
router.get('/', getAllContact);

// Route to get contact by ID
router.get('/:userId', getContactById); 

// Route to add a new contact
router.post('/:userId', addContact);

// Route to update an existing contact
router.patch('/:userId', updateContact);

// Route to delete a contact
router.delete('/:userId', deleteContact);

export default router;
