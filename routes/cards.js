const router = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards'); // импортируем контроллеры из cards

const {
  validateCreateCard,
  validateCardId,
} = require('../middlewares/requestValidation'); // импортируем валидаторы

router.get('/', getCards); // получить все карточки
router.post('/', validateCreateCard, createCard); // создать новую карточку
router.delete('/:cardId', validateCardId, deleteCard); // удалить карточку по id
router.put('/:cardId/likes', validateCardId, likeCard); // поставить лайк карточке
router.delete('/:cardId/likes', validateCardId, dislikeCard); // убрать лайк с карточки

module.exports = router;
