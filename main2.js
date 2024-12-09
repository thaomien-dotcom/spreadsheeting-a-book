
document.addEventListener('DOMContentLoaded', function() {
  // Function to generate a random value between 1 and 900
  function getRandomValue() {
    return Math.floor(Math.random() * 900) + 1;
  }
  function getRandomValue2() {
    return Math.floor(Math.random() * 2) + 1;
  }
  // Select the title element
  const title = document.querySelector('.title');

  // Function to update the font-variation-settings with random values
  function updateTitleStyle() {
    const randomRect = getRandomValue();
    const randomBack = getRandomValue();
    const randomWght = getRandomValue();
    const randomElsh = getRandomValue2();
    // Update the font-variation-settings with the random values
    title.style.fontVariationSettings = `"ELSH" ${randomElsh}, "RECT" ${randomRect}, "BACK" ${randomBack}, "wght" ${randomWght}`;
  }

  let animationCount = 0;
  const maxAnimations = 3;
  const intervalDuration = 500; // Time between style changes (in ms)
  
  const interval = setInterval(() => {
    updateTitleStyle();
    animationCount++;
    if (animationCount >= maxAnimations) {
      clearInterval(interval); // Stop the interval after 5 updates
    }
  }, intervalDuration);

  // Smooth transition for the styles
  title.style.transition = 'font-variation-settings 0.3s ease';

  // Trigger the style update on hover (mouseover)
  title.addEventListener('mouseover', function() {
    updateTitleStyle();
  });

  // Optional: Add smooth transition when hover happens
  title.style.transition = 'font-variation-settings 0.4s ease';

  title.addEventListener('click', function() {
    // Add the animation class to trigger the upward movement and fade-out
    title.classList.add('animate-title');

    // Wait for the duration of the animation before redirecting (100ms to match the hover style transition)
    setTimeout(() => {
      window.location.href = "index.html";  
    }, 300);
  });
});


 

