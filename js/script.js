const tabsParent = document.querySelector('.fonts-header__tabs');
const tabs = document.querySelectorAll('.fonts-header__tab-title');
const tabsContent = document.querySelectorAll('.fonts-body');


function showTabContent(i = 1) {
    tabsContent[i].classList.add('display-show');
    tabsContent[i].classList.remove('display-hide');

    tabs[i].classList.add('fonts-header__tab-title_active');
}

function hideTabContent() {
    tabsContent.forEach( item => {
        item.classList.add('display-hide');
        item.classList.remove('display-show');

    });

    tabs.forEach(item =>{
        item.classList.remove('fonts-header__tab-title_active');
    });
}


hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    tabs.forEach((item, i) => {
        if(target === item) {
            hideTabContent();
            showTabContent(i);
        }
    })
});
