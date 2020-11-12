const Users = require('../models/users');

module.exports.getUsers = ('/', (req, res) => {
  Users.find({})
    .then((users) => {
      try {
        res.json({ data: users });
      } catch (err) {
        throw new Error(err);
      }
    })
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});

module.exports.createUser = ('/', (req, res) => {
  const { name, about, avatar } = req.body;
  Users.create({ name, about, avatar })
    .then((users) => {
      try {
        res.json({ data: users });
      } catch (err) {
        throw new Error(err);
      }
    })
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});

module.exports.getUserId = ('/', (req, res) => {
  Users.findById(req.params.id)
    .then((users) => {
      if (users) {
        res.json({ data: users });
      } else {
        res.status(404).json({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});
