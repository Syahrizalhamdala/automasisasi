module.exports = function validatorUSer(req, res, next) {
    const {name, age} = req.body;

    if (!name) return res.status(400).json({message: 'Name is required'});
    if (!age) return res.status(400).json({message: 'Age is required'});

    next();
};