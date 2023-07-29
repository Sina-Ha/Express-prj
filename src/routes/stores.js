const { Router } = require('express');

const router = Router();

const stores = [
    {
        id: 1,
        name: "PC Store"
    },
    {
        id: 2,
        name: "Mobile Store"
    }
];

router.get('/', (req, res) => {
    res.send(stores);
});

router.post('/', (req, res) => {
    console.log(req.body);
    stores.push(req.body);
    res.sendStatus(201);
});

module.exports = router;