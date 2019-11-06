const jwt = require('jsonwebtoken');
// const User = require('../db').import('../Models/user');  //!Need to link. 

const validateSession = (req, res, next) => {
    if(req.method == 'OPTIONS') {
        next()
    } else {
        const token = req.headers.authorization;
        if(!token) return res.status(403).send({auth: false, message: 'No Token Provided.'});
            else {
                jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                    if(!err && decoded){
                        User.findOne({
                            where: {
                                id: decoded.id
                            }
                        }, console.log(decoded))
                        .then(user => {
                            if(!user) throw 'err'
                            req.user = user;
                            next();
                        })
                        .catch(err => next(err))
                    } else {
                        req.errors = err
                        return res.status(500).send('Unauthorized Guild Member...')
                    }
                })
            }
    }
}

module.exports = validateSession;