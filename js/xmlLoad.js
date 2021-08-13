fetch('https://peytonratliff.github.io/classicWoWxml/druid.xml')
    .then(function(resp){
        return resp.text();
    })
    .then(function(data){
        let parser = new DOMParser(),
            xmlDoc = parser.parseFromString(data, 'text/xml');
        console.log(xmlDoc.getElementsByTagName('talentName'));

        var row1col1 = document.getElementById(id="row1col1");
        row1col1.innerHTML = xmlDoc.firstChild;
    });

