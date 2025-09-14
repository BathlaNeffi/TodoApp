// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log("Error in connecting***************",err));
main().then(()=> console.log("Connected to DB"));

async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/todo_app_db2');

//   use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

await mongoose.connect(`mongodb://${process.env.TODO_APP_REMOTE_dB}`);
}



