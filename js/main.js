window.onload = function(){
    var p = document.getElementsByTagName('p');
    var greenP = document.getElementById('green');
    var p1 = document.getElementsByClassName('p1');
    console.log("greenP: ", greenP, "p: ",p, "p1: ", p);

    var pWithQuerySelectorByTagName = document.querySelector('p');
    var pWithQuerySelectorById = document.querySelector("#green");
    var pWithQuerySelectorByClassName = document.querySelector('p1');
    console.log("pWithQuerySelectorByTagName ", pWithQuerySelectorByTagName);
    console.log("pWithQuerySelectorById ", pWithQuerySelectorById);

}