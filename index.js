$(document).ready(function() {
    var sec = 60;
    var seconds = document.querySelector(".seconds");
    var currentQuestion = {};
    var Answers = true;
    var score = 0;
    var questionCounter = 1;
    var availableQuestion = [];

    function downTime() {
      seconds.textContent = sec;  
      sec--;
      
      $("#countdown").append(seconds)
    }

    
    function timer() {
      let goOne = setInterval(function(){downTime()
          if (sec == -1) {
            clearInterval(goOne);
            alert("Time out!! :(");
    
        }
        
      }, 1000);
      
    }

    $('#button1').on("click", timer);
    $("#correct").on("click", function(event){
      event.preventDefault();
  
    let questOneResults = "correct";
      var buttonAns = 0;
      var choice = buttonAns + questionCounter;
      if (questOneResults === "correct") {
        console.log(choice)
        $("#correctTwo").on("click", two);
      } else {
      alert("You are wrong");
        
      }
    // }
   
  })
    function two(){
    let questTwoResults = "correctTwo";
    var buttonAns = 0;
    var choice = buttonAns + questionCounter;
    var choiceTwo = choice - 1;
    if (questTwoResults === "correctTwo") {
      console.log(choice)
    } else if (questionTwoResults !== "correctTwo"){
    alert("You are wrong")
    console.log(choiceTwo);
    
    } else {
    alert("This game is ending");
    }
  
  
    
  }




  });


