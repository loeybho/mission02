//1-1. 클릭 이벤트 활성화
const getBtns = document.querySelectorAll(".nav li");

getBtns.forEach((btn) => btn.addEventListener("click", handleClick));

function handleClick(event) {
  console.log(event.target);

  setBorder(event);

  const index = event.currentTarget.dataset.index;
  setBgColor(event, index);

  setImage(index - 1);

  setNameText(index - 1);
}

//1-2. 클릭시 테두리 색상 변경
function setBorder(event) {
  const currentActive = document.querySelector(".is-active");
  if (currentActive) {
    currentActive.classList.remove("is-active");
  }
  const parentLi = event.target.parentElement;
  parentLi.classList.add("is-active");
}

//2. 배경 색상 변경
function setBgColor(event) {
  const index = event.currentTarget.dataset.index;
  const colors = data[index - 1].color;
  const gradient = `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`;
  document.body.style.background = gradient;
}

//3. 이미지 변경
function setImage(index) {
  const visual = document.querySelector(".visual img");
  visual.src = data[index].img;
  visual.alt = data.alt;
}

//4. 텍스트 변경
function setNameText(index) {
  const nickName = document.querySelector("h1");
  nickName.textContent = data[index].name;
}
