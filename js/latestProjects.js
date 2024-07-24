//Add the latest 3 projects to a page automatically
$.ajax({
  type: "GET",
  url: "Labs/ITWS1100-Lab8-JSONAJAX/projects.json",
  dataType: "json",
  success: function(responseData, status){
   var output = '<div class = "projs">';  
   //For every project get data and display
   project = responseData.projects;
   for (let i = project.length - 1; i > project.length - 4; i--){
    output += '<a href="' + project[i].location + '">';
    output += '<h2>' + project[i].labNum + " - "+ project[i].title + '</h2>'
    output += '<img title="' + project[i].title + '" width = "100" height = "100" src="' + project[i].imageLink + '" alt="' + project[i].title + '" />';
    output += '</a>';
    output += '<ul>';
    listItems = project[i].description.split(". ");
    for (x in listItems){
      output += "<li class ='desc'>" + listItems[x] +"</li>";
    }
    output += '</ul>';
    // Could not get surrounding div to work with sizing so used breaks to size the div based on # of lines
    if (listItems.length < 6){
      for (let i = 0; i < 6 - listItems.length; i++){
        output += "<br>"
      }
    }
   }
    // Could not get surrounding div to work with sizing so used breaks to size the div based on # of lines
    output += "</ul>";
  output += "</div>";
  $('#fProjects').append(output);
  }, error: function(msg) {
        // there was a problem
    alert("There was a problem: " + msg.status + " " + msg.statusText);
  }
});
