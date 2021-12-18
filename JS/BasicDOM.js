// document.getElementById("mainbody").innerHTML = "NCU";
// document.getElementById("para").innerText = "NCU";
// document.getElementsByClassName("para").innerText = "NCU";
// function abc(){
//     document.getElementsByClassName("para").innerText = "NCU";
// }

document.getElementById("mainheading").innerText = "NCU";

function changeText(){
    p = document.getElementById("mainheading");
    p.innerText = p.innerText + "NCU";
    p.innerHTML = "This is the text";
    l = document.getElementsByTagName("label")[0];
    l.innerHTML = "This is in the label";
    // r = document.getElementsByName("radioinput")[0];
    // console.log(r.value);
    i = document.getElementById("inputbox");
    console.log(i.value);
    document.getElementById("inputbox").value + 1;
    
}