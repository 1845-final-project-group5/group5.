"use strict"
var myapp = myapp || {};

myapp.cards = (function() {

    var backImgSrc = "images/back.png";
    var blankImgSrc = "images/blank.png";
    var cardImgSrcStart = "images/card_";
    var numImages;

    var preloadAndStoreImages = function() {
        var numberOfImages = myapp.settings.getNumberOfImages();
        var images = [];
        var back = new Image();
        back.src = backImgSrc;
        var blank = new Image()
        blank.src = "images/blank.png"

        for (var i = 1; i <= numberOfImages; i++) {
            var img = new Image();
            img.src = cardImgSrcStart + i + ".png";
            images.push(img)
        }
        numImages = images.lenghth;
        return images;
    };

    var storeCardSrcs = function(images) {
        var srcs = [];
        if (Array.isArray(images)) {
            for (var i in images) {
                srcs.push(images[i].src);
                srcs.push(images[i].src);
            }
        }
        return srcs

    };

    var prototype = {
        createCardsHtml: function() {

            var counter, max, cardIndex, src, html;

            var images = preloadAndStoreImages();
            var cards = storeCardSrcs(images);

            counter = 1, max = 8;

            if (Array.isArray(cards)) {
                html = "<div>";

                while (cards.length > 0) {

                    cardIndex = Math.floor(Math.random() * cards.length);
                    src = cards[cardIndex];
                    cards.splice(cardIndex, 1); //remove card from array

                    html += "<a id='" + src + "' href='#'><img src='" + backImgSrc + "' alt=''></a>";

                    if (counter === max) {
                        html += "<p class='clear'></p></div><div>";
                        counter = 1;
                    } else {
                        counter++;
                    }

                }
                html += "</div>";
            }
            return html;
        },
        fadeCardFlip: function(img, src, duration) {
            img.fadeOut(duration, function() {
                img.attr("src", src).fadeIn(duration);

            });
        },
        slideCardFlip: function(img, src, duration) {
            img.slideUp(duration, function() {
                img.attr("src", src).fadeIn(duration);
            });
        }
    };

    var properties = {
        imageCount: {
            get: function() {
                return numImages;
            }
        },
        defaultSrc: {
            get: function() {
                return backImgSrc;
            }
        },
        blankSrc: {
            get: function() {
                return blankImgSrc;
            }
        }
    };

    return Object.create(prototype, properties);

})();