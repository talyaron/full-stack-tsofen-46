function handleSubmit(e){
    e.preventDefault();
    console.log(e)

    const form = e.target;
   
    const firstname=form[0].value;
    const gender=form[1].value;
    const color=form[2].value;
    const date=form[3].value;

    const parg =document.getElementById("parg");

    if(gender==="female")
    parg.innerText=`ברוכה הבא ${firstname} התאריך  היום ${date}`
        else
    parg.innerText= `ברוך הבא ${firstname} תאריך היום ${date}`

    const body = document.getElementById("body");

    body.style.backgroundColor=color;
            
}