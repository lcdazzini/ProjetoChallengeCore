$(document).ready(function () {
    $.getJSON("Home/ListDomains",
        function (json) {
            var tr;
            for (var i = 0; i < json.length; i++) {
                tr = $('<tr />');
                tr.append("<td>" + write(json[i].domainName) + "</td>");
                $('table').append(tr);
            }
        });
});