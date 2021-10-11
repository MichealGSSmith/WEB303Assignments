/*
    Assignment 4
    {Micheal SMith #0777761}
*/

$(document).ready(function(){

    //this is the successCallback function that will do all the work when client allows gelocation
    const successCallback = (position) => {
        let yourLat = position.coords.latitude;
        let yourLong = position.coords.longitude;
        //let yourACC = position.coords.accuracy;     
        $('div').append(`<p>this is your latitude: ${yourLat}</p>`);
        $('div p').append(`<p>this is your longitude: ${yourLong}</p>`);
        //$('div p').append(`<p>With an accuracy of: ${yourACC}</p>`); Why would this make it showup twice on page?? Ask Alex later...
        console.log(position);
        localStorage.setItem(position);
        
        if(!position) { //this is trying to get if no position saved display wleomce sign
            $('div p').append('Welcome to the site');
        }else{      //this is then trying to calculate the distance if there is a position from the last.
            $('div p').append(`${calcDistance}`);
        }

        
    }
    
    //this is the errorCallback that will alert the client that inorder to use this feauture they must select allow on previous alert
    const errorCallback = (error) => {
        console.error(error);
        alert("You need to accept for GEOLOCATION");
    }

    //this is the gelocation function that prompts the user to select allow and then runs either of the callbacks...
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);



    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


