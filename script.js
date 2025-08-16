// Contact Info Card Tooltip Logic
document.addEventListener('DOMContentLoaded', function () {
  const contactRows = document.querySelectorAll('.contact-info-card .contact-row');
  contactRows.forEach(row => {
    const icon = row.querySelector('.contact-icon');
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', function (e) {
      e.stopPropagation();
      // Hide all other tooltips
      contactRows.forEach(r => r.classList.remove('show-tooltip'));
      // Show this one
      row.classList.add('show-tooltip');
    });
  });
  // Hide tooltip when clicking outside
  document.addEventListener('click', function () {
    contactRows.forEach(r => r.classList.remove('show-tooltip'));
  });
});
// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('navList');
  hamburger.addEventListener('click', function() {
    navList.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
  // Close menu on nav link click (mobile)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });
  // Contact form submission (dummy, just for UI)
//   const form = document.getElementById('contactForm');
//   if(form) {
//     form.addEventListener('submit', function(e) {
//       e.preventDefault();
//       alert('Thank you for reaching out! I will get back to you soon.');
//       form.reset();
//     });
//   }
});
// ...existing code...


// document.getElementById("contactForm").addEventListener("submit", function(e) {
//       e.preventDefault();
//       const form = this;

//       emailjs.sendForm("service_3ltob9f", "template_wey0qwn", form)
//         .then(function(response) {
//           document.getElementById("statusMsg").innerText = "Message sent successfully!";
//           form.reset();
//         }, function(error) {
//           console.error("EmailJS Error:", error); // Log the full error
//           document.getElementById("statusMsg").innerText = "Message failed to send. Please try again.";
//         });
//     });

    // document.getElementById("contactForm").addEventListener("submit", function(e) {
    //   e.preventDefault(); // Prevent default form submission

    //   const form = this;
    //   const statusMsg = document.getElementById("statusMsg");

    //   emailjs.sendForm("service_3ltob9f", "template_wey0qwn", form)
    //     .then(function(response) {
    //       console.log("SUCCESS!", response.status, response.text);
    //       statusMsg.style.color = "green";
    //       statusMsg.innerText = "Message sent successfully!";
    //       form.reset(); // Clear form after success
    //     }, function(error) {
    //       console.error("FAILED...", error);
    //       statusMsg.style.color = "red";
    //       statusMsg.innerText = "Message failed to send. Please check console.";
    //     });
    // });

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;

    emailjs.sendForm("service_3ltob9f", "template_wey0qwn", form)
      .then(function (response) {
        document.getElementById("statusMsg").innerText = "Message sent successfully!";
        form.reset();
      }, function (error) {
        console.error("EmailJS Error:", error);
        document.getElementById("statusMsg").innerText = "Message failed to send. Please try again.";
      });
  });

