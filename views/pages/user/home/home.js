function ShowHomeFeature(homeFeatureId) {
    $(`#${homeFeatureId}`).toggle()
}
//block author
async function BlockAuthor(authorId) {
    let res = await $.ajax({
        url: `/api/block/block-author/${authorId}`,
        type: 'POST'
    })
    alert(res.mess)
}
//for-you and following postList
async function PostRender(option, element) {
    document.querySelector('.tabActive').classList.remove('tabActive')
    element.classList.add('tabActive')

    let res = await $.ajax({
        url: `/api/post/get-all-${option}-post`
    })
    $('.homePost-container').html(res)
}
$(document).ready(function () {

    




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
    // console.log(51, dontFix);
    dontFix.forEach(element => {
        element.removeAttribute('contenteditable');
    })

    const deleteYoutobue = document.querySelectorAll('.wrap-content .content-story iframe');
    deleteYoutobue.forEach(element => {
        element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode)
    })

});

const img1 = document.getElementsByClassName('img1');
for (let i = 0; i < img1.length; i++) {
    // console.log(64, img1[i].children);

}

async function savePost(id) {
    console.log(id);
    try {
        let data = await $.ajax({
            type: "POST",
            url: 'api/savePost/savePost',
            data: {
                id
            }
        })
        if (data.status === 200) {
            alert('Success')
            window.location.reload()
        }
    } catch (e) {
        console.log(e)
    }
}
