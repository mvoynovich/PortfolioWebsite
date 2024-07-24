$.ajax({
  type: "GET",
  url: "Labs/ITWS1100-Lab8-JSONAJAX/projects.json",
  dataType: "json",
  success: function(responseData, status){
   var output = '<div class = "projs">';  
   //For every project get data and display
   $.each(responseData.projects, function(i, project) {
    output += '<a href="' + project.location + '">';
    output += '<h2>' + project.labNum + " - "+project.title + '</h2>'
    output += '<img title="' + project.title + '" width = "100" height = "100" src="' + project.imageLink + '" alt="' + project.title + '" />';
    output += '</a>';
    output += '<ul>';
    listItems = project.description.split(". ");
    for (x in listItems){
      output += "<li>" + listItems[x] +"</li>";
    }
    // Could not get surrounding div to work with sizing so used breaks to size the div based on # of lines
    if (listItems.length < 6){
      for (let i = 0; i < 6 - listItems.length; i++){
        output += "<br>"
      }
    }
    output += "</ul>";
  });
  output += "</div>";
  $('#allProjects').append(output);
}, error: function(msg) {
        // there was a problem
  alert("There was a problem: " + msg.status + " " + msg.statusText);
}
});


