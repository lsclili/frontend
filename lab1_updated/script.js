function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('element2').addEventListener('click', function() {
    const element = this;
    element.style.backgroundColor = getRandomColor();
    element.style.color = getRandomColor();
});

document.querySelector('#element3').addEventListener('click', function() {
    const element = this;
    element.style.backgroundColor = getRandomColor();
    element.style.color = getRandomColor();
});

function addImage() {
    const imageContainer = document.getElementById('image');
    if (!imageContainer) {
        const img = document.createElement('img');
        img.id = 'image';
        img.src = 'capy.jpeg';
        img.alt = 'Капібара';
        document.querySelector('.content').appendChild(img);
    }
}

function increaseImage() {
    const img = document.getElementById('image');
    if (img) {
        const currentWidth = img.offsetWidth;
        img.style.width = currentWidth + 20 + 'px';
    }
}

function decreaseImage() {
    const img = document.getElementById('image');
    if (img) {
        const currentWidth = img.offsetWidth;
        if (currentWidth > 20) {
            img.style.width = currentWidth - 20 + 'px';
        }
    }
}

function deleteImage() {
    const img = document.getElementById('image');
    if (img) {
        img.remove();
    }
}
