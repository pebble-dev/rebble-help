var steps = {};
var currentStep = 0;

function createQRCodes() {
    

    $( "qr" ).each(function(index) {

        var elm = $(this)
        console.log("Index is " + index)
        var url = elm.attr("url");
        console.log("Create QR to " + url)
        new QRCode(elm.get(0), {
            text: url,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });

    });
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function pageToStepByStep() {

    var numOfSteps = 0;
    $("h1").each(function(index) {

        var elm = $(this);
        console.log("Found new step: " + elm.text() )

        steps[index] = {
            "title": elm.text(),
            "startID": elm.prop("id")
        }
        numOfSteps++;

    });

    steps.count = numOfSteps

    if (steps.count == 1) { 
        $('#stepsman').addClass("hidden");
        return
    }

    if (findGetParameter("viewall") == "true") {
        //Prepend the step numbers then die
        $("h1").addClass("mt-5");
        for (var i=0; i<numOfSteps; i++) {
            console.log("#" + steps[i].startID)
            $("#" + steps[i].startID).html((i+1) + ". " + $("#" + steps[i].startID).html())
        }
        $('#stepStatus').html(steps.count + " steps")
        return
    }
    
    for (var i=0; i<numOfSteps; i++) {
        var nextID = ((i+1) == numOfSteps) ? "contentEnd" : steps[i+1].startID;
        steps[i].content = $("#" + steps[i].startID).nextUntil('#' + nextID)
    }

    if (location.hash != null) {
        var newcstep = parseInt(location.hash.replace("#",""))-1;
        if (! isNaN(newcstep)) {
            currentStep = newcstep
        }
    }
    selectStep(currentStep);

}
function selectStep(stepID) {
    if (stepID > steps.count) { return }
    var step = steps[stepID];
    //Humans are not 0 based
    stepID++

    var shouldHideFirstStepNumber = $('#metadata').data("hidefirstnumber");
    
    if (shouldHideFirstStepNumber != true || stepID != 1) {
        var title = '<h1> ' + stepID + ". " + step.title + '</h1>'
    } else {
        var title = '<h1>' + step.title + '</h1>'
    }
    
    $('#stepStatus').html(stepID + " / " + steps.count)
    $("#helpcontent").html(step.content)
    $("#helpcontent").prepend(title)

    var percComplete = stepID / steps.count * 100
    $(".percbar").css("width", percComplete + "%")

    $("#navButtons").removeClass("hidden");

    if (currentStep == steps.count-1) {
        $('#btn_next').addClass("hidden");
        $('#btn_home').removeClass("hidden");
    } else {
        $('#btn_next').removeClass("hidden");
        $('#btn_home').addClass("hidden");
    }

    if (currentStep == 0) {
        $('#btn_prev').addClass("hidden");
    } else {
        $('#btn_prev').removeClass("hidden");
    }

    location.hash = '#' + stepID;

    $('html,body').scrollTop(0);

}

function nextStep() {
    currentStep = (currentStep < steps.count) ? currentStep+1 : currentStep
    selectStep(currentStep)
}
function prevStep() {
    currentStep = (currentStep > 0) ? currentStep-1 : currentStep
    selectStep(currentStep)
}

if (findGetParameter("viewall") == "true") {
    $('#viewAllOn').addClass("hidden")
    $('#viewAllOff').removeClass("hidden")
} else {
    $('#viewAllOn').removeClass("hidden")
    $('#viewAllOff').addClass("hidden")
}

createQRCodes();
pageToStepByStep();