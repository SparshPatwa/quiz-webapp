var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('results');

var tques=questions.length;
var score=0;
var quesindex=0;
function results()
{         
	quiz.style.display='none';
  q.style.display="none";
  result.style.display = '';
  result.style.fontSize='medium';
  result.textContent="Name: "+localStorage.getItem("name")+" | Score: "+localStorage.getItem("score");

}
function give_ques(quesindex) 
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	return;
};
give_ques(0);
function nextques()
{
  console.log("Next Qs");
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
		{alert("SELECT AN OPTION");return;}

  if(selected_ans.value==questions[quesindex][4])
  {
    console.log("Correct")
    score=score+1;
  }
  selected_ans.checked=false;
	quesindex++;
  if(quesindex==tques-1)
  {
    console.log("last question")
    nextbutton.textContent="Finish";
  }
	if(quesindex==tques)
	{
    console.log("done")
	  q.style.display='none';
    quiz.style.display='none';
    var person = prompt("Please enter your name", "Default");
    localStorage.setItem("score", score);
    localStorage.setItem("name", person);
    results();
    return;
  }
  console.log("next qs index"+quesindex)
  give_ques(quesindex);

}