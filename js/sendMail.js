async function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  Email.send({
    SecureToken: "d44a128d-7b26-43e2-b459-6f8022fab333",
    To: `rockzydev@gmail.com`,
    From: "rockzydev@gmail.com",
    Subject: "New Message From Rockzy.me",
    Body:  `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
  }).then(function (message) {
    alert("mail sent successfully");
  });
  }
