var num = 12;

function check() {
    if (num <= 10) {
        $(".text").text("快要沒了!");
        $(".text").css("border-bottom", "solid 8px #FF6505");
        $(".text").css("color", "#FF6505");
        $(".fill_stock").addClass("fill_stock_open");
    }
    else if (num > 10 && num <= 20) {
        $(".text").text("賣得不錯!");
        $(".text").css("border-bottom", "solid 8px #FFCD05");
        $(".text").css("color", "#FFCD05");
        $(".fill_stock").removeClass("fill_stock_open");
    }
    else {
        $(".text").text("還剩很多!");
        $(".text").css("border-bottom", "solid 8px #42f486");
        $(".text").css("color", "#42f486");
    }
}
$(".minus").click(function () {
    num--;
    $(".num").text(num);
    check();
});
$(".add").click(function () {
    num++;
    $(".num").text(num);
    check();
});
check();
$(".num").text(num);