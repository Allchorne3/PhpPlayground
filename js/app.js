// COLOUR GUIDE
// Change to 0 to disable colour guide
var colorGuide = 1;
var clrGuide = $("html body div.clrGuide");

if(colorGuide) {
    clrGuide.css('display', 'flex');
} else {
    clrGuide.css('display', 'none');
}

$(".clrGuide").html(`
    <div class="clrGuide">
        <span class="clr-primary">P<span class="bgTxt1">T</span></span>
        <span class="clr-secondary">S<span class="bgTxt2">T</span></span>
        <span class="clr-tertiary">T<span class="bgTxt3">T</span></span>
        <span class="clr-accent">A<span class="bgTxt4">T</span></span>
    </div>
`);