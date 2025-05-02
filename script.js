// Retrieve the stored theme from localStorage and apply it
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }
  };
  
  // Trigger animation on button click
  document.getElementById('animateButton').addEventListener('click', () => {
    const button = document.getElementById('animateButton');
    button.classList.add('animate');
  
    // Remove the animation class after it finishes so it can be triggered again
    setTimeout(() => {
      button.classList.remove('animate');
    }, 1000);
  
    // Trigger the image animation as well
    const image = document.getElementById('animatedImage');
    image.classList.add('animate');
  
    // Remove the image animation class after it finishes
    setTimeout(() => {
      image.classList.remove('animate');
    }, 2000);
  });
  
  // Toggle between light and dark mode, and store preference in localStorage
  document.getElementById('toggleThemeButton').addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    
    // Toggle the theme
    document.body.classList.toggle('dark-mode');
    
    // Store the new theme in localStorage
    localStorage.setItem('theme', newTheme);
  });
  