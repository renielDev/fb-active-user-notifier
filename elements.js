// add container tracker
var fbTrack = document.createElement("div");
fbTrack.className = "fb-track";
fbTrack.id = 'fb_track';
document.body.appendChild(fbTrack);

// add list
var trackList = document.createElement('ul');
trackList.id = "track_list";
fbTrack.appendChild(trackList);

// toggle button
var fbToggle = document.createElement('button');
fbToggle.id = "fb_toggle";
fbToggle.className = "_4jy0 _4jy3 _4jy1";
fbTrack.appendChild(fbToggle);

var addPerson = document.createElement('button');
addPerson.id = "fb_track_add";
addPerson.className = "_4jy0 _4jy3 _4jy1";
var txtNode = document.createTextNode("Add");
addPerson.appendChild(txtNode);

fbTrack.appendChild(addPerson);

var fbNotif = document.createElement("div");
fbNotif.className = "fb-notif";
fbNotif.id = "fbNotif";
document.body.appendChild(fbNotif);

// Events
function poluteList(people) {
  for(var x=0;x<people.length;x++) {
    var li = document.createElement('li');
    txtNode = document.createTextNode(people[x]);
    li.appendChild(txtNode);
    trackList.appendChild(li);
  }
}

var people = [];

if(typeof(Storage) !== "undefined") {
    var locPeople = localStorage.getItem("people");
    if(locPeople)
      people = JSON.parse(locPeople);

    poluteList(people);
}

addPerson.addEventListener("click", function(){
  var add = prompt("Add person", "");
  if(add) {
    people.push(add);
  };
  localStorage.setItem("people", JSON.stringify(people));
});

fbToggle.addEventListener("click", function() {
  var hasClass = fbTrack.classList.contains('is-out');
  fbTrack.classList[ (hasClass) ? 'remove' : 'add' ]('is-out');
});
