const fetch = require('node-fetch');

const Data = { "bla": "bla" }
const user_id = "bella_user";
const user_pass = "bella_pass";

const body = { a: 1 };

fetch('http://localhost:3000/GetBellaData', {
    method: 'post',
    body: JSON.stringify({
        user_id, user_pass, body
    }),
    headers: { 'Content-Type': 'application/json' },
})
    .then(res => res.json())
    .then(json => console.log(json));
