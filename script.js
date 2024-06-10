var slides = document.getElementsByClassName("a");
var countDiv = document.getElementById('bugCounter');
var congrats = document.getElementById("message");
var count = 0;
let splats = [];
let mercy = ["Please don't kill me!", "I have a family to feed!", "Please spare me!", "Don't stain your hands in blood.", "I was forced to do this.", "Why? Why? Why me?", "Please let me go.", "My kids need me.", "How could you do this?!", "*dies*", "My kids will no longer have a father because of you!", "Go to hell!", "Okay, okay, please. Let's negotiate.", "Why must I fall like this?!", "Please, I beg of you!"]
slides = Array.prototype.slice.call(slides);
// console.log(slides);


$(slides).ready(function () {
    for (var i = 0; i < slides.length; i++) {
        animateDiv(slides[i]);
    }
});

function makeNewPosition() {
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh, nw];
}

function animateDiv(mosquito) {
    var newq = makeNewPosition();
    $(mosquito).animate({ top: newq[0], left: newq[1] }, function () {
        animateDiv(mosquito);
    });
};

function changeImage(number) {
    document.getElementById(number).src = "http://assets.stickpng.com/thumbs/5888773fbc2fc2ef3a186063.png";
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].id == number) {
            $(slides[i]).stop(true, true).fadeOut("slow");
            let b = 0;
            for (var i2 = 0; i2 < splats.length; i2++) {
                if (splats[i2] != number) {
                    b++;
                }
            }
            if (b == splats.length) {
                // console.log("removed bug " + i);
                count++;
                countDiv.innerHTML = "🦟 Bugs Splatted: " + "<b>" + count + "</b>";
                splats.push(number);
                var congrats = document.getElementById("message");
                congrats.innerHTML = mercy[number - 1];
            }
            b = 0;
        }
        if (splats.length == 15) {
            end();
        }

    }
}

function end() {
    confettiVisible();
    var congrats = document.getElementById("message");
    congrats.innerHTML = "Congratulations! You killed 15 bugs! I hope you are content with your life choices, since these bugs will forever be dead, and their families will mourn for the next few months because you decided to kill them.";
}

function confettiVisible() {
    var x = document.getElementById("winScreen");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

