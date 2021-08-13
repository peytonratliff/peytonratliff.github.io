function classSwap(classID) {

    var column1 = document.getElementById("column1");
    var column2 = document.getElementById("column2");
    var column3 = document.getElementById("column3");

    document.getElementById("startString").innerHTML = "";


    if(classID == "druidIcon"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-druid-balance.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-druid-feral-combat.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-druid-restoration.jpg')";
    }
    else if(classID == "hunterIcon"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-beast-mastery.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-marksmanship.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-hunter-survival.jpg')";
    }
    else if(classID == "mageIcon"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-mage-arcane.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-mage-fire.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-mage-frost.jpg')";
    }
    else if(classID == "paladinIcon"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-holy.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-protection.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-paladin-retribution.jpg')";
    }
    else if(classID == "priestIcon"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-priest-discipline.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-priest-holy.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-priest-shadow.jpg')";
    }
    else if(classID == "rogueIcon"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-assassination.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-combat.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-rogue-subtlety.jpg')";
    }
    else if(classID == "shamanIcon"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-elemental.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-enhancement.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-shaman-restoration.jpg')";
    }
    else if(classID == "warlockIcon"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-affliction.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-demonology.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warlock-destruction.jpg')";
    }
    else if(classID == "warriorIcon"){
        column1.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-arms.jpg')";
        column2.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-fury.jpg')";
        column3.style.backgroundImage = "url('../images/spec backgrounds/background-warrior-protection.jpg')";
    }
    else{
        alert("Something went wrong");
    }
}