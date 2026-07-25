// ==========================
// Dashboard Portfolio Script
// ==========================

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    const links = document.querySelectorAll(".nav-link");

    links.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });
    <div class="row">

<div class="col-lg-6">

<h5>HTML</h5>

<div class="progress mb-4">
<div class="progress-bar bg-primary" style="width:95%">
95%
</div>
</div>

<h5>CSS</h5>

<div class="progress mb-4">
<div class="progress-bar bg-success" style="width:90%">
90%
</div>
</div>

<h5>JavaScript</h5>

<div class="progress mb-4">
<div class="progress-bar bg-warning" style="width:80%">
80%
</div>
</div>

</div>

<div class="col-lg-6">

<h5>Java</h5>

<div class="progress mb-4">
<div class="progress-bar bg-danger" style="width:88%">
88%
</div>
</div>

<h5>Python</h5>

<div class="progress mb-4">
<div class="progress-bar bg-info" style="width:85%">
85%
</div>
</div>

<h5>SQL</h5>

<div class="progress mb-4">
<div class="progress-bar bg-secondary" style="width:80%">
80%
</div>
</div>

</div>

</div>

</div>

</section>

<!-- ================= PROJECTS ================= -->

<section id="projects" class="py-5">

<div class="container">

<div class="text-center mb-5">

<h2>Projects</h2>

<p>My Recent Works</p>

</div>

<div class="row">

<div class="col-md-4">

<div class="card shadow">

<img src="project1.jpg"
class="card-img-top"
alt="Project">

<div class="card-body">

<h4>Portfolio Website</h4>

<p>

Responsive personal portfolio using
HTML, CSS, Bootstrap and JavaScript.

</p>

</div>

</div>

</div>

<div class="col-md-4">

<div class="card shadow">

<img src="project2.jpg"
class="card-img-top"
alt="Project">

<div class="card-body">

<h4>Harbour Tracking</h4>

<p>

Ship tracking dashboard with
interactive maps.

</p>

</div>

</div>

</div>

<div class="col-md-4">

<div class="card shadow">

<img src="project3.jpg"
class="card-img-top"
alt="Project">

<div class="card-body">

<h4>Student Portal</h4>

<p>

Student Registration System
using Web Technologies.

</p>

</div>

</div>

</div>

</div>

</div>

</section>

<!-- ================= EDUCATION ================= -->

<section id="education" class="py-5">

<div class="container">

<div class="text-center mb-5">

<h2>Education</h2>

<p>Academic Details</p>

</div>

<div class="timeline">

<div class="timeline-item">

<h4>BE Computer Science Engineering</h4>

<p>

Anna University Affiliated College

</p>

<p>

Expected Graduation : 2028

</p>

</div>

<div class="timeline-item">

<h4>Higher Secondary</h4>

<p>

Your School Name

</p>

</div>

</div>

</div>

</section>

<!-- ================= CONTACT ================= -->

<section id="contact" class="py-5">

<div class="container">

<div class="text-center mb-5">

<h2>Contact Me</h2>

<p>Let's Work Together</p>

</div>

<div class="row">

<div class="col-lg-6">

<h4>Get In Touch</h4>

<p>

Email :
yourmail@gmail.com

</p>

<p>

Phone :
+91 XXXXXXXXXX

</p>

<p>

Location :
Tamil Nadu, India

</p>

</div>

<div class="col-lg-6">

<form>

<input
type="text"
class="form-control mb-3"
placeholder="Your Name">

<input
type="email"
class="form-control mb-3"
placeholder="Your Email">

<textarea
class="form-control mb-3"
rows="6"
placeholder="Your Message"></textarea>

<button
class="btn btn-primary btn-lg">
Send Message
</button>

</form>

</div>

</div>

</div>

</section>

<!-- ================= FOOTER ================= -->

<footer class="text-center py-4">

<div class="container">

<p>

© 2026 Raj Kumar.

All Rights Reserved.

</p>

</div>

</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="script.js"></script>

</body>

</html>

    // Active menu
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        links.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

    // Card animation
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(function () {

            card.style.transition = "0.6s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }, index * 150);

    });

});


// ==========================
// Back To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.zIndex = "9999";

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
