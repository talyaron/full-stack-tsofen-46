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

//detelte DB Model:
/*    Task.deleteMany({}, (err) => {
        console.log(err);
    })
*/





function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        // Add object to list for given key's value
        acc[key].push(obj);
        return acc;
    }, {});
}

// API Definitions:

app.get('/api/getDeletedJiras', function (request, response) {
    let resultArray = [];
    let counter = 0;
    Task.find({
        "diffItem.type": "Delete"

    }).then((doc) => {

        return (doc);
    }).then((documents) => {

        let ticketsArray = documents;
        let aGroubByDate =
            ticketsArray.reduce((acc, obj) => {
                const key = obj.diffItem['updatedTime'];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {})

            let aGroubByDatePrio =[];
            for (arr in aGroubByDate) {

                aGroubByDatePrio.push( [arr,
                    aGroubByDate[arr].reduce((acc, obj) => {
                      console.log(obj.jiraItem.priority);
                      const key = obj.jiraItem['priority'];
                      if (!acc[key]) {
                         acc[key] = [];
                      }
                      acc[key].push(obj);
                      return acc;
                   }, {})
                ])
             }


        response.send(aGroubByDatePrio);



    })


})







const port = process.env.PORT || 3000
app.listen(port, () => { console.log("App is Listening on port", port) })




