const accordeons = document.querySelector(".section__accordeon");

const fn = () => {
  const showImage = accordeons.map((item) => {
    if (item.matches(":hover")) {
      const images = document.querySelectorAll("#section__image");
      const changeImageClass = images.map((item) => {
        item.classList.remove("section__image-close");
        item.classList.add("section__image");
      });
    }
  });
};

// const fn = () => {
//   const changeClass = accordeons.map((item) => {
//     item.classList.remove("section__plus");
//     item.classList.add("section__cross");
//     const images = document.querySelectorAll("#section__image");
//     const changeImageClass = images.map((item) => {
//       item.classList.remove("section__image-close");
//       item.classList.add("section__image");
//     });
//   });
// };

// const addEvent = () => {
//   const accordeon = accordeons.map((item) => {
//     item.addEventListener("mouseover", fn);
//     return item;
//   });
// };
