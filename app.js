const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransiton() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      if (currentBtn) {
        currentBtn.classList.remove("active-btn");
      }
      this.classList.add("active-btn");
    });
  }
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}
PageTransiton();

function download() {
  const link = document.createElement("a");
  link.href = "img/HoHoangNguyenKhang_aCV.pdf"; // Replace with the actual path to your CV
  link.download = "HoHoangNguyenKhang_aCV.pdf"; // This will be the default filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
