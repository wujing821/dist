/* 
 * @Author: anchen
 * @Date:   2017-07-10 12:35:14
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-07-17 17:17:48
 */

'use strict';


window.onload = function () {
    $('#loading').css('display', 'none');
    $('#music')[0].play();
    main();
};

function main(argument) {
    $('#fullpage').fullpage({
        /* anchors:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18'],*/
        fixedElements: '#loading,#playContainer',
        // continuousVertical: true,
        verticalCentered: false,
        onLeave: function onLeave(index, nextIndex, driection) {
            // console.log('onLeave:'+index);
            switch (index) {
                case 1:
                    $('#zhaomu').css('display', 'none');
                    break;
                case 2:
                    $('#page2 .p1').css('display', 'none');
                    $('#page2 .p2').css('display', 'none');
                    break;
                case 3:
                    $('#page3 .p1').css('display', 'none');
                    break;
                case 4:
                    $('#page4 .p1').css('display', 'none');
                    break;
                case 5:
                    $('#page5 .p1').css('display', 'none');
                    $('#page5 .p2').css('display', 'none');
                    $('#page5 .p3').css('display', 'none');
                    $('#page5 .p4').css('display', 'none');
                    $('#page5 .p5').css('display', 'none');
                    break;
                case 6:
                    $('#page6 .p1').css('display', 'none');
                    $('#page6 .p2').css('display', 'none');
                    $('#page6 .p3').css('display', 'none');
                    $('#page6 .p4').css('display', 'none');
                    $('#page6 .p5').css('display', 'none');
                    $('#page6 .p6').css('display', 'none');
                    break;
                case 7:
                    $('#page7 .p1').css('display', 'none');
                    $('#page7 .p2').css('display', 'none');
                    $('#page7 .p3').css('display', 'none');
                    $('#page7 .p4').css('display', 'none');
                    break;
                case 8:
                    $('#page8 .p1').css('display', 'none');
                    $('#page8 .p2').css('display', 'none');
                    $('#page8 .p3').css('display', 'none');
                    $('#page8 .p4').css('display', 'none');
                    $('#page8 .p5').css('display', 'none');
                    $('#page8 .p6').css('display', 'none');
                    $('#page8 .p7').css('display', 'none');
                    $('#page8 .p8').css('display', 'none');
                    $('#page8 .p9').css('display', 'none');
                    break;
                case 9:
                    $('#page9 .p1').css('display', 'none');
                    $('#page9 .p2').css('display', 'none');
                    $('#page9 .p3').css('display', 'none');
                    $('#page9 .p4').css('display', 'none');
                    $('#page9 .p5').css('display', 'none');
                    $('#page9 .p6').css('display', 'none');
                    break;
                case 10:
                    $('#page10 .p1').css('display', 'none');
                    $('#page10 .p2').css('display', 'none');
                    $('#page10 .p3').css('display', 'none');
                    $('#page10 .p4').css('display', 'none');
                    $('#page10 .p5').css('display', 'none');
                    break;
                case 11:
                    $('#page11 .p1').css('display', 'none');
                    $('#page11 .p2').css('display', 'none');
                    $('#page11 .p3').css('display', 'none');
                    $('#page11 .p4').css('display', 'none');
                    $('#page11 .p5').css('display', 'none');
                    $('#page11 .p6').css('display', 'none');
                    break;
                case 12:
                    $('#page12 .p1').css('display', 'none');
                    $('#page12 .p2').css('display', 'none');
                    $('#page12 .p3').css('display', 'none');
                    $('#page12 .p4').css('display', 'none');
                    $('#page12 .p5').css('display', 'none');
                    $('#page12 .p6').css('display', 'none');
                    $('#page12 .p7').css('display', 'none');
                    $('#page12 .p8').css('display', 'none');
                    $('#page12 .p9').css('display', 'none');
                    break;
                case 13:
                    $('#page13 .p1').css('display', 'none');
                    $('#page13 .p2').css('display', 'none');
                    $('#page13 .p3').css('display', 'none');
                    $('#page13 .p4').css('display', 'none');
                    $('#page13 .p5').css('display', 'none');
                    $('#page13 .p6').css('display', 'none');
                    $('#page13 .p7').css('display', 'none');
                    break;
                case 14:
                    $('#page14 .p1').css('display', 'none');
                    $('#page14 .p2').css('display', 'none');
                    $('#page14 .p3').css('display', 'none');
                    $('#page14 .p4').css('display', 'none');
                    $('#page14 .p5').css('display', 'none');
                    $('#page14 .p6').css('display', 'none');
                    $('#page14 .p7').css('display', 'none');
                    break;
                case 15:
                    $('#page15 .p1').css('display', 'none');
                    $('#page15 .p2').css('display', 'none');
                    $('#page15 .p3').css('display', 'none');
                    break;
                case 16:
                    $('#page16 .p1').css('display', 'none');
                    $('#page16 .p2').css('display', 'none');
                    $('#page16 .p3').css('display', 'none');
                    $('#page16 .p4').css('display', 'none');
                    $('#page16 .p5').css('display', 'none');
                    $('#page16 .p6').css('display', 'none');
                    $('#page16 .p7').css('display', 'none');
                    $('#page16 .p8').css('display', 'none');
                    break;
                case 17:
                    $('#page17 .p1').css('display', 'none');
                    $('#page17 .p2').css('display', 'none');
                    $('#page17 .p3').css('display', 'none');
                    $('#page17 .p4').css('display', 'none');
                    $('#page17 .p5').css('display', 'none');
                    $('#page17 .p6').css('display', 'none');
                    $('#page17 .p7').css('display', 'none');
                    $('#page17 .p8').css('display', 'none');
                    $('#page17 .p9').css('display', 'none');
                    $('#page17 .p10').css('display', 'none');
                    break;
            }
        },
        //加载之后发生 
        afterLoad: function afterLoad(anchorLink, index) {
            // console.log('afterLoad:'+index);
            switch (index) {
                case 1:
                    $('#zhaomu').css('display', 'block');
                    break;
                case 2:
                    $('#page2 .p1').css('display', 'block');
                    $('#page2 .p2').css('display', 'block');
                    break;
                case 3:
                    $('#page3 .p1').css('display', 'block');
                    break;
                case 4:
                    $('#page4 .p1').css('display', 'block');
                    break;
                case 5:
                    $('#page5 .p1').css('display', 'block');
                    $('#page5 .p2').css('display', 'block');
                    $('#page5 .p3').css('display', 'block');
                    $('#page5 .p4').css('display', 'block');
                    $('#page5 .p5').css('display', 'block');
                    break;
                case 6:
                    $('#page6 .p1').css('display', 'block');
                    $('#page6 .p2').css('display', 'block');
                    $('#page6 .p3').css('display', 'block');
                    $('#page6 .p4').css('display', 'block');
                    $('#page6 .p5').css('display', 'block');
                    $('#page6 .p6').css('display', 'block');
                    break;
                case 7:
                    $('#page7 .p1').css('display', 'block');
                    $('#page7 .p2').css('display', 'block');
                    $('#page7 .p3').css('display', 'block');
                    $('#page7 .p4').css('display', 'block');
                    break;
                case 8:
                    $('#page8 .p1').css('display', 'block');
                    $('#page8 .p2').css('display', 'block');
                    $('#page8 .p3').css('display', 'block');
                    $('#page8 .p4').css('display', 'block');
                    $('#page8 .p5').css('display', 'block');
                    $('#page8 .p6').css('display', 'block');
                    $('#page8 .p7').css('display', 'block');
                    $('#page8 .p8').css('display', 'block');
                    $('#page8 .p9').css('display', 'block');
                    break;
                case 9:
                    $('#page9 .p1').css('display', 'block');
                    $('#page9 .p2').css('display', 'block');
                    $('#page9 .p3').css('display', 'block');
                    $('#page9 .p4').css('display', 'block');
                    $('#page9 .p5').css('display', 'block');
                    $('#page9 .p6').css('display', 'block');
                    break;
                case 10:
                    $('#page10 .p1').css('display', 'block');
                    $('#page10 .p2').css('display', 'block');
                    $('#page10 .p3').css('display', 'block');
                    $('#page10 .p4').css('display', 'block');
                    $('#page10 .p5').css('display', 'block');
                    break;
                case 11:
                    $('#page11 .p1').css('display', 'block');
                    $('#page11 .p2').css('display', 'block');
                    $('#page11 .p3').css('display', 'block');
                    $('#page11 .p4').css('display', 'block');
                    $('#page11 .p5').css('display', 'block');
                    $('#page11 .p6').css('display', 'block');
                    break;
                case 12:
                    $('#page12 .p1').css('display', 'block');
                    $('#page12 .p2').css('display', 'block');
                    $('#page12 .p3').css('display', 'block');
                    $('#page12 .p4').css('display', 'block');
                    $('#page12 .p5').css('display', 'block');
                    $('#page12 .p6').css('display', 'block');
                    $('#page12 .p7').css('display', 'block');
                    $('#page12 .p8').css('display', 'block');
                    $('#page12 .p9').css('display', 'block');
                    break;
                case 13:
                    $('#page13 .p1').css('display', 'block');
                    $('#page13 .p2').css('display', 'block');
                    $('#page13 .p3').css('display', 'block');
                    $('#page13 .p4').css('display', 'block');
                    $('#page13 .p5').css('display', 'block');
                    $('#page13 .p6').css('display', 'block');
                    $('#page13 .p7').css('display', 'block');
                    break;
                case 14:
                    $('#page14 .p1').css('display', 'block');
                    $('#page14 .p2').css('display', 'block');
                    $('#page14 .p3').css('display', 'block');
                    $('#page14 .p4').css('display', 'block');
                    $('#page14 .p5').css('display', 'block');
                    $('#page14 .p6').css('display', 'block');
                    $('#page14 .p7').css('display', 'block');
                    break;
                case 15:
                    $('#page15 .p1').css('display', 'block');
                    $('#page15 .p2').css('display', 'block');
                    $('#page15 .p3').css('display', 'block');
                    break;
                case 16:
                    $('#page16 .p1').css('display', 'block');
                    $('#page16 .p2').css('display', 'block');
                    $('#page16 .p3').css('display', 'block');
                    $('#page16 .p4').css('display', 'block');
                    $('#page16 .p5').css('display', 'block');
                    $('#page16 .p6').css('display', 'block');
                    $('#page16 .p7').css('display', 'block');
                    $('#page16 .p8').css('display', 'block');
                    break;
                case 17:
                    $('#page17 .p1').css('display', 'block');
                    $('#page17 .p2').css('display', 'block');
                    $('#page17 .p3').css('display', 'block');
                    $('#page17 .p4').css('display', 'block');
                    $('#page17 .p5').css('display', 'block');
                    $('#page17 .p6').css('display', 'block');
                    $('#page17 .p7').css('display', 'block');
                    $('#page17 .p8').css('display', 'block');
                    $('#page17 .p9').css('display', 'block');
                    setTimeout(function () {
                        $('#page17 .p10').css('display', 'block');
                    }, 1300);
                    break;
            }
        }
    });
    //音乐开关
    var onoff = true;
    var $music = $('#music')[0];
    $('#playContainer').on('click', function (event) {
        event.preventDefault();
        if (onoff) {
            $music.pause();
            $('.pauseBtn span')[0].style.webkitAnimationPlayState = 'paused';
            $('.pauseBtn span')[0].style.animationPlayState = 'paused';
        } else {
            $music.play();
            $('.pauseBtn span')[0].style.webkitAnimationPlayState = 'running';
            $('.pauseBtn span')[0].style.animationPlayState = 'running';
        }
        onoff = !onoff;
    });

    //修复最后一页键盘弹出时露出背景问题
    var body = getComputedStyle(document.body);
    var height = body.height;
    var s18 = document.getElementById('page18');
    s18.style.height = height;
};