function handleSubmit(e) {

    e.preventDefault();

    console.log(e)

    const form = e.target;
    const formLength = form.length - 1;

    let output = ''
    for (let i = 0; i < formLength; i++) {
        const { name, type, value } = form[i];

        if (name === 'firstName') output += `שלום ${value}`;
        
        if (name === 'date') output += `התאריך הוא ${value}`;
       
    }

    document.getElementById('output').innerText = output




}