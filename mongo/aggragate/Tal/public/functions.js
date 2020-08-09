function getData() {
    for (let i = 0; i < 20; i++) {
        console.log(i)
        fetch('/api/random').then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
}

