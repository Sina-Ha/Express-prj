const { Router } = require('express');

const router = Router();

const laptop = [
    {
        id: 1,
        name: "Lenovo",
        price: 500
    },
    {
        id: 2,
        name: "HP",
        price: 400
    }
];

router.get('/', (req, res) => {
    res.send(laptop);
});

router.post('/', (req, res) => {
    console.log(req.body);
    laptop.push(req.body);
    res.sendStatus(201);
})

module.exports = router;