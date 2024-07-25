$.ajax({
  type: "GET",
  url: "Labs/ITWS1100-Lab8-JSONAJAX/projects.json",
  dataType: "json",
  success: function(responseData, status){
   var output = '<div class = "projs">';  
   //For every project get data and display
   $.each(responseData.projects, function(i, project) {
    output += '<a href="' + project.location + '">';
    output += '<h3>' + project.labNum + " - "+project.title + '</h3>'
    
    output += '</a>';
    output += project.description;
  });
  output += "</div>";
  $('#allProjects').append(output);
}, error: function(msg) {
        // there was a problem
  alert("There was a problem: " + msg.status + " " + msg.statusText);
}
});


