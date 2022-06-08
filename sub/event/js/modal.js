$(function(){
    // 	이미지 클릭시 해당 이미지 모달
    $(".imgC").click(function(){
        $(".snackModal").show();
        // 해당 이미지 가겨오기
        /*var imgSrc = $(this).children("img").attr("src");
        var imgAlt = $(this).children("img").attr("alt");
        $(".modalBox img").attr("src", imgSrc);
        $(".modalBox img").attr("alt", imgAlt);
        
        // 해당 이미지 텍스트 가져오기
        var imgTit =  $(this).children("p").text();
        $(".modalBox p").text(imgTit);*/
    });
        
    //.modal안에 button을 클릭하면 .modal닫기
    $(".snackModal button").click(function(){
        $(".modal").hide();
    });
    
    //.modal밖에 클릭시 닫힘
    $(".snackModal").click(function (e) {
        if (e.target.className != "modal") {
            return false;
        } else {
            $(".snackModal").hide();
        }
    });
});