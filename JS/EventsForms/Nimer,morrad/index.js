function handleSubmit(e){
    e.preventDefault();
    console.log(e)
    const form = e.target;
    const firstName = form[0].value
    const gender = form[1].value
    const color = form[2].value
    const date = form[3].value

    const parg = document.getElementById("par")
        if(gender==="Female")
        parg.innerText=`שלום ${firstName} ברוכה הבאה ומזל טוב ליום הולדתך שמתקיים ב ${date}`
        else
        parg.innerText=`שלום ${firstName} ברוך הבא ומזל טוב ליום הולדתך שמתקיים ב ${date}`
        const body = document.getElementById('body')
        body.style.backgroundColor=color;
        
    }