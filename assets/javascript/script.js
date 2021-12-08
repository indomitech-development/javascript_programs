var dom=document;
function comparison(){
var number1 = parseInt(document.getElementById("num1"));
var number2 = parseInt(document.getElementById("num2"));
 var a = num1.value;
 console.log(a);
 var b = num2.value;
 console.log(b);
if(a>b){
    console.log("1st number is greater than 2nd number",a);
    var show =document.getElementById("program");
    show.innerHTML = "1st number is greater than 2nd number :" + a;
}
else if(a===b){
    console.log("numbers are equal");
    var show =document.getElementById("program");
    show.innerHTML = "numbers are equal";
}
else if(a<b){
    console.log("2nd number is greater than 1st number",b)
    var show =document.getElementById("program");
    show.innerHTML = "2nd number is greater than 1st number :" + b;
}
}
function comparison1(){
    var pargraph1 = parseInt(dom.getElementById("num3"));
    var paragraph2 = parseInt(dom.getElementById("num4"));
    var paragraph3 = parseInt(dom.getElementById("num5"));
    var p =num3.value;
    console.log(p);
    var q =num4.value;
    console.log(q);
    var r =num5.value;
    console.log(r);
    if(p>q && p>r){
        console.log("num1 is greater than num2 and num3",p);
        var s=dom.getElementById("program1");
        s.innerHTML="num1 is greater than num2 and num3:"+ p;
    }
    else if(r>p && r>q){
    console.log("num3 is greater than num1 and num2",r);
    var s=dom.getElementById("program1");
    s.innerHTML="num3 is greater than num1 and num2:"+ r;
    }
    else if(q>p && q>r){
        console.log("num2 is greater than num1 and num3",q);
        var s=dom.getElementById("program1");
        s.innerHTML="num2 is greater than num1 and num3:"+ q;
    }
    else if(p===q && q===r){
        console.log("numbers are equal",p,q,r);
        var s=dom.getElementById("program");
        s.innerHTML="numbers are equal:"+ p + q + r;
    
    }
    }
    function negative(){
        var paragraph=parseInt(dom.getElementById("number"));
        var s=dom.getElementById("program3");
        var q=number.value;
        console.log(q);
    
        if(q>0){
           console.log("number is positive");
           s.innerHTML="number is positive";
        }
        else if(q<0){
            console.log("number is negative");
            s.innerHTML="number is negative";
        }
        else if(q==0){
            console.log("number is equal to zero");
            s.innerHTML="number is equal to zero";
        }
    
    }
    function divisible(){
        var paragraph=parseInt(dom.getElementById("number1"));
        
        var p=number1.value;
        
        console.log(p);
        
        if ((p%5==0) && (p%11==0)){
        console.log("number is divisible 5 and 11")
        var paragraph2=dom.getElementById("program4");
        paragraph2.innerHTML="number is divisible 5 and 11";
        }
        else{
            var paragraph2=dom.getElementById("program4");
        paragraph2.innerHTML="number is not divisible 5 and 11";
        }
        }
        function even(){
            var paragraph = parseInt(dom.getElementById("number2"));
            var p=dom.getElementById("program5");
            q=number2.value;
            console.log(q);
             
            if(q%2==0){
                console.log("number is even");
                p.innerHTML="number is even";
            }
            else{
                console.log("number is odd");
                p.innerHTML="number is odd";
            }
        }
        function leap(){
            var paragraph=parseInt(dom.getElementById("number3"));
            var s=dom.getElementById("program6");
               var q=number3.value;
               console.log(q);
               if(q==365){
                   console.log("this year is common year");
                   s.innerHTML="this year is common year";
               }
               else if(q==366){
                   console.log("this year is leap year");
                   s.innerHTML="this year is leap year";
               }
               else if(q!=365 && q!=366){
                   console.log("you entered days is not correct");
                   s.innerHTML="you entered days is not correct";
               }
        }

        function alphabetCase(){
            var paragraph=dom.getElementById("number4");
            var s=dom.getElementById("program7");
            var p=number4.value;
            console.log(p);
            var lowerCase=(p=='a' || p=='b' || p=='c' || p=='d' || p=='e' || p=='f' || p=='g' || p=='h' || p=='i' || p=='j' || p=='k' || p=='l' || p=='m' || p=='n' || p=='o' || p=='p' || p=='q' || p=='r' || p=='s' || p=='t' || p=='u' || p=='v' || p=='w' || p=='x' || p=='y' || p=='z' );
            var upperCase=(p=='A' || p=='B' || p=='C' || p=='D' || p=='E' || p=='F' || p=='G' || p=='H' || p=='I' || p=='J' || p=='K' || p=='L' || p=='M' || p=='N' || p=='O' || p=='P' || p=='Q' || p=='R' || p=='S' || p=='T' || p=='U' || p=='V' || p=='W' || p=='X' || p=='Y' || p=='Z');
        
        if(lowerCase){
            console.log("enter a value is lowercase alphabet");
            s.innerHTML="enter a value is lowercase alphabet";
        }
        else if(upperCase){
            console.log("enter value is uppercase alphabet");
            s.innerHTML="enter a value is uppercase alphabet";
        }
        else if(p<0 ||p>=0){
            console.log("enter value is not valid");
            s.innerHTML="enter a value is not  alphabet";
        }
        else{
            console.log("you entered a special character");
            s.innerHTML="enter a value is special character";
        }
        }

        function Alphabet(){
            var paragraph=dom.getElementById("number5");
            var q=dom.getElementById("program8");
            var p = number5.value;
            console.log(p);
            var special_Character= (p=="" || p=='!' || p=='”' || p=='#' || p=='$' || p=='%' || p=='&' || p=='’' || p=='(' || p==')' || p=='*' || p=='+' || p==',' || p=='-' || p=='.' || p=='/' || p==':' || p==';' || p=='<' || p=='=' || p=='>' || p=='?' || p=='@' || p==']' || p=='[' || p=='/' || p=='^' || p=='_' || p=='`' || p=='{' || p=='|' || p=='}' || p=='~');
            if(p<=0 || p>0){
                console.log("your number is digit");
                q.innerHTML="your number is digit";
            }
            else if(special_Character){
            console.log("you entered a special character ");
            q.innerHTML="your entered a special character";
            }
            else{
                console.log("you entered a alphabet");
                q.innerHTML="your entered a alphabet";
            }
            }


            function character(){
                var paragraph = dom.getElementById("number6");
                var s=dom.getElementById("program9");
                var p=number6.value;
                console.log(p);
            
                if(p<=0 || p>0){
                    console.log("enter value is not a character");
                    s.innerHTML="value is not a character";
            
                }
                else{
                    console.log("enter value is character");
                    s.innerHTML="value is a character";
                }
            }

            function vowel(){
                var paragraph = (dom.getElementById("number7"));
                var s = dom.getElementById("program10");
                var p= number7.value;
                console.log(p);
                
                if (p=="a" || p=="A"){
                    console.log("alphabet is vowel");
                    s.innerHTML="alphabet is vowel";
                }
                else if(p=="e" || p=="E"){
                    console.log("alphabet is vowel");
                    s.innerHTML="alphabet is vowel";
                }
                else if(p=="i" || p=="I"){
                    console.log("alphabet is vowel");
                    s.innerHTML="alphabet is vowel";
                }
                else if(p=="o" || p=="O"){
                    console.log("alphabet is vowel");
                    s.innerHTML="alphabet is vowel";
                }
                else if(p=="u" || p=="U"){
                    console.log("alphabet is vowel");
                    s.innerHTML="alphabet is vowel";
                }
                else if(p<0 || p>0){
                    console.log("not a valid value");
                    s.innerHTML="Not a valid value";
                }
                else{
                    console.log("alphabet is consonant");
                    s.innerHTML="alphabet is consonant";
                }
                }

                function week(){
                    var paragraph =parseInt(dom.getElementById("number8"));
                    var s=dom.getElementById("program11");
                    p=number8.value;
                    console.log(p);
                
                    if(p==1){
                        console.log("monday");
                        s.innerHTML="Monday";
                    }
                    else if(p==2){
                         console.log("tuesday");
                         s.innerHTML="Tuesday";
                    }
                    else if(p==3){
                        console.log("wednesday");
                        s.innerHTML="Wednesday";
                
                    }
                    else if(p==4){
                        console.log("thursday");
                        s.innerHTML="Thursday";
                    }
                    else if(p==5){
                        console.log("friday");
                        s.innerHTML="Friday";
                    }
                    else if(p==6){
                        console.log("saturday");
                        s.innerHTML="Saturday";
                    }
                    else if(p==7){
                        console.log("sunday");
                        s.innerHTML="Sunday";
                    }
                    else if(p<1 || p>7){
                        console.log("you entered not a valid value");
                        s.innerHTML="You entered not a valid value";
                    }
                }

                function month(){
                    var paragraph=parseInt(dom.getElementById("number9"));
                    var s=dom.getElementById("program12");
                    var p=number9.value;
                   console.log(p);
                   
                if(p==1){
                       console.log(" Number of days in January=31");
                       s.innerHTML=" Number of days in January=31";
                   }
                else if(p==2){
                    console.log("Number of days in February=28");
                    s.innerHTML="Number of days in February=28";
                }
                else if(p==3){
                    console.log("Number of days in March=31");
                    s.innerHTML="Number of days in March=31";
                }
                else if(p==4){
                    console.log("Number of days in April=30");
                    s.innerHTML="Number of days in April=30";
                }
                else if(p==5){
                    console.log("Number of days in May=31");
                    s.innerHTML="Number of days in May=31";
                }
                else if(p==6){
                    console.log("Number of days in June=30");
                    s.innerHTML="Number of days in June=30";
                }
                else if(p==7){
                    console.log(" Number of days in July=31");
                    s.innerHTML=" Number of days in July=31";
                }
                else if(p==8){
                    console.log(" Number of days in August=31");
                    s.innerHTML=" Number of days in August=31";
                }
                else if(p==9){
                    console.log(" Number of days in September=30");
                    s.innerHTML=" Number of days in September=30";
                }
                else if(p==10){
                    console.log("Number of days in October=31");
                    s.innerHTML="Number of days in October=31";
                }
                else if(p==11){
                    console.log("Number of days in November=30");
                    s.innerHTML="Number of days in November=30";
                }
                else if(p==12){
                    console.log("Number of days in December=31");
                    s.innerHTML="Number of days in December=31";
                }
                else if(p<=0 || p>12){
                    console.log("enter value is not valid");
                    s.innerHTML="enter value is not valid";
                }
                }

                function percentage(){
                    var paragraph=dom.getElementById("num10");
                    var paragraph1=dom.getElementById("num11");
                    var paragraph2=dom.getElementById("num12");
                    var paragraph3=dom.getElementById("num13");
                    var paragraph4=dom.getElementById("num14");
                    var paragraph5=parseInt(dom.getElementById("total"));
                    var s=dom.getElementById("program13");
                  var sum= parseInt(num10.value) + parseInt(num11.value) + parseInt(num12.value) + parseInt(num13.value) + parseInt(num14.value);
                  console.log(sum);
                  var total_Number=total.value;
                   var percentage=(sum/total_Number*100);
                
                   console.log(percentage);
                   if(percentage>=90){
                       console.log("student grade is A");
                       s.innerHTML="student grade is A";
                   }
                   else if(percentage>=80){
                       console.log("student grade is B");
                       s.innerHTML="student grade is B";
                   }
                   else if(percentage>=70){
                    console.log("student grade is C");
                    s.innerHTML="student grade is C";
                }
                else if(percentage>=60){
                    console.log("student grade is D");
                    s.innerHTML="student grade is D";
                }
                else if(percentage>=40){
                    console.log("student grade is E");
                    s.innerHTML="student grade is E";
                }
                else if(percentage<40){
                    console.log("student grade is F");
                    s.innerHTML="student grade is F";
                }
                
                }