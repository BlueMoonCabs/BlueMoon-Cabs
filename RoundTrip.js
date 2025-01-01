// RoundTrip.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("roundTripForm");

    window.submitRoundTripForm = function () {
        // Retrieve form data
        const bookerName = document.getElementById("bookername").value;
        const bookerEmail = document.getElementById("bookeremail").value;
        const bookerNumber = document.getElementById("bookernumber").value;
        const startDestination = document.getElementById("departure").value;
        const startDate = document.getElementById("startDate").value;
        const dropDate = document.getElementById("dropDate").value;
        const vehicleType = document.getElementById("travelers").value;
        const additionalNotes = document.getElementById("notes").value;

        if (!bookerName || !bookerEmail || !bookerNumber || !startDestination || !startDate || !dropDate || !vehicleType) {
            alert('Please fill in all required fields.');
            return;
        }
        if(bookerNumber.length!=10)
        {
            alert('Please enter Valid Phone Number');
            return;
        }
        // Prepare the data object for EmailJS
        const templateParams = {
            bookername: bookerName,
            bookeremail: bookerEmail,
            bookernumber: bookerNumber,
            departure: startDestination,
            startdate: startDate,
            dropdate: dropDate,
            travelers: vehicleType,
            notes: additionalNotes,
        };

        // Send the email using EmailJS
        emailjs
            .send("service_caw58bb", "template_a7akgyt", templateParams)
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Your trip details have been successfully submitted.We will call back to you soon");
                    form.reset(); // Clear the form
                },
                (error) => {
                    console.error("FAILED...", error);
                    alert("There was an error submitting your details. Please try again later.");
                }
            );
    };
});

// Sample data for pickup locations (you can fetch this dynamically if needed)
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

// Function to generate suggestions
function suggestPickupLocations(query) {
    const suggestionList = document.getElementById("suggestion-list");
    suggestionList.innerHTML = ""; // Clear previous suggestions
    suggestionList.style.display = "none"; // Hide the list initially

    if (query.trim() === "") {
        return; // Don't show suggestions for empty input
    }

    // Filter matching suggestions
    const matches = pickupLocations.filter(location =>
        location.toLowerCase().includes(query.toLowerCase())
    );

    // If matches are found, create suggestion items
    if (matches.length > 0) {
        matches.forEach(match => {
            const listItem = document.createElement("li");
            listItem.textContent = match;
            listItem.style.padding = "8px";
            listItem.style.cursor = "pointer";

            // On clicking a suggestion, fill the input and hide suggestions
            listItem.addEventListener("click", () => {
                document.getElementById("departure").value = match;
                suggestionList.innerHTML = ""; // Clear suggestions
                suggestionList.style.display = "none"; // Hide the list
            });

            suggestionList.appendChild(listItem);
        });

        // Show the list after populating
        suggestionList.style.display = "block";
    }
}

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
    const inputField = document.getElementById("departure");
    const suggestionList = document.getElementById("suggestion-list");

    if (!inputField.contains(e.target) && !suggestionList.contains(e.target)) {
        suggestionList.style.display = "none"; // Hide the list
    }
});
