import { type Question } from "./model";

function viewQuestion(question: Question): string {
    return `
    ${"Question: " + question.text}
    ${question.options.map((option) => `${option.id}. ${option.text}`).join("\n")}
    ${"Correct Answer: " + question.correctAnswer}
    `;
}

export { viewQuestion };
