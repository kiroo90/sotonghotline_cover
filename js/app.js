$(() => {
    // 네비 업다운
    $(window).on("mousewheel", (e)=>{
        let scroll = e.originalEvent.wheelDelta;
        if (scroll < 0) {
            $("header").addClass("scroll");
        } else {
            $("header").removeClass("scroll");
        }
    });

    // 스크롤시 메인 컨텐츠 이미지 크기
    $(window).scroll(()=>{
        let scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".slide_container").addClass("on");
            $(".imgs").addClass("on");
        }  else {
            $(".slide_container").removeClass("on");
            $(".imgs").addClass("on");
        }
    });

    // 스크롤시 애니메이션
    $(window).scroll(()=>{
        let scroll = $(window).scrollTop();
        const box = $(".slide_container").offset().top;
        const title = $(".title").offset().top;
        const item = $(".slide_wrap").offset().top;
        const bgRed = $(".bg_red").offset().top;
        const partner = $(".partner").offset().top;

        // 레드박스 보더
        if (scroll > box - 300) {
            $(".box_red").addClass("on");
        } 
        // 레드박스 옆 타이틀
        if (scroll > box - 100) {
            $(".title").addClass("on");
        } 
        // 소통핫라인 서비스 소개 슬라이더 이미지
        if (scroll > title - 400) {
            $(".item").find("img").addClass("on");
        } 
        // 소통핫라인 서비스 소개 슬라이더 텍스트
        if (scroll > item - 400) {
            $(".item").find("dl").addClass("on");
        } 
        // 소통핫라인 서비스 소개 슬라이더 넘버
        if (scroll > item - 200) {
            $(".num").addClass("on");
        }
        // 레드 박스 신고서 작성 다운
        if (scroll > bgRed - 800) {
            $(".bg_red").find("div").addClass("on");
        }  
        // 자주하는 질문 타이틀
        if (scroll > bgRed - 350) {
            $(".question_list").addClass("on");
        } 
        // 자주하는 질문 아이콘
        if (scroll > bgRed - 250) {
            $(".questionList").addClass("on");
        }  
        // 파트너십 이미지 업 , 텍스트 다운
        if (scroll > partner - 800) {
            $(".partner").addClass("on");
            $(".partner_info").addClass("on");
        }  
        // 공지사항
        if (scroll > partner + 100) {
            $(".notice").addClass("on");
        }  
    });

    // 슬라이더 버튼 이벤트
    $(".next").on("click", ()=>{
            $(".opacity_01").removeClass("on");
            $(".opacity").addClass("on");
    });
    $(".prev").on("click", ()=>{
            $(".opacity_01").addClass("on");
            $(".opacity").removeClass("on");
    });
});