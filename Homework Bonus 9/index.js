$(document).ready(() => {
    const formElement = $(".article-search-form");
    let timeOut = null;
    // formElement.keyup(event => {
    //     event.preventDefault();
    //     clearTimeout(timeOut);
    //     timeOut = setTimeout(() => {;
    //         listenToFormSubmitEvent();
    //     }, 1000);
    // });
    listenToFormSubmitEvent();
})

const listenToFormSubmitEvent = () => {
    const formElement = $('.article-search-form');
    formElement.keyup(async event => {
        $('.result').remove();
        $('.loader').remove();
        $('.article-list').html(`<div class="loader"></div>`);
        let timeOut = null;
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            findSuccessed();
        }, 1000);


    
    
    
    })
    $('.loader').remove();
    
    /**
     * TODO:
     *  - Lấy từ khoá search của người dùng (done)
     *  - Lấy data từ server wikipedia tương ứng với từ khoá search  (done)
     *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia (done)
     *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div> (done)
     */
}




const findSuccessed = async function () {
    let searchContent = $(".article-search-form__input").val();
    if (!searchContent) {
        $(".loader").remove();
        return; }
    let articleList = ``;
    const data = await $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        method: 'POST',
        data: {
            action: "query",
            list: "search",
            format: "json",
            srprop: "snippet",
            origin: "*",
            srsearch: encodeURI(searchContent)
        }
    })
    if (data.query.search.length == 0) {
        articleList += `<h3 class = "result no-result">No result, please search another keywords<h3>`;
    } else {
        for (let i = 0; i < data.query.search.length; i++) {
            articleList += `<a href="https://en.wikipedia.org/?curid=${data.query.search[i].pageid}" target="_blank" class="article-view result" > 
                <h3 className="article-view__title">${data.query.search[i].title}</h3>     
                <p className="article-view__snippet">${data.query.search[i].snippet}</p> </a>`;
        }
    }
    if (articleList != ``) {
        $(".article-list").html(articleList);
    }
}