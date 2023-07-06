import  mongoose from "mongoose";
import app from "./app";

// ifi -- self envoking function

(async()=> {
 try{
     await mongoose.connect("mongodb://localhost:27017/ecomm")
     console.log("DB connected!");
    // must have event
     app.on('error', (err)=> {
        console.error("ERROR: " , err);
        throw err

    })
    const onListening = () =>{
        console.log(`Listening on port 5000`);
    }

    app.listen(5000, onListening )

 } catch(err){

    console.error("ERROR: " , err)
    throw err
    // explore the error message-excercise

 }

})()