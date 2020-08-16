const mongoose = require("mongoose");

/** Task Schema*/

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
            fixVersion: String
        }
    },
    qcItem: {
        requirmentId: String,
        requirementType: String,
        status: String
    },
    diffItem: {
        type: {
            type: String
        },
        updateTime: Number,
        updatedFields: [{
            fieldName: String,
            oldValue: String,
            newValue: String
        }]
    }
    // taskItem: {
    //   user: User,
    //   isDone: Boolean,
    //   updatedTime: Date,
    //   createdTime: Date
    // }
});

/** Task Model */
const Task = mongoose.model("task", taskSchema);


exports.Task = Task;