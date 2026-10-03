(function () {
  /** Replace with your GitHub username after signup — or set ?user=yourname in the URL while testing */
  var params = new URLSearchParams(window.location.search);
  var githubUser = params.get("user") || "DarshanaBalan";

  var base = "https://github.com/" + encodeURIComponent(githubUser);

  var githubLink = document.getElementById("github-link");
  if (githubLink) githubLink.href = base;

  var qml = document.getElementById("qml-demo-link");
  if (qml) {
    qml.href =
      base +
      "/darshana-ats-resume/tree/main/WORKSPACE-QML/QML%20TEST%20APPLICATION";
  }

  var cpp = document.getElementById("cpp-practice-link");
  if (cpp) cpp.href = base + "/darshana-ats-resume/tree/main/cpp-interview-practice";

  var qt = document.getElementById("qt-practice-link");
  if (qt) qt.href = base + "/darshana-ats-resume/tree/main/qt-interview-practice";

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
