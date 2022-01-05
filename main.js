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