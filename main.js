const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
one.onclick = function() {
one.classList.add("active");
two.classList.remove("remove");
three.classList.remove("remove");
four.classList.remove("remove");
five.classList.remove("remove");
}
two.onclick = function() {
one.classList.add("remove");
two.classList.add("active");
three.classList.remove("remove");
four.classList.remove("remove");
five.classList.remove("remove");
}
three.onclick = function() {
one.classList.add("remove");
two.classList.add("remove");
three.classList.add("active");
four.classList.remove("remove");
five.classList.remove("remove");
}
four.onclick = function() {
one.classList.add("remove");
two.classList.add("remove");
three.classList.add("remove");
four.classList.add("active");
five.classList.remove("remove");
}
five.onclick = function() {
one.classList.add("remove");
two.classList.add("remove");
three.classList.add("remove");
four.classList.add("remove");
five.classList.add("active");
}