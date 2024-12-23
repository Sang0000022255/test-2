// Khi cuộn đến phần tử, áp dụng class 'active'
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const handleScroll = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
});
