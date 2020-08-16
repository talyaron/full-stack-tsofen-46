const express = require("express");
const app = express();
const mongoose = require("mongoose");
const billaJson = require("./mockData");

/** DB connection */
mongoose.connect("mongodb://localhost:27017/jiraph-mockdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("Connected to MongoDB..."));

/** Task Schema
 *  
 * I think that we should Normalize the object that Bella sends to us before saving it in DB,
 * but for this sprint we will store the object as is.
 * 
 * in production i would split each object into separate file(modularization)
 * e.g ===> jiraItem schema, qcItem schema, diffItem schema 
 */

const taskSchema = new mongoose.Schema({
    jiraItem: {
        jiraId: String,
        jiraName: String,
        jiraType: String,
        priority: String,
        status: String,
        specialFields: {
            jiraParentId: String,
            functionalTest: Boolean,
            qaRepresentative: String,
            fixVersion: Number
        }
    },
    qcItem: {
        requirmentId: String,
        creationTime: {
            type: Date
        },
        requirmentType: String,
        status: String
    },
    diffItem: {
        diffItemType: String,
        updateTime: {
            type: Date
        },
        updatedFields: [{
            fieldName: String,
            oldVal: String,
            newVal: String
        }]
    },
    // taskItem: {
    //     user: User,
    //     isDone: Boolean,
    //     updatedTime: Date
    // }
})


/** Task Model */
const Task = mongoose.model("task", taskSchema);


/**
 * Get "Change of jira tickets status" query
 */
const getJiraByStatus = async () => {
    const tasks = await Task.find({
        'diffItem.updatedFields.fieldName': "status",
        // 'diffItem.updatedFields.newVal': "in progress",
    });

    console.log(tasks);
    // console.log(tasks[1].diffItem.updatedFields[0].oldVal);
}

getJiraByStatus();


//UI Object
// const UIObject = [
//     {label:String, order:Number, Tasks:Array},
//     {label:String, order:Number, Tasks:Array},
// ]




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));








































/** seed mock tasks */

const populateTasksCollection = (tasks) => {
    tasks.forEach(async ({
        jiraItem,
        qcItem,
        diffItem
    }) => {
        const task = new Task({
            jiraItem,
            qcItem,
            diffItem
        });
        await task.save()
    });


}

// populateTasksCollection(billaJson);