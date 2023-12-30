function handleLogin() {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  if (emailInput === "admin@email.com" && passwordInput === "1") {
    window.location.href = "./index.html";
    return false; // Ngăn chặn form submit để tránh tải lại trang
  } else {
    alert("Error");
    return false;
  }
}
