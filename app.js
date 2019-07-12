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
        },
        diceRoll: function (t) {
            if(t) {
                this.lifeCounter = !this.lifeCounter
            }
            this.oponentDice = Math.floor(Math.random() * (6 - 1)) + 1
            this.playerDice = Math.floor(Math.random() * (6 - 1)) + 1
            console.log(this.lifeCounter)
        },
        resetLife: function () {
            this.playerTotal = 20
            this.oponentTotal = 20
            sec = 0
        }
    }
  })

  