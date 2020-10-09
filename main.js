

eel.dummy("this es eel")(function (ret) {


    var puerto1 = document.getElementById("puerto1");
    puerto1.innerHTML = ret[0]

    var puerto2 = document.getElementById("puerto2");
    puerto2.innerHTML = ret[1]

    var puerto3 = document.getElementById("puerto3");
    puerto3.innerHTML = ret[2]



})











function sel() {

    $('.custom-select').change(function () {
        var selectedItem = $('.custom-select').val();

        eel.dummy("this es eel")(function (ret) {


            if (selectedItem == 1) {
                data = ret[0]

                eel.data(data)

            }

            if (selectedItem == 2) {
                data = ret[1]

                eel.data(data)

            }

            if (selectedItem == 3) {
                data = ret[2]
                eel.data(data)

            }
        })
    });

}

function refresh() {


    eel.dummy("this es eel")(function (ret) {


        var puerto1 = document.getElementById("puerto1");
        puerto1.innerHTML = ret[0]

        var puerto2 = document.getElementById("puerto2");
        puerto2.innerHTML = ret[1]

        var puerto3 = document.getElementById("puerto3");
        puerto3.innerHTML = ret[2]

    })



}

function START() {

        eel.START("START")(function (ret) {
        })

}


