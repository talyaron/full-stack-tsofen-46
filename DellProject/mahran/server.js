const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Express
app.use(express.static('public'));


// MongoDB: Estaplish connection
const url = "mongodb+srv://mahran:mahran84@cluster0.mr6bw.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


// Create Schema:

const Task = mongoose.model('Task', {
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
        requirementId: String,
        requirementType: String,
        status: String
    },
    diffItem: {
        type: { type: String },
        updatedTime: Number,
        updatedFields: [{
            fieldName: String,
            oldVal: String,
            newVal: String
        }]
    }
    // taskItem: {
    //   user: User,
    //   isDone: Boolean,
    //   updatedTime: Date,
    //   createdTime: Date
    // }
});


// API Definitions:

app.get('/api/getDeletedJiras', function (request, response) {
    response.send(
        Task.find({
            "diffItem.type": "Delete"


        }).then((doc) => {
            return (doc);
        }).then(function (documents) {
            console.log(documents);
            return (documents);
        })

    )
})


console.log(Task.find({
    "diffItem.type": "Delete"


}).then((doc) => {
    return (doc);
}).then(function (documents) {
    console.log(documents);
}));





const port = process.env.PORT || 3000
app.listen(port, () => { console.log("App is Listening on port", port) })




