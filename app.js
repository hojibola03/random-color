const colors = [
  "Green",
  "Red",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "black",
  "aqua",
  "darkblue",
  "gold",
  "darkgold",
  "brown",
  "pink",
  "tomato",
  "white",
  "gray",
  "greenyellow",
  "purple",
];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  console.log(randomNumber);
});
function getRandomNumber() {
  let myRndNumber = Math.floor(Math.random() * colors.length);
  return myRndNumber;
}
