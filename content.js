// content.js

(function chat(){

  var people = [];

  if(typeof(Storage) !== "undefined") {
      var locPeople = localStorage.getItem("people");
      if(locPeople)
        people = JSON.parse(locPeople);
  }

  setTimeout(function(){
    var chatList = document.getElementsByClassName('_42fz');

    // alert(chatList.length);
    for(var x=0;x<chatList.length;x++){
      var txt = chatList[x].querySelector('._55lr').innerText;
      var online = chatList[x].querySelector('._568z i');

      for(p=0;p<people.length;p++) {
        if( txt === people[p] && online )
          console.log("Someone is online");
      }
    }

    chat();
  },5000);

})();
