function register() {
  const name = document.getElementById("regName")?.value.trim();
  const email = document.getElementById("regEmail")?.value.trim();
  const password = document.getElementById("regPassword")?.value.trim();
  const msg = document.getElementById("regMsg");

  if (!name || !email || !password) {
    alert("Please fill in all fields!");
    if (msg) {
      msg.textContent = "Please fill in all fields!";
      msg.className = "msg error";
    }
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    if (msg) {
      msg.textContent = "Password must be at least 6 characters!";
      msg.className = "msg error";
    }
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const emailExists = users.some(user => user.email === email);

  if (emailExists) {
    alert("Email already registered!");
    if (msg) {
      msg.textContent = "Email already registered!";
      msg.className = "msg error";
    }
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");

  if (msg) {
    msg.textContent = "Registration successful! Redirecting...";
    msg.className = "msg success";
  }

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

function login() {
  const email = document.getElementById("loginEmail")?.value.trim();
  const password = document.getElementById("loginPassword")?.value.trim();
  const msg = document.getElementById("loginMsg");

  if (!email || !password) {
    alert("Please enter email and password!");
    if (msg) {
      msg.textContent = "Please enter email and password!";
      msg.className = "msg error";
    }
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    user => user.email === email && user.password === password
  );

  if (!validUser) {
    alert("Invalid email or password!");
    if (msg) {
      msg.textContent = "Invalid email or password!";
      msg.className = "msg error";
    }
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(validUser));

  alert("Login successful!");

  if (msg) {
    msg.textContent = "Login successful! Redirecting...";
    msg.className = "msg success";
  }

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
}

function checkAuth() {
  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!currentUser) {
    alert("You must login first!");
    window.location.href = "index.html";
  }
}

function logout() {
  alert("Logged out successfully!");
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
