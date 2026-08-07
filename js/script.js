// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Contact form validation (static demo — no backend)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var message = document.getElementById('message').value.trim();

      if (!name || !phone || !message) {
        status.textContent = 'Please fill in your name, phone number, and message.';
        status.className = 'form-status err';
        return;
      }
      var phonePattern = /^[0-9+\-\s]{10,15}$/;
      if (!phonePattern.test(phone)) {
        status.textContent = 'Please enter a valid phone number.';
        status.className = 'form-status err';
        return;
      }
      status.textContent = 'Thanks, ' + name + '! Your message has been received — we will call you back shortly.';
      status.className = 'form-status ok';
      form.reset();
    });
  }
});
