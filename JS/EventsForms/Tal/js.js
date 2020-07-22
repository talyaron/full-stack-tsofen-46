function handleName(e) {
    console.log(e);

    const value = e.target.value;

    // add to root element
    const root = document.getElementById('root');
    root.innerText = value;
}

function handleDate(e) {
    console.log(e)
    console.dir(e.target)
    const key = e.key;

    if (key === 'Enter') {
        const inputDate = new Date(e.target.valueAsDate);


        const date = document.getElementById('date');
        date.innerText = inputDate.toLocaleDateString();
    }
}