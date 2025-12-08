document.addEventListener('DOMContentLoaded', function () {
    //Get the btn for each persons picture
    var tyler_btn = document.getElementById('tyler-btn');
    var matt_btn = document.getElementById('matt-btn');
    var aaron_btn = document.getElementById('aaron-btn');
    var emanuel_btn = document.getElementById('emanuel-btn');
    var tyler_info = document.getElementById('tyler-info');
    var matt_info = document.getElementById('matt-info');
    var aaron_info = document.getElementById('aaron-info');
    var emanuel_info = document.getElementById('emanuel-info');
    if (tyler_info && matt_info && aaron_info && emanuel_info) {
        if (tyler_btn && matt_btn && aaron_btn && emanuel_btn) {
            tyler_btn.addEventListener('click', function () {
                tyler_btn.style.border = "3px solid black";
                aaron_btn.style.border = "none";
                matt_btn.style.border = "none";
                emanuel_btn.style.border = "none";
                tyler_info.style.opacity = "100%";
                matt_info.style.opacity = "0%";
                aaron_info.style.opacity = "0%";
                emanuel_info.style.opacity = "0%";
            });
            matt_btn.addEventListener('click', function () {
                tyler_btn.style.border = "none";
                aaron_btn.style.border = "none";
                matt_btn.style.border = "3px solid black";
                emanuel_btn.style.border = "none";
                tyler_info.style.opacity = "0%";
                matt_info.style.opacity = "100%";
                aaron_info.style.opacity = "0%";
                emanuel_info.style.opacity = "0%";
            });
            aaron_btn.addEventListener('click', function () {
                tyler_btn.style.border = "none";
                aaron_btn.style.border = "3px solid black";
                matt_btn.style.border = "none";
                emanuel_btn.style.border = "none";
                tyler_info.style.opacity = "0%";
                matt_info.style.opacity = "0%";
                aaron_info.style.opacity = "100%";
                emanuel_info.style.opacity = "0%";
            });
            emanuel_btn.addEventListener('click', function () {
                tyler_btn.style.border = "none";
                aaron_btn.style.border = "none";
                matt_btn.style.border = "none";
                emanuel_btn.style.border = "3px solid black";
                tyler_info.style.opacity = "0%";
                matt_info.style.opacity = "0%";
                aaron_info.style.opacity = "0%";
                emanuel_info.style.opacity = "100%";
            });
        }
    }
});
function dis(val) {
    var element = document.getElementById("result");
    if (element) {
        element.value += val;
    }
}
function evalResult() {
    var element = document.getElementById("result");
    if (element) {
        try {
            element.value = eval(element.value);
        }
        catch (e) {
            element.value = "Error";
        }
    }
}
function clearResult() {
    var element = document.getElementById("result");
    if (element) {
        element.value = "";
    }
}
window.dis = dis;
window.evalResult = evalResult;
window.clearResult = clearResult;
