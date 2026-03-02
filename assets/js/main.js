

// report filter
const openFilterBtn = document.getElementById("openFilterBtn");
const filterModal = document.getElementById("filterModal");
const cancelFilterBtn = document.getElementById("cancelFilterBtn");

openFilterBtn.addEventListener("click", () => {
  filterModal.classList.remove("hidden");
});

cancelFilterBtn.addEventListener("click", () => {
  filterModal.classList.add("hidden");
});

filterModal.addEventListener("click", (e) => {
  if (e.target === filterModal) {
    filterModal.classList.add("hidden");
  }
});


document.getElementById("filterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  filterModal.classList.add("hidden");
});

  const links = document.querySelectorAll(".sidebar ul li");

  links.forEach(link => {
    link.addEventListener("click", function () {
      
     
      links.forEach(item => item.classList.remove("active"));
      
      
      this.classList.add("active");
    });
  });


