

function handleSubmit(e) {

    e.preventDefault();
    console.log(e);

    const form = e.target;

    const name = form[0].value;
    const gender = form[1].value;
    const color = form[2].value;
    const date = 2020 - form[3].valueAsDate.getFullYear();

    const root = document.getElementById('root');
    if (gender === 'male') {
        const str = `שלום ${name}
        ברוך הבא
        הצבע שלך ברקע
        מזל טוב ליום הולדתך ה${date}`

        root.innerText = str;
        console.log(str);
    }else{
        
        const str = `שלום ${name}
        ברוכה הבאה
        הצבע שלך ברקע
        מזל טוב ליום הולדתך ה${date}`

        root.innerText = str;
        console.log(str);
    }

    document.body.style.backgroundColor = color;
    

}


