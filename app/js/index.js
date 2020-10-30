import {insert} from "./insert.js";
import {modalWindow} from "./modal-window.js";

document.addEventListener("DOMContentLoaded", function(){
 
    modalWindow();

    //Вычисление максимального и минимального значения из объекта
    let obj = {  
        a0:{aa:[3,9], bb:2, cc:{aaa:4,bbb:-5}},
        a1:{aa:[0,8], bb:-7, cc:{aaa:8,bbb:7}},
        a2:{aa:[9,-4], bb:1, cc:{aaa:-1,bbb:8}},    
        a3:{aa:[8,-1], bb:7, cc:{aaa:3,bbb:0}},
        a4:{aa:[-4,-2], bb:-2, cc:{aaa:8,bbb:9}}
    };

    //преобразуем все значения aa в один массив
    let aa = [];
    Object.values(obj).map(e => e.aa).forEach(e => e.push.apply(aa, e));
    //преобразуем все значения bb в один массив
    let bb = Object.values(obj).map(e => e.bb);
    //преобразуем все значения cc в один массив
    let cc = [];
    Object.values(obj).map(e => e.cc).map(e => Object.values(e)).forEach(e => e.push.apply(cc, e));
    //объединяем все предыдущие массивы в один массив
    let all = aa.concat(bb, cc);
    //выводим max и min значения на экран
    insert('max', Math.max(...all));
    insert('min', Math.min(...all));
});


