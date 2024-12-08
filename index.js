const qustion = [{
                     text:" What is java Script",
                     answer:[{ans:'nothing',correct:'false'},
                             {ans:'something',correct:'false'},
                             {ans:'ScriptLanguge',correct:'true'},
                             {ans:'nothing2',correct:'false'}
                            ]  
                 },
                 {
                    text:" what is closure ",
                    answer:[{ans:'nothing',correct:'false'},
                            {ans:'something',correct:'true'},
                            {ans:'parents scope',correct:'false'},
                            {ans:'nothing2',correct:'false'}
                           ]  
                },
                {
                    text:" What is dom in js",
                    answer:[{ans:'nothing',correct:'false'},
                            {ans:'something',correct:'false'},
                            {ans:'api',correct:'true'},
                            {ans:'nothing2',correct:'false'}
                           ]  
                },
                {
                    text:" What is arrrow",
                    answer:[{ans:'nothing',correct:'false'},
                            {ans:'something',correct:'false'},
                            {ans:'function only',correct:'true'},
                            {ans:'nothing2',correct:'false'}
                           ]  
                }        
                ]
const newQustion =  document.querySelector('#qutions')
const quiz = document.querySelector('.quiz-con')
const option = document.getElementsByClassName('answer') 
const nextbtn = document.querySelector("#next")
    
let arrayOfAns = Array.from(option);
let Curentindex =0;
let score = 0; 
arrayOfAns.forEach(ele=>{
    ele.addEventListener('click',()=>
    {   
        if(ele.dataset.correct==='true')
        {     score++;
            ele.style.backgroundColor ='green'

        }else{
            ele.style.backgroundColor ='red'
            rightAnswer();
        }  
        arrayOfAns.forEach(e=>{
            e.style.cursor='no-drop'
        })
         nextbtn.style.display='block'

        //  console.log(score)
       
         // console.log(nextbtn)
    })})



    function rightAnswer(){
        arrayOfAns.forEach(e=>{
             if(e.dataset.correct==='true')
                 e.style.backgroundColor ='green'
        })
    }

function ShowQutions()
{        const btn = document.getElementById('btn')
          nextbtn.style.display='none'
      

          let i =0;
         
        if(Curentindex<qustion.length)
        {   
            newQustion.innerHTML =  Curentindex+1+'.'+qustion[Curentindex].text;
            arrayOfAns.forEach((ele)=>{
                ele.innerHTML=qustion[Curentindex].answer[i].ans;
                ele.dataset.correct= qustion[Curentindex].answer[i].correct
                i++
                ele.style.cursor='pointer'
                 ele.style.color = 'black'

                })
           
        }else{

            newQustion.innerHTML =`your score is ${score} out of ${Curentindex}`
             nextbtn.style.display='block'
              btn.style.display='none'
           
            nextbtn.innerHTML = 'play again'
            
        }

}
nextbtn.addEventListener('click',()=>{
     if(nextbtn.innerHTML==='play again')
     {  
        alert('Are you sure about it ')
        
        Curentindex =0
        score=0
            btn.style.display='flex'
            nextbtn.innerHTML='Next'
     }else{
        Curentindex++;
     }
     arrayOfAns.forEach(e=>{
        
        e.style.backgroundColor='white' 
     })
     if(nextbtn.style.display==='block')
     {
        
     }
    ShowQutions();
})


ShowQutions()
