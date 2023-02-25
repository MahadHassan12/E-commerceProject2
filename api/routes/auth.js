const router = require('express').Router();
const User = require('../models/User')
const db = require('../models')
const jwt = require('jsonwebtoken')


//REGISTER

router.get('/register', (req, res) => {
    db.User.findAll().then((result) => {
        res.send(result)
    })
})

//REGISTER
router.post('/register', (req, res) => {
    db.User.create(req.body).then((result) => {
        res.send(result);
    })
})
router.put('/register', (req, res) => {
    db.User.update(req.body, {
        where: {id: req.body.id}
    }).then((result) => {
        res.send(result);
    })
});
router.delete('/register', (req, res) => {
    db.User.destroy({
        where: {id: req.body.id}
    }).then((result) => {
        res.json(`User is deleted ${result}`);
    })
});


//Login

router.post('/login', async (req, res) => {
    try {
        const user = await db.User.findOne({username: req.body.username});
        !user && res.status(401).json('wrong credentials');

        const accessToken = jwt.sign(
            {
            id: user.id, 
            isAdmin: user.isAdmin
            
        },
        'secret',
        {expiresIn:'3d'},
        );


        res.status(200).json({user, accessToken});
    }catch(err) {
        res.status(500).json(err);
    }
})





module.exports = router;