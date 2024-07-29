//On window load, adds the side navigation bar to the page
$(window).ready(function(){
  out = '<header id = "navigation">';
  out += '<a href = "./index.html" class = "name">Matthew Voynovich</a>';
  out += '<nav class = "navbar">';
  out += '<a href = "/index.html#aboutContainer">Home</a>';
  out += '<a href = "/Labs/ITWS1100-Lab02-HTML/Voynom-MatthewVoynovich-resume.html">Resume</a>';
  out += '<a href = "/index.html#projectsContainer">Projects</a>';
  out += '<a href = "#">Contact</a>';
  out += '<a href = "https://github.com/mvoynovich" target ="_blank">Github</a>';
  out += '<a href = "https://www.linkedin.com/in/matthew-c-voynovich" target ="_blank">LinkedIn</a>';
  out += '</nav>';
  out += '</header>';
  $("#aboutContainer").prepend(out);
});
