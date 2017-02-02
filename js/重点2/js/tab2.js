
$.fn.extend({
    tab:myTab,
});
function myTab(){
    var oDiv=$(this);
    var aInput=oDiv.children('input');
    var aDiv=oDiv.children('div');
    aInput.click(function(){
        $(this).addClass('bg').siblings('input').removeClass('bg');
        aDiv.eq($(this).index()).addClass('show').siblings('div').removeClass('show');
    })
}






