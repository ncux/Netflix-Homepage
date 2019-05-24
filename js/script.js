const tabIcons = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const tab1 = document.querySelector('#tab-1');
const tab2 = document.querySelector('#tab-2');
const tab3 = document.querySelector('#tab-3');
const tab1Content = document.querySelector('#tab-1-content');
const tab2Content = document.querySelector('#tab-2-content');
const tab3Content = document.querySelector('#tab-3-content');

// listen for tab click
tabIcons.forEach(tabIcon => tabIcon.addEventListener('click', selectItem));

// selects tab content item
function selectItem(e) {
    // remove bottom border from all the icons
    removeBorder();
    // hide all the tab content items
    removeShowClass();
    // add bottom border to the current clicked tab
    this.classList.add('tab-border');
    console.log(this.id);

    // grab the tabContentItem
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabIcons.forEach(tabIcon => tabIcon.classList.remove('tab-border'));
}

function removeShowClass() {
    tabContentItems.forEach(tab => tab.classList.remove('show'));
}