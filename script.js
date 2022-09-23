alert("\nClick on 'Generate Images' Button to Generate Random Dog Image using Dog API");
function fetchRandomDogImage(){

    console.log("call function");
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        // console.log(xhrRequest.response);
        var responseURL = JSON.parse(xhrRequest.response);
        var imageURL = responseURL.message;

        // console.log(imageURL)
        $('#img').attr('src',imageURL);
       
    };

    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send();


}



$('#button').on('click',fetchRandomDogImage);