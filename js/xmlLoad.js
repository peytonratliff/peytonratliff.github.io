function xmlLoad(){
    fetch('https://peytonratliff.github.io/classicWoWxml/druid.xml')
    .then(function(resp){
        return resp.text();
    })
    .then(function(data){
        let parser = new DOMParser(),
            xmlDoc = parser.parseFromString(data, 'text/xml');
        console.log(xmlDoc.getElementsByTagName('druid'));
    });
}