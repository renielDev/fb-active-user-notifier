// content.js

(function chat(){

  var people = [];

  if(typeof(Storage) !== "undefined") {
      var locPeople = localStorage.getItem("people");
      if(locPeople)
        people = JSON.parse(locPeople);
  }

  function checkOpen(person) {
    var chatBoxes = document.getElementsByClassName("fbNubButton");
    for(var x=0; x<chatBoxes.length; x++) {
      var personName = chatBoxes[x].querySelector('.wrap .name span');
      if(personName && personName.innerText === person)
        return true;
    }
    return false;
  }

  setTimeout(function(){
    var chatList = document.getElementsByClassName('_42fz');

    // alert(chatList.length);
    for(var x=0;x<chatList.length;x++) {
      var txt = chatList[x].querySelector('._55lr').innerText;
      var online = chatList[x].querySelector('._568z i');
      var anchr = chatList[x].querySelector('a');

      chatList[x].click();
      for(p=0;p<people.length;p++) {
        if( txt === people[p] && online ) {
          console.log("Someone is online");
          // if(!checkOpen(people[p]))
            // chrome.runtime.sendMessage({"message": "online"});
        }
      }
    }

    chat();
  },5000);

})();
