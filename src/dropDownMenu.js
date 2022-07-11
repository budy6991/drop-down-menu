function createDiv(classList, color) {
  const body = document.querySelector('body');
  const mainDiv = document.createElement('div');
  mainDiv.classList.add(classList);
  mainDiv.style.flex = 'auto';
  mainDiv.style.backgroundColor = color;
  mainDiv.textContent = classList;
  body.appendChild(mainDiv);
}

function createDropDownMenu(title, color, ...subTitles) {
  createDiv(title, color);
}

export { createDropDownMenu, createDiv };
