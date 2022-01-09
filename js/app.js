window.sr = ScrollReveal();

sr.reveal(".main-nav", {
    duration: 1000,
    // delay: "1000",
    origin: "top",
    distance: "60px",
  });

  sr.reveal(".main-text", {
    duration: 1000,
    // delay: "1000",
    origin: "top",
    distance: "60px",
  });

  sr.reveal(".about-sect-cont", {
    duration: 1000,
    delay: "200",
    origin: "bottom",
    distance: "20px",
  });

  sr.reveal(".services-sect-cont", {
    duration: 1000,
    delay: "200",
    origin: "bottom",
    scale: 0.99,
    distance: "20px",
  });

  sr.reveal(".services-text2", {
    duration: 1000,
    delay: "200",
    origin: "bottom",
    // scale: 0.99,
    distance: "20px",
  });

  sr.reveal(".techs-cont", {
    duration: 1000,
    delay: "200",
    origin: "bottom",
    // scale: 0.99,
    distance: "20px",
  });

  sr.reveal(".portfolio-text", {
    duration: 1000,
    delay: "200",
    origin: "bottom",
    // scale: 0.99,
    distance: "20px",
  });

  sr.reveal(".portfolio-card", {
    duration: 1000,
    delay: "200",
    origin: "bottom",
    // scale: 0.99,
    distance: "20px",
  });

  sr.reveal(".contact", {
    duration: 1000,
    delay: "200",
    origin: "bottom",
    // scale: 0.99,
    distance: "20px",
  });

  sr.reveal(".footer", {
    duration: 1600,
    delay: "200",
    origin: "bottom",
    // scale: 0.99,
    distance: "10px",
  });

function clickDrD(){
    const dropdown = document.querySelector('.dd');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; 
}
