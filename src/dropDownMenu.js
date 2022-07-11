const createDropDownMenu = (title, color, ...subTitles) => {
  const body = document.querySelector('body');
  const menuCard = document.createElement('div');
  const menuTitle = document.createElement('div');
  const menuSubtitles = document.createElement('div');

  menuCard.classList.add('menu-card');
  menuTitle.classList.add('menu-title');
  menuSubtitles.classList.add('menu-subtitles');

  menuTitle.textContent = title;
  menuSubtitles.textContent = subTitles;
  menuCard.style.backgroundColor = color;
  menuCard.append(menuTitle);
  body.append(menuCard);

  menuCard.onclick = () => {
    if (menuCard.childNodes.length === 1) {
      subTitles.forEach((subTitle) => {
        const subTitleDiv = document.createElement('div');
        subTitleDiv.textContent = subTitle;
        menuCard.append(subTitleDiv);
      });
    } else if (menuCard.childNodes.length > 1) {
      menuCard.remove(subTitles);
    }
  };
};

export { createDropDownMenu };
