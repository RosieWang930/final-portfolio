document.addEventListener('DOMContentLoaded', function(event) {
  AOS.init({
    duration: 1500,
    easing: 'ease-in-out-back',
    mirror: true,
    // disable: 'mobile',
  })
})

let workBlock = document.getElementById('works');

let myWorks = [{
    "title": "Koo",
    "picture_url_before": "koo_before.jpg",
    "picture_url_hover": "koo.jpg",
    "date": "2019.5",
    "category": "CREATIVE CODING",
    "work_url": "https://editor.p5js.org/undefined/present/R3jsknCZp",
    "workNum": "01"
  },
  {
    "title": "Heart Adventure",
    "picture_url_before": "heart_adventure_before.jpg",
    "picture_url_hover": "heart_adventure.png",
    "date": "2018.12",
    "category": "CREATIVE CODING",
    "work_url": "https://www.openprocessing.org/sketch/633016",
    "workNum": "02"
  },
  {
    "title": "NightSeeker",
    "picture_url_before": "nightseeker_before.jpg",
    "picture_url_hover": "nightseeker.png",
    "date": "2019.10",
    "category": "WEBSITE DESIGN",
    "work_url": "https://rosiewang930.github.io/Midterm-Mobile/",
    "workNum": "03"
  },
  {
    "title": "Four Myself: Growth",
    "picture_url_before": "city_before.jpg",
    "picture_url_hover": "city.jpg",
    "date": "2019.5",
    "category": "PHOTOGRAPHY",
    "work_url": "https://wang0930rx.tumblr.com/post/189465058694/four-myself-growth-four-season-four-glasses-four",
    "workNum": "04"
  },
  {
    "title": "First Day",
    "picture_url_before": "first_day_before.jpg",
    "picture_url_hover": "first_day.png",
    "date": "2018.12",
    "category": "SHORT VIDEO",
    "work_url": "https://www.youtube.com/watch?v=VjWNtw_QIwU",
    "workNum": "05"
  },
  {
    "title": "Chess Booklet",
    "picture_url_before": "chess_before.jpg",
    "picture_url_hover": "chess.jpg",
    "date": "2018.11",
    "category": "GRAPHIC DESIGN",
    "work_url": "https://wang0930rx.tumblr.com/post/189465149319/chess-booklet",
    "workNum": "06"
  }
]

//Tranport the JSON infomation to the page
//Use for-loop to add the elements in JSON list
for (var i = 0; i < myWorks.length; i++) {
  applyJSON(myWorks[i]);
}

function applyJSON(incomingJSON) {
  /// Create whole content item div and set class
  let newContentElement = document.createElement("article");
  newContentElement.classList.add('project');

  ///Add category
  let newContentCategory = document.createElement("H2");
  newContentCategory.classList.add('category');
  newContentCategory.setAttribute("data-aos", "zoom-in");
  newContentCategory.innerHTML = incomingJSON['category'];
  newContentElement.appendChild(newContentCategory);

  /// Add image
  let newImage = document.createElement("IMG");
  newImage.classList.add('workImg');
  newImage.setAttribute("data-aos", "fade-up");
  newImage.src = incomingJSON['picture_url_before'];
  // newContentElement.appendChild(newImage);

  ///Add link
  let newContentWorkURL = document.createElement("a");
  newContentWorkURL.href = incomingJSON['work_url'];
  newContentWorkURL.classList.add('urlPosition');
  newContentWorkURL.target = "_blank";
  newContentWorkURL.appendChild(newImage);
  newContentElement.appendChild(newContentWorkURL);

  ///add information tag for each project
  let newContentTag;
  let newContentTitle;
  let newContentDate;

  newContentTag = document.createElement("div");
  newContentTag.classList.add('infoTag');
  ///Add title
  newContentTitle = document.createElement("H6");
  newContentTitle.innerHTML = incomingJSON['title'];
  newContentTitle.style.display = "none";
  newContentTag.appendChild(newContentTitle);

  ///Add date
  newContentDate = document.createElement("H6");
  newContentDate.innerHTML = incomingJSON['date'];
  newContentDate.style.display = "none";
  newContentTag.appendChild(newContentDate);



  ///add hover function on project picture
  ///the picture will on the front and the infomation tag will appear
  newImage.addEventListener("mouseover", function(event) {
    newImage.src = incomingJSON['picture_url_hover'];
    newContentWorkURL.style.zIndex = 100;
    // newImage.style.transition = "all 1s";
    newImage.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    newContentTitle.style.display = "block";
    newContentDate.style.display = "block";


    newContentElement.appendChild(newContentTag);
  });

  newImage.addEventListener("mouseout", function(event) {
    newImage.src = incomingJSON['picture_url_before'];
    newContentWorkURL.style.zIndex = 0;
    newContentTitle.style.display = "none";
    newContentDate.style.display = "none";
    newImage.style.boxShadow = "none";

  });

  ///add mobile version javascript
  var mobileX = window.matchMedia("(max-width: 480px)");
  mobileChange(mobileX); // Call listener function at run time
  mobileX.addListener(mobileChange); // Attach listener function on state changes


  function mobileChange(x) {
    newContentTitle.style.display = "block";
    newContentDate.style.display = "block";
    let iconSize = document.getElementsByClassName('icon-margin');

    if (x.matches) { // If media query matches
      newImage.style.display = "block";
      for (var m = 0; m < iconSize.length; m++) {
        iconSize[m].classList.remove('fa-2x');
        iconSize[m].classList.add('fa-lg');
      }

      newContentCategory.addEventListener("click", function(event) {
        newImage.style.display = "block";
        newImage.src = incomingJSON['picture_url_hover'];
        newContentWorkURL.style.textAlign = "center";
        newContentWorkURL.style.zIndex = 100;
        newContentElement.style.height = "250px";
        // newContentTitle.style.display = "block";
        // newContentDate.style.display = "block";
      });
      newContentCategory.addEventListener("mouseout", function(event) {
        newImage.style.display = "none";
        newContentElement.style.height = "30px";
        // newContentTitle.style.display = "none";
        // newContentDate.style.display = "none";
      });
    } else {
      newImage.style.display = "block";
      for (var n = 0; n < iconSize.length; n++) {
        iconSize[n].classList.remove('fa-lg');
        iconSize[n].classList.add('fa-2x');
      }

    }
  }

  ///append each project to the main work div
  workBlock.appendChild(newContentElement);
}

///add a automation scroll function
///if curson on the title in the hero page for more than 2.5sec, it will automatically scroll to the next section
let heroTitle = document.getElementById('myname');
let heroPicture = document.getElementsByClassName('heropic');
let scrolled = true;

heroTitle.addEventListener("mouseover", function(event) {
  if (scrolled) {
    var timer = setTimeout("autoScroll()", 4000);
    scrolled = false;
  }
});

heroTitle.addEventListener("mouseout", function(event) {});

function autoScroll() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  window.scrollBy(w, h);
}

let cursorChange = document.getElementById('clickable');
let canvasPosition = document.getElementsByTagName('canvas');
cursorChange.addEventListener("mouseover", function(event) {
  canvasPosition.style.zIndex = 1;
});
