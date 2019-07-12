var sec = 0;
function pad(val) {
    return val > 9
        ? val
        : "0" + val;
}
var myTimer = setInterval(function () {
    document.getElementById('seconds').innerHTML = pad(++sec % 60)
    // $("#seconds").html(pad(++sec % 60));
    // $("#minutes").html(pad(parseInt(sec / 60, 10)));
}, 1000);
function myStopFunction() {
    clearInterval(myTimer);
}


let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

async function install() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    console.log(deferredPrompt)
    deferredPrompt.userChoice.then(function(choiceResult){

      if (choiceResult.outcome === 'accepted') {
      console.log('Your PWA has been installed');
    } else {
      console.log('User chose to not install your PWA');
    }

    deferredPrompt = null;

    });

 
  }
}
