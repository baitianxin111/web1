/**
 * Created by Administrator on 2017/3/27 0027.
 */
window.onload = function () {
    var today = new Date();
    document.write(today);

    // alert(oInput);
    var oBtn = document.getElementById('btn');
    oBtn.onclick = function () {
        var oInput = parseInt(document.getElementById('score').value);
        var score = Math.floor(oInput/10);
        var p = '不合格';
        var q = '合格';
        var o = '优异';
        switch (score){
            case 0:
                alert(p);
                break;
            case 1:
                alert(p);
                break;
            case 2:
                alert(p);
                break;
            case 3:
                alert(p);
                break;
            case 4:
                alert(p);
                break;
            case 5:
                alert(p);
                break;
            case 6:
                alert(q);
                break;
            case 7:
                alert(q);
                break;
            case 8:
                alert(q);
                break;
            case 9:
                alert(o);
                break;
            case 10:
                alert(o);
                break;
            default:
                alert('非法输入');
                break;
        }

        // if(oInput>100 || oInput<0){
        //     alert('输入的成绩无效！');
        // }else{
        //     if(oInput>=90){
        //         alert("成绩优异！")
        //     }else if(oInput>=70){
        //         alert('成绩良好！');
        //     }else if(oInput>=60){
        //         alert('成绩合格');
        //     }else{
        //         alert('成绩不合格')
        //     }
        // }

    }

    
}