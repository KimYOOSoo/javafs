//문서가 준비되면 함수 실행
$(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#FF5F45', '#0798EC', '#FC6C7C', '#FEC401'],
        navigation: true,
        navigationTooltips: ['첫 페이지', '두번째 페이지', 'thirdPage', 'fourthPage'],
        showActiveTooltip: true,
    });
});