
makeNewLink = (url, position) => {
    if (url === undefined) {
        url = prompt("Enter New Link", "https://google.no");
    }
    linkBox = document.getElementById('link-box');
    id = linkBox.children.length;
    ico = document.createElement('img');
    ico.class = 'ico';
    ico.src = url;
    icobox = document.createElement('a');
    icobox.id = id;
    icobox.name = "ico-box";
    icobox.appendChild(ico);
    if (position < linkBox.length && position >= 0) {
        linkBox.insertBefore(icobox, linkBox.children[position]);
    } else {
        linkBox.appendChild(icobox);
    }
    console.log(id);
    new Tab(id, url);
}