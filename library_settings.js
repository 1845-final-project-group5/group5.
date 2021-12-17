"use strict";
var myapp = myapp || {};

myapp.settings = {
    setPlayerName: function(name) {
        sessionStorage.playerName = name;
    },
    getPlayerName: function() {
        return sessionStorage.playerName || "";
    },
    setNumberOfImages: function(num) {
        sessionStorage.numberOfImages = num;
    },
    getNumberOfImages: function() {
        return parseInt(sessionStorage.numberOfImages) || 24;
    }
};