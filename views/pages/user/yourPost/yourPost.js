let imageUpload = document.querySelectorAll('.image-upload');
// console.log(imageUpload);


imageUpload.forEach(element => {
    element.parentNode.removeChild(element);
});


let icon = document.querySelectorAll('.hidden-icon');
// console.log(imageUpload);


icon.forEach(element => {
    element.parentNode.removeChild(element);
});

let boderCicle = document.querySelectorAll('.border-circle');
// console.log(imageUpload);


boderCicle.forEach(element => {
    element.parentNode.removeChild(element);
});

const dontFix = document.querySelectorAll('.content-story')
console.log(27, dontFix);
dontFix.forEach(element => {
    element.removeAttribute('contenteditable');
})


