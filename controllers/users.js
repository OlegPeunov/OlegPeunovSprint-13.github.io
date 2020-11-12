const Users = require('../models/users');


module.exports.getUsers = ('/', (req, res) => {
  Users.find({})
    .then(users => res.json({ data: users }))
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});

module.exports.createUser = ('/', (req, res) => {
  const { name, about, avatar } = req.body;
  Users.create({name, about, avatar})
    .then(users => res.json({ data: users }))
    .catch((err) => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});

module.exports.getUserId = ('/', (req, res) => {
  Users.findById(req.params.id)
    .then(users => res.json({ data: users }))
    .catch(err => res.status(500).json({ message: `Ошибка при чтении файла: ${err}` }));
});
