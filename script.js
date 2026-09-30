
const EMAIL = "dhara.gadhavi@gmail.com";

const nameEl = document.querySelector(".name");
"Dhara".split("").forEach((ch, i) => {
  const s = document.createElement("span");
  s.textContent = ch;
  s.style.animationDelay = i * 0.08 + "s";
  s.setAttribute("aria-hidden", "true");
  nameEl.appendChild(s);
});

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.querySelector(".tab").addEventListener("click", () => {
    panels.forEach((p) => {
      const isThis = p === panel;
      p.classList.toggle("open", isThis);
      p.querySelector(".tab").setAttribute("aria-expanded", String(isThis));
    });
  });
});

const status = document.getElementById("status");

document.getElementById("copyMail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    status.textContent = "Email address copied.";
  } catch {
    status.textContent = "Could not copy. My email is " + EMAIL;
  }
});

document.getElementById("send").addEventListener("click", () => {
  const name = document.getElementById("fName").value.trim();
  const msg = document.getElementById("fMsg").value.trim();
  if (!name || !msg) {
    status.textContent = "Add your name and a short description first.";
    return;
  }
  const subject = encodeURIComponent("Project idea from " + name);
  const body = encodeURIComponent(msg);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = "Opening your email app.";
});

document.getElementById("year").textContent = new Date().getFullYear();
