function abc(){
    var ksit = navigator.geolocation.getCurrentPosition(onSuccess,onError);
    function onSuccess(position){
        alert('Latitude:: '+ position.coords.latitude + '\n' + 'Longitude::' + position.coords.longitude + '\n');
        
        var x = position.coords.latitude;
        var y = position.coords.longitude;
        window.location.href="https://www.latlong.net/c/?lat="+x+"&long="+y;
    }
    function onError(error){
        alert('Code::' + error.code + '\n' + 'Message::' + error.message + '\n');
    }
    
}

/*
function findl(){
   var ksit1 = navigator.geolocation.getCurrentPosition(onSuccess,onError);
    function onSuccess(position){
        var x = position.coords.longitude;
        var y = position.coords.latitude;
        alert(x+'\n'+y)
    }
    function onError(error){
        alert('Code::' + error.code + '\n' + 'Message::' + error.message + '\n');
    }
    
}
*/