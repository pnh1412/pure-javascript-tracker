document.getElementById("btnAdd").addEventListener("click", function () {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;
  const registrationDate = new Date().toLocaleDateString();

  const userData = {
    firstName,
    lastName,
    email,
    role,
    registrationDate,
  };

  fetch('https://tony-auth-express.vercel.app/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then(data => {
      console.log('Success:', data);
      alert('User registered successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error registering user. Please try again.');
    });
});
