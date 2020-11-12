const Cards = require('../models/cards');

module.exports.getCards = ('/', (req, res) => {
  Cards.find({})
    .then((cards) => {
      try {
        res.json({ data: cards });
      } catch (err) {
        throw new Error(err);
      }
    })
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});

module.exports.createCard = ('/', (req, res) => {
  const { name, link } = req.body;
  // eslint-disable-next-line no-underscore-dangle
  Cards.create({ name, link, owner: req.user._id })
    .then((cards) => {
      try {
        res.json({ data: cards });
      } catch (err) {
        throw new Error(err);
      }
    })
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});

module.exports.deleteCard = ('/', (req, res) => {
  Cards.findByIdAndRemove(req.params.id)
    .then((cards) => {
      if (cards) {
        res.json({ data: cards });
      } else {
        res.status(404).json({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});
