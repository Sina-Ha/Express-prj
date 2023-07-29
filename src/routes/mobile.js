const { Router } = require('express');

const router = Router();

const mobiles = [
    {
        id: 1,
        name: "iphone",
        price: 700
    },
    {
        id: 2,
        name: "Samsung",
        price: 600
    }
];

router.get('/', (req, res) => {
    res.send(mobiles);
});

router.post('/', (req, res) => {
    console.log(req.body);
    mobiles.push(req.body);
    res.sendStatus(201);
})

module.exports = router;