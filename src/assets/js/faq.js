const questions = [...document.querySelectorAll('.question')];
questions.map((question) => {
  let q_text = question.querySelector('h3');
  question.addEventListener('click', () => {
    questions
      .filter((q) => q !== question)
      .map((q) => q.classList.remove('open'));
    question.classList.toggle('open');
  });
  question.addEventListener('keydown', () => {
    questions
      .filter((q) => q !== question)
      .map((q) => q.classList.remove('open'));
    question.classList.toggle('open');
  });
});
