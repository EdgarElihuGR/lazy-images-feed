import { registerImage } from "./lazy.js";

// const minimum = 1;
// const maximum = 275725;

// const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

/* Nodes */
// const mountNode = document.querySelector('#app'); //Unnecesary because JS make a var called 'app' automatically
// const addImgButton = document.querySelector('#addImg'); //Unnecesary because JS make a var called 'addImgButton' automatically

/* Functions */
const createImageNode = (src) => {
    const img = document.createElement('img');
    img.src = src;
    img.style.borderRadius = '4px';
    const imgContainer = document.createElement('div');
    imgContainer.classList = "pb-5 w-80";
    imgContainer.append(img);

    return imgContainer;
}

const addImageNode = () => {
    const newImg = createImageNode('https://images.unsplash.com/photo-1662639822728-47e894257077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU2ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2ODI1OTk&ixlib=rb-1.2.1&q=80&w=400');
    registerImage(newImg);
    app.append(newImg);
}

/* Listeners */
addImgButton.addEventListener('click', addImageNode);

/* Default img */
// const newImg = createImageNode('https://images.unsplash.com/photo-1662639822728-47e894257077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU2ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2ODI1OTk&ixlib=rb-1.2.1&q=80&w=400');
// mountNode.append(newImg); 