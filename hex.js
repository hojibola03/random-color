const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexcolor;
  color.textContent = hexcolor;
});
function getRandomNumber() {
  return (myRndNumber = Math.floor(Math.random() * hex.length));
}
