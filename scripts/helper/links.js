class LinkElem {
    constructor(id, href, position) {
        this.id = id;
        if (!href.startsWith("https://")) {href = "https://"+href;}
        this.href = href;
        this.position = position;
        this.updateDocument(position);
    }

    ico(href) {
        this.srcIco = 'https://www.google.com/s2/favicons?domain=' + href;
    }

    updateDocument = () => {
        this.ico(this.href);
        let ico = document.createElement('img');
        ico.class = 'ico';
        ico.src = this.srcIco;
        let icobox = document.createElement('a');
        icobox.id = this.id;
        icobox.name = "ico-box";
        icobox.href = this.href;
        icobox.appendChild(ico);
        if (this.position < linkBox.length && this.position >= 0) {
            linkBox.insertBefore(icobox, linkBox.children[this.position]);} 
        else {
            linkBox.appendChild(icobox);}
    }
}
