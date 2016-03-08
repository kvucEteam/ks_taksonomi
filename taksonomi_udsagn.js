var JsonObj;

function loadData(url) {
    $.ajax({
        url: url,
        // contentType: "application/json; charset=utf-8",  // Blot en test af tegnsaettet....
        //dataType: 'json', // <------ VIGTIGT: Saadan boer en angivelse til en JSON-fil vaere! 
        dataType: 'text', // <------ VIGTIGT: Pga. ???, saa bliver vi noedt til at angive JSON som text. 
        async: false, // <------ VIGTIGT: Sikring af at JSON hentes i den rigtige raekkefoelge (ikke asynkront). 
        success: function(data, textStatus, jqXHR) {
            JsonObj = jQuery.parseJSON(data);
            // Alt data JsonObj foeres over i arrays:


            //$(".correct").html("Correct answers: <b>" + score + " / " + antal_korrekte + " </b> Attempts: <b>" + attempts + "</b>");
            //next_round();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Error!!!\njqXHR:" + jqXHR + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown);
        }
    });

    console.log("jSON loaded");
    init();
}

function init() {
    // GENERER DROPPABBLE OG DRAGGABLE //
    for (var i = 0; i < JsonObj.udsagn.length; i++) {
        $(".droppable_container").append("<div class='droppable' id=" + i + ">" + JsonObj.udsagn[i].Udsagn_sentence + "</div>");
    }

    for (var i = 0; i < JsonObj.niveauer.length; i++) {
        $(".draggable_container").append("<h3><div class='draggable label label-default' class=label_" + i + ">" + JsonObj.niveauer[i] + "</div></h3>");
    }
    // 
    $(".droppable, .draggable_container").droppable({
        accept: ".draggable",
        drop: function(event, ui) {
            $(this).addClass("dropped_draggable");
        }
    });
    $(".draggable").draggable({
        revert: "invalid",
        drag: function(event, ui) {

            $(this).css("opacity", 0.8).addClass("draggable-active");
        },
        stop: function(event, ui) {
            $(this).css("opacity", 1).removeClass("draggable-active");
        }
    });


}
