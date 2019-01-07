$(document).ready(function () {
    $.getJSON("Home/ListDomains",
        function (json) {


            var speed = 10000;


            for (var i = 0; i < json.length; i++) {
                var txt = json[i].domainName;
                var size = txt.length;
                console.log(json[i].domainName);

                if (txt != "") {
                    typeWritter(txt, size);
                    setTimeout(typeWritter, speed);
                }

                setTimeout(typeWritter, speed);
            }

        });
});

async function typeWritter(txt, size) {

    var speed = 10000;

    for (var pos = 0; pos < size; pos++) {
        document.getElementById("demo").innerHTML += txt.charAt(pos);
        console.log(txt.charAt(pos));
        setTimeout(typeWritter, speed);
    }
    

    if (pos >= size) {
        erase(txt, size);
        setTimeout(typeWritter, speed);
        setTimeout(erase, speed);
    }

}

async function erase(txt, size) {
    var speed = 10000;

    for (var i = 1; i <= size; size--) {

        var str = txt.substring(0, size - 1);
        document.getElementById("demo").innerHTML = str;

        console.log(str.charAt(size));
        setTimeout(erase, speed);

    }
}

