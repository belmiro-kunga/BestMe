const questions = [

    "O que aprendi hoje?",
    "O que me deixa aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0) => {
   return Process.stdout.write(questions[index] + " \n\n\n")
}

ask()