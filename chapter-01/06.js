var Suit;
(function (Suit) {
    Suit["Hearts"] = "hearts";
    Suit["Diamonds"] = "diamonds";
    Suit["Clubs"] = "clubs";
    Suit["Spades"] = "spades";
})(Suit || (Suit = {}));
var trumpSuit = Suit.Hearts;
console.log(trumpSuit);
console.log(Suit);
