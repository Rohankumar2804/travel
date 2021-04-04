const close = document.querySelector(".fa-times");
const open = document.querySelector(".fa-bars");
const allitems = document.querySelector(".items_list");
open.addEventListener("click", function () {
  allitems.style.display = "flex";

  open.style.display = "none";
  close.style.display = "block";
});
close.addEventListener("click", function () {
  allitems.style.display = "none";
  close.style.display = "none";
  open.style.display = "block";
});
