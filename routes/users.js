const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users'); // импортируем контроллеры из users

router.get('/', getUsers); // получить всех пользователей
router.get('/:userId', getUserById); // получить конкретного пользователя по id
router.post('/', createUser); // создать нового пользователя
router.patch('/me', updateUser); // обновить данные пользователя
router.patch('/me/avatar', updateAvatar); // обновить аватар пользователя

module.exports = router;
