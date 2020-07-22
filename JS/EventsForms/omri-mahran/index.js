function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const name = form[0].value;
    const gender = form[1].value;
    const color = form[2].value;
    const date = new Date(form[3].value);
    const age = calculateAge(date);

    const p = document.getElementById("mainPar");
    p.innerText = `Hello ${name},
    Welcome to our amazing site.
    your are a ${gender} :).
    and your age is ${age}`

    document.body.style.backgroundColor = color;
    console.dir(form);
}


function calculateAge(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}