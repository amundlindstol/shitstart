/**
requirejs(["helper/tabs"], function(util) {
    console.log("tabs loaded");
});
*/
var fonts = ["Default","Montez","Lobster","Josefin Sans","Shadows Into Light","Pacifico","Amatic SC", "Orbitron", "Rokkitt","Righteous","Dancing Script","Bangers","Chewy","Sigmar One","Architects Daughter","Abril Fatface","Covered By Your Grace","Kaushan Script","Gloria Hallelujah","Satisfy","Lobster Two","Comfortaa","Cinzel","Courgette"];
var settings = undefined;
var controller = {
    onFont: function(value) {
        let title = document.getElementById('title');
        if (value.value == "Default") {value.value = "'Comic Sans MS', serif";}
        title.style.fontFamily = value.value;
        console.log(document.getElementById('title'));
    },
    onRange: function(value) {
        //panel.setValue("progress", value);
    },

    onBgColor: function(value) {
        document.body.style.backgroundColor = value;
    },
    onIcoColor: function(value) {
        let icons = document.getElementsByName('ico-box');
        console.log(icons);
        icons.forEach(element => {
            element.style.backgroundColor = value;
        });
    },
    onClick: function() {
        let s = settings.getValue('url');
        localStorage.setItem(0, JSON.stringify(makeNewLink(s)));
    },
    onTitle: function(value) {
        document.getElementById('title').innerHTML = value;
    }
};

require(["lib/quicksettings"], function (QuickSettings) {
    QuickSettings.useExtStyleSheet();
    settings = QuickSettings.create(10, 10, "Settings")
        .addText("url", "https://www.", function(value) {})
        .addButton("add", controller.onClick)
        .addRange("columns", 1, 10, 5, 1, function(value) {})
        .addColor("bg color", document.body.style.backgroundColor, controller.onBgColor)
        .addColor("ico color", document.body.style.backgroundColor, controller.onIcoColor)
        .addText("title", "Start", controller.onTitle)
        .addDropDown("font", fonts, controller.onFont)
        .saveInLocalStorage('storedsettings');
});

//---- LOAD LINKS ----//
var loadLinksOnce = (function() {
    var executed = false;
    
    return function() {
        if (!executed) {
            executed = true;
            if (localStorage.getItem("0") !== null) {
                let map = new Map();
                let foundItem = null;
                for (let c = 0; c < 10; c++) {
                    foundItem = JSON.parse(localStorage.getItem(c));
                    if (foundItem === null) {break;}
                    map.set(c, foundItem);
                }
                map.forEach(link => {
                    new LinkElem(link.id, link.href, link.position);
                });
                
            } else {
                makeNewLink('https://www.google.com/');
            }
        }
    };
})();
loadLinksOnce();