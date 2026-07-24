// Mobile Navbar
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close mobile menu after clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Copy Email
const copyEmailBtn = document.getElementById("copyEmail");
const emailText = document.getElementById("emailText");

if (copyEmailBtn && emailText) {
  copyEmailBtn.addEventListener("click", async () => {
    const email = emailText.textContent.trim();

    try {
      await navigator.clipboard.writeText(email);
      copyEmailBtn.textContent = "Copied!";
      
      setTimeout(() => {
        copyEmailBtn.textContent = "Copy Email";
      }, 1500);
    } catch (error) {
      alert("Failed to copy email. Please copy it manually.");
    }
  });
}

// Current Year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Back to Top + Progress Bar
const toTop = document.getElementById("toTop");
const topProgress = document.getElementById("topProgress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (topProgress) {
    topProgress.style.width = `${scrollPercent}%`;
  }

  if (toTop) {
    if (scrollTop > 500) {
      toTop.classList.add("show");
    } else {
      toTop.classList.remove("show");
    }
  }
});

if (toTop) {
  toTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}