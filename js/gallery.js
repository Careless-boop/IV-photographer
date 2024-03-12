const worksContent = document.querySelector(".works__content");
const cards = [
  {
    src: "gallery-photo1.jpg",
    alt: "Photo of Kyiv &lpar;bird view&rpar;",
  },
  {
    src: "gallery-photo2.jpg",
    alt: "Photo of Nezalezhnosti square",
  },
  {
    src: "gallery-photo3.jpg",
    alt: "Photo of a woman on a railroad",
  },
  {
    src: "gallery-photo4.jpg",
    alt: "Photo of a woman on a bench",
  },
  {
    src: "gallery-photo5.jpg",
    alt: "Photo of a woman hair back",
  },
  {
    src: "gallery-photo6.jpg",
    alt: "Photo of a woman under the bridge",
  },
  {
    src: "gallery-photo7.jpg",
    alt: "Photo of a woman on a sand",
  },
  {
    src: "gallery-photo8.jpg",
    alt: "Photo of a woman near metro station",
  },
  {
    src: "gallery-photo9.jpg",
    alt: "Photo of a woman on a side road",
  },
];

initContent(worksContent, cards);

function initContent(content, list) {
  let tempHTML = "";
  list.forEach((photo) => {
    tempHTML += `<div class="works__content-card">
    <img
      class="works__content-photo"
      src="img/${photo.src}"
      alt="${photo.alt}"
    />
    <div class="works__content-card-desc">
      ${photo.alt}
    </div>
  </div>`;
  });
  content.innerHTML = tempHTML;
}
