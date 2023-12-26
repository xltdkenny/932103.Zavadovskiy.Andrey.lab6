const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const bothButton = document.querySelector('.both');

const dog = document.querySelector('.dog');
const cat = document.querySelector('.cat');

function showLeft()
{
    cat.style.flex  = '0.8 1 95%';
    dog.style.flex  = '0.2 1 5%';
    cat.querySelector('img').style.display = 'block';
    cat.querySelector('img').style.width = '100%';
    dog.querySelector('img').style.display = 'none';
}

function showRight()
{
    cat.style.flex  = '0.2 1 5%';
    dog.style.flex  = '0.8 1 95%';
    cat.querySelector('img').style.display = 'none';
    dog.querySelector('img').style.display = 'block';
    dog.querySelector('img').style.width = '100%';
}

function showBoth()
{
    cat.style.flex = '1 1 50%';
    dog.style.flex  = '1 1 50%';
    cat.querySelector('img').style.display = 'block';
    dog.querySelector('img').style.display = 'block';
    dog.querySelector('img').style.width = '100%';
    cat.querySelector('img').style.width = '100%';
}

leftButton.addEventListener('click', showLeft);
rightButton.addEventListener('click', showRight);
bothButton.addEventListener('click', showBoth);