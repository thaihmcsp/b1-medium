$(document).ready(function () {

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
    console.log(51, dontFix);
    dontFix.forEach(element => {
        element.removeAttribute('contenteditable');
    })

    const deleteYoutobue = document.querySelectorAll('.wrap-content .content-story iframe');
    deleteYoutobue.forEach(element => {
        element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode)
    })

});
