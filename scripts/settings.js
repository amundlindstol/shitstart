/**
requirejs(["helper/tabs"], function(util) {
    console.log("tabs loaded");
});
*/
var settings = undefined;
var controller = {
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
        makeNewLink(s);
    },
    onTitle: function(value) {
        document.getElementById('title').innerHTML = value;
    }
};

require(["lib/quicksettings"], function (QuickSettings) {
    QuickSettings.useExtStyleSheet();
    settings = QuickSettings.create(10, 10, "Settings")
        .addText("url", "https://www.", function(value) { output("Text", value)})
        .addButton("add", controller.onClick)
        .addRange("columns", 1, 10, 5, 1, function(value) { output("Range", value)})
        .addColor("bg color", "#ff0000", controller.onBgColor)
        .addColor("ico color", "#ff0000", controller.onIcoColor)
		.addText("title", "Start", controller.onTitle)
        .saveInLocalStorage('storedsettings');
});

output = (t, val) => {
    console.log(val);
}
