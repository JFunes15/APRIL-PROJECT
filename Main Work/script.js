const questions = [
    {
        question: "Question 1: Pole Position; Pole Position causes the monster with the highest attack to be unaffaected by spells. So if an 1800 ATK monster has an equip spell giving it 300 ATK and there is a 1900 ATK monster in the opponent's hand, yet to be summoned. What is the proper ruling, ASSUMING that both players are aware of this problem?",
        answers: [
            {text: "The effect will fizzle(resolve without effect) because the appropiate target is no longer on field.", correct: false},
            {text: "This will cause an infinite loop, that'll cause a judge to be called to state how many more times this loop is allowed to happen until the player who started it, is forced to destroy their Pole Position.", correct: false},
            {text: "The monster with 1900 ATK, is NOT allowed to be summoned.", correct: true},
            {text: "The monster with 1800 ATK, will be unaffected by the equip spell, bringing it back to 1800 ATk, thus meaning the monster with 1900 ATK is now the strongest monster, so IT is the new target of the unaffected status.", correct: false},
        ]
    },
    {
        question: "Question 2: Paleozoic, Face-Downs, and one big rock; Paleozoic's are naturally unaffacted by monsters, and Niburu is activated by the opponent because YOU have summoned 5 times, and all those summons were Paleozoic monsters, your opponent also has 3 face down monster's on the field. So, because Niburu's effect allows it to be special summoned by tributing all monsters all field, what happens?",
        answers: [
            {text: "Niburu's effect fizzles, because it can't tribute unaffected monsters, and it cannot tribute face-down cards, thus causing it to resolve without effect.", correct: true},
            {text: "While the paleozoics are unaffected, being tributed is NOT a monster effect, so they will be tributed, and Niburu will hit the field.", correct: false},
            {text: "The face-down monsters, can be tributed for a tribute summon, so the same rules apply to them, causing the face-downs to be tributed", correct: false},
            {text: "Both players, must tribute all monsters due to the effect of Niburu, causing it to resolve with no issue and summon itself normally. ", correct: false},
        ]   
    },
    {
        question: "Question 3: King's Knight; say that Joker's Wild copies the effect of Joker's Straight in response to your opponent's card, the chain resolves normally, and it then special summmon's Queen's Knight, and then adds King's Knight to your hand and normal summon him due to the effect of the copied Joker's Straight, what happens.",
        answers: [
            {text: "The effect will fizzle because Queen's Knight was NOT summoned properly.", correct: false},
            {text: "The effect will miss the timing, as the normal summon of King's Knight was NOT the last thing to happen in the chain.", correct: true},
            {text: "King's Knight's effect will resolve normally, and Jack's Knight will then be summoned because of King's Knight.", correct: false},
            {text: "Nothing will happen because Joker's Wild would negate their effects.", correct: false},
        ]
    },
    {
        question: "Question 4: Assault Mode; If you were to summon how able to summon Stardust Dragon/Assault Mode, without using Assault Mode Activate! to target a Stardust dragon. IF you were to activate it's effect to negate any card effect on field, what will happen next.",
        answers: [
            {text: "The negate will occur as nomral, however the following effect of bringing itself back from the graveyard the follwing end phase, will not happen because the game recognizes that you cheated the monster out.", correct: true},
            {text: "The negating effect will not be able to be activated in the first place, because the game recognizes you cheated it out.", correct: false},
            {text: "The monster will not only bring itself back from the grave, but the game will recognize that NOW it has been properly summoned, so its floating(effect that activates if the monster is sent to the graveyard) Stardust Dragon will now also be active.", correct: false},
            {text: "NO effect can be activated because it was cheated out, and it will self-destruct at the end phase, as if the monster feels disrespected by the player who summoned it", correct: false},
        ]
    },
    {
        question: "Question 5: The Dark World; Dark World's are known to have their archetypal effects when they are discarded via card effect. So if you activated monster reincarncation, to discard a card(say Reign-Beaux, Overking of Dark World) in order to add a card DIFFERENT from the discarded card, what will happen.",
        answers: [
            {text: "You missed the timing because the card being discarded is not the last thing to occur in the chain", correct: false},
            {text: "You cannot activate Reign-Beaux, Overking of Dark World because it was discarded for cost, and not by card effect", correct: true},
            {text: "It can activate it's archetypal effect because it was discarded.", correct: false},
            {text: "The game is confused, and now you MUST call a judge in order to get a fair coin flip which will decide whether or not you can activate Reign-Beaux, Overking of Dark World.", correct: false},
        ]
    },
    {
        question: "Question 6: Effect Veiler; Effect Veiler's effect is, that it can discard itself in order to target a opposing monster during your opponent's turn, and then negate THAT face-up monsters effects until the end of the turn. So if you use this on for example Rescue Rabbit that banishes itself(leaving field), what should you do in order to make sure it's effect are negated.",
        answers: [
            {text: "You cannot activate Effect Veiler in response to the summon, so it will banish itself, and every with resolve like normal.", correct: false},
            {text: "You can immediately activate Effect Veiler, however your opponent will activate Rescue Rabbit, to banish it, thus getting rid of the negate.", correct: false},
            {text: "You can and should activate effect veiler in response to the summon of Rescue Rabbit, therefore negating it's effects for the rest of the turn because Rabbit banishes itself face-up", correct: true},
            {text: "they could just chain book of moon and flip it face down lol XD", correct: false},
        ]
    },
    {
        question: "Question 7: What is my favorite card :D",
        answers: [
            {text: "Number C107: Neo-Galaxy-Eyes Tachyon Dragon", correct: true},
            {text: "Number 39: Aspiring Emperor Hope(utopia)", correct: false},
            {text: "Odd-Eyes Phantasmal Dragon", correct: false},
            {text: "It's obviously Pot of Greed, because you can summmon him and draw 3 and then instantly win the game lol", correct: false},
        ]
    }
];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You got a ${score} out of ${questions.length}, good ig`;
    nextButton.innerHTML = "Wanna give it another shot, rookie?";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();