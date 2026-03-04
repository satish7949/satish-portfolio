AOS.init({
  duration:1000,
  once:true
});

// Review section
let currentRating = 0;

function setRating(rating){
  currentRating = rating;
  const stars = document.querySelectorAll(".stars span");

  stars.forEach((star,index)=>{
    if(index < rating){
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

function addReview(){
  const name = document.getElementById("reviewName").value;
  const message = document.getElementById("reviewMessage").value;

  if(name === "" || message === ""){
    alert("Please fill all fields");
    return;
  }

  const reviewList = document.getElementById("reviewList");

  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card");

  reviewCard.innerHTML = `
    <h3>${name}</h3>
    <p>${"⭐".repeat(currentRating)}</p>
    <p>${message}</p>
  `;

  reviewList.appendChild(reviewCard);

  document.getElementById("reviewName").value = "";
  document.getElementById("reviewMessage").value = "";
}