/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
*/

// !answer:

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

allCircle.forEach((ele, index) => {
  // set background color to all the circles
  ele.style.background = colors[index];
  // make all the circles Eventable!
  ele.addEventListener("click", handleClick);
});

function handleClick() {
  // Getting the color of the circle to change the color of the rectangles
  let colorOfThisCircle = this.style.backgroundColor;

  // resetting the effects of circle and rectangles:
  if (this.classList.contains("flipCircle")) {
    resetEffectsOfCircle();
    resetEffectsOfRectangles();
  } else {
    // setting the effects of circle and rectangles:

    // reset the effects of the other circles
    resetEffectsOfCircle();

    effectOfCircle(this);
    changesColorOfRectangles(colorOfThisCircle);
    // marking the affected circle
    this.classList.toggle("flipCircle");
  }
}

// --------------- Functions related to the handleClick ---------------

// reset effects of all the circles
function resetEffectsOfCircle() {
  allCircle.forEach((ele) => {
    ele.style.border = "none";
    ele.style.outline = "none";
    ele.classList.remove("flipCircle");
  });
}

// set an affect to the clicked circle
function effectOfCircle(circle) {
  colorOFCircle = circle.style.backgroundColor;
  circle.style.border = "0.2rem #fff solid";
  circle.style.outline = `0.2rem ${colorOFCircle} solid`;
}

// Changes the color of all rectangles to the given color
function changesColorOfRectangles(colorForRectangles) {
  allRectangles.forEach((ele, index) => {
    ele.style.border = "none";
    const alpha = 1 - 2 * (index * 0.1);
    ele.style.backgroundColor = `${convertRgbToRgbaFormat(
      colorForRectangles,
      alpha
    )}`;
  });
}
// Since the color format taken from each circle is rbg, it is converted to rbga format with the following function
function convertRgbToRgbaFormat(colorStr, alpha) {
  const colorArr = colorStr.split("");
  const colorArrLength = colorArr.length;
  colorArr.splice(colorArrLength - 1, 0, `, ${alpha}`);
  return colorArr.join("");
}

// resets the styles of all rectangles
function resetEffectsOfRectangles() {
  allRectangles.forEach((ele) => {
    ele.style.backgroundColor = "#fff";
    ele.style.border = "0.2rem lightpink solid";
  });
}
