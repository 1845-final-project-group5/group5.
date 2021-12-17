"use strict"
var myapp = myapp || {};

myapp.scores = (function() {

    var selection = 0,
        correctSelection = 0;

    var setHighScore = function(name, percentage) {
        if (name && name !== "" && !isNaN(percentage)) {
            localStorage.setItem(name, percentage);
        }
    };
    var getHighScore = function(name) {
        var percentage = localStorage.getItem(name) || undefined;
        return parseInt(percentage);
    };

    return {
        incrementTurn: function() {
            selection++
        },
        incrementCorrectTurn: function() {
            correctSelection++;
        },
        allCardsRemoved: function(imgCount) {
            return (correctSelection === imgCount);
        },
        calculatePercent: function() {
            return Math.floor((correctSelection / selection) * 100);
        },
        compareScores: function(name, percentage) {
            if (name && name !== "" && !isNaN(percentage)) {
                var highScore = getHighScore(name);
                if (isNaN(highScore) || percentage > highScore) {
                    setHighScore(name, percentage);
                }
            }
        },
        displayHighScore: function(name) {
            var text = "";
            if (name !== "") {
                var percent = getHighScore(name);
                if (!isNaN(percent)) {
                    text = name + "'s high score: " + percent + "%";
                }
            }
            return text;
        }
    };

})();