function Coment() {

    this.autor = prompt('Введите ваше имя');
    if (this.autor == null) {
        this.empty == true;
        return;
    }

    this.text = prompt('Ввведите ваш комментарий!');
    if (this.text == null) {
        this.empty == true;
        return;
    }

    this.date = new Date().toLocaleString();
}

function addComent() {
    let coment = new Coment();

    if (coment.empty)
        return;

    let enableLikes = confirm('Разрешить оценивать пользователям ваш коментарий?');

    if (enableLikes) {
        let review = Object.create(coment);
        review.rate = 0;
        writeReview(review);
    } else {
        writeReview(coment);
    }
}

const writeReview = (review) => {
    let likeCounter = "";
    let coment = Math.random();
    if (review.hasOwnProperty('rate')) {
        likeCounter += `    <button id="` + coment + `" onclick=addLike(this.id) style="color: chocolate">❤️ ${review.rate}</button>`
    }
    document.getElementsByClassName('reviews')[0].innerHTML +=
        `<div class="commetn-text">\n` +
        `<p> <i> <b>${review.autor}</b>  ${review.date}${likeCounter}</i></p>` +
        `<p>${review.text}</p>` +
        `</div>`
}

function addLike(id) {
    let element = document.getElementById(id);

    let arr = element.innerText.split(' ');

    let num = parseInt(arr[arr.length - 1], 10);

    num++;

    arr[arr.length - 1] = `${num}`;

    element.innerText = arr.join(' ');
}