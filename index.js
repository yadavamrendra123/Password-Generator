const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePwd(){
    let pwd1=""
    let pwd2=""
    for (let index = 0; index < 15; index++) {
        let number1=Math.floor(Math.random()*91)
        pwd1+=characters[number1];
        let number2=Math.floor(Math.random()*91)
        pwd2+=characters[number2];
        
    }
    document.getElementById("p1").textContent=pwd1
    document.getElementById("p2").textContent=pwd2

}