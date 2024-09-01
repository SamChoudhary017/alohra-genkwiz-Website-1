document.addEventListener('DOMContentLoaded', () => {
    // Get stored results
    const score = localStorage.getItem('quizScore');
    const totalQuestions = localStorage.getItem('totalQuestions');
    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions'));

    // Display the results
    const resultSummary = document.getElementById('result-summary');
    resultSummary.innerHTML = `
        <p>You got ${score} out of ${totalQuestions} questions correct.</p>
        <p>Incorrect Questions:</p>
        <ul>
            ${incorrectQuestions.length > 0 ? incorrectQuestions.map(q => `<li>Question ${q}</li>`).join('') : '<li>None</li>'}
        </ul>
    `;

    // Clear stored results
    localStorage.removeItem('quizScore');
    localStorage.removeItem('totalQuestions');
    localStorage.removeItem('incorrectQuestions');
});
