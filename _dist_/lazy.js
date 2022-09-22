
const isIntersecting = (entry) => {
    // If element is 33% far from screen...
    return entry.isIntersecting;
}

const action = (entry) => {
    const node = entry.target;
    console.log('Hola');

    // Unobserve img (Just one time action!)
    observer.unobserve(node);
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(action);
});

export const registerImage = (img) => {
    observer.observe(img);
}