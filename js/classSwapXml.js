function classSwap(classID) {

    var column1 = document.getElementById("column1");
    var column2 = document.getElementById("column2");
    var column3 = document.getElementById("column3");

    document.getElementById("startString").innerHTML = "";


    if(classID == "druid"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-druid-balance.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-druid-feral-combat.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-druid-restoration.jpg')";
    }
    else if(classID == "hunter"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-beast-mastery.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-marksmanship.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-survival.jpg')";
    }
    else if(classID == "mage"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-mage-arcane.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-mage-fire.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-mage-frost.jpg')";
    }
    else if(classID == "paladin"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-holy.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-protection.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-retribution.jpg')";
    }
    else if(classID == "priest"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-priest-discipline.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-priest-holy.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-priest-shadow.jpg')";
    }
    else if(classID == "rogue"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-assassination.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-combat.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-subtlety.jpg')";
    }
    else if(classID == "shaman"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-elemental.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-enhancement.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-restoration.jpg')";
    }
    else if(classID == "warlock"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-affliction.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-demonology.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-destruction.jpg')";
    }
    else if(classID == "warrior"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-arms.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-fury.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-protection.jpg')";
    }
    else{
        alert("Something went wrong");
    }

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

    let spec1 = xmlDoc.querySelectorAll('spec1');
    console.log(spec1[0].children[0].children[0].innerHTML);

    //Build Spec 1:
    if(spec1[0].children[0].children[0].innerHTML == "true"){
        console.log("slot 1 is active")
    }
    if(spec1[0].children[1].children[0].innerHTML == "true"){
        console.log("slot 2 is active")
    }
    if(spec1[0].children[2].children[0].innerHTML == "true"){
        console.log("slot 3 is active")
    }
    if(spec1[0].children[3].children[0].innerHTML == "true"){
        console.log("slot 4 is active")
    }

}