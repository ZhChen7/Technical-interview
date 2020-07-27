function ajaxGet(url, callback) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.send()


    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText)
        }
    }

}



fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });