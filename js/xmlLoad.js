function xmlLoad(classID){
    fetch('https://peytonratliff.github.io/classicWoWxml/' + classID + ".xml")
    .then(function(resp){
        return resp.text();
    })
    .then(function(data){
        let parser = new DOMParser(),
            xmlDoc = parser.parseFromString(data, 'text/xml');
        build(xmlDoc, classID);
    });
}


function build(xmlDoc, classID){
    console.log(xmlDoc.getElementsByTagName(classID));
}
