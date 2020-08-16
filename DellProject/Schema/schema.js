//UI Object
const UIObject = [
    {label:String, order:Number, Tasks:Array}, //column, label: "week 1", order: [Taks, Task ,Task] for sorting purpose, 
    {label:String, order:Number, Tasks:Array},
]

// Task schema:
const Task = mongoose.model('Task', {
  jiraItem: {
    jiraID: String,
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
    creationTime: {
      type: Date
    },
    requirmentType: String,
    status: String
  },
  diffItem: {
    type: { type: String },
    updatedTime: Date,
    updatedFields: String,
    fieldName:String,
    oldVal: String,
    newVal: String
  },
  taskItem: {
    user: User,
    isDone: Boolean,
    updatedTime: Date
  }
});

// User schema:
const User = mongoose.model('User',{
userInfo:{
            employeeName: String,
            employeeEmail: Email,
            employeeRole: String,
            password: Password
    }
})