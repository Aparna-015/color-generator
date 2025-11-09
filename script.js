const colorInput = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select select");
const refresh=document.getElementById(".refresh")

const generateGradient = () => {
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInput[0].value}, ${colorInput[1].value})`;
  console.log(gradient); // Logs the gradient string correctly
  gradientBox.style.background = gradient; // Apply gradient to the div
};

colorInput.forEach((input) => {
  input.addEventListener("input", generateGradient);
});

selectMenu.addEventListener("change", generateGradient);
