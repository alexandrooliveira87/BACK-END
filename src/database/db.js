const mongoose = require("mongoose");

const connectDatabase =()=> {
    console.log("Estamos conectando ao banco de dados.");

    mongoose.connect(
        
        "mongodb+srv://alexarea1:OBQ2mccRJHn9XjGA@cluster0.tx8kjlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{useNewUrlParser: true, useUnifiedTopology: true}
            )
.then(()=>console.log("banco conectado"))
.catch((error)=>console.log(error));

};

module.exports = connectDatabase;