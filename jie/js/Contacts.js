/**
 * Created by Administrator on 2017/4/6 0006.
 */
window.onload = function () {
    textedit();
    openlink();
    move();


}

function textedit() {
    var oContacts_apply = document.getElementsByClassName('Contacts_apply')[0].getElementsByTagName('input');
    var oContacts_span = document.getElementsByClassName('Contacts_apply')[0].getElementsByTagName('span');
    var oContacts_textarea = document.getElementsByClassName('Contacts_apply')[0].getElementsByTagName('textarea');

    oContacts_apply[0].addEventListener('click',function () {
        oContacts_span[0].style.backgroundPositionY = -43+'px';
        oContacts_apply[0].setAttribute('placeholder','');

        oContacts_apply[0].addEventListener('mouseout',function () {
            oContacts_span[0].style.backgroundPositionY = 0+'px';
            oContacts_apply[0].setAttribute('placeholder','填写您的姓名或名称');

        });


    });




    oContacts_apply[1].addEventListener('click',function () {
        oContacts_span[1].style.backgroundPositionY = -43+'px';
        oContacts_apply[1].setAttribute('placeholder','');

        oContacts_apply[1].addEventListener('mouseout',function () {
            oContacts_span[1].style.backgroundPositionY = 0+'px';
            oContacts_apply[1].setAttribute('placeholder','填写您的联系邮箱');
        });
    });


    oContacts_apply[2].addEventListener('click',function () {
        oContacts_span[2].style.backgroundPositionY = -43+'px';
        oContacts_apply[2].setAttribute('placeholder','');

        oContacts_apply[2].addEventListener('mouseout',function () {
            oContacts_span[2].style.backgroundPositionY = 0+'px';
            oContacts_apply[2].setAttribute('placeholder','填写您的电话或手机');
        });
    });



    oContacts_apply[3].addEventListener('click',function () {
        oContacts_span[3].style.backgroundPositionY = -43+'px';
        oContacts_apply[3].setAttribute('placeholder','');

        oContacts_apply[3].addEventListener('mouseout',function () {
            oContacts_span[3].style.backgroundPositionY = 0+'px';
            oContacts_apply[3].setAttribute('placeholder','填写您的地址或公司地址');
        });

    });


    oContacts_textarea[0].addEventListener('click',function () {
        oContacts_span[4].style.backgroundPositionY = -139+'px';
        oContacts_textarea[0].setAttribute('placeholder','');

        oContacts_textarea[0].addEventListener('mouseout',function () {
            oContacts_span[4].style.backgroundPositionY = 0+'px';
            oContacts_textarea[0].setAttribute('placeholder','浙江省杭州市西湖区文一学院路口，电话：0-18313327175');
        });

    });


}

function openlink() {

    var omyblog = document.getElementsByClassName('myblog')[0];
    var oaboutus = document.getElementsByClassName('aboutus')[0];
    var ocontacts = document.getElementsByClassName('contacts')[0];
    var ocase = document.getElementsByClassName('case')[0];
    var home = document.getElementsByClassName('home')[0];

    omyblog.addEventListener('click',function () {
        window.open("./home.html",'case','');
    });


    oaboutus.addEventListener('click',function () {
        window.open("./case.html",'case','');
    });

    ocontacts.addEventListener('click',function () {
        window.open("./Contacts.html",'case','');
    });

    ocase.addEventListener('click',function () {
        window.open("./ABOUTUS.html",'case','');
    });

    // home.addEventListener('click',function () {
    //     window.open("./ABOUTUS.html",'case','');
    // });

}

function move() {
   var browidth = Math.floor(document.body.clientWidth/2);
    var Obody = document.getElementById('wrapp');
    var OContacts_img_box = document.getElementsByClassName('Contacts_img_box')[0];

    Obody.addEventListener('mouseover',function (event) {
         var mousewidth =  parseInt(event.clientX);
         if(mousewidth>=browidth)
         {
             var positionwidth = mousewidth - browidth;
             
                 OContacts_img_box.style.backgroundPositionX = -positionwidth+"px";


         }else if(mousewidth<=browidth)
         {
             var positionwidth = mousewidth - browidth;
             OContacts_img_box.style.backgroundPositionX = -positionwidth+"px";
         }
    });

}

