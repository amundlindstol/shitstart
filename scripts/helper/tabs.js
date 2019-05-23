class Tab {
    constructor(id, href) {
        this.id = id;
        this.href = href;
        this.ico(href);
        this.updateDocument(id);
    }
    
    changeLink(href) {
        if (!href.startsWith("https://")) {href = "https://"+href;}
        this.href = href;
        this.ico(href);
    }

    ico(href) {
        this.srcIco = 'https://www.google.com/s2/favicons?domain=' + href;
    }

    updateDocument = (id) => {
        let tab = document.getElementById(id);
        console.log(tab);
        tab.childNodes[0].src = this.srcIco;
        this.changeLink(this.href);
        tab.href = this.href;
    }
}
