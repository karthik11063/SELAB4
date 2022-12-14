
var element = prompt("Enter a Two Digit number")
if(element % 7==0 && element % 9==0){
    alert("The number"+"  "+ element+" is a multiple of both 7 and 9")
}
else if(element % 7 ==0){
    alert("The number"+"  "+ element+" is a multiple of 7")
}
else if(element %9 ==0){
    alert("The number"+"  "+ element+" is a multiple of 9")
}
else{
    alert("The number"+"  "+ element+" is a neither a multiple of 7 or multiple of 9")
}
//question 2
document.write('<h1>QUESTION 2</h1>')
var x=0
while(x<31){
    document.write(x+" ");
    x++;
}
document.write("<br>"+"EVEN NUMBERS"+"<br>");
var x=0
while(x<31){
    if(x%2==0){
    document.write(x+" ");
    }
    x++;
}
document.write("<br>"+"REVERSE"+"<br>");
var x=30
while(x>=0){
    document.write(x+" ");
    x--;
}
document.write("<br>"+"END AT 28"+"<br>")
var x=30
while(x>=0){
    if(x==28){
        break;
    }
    document.write(x+" ");
    x--;
}
document.write("<br>")
document.write('<h1>QUESTION 3</h1>')
var sum=0
for(let x=0;x<31;x++){
        sum=sum+x;
}
document.write("sum of first 30 numbers is:"+sum)
document.write("<br>")
var sum=0
for(let x=0;x<31;x++){
    if(x%2!=0){
        sum=sum+x;
    }
}
document.write("sum of first 30 ODD numbers is:"+sum)
document.write("<br>")
var sum=0
for(let x=0;x<31;x++){
    if(x%2!=0){
        sum=sum+x;
        if(sum>50){
            break;
        }
    }
}
document.write("last task :"+sum)
document.write("<br>")



function checkPalindrome(){
    var str = document.getElementById("senter")
    var text = str.value
    var reverseStr = text.split("").reverse().join("");
    if(text == reverseStr){
        alert(text +" "+"is a palindrome")
    }
    else{
        alert(text +" "+"is not a palindrome")
    }
}
document.write("<br>")

function Capitalize1(){
    var str = document.getElementById("senter1")
    var text = str.value
    var arr = text.split(' ')
    var text1=" "
    for(let x=0;x<arr.length;x++){
        text1 += arr[x].charAt(0).toUpperCase()+arr[x].slice(1)+" ";
    }
    console.log(text1)
}

document.write("<br>")


function calcMultiples(num,length1){
    var num = prompt("Enter number")
var length1 = prompt("Enter length")
    var arr=[]
    for(let x=num;x<=num*length1+1;x++){
        if(x % num==0){
                arr.push(x)
        }
    }
    alert(arr)
}

function generatePatterns(){
    var number =1
    for(let x=1;x<5;x++){
        document.write("<br>")
        for(let y=1;y<=x;y++){
            document.write(number+" ");
            number++;
        }
    }
    document.write("<br>")
    for(let i=1;i<6;i++){
        document.write("<br>")
        for(j=1;j<=i;j++){
            document.write(i+" ");
        }
    }

    document.write("<br>")
    for (i = 1; i <= 5; ++i) {
        document.write("<br>")
        for (j = 1; j <= i; ++j) {
           document.write(j+" ")
        }
     }

     document.write("<br>")
    }
