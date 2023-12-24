function handleLogin() {
  // Lấy giá trị của email và password từ các ô input
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  if (emailInput === "admin@email.com" && passwordInput === "1") {
    // Nếu chính xác, chuyển hướng sang trang index.html
    window.location.href = "./index.html";
    return false; // Ngăn chặn form submit để tránh tải lại trang
  } else {
    alert("Error");
    return false;
  }
}
