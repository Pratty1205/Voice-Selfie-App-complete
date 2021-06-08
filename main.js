var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    recognition.onresult=function(event) {
        console.log(event);
        var content=event.results[0][0].transcript;
        console.log(content);
        if (content=="take my selfie") {
            console.log("taking selfie");
            speak();
        }
        document.getElementById("textbox").innerHTML=content;
    }
}
function speak() {
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 3, 2, 1";
    var utter_this=new SpeechSynthesisUtterance(speak_data); 
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
        },3500);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
var camera=document.getElementById("camera");
function take_snapshot() {
    Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='selfie_image' src="+data_uri+"></img>";
        }
    );
}
function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}