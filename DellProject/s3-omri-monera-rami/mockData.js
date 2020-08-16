module.exports = [{
        jiraItem: {
            jiraId: "1",
            jiraName: "first jira",
            jiraType: "version",
            priority: "high",
            status: "in progress",
            specialFields: {
                jiraParentId: "1",
                functionalTest: true,
                qaRepresentative: "none",
                fixVersion: 1.1
            }
        },
        qcItem: {
            requirmentId: "15",
            creationTime: Date.now(),
            requirmentType: "none",
            status: "in progress"
        },
        diffItem: {
            diffItemType: "update",
            updateTime: Date.now(),
            updatedFields: [{
                    fieldName: "status",
                    oldVal: "in progress",
                    newVal: "done"
                },
                {
                    fieldName: "priority",
                    oldVal: "low",
                    newVal: "high"
                },
            ]
        }
    },
    {
        jiraItem: {
            jiraId: "2",
            jiraName: "second Jira",
            jiraType: "version",
            priority: "high",
            status: "done",
            specialFields: {
                jiraParentId: "1",
                functionalTest: true,
                qaRepresentative: "none",
                fixVersion: 1.1
            }
        },
        qcItem: {
            requirmentId: "15",
            creationTime: Date.now(),
            requirmentType: "none",
            status: "in progress"
        },
        diffItem: {
            diffItemType: "update",
            updateTime: Date.now(),
            updatedFields: [{
                fieldName: "assignee",
                oldVal: "assignee dev",
                newVal: "assignee pro"
            }, ]
        }
    },
    {
        jiraItem: {
            jiraId: "3",
            jiraName: "third jira",
            jiraType: "update",
            priority: "low",
            status: "in progress",
            specialFields: {
                jiraParentId: "1",
                functionalTest: true,
                qaRepresentative: "none",
                fixVersion: 1.1
            }
        },
        qcItem: {
            requirmentId: "15",
            creationTime: Date.now(),
            requirmentType: "none",
            status: "in progress"
        },
        diffItem: {
            diffItemType: "update",
            updateTime: Date.now(),
            updatedFields: [{
                fieldName: "status",
                oldVal: "done",
                newVal: "in progress"
            }, ]
        }
    },
    {
        jiraItem: {
            jiraId: "4",
            jiraName: "last jira",
            jiraType: "initiative",
            priority: "medium",
            status: "backlog",
            specialFields: {
                jiraParentId: "1",
                functionalTest: true,
                qaRepresentative: "none",
                fixVersion: 1.1
            }
        },
        qcItem: {
            requirmentId: "15",
            creationTime: Date.now(),
            requirmentType: "none",
            status: "inProgress"
        },
        diffItem: {
            diffItemType: "update",
            updateTime: Date.now(),
            updatedFields: [{
                    fieldName: "status",
                    oldVal: "done",
                    newVal: "backlog"
                },
                {
                    fieldName: "priority",
                    oldVal: "high",
                    newVal: "low"
                },
            ]
        }
    },
    {
        jiraItem: {
            jiraId: "10",
            jiraName: "third jira",
            jiraType: "update",
            priority: "low",
            status: "in progress",
            specialFields: {
                jiraParentId: "1",
                functionalTest: true,
                qaRepresentative: "none",
                fixVersion: 1.1
            }
        },
        qcItem: {
            requirmentId: "15",
            creationTime: Date.now(),
            requirmentType: "none",
            status: "in progress"
        },
        diffItem: {
            diffItemType: "update",
            updateTime: Date.now(),
            updatedFields: [{
                fieldName: "status",
                oldVal: "in progress",
                newVal: "backlog"
            }, ]
        }
    },
]