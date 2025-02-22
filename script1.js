


document.addEventListener("DOMContentLoaded", function () {
  // Typed.js initialization
  new Typed('#element', {
    strings: ['Web Designer', 'Frontend Developer', 'Web Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Progress Bars Animation on Scroll
  const progressBars = document.querySelectorAll('.progress');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const progress = progressBar.getAttribute('data-progress');
        progressBar.style.width = progress + '%';
        observer.unobserve(progressBar); // Stop observing once animated
      }
    });
  });

  progressBars.forEach(progressBar => observer.observe(progressBar));

  // Email.js initialization
  emailjs.init("_Coe68kz9jA1-CC5T");

  // Form submission
  const contactForm = document.getElementById("contact-form");
  const statusMessage = document.getElementById("status-message");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    statusMessage.textContent = "Sending...";
    statusMessage.style.color = "black";

    emailjs.sendForm("service_wkwrhqg", "template_9jz48ci", this)
      .then(
        function () {
          statusMessage.textContent = "Message sent successfully!";
          statusMessage.style.color = "#2c7fb8";
          contactForm.reset();
        },
        function (error) {
          statusMessage.textContent = "Failed to send message. Please try again.";
          statusMessage.style.color = "red";
          console.error("Email.js error:", error);
        }
      );
  });
});