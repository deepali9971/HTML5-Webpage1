function submit(){
    var calc = document.getElementById('salary').value;
    var hra1 = eval((30 / 100) * parseFloat(calc));
    var da1 = eval((90 / 100) * parseFloat(calc));
    var ta1 = eval((20 / 100) * parseFloat(calc));
    var pf1 = 1900; 
    var gs1 = eval(parseFloat(calc) + hra1 + ta1 - pf1);    
    var tds1 = eval((10/100) * gs1);
    var ns1 = eval(gs1 - tds1); 
    document.getElementById('hra').innerHTML = hra1 + " Rs";
    document.getElementById('da').innerHTML = da1 + " Rs";
    document.getElementById('ta').innerHTML = ta1 + " Rs";
    document.getElementById('pf').innerHTML = pf1 + " Rs";
    document.getElementById('gs').innerHTML = gs1 + " Rs";
    document.getElementById('tds').innerHTML = tds1 + " Rs";
    document.getElementById('ns').innerHTML = ns1 + " Rs";
}