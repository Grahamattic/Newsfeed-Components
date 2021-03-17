// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// Assign menu items to an object.
let menuMaker = (menuItems) => {

    // Create a new HTML element to hold the menu.
    let menu = document.createElement('div');

    // Add a class of "menu" to the menu div.
    menu.classList.add('menu');

    // Create a new unordered HTML list.
    let menuList = document.createElement('ul');

        // Create a new HTML menu list item for each item in the menuItems array.
        menuItems.forEach((arrayItem) => {
          let newMenuItem = menuItems(arrayItem);

          // Add each list item to the DOM as a child of the menu list.
          parent.appendChild(newMenuItem);
        });

    // Append full list to the menu div.
    menu.appendChild(menuList);

    // Grab the menu button.
    let menuBtn = document.querySelector('.menu-button');

        // Add an event listener to the menu button image that toggles the menu display (article-open) class.
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('article-open');
        });

    // Return the menu with its links.
    return menu;
};

// Grab the header div.
let header = document.querySelector('.header');

// Add the menu to the DOM as a child of the header.
header.appendChild(menuMaker(menuItems));
