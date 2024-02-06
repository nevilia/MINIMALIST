import express from 'express'
import { getUsers, getUserById, addUser, updateUser, deleteUser } from '../controllers/usersControllers'
const router = express.Router()


router.get('/', getUsers)
router.post('/', addUser)
router.get('/:userId', getUserById)
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router