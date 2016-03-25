


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "online" ) {
      // var myAudio = new Audio("notif.mp3");
      // myAudio.play();
      // chrome.tabs.create({"url": request.url});
    }
  }
);
