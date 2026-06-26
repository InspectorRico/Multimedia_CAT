async function renderQuestions() {
  const grid = document.getElementById("question-grid");
  if (!grid) {
    return;
  }

  const fallbackItems = [
    {
      title: "Question 1",
      description: "Open and complete Question 1 answer file.",
      file: "q1.html",
    },
    {
      title: "Question 2",
      description: "Open and complete Question 2 answer file.",
      file: "q2.html",
    },
    {
      title: "Question 3",
      description: "Open and complete Question 3 answer file.",
      file: "q3.html",
    },
  ];

  try {
    const response = await fetch("content/questions.json");
    const items = response.ok ? await response.json() : fallbackItems;

    grid.innerHTML = items
      .map(
        (item) => `
          <a class="card-link" href="${item.file}">
            <strong>${item.title}</strong>
            <span>${item.description}</span>
          </a>
        `
      )
      .join("");
  } catch (error) {
    grid.innerHTML = fallbackItems
      .map(
        (item) => `
          <a class="card-link" href="${item.file}">
            <strong>${item.title}</strong>
            <span>${item.description}</span>
          </a>
        `
      )
      .join("");
    console.error(error);
  }
}

renderQuestions();
