function ajax(url, fnSucc, fnFaild) {
    //1.创建Ajax对象
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.连接服务器（打开和服务器的连接）
    xhr.open('GET', url, true);
    //3.发送
    xhr.send();
    //4.接收
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fnSucc(xhr.responseText);
        } else {
            fnFaild();
        }
    };
}
