const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 1900); // 2.5 seconds = 2500 milliseconds


function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();
  const agreeTerms = document.getElementById('agree-terms');
  const errorBox = document.getElementById('error-message');

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    errorBox.textContent = '⚠️ Please enter a valid email address.';
    return false;
  }

  // Terms agreement check for signup
  if (mode === 'signup' && !agreeTerms.checked) {
    errorBox.textContent = '⚠️ Please agree to the Terms and Conditions before continuing.';
    return false;
  }

  errorBox.textContent = '';
  alert(mode === 'signup' ? 'Signed Up Successfully!' : 'Logged In Successfully!');
  return true;
}
