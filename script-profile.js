document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullName = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value;
    let state = document.getElementById("state").value;
    let pincode = document.getElementById("pincode").value;
    let qualification = document.getElementById("qualification").value;
    let year = document.getElementById("year").value;
    let university = document.getElementById("university").value;
    let specialization = document.getElementById("specialization").value;
    let cgpa = document.getElementById("cgpa").value;
    let experience = document.getElementById("experience").value;

    if (!fullName || !email || !phone || !dob || !gender || !address || !state || !pincode || !qualification || !year || !university || !specialization || !cgpa || !experience) {
        alert("Please fill out all fields.");
        return;
    }

    alert("Profile submitted successfully!");

    window.location.href = "select-country.html";

    
    if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("Please login first.");
        window.location.href = "login.html";
    }

    document.getElementById("profileForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        alert("Profile submitted successfully!");
        window.location.href = "select-country.html"; 
    });

});
