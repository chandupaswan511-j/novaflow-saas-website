document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  const name = this.elements.name.value.trim();
  const message = document.getElementById("formMessage");
  message.textContent = `Thanks, ${name || "there"}! Your message has been recorded for this demo.`;
  this.reset();
});