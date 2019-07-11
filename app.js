var app = new Vue({
    el: '#content',
    data: {
      oponentTotal: 20,
      playerTotal: 20
    },
    methods: {
        upPlayer: function() {
            console.log(this.playerTotal)
            this.playerTotal = parseInt(this.playerTotal) + 1
            console.log(this.playerTotal)
        },
        downPlayer: function () {
            console.log(this.playerTotal)
            this.playerTotal = parseInt(this.playerTotal) - 1
            console.log(this.playerTotal)
        },
        upOponent: function() {
            console.log(this.oponentTotal)
            this.oponentTotal = parseInt(this.oponentTotal) + 1
            console.log(this.oponentTotal)
        },
        downOponent: function () {
            console.log(this.oponentTotal)
            this.oponentTotal = parseInt(this.oponentTotal) - 1
            console.log(this.oponentTotal)
        }
    }
  })

  var timer = document.getElementById('timer'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    timertextContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    timertextContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}