//https://teachablemachine.withgoogle.com/models/aMbjFRHky/
function start()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aMbjFRHky/model.json" , model_ready)
}
function model_ready()
{
    classifier.classify(gotResult)
}
function gotResult(error , results)
{
    if (error) {+
        console.error(error)
    }
    else{console.log(results)
    document.getElementById("sounds").innerHTML = "I can hear - "+results[0].label
    image = document.getElementById("gif")
    if (results[0].label == "Background Noise") {
        image.src = "library.jpg"
    }
    if (results[0].label == "dog sound") {
        image.src = "dog gif.gif"
    }
    if (results[0].label == "cat sound") {
        image.src = "cat gif.gif"
    }
    if (results[0].label == "human sound") {
        image.src = "human gif.gif"
    }
}
}