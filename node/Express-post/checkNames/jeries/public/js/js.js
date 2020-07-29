function senddata(e) {
    e.preventDefault();
    console.log(e)
    const form = e.target;
    const name=form[0].value;

            fetch('/reaction', {
                method: 'POST',
                body: JSON.stringify({ name }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    const { isExits } = data;
                    console.log("dasdas",isExits);
                
                    const nam=document.getElementById("result")
                    nam.innerText=isExits  ;
                })
        }

