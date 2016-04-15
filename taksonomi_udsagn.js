$(document).ready(function(){
    init();
});



function init() {
    // GENERER DROPPABBLE OG DRAGGABLE //

    for (var i = 0; i < jsonData.udsagn.length; i++) {
        $(".droppable_container").append("<div class='droppable' id=" + i + ">" + jsonData.udsagn[i].Udsagn_sentence + "</div>");
    }

    for (var i = 0; i < jsonData.niveauer.length; i++) {
        $(".draggable_container").append("<h3><div class='draggable label label-default label_" + i + "'>" + jsonData.niveauer[i] + "</div></h3>");
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
        start: function(event, ui) {
            create_new_tag($(this));
        },
        drag: function(event, ui) {

            $(this).css("opacity", 0.8).addClass("draggable-active");
        },
        stop: function(event, ui) {
            $(this).css("opacity", 1).removeClass("draggable-active");
        }
    });


}


function create_new_tag(obj){
    var indeks = obj.attr("class").split(" ")[3];
    indeks = indeks[6]
    console.log(indeks);
}
