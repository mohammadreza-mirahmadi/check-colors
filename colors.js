const colors = [
  "rgba(31, 127, 102, 1)",
  "rgba(255, 200, 0, 1)",
  "rgba(255, 123, 0, 1)",
  "rgba(216, 1, 1, 1)",
  "rgba(223, 4, 70, 1)",
  "rgba(127, 31, 85, 1) ",
  "rgba(93, 18, 199, 1)",
];
const allCircle = document.querySelectorAll(".circle");
const allRectangles = document.querySelectorAll(".rectangle");

// set color for cricles
allCircle.forEach((ele, index) => {
  ele.style.background = colors[index];
});

function handleClick() {
  // efect of circles
  if (this.classList.contains("flipCircle")) {
    this.style.border = "none";
    this.style.outline = "none";
    this.classList.toggle("flipCircle");

    allRectangles.forEach((ele) => {
      ele.style.backgroundColor = "#fff";
      ele.style.border = "0.2rem lightpink solid";
    });
  } else {
    // reset other circle
    allCircle.forEach((ele) => {
      ele.style.border = "none";
      ele.style.outline = "none";
    });
    this.classList.toggle("flipCircle");
    let bgcolor = this.style.backgroundColor;
    this.style.border = "0.2rem #fff solid";
    this.style.outline = `0.2rem ${bgcolor} solid`;
    allRectangles.forEach((ele, index) => {
      // bgcolor with rgb format changed to bgcolor with rgba format
      let newBgcolor = "";
      for (let i = 0; i < bgcolor.length - 1; i++) {
        newBgcolor += bgcolor[i];
      }
      ele.style.border = "none";
      ele.style.backgroundColor = `${newBgcolor}, ${
        1 - 2 * (index * 10 ** -1)
      }`;
    });
  }
}
// set event for all circles
allCircle.forEach((ele) => {
  ele.addEventListener("click", handleClick);
});
