const todoModel = require("../models/todo_model");

let tasks = [
  {
    id: 1,
    description: "Studing Maths",
    category: "School",
    dueDate: "2025-09-20",
  },
  {
    id: 2,
    description: "build Project",
    category: "Work",
    dueDate: "2025-09-20",
  },
];

module.exports.home = async (req, res) => {
  try {
    tasks = await todoModel.find({});

    return res.render("home", {
      title: "TODO APP",
      tasks: tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.addTask = async (req, res) => {
  try {
    // console.log("Headers:", req.headers["content-type"]);
    // console.log("Raw body:", req.body);
    await todoModel.create({ ...req.body });
    tasks = await todoModel.find({});

    // tasks.push({
    //     id:Date.now(),
    //     ...req.body

    // });
    return res.redirect('/');
    // console.log("request is",req.body);
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    // console.log(req.query.id);
    // console.log(req.query);
    // return res.redirect('back');
    if (Array.isArray(req.query.id)) {
      for (a of req.query.id) {

        await todoModel.findByIdAndDelete(a);
        // let indexToDel = tasks.findIndex((i) => i.id === parseInt(a));
        // if (indexToDel !== -1) {
        //   tasks.splice(indexToDel, 1);
        // }
        // console.log(indexToDel);
      }
    } else {    
        await todoModel.findByIdAndDelete(req.query.id)
    //   let indexToDel = tasks.findIndex((i) => i.id === parseInt(req.query.id));
    //   if (indexToDel !== -1) {
    //     tasks.splice(indexToDel, 1);
    //   }
    //   console.log(indexToDel);
    }

    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
