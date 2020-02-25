function ajaxGet(url,callback) {
    let xhr = new XMLHttpRequest()
    xhr.get('GET',url,true)
    xhr.send()
    xhr.onreadystatechange =function () {
        if(xhr.readyState ===4 &&xhr.status ===200){
            callback(xhr.responseText)
        }
    }

}
