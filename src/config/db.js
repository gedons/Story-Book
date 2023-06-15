const mongoose = require('mongoose')


mongoose
.connect('mongodb+srv://gedoni:<blues0001153>@cluster0.kiocya5.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log(`connected to DB`))
.catch((err) => console.log(err));
