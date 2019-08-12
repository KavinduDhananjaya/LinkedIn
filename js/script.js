function postclick() {
    $("#postTab").css("display", "block");

}

function postclickclose() {
    $("#postTab").css("display", "none")
}

function chatOn() {
    $("#side_nav").css("display", "none");
    $("#messageBody").css("display", "block");
    $("#messageTab").css("bottom", "350px");

    $("#messageTab").click(function () {
        chatOff();
    })
}

function chatOff() {


    $("#side_nav").css("display", "block");
    $("#messageBody").css("display", "none");
    $("#messageTab").css("bottom", "0px");
}

function chat2() {
    $("#chatHead").css("display", "block");
}

function chat2Close() {
    $("#chatHead").css("display", "none");
}

function setStatus() {

    var note = document.getElementById("note").value;
    // $("#div1").html('<img src="../image/ddddd.jpg" width="400" height="400">' );
    // $("#img1").attr("src","../image/kkkk.jpeg")
    $("#content1").text(note);
    $("#content1").css("display", "block");


}
// openProfile();
function openProfile() {
    $("#myProfile").css("display", "block");

    $("#me").click(function () {
        $("#myProfile").css("display", "none");

    })
}

function btnSend() {

    if ($("#note").val()==""){
        $("#btn2").attr("disabled");
    } else {
        $("#btn2").removeAttr("disabled");

    }
}

$("#btn2").click(function () {
    if ($("#note").val()==""){
        $("#btn2").attr("disabled");
    } else {
        $("#btn2").removeAttr("disabled");

    }
});