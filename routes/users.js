const router = require('express').Router();
const {
  getUsers,
  getUserById,
  getUserInfo,
  updateProfile,
  updateAvatar,
} = require('../controllers/users'); // импортируем контроллеры из users

const {
  validateUserId,
  validateUpdateProfile,
  validateUpdateAvatar,
} = require('../middlewares/requestValidation'); // импортируем валидаторы

router.get('/', getUsers); // получить всех пользователей
router.get('/me', getUserInfo); // Получение информации о пользователе
router.get('/:userId', validateUserId, getUserById); // получить конкретного пользователя по id
router.patch('/me', validateUpdateProfile, updateProfile); // обновить данные пользователя
router.patch('/me/avatar', validateUpdateAvatar, updateAvatar); // обновить аватар пользователя

module.exports = router;
