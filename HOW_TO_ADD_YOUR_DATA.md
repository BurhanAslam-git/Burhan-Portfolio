# How to Add Your Real Projects & Experience

## ✅ Social Links Updated!

I've already updated all your social links:
- **GitHub**: `https://github.com/BurhanAslam-git`
- **LinkedIn**: `https://www.linkedin.com/in/burhan-aslam/`

---

## 📋 Step-by-Step Guide

### Step 1: Get Your GitHub Projects

1. Go to: `https://github.com/BurhanAslam-git?tab=repositories`
2. Identify 3-5 best projects to showcase
3. For each project, note down:
   - Project name
   - Description (from README or your own)
   - Technologies used (from repository)
   - GitHub URL
   - Live demo URL (if available)
   - Key features

### Step 2: Get Your LinkedIn Experience

1. Go to: `https://www.linkedin.com/in/burhan-aslam/`
2. Scroll to "Experience" section
3. For each job/role, note:
   - Company name
   - Job title
   - Duration (start date - end date)
   - Location
   - Key responsibilities/achievements
   - Technologies used

### Step 3: Update the Files

#### A. Update Projects (`src/data/projects.js`)

Replace the placeholder projects with your real ones. Here's the format:

```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Short description (1-2 sentences)",
  longDescription: "Detailed description (optional)",
  technologies: ["React", "Node.js", "MongoDB"], // Technologies you used
  image: "/images/projects/project1.jpg", // Screenshot path
  liveUrl: "https://your-live-demo.com", // Live URL (or "#" if none)
  githubUrl: "https://github.com/BurhanAslam-git/your-repo",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  category: "Web Development", // or "Mobile App", "Data Science", etc.
  date: "2024" // Year completed
}
```

**Example with your GitHub:**
```javascript
{
  id: 1,
  title: "My Awesome Project",
  description: "A full-stack web application built with React and Node.js.",
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  image: "/images/projects/awesome-project.jpg",
  liveUrl: "https://myproject.com", // or "#" if no live demo
  githubUrl: "https://github.com/BurhanAslam-git/awesome-project",
  features: [
    "User authentication",
    "Real-time updates",
    "Responsive design"
  ],
  category: "Web Development",
  date: "2024"
}
```

#### B. Update Experience (`src/data/experience.js`)

Replace with your real work experience:

```javascript
{
  id: 1,
  company: "Company Name",
  role: "Your Job Title",
  duration: "Jan 2023 - Present", // or "Jan 2023 - Dec 2023"
  location: "City, Country" or "Remote",
  responsibilities: [
    "What you did/accomplished",
    "Another responsibility",
    "Key achievement"
  ],
  technologies: ["React", "Node.js", "AWS"] // Tech stack
}
```

**Example:**
```javascript
{
  id: 1,
  company: "Tech Company Inc.",
  role: "Full Stack Developer",
  duration: "Jan 2022 - Present",
  location: "Remote",
  responsibilities: [
    "Developed and maintained React-based web applications",
    "Built RESTful APIs using Node.js and Express",
    "Improved application performance by 40%",
    "Collaborated with cross-functional teams"
  ],
  technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
}
```

#### C. Update Skills (`src/data/skills.js`)

Adjust skill levels (0-100) based on your proficiency:

```javascript
export const skills = {
  frontend: [
    { name: "React", level: 90 }, // Your proficiency
    { name: "JavaScript", level: 85 },
    // Add or remove skills
  ],
  backend: [
    { name: "Node.js", level: 85 },
    // Your backend skills
  ],
  tools: [
    { name: "Git", level: 90 },
    // Your tools
  ]
};
```

---

## 🖼️ Adding Project Screenshots

1. Take screenshots of your projects
2. Save them in: `/public/images/projects/`
3. Name them clearly: `project1.jpg`, `project2.png`, etc.
4. Recommended size: 1200x630px or similar
5. Optimize images (use TinyPNG.com)

Then update the `image` path in `projects.js`:
```javascript
image: "/images/projects/project1.jpg"
```

---

## 📝 Quick Checklist

- [ ] Updated `src/data/projects.js` with your projects
- [ ] Updated `src/data/experience.js` with your work history
- [ ] Updated `src/data/skills.js` with your skill levels
- [ ] Added project screenshots to `/public/images/projects/`
- [ ] Updated image paths in `projects.js`
- [ ] Verified all GitHub links work
- [ ] Added live demo URLs (if available)

---

## 💡 Tips

1. **Start with 3-5 best projects** - Quality over quantity
2. **Use action verbs** in experience descriptions (Developed, Built, Improved, etc.)
3. **Be specific** - Include numbers/metrics when possible
4. **Keep descriptions concise** - 1-2 sentences for project descriptions
5. **Use real GitHub URLs** - Or remove if repository is private
6. **Add live demos** - If available, include the URL

---

## 🚀 Need Help?

If you want me to help structure your data:

1. **Share your project list** - Just the names and I'll help format them
2. **Share your experience** - Copy from LinkedIn and I'll structure it
3. **Ask questions** - About any step in the process

---

## 📧 Update Contact Email

Don't forget to update your email address in:
- `src/components/Contact/Contact.jsx` (replace `burhan@example.com`)
- `src/components/Footer/Footer.jsx` (replace `burhan@example.com`)

---

**Your social links are already updated!** Now just add your projects and experience data. 🎉

