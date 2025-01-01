// Initialize EmailJS
document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("nt0HPvkEiLaXV84d1"); // Replace with your EmailJS public key
  });
  
  document.getElementById("submitBtn").addEventListener("click", () => {
    // Retrieve form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const pickup_location = document.getElementById("pickup_location").value;
    const pickup_time = document.getElementById("pickup_time").value;
    const tripHours = document.getElementById("tripHours").value;
    const vehicleType = document.getElementById("vehicleType").value;
    const notes = document.getElementById("notes").value;
  
    // Validate required fields
    if (!name || !email || !phone || !pickup_location || !pickup_time || !tripHours || !vehicleType) {
      alert("Please fill out all required fields.");
      return;
    }
    if(phone.length!=10 )
        {
            alert('Please enter Valid Phone Number');
            return;
        }
  
    // Prepare data for EmailJS
    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      pickup_location: pickup_location,
      pickup_time: pickup_time,
      trip_hours: tripHours,
      vehicle_type: vehicleType,
      special_requests: notes,
    };
  
    // Send email using EmailJS
    emailjs
      .send("service_08mdyus", "template_8dq861n", templateParams)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Booking details sent successfully!We will call back to you soon");
          document.getElementById("hourlyTripForm").reset(); // Reset the form
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send booking details. Please try again.");
        }
      );
  });

  //auto-complete for pickup
const pickupLocations = [
  "Race Course Road",
  "Avinashi Road",
  "RS Puram",
  "Peelamedu",
  "Saravanampatti",
  "Saibaba Colony",
  "Gandhipuram",
  "Sungam",
  "Town Hall",
  "Ukkadam",
  "Ganapathy",
  "Thudiyalur",
  "Singanallur",
  "Vadavalli",
  "Kalapatti",
  "Sidco Industrial Estate",
  "Hope College",
  "Podanur",
  "Vellakinar",
  "Koundampalayam",
  "Vilankurichi",
  "NGGO Colony",
  "Periyanaickenpalayam",
  "Marudamalai",
  "Kovaipudur",
  "Vedapatti",
  "Kuniamuthur",
  "Pappanaickenpalayam",
  "Krishnarayapuram",
  "Chinnavedampatti",
  "Keeranatham",
  "Thondamuthur",
  "Kinathukadavu",
  "Pollachi Road",
  "Mettupalayam Road",
  "Sitra",
  "Chinniampalayam",
  "Kalveerampalayam",
  "Neelambur",
  "Singanallur Road",
  "Peelamedu Pudur",
  "Sarojini Street",
  "Flower Market Road",
  "Big Bazaar Street",
  "Cross Cut Road",
  "Oppanakara Street",
  "RS Puram West",
  "RS Puram East",
  "Dr. Nanjappa Road",
  "Diwan Bahadur Road",
  "East Lokamanya Street",
  "West Lokamanya Street",
  "Venkataswamy Road",
  "Palghat Road",
  "Rathinapuri Main Road",
  "Ram Nagar 1st Street",
  "Ram Nagar 2nd Street",
  "Ram Nagar 3rd Street",
  "Ram Nagar 4th Street",
  "Vysial Street",
  "Sivananda Colony 1st Street",
  "Sivananda Colony 2nd Street",
  "V.O.C Road",
  "Ashok Nagar Main Road",
  "Rajaji Road",
  "Subramaniyam Street",
  "Balaji Avenue",
  "Park Gate Road",
  "Power House Road",
  "Nehru Street",
  "Vinayakar Koil Street",
  "Vivekananda Street",
  "Devaraj Street",
  "Ramakrishna Street",
  "Karupparayan Street",
  "Saradha Mill Road",
  "Sri Ram Nagar",
  "LIC Colony",
  "Velandipalayam Road",
  "Coimbatore Bazaar Street",
  "Sugunapuram Main Road",
  "Velandipalayam North Street",
  "Sowripalayam Main Road",
  "PN Pudur",
  "KNG Pudur Road",
  "Avarampalayam Main Road",
  "PSG College of Technology",
  "Coimbatore Institute of Technology",
  "Government College of Technology",
  "Amrita Vishwa Vidyapeetham",
  "Karunya Institute of Technology and Sciences",
  "Kumaraguru College of Technology",
  "PSG College of Arts and Science",
  "Government Arts College",
  "Dr. N.G.P. Arts and Science College",
  "PSGR Krishnammal College for Women",
  "Sri Krishna Arts and Science College",
  "Hindusthan College of Arts and Science",
  "KG College of Arts and Science",
  "Nirmala College for Women",
  "Rathinam College of Arts and Science",
  "Sri Ramakrishna College of Arts and Science",
  "Coimbatore Medical College",
  "PSG Institute of Medical Sciences & Research",
  "Government Law College",
  "Air Force Administrative College",
  "Tamil Nadu Agricultural University",
  "Bharathiar University",
  "Anna University Regional Campus Coimbatore",
  "Avinashilingam Institute for Home Science and Higher Education for Women",
  "Karpagam Academy of Higher Education",
  "Dr. G.R. Damodaran College of Science",
  "CBM College of Arts and Science",
  "Sankara College of Science and Commerce",
  "RVS College of Arts and Science",
  "Sri Ramakrishna Mission Vidyalaya College of Arts and Science",
  "Sree Narayana Guru College",
  "CMS College of Science and Commerce",
  "Park College of Engineering and Technology",
  "Info Institute of Engineering",
  "Adithya Institute of Technology",
  "Akshaya College of Engineering and Technology",
  "JCT College of Engineering and Technology",
  "Kathir College of Engineering",
  "KPR Institute of Engineering and Technology",
  "SNS College of Engineering",
  "VSB College of Engineering Technical Campus",
  "Dr. N.G.P. Institute of Technology",
  "Hindusthan Institute of Technology",
  "Kalaignar Karunanidhi Institute of Technology",
  "Karpagam College of Engineering",
  "Karpagam Institute of Technology",
  "KGiSL Institute of Technology",
  "PSG Institute of Management",
  "Amrita School of Business",
  "DJ Academy of Managerial Excellence",
  "Jansons School of Business",
  "KV Institute of Management and Information Studies",
  "PPG Business School",
  "Coimbatore Marine College",
  "RVS College of Engineering and Technology",
  "Aravind Eye Hospital",
  "Vishnu ENT Hospital",
  "Kongunad Hospital",
  "GEM Hospital Coimbatore",
  "Sri Ramakrishna Hospital",
  "KG Hospital",
  "Ganga Hospital",
  "FIMS Hospitals",
  "NG Hospital & Research Centre",
  "G. Kuppuswamy Naidu Memorial Hospital",
  "Kovai Medical Center and Hospital",
  "PSG Hospitals",
  "KMCH Speciality Hospital",
  "S.P.T Hospital Ramnagar",
  "Hindustan Hospital",
  "Royal Care Hospital",
  "Coimbatore Medical College Hospital",
  "Dr. Mohan’s Diabetes Specialities Centre",
  "Sankara Eye Foundation",
  "PSG Institute of Medical Sciences & Research",
  "Coimbatore Child Trust Hospital",
  "VGM Hospital",
  "Medwin Hospital",
  "Deepam Hospital",
  "Richmond Hospital",
  "N.M. Hospital",
  "Sri Bala Medical Centre Hospital",
  "Masonic Medical Centre for Children",
  "Coimbatore Junction",
  "Ukkadam Bus Stand",
  "Gandhipuram Central Bus Stand",
  "Airport",
  "Singanallur Bus Stand",
  "Brookefields Mall",
  "Fun Mall",
  "Prozone Mall",
  "Lulu Mall",
  "Codissia Trade Fair Complex",
  "Perur Temple",
  "Idigarai"
  ];
  
  function suggestPickupLocations(input) {
      const suggestionsList = document.getElementById("pickup-suggestions");
      suggestionsList.innerHTML = ""; // Clear existing suggestions
  
      if (input.trim().length === 0) {
          suggestionsList.style.display = "none";
          return;
      }
  
      const filteredLocations = pickupLocations.filter(location =>
          location.toLowerCase().startsWith(input.toLowerCase())
      );
  
      if (filteredLocations.length === 0) {
          suggestionsList.style.display = "none";
          return;
      }
  
      suggestionsList.style.display = "block";
  
      filteredLocations.forEach(location => {
          const suggestionItem = document.createElement("li");
          suggestionItem.textContent = location;
          suggestionItem.onclick = () => {
              document.getElementById("pickup_location").value = location;
              suggestionsList.style.display = "none";
          };
          suggestionsList.appendChild(suggestionItem);
      });
  }
  
  document.addEventListener("click", (event) => {
      const suggestionsList = document.getElementById("pickup-suggestions");
      if (!document.getElementById("pickup-search").contains(event.target)) {
          suggestionsList.style.display = "none";
      }
  });