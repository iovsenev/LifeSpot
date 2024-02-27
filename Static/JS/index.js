let session = new Map();

function handleSession() {
  session.set("startDate", new Date().toLocaleString());
  session.set("userAgent", window.navigator.userAgent);
}
function checkUserAge() {
  session.set("age", prompt("Пожалуйста, введите ваш возраст?"));
  // Проверка на возраст и сохранение сессии
  if (session.get("age") >= 18) {
    let startDate = new Date().toLocaleString();
    alert("Приветствуем на LifeSpot! " + "\n" + "Текущее время: " + startDate);
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

let sessionLog = function () {
  for (let result of session) {
    console.log(result);
  }
}

setTimeout(() =>
  alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
  30000);