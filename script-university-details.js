document.addEventListener("DOMContentLoaded", function () {
    const university = JSON.parse(localStorage.getItem("selectedUniversity"));

    if (university) {
        const universityImages = {
            "utoronto": "images/utoronto.jpg",
            "ubc": "images/ubc.jpg",
            "mcgill": "images/mcgill.jpg",
            "alberta": "images/alberta.jpg",
            "waterloo": "images/waterloo.jpg",
            "western": "images/western.jpg",
            "queen": "images/queen.jpg",
            "simon": "images/simon.jpg",
            "dalhouse": "images/dalhouse.jpg",
            "ottawa": "images/ottawa.jpg",
            "mit": "images/mit.jpg",
            "stanford": "images/stanford.jpg",
            "harvard": "images/harvard.jpg",
            "yale": "images/yale.jpg",
            "princeton": "images/princeton.jpg",
            "columbia": "images/columbia.jpg",
            "chicago": "images/chicago.jpg",
            "duke": "images/duke.jpg",
            "berkeley": "images/berkeley.jpg",
            "cmu": "images/cmu.jpg",
            "oxford": "images/oxford.jpg",
            "cambridge": "images/cambridge.jpg",
            "imperial": "images/imperial.jpg",
            "lse": "images/lse.jpg",
            "kcl": "images/kcl.jpg",
            "edin": "images/edin.jpg",
            "man": "images/man.jpg",
            "bristol": "images/bristol.jpg",
            "glasgow": "images/glasgow.jpg",
            "durham": "images/durham.jpg",
            "sydney": "images/sydney.jpg",
            "melb": "images/melb.jpg",
            "anu": "images/anu.jpg",
            "land": "images/land.jpg",
            "monash": "images/monash.jpg",
            "uwa": "images/uwa.jpg",
            "adelaide": "images/adelaide.jpg",
            "uts": "images/uts.jpg",
            "mac": "images/mac.jpg",
            "rmit": "images/rmit.jpg",
            "tum": "images/tum.jpg",
            "lmu": "images/lmu.jpg",
            "heid": "images/heid.jpg",
            "hum": "images/hum.jpg",
            "fre": "images/fre.jpg",
            "rwth": "images/rwth.jpg",
            "stu": "images/stu.jpg",
            "mannh": "images/mannh.jpg",
            "tu": "images/tu.jpg",
            "col": "images/col.jpg"
        };

        const universityDetails = {
            "utoronto": {
                name: "University of Toronto",
                location: "Toronto, Ontario, Canada",
                email: "info@utoronto.ca",
                contact: "+1 416-978-2011",
                website: "https://www.utoronto.ca/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "One of the best universities in Canada with world-class faculty.",
                students: 4800,
                courses: ["Computer Science", "Business", "Medicine", "Data Science"]
            },
            "ubc": {
                name: "University of British Columbia",
                location: "Vancouver, British Columbia, Canada",
                email: "info@ubc.ca",
                contact: "+1 604-822-2211",
                website: "https://www.ubc.ca/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "A top-ranked university with a strong focus on research and innovation.",
                students: 4300,
                courses: ["Environmental Science", "Law", "Economics", "Artificial Intelligence"]
            },
            "mcgill": {
                name: "McGill University",
                location: "Montreal, Quebec, Canada",
                email: "info@mcgill.ca",
                contact: "+1 514-398-4455",
                website: "https://www.mcgill.ca/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "Known for academic excellence and global recognition.",
                students: 4100,
                courses: ["Psychology", "Neuroscience", "International Relations", "Mathematics"]
            },
            "alberta": {
                name: "University of Alberta",
                location: "Edmonton, Canada",
                email: "info@ualberta.ca",
                contact: "+1 780-492-3111",
                website: "https://www.ualberta.ca/",
                rating: "⭐⭐⭐⭐ 4.7/5",
                review: "A research-intensive university with excellent programs in engineering and sciences.",
                students: 3900,
                courses: ["Engineering", "Medicine", "Business", "Agriculture"]
            },
            "waterloo": {
                name: "University of Waterloo",
                location: "Waterloo, Canada",
                email: "info@uwaterloo.ca",
                contact: "+1 519-888-4567",
                website: "https://uwaterloo.ca/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "Top-ranked for technology, innovation, and cooperative education programs.",
                students: 3700,
                courses: ["Computer Science", "Software Engineering", "Mathematics", "Physics"]
            },
            "western": {
                name: "Western University",
                location: "London, Ontario, Canada",
                email: "info@uwo.ca",
                contact: "+1 519-661-2111",
                website: "https://www.uwo.ca/",
                rating: "⭐⭐⭐⭐ 4.6/5",
                review: "A leading university with strong programs in health sciences and law.",
                students: 3400,
                courses: ["Health Sciences", "Law", "Business", "Economics"]
            },
            "queen": {
                name: "Queen's University",
                location: "Kingston, Canada",
                email: "info@queensu.ca",
                contact: "+1 613-533-2000",
                website: "https://www.queensu.ca/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "A prestigious university known for its excellent research programs.",
                students: 3100,
                courses: ["Public Administration", "Political Science", "Medicine", "Finance"]
            },
            "simon": {
                name: "Simon Fraser University",
                location: "Burnaby, Canada",
                email: "info@sfu.ca",
                contact: "+1 778-782-3111",
                website: "https://www.sfu.ca/",
                rating: "⭐⭐⭐⭐ 4.5/5",
                review: "A well-respected university with a focus on sustainability and research.",
                students: 2900,
                courses: ["Environmental Science", "Data Analytics", "Journalism", "Computer Science"]
            },
            "dalhouse": {
                name: "Dalhousie University",
                location: "Halifax, Canada",
                email: "info@dal.ca",
                contact: "+1 902-494-2211",
                website: "https://www.dal.ca/",
                rating: "⭐⭐⭐⭐ 4.6/5",
                review: "Offers excellent programs in oceanography, law, and medicine.",
                students: 2700,
                courses: ["Oceanography", "Law", "Medicine", "Political Science"]
            },
            "ottawa": {
                name: "University of Ottawa",
                location: "Ottawa, Canada",
                email: "info@uottawa.ca",
                contact: "+1 613-562-5700",
                website: "https://www.uottawa.ca/",
                rating: "⭐⭐⭐⭐ 4.5/5",
                review: "A bilingual university with strong programs in law and international studies.",
                students: 2500,
                courses: ["Law", "International Relations", "Linguistics", "Business"]
            },
            "mit": {
                name: "Massachusetts Institute of Technology (MIT)",
                location: "Cambridge, Massachusetts, USA",
                email: "info@mit.edu",
                contact: "+1 617-253-1000",
                website: "https://www.mit.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "A world-leading university known for technology, engineering, and innovation.",
                students: 6000,
                courses: ["Computer Science", "Engineering", "Physics", "Business"]
            },
            "stanford": {
                name: "Stanford University",
                location: "Stanford, California, USA",
                email: "info@stanford.edu",
                contact: "+1 650-723-2300",
                website: "https://www.stanford.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "One of the best universities with top-notch research and entrepreneurship programs.",
                students: 5800,
                courses: ["AI & ML", "Engineering", "Law", "Medicine"]
            },
            "harvard": {
                name: "Harvard University",
                location: "Cambridge, Massachusetts, USA",
                email: "info@harvard.edu",
                contact: "+1 617-495-1000",
                website: "https://www.harvard.edu/",
                rating: "⭐⭐⭐⭐⭐ 5.0/5",
                review: "An Ivy League university known for its academic excellence and legacy.",
                students: 6200,
                courses: ["Business", "Law", "Medicine", "Political Science"]
            },
            "yale": {
                name: "Yale University",
                location: "New Haven, Connecticut, USA",
                email: "info@yale.edu",
                contact: "+1 203-432-4771",
                website: "https://www.yale.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "A prestigious Ivy League university known for law and humanities.",
                students: 4000,
                courses: ["Law", "History", "International Relations", "Medicine"]
            },
            "princeton": {
                name: "Princeton University",
                location: "Princeton, New Jersey, USA",
                email: "info@princeton.edu",
                contact: "+1 609-258-3000",
                website: "https://www.princeton.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "Renowned for its research programs and strong academic culture.",
                students: 3800,
                courses: ["Physics", "Mathematics", "Philosophy", "Engineering"]
            },
            "columbia": {
                name: "Columbia University",
                location: "New York City, New York, USA",
                email: "info@columbia.edu",
                contact: "+1 212-854-1754",
                website: "https://www.columbia.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "A top-ranked Ivy League university in the heart of NYC.",
                students: 3500,
                courses: ["Journalism", "Finance", "Medicine", "Architecture"]
            },
            "chicago": {
                name: "University of Chicago",
                location: "Chicago, Illinois, USA",
                email: "info@uchicago.edu",
                contact: "+1 773-702-1234",
                website: "https://www.uchicago.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "Known for its rigorous academic programs and research output.",
                students: 3200,
                courses: ["Economics", "Public Policy", "Political Science", "Data Science"]
            },
            "duke": {
                name: "Duke University",
                location: "Durham, North Carolina, USA",
                email: "info@duke.edu",
                contact: "+1 919-684-8111",
                website: "https://www.duke.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "A prestigious university known for medicine, business, and law.",
                students: 3000,
                courses: ["Medicine", "Law", "Engineering", "Public Health"]
            },
            "berkeley": {
                name: "University of California, Berkeley (UC Berkeley)",
                location: "Berkeley, California, USA",
                email: "info@berkeley.edu",
                contact: "+1 510-642-6000",
                website: "https://www.berkeley.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "A world-class public research university with top faculty.",
                students: 2800,
                courses: ["Engineering", "Data Science", "Economics", "Sociology"]
            },
            "cmu": {
                name: "Carnegie Mellon University",
                location: "Pittsburgh, Pennsylvania, USA",
                email: "info@cmu.edu",
                contact: "+1 412-268-2000",
                website: "https://www.cmu.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "One of the best universities for technology, AI, and robotics.",
                students: 2600,
                courses: ["Computer Science", "Robotics", "AI & Machine Learning", "Cybersecurity"]
            },
            "oxford": {
                name: "University of Oxford",
                location: "Oxford, England, UK",
                email: "info@ox.ac.uk",
                contact: "+44 1865 270000",
                website: "https://www.ox.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 5.0/5",
                review: "One of the world's leading universities with a rich academic tradition.",
                students: 4000,
                courses: ["Philosophy", "Medicine", "Computer Science", "Economics"]
            },
            "cambridge": {
                name: "University of Cambridge",
                location: "Cambridge, England, UK",
                email: "info@cam.ac.uk",
                contact: "+44 1223 337733",
                website: "https://www.cam.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "A prestigious university with outstanding research facilities.",
                students: 4200,
                courses: ["Engineering", "Law", "Mathematics", "History"]
            },
            "imperial": {
                name: "Imperial College London",
                location: "London, England, UK",
                email: "info@imperial.ac.uk",
                contact: "+44 20 7589 5111",
                website: "https://www.imperial.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "A top-tier university known for science, engineering, and business.",
                students: 3900,
                courses: ["Artificial Intelligence", "Engineering", "Medicine", "Business"]
            },
            "lse": {
                name: "London School of Economics and Political Science (LSE)",
                location: "London, England, UK",
                email: "info@lse.ac.uk",
                contact: "+44 20 7405 7686",
                website: "https://www.lse.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "Specialized in economics, law, and social sciences.",
                students: 3300,
                courses: ["Economics", "Political Science", "Law", "International Relations"]
            },
            "kcl": {
                name: "King's College London",
                location: "London, England, UK",
                email: "info@kcl.ac.uk",
                contact: "+44 20 7836 5454",
                website: "https://www.kcl.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "Known for research in medicine, humanities, and law.",
                students: 4100,
                courses: ["Law", "Medicine", "Psychology", "History"]
            },
            "edin": {
                name: "University of Edinburgh",
                location: "Edinburgh, Scotland, UK",
                email: "info@ed.ac.uk",
                contact: "+44 131 650 1000",
                website: "https://www.ed.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "One of the best universities in Scotland with a strong research background.",
                students: 3900,
                courses: ["Biomedical Sciences", "Physics", "Literature", "Political Science"]
            },
            "man": {
                name: "University of Manchester",
                location: "Manchester, England, UK",
                email: "info@manchester.ac.uk",
                contact: "+44 161 306 6000",
                website: "https://www.manchester.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "A research-focused university known for engineering and social sciences.",
                students: 3700,
                courses: ["Engineering", "Business", "Physics", "Linguistics"]
            },
            "bristol": {
                name: "University of Bristol",
                location: "Bristol, England, UK",
                email: "info@bristol.ac.uk",
                contact: "+44 117 928 9000",
                website: "https://www.bristol.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "A leading UK university with strengths in science and arts.",
                students: 3500,
                courses: ["Law", "Mathematics", "Chemistry", "Anthropology"]
            },
            "glasgow": {
                name: "University of Glasgow",
                location: "Glasgow, Scotland, UK",
                email: "info@glasgow.ac.uk",
                contact: "+44 141 330 2000",
                website: "https://www.gla.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "One of the oldest universities in the UK with a great academic reputation.",
                students: 3300,
                courses: ["Physics", "Astronomy", "Economics", "Nursing"]
            },
            "durham": {
                name: "Durham University",
                location: "Durham, England, UK",
                email: "info@durham.ac.uk",
                contact: "+44 191 334 2000",
                website: "https://www.durham.ac.uk/",
                rating: "⭐⭐⭐⭐⭐ 4.6/5",
                review: "Known for its beautiful campus and strong research programs.",
                students: 3100,
                courses: ["Law", "Theology", "Physics", "Music"]
            },
            "sydney": {
                name: "University of Sydney",
                location: "Sydney, Australia",
                email: "info@sydney.edu.au",
                contact: "+61 2 9351 2222",
                website: "https://www.sydney.edu.au/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "One of the top universities in Australia with a strong focus on research.",
                students: 4700,
                courses: ["Medicine", "Engineering", "Law", "Business"]
            },
            "melb": {
                name: "University of Melbourne",
                location: "Melbourne, Australia",
                email: "info@unimelb.edu.au",
                contact: "+61 3 9035 5511",
                website: "https://www.unimelb.edu.au/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "Ranked among the best in Australia, offering world-class education.",
                students: 4500,
                courses: ["Science", "Law", "Finance", "Architecture"]
            },
            "anu": {
                name: "Australian National University (ANU)",
                location: "Canberra, Australia",
                email: "info@anu.edu.au",
                contact: "+61 2 6125 5111",
                website: "https://www.anu.edu.au/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "A research-intensive university with strong international rankings.",
                students: 4300,
                courses: ["Physics", "Economics", "Computer Science", "Public Policy"]
            },
            "land": {
                name: "University of Queensland",
                location: "Brisbane, Australia",
                email: "info@uq.edu.au",
                contact: "+61 7 3365 1111",
                website: "https://www.uq.edu.au/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "Highly regarded for research and graduate employability.",
                students: 4100,
                courses: ["Agriculture", "Biotechnology", "Data Science", "Medicine"]
            },
            "monash": {
                name: "Monash University",
                location: "Melbourne, Australia",
                email: "info@monash.edu",
                contact: "+61 3 9902 6000",
                website: "https://www.monash.edu/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "One of Australia's largest and most prestigious universities.",
                students: 3900,
                courses: ["Engineering", "Law", "Pharmacy", "AI & Robotics"]
            },
            "uwa": {
                name: "University of Western Australia (UWA)",
                location: "Perth, Australia",
                email: "info@uwa.edu.au",
                contact: "+61 8 6488 6000",
                website: "https://www.uwa.edu.au/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "A leading Australian university with strong global connections.",
                students: 3700,
                courses: ["Marine Biology", "Mathematics", "Psychology", "Medicine"]
            },
            "adelaide": {
                name: "University of Adelaide",
                location: "Adelaide, Australia",
                email: "info@adelaide.edu.au",
                contact: "+61 8 8313 4455",
                website: "https://www.adelaide.edu.au/",
                rating: "⭐⭐⭐⭐⭐ 4.6/5",
                review: "One of Australia's most prestigious universities, known for research.",
                students: 3500,
                courses: ["Wine Science", "Engineering", "Medicine", "Cyber Security"]
            },
            "uts": {
                name: "University of Technology Sydney (UTS)",
                location: "Sydney, Australia",
                email: "info@uts.edu.au",
                contact: "+61 2 9514 2000",
                website: "https://www.uts.edu.au/",
                rating: "⭐⭐⭐⭐⭐ 4.6/5",
                review: "A leading young university with a strong focus on innovation.",
                students: 3300,
                courses: ["IT", "Design", "Business Analytics", "Robotics"]
            },
            "mac": {
                name: "Macquarie University",
                location: "Sydney, Australia",
                email: "info@mq.edu.au",
                contact: "+61 2 9850 7111",
                website: "https://www.mq.edu.au/",
                rating: "⭐⭐⭐⭐⭐ 4.5/5",
                review: "A well-ranked university with a strong business and science focus.",
                students: 3100,
                courses: ["Finance", "Linguistics", "Science", "Cyber Security"]
            },
            "rmit": {
                name: "RMIT University",
                location: "Melbourne, Australia",
                email: "info@rmit.edu.au",
                contact: "+61 3 9925 2000",
                website: "https://www.rmit.edu.au/",
                rating: "⭐⭐⭐⭐⭐ 4.5/5",
                review: "A top university known for design, technology, and business.",
                students: 2900,
                courses: ["Fashion Design", "Engineering", "Digital Media", "Marketing"]
            },
            "tum": {
                name: "Technical University of Munich (TUM)",
                location: "Munich, Germany",
                email: "info@tum.de",
                contact: "+49 89 289 01",
                website: "https://www.tum.de/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "One of Germany's best universities for engineering and technology.",
                students: 4600,
                courses: ["Engineering", "Computer Science", "Business", "Physics"]
            },
            "lmu": {
                name: "Ludwig Maximilian University of Munich (LMU)",
                location: "Munich, Germany",
                email: "info@lmu.de",
                contact: "+49 89 2180 0",
                website: "https://www.lmu.de/",
                rating: "⭐⭐⭐⭐⭐ 4.9/5",
                review: "A prestigious university known for humanities and sciences.",
                students: 4400,
                courses: ["Medicine", "Law", "Philosophy", "Economics"]
            },
            "heid": {
                name: "Heidelberg University",
                location: "Heidelberg, Germany",
                email: "info@uni-heidelberg.de",
                contact: "+49 6221 54-0",
                website: "https://www.uni-heidelberg.de/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "Germany's oldest university with a strong global reputation.",
                students: 4200,
                courses: ["Medicine", "Physics", "Linguistics", "Philosophy"]
            },
            "hum": {
                name: "Humboldt University of Berlin",
                location: "Berlin, Germany",
                email: "info@hu-berlin.de",
                contact: "+49 30 2093-0",
                website: "https://www.hu-berlin.de/",
                rating: "⭐⭐⭐⭐⭐ 4.8/5",
                review: "A prestigious university known for its research and history.",
                students: 4000,
                courses: ["Political Science", "Law", "Mathematics", "Biology"]
            },
            "fre": {
                name: "University of Freiburg",
                location: "Freiburg, Germany",
                email: "info@uni-freiburg.de",
                contact: "+49 761 203-0",
                website: "https://www.uni-freiburg.de/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "Known for excellence in environmental sciences and medicine.",
                students: 3800,
                courses: ["Environmental Science", "Medicine", "Physics", "Data Science"]
            },
            "rwth": {
                name: "RWTH Aachen University",
                location: "Aachen, Germany",
                email: "info@rwth-aachen.de",
                contact: "+49 241 80-1",
                website: "https://www.rwth-aachen.de/",
                rating: "⭐⭐⭐⭐⭐ 4.7/5",
                review: "A leading technical university in Germany for engineering.",
                students: 3600,
                courses: ["Mechanical Engineering", "Computer Science", "Aerospace", "Robotics"]
            },
            "stu": {
                name: "University of Stuttgart",
                location: "Stuttgart, Germany",
                email: "info@uni-stuttgart.de",
                contact: "+49 711 685-0",
                website: "https://www.uni-stuttgart.de/",
                rating: "⭐⭐⭐⭐⭐ 4.6/5",
                review: "Well known for automotive and mechanical engineering.",
                students: 3400,
                courses: ["Automotive Engineering", "Artificial Intelligence", "Mechanical Engineering", "Mathematics"]
            },
            "mannh": {
                name: "University of Mannheim",
                location: "Mannheim, Germany",
                email: "info@uni-mannheim.de",
                contact: "+49 621 181-0",
                website: "https://www.uni-mannheim.de/",
                rating: "⭐⭐⭐⭐⭐ 4.6/5",
                review: "Highly ranked for business and social sciences.",
                students: 3200,
                courses: ["Business Administration", "Economics", "Sociology", "Data Analytics"]
            },
            "tu": {
                name: "TU Dresden",
                location: "Dresden, Germany",
                email: "info@tu-dresden.de",
                contact: "+49 351 463-0",
                website: "https://www.tu-dresden.de/",
                rating: "⭐⭐⭐⭐⭐ 4.5/5",
                review: "A leading German university with strong research in technology.",
                students: 3000,
                courses: ["Engineering", "Physics", "Nanotechnology", "Material Science"]
            },
            "col": {
                name: "University of Cologne",
                location: "Cologne, Germany",
                email: "info@uni-koeln.de",
                contact: "+49 221 470-0",
                website: "https://www.uni-koeln.de/",
                rating: "⭐⭐⭐⭐⭐ 4.5/5",
                review: "One of Germany’s largest and oldest universities.",
                students: 2800,
                courses: ["Law", "Humanities", "Pharmaceutical Sciences", "Economics"]
            }
            
        };

        const details = universityDetails[university.id] || {};
        document.getElementById("university-image").src = universityImages[university.id] || "images/default.jpg";
        document.getElementById("university-name").innerText = details.name || "Unknown University";
        document.getElementById("university-location").innerText = details.location || "Unknown Location";
        document.getElementById("university-email").innerText = details.email || "N/A";
        document.getElementById("university-contact").innerText = details.contact || "N/A";
        document.getElementById("university-website").innerHTML = `<a href="${details.website}" target="_blank">${details.website}</a>`;
        document.getElementById("university-rating").innerText = details.rating || "N/A";
        document.getElementById("university-review").innerText = details.review || "No reviews available.";
        document.getElementById("university-students").innerText = details.students || "N/A";

        const courseList = document.getElementById("university-courses");
        courseList.innerHTML = "";
        details.courses.forEach(course => {
            const li = document.createElement("li");
            li.innerText = course;
            courseList.appendChild(li);
        });

    } else {
        document.getElementById("university-details").innerHTML = "<p>No university selected. Go back and choose one.</p>";
    }
});
