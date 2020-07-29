const input = document.getElementById("inputName");
const button = document.getElementById("ok");
const p = document.getElementById("result");

let name = "";

input.addEventListener("keyup", (e) => (name = e.target.value));
button.addEventListener("click", (e) =>
  fetch("/names", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) p.innerHTML = data;
      else p.innerHTML = "NOOOOOOOOOOO";
    })
);
