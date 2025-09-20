interface Question {
    id: number;
    text: string;
    options: Options[];
    correctAnswer: string;
}

interface Options {
    id: number;
    text: string;
}

export { type Question };