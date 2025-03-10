document.addEventListener("DOMContentLoaded", function() {
    const country = localStorage.getItem("selectedCountry") || "canada";
    document.getElementById("selected-country-name").innerText = "Selected Country: " + country.toUpperCase();

    const universitiesByCountry = {
        canada: [
            { name: "University of Toronto", location: "Toronto, Canada", id: "utoronto", students: 4800 },
            { name: "UBC", location: "Vancouver, Canada", id: "ubc", students: 4300 },
            { name: "McGill University", location: "Montreal, Canada", id: "mcgill", students: 4100 },
            { name: "University of Alberta", location: "Edmonton, Canada", id: "alberta", students: 3900 },
            { name: "University of Waterloo", location: "Waterloo, Canada", id: "waterloo", students: 3700 },
            { name: "Western University", location: "Canada", id: "western", students: 3400 },
            { name: "Queen's University", location: "Kingston, Canada", id: "queen", students: 3100 },
            { name: "Simon Fraser University", location: "Burnaby, Canada", id: "simon", students: 2900 },
            { name: "Dalhousie University", location: "Halifax, Canada", id: "dalhouse", students: 2700 },
            { name: "University of Ottawa", location: "Ottawa, Canada", id: "ottawa", students: 2500 }
        ],
        usa: [
            { name: "MIT", location: "Massachusetts", id: "mit", students: 6000 },
            { name: "Stanford", location: "California", id: "stanford", students: 5800 },
            { name: "Harvard", location: "Massachusetts", id: "harvard", students: 6200 },
            { name: "Yale University", location: "New Haven, Connecticut, USA", id: "yale", students: 4000 },
            { name: "Princeton University", location: "Princeton, New Jersey, USA", id: "princeton", students: 3800 },
            { name: "Columbia University", location: "New York City, New York", id: "columbia", students: 3500 },
            { name: "University of Chicago", location: "Chicago, Illinois, USA", id: "chicago", students: 3200 },
            { name: "Duke University", location: "Durham, North Carolina, USA", id: "duke", students: 3000 },
            { name: "UC Berkeley", location: "Berkeley, California, USA", id: "berkeley", students: 2800 },
            { name: "Carnegie Mellon University", location: "Pittsburgh, Pennsylvania, USA", id: "cmu", students: 2600 }
        ],
        uk: [
            { name: "Oxford", location: "Oxford", id: "oxford", students: 4000 },
            { name: "Cambridge", location: "Cambridge", id: "cambridge", students: 4200 },
            { name: "Imperial College", location: "London", id: "imperial", students: 3900 },
            { name: "London School of Economics", location: "London, England, UK", id: "lse", students: 3300 },
            { name: "King's College London", location: "London, England, UK", id: "kcl", students: 4100 },
            { name: "University of Edinburgh", location: "Scotland, UK", id: "edin", students: 3900 },
            { name: "University of Manchester", location: "Manchester, England, UK", id: "man", students: 3700 },
            { name: "University of Bristol", location: "Bristol, England, UK", id: "bristol", students: 3500 },
            { name: "University of Glasgow", location: "Glasgow, Scotland, UK", id: "glasgow", students: 3300 },
            { name: "Durham University", location: "Durham, England, UK", id: "durham", students: 3100 }
        ],
        australia: [
            { name: "University of Sydney", location: "Sydney", id: "sydney", students: 4700 },
            { name: "University of Melbourne", location: "Melbourne", id: "melb", students: 4500 },
            { name: "ANU", location: "Canberra, Australia", id: "anu", students: 4300 },
            { name: "University of Queensland", location: "Brisbane, Australia", id: "land", students: 4100 },
            { name: "Monash University", location: "Melbourne, Australia", id: "monash", students: 3900 },
            { name: "UWA", location: "Perth, Australia", id: "uwa", students: 3700 },
            { name: "University of Adelaide", location: "Adelaide, Australia", id: "adelaide", students: 3500 },
            { name: "UTS", location: "Sydney, Australia", id: "uts", students: 3300 },
            { name: "Macquarie University", location: "Sydney, Australia", id: "mac", students: 3100 },
            { name: "RMIT University", location: "Melbourne, Australia", id: "rmit", students: 2900 }
        ],
        germany: [
            { name: "TUM", location: "Munich, Germany", id: "tum", students: 4600 },
            { name: "LMU", location: "Munich, Germany", id: "lmu", students: 4400 },
            { name: "Heidelberg University", location: "	Heidelberg, Germany", id: "heid", students: 4200 },
            { name: "Humboldt University of Berlin", location: "Berlin, Germany", id: "hum", students: 4000 },
            { name: "University of Freiburg", location: "Freiburg, Germany", id: "fre", students: 3800 },
            { name: "RWTH Aachen University", location: "Aachen, Germany", id: "rwth", students: 3600 },
            { name: "University of Stuttgart", location: "Stuttgart, Germany", id: "stu", students: 3400 },
            { name: "University of Mannheim", location: "Mannheim, Germany", id: "mannh", students: 3200 },
            { name: "TU Dresden", location: "Dresden, Germany", id: "tu", students: 3000 },
            { name: "University of Cologne", location: "Cologne, Germany", id: "col", students: 2800 }
        ]
    };

    const universities = universitiesByCountry[country];
    const container = document.getElementById("university-container");

    universities.forEach(university => {
        const card = document.createElement("div");
        card.classList.add("university-card");
        card.innerHTML = `<h3>${university.name}</h3><p>${university.location}</p>`;
        card.addEventListener("click", () => {
            localStorage.setItem("selectedUniversity", JSON.stringify(university));
            window.location.href = "university-details.html";
        });
        container.appendChild(card);
    });

    // Chart
    const ctx = document.getElementById("universityChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: universities.map(u => u.name),
            datasets: [{
                label: "Number of Students Joined",
                data: universities.map(u => u.students),
                backgroundColor: ["pink","brown","blue", "yellow","green","gold","purple","orange","black","white"],
                borderColor: "#333",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
