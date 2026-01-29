const testButton = document.getElementById("test-click");

testButton.addEventListener("click", () => {
  console.log("click!");
});

testButton.addEventListener("dblclick", () => {
  console.log("Double clicked!");
});
testButton.addEventListener("mousedown", () => {
  console.log("Mouse down!");
});
testButton.addEventListener("mouseup", () => {
  console.log("Mouse up!");
});
