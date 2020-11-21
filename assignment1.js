const chalk=require("chalk");
var readlineSync=require("readline-sync");
console.log(chalk.yellow.bgWhite.bold("NOT FOR MEDICAL PURPOSE"))
console.log(chalk.blue("Welecome to ")+chalk.bold.yellow.bgBlue( "COVID")+ chalk.blue(" pandemic quiz"));
var score=0;
 var q1={
qutn:"do you have fever cough cold or runny nose? ",
answer:"yes",
 }
var q2={
   qutn:"have you had been sick for more than a week? ",
   answer:"Yes",
 }
 var q3={
   qutn:" did you get tested for covid ?",
   answer:"yes"
 }
 var q4={
   qutn:"are you positive or negative? ",
   answer:"positve"
 }
 var q6={
   qutn:"get a check for your family member or those of close contacts ok? ",
   answer:"yes" 
 }
 var q5={
   qutn:"are you above the age of 60? ",
   answer:"yes"
 }
 var q7={
   qutn:"any of your family memebers tested positive? ",
   answer:"yes"
 }

var qlist=[q1,q2,q3,q4,q5,q6,q7]
function covidtest(qobj){
var usrans=readlineSync.question(chalk.green(qobj.qutn));
if(usrans.toUpperCase()===((qobj.answer).toUpperCase())){ 
  score=score+1;
  return usrans
}
else{
  return usrans;
}
}
for(i=0;i<7;i++){
  console.log();
  usranswer=covidtest(qlist[i]);
 if(i==2){
   if(usranswer.toUpperCase()==="NO"){
     console.log("you need to get tested ")
     continue;
   }
   else{
     continue;
   }
 }
    if(i==4){
   if(usranswer.toUpperCase()==="NO"){
     console.log("dont worry you are not in the vulnerable age group ")
     continue;
   }
   else{
     continue;
   }
 }

if(i==5){
  if(usranswer.toUpperCase()=="NO")
{
  console.log("you are rsiking your loved ones get them tested immediately");
  continue;
}
else{
  continue;
}

}

else{
  if(usranswer.toUpperCase()==="NO"){
    console.log("dont worry then be calm.");
    i=7;
  }
}
 


   if(usranswer.toUpperCase()==="NEGATIVE"){
     console.log(chalk.bold.rgb(10,30,40)("dont worry you are safe"));
    i=7;
  }
  if(usranswer.toUpperCase()=="POSITIVE"){
    console.log("BBMP officials will be contacting you soon");
    console.log(chalk.bold.red("dont worry 98% will be completely cured and we are sure you too will be"))
  
  }

  }


console.log(chalk.yellowBright("we are in this together and we will get through it together"));
