$(document).ready(function(){
    $.getJSON("SAO.json", function(data){
        let char_data = "";
        $.each(data, function(value){
            
            char_data += '<tr>';
            char_data += '<td>' +value.FirstName + '</td>';
            char_data += '<td>' +value.LastName+  '</td>';
            char_data += '<td>' +value.AvatarName+  '</td>';
            char_data += '<td>' +value.Gender+  '</td>';
            char_data += '<td>' + value.BirthdateOrFirstScene + '</td>';
            char_data += '</tr>';

            
        });

        $('#body').append(char_data);
    });

    $('h1').sort(function(a,b) {
        return $("td", b).attr("class") < $("td", a).attr("class") ? 1 : -1;}).appendTo('#body');

    },
    
    $('h2').sort(function(a,b) {
        return $("td", b).attr("class") < $("td", a).attr("class") ? 1 : -1;}).appendTo('#body');

    }
    
    $('h3').sort(function(a,b) {
        return $("td", b).attr("class") < $("td", a).attr("class") ? 1 : -1;}).appendTo('#body');

    }
    
    $('h4').sort(function(a,b) {
        return $("td", b).attr("class") < $("td", a).attr("class") ? 1 : -1;}).appendTo('#body');

    }
    
    $('h5').sort(function(a,b) {
        return $("td", b).attr("class") < $("td", a).attr("class") ? 1 : -1;}).appendTo('#body');

    }
});