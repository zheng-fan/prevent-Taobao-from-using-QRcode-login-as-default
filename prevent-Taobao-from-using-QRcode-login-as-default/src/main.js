var s = document.createElement('script');
s.src = chrome.extension.getURL('src/fucktaobao.js');
s.onload = function() {
    this.remove();
};

// document.getElementById("page").appendChild(s);
// (document.head || document.documentElement).appendChild(s);
// document.head.appendChild(s);
// document.body.appendChild(s);
// document.documentElement.appendChild(s);
// document.getElementById("server-num").parentNode.appendChild(s);
// document.body.insertBefore(s,document.body.firstChild);
// document.body.insertBefore(s,document.getElementById("server-num").parentNode.nextSibling);
document.head.insertBefore(s,document.head.childNodes[0]);
