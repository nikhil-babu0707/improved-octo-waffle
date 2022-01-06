prediction1 = "";
prediction2 = "";


Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '">';
    });
}

console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/le3Is2kKJ/model.json', modelloded);

function modelloded() {
    console.log("model loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data1 = "the first prediction is - " + prediction1;
    var speak_data2 = "the second prediction is - " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}

function check() {
    image = document.getElementById("capture_image");
    classifier.classify(image, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (result[0].label = "super") {
            document.getElementById("update_emoji").innerHTML = "&#128076";
        }
        if (result[0].label = "thumbs up") {
            document.getElementById("update_emoji").innerHTML = "&#128077";
        }
        if (result[0].label = "chears") {
            document.getElementById("update_emoji").innerHTML = "&#9996";
        }

        if (result[1].label = "super") {
            document.getElementById("update_emoji").innerHTML = "&#128076";
        }
        if (result[1].label = "thumbs up") {
            document.getElementById("update_emoji").innerHTML = "&#128077";
        }
        if (result[1].label = "chears") {
            document.getElementById("update_emoji").innerHTML = "&#996";
        }
    }

}