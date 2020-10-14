var carousalSlide = document.querySelector('#carousal');

var carousalImages = document.querySelectorAll('#carousal img');

for (var i =0;i<carousalImages.length ;i++)
console.log(carousalImages[i].id) ;


var prev = document.querySelector('.prev');

var next = document.querySelector('.next');

var counter = 1;
var size = carousalImages[0].clientWidth;

// translate('40px')
carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click' , ()=>{
    console.log(counter) ;
    if (counter > 5)
    return ;
    counter++;
    carousalSlide.style.transition = 'all ' + '0.4s';

    carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prev.addEventListener('click' , ()=>{
    if (counter <1)
    return ;
    console.log(counter);
    counter--;
    carousalSlide.style.transition = 'all ' + '0.4s';

    carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carousalSlide.addEventListener('transitionend' , ()=>{
    if (carousalImages[counter].id === 'last-clone')
    {
         carousalSlide.style.transition = "none";
        counter = carousalImages.length - 2;
        console.log(counter);
        carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carousalImages[counter].id === 'first-clone')
    {
         carousalSlide.style.transition = "none";
        counter = carousalImages.length - counter;
        console.log(counter);
        carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});