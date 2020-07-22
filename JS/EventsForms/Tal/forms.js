function handleSubmit(e){
    
    e.preventDefault();
    
    console.log(e)

    const form = e.target;
    const formLength = form.length -1;

    for(let i= 0; i<formLength;i++){
        console.log(form[i].name, form[i].type, form[i].value)
    }

            
}