const menuCard = document.querySelector('.menu-card');
const menuTitle = document.querySelector('.menu-title');

const removeChilds = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

const dropDownMenu = {

  createDropDownMenu(title, color, ...subTitles) {
    menuCard.classList.replace('menu-card', `menu-card-${title}`);
    menuTitle.classList.replace('menu-title', `menu-title-${title}`);
    menuCard.textContent = title;
    menuCard.style.display = 'inline-block';
    menuCard.style.backgroundColor = color;
    menuCard.style.padding = '1em';
    menuCard.style.borderRadius = '25px';
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
