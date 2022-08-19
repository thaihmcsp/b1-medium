
const headerTitle = $('.header-title');
const contentStory = $('.content-story');
const borderCircle = $('.border-circle');
const borderCircleTitle = $('.border-circle-title');
const wrapFatherContent = $('.wrap-father-content');
const circleAction = $('.circle-action');
const circleActionTitle = $('.circle-action-title');
const hiddenIcon = $('.hidden-icon');
const hiddenIconTitle = $('.hidden-icon-title');
const suggest = $('.suggest');
const suggestTitle = $('.suggest-title');
const camera = $('.fa-camera');
const video = $('.fa-play');
const buttonSubmit = $('#buttonSubmit');
const bodyContent = $('.body-content');

const imagePreview = document.getElementById('imagePreview');
const imgInp = document.getElementById('file-input');
const cloudName = 'dl0kozyhk';
const unsignedUploadPreset = 'thaytoancovua';
const img = document.querySelector('#file-input');

$(borderCircleTitle).css({ visibility: 'hidden' });

let countTitle = 0;
let countContent = 0;
let focus = 0;
let x = false;

$(headerTitle).focus(function (e) {
    $(`.hiddenIcon`).css({ display: 'none' });
    if (countTitle === 0) {
        $(borderCircleTitle).css({ visibility: 'visible' });
        $(borderCircle).css({ visibility: 'hidden' });
        $(hiddenIconTitle).css({ display: 'none' });
        $(borderCircleTitle).removeClass('fa-x');
        $(borderCircleTitle).addClass('fa-plus');
        x = false;
    }
});

$(contentStory).focus(function (e) {
    $(hiddenIconTitle).css({ display: 'none' });
    if (countContent === 0) {
        $(borderCircleTitle).css({ visibility: 'hidden' });
        $(borderCircle).css({ visibility: 'visible' });
        $(hiddenIcon).css({ display: 'none' });
        $(borderCircle).removeClass('fa-x');
        $(borderCircle).addClass('fa-plus');
        x = false;
    }

});


function addEnter(e) {
    if (e.key === 'Enter') {
        let link = $('.content-story').text();
        if (link) {
            let checkImg = checkURL(link);
            if (checkImg && focus === 0) {
                let imgHtml = `<img class='imgFull' src='${link}'></img>`
                $('.content-story').html(imgHtml)
            };
            let checkLink = link.includes('www.youtube.com');
            if (checkLink && focus === 0) {
                link = link.replace("watch?v=", "embed/")
                let linkYoutube =
                    `<iframe width="560" height="315" 
                    src="${link}" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                $('.content-story').html(linkYoutube);
            }
        }

        let link1 = $(`.content-story${focus}`).text();
        if (link1) {
            let checkImg1 = checkURL(link1);
            if (checkImg1) {
                let imgHtml = `<img class='imgFull' src='${link1}'></img>`
                $(`.content-story${focus}`).html(imgHtml)
            };
            let checkLink1 = link1.includes('www.youtube.com');
            if (checkLink1) {
                link1 = link1.replace("watch?v=", "embed/");
                let linkYoutube =
                    `<iframe width="560" height="315" 
                            src="${link1}" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                $(`.content-story${focus}`).html(linkYoutube);
            }
        }

        // // addLinkYoutube();
        focus++;
        let html = ` 
                    <div class="wrap-content">
                        <div>
                            <i class="fa-solid fa-plus border-circle borderCircle${focus} circle-action" id="circle${focus}"></i>
                            <i class="image-upload image${focus}" id="image${focus}" >
                                <label for="file-input${focus}">
                                    <i class="hidden-icon hidden-icon${focus} fa-solid fa-camera"></i>
                                </label>
                                <input id="file-input${focus}" type="file" />
                                <img id="imagePreview${focus}" src="" alt="your image" width="80%"/>
                            </i>
                            <i class="hidden-icon hidden-icon${focus}  fa-solid fa-play"></i>
                            <i class="hidden-icon hidden-icon${focus} fa-solid fa-left-right"></i>
                            <i class="hidden-icon hidden-icon${focus} fa-solid fa-ellipsis"></i>
                        </div>
                        <p class="content-story content-story${focus}" id='focus${focus}' placeholder="Tile..." contenteditable="true" onfocus="" autofocus>
                            <span class="suggest suggest${focus}"></span>
                        </p>
                    </div>
                            `;
        $(wrapFatherContent).append(html);
        $(`#focus${focus}`)[0].focus()
        $(`#focus${focus}`).keydown(
            addEnter
        );
        $(`#imagePreview${focus}`).hide();
        $('.border-circle').css({ visibility: 'hidden' });
        $(`#circle${focus}`).css({ visibility: 'visible' });
        $(`#circle${focus}`).click(showHideCircleNew);
        $('.circle-action-title').click(showHideCircleTitle);

        $(`.content-story${focus}`).focus(() => {
            $(hiddenIconTitle).css({ display: 'none' });
            $(hiddenIcon).css({ display: 'none' });
            $(borderCircleTitle).css({ visibility: 'hidden' });
            $(`.borderCircle${focus}`).css({ visibility: 'visible' });
            $(`.borderCircle${focus}`).removeClass('fa-x');
            $(`.borderCircle${focus}`).addClass('fa-plus');
            $(`.hidden-icon${focus}`).css({ display: 'none' });
            x = false;
        }
        )

        addEventImg();
        // Add xự kiện click vào phần tử mới tạo ra
        $('.fa-play').click(videoHandle)
    }
    if (countContent === 0) {
        e.target.innerText = '';
        countContent++;
        $(borderCircle).css({ visibility: 'hidden' });
    }
}

function showHideCircle(e) {
    if (!x) {
        $(hiddenIconTitle).css({ display: 'none' });
        $(borderCircle).addClass('fa-x');
        $(borderCircle).removeClass('fa-plus');
        x = true;
        $(hiddenIcon).css({ display: 'inline-block' });
        $(suggest).hide();
    } else {
        $(borderCircle).removeClass('fa-x');
        $(borderCircle).addClass('fa-plus');
        x = false;
        $(hiddenIcon).css({ display: 'none' });
        // $(suggest).show();
    }
}
function showHideCircleNew(e) {
    if (!x) {
        $(hiddenIconTitle).css({ display: 'none' });
        $(`.borderCircle${focus}`).addClass('fa-x');
        $(`.borderCircle${focus}`).removeClass('fa-plus');
        x = true;
        $(`.hidden-icon${focus}`).css({ display: 'inline-block' });
        $(`.suggest${focus}`).hide();
    } else {
        $(`.borderCircle${focus}`).removeClass('fa-x');
        $(`.borderCircle${focus}`).addClass('fa-plus');
        x = false;
        $(`.hidden-icon${focus}`).css({ display: 'none' });
        // $(`#image${focus}`).css({ display: 'inline-block' });
    }
}


function showHideCircleTitle(e) {
    if (!x) {
        $(hiddenIcon).css({ display: 'none' });
        $(borderCircleTitle).addClass('fa-x');
        $(borderCircleTitle).removeClass('fa-plus');
        x = true;
        $(hiddenIconTitle).css({ display: 'inline-block' });
        $(suggestTitle).hide();
    } else {
        $(borderCircleTitle).removeClass('fa-x');
        $(borderCircleTitle).addClass('fa-plus');
        x = false;
        $(hiddenIconTitle).css({ display: 'none' });
        // $(suggest).show();
    }
}


$(contentStory).keydown(
    addEnter
);

$(headerTitle).keydown(function (e) {
    if (countTitle === 0) {
        e.target.innerText = '';
        countTitle++;
        $(borderCircle).css({ visibility: 'hidden' });
    }
});

$(circleAction).click(showHideCircle);
$(camera).click(() => {

});
$(circleActionTitle).click(showHideCircleTitle);

function addEventImg() {
    const imgInput = document.getElementById(`file-input${focus}`);
    const imgPreview = document.getElementById(`imagePreview${focus}`);
    imgInput.onchange = function () {
        // const [file] = imgInput.files
        // if (file) {
        let file = this.files[0];
        let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var respondDataJson = JSON.parse(this.responseText);
                console.log(respondDataJson);
                console.log(imgPreview)
                imgPreview.src = respondDataJson.url
                $(`.hidden-icon`).css({ display: 'none' });
                $(`.border-circle`).css({ display: 'none' });
                addEnter({ key: "Enter" });
            }
        }
        xhr.open('POST', url, true);
        var fd = new FormData();
        fd.append('upload_preset', unsignedUploadPreset);
        fd.append('tags', 'browser upload');
        fd.append('file', file);
        xhr.send(fd);
        // imgPreview.src = URL.createObjectURL(file)
        imgPreview.style.display = 'block';
        $(hiddenIcon).css({ display: 'none' });
        $(hiddenIconTitle).css({ display: 'none' });
        $(borderCircleTitle).css({ visibility: 'hidden' });
        $(borderCircle).css({ visibility: 'hidden' });
        $(suggest).hide();
        x = false;
        $(`.hidden-icon`).css({ display: 'none' });
        $(`.border-circle`).css({ display: 'none' });
        addEnter({ key: "Enter" });
        // }
    }

}
imgInp.onchange = function () {
    // const [file] = imgInp.files
    // if (file) {
    //     imagePreview.src = URL.createObjectURL(file)
    //     imagePreview.style.display = 'block';
    //     $(hiddenIcon).css({ display: 'none' });
    //     $(hiddenIconTitle).css({ display: 'none' });
    //     $(borderCircleTitle).css({ visibility: 'hidden' });
    //     $(borderCircle).css({ visibility: 'hidden' });
    //     $(suggest).hide();
    //     addEnter({ key: "Enter" });
    //     x = false;
    // }
    let file = this.files[0];
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var respondDataJson = JSON.parse(this.responseText);
            console.log(respondDataJson);
            let urlRepond = respondDataJson.public_id;
            let urlFix = `http://res.cloudinary.com/dl0kozyhk/image/upload/c_pad,w_200/${urlRepond}`
            document.getElementById('image-preview').src = respondDataJson.url
            $(`.hidden-icon`).css({ display: 'none' });
            $(`.border-circle`).css({ display: 'none' });
            addEnter({ key: "Enter" });
        }
    }
    xhr.open('POST', url, true);
    var fd = new FormData();
    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser upload');
    fd.append('file', file);
    xhr.send(fd);
}
// Sự kiện clich vào video
$(video).click(videoHandle);

// Hàm xử lý click video
function videoHandle() {
    $('.border-circle').removeClass('fa-x');
    $('.border-circle').addClass('fa-plus');
    x = false;
    $('.hidden-icon').hide();
    $('.suggest').show();
    $('.suggest').html('Paste a YouTube, Vimeo, or other video link, and press Enter');
}

// Hàm xử lý việc kiểm tra link youtube và chèn link
function addLinkYoutube() {
    let link1 = $(`content-story${focus}`).html();
    let checkLink1 = link.includes('www.youtube.com');
    if (checkLink1) {
        link1 = link.replace("watch?v=", "embed/");
        let linkYoutube =
            `<iframe width="560" height="315" 
                    src="${link}" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        $(`content-story${focus}`).html(linkYoutube);
    }
}

function checkURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

// const cloudName = 'dl0kozyhk';
// const unsignedUploadPreset = 'thaytoancovua';
// const img = document.querySelector('#file-input');

// img.onchange = function () {
//     let file = this.files[0];
//     let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             var respondDataJson = JSON.parse(this.responseText);
//             console.log(respondDataJson);
//             let urlRepond = respondDataJson.public_id;
//             let urlFix = `http://res.cloudinary.com/dl0kozyhk/image/upload/c_pad,w_200/${urlRepond}`
//             document.getElementById('image-preview').src = respondDataJson.url
//             $(`.hidden-icon`).css({ display: 'none' });
//             $(`.border-circle`).css({ display: 'none' });
//             addEnter({ key: "Enter" });
//         }
//     }
//     xhr.open('POST', url, true);
//     var fd = new FormData();
//     fd.append('upload_preset', unsignedUploadPreset);
//     fd.append('tags', 'browser upload');
//     fd.append('file', file);
//     xhr.send(fd);
// }

buttonSubmit.click(async function (e) {
    let content = $('.contentSubmit').html();
    content = content.replace('\n', '');
    content = content.replace('contenteditable', '');
    let title = $('.header-title').text();
    let checkSpanTitle = $('.header-title .suggest-title').length
    if (checkSpanTitle || title === '') {
        return
    }
    let data = await $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/post/createpost",
        data: { title, content: content },
    });
    window.location.href = `http://localhost:3000/api/your-post`;
});

$('#buttonCancel').click(function (e) {
    window.location.href = `http://localhost:3000/api/post/createpost`
});

