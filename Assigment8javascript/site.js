$(document).ready(function(){
    $.getJSON("SAO.json", function(data){
        let char_data = '';
        $.each(data, function(key, value){
            char_data += '<tr>';
            char_data += '<td>' +value.FirstName+ '</td>';
            char_data += '<td>'+value.LastName+ '</td>';
            char_data += '<td>'+value.AvatarName+ '</td>';
            char_data += '<td>'+value.Gender+ '</td>';
            char_data += '</tr>';
        });

        $('#body').append(char_data);
    });
});