 var feedback = function(res) {
     if (res.success === true) {
        var wahaha = res.data.link.replace("http", "https");
        document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.status').innerHTML = 
        'Image : ' + '<br><input class="image-url" value=' + wahaha + '/>' + '<img class="img" src=' + wahaha + '/>';
     }
 };

new Imgur({ 
    clientid: '797cf96bf083de6', 
    callback: feedback 
});
