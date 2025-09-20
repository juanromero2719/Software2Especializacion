import { viewQuestion } from "./evaluation";

console.log(viewQuestion({
    id: 1,
    text: "What is the capital of France?",
    options: [{id: 1, text: "Paris"}, {id: 2, text: "London"}, {id: 3, text: "Berlin"}],
    correctAnswer: "Paris"
}));
