import  mongoose from "mongoose";
import app from "./src/app.js";
import config from "./src/config/index.js";

// ifi -- self envoking function

(async()=> {
 try{
     await mongoose.connect("config.MONGODB_URL")
     console.log("DB connected!");
    // must have event
     app.on('error', (err)=> {
        console.error("ERROR: " , err);
        throw err

    })
    const onListening = () =>{
        console.log(`Listening on port ${config.PORT}`);
    }

    app.listen(5000, onListening )

 } catch(err){

    console.error("ERROR: " , err)
    throw err
    // explore the error message-excercise

 }

})()