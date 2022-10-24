// <!-- phan code js modal cua trang -->
const modalBtns = document.querySelectorAll(".js-book-ticket");
const wrapModal = document.querySelector(".js-wrap-modal");
const closeBtn = document.querySelector(".js-btn-close");
const modal = document.querySelector(".js-modal");
function showModal() {
  wrapModal.classList.add("open");
}
for (const modalBtn of modalBtns) {
  modalBtn.addEventListener("click", showModal);
}

closeBtn.addEventListener("click", hiddenModal);

function hiddenModal() {
  wrapModal.classList.remove("open");
}

wrapModal.addEventListener("click", hiddenModal);

function stopPrn() {
  event.stopPropagation();
}

modal.addEventListener("click", stopPrn);

// <!-- phan code js responsive moblile  cua trang -->
var mobileBtn = document.getElementById("js-mobile-btn");
var header = document.getElementById("header");
var heightHeader = header.clientHeight;
mobileBtn.onclick = function () {
  isClose = header.clientHeight === heightHeader;
  if (isClose) {
    header.style.height = "auto";
    header.style.overflow = "visible";
  } else {
    header.style.height = null;
    header.style.overflow = "hidden";
  }
};

// Dong menu khi click vao 1 items menu bat ky tru item "more"
function closeMenu() {
  header.style.height = null;
  header.style.overflow = "hidden";
}
var menuItems = document.querySelectorAll(".js-item-menu");
for (var i = 0; i <= menuItems.length; i++) {
  menuItem = menuItems[i];
  menuItem.addEventListener("click", closeMenu);
}

var notDefaults = document.querySelectorAll(".not-default");
console.log(notDefaults);
for (var i = 0; i <= notDefaults.length; i++) {
  notDefault = notDefaults[i];
  notDefault.onclick = function (event) {
    event.preventDefault();
  };
}
