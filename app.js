var app = new Vue({
    el: '#content',
    data: {
      oponentTotal: 20,
      playerTotal: 20,
      lifeCounter: true,
      oponentDice: 1,
      playerDice: 6
    },
    methods: {
        upPlayer: function() {
            this.playerTotal = parseInt(this.playerTotal) + 1
        },
        downPlayer: function () {
            this.playerTotal = parseInt(this.playerTotal) - 1
        },
        upOponent: function() {
            this.oponentTotal = parseInt(this.oponentTotal) + 1
        },
        downOponent: function () {
            this.oponentTotal = parseInt(this.oponentTotal) - 1
        },
        diceRoll: function (t) {
            if(t) {
                this.lifeCounter = !this.lifeCounter
            }
            this.oponentDice = Math.floor(Math.random() * (6 - 1)) + 1
            this.playerDice = Math.floor(Math.random() * (6 - 1)) + 1
        },
        resetLife: function () {
            this.playerTotal = 20
            this.oponentTotal = 20
            sec = 0
        }
    }
  })

  