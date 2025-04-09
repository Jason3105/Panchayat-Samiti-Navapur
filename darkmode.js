// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create dark mode toggle button
  const darkModeToggle = document.createElement('button');
  darkModeToggle.classList.add('dark-mode-toggle');
  
  // Create icons for light/dark mode
  const lightIcon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
  const darkIcon = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  
  // Initialize dark mode based on user preference
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let isDarkMode = localStorage.getItem('darkMode') === 'true' || (localStorage.getItem('darkMode') === null && prefersDarkMode);
  
  // Function to set theme
  function setTheme(darkMode) {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (darkModeToggle) {
        darkModeToggle.innerHTML = lightIcon + '<span>Light Mode</span>';
      }
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      if (darkModeToggle) {
        darkModeToggle.innerHTML = darkIcon + '<span>Dark Mode</span>';
      }
    }
  }
  
  // Apply initial theme immediately
  setTheme(isDarkMode);
  
  // Add toggle button to the navigation
  const nav = document.querySelector('nav ul');
  if (nav) {
    const liElement = document.createElement('li');
    liElement.appendChild(darkModeToggle);
    nav.appendChild(liElement);
    
    // Toggle functionality
    darkModeToggle.addEventListener('click', function() {
      isDarkMode = !isDarkMode;
      setTheme(isDarkMode);
      localStorage.setItem('darkMode', isDarkMode);
    });
  } else {
    console.error("Navigation menu not found! Dark mode toggle could not be added.");
  }
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (localStorage.getItem('darkMode') === null) {
      isDarkMode = event.matches;
      setTheme(isDarkMode);
    }
  });
});