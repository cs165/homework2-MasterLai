// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
var fir,sec,thi;
fir = null ;
sec = null;
thi = null;


function check(obj,a)
{
  let ch = document.getElementsByClassName("un");
  let o1 = document.getElementsByClassName("OK");
  let y = document.getElementsByClassName("column");




  if(0 <= a && a <= 8)
  {
    for(let i=0;i<9;i++)
    {
     y[i].style.backgroundColor = "#f4f4f4";
     y[i].style.borderColor = "#dcdcdc";
     y[i].style.opacity = 0.6;
     o1[i].style.display = "none";
     ch[i].style.display = "block";
    }
    fir = y[a].id;
  }
  else if(8 < a && a < 18)
  {
    for(let i=9;i<18;i++)
    {
     y[i].style.backgroundColor = "#f4f4f4";
     y[i].style.borderColor = "#dcdcdc";
     y[i].style.opacity = 0.6;
     o1[i].style.display = "none";
     ch[i].style.display = "block";
    }
     sec = y[a].id;
  }
  else
  {
    for(let i=18;i<27;i++)
    {
     y[i].style.backgroundColor = "#f4f4f4";
     y[i].style.borderColor = "#dcdcdc";
     y[i].style.opacity = 0.6;
     o1[i].style.display = "none";
     ch[i].style.display = "block";
    }
    thi = y[a].id;
  }
  obj.style.backgroundColor = "#cfe3ff";
  obj.style.borderColor = "#cfe3ff";
  obj.style.opacity = 1;
  ch[a].style.display = "none";
  o1[a].style.display = "block";

  if(fir !== null && sec !== null && thi !== null)
    {
      if(sec === thi)
      {
        document.getElementById('hw').innerHTML="You got:" + RESULTS_MAP[sec].title;
        document.getElementById('pw').innerHTML=RESULTS_MAP[sec].contents;
      }
      else
      {
        document.getElementById('hw').innerHTML="You got:" + RESULTS_MAP[fir].title;
        document.getElementById('pw').innerHTML=RESULTS_MAP[fir].contents;
      }
    }
}

function myfunction()
{
  let ch = document.getElementsByClassName("un");
  let o1 = document.getElementsByClassName("OK");
  let y = document.getElementsByClassName("column");
  for(let i=0;i<27;i++)
  {
    y[i].style.backgroundColor = "#f4f4f4";
    y[i].style.borderColor = "#dcdcdc";
    y[i].style.opacity = 1;
    o1[i].style.display = "none";
    ch[i].style.display = "block";
  }
}
