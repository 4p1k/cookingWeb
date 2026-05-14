
  // Проверка сохранённой темы
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Кнопка переключения темы
  const themeBtn = document.createElement("button");
  themeBtn.innerHTML = "🌙";
  themeBtn.style.position = "fixed";
  themeBtn.style.bottom = "20px";
  themeBtn.style.right = "20px";
  themeBtn.style.width = "50px";
  themeBtn.style.height = "50px";
  themeBtn.style.border = "none";
  themeBtn.style.borderRadius = "50%";
  themeBtn.style.cursor = "pointer";
  themeBtn.style.fontSize = "20px";
  themeBtn.style.background = "#222";
  themeBtn.style.color = "#fff";
  themeBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  themeBtn.style.zIndex = "999";

  document.body.appendChild(themeBtn);

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      themeBtn.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeBtn.innerHTML = "🌙";
    }
  });

  // Иконка при загрузке
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.innerHTML = "☀️";
  }

// пока только в локал сторадж
const recipeButtons = document.querySelectorAll(".btn-recipe");

recipeButtons.forEach((btn, index) => {
  const favBtn = document.createElement("button");
  favBtn.textContent = "❤️";
  favBtn.classList.add("fav-btn");

  btn.parentElement.appendChild(favBtn);

  if (localStorage.getItem(`fav-${index}`)) {
    favBtn.classList.add("active");
  }

  favBtn.addEventListener("click", () => {
    favBtn.classList.toggle("active");

    if (favBtn.classList.contains("active")) {
      localStorage.setItem(`fav-${index}`, "true");
    } else {
      localStorage.removeItem(`fav-${index}`);
    }
  });
});

// кнопка вверх
const upBtn = document.createElement("button");
upBtn.innerHTML = "⬆";
upBtn.classList.add("up-btn");

document.body.appendChild(upBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
});

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if(login.length < 3 ){
    e.preventDefault();
    alert("Логин не может быть менее 3 символов")
    return
  }

  if (password.length < 8) {
    e.preventDefault();
    alert("Пароль должен содержать минимум 6 символов");
    return
  }
});