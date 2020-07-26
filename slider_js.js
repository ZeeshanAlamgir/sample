//For the slider
var index = 0;
function theSlider(){
    var allImages = document.getElementsByClassName("theImages");

    for(let i=0; i<allImages.length; i++){
        if(i == index){
            allImages[i].style.display = "block";
        } else{
            allImages[i].style.display = "none";
        }
    }
    index++;
    if(index >= allImages.length){index=0};
    setTimeout(theSlider, 2000);
}
theSlider();

