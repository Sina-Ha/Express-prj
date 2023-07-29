const { Router } = require('express');

const router = Router();

const items = [
    {
        id: 1,
        name: "keyboard",
        price: 100
    },
    {
        id: 2,
        name: "mouse",
        price: 50
    },
];

router.get('/', (req, res) => {
    res.send(items);
});


router.post('/', (req, res) => {
    console.log(req.body);
    items.push(req.body);
    res.sendStatus(201);
});

module.exports = router;