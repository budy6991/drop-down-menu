const menuCard = document.querySelector('.menu-card');
const menuTitle = document.querySelector('.menu-title');

const removeChilds = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

const dropDownMenu = {

  createDropDownMenu(title, color, ...subTitles) {
    menuCard.classList.remove('menu-card');
    menuCard.classList.add(`menu-card-${title}`);
    menuTitle.classList.remove('menu-title');
    menuTitle.classList.add(`menu-title-${title}`);
    menuCard.textContent = title;
    menuCard.style.display = 'inline-block';
    menuCard.style.backgroundColor = color;
    menuCard.onclick = () => {
      if (menuTitle.childNodes.length === 1 || menuTitle.childNodes.length === 0) {
        subTitles.forEach((subtitle) => {
          const subDivs = document.createElement('div');
          subDivs.textContent = subtitle;
          menuTitle.append(subDivs);
          menuCard.append(menuTitle);
        });
      } else if (menuTitle.childNodes.length >= 1) {
        removeChilds(menuTitle);
        console.log(menuTitle.childNodes.length);
      }
    };
  },
};

export default dropDownMenu;
