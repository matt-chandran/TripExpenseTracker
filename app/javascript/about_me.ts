
document.addEventListener('DOMContentLoaded', () => {


  //Get the btn for each persons picture
  const tyler_btn = document.getElementById('tyler-btn')
  const matt_btn = document.getElementById('matt-btn')
  const aaron_btn = document.getElementById('aaron-btn')
  const emanuel_btn = document.getElementById('emanuel-btn')

  const tyler_info = document.getElementById('tyler-info')
  const matt_info = document.getElementById('matt-info')
  const aaron_info = document.getElementById('aaron-info')
  const emanuel_info = document.getElementById('emanuel-info')

  if(tyler_info && matt_info && aaron_info && emanuel_info) {
    if (tyler_btn && matt_btn && aaron_btn && emanuel_btn){
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
})


function dis(val: string) {
  const element = document.getElementById("result") as HTMLInputElement | null;
  if (element) {
    element.value += val;
  }
}

function evalResult() {
  const element = document.getElementById("result") as HTMLInputElement | null;
  if (element) {
    try {
      element.value = eval(element.value) as string;
    } catch (e) {
      element.value = "Error";
    }
  }
}

function clearResult() {
  const element = document.getElementById("result") as HTMLInputElement | null;
  if (element) {
    element.value = "";
  }
}

window.dis = dis;
window.evalResult = evalResult;
window.clearResult = clearResult;