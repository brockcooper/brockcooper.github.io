
// Bio object
var bio = {
  "name": "Brock Cooper",
  "role": "Software Developer",
  "skills": ["Ruby", "Rails", "JavaScript", "Java", "HTML/CSS", "SQL", "Database Design and Theory", "Finance/Accounting" ],
  "welcomeMessage": "Brock Cooper's Resume",
  "bioPic": "images/brocks_photo.png",
  "contact_info" :{
    "location": "Salt Lake City, UT",
    "placesLived": ["Tacoma, WA", "Guatemala City, Guatemala"],
    "email": "brockcooper@gmail.com",
    "mobile": "(214) 769-3598",
    "website": "iambrockcooper.com",
    "linkedin": "brockcooper",
    "github": "brockcooper"
  }
};

bio.display = function (){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
  var formattedEmail = HTMLemail.replace(/%data%/g, bio.contact_info.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contact_info.mobile);
  var formattedLinkedIn = HTMLlinkedin.replace(/%data%/g, bio.contact_info.linkedin);
  var formattedGitHub = HTMLgithub.replace(/%data%/g, bio.contact_info.github);
  var formattedWebsite = HTMLwebsite.replace(/%data%/g, bio.contact_info.website);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts:last").append(formattedEmail);
  $("#topContacts:last").append(formattedWebsite);
  $("#topContacts:last").append(formattedLinkedIn);
  $("#topContacts:last").append(formattedGitHub);
  $("#topContacts:last").append(formattedLocation);
  $("#header").append(formattedBioPic);
  $("#header").append(HTMLskillsStart);


  for (skill in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkills);
  }

  $("#footerContacts:last").append(formattedEmail);
  $("#footerContacts:last").append(formattedWebsite);
  $("#footerContacts:last").append(formattedLinkedIn);
  $("#footerContacts:last").append(formattedGitHub);
  $("#footerContacts:last").append(formattedLocation);

}

// Education object
var education = {
  "schools": [
    {
      "name": "University of Utah",
      "location": "Salt Lake City, UT",
      "degree": "Master of Science",
      "dates": "2014 - 2015",
      "major": "Information Systems",
      "url": "http://msis.business.utah.edu/"
    },
    {
      "name": "Brigham Young University - Idaho",
      "location": "Rexburg, ID",
      "degree": "Bachelor of Science",
      "dates": "2010 - 2012",
      "major": "Accounting",
      "url": "http://www.byui.edu/"
    }
  ]
,
  "onlineCourses": [
    {
      "title": "Full Stack Web Development",
      "school": "Bloc.io",
      "dates": "2015",
      "url": "https://www.bloc.io/web-development-bootcamp"
    },
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

education.display = function () {
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name); 
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree); 
    formattedNameDegree = formattedName + formattedDegree;
    formattedNameDegree = formattedNameDegree.replace("#", education.schools[school].url);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates); 
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location); 
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major); 


    $(".education-entry:last").append(formattedNameDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);   
  }
  for (course in education.onlineCourses){
    $("#online-education").append(HTMLonlineStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].school); 
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].title); 
    formattedTitleSchool = formattedTitle + formattedSchool;
    formattedTitleSchool = formattedTitleSchool.replace("#", education.onlineCourses[course].url);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates); 


    $(".online-entry:last").append(formattedTitleSchool);
    $(".online-entry:last").append(formattedDates);
  }
};

// Work object
var work = {
  "jobs": [
    {
      "employer": "Instructure",
      "title": "Software Engineer Intern",
      "location": "Salt Lake City, UT",
      "dates": "May 2015 - August 2015",
      "description": ["Developing skills in Ruby on Rails and JavaScript"],
      "url": "http://www.instructure.com/"
    },
    {
      "employer": "Marketware",
      "title": "Business Intelligence Developer",
      "location": "Salt Lake City, UT",
      "dates": "October 2014 - May 2015",
      "description": [
        "Worked with health care clients across the country to assess their business needs, implement Marketware software, create reports and dashboards, and provide continuing database and technical support", 
        "Gained technical skills in SQL Server, advanced SQL queries, database theory, creating ETL processes, VBA Macros, report development, and dashboard development using Tableau"
        ],
        "url": "http://marketware.com/"
    },
    {
      "employer": "PricewaterhouseCoopers",
      "title": "Audit Associate",
      "location": "Dallas, TX",
      "dates": "August 2012 - August 2014",
      "description": [
        "Provided external audit services to clients in manufacturing, pharmaceutical, and software industries", 
        "Project-managed a multimillion dollar project and coached a team of 7 associates to ensure the quality and timeliness of their work was according to plan", 
        "Led a team of 4 associates to complete an annual audit in 2 fewer weeks and with half the cost as compared to the prior year audit", 
        "Reviewed financial statements and investigated unusual trends and interrelationships as part of annual audit", "Developed meaningful relationships with key client contacts, maintaining open lines of communication"
        ],
        "url": "http://www.pwc.com/us/en/index.jhtml"
    }
  ]
}

work.display = function (){
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    formattedEmployerTitle = formattedEmployerTitle.replace("#", work.jobs[job].url);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    var allFormattedDescriptions = "<br>";
    for (point in work.jobs[job].description) {
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[point]);
      allFormattedDescriptions = allFormattedDescriptions + formattedDescription;
    }

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(allFormattedDescriptions);
  }
}



// Projects Object
var projects = {
  projects: [
    {
      "title": "Open Todo",
      "dates": "2015",
      "description": "To-do web application and an open API made with Ruby on Rails and jQuery",
      "images": "images/open_todo_screenshot.png",
      "url": "https://github.com/brockcooper/open_todo"
    },
    {
      "title": "Blackjack",
      "dates": "2014",
      "description": "Blackjack web application made with Ruby, Sinatra, and Ajax",
      "images": "images/blackjack_screenshot.png",
      "url": "https://github.com/brockcooper/blackjack_online"
    },
  ]
}

projects.display = function () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedImages);
  }
}

// Display stuff on resume
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

























