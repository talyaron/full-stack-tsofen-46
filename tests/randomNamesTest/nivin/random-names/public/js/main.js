let userRegistrationData = {};
let userLoginData = {};
function onRegisterElementsChange(elem) {
  userRegistrationData[elem.id] = elem.value;
  console.log(userRegistrationData);
}

const register = () => {
  if (
    !userRegistrationData.email ||
    !userRegistrationData.password ||
    !userRegistrationData.username
  ) {
    alert("all values are required!");
    return;
  }

  fetch("/users/register", {
    method: "POST",
    body: JSON.stringify({
      ...userRegistrationData,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      window.location.href = "/login";
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};

// login

function onLoginElementsChange(elem) {
  userLoginData[elem.id] = elem.value;
  console.log(userLoginData);
}

const login = () => {
  // if (!validValues()) alert('all values are required!');

  fetch("/users/login", {
    method: "POST",
    body: JSON.stringify({
      ...userLoginData,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.user) {
        localStorage.setItem("user", JSON.stringify(res.user));
        window.location.href = "/";
      } else {
        alert("User not found!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const redirectToRegister = () => {
  window.location.href = "/register";
};
