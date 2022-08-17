const buttonSubmit = $('#buttonSubmit');
const bodyContent = $('.body-content');
const idPost = buttonSubmit.attr('data-idPost');

buttonSubmit.click(async function (e) {
    let content = $('.contentSubmit').html();
    content = content.replace('\n', '');
    content = content.replace('contenteditable', '');
    let title = $('.header-title').text();
    let checkSpanTitle = $('.header-title .suggest-title').length;
    if (checkSpanTitle < 1 || title === '') {
        return
    }
    let data = await $.ajax({
        type: "POST",
        url: `http://localhost:3000/api/post/editPost/${idPost}`,
        data: { title, content: content, authorId: '62ef8e4b34fccdcfe1de826f' },
    });
    window.location.href = `http://localhost:3000/api/your-post`;
});

$('#buttonCancel').click(function (e) {
    window.location.href = `http://localhost:3000/api/your-post`
});
