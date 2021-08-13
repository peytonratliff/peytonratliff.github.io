// window.addEventListener("load", function() {
// 	getRows();
// });

// function getRows() {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("get", "Employees.xml", true);
// }

// fetch('Employees.xml')
//     .then(function(resp){
//         return resp.text();
//     })
//     .then(function(data){
//         console.log(data);
//     });

let getXMLFile = function(path, callback){
    let request  = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type", "text/xml");
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200) {
            callback(request.responseXML);
        }
    };
    request.send();
};

getXMLFile("Employees.xml", function(xml) {
    console.log(xml);
});