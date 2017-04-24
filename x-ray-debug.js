javascript: (
    function () {
        var elements = document.body.getElementsByTagName("*");
        var items = [];
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML.indexOf("background:#000!important;color:#0f0!important;outline:solid #f00 1px!important;") != -1) {
                items.push(elements[i]);
            }
        }

        if (items.length > 0) {
            console.log("Stopping x-ray");
            console.log("Num items in items: " + items.length);
            for (var i = 0; i < items.length; i++) {
                console.log(items[i]);
                console.log("Before: " + items[i].innerHTML);
                items[i].innerHTML = "";
                console.log("After: " + items[i].innerHTML);
            }
        } else {
            console.log("Starting x-ray");
            document.body.innerHTML += "<style>*{background:#000!important;color:#0f0!important;outline:solid #f00 1px!important;}</style>";
        }
    }
)();