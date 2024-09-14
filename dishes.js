
const express = require('express');
const bodyParser = require('body-parser');


const app = express();


const urlEncodedParser = bodyParser.urlencoded({ extended: false });


const dishes = [
    { type: 'Sisig', province: 'Pampanga', price: 220 },
    { type: 'Salpicao', province: 'Quezon', price: 180 },
    { type: 'Bagnet', province: 'Ilocos', price: 370 },
];


app.get('/dishes', (req, res) => {
    res.status(200).send(dishes);
});


app.get('/dishes/:type', (req, res) => {
    const dishToFind = req.params.type;
    const dish = dishes.find(d => d.type === dishToFind);

    if (dish) {
        res.status(200).send(dish);
    } else {
        res.status(404).send('Dish not Found');
    }
});


app.use((req, res) => {
    res.status(404).send('Record Not Found');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}.`);
});
