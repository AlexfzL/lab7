var projects = require('../projects.json')['projects'];

exports.projectInfo = function(request, response) {
  var projectID = request.params.id;
  var project = getProjectData(projectID);
  response.json(project);
}

exports.view = function(request, response) {
  var projectID = request.params.id;
  var project = getProjectData(projectID);
  response.render('project', project);
}

function getProjectData(projectID) {
  if (projectID == "random") {
    projectID = Math.floor(Math.random() * projects.length) + 1;
  } else {
    projectID = parseInt(projectID);
  }
  var project = projects[projectID - 1]; // of by one, our first project has index 0
  return project;
}