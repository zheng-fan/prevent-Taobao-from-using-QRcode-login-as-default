function fucktaobao()
{
    var tbclass=document.getElementById("J_LoginBox").className;
    if (tbclass.search(/module-quick/)!=-1)
    {
        document.getElementById("J_LoginBox").className=tbclass.replace(/module-quick/, "module-static");
    }
    else
    {
        setTimeout(fucktaobao, 100);
    }
}
var regexp = /login\.taobao\.com\//;
var match = regexp.exec(location.href);
if (match !== null)
{
    //window.loginConfig.enableQRCode=false;
    window.loginConfig.shownQRCode=false;
    document.getElementById("J_LoginBox").className=document.getElementById("J_LoginBox").className.replace(/loading/, "module-static");
    fucktaobao();
}
