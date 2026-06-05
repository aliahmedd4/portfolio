require("dotenv").config();
const express = require("express");
const path = require("path");
const { projects, skillGroups, languages, profile } = require("./data/data");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const siteData = { projects, skillGroups, languages, profile };

app.get("/", (req, res) => {
  res.render("index", {
    ...siteData,
    currentPath: "/",
    pageTitle: "Ali Hassan — CS Student & Developer",
  });
});

app.get("/projects", (req, res) => {
  res.render("projects", {
    ...siteData,
    currentPath: "/projects",
    pageTitle: "Projects — Ali Hassan",
  });
});

app.get("/skills", (req, res) => {
  res.render("skills", {
    ...siteData,
    currentPath: "/skills",
    pageTitle: "Skills — Ali Hassan",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    ...siteData,
    currentPath: "/contact",
    pageTitle: "Contact — Ali Hassan",
  });
});

app.get("/resume", (req, res) => {
  const resumePath = path.join(__dirname, "public", "resume.pdf");
  res.download(resumePath, "Ali_Hassan_Resume.pdf", (err) => {
    if (err) {
      res.status(404).render("404", {
        ...siteData,
        currentPath: "",
        pageTitle: "404 — Ali Hassan",
      });
    }
  });
});

app.use((req, res) => {
  res.status(404).render("404", {
    ...siteData,
    currentPath: "",
    pageTitle: "404 — Ali Hassan",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
