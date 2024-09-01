function submitQuiz() {
    // Get the form element
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    // Example correct answers
    const correctAnswers = {
        q1: 'Paris',
        // Add more correct answers for each question
    };

    // Store results
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let incorrectQuestions = [];

    // Check answers
    formData.forEach((value, key) => {
        if (correctAnswers[key] === value) {
            score++;
        } else {
            incorrectQuestions.push(key);
        }
    });

    // Store results in localStorage
    localStorage.setItem('quizScore', score);
    localStorage.setItem('totalQuestions', totalQuestions);
    localStorage.setItem('incorrectQuestions', JSON.stringify(incorrectQuestions));

    // Redirect to results page
    window.location.href = 'results.html';
}
