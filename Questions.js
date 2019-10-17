function CreateQuestion(Question, ChoiceOne, ChoiceTwo, ChoiceThree, Answer){
    //UNIVERSAL QUESTION BUILDER MADE BY KALEB
    document.getElementById('question').innerHTML = Question;
    document.getElementById('ans1').innerHTML = ChoiceOne;
    document.getElementById('ans2').innerHTML = ChoiceTwo;
    document.getElementById('ans3').innerHTML = ChoiceThree;
    Wrong();
}

CreateQuestion('test question', 'answer1', 'answer2', 'answer3', 3);

function Wrong(){

}

function Right(){
    
}