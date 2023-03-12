const router = require('express').Router();
const stripe = require('stripe')('sk_test_51MkkSXLXMdQWK0nFcMc7xzdATEhHSblrtFOhR7kTZnEJZJLT3rEF8GHWS4HZ8xCtvXOBD1omafjUVIMAjf6ezUtk00DyKVFPtp')


router.post('/payment', (req, res ) => {
    stripe.charges.create(
        {
        // payment_method_types: ['klarna'],
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'sek'
    },
     (stripeErr, stripeRes) =>{
        if(stripeErr) {
            res.status(500).json(stripeErr)
        }else {
            res.status(200).json(stripeRes)
        }
    })
}) 

module.exports = router;