import mongoose from "mongoose";

const connectDatabase =()=> {
    console.log("Estamos conectando ao banco de dados.");

    mongoose.connect(
        process.env.MONGODV_URI,

        {
            useNewUrlParser: true,
             useUnifiedTopology: true
         }
         )
.then(()=>console.log("banco conectado"))
.catch((error)=>console.log(error));

};

export default connectDatabase;