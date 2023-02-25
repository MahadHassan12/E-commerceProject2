const db = require('../models')
const { verifyToken, verifyTokenAndAuth } = require('./verifyToken');

const router = require('express').Router();

//Update
router.put('/:id', verifyTokenAndAuth, async(req, res)=> {
   try {
    const updatedUser = await db.User.findByIdUpdate(req.params.id, {
        $set: req.body,
    }, {new:true});
    res.status(200).json(updatedUser);
   }catch(err) {
    res.status(500).json(err)
   }
})


module.exports = router;