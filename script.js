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
  const name = document.getElementById("reviewName").value.trim();
  const message = document.getElementById("reviewMessage").value.trim();

  if(name === "" || message === ""){
    alert("Please fill all fields");
    return;
  }

  if(currentRating === 0){
    alert("Please select rating");
    return;
  }

  const reviewList = document.getElementById("reviewList");

  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card");

  const h3 = document.createElement("h3");
  h3.textContent = name;

  const ratingPara = document.createElement("p");
  ratingPara.textContent = "⭐".repeat(currentRating);

  const msgPara = document.createElement("p");
  msgPara.textContent = message;

  reviewCard.appendChild(h3);
  reviewCard.appendChild(ratingPara);
  reviewCard.appendChild(msgPara);

  reviewList.appendChild(reviewCard);

  document.getElementById("reviewName").value = "";
  document.getElementById("reviewMessage").value = "";
  setRating(0);
}
