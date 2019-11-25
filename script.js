document.addEventListener('DOMContentLoaded', function(event) {
  AOS.init({
    duration: 1500,
    easing: 'ease-in-out-back',
  })
  addWorkPics();
})

var workPic;
// var selectedWorkName;

function addWorkPics() {
  //Koo
  document.getElementsByTagName('li')[0].onmouseover = function() {
    workPic = document.getElementsByClassName('workImg')[0];
    workPic.style.display = "block";
  }
  document.getElementsByTagName('li')[0].onmouseout = function() {
    workPic = document.getElementsByTagName('img')[0];
    workPic.style.display = "none";
  }

  //heart_adventure
  document.getElementsByTagName('li')[1].onmouseover = function() {
    workPic = document.getElementsByClassName('workImg')[1];
    workPic.style.display = "block";
  }
  document.getElementsByTagName('li')[1].onmouseout = function() {
    workPic = document.getElementsByTagName('img')[1];
    workPic.style.display = "none";
  }

  //nightseeker
  document.getElementsByTagName('li')[2].onmouseover = function() {
    workPic = document.getElementsByClassName('workImg')[2];
    workPic.style.display = "block";
  }
  document.getElementsByTagName('li')[2].onmouseout = function() {
    workPic = document.getElementsByTagName('img')[2];
    workPic.style.display = "none";
  }

  //city
  document.getElementsByTagName('li')[3].onmouseover = function() {
    workPic = document.getElementsByClassName('workImg')[3];
    workPic.style.display = "block";
  }
  document.getElementsByTagName('li')[3].onmouseout = function() {
    workPic = document.getElementsByTagName('img')[3];
    workPic.style.display = "none";
  }

  //first_day
  document.getElementsByTagName('li')[4].onmouseover = function() {
    workPic = document.getElementsByClassName('workImg')[4];
    workPic.style.display = "block";
  }
  document.getElementsByTagName('li')[4].onmouseout = function() {
    workPic = document.getElementsByTagName('img')[4];
    workPic.style.display = "none";
  }

  //chess
  document.getElementsByTagName('li')[5].onmouseover = function() {
    workPic = document.getElementsByClassName('workImg')[5];
    workPic.style.display = "block";
  }
  document.getElementsByTagName('li')[5].onmouseout = function() {
    workPic = document.getElementsByTagName('img')[5];
    workPic.style.display = "none";
  }
}




// selectedWorkName = document.getElementsByTagName("li")[];
