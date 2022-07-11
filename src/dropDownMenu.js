function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const createDropDownMenu = (classList, color, ...subTitles) => {
  const body = document.querySelector('body');
  const mainDiv = document.createElement('div');
  mainDiv.classList.add(classList);
  mainDiv.style.flex = 'auto';
  mainDiv.style.backgroundColor = color;
  mainDiv.textContent = classList;
  body.appendChild(mainDiv);
  mainDiv.onclick = function () {
    subTitles.forEach((subtitle) => {
      const secondDiv = document.createElement('div');
      secondDiv.textContent = subtitle;
      mainDiv.append(secondDiv);
    });
  };
  return mainDiv;
};

export { createDropDownMenu };
