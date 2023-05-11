// Error handler for the controller function
module.exports = func => (req, res, next) =>
        Promise.resolve(func(req, res, next))
               .catch(next)