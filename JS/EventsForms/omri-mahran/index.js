const state = {
    name: "",
    gender: "",
    color: "",
    date: "",
}

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    mapFormToState(form);
    const date = new Date(state.date);
    const age = calculateAge(date);

    const {
        name,
        gender,
        color
    } = state;

    const p = document.getElementById("mainPar");

    p.innerText = `Hello ${name},
    Welcome to our amazing site.
    your are a ${gender} :).
    and your age is ${age}`

    document.body.style.backgroundColor = color;

}


function calculateAge(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function mapFormToState(form) {
    for (let i = 0; i < form.length - 1; i++)
        state[form[i].form[i].name] = form[i].form[i].value;

}