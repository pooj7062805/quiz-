const ques = [
      {
            Q:'My name is:______?',
            options:['Pooja shree','Limna shree','Vishvika','charan ']
      },
      {
            Q:'Which is the front end language?',
            options:['Python','Ruby','HTML','Node.js']
      },
      {
            Q:'Which is a javascript framework?',
            options:['HTML','React.js','SASS','CSS']
      },
      {
            Q:'Which is the back end language',
            options:['Python','CSS','HTML','Node.js']
      },
      {
            Q:'You have completed successfully!',
            options:[]
      }
]

const ans=['Pooja shree','HTML','React.js','Python'];

const question = document.querySelector('#ques');
const next = document.querySelector('#nxt');
const opt = document.querySelectorAll('.box2');
const tryagn = document.querySelector('.btn');

let m=0;

next.addEventListener('click',()=>{
      m+=1;
      quiz();
      if(m == ques.length-1){
            document.querySelector('.ans').style.display = 'none';
            next.style.display = 'none';
            document.querySelector('.hding').style.display = 'none';
      }
})

function quiz(){
question.innerHTML = ques[m].Q;

for(let i=0; i<opt.length; i++){
      opt[i].innerHTML = ques[m].options[i];
      opt[i].parentElement.style.backgroundColor ='gray';
      next.style.display ='none';
}
for(item of opt){
      item.addEventListener('click',(e)=> {
            let value =e.target.innerText;
            if(value == ans[m]){
                  e.target.parentElement.style.backgroundColor = 'green';
                  next.style.display = 'flex'
            }
            else{
                  document.querySelector('.box').style.display = 'none';
                  e.target.parentElement.style.backgroundColor = 'red';
                  document.querySelector('.win').style.display = 'block';
                  document.querySelector('.btn').style.display = 'flex';
            }
      })
}
}
tryagn.addEventListener('click',()=> {
      location.reload(true);
})
quiz();
