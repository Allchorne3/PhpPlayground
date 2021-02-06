// COLOUR GUIDE
// Change to 0 to disable colour guide
var colorGuide = 0;
var clrGuide = $("html body div.clrGuide");

if(colorGuide) {
    clrGuide.css('display', 'flex');
} else {
    clrGuide.css('display', 'none');
}

$(".clrGuide").html(`
    <div class="clrGuide">
        <span class="bgclr-primary">P<span class="bgTxt1">T</span></span>
        <span class="bgclr-secondary">S<span class="bgTxt2">T</span></span>
        <span class="bgclr-tertiary">T<span class="bgTxt3">T</span></span>
        <span class="bgclr-accent">A<span class="bgTxt4">T</span></span>
    </div>
`);