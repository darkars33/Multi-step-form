var button= document.querySelectorAll(".shape");
var noOfBtn= document.querySelectorAll(".shape").length;
var firstNext= document.querySelector(".next");
var selectCardMoney=[];
button[0].style.backgroundColor=' hsl(206, 94%, 87%)';

function first1btn() {
    document.querySelector(".personal-info").style.display= 'flex';
    document.querySelector(".select-plan").style.display= 'none';
    document.querySelector(".pick-add-ons").style.display= 'none';
    document.querySelector(".finishing-up").style.display= 'none';
    button[0].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[1].style.backgroundColor='hsl(243, 100%, 62%)';
    button[2].style.backgroundColor='hsl(243, 100%, 62%)';
    button[3].style.backgroundColor='hsl(243, 100%, 62%)';
    }

function second2btn() {
    document.querySelector(".personal-info").style.display= 'none';
    document.querySelector(".select-plan").style.display= 'flex';
    document.querySelector(".pick-add-ons").style.display= 'none';
    document.querySelector(".finishing-up").style.display= 'none';
    button[0].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[1].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[2].style.backgroundColor='hsl(243, 100%, 62%)';
    button[3].style.backgroundColor='hsl(243, 100%, 62%)';
}

function thrid3btn() {
    document.querySelector(".personal-info").style.display= 'none';
    document.querySelector(".select-plan").style.display= 'none';
    document.querySelector(".pick-add-ons").style.display= 'flex';
    document.querySelector(".finishing-up").style.display= 'none';
    button[0].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[1].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[2].style.backgroundColor='hsl(206, 94%, 87%)';
    button[3].style.backgroundColor='hsl(243, 100%, 62%)';
}

function fourth4btn() {
    document.querySelector(".personal-info").style.display= 'none';
    document.querySelector(".select-plan").style.display= 'none';
    document.querySelector(".pick-add-ons").style.display= 'none';
    document.querySelector(".finishing-up").style.display= 'flex';
    button[0].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[1].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[2].style.backgroundColor='hsl(206, 94%, 87%)';
    button[3].style.backgroundColor='hsl(206, 94%, 87%)';
}


for(var i=0; i<noOfBtn; i++){
button[i].addEventListener("click", function () {
    var a= this.innerHTML;

    if(a==1){
        first1btn();
    }else if(a==2){
        second2btn();
    }else if(a==3){
        thrid3btn();
    }else if(a==4){
        fourth4btn();
    }

})
}
var input= document.querySelectorAll("input");
firstNext.addEventListener("click", function () {
    
    if(input[0].value==0 || input[1].value==0 || input[2].value==0){
        if(input[0].value==0){
            input[0].style.border='2px solid red';
            setTimeout(() => {
                input[0].style.border= '1px solid lightgray';
            }, 2000);
        }
        if (input[1].value==0) {
            input[1].style.border='2px solid red';
            setTimeout(() => {
                input[1].style.border='1px solid lightgray';
            }, 2000);
        }
        if (input[2].value==0) {
            input[2].style.border='2px solid red';
            setTimeout(() => {
                input[2].style.border='1px solid lightgray';
            }, 2000);
        }
    }else{
        second2btn();
    }

})


// select card

const card1forMon= {
        money: 9,
        text: 'mo'
};
const card2forMon= {
        money: 12,
        text: 'mo'
};
const card3forMon= {
        money: 15,
        text: 'mo'
};
const card1forYr= {
        money: 90,
        text: 'yr'
};
const card2forYr= {
        money: 120,
        text: 'yr'
};
const card3forYr= {
        money: 150,
        text: 'yr'
}

var prizeMoney= document.querySelectorAll(".money");
prizeMoney[0].innerHTML='$'+card1forMon.money+'/'+card1forMon.text;
prizeMoney[1].innerHTML='$'+card2forMon.money+'/'+card2forMon.text;
prizeMoney[2].innerHTML='$'+card3forMon.money+'/'+card3forMon.text;

var toggle= false;

document.querySelector(".change").addEventListener("click", function () {
    if(!toggle){
        document.querySelector(".change").style.float='right';
        prizeMoney[0].innerHTML='$'+card1forYr.money+'/'+card1forYr.text;
        prizeMoney[1].innerHTML='$'+card2forYr.money+'/'+card2forYr.text;
        prizeMoney[2].innerHTML='$'+card3forYr.money+'/'+card3forYr.text;
        pickName[0].innerHTML= '+$'+onlinServiceYr.money+'/'+onlinServiceYr.text;
        pickName[1].innerHTML= '+$'+largeStorageYr.money+'/'+largeStorageYr.text;
        pickName[2].innerHTML= '+$'+profileYr.money+'/'+profileYr.text;
        toggle=true;
    }else{
        document.querySelector(".change").style.float='left';
        prizeMoney[0].innerHTML='$'+card1forMon.money+'/'+card1forMon.text;
        prizeMoney[1].innerHTML='$'+card2forMon.money+'/'+card2forMon.text;
        prizeMoney[2].innerHTML='$'+card3forMon.money+'/'+card3forMon.text;
        pickName[0].innerHTML= '+$'+onlinServiceMo.money+'/'+onlinServiceMo.text;
        pickName[1].innerHTML= '+$'+largeStorageMo.money+'/'+largeStorageMo.text;
        pickName[2].innerHTML= '+$'+profileMo.money+'/'+profileMo.text;
        toggle=false;
    }

})

var yr= prizeMoney[0].innerHTML;
var selectCard= document.querySelectorAll(".card");
var selectCardLength= document.querySelectorAll(".card").length;
for(var i=0; i<selectCardLength; i++){

}








var remainNext1= document.querySelectorAll(".next1");
var back= document.querySelectorAll(".goBack");

remainNext1[0].addEventListener("click", function () {
    document.querySelector(".personal-info").style.display= 'none';
    document.querySelector(".select-plan").style.display= 'none';
    document.querySelector(".pick-add-ons").style.display= 'flex';
    document.querySelector(".finishing-up").style.display= 'none';
    button[0].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[1].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[2].style.backgroundColor='hsl(206, 94%, 87%)';
    button[3].style.backgroundColor='hsl(243, 100%, 62%)';
})
remainNext1[1].addEventListener("click", function() {
    document.querySelector(".personal-info").style.display= 'none';
    document.querySelector(".select-plan").style.display= 'none';
    document.querySelector(".pick-add-ons").style.display= 'none';
    document.querySelector(".finishing-up").style.display= 'flex';
    button[0].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[1].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[2].style.backgroundColor='hsl(206, 94%, 87%)';
    button[3].style.backgroundColor='hsl(206, 94%, 87%)';
})

back[0].addEventListener("click", function() {
    document.querySelector(".personal-info").style.display= 'flex';
    document.querySelector(".select-plan").style.display= 'none';
    document.querySelector(".pick-add-ons").style.display= 'none';
    document.querySelector(".finishing-up").style.display= 'none';
    button[0].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[1].style.backgroundColor= ' hsl(243, 100%, 62%)';
    button[2].style.backgroundColor='hsl(243, 100%, 62%)';
    button[3].style.backgroundColor='hsl(243, 100%, 62%)';
})
back[1].addEventListener("click", function() {
    document.querySelector(".personal-info").style.display= 'none';
    document.querySelector(".select-plan").style.display= 'flex';
    document.querySelector(".pick-add-ons").style.display= 'none';
    document.querySelector(".finishing-up").style.display= 'none';
    button[0].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[1].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[2].style.backgroundColor='hsl(243, 100%, 62%)';
    button[3].style.backgroundColor='hsl(243, 100%, 62%)';  
})
back[2].addEventListener("click", function() {
    document.querySelector(".personal-info").style.display= 'none';
    document.querySelector(".select-plan").style.display= 'none';
    document.querySelector(".pick-add-ons").style.display= 'flex';
    document.querySelector(".finishing-up").style.display= 'none';
    button[0].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[1].style.backgroundColor= ' hsl(206, 94%, 87%)';
    button[2].style.backgroundColor='hsl(206, 94%, 87%)';
    button[3].style.backgroundColor='hsl(243, 100%, 62%)';  
})


const onlinServiceMo= {
    money: 1,
    text: 'mo'
};

const largeStorageMo= {
    money: 2,
    text: 'mo'
};

const profileMo= {
    money: 2,
    text: 'mo'
};

const onlinServiceYr= {
    money: 10,
    text: 'yr'
};

const largeStorageYr= {
    money: 20,
    text: 'yr'
};

const profileYr= {
    money: 20,
    text: 'yr'
};

var pickName= document.querySelectorAll(".pick-prize");
pickName[0].innerHTML= '+$'+onlinServiceMo.money+'/'+onlinServiceMo.text;
pickName[1].innerHTML= '+$'+largeStorageMo.money+'/'+largeStorageMo.text;
pickName[2].innerHTML= '+$'+profileMo.money+'/'+profileMo.text;


var check1= document.querySelectorAll(".check1");
var check1size= document.querySelectorAll(".check1").length;
for(var i=0; i<check1size; i++){
    check1[i].addEventListener("click", function() {
        var ab= pickName[i].innerHTML;
        alert(ab);
  })
}


















