const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Starting examples
let task = ["learn some uni staff", "cry more"];
let complete = ["cry about my life"];

// Route for adding a new task
app.post('/addtask', (req, res) => {
    let newTask = req.body.newtask;
    if (newTask.trim() !== "") {
        task.push(newTask);
    }
    res.redirect('/');
});

// Route for rendering the main page
app.get('/', (req, res) => {
    res.render('index', { task, complete });
});

// Route for removing tasks
app.post('/removetask', (req, res) => {
    let completeTask = req.body.check;
    if (typeof completeTask === 'string') {
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === 'object') {
        for (let i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect('/');
});

// Route for retrieving tasks from completed to active list
app.post('/retrieve', (req, res) => {
    let taskToRetrieve = req.body.check;
    if (typeof taskToRetrieve === 'string') {
        task.push(taskToRetrieve);
        complete.splice(complete.indexOf(taskToRetrieve), 1);
    } else if (typeof taskToRetrieve === 'object') {
        for (let i = 0; i < taskToRetrieve.length; i++) {
            task.push(taskToRetrieve[i]);
            complete.splice(complete.indexOf(taskToRetrieve[i]), 1);
        }
    }
    res.redirect('/');
});

// Route for editing tasks
app.post('/edittask', (req, res) => {
    const { oldTask, newTask } = req.body;
    const taskIndex = task.indexOf(oldTask);
    if (taskIndex !== -1 && newTask.trim() !== "") {
        task[taskIndex] = newTask;
    }
    res.redirect('/');
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
