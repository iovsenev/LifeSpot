let ageUser = prompt('введите ваш возраст: ');
if (ageUser < 18) {
    alert('наши трансляции не предназначены для людей младше 18 лет. Вы будете перенаправлены.');
    window.location.href = "http://www.google.com";
}
else {
    let dateNow = new Date().toLocaleString();
    alert('приветствуем вам на Life Spot ' + dateNow);
}
