    //trip type
    function showTripType() {
      const selectedRadio = document.querySelector('input[name="tripType"]:checked');
      const outputDiv = document.getElementById('output');
    
      if (!selectedRadio) {
          alert('Please select a trip type.');
          return;// Exit if no trip type is selected
      }
  
      // Redirect to the respective page based on the selected trip type
      const tripType = selectedRadio.value;
      if (tripType === 'One Way') {
          window.location.href = 'oneWayTrip.html'; // Replace with the actual path
      } else if (tripType === 'Round Trip') {
          window.location.href = 'RoundTrip.html'; // Replace with the actual path
      } else if (tripType === 'Outstation') {
          window.location.href = 'OutstationTrip.html'; // Replace with the actual path
      } 
  }

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}