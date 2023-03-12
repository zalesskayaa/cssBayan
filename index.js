const accordeons = document.querySelector(".section__accordeon");

const fn = () => {
  const changeClass = accordeons.map((item) => {
    item.classList.remove("section__plus");
    item.classList.add("section__cross");
    const images = document.querySelectorAll("#section__image");
    const changeImageClass = images.map((item) => {
      item.classList.remove("section__image-close");
      item.classList.add("section__image");
    });
  });
};

const addEvent = () => {
  const accordeon = accordeons.map((item) => {
    item.addEventListener("click", fn);
    return item;
  });
};
