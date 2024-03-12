$(function () {
    $("#birth_date").datepicker({
        format: 'dd.mm.yyyy',//顯示格式
        startView:2,
        minView:2,
        maxView :2,
        language: 'ru-Ru',
        autoclose: 1,//選擇後自動關閉
        clearBtn:true,//清除按鈕
        initialDate : initDate(), //初始時間
    });

    $('#category').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        
        if(valueSelected == "1" || valueSelected == "3") {
            $(".birth").show();
            $(".link").hide();
        }
        if(valueSelected == "Выберите категорию" || valueSelected == "4") {
            $(".birth").hide();
            $(".link").hide();
        }
        if(valueSelected == "2") {
            $(".birth").hide();
            $(".link").show();
        }
    });

    $('#phonenumber').inputmask("+7 (999) 999-9999");

    //var random = getRandomInt(1000, 9999);
    //$('#myModal #smscode').val(random);
            //sendSMS();
});

function initDate(){
    var myDate = new Date();
    var tYear = myDate.getFullYear()
    var tMonth = myDate.getMonth()+1
    if(tMonth < 10){
        tMonth = "0" + tMonth
    }

    var currentDate = tYear + "/" + tMonth + "/01"
    return currentDate
}

/*function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function checkSMS(enteredCode) {
    var generatedCode = $('#smscode').val();
    return enteredCode == generatedCode ? 1 : 0;
}*/

function reg()
{

    var phone = $("#phonenumber").val();
    if(phone.includes('_') || phone.length == 0) {
        $("#phoneHelpBlock").show();
        console.log("Неверно введен номер телефона");
    } else {
        $(".sms").show();
        $("#phoneHelpBlock").hide();
        var smsCodeElement = $('#smscode');
        var smsCode = smsCodeElement.val();
        if(smsCode != "" &&  smsCode != "1111")
            alert("Неверно введен код. Осталось 3 попытки");
        if(smsCode == "1111")
            window.location.href = 'application.html';
    }

    
}


/*function sendSMS() {
    var phone = $('#myModal #myphone').val();
    var smsCode = $('#myModal #smscode').val();
    $.ajax({
        url:'send.php',//url адрес файла обработчика
        method:'get', //тип запроса: get,post либо head
        dataType:'html', //тип возвращаемого ответа text либо xml
        data:{
            'phone': phone,
            'text': smsCode,
        }, //параметры запроса
        success:function (data) {//возвращаемый результат от сервера
            //console.log(data);
            //$$('result',$$('result').innerHTML+'<br />'+data);
        }
    });
}

$(document).on('click', '#linkResend', function() {
    var random = getRandomInt(1000, 9999);
    $('#myModal #smscode').val(random);
    $('#codeAccept').val('');
    sendSMS();
});

$(document).on('keyup', '#codeAccept', function() {
    var enteredCode = $(this).val();
    if(enteredCode.length == 4) {
        if(checkSMS(enteredCode)) {
            $('.btn-next').removeAttr('disabled');
            //window.location.href = 'lk.html';
        }
        else {
            //alert("Неверно введен код. Осталось 3 попытки");
            $('#incorrectCode').css('opacity', '1');
            $('.btn-next').attr('disabled', 'true');
        }
    }
        
    else {
        $('#incorrectCode').css('opacity', '0');
        $('.btn-next').attr('disabled', 'true');
    }
});

$(document).on('keyup', '#phone', function() {
    var enteredPhone = $(this).val();
    if(/\+\d{1} \(\d{3}\) \d{3}-\d{4}/g.test(enteredPhone) ) {
        $('.btn-next').removeAttr('disabled');
    } else {
        $('.btn-next').attr('disabled', 'true');
    }
});
*/