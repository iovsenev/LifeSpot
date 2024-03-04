// let session = {
//   startDate: new Date().toLocaleString(),
//   userAgent: window.navigator.userAgent,
//   userAge: prompt('Введите ваш возраст')
// }

function handleSession(logger, checker) {
  if (window.sessionStorage.getItem("startDate") == null) {
    window.sessionStorage.setItem("startDate", new Date().toLocaleString());
  }
  if (window.sessionStorage.getItem("userAgent") == null) {
    window.sessionStorage.setItem("userAgent",
      window.navigator.userAgent);
  }
  if (window.sessionStorage.getItem("userAge") == null) {
    let input = prompt('Введите ваш возраст: ');
    window.sessionStorage.setItem("userAge", input);
    checkUserAge(true);
  } else {
    checkUserAge(false)
  }
  logger();
}

function checkUserAge(newVisit) {
  if (window.sessionStorage.getItem("userAge") >= 18) {
    if (newVisit) {
      alert("Приветствуем на LifeSpot! " + "\n" + "Текущее время: " + startDate);
    }
  }
  else {
    alert(
      "Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены"
    );
    window.location.href = "http://www.google.com";
  }

}

function searchVideo() {
  let elements = document.getElementsByClassName("video-container");

  for (let i = 0; i <= elements.length; i++) {
    let videoText = elements[i].querySelector(".video-title").innerText;

    if (!videoText.toLowerCase().includes(parseFunct().toLowerCase())) {
      elements[i].style.display = "none";
    } else {
      elements[i].style.display = "inline-block";
    }
  }
}

let logger = function () {
  console.log('Дата старта: ' + window.sessionStorage.getItem("startDate"));
  console.log('Данные пользователя: ' + window.sessionStorage.getItem("userAgent"));
  console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"));
}

setTimeout(() =>
  alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
  30000);