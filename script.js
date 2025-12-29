// Mobile nav
const burger = document.getElementById("burger");
const navMobile = document.getElementById("navMobile");

burger?.addEventListener("click", () => {
  const isOpen = navMobile.style.display === "block";
  navMobile.style.display = isOpen ? "none" : "block";
  burger.setAttribute("aria-expanded", String(!isOpen));
  navMobile.setAttribute("aria-hidden", String(isOpen));
});

// Close mobile nav when clicking a link
navMobile?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navMobile.style.display = "none";
    burger.setAttribute("aria-expanded", "false");
    navMobile.setAttribute("aria-hidden", "true");
  });
});

// Copy email
const emailText = document.getElementById("emailText");
const copyBtn = document.getElementById("copyEmail");

copyBtn?.addEventListener("click", async () => {
  const email = emailText?.textContent?.trim() || "";
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
  } catch {
    alert("Copy failed. Please copy manually: " + email);
  }
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Back to top + progress bar
const toTop = document.getElementById("toTop");
const topProgress = document.getElementById("topProgress");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = h > 0 ? (y / h) * 100 : 0;

  if (topProgress) topProgress.style.width = `${p}%`;
  if (toTop) toTop.classList.toggle("show", y > 600);
});

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});