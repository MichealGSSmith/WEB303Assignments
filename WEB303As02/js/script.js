// WEB303 Assignment 2
// Micheal Smith #0777761


$(document).ready(function(){

    $('a#vprospect').on('click', function(){
        
        $('div#solution').load('prospect.html');
    });

    $('a#vconvert').on('click', function(){
        
        $('div#solution').load('convert.html');
    });

    $('a#vretain').on('click', function(){
        
        $('div#solution').load('retain.html');
    });

});

