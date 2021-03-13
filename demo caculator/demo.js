var scr = "";
var ans = 0;
var scr1 = "";
var M = 0;
var t=2;
function number0() {
  scr += "0";
  scr1 += "0";
  document.getElementById("scr").innerHTML = scr;
  document.getElementById("scr1").innerHTML = scr1;
}
function number1() {
  scr += "1";
  scr1 += "1";
  document.getElementById("scr").innerHTML = scr;
}
function number2() {
  scr += "2";
  scr1 += "2";
  document.getElementById("scr").innerHTML = scr;
}
function number3() {
  scr += "3";
  scr1 += "3";
  document.getElementById("scr").innerHTML = scr;
}
function number4() {
  scr += "4";
  scr1 += "4";
  document.getElementById("scr").innerHTML = scr;
}
function number5() {
  scr += "5";
  scr1 += "5";
  document.getElementById("scr").innerHTML = scr;
}
function number6() {
  scr += "6";
  scr1 += "6";
  document.getElementById("scr").innerHTML = scr;
}
function number7() {
  scr += "7";
  scr1 += "7";
  document.getElementById("scr").innerHTML = scr;
}
function number8() {
  scr += "8";
  scr1 += "8";
  document.getElementById("scr").innerHTML = scr;
}
function number9() {
  scr += "9";
  scr1 += "9";
  document.getElementById("scr").innerHTML = scr;
}
function AC() {
  scr = "";
  scr1 = "";
  ans = 0;
  M = 0;
  document.getElementById("scr").innerHTML = scr;
}
function mutilplication() {
  scr = scr + "x";
  scr1 = scr1 + "*";
  document.getElementById("scr").innerHTML = scr;
}
function addition() {
  scr = scr + "+";
  scr1 = scr1 + "+";
  document.getElementById("scr").innerHTML = scr;
}
function subtraction() {
  scr = scr + "-";
  scr1 += "-";
  document.getElementById("scr").innerHTML = scr;
}
function devision() {
  scr = scr + "&#247;";
  scr1 += "/";
  document.getElementById("scr").innerHTML = scr;
}
function del() {
  scr = scr.substring(0, scr.length - 1);
  scr1 = scr1.substring(0, scr1.length - 1);
  document.getElementById("scr").innerHTML = scr;
}
function result() {
  ans = eval(scr1);
  scr = ans;
  scr1= ans + "";
  document.getElementById("scr").innerHTML = scr;
  
}
function item1() {
  scr += "(";
  scr1 += "(";
  document.getElementById("scr").innerHTML = scr;
}
function item2() {
  scr += ")";
  scr1 += ")";
  document.getElementById("scr").innerHTML = scr;
}
function item3() {
  scr += ".";
  scr1 += ".";
  document.getElementById("scr").innerHTML = scr;
}
function item4() {
  scr += "ans";
  scr1 += "ans";
}
function item5() {
  scr += "cos";
  scr1 += "Math.cos";
  document.getElementById("scr").innerHTML = scr;
}
function item6() {
  scr += "&#8337;";
  scr1 += "Math.E";
  document.getElementById("scr").innerHTML = scr;
}
function item7() {
  scr += "sin";
  scr1 += "Math.sin";
  document.getElementById("scr").innerHTML = scr;
}
function item8() {
  scr += "tan";
  scr1 += "Math.tan";
  document.getElementById("scr").innerHTML = scr;
}
function item9() {
  scr += "log10";
  scr1 += "Math.log10";
  document.getElementById("scr").innerHTML = scr;
}
function item10() {
  scr += "log";
  scr1 += "Math.log";
  document.getElementById("scr").innerHTML = scr;
}
function item11() {
  scr += "&#8851;";
  scr1 += "Math.PI";
  document.getElementById("scr").innerHTML = scr;
}
function item12() {
  scr += "exp";
  scr1 += "Math.exp";
  document.getElementById("scr").innerHTML = scr;
}
function item13() {
  scr += "&#8730;";
  scr1 += "Math.sqrt";
  document.getElementById("scr").innerHTML = scr;
}
function item14() {
  scr += "&#178;";
  scr1 +="";
  let A = "";
  for (let i = scr1.length; i > 0; i--) {
    if (isNaN(scr1.charAt(i - 1)) == false) {
      A += scr1.charAt(i - 1);
    } else {
      i = -1;
    }
  }
  A = A.split("")
    .reverse()
    .join("");
  scr1 = scr1.substring(0, scr1.length - A.length);
  A = A + "*" + A;
  A = eval(A);
  scr1 += A;
  document.getElementById("scr").innerHTML = scr;
}
function item15() {
  scr += "&#179;";
  scr1 +="";
  let A = "";
  for (let i = scr1.length; i > 0; i--) {
    if (isNaN(scr1.charAt(i - 1)) == false) {
      A += scr1.charAt(i - 1);
    } else {
      i = -1;
    }
  }
  A = A.split("")
    .reverse()
    .join("");
  scr1 = scr1.substring(0, scr1.length - A.length);
  A = A + "*" + A + "*" + A;
  A = eval(A);
  scr1 += A;
  document.getElementById("scr").innerHTML = scr;
}
function item16() {
  scr += "!";
  scr1 +="";
  let A = "";
  for (let i = scr.indexOf("!"); i > 0; i--) {
    if (isNaN(scr1.charAt(i - 1)) == false) {
      A += scr1.charAt(i - 1);
    } else {
      i = -1;
    }
  }
  A = A.split("")
    .reverse()
    .join("");
  scr1 = scr1.substring(0, scr1.length - A.length);
  for (let j = A - 1; j >= 1; j--) {
    A = A * j;
  }
  scr1 += A;
  document.getElementById("scr").innerHTML = scr;
}
function item17() {
  scr += "Abs";
  scr1 += "Math.abs";
  document.getElementById("scr").innerHTML = scr;
}
function item18() {
  ans = eval(scr1);
  M += ans;
  scr = M;
  document.getElementById("scr").innerHTML = scr;
}
function item19() {
  ans = eval(scr1);
  M = M - ans;
  scr = M;
  document.getElementById("scr").innerHTML = scr;
}
function item20() {
  scr = M;
  document.getElementById("scr").innerHTML = scr;
}
function theme(){
document.getElementById('body').className = "theme" + t ;
  t += 1;
  if (t > 2){
    t = 1;
  }  
}
