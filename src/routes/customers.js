const { Router } = require('express');

const router = Router();

const customers = [
    {
        id: 1,
        name: "Ali",
        city: "Tehran"
    },
    {
        id: 2,
        name: "Reza",
        city: "Shiraz"
    }
];

router.get('/', (req, res) => {
    res.send(customers);
});


router.post('/', (req, res) => {
    console.log(req.body);
    customers.push(req.body);
    res.sendStatus(201);
});

module.exports = router;