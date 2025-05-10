const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to programming concepts.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Introduces students to web design and development careers.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students learn to organize code with functions.',
    technology: ['Python'],
    completed: false
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Learn object-oriented programming concepts.',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Create dynamic websites using JavaScript.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Focus on user experience and frontend development.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

function displayCourses(courseArray) {
  const courseList = document.getElementById("courseList");
  const totalCreditsEl = document.getElementById("totalCredits");
  courseList.innerHTML = "";
  let totalCredits = 0;

  courseArray.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
      <p>${course.description}</p>
    `;
    courseList.appendChild(card);
    totalCredits += course.credits;
  });

  totalCreditsEl.textContent = totalCredits;
}

document.getElementById("allBtn").addEventListener("click", () => displayCourses(courses));
document.getElementById("wddBtn").addEventListener("click", () => {
  const filtered = courses.filter(course => course.subject === "WDD");
  displayCourses(filtered);
});
document.getElementById("cseBtn").addEventListener("click", () => {
  const filtered = courses.filter(course => course.subject === "CSE");
  displayCourses(filtered);
});

// Initial load
displayCourses(courses);
