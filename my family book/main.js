var images = ["mamma.png", "papa.png", "nanu.png", "rashmi nani.png"];

var names = ["Nandita Sharma (My Mom)", "Anurag Sharma (My Dad)", "Vinod Mehta (My Grandfather)", "Rashmi Mehta (My Grandmother)"];

var i = 0;
function move() {
    document.getElementById("names").innerHTML = names[i];
    document.getElementById("pic").src = images[i];
    i++;
}