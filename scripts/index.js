var linkBox = document.getElementById('link-box');
makeNewLink = (url, position) => {
    if (url === undefined || url.length == 0) {
        return;
    }
    id = linkBox.children.length;
    return new LinkElem(id, url, position);
}