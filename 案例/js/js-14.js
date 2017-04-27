/**
 * Created by Administrator on 2017/3/29 0029.
 */
window.onload = function () {
    function obj(name,age) {
        this.name1 = name;
        this.age1 = age;
    }
    var me1 = new obj('charles',37);
    document.write(me1.name1);
    
};