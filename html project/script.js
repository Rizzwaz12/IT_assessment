document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      sendEmail();
    });
  });
  
  function sendEmail() {
    const fullName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userPhone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    const bodyMessage = `Full Name: ${fullName}<br>Email: ${userEmail}<br>Phone Number: ${userPhone}<br>Subject: ${subject}<br>Your Message: ${message}<br>`;
  
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "riobazz10@gmail.com",
      Password: "642E8C31ACDDC03932E034FAFE4D1F271E57",
      To: 'riobazz10@gmail.com',
      From: "riobazz10@gmail.com",
      Subject: subject,
      Body: bodyMessage
    }).then(function(response) {
      if (response === 'OK') {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Email sent successfully!',
          confirmButtonText: 'OK'
        });
      } else {
        console.error(response);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send email. Please try again later.',
          confirmButtonText: 'OK'
        });
      }
    }).catch(function(error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send email. Please try again later.',
        confirmButtonText: 'OK'
      });
    });
  }
  