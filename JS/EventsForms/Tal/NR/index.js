function handleSubmit(e) {
  e.preventDefault();
  const formAll = e.target;
  var arr = [];
  const textContentOutput = document.getElementById("textContentOutput");

  const root = document.getElementById("root");

  const formLength = formAll.length - 1;

  for (let i = 0; i < formLength; i++) {
    arr.push(formAll[i].value);
  }

  textContentOutput.innerText =
    " First name is " +
    arr[0] +
    " Last Name " +
    arr[1] +
    "  geneder is " +
    arr[2] +
    "  color  " +
    arr[3] +
    "  date is " +
    arr[4];
}
