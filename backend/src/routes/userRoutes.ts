import express from 'express'
import { getUsers, getUserById, addUser, updateUser, deleteUser, login } from '../controllers/usersControllers'
const router = express.Router()


router.get('/', getUsers)
router.post('/', addUser)
router.get('/:userId', getUserById)
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/login', login)

export default router