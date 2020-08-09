async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const imgSrc = form[0].form[0].value;
    const username = form[1].form[1].value;

    try {
        await fetch("/api/auth", {
            method: "post",
            body: JSON.stringify({
                imgSrc,
                username
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })

        localStorage.setItem("user", username);
        window.location.href = '../pages/twitter.html';
    } catch (error) {
        console.log(error);
    }
}