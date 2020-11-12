const Cards = require('../models/cards');

module.exports.getCards = ('/', (req, res) => {
  Cards.find({})
    .then(cards => res.json({ data: cards }))
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});


module.exports.createCard = (req, res) => {
  const { name, link, ownerId} = req.body;
  console.log(req.user._id)
  Cards.create({name, link, owner: ownerId})
    .then(cards => res.json({ data: cards }))
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
};

