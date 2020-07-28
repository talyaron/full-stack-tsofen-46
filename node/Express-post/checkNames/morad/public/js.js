function post(){
    const name = document.getElementById("name").value;
    fetch('/searchName', {
        method: 'POST',
        body: JSON.stringify({name}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            console.dir(data)
            if(data.success === true)
             {
                 document.getElementById("answer").innerText = true;
             }
             else{
                document.getElementById("answer").innerText = false;
             }
            // const { avg } = data;
            // console.log(avg);
            // document.getElementById('avg').innerText = avg.toFixed(2)
        })
}

function mySubmitFunction(e){
    e.preventDefault();
}