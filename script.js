
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

fetch("https://jwfpa9y7c1.execute-api.ap-south-1.amazonaws.com/prod/visits")
  .then(response => response.json())
  .then(data => {
    const parsed = JSON.parse(data.body);  // ✅ Fix: Parse the string body
    document.getElementById("visitor-count").textContent = `👁 Visitors: ${parsed.count}`;
  })
  .catch(error => {
    console.error("Error fetching visitor count:", error);
    document.getElementById("visitor-count").textContent = `👁 Visitors: N/A`;
  });
