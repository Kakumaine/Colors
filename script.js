$(document).ready(function(){

    var myColors=[
            
    ];
    
    if (localStorage.cart==null){
        var myColorsString=JSON.stringify(myColors);
        localStorage.cart=myColorsString;
    };

    addColor = function(print){
        var myAddedColors=JSON.parse(localStorage.cart)
        myAddedColors.push(print)
        localStorage.cart=JSON.stringify(myAddedColors)
    };

    loopColors();

    function loopColors(){
        var loopMyColorsString=JSON.parse(localStorage.cart);
        for (var index=0;index<loopMyColorsString.length;index++){
            $(".varukorg").append(loopMyColorsString[index])
        };
    };

    $(".empty").click(function(){
        localStorage.clear()
        $(".varukorg").text("")
        console.log(localStorage.cart)
    });
});
