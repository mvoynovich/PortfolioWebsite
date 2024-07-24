//On window load, adds the side navigation bar to the page
$(window).ready(function(){
  out = "<div id = 'menu'>";
  //Profile picture
  out += '<div class = "pfp"><img src="resources/ProfilePicture.jpg" width = "150" alt="Profile Picture of Matthew Voynovich"></div>';
  // Home link
  out += '<a href = "index.html"><div class = "home"><h1>Home</h1></div></a>';
  //Projects page link
  out += '<a href = "pages/projects.html"><div class = "projects"><h1>Projects</h1></div></a>';
  // Web Resume link
  out += '<a href = "pages/webResume.html"><div class = "resume"><h1>Resume</h1></div></a>';
  //Linked In
  out += '<a href = "https://www.linkedin.com/in/matthew-c-voynovich/"><div class = "linkedin"><h1>LinkedIn</h1></div></a>';
  //
  out += '<a href = "https://github.com/mvoynovich"><div class = "gitHub"><h1>GitHub</h1></div></a>';
  //filler
  out += '<div class = "filler"><p>Contact Info:<br>(917)-391-8499<br>Voynovich.Matt@gmail.com</p></div>';
  //Close side nav and add to page
  out += "</div>";
  $("body").prepend(out);
})

// Actual HTML template
  /* <div id="menu">
      <div class = "pfp">
        <img src="/resources/ProfilePicture.jpg" width = "150" alt="Profile Picture of Matthew Voynovich">
      </div>
      <a href = "/index.html">
        <div class = "home">
          <h1>Home</h1>
        </div>
      </a>
      <a href = "/pages/projects.html">
        <div class = "projects">
          <h1>Projects</h1> 
        </div>
      </a>  
      <a href = "/pages/webResume.html">
        <div class = "resume">
          <h1>Resume</h1>
        </div>  
      </a> 
      <a href = "https://www.linkedin.com/in/matthew-c-voynovich/">
        <div class = "linkedin">
          <h1>LinkedIn</h1>
        </div>
      </a>
      <div class = "filler">
        <p>
          Contact Info:<br>
          (917)-391-8499<br>
          Voynovich.Matt@gmail.com
        </p>
      </div>  
    </div> */
    /*
        template for adding or changing sections
        <a href = "[insert link to page or file of new secton]">
          <div class = "[name of section]">
            <h1>[title of section]</h1>
          </div>
        </a> 
    */