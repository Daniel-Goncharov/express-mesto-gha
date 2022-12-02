const router = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards'); // импортируем контроллеры из cards

router.get('/', getCards); // получить все карточки
router.post('/', createCard); // создать новую карточку
router.delete('/:cardId', deleteCard); // удалить карточку по id
router.put('/:cardId/likes', likeCard); // поставить лайк карточке
router.delete('/:cardId/likes', dislikeCard); // убрать лайк с карточки

module.exports = router;
