document.addEventListener('DOMContentLoaded', function(event) {
  AOS.init({
    duration: 1500,
    easing: 'ease-in-out-back',
    mirror: true,
  })
})

let workBlock = document.getElementById('works');

let myWorks = [{
    "title": "Koo",
    "picture_url_before": "koo_before.jpg",
    "picture_url_hover": "koo.jpg",
    "date": "2019.5",
    "category": "CREATIVE CODING",
    "work_url": "#"
  },
  {
    "title": "Heart Adventure",
    "picture_url_before": "heart_adventure_before.jpg",
    "picture_url_hover": "heart_adventure.png",
    "date": "2018.12",
    "category": "CREATIVE CODING"
  },
  {
    "title": "NightSeeker",
    "picture_url_before": "nightseeker_before.jpg",
    "picture_url_hover": "nightseeker.png",
    "date": "2019.10",
    "category": "WEB DESIGN"
  },
  {
    "title": "Four Myself: Growth",
    "picture_url_before": "city_before.jpg",
    "picture_url_hover": "city.jpg",
    "date": "2019.5",
    "category": "PHOTOGRAPHY"
  },
  {
    "title": "First Day",
    "picture_url_before": "first_day_before.jpg",
    "picture_url_hover": "first_day.png",
    "date": "2018.12",
    "category": "SHORT FILM"
  },
  {
    "title": "Chess Booklet",
    "picture_url_before": "chess_before.jpg",
    "picture_url_hover": "chess.jpg",
    "date": "2018.11",
    "category": "GRAPHIC DESIGN"
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
  newContentElement.appendChild(newImage);

  let newContentTag;
  let newContentTitle;
  let newContentDate;
  newImage.addEventListener("mouseover", function(event) {
    newImage.src = incomingJSON['picture_url_hover'];
    newImage.style.zIndex = 100;
    // newImage.style.transition = "all 1s";


    newContentTag = document.createElement("div");
    newContentTag.classList.add('infoTag');
    ///Add title
    newContentTitle = document.createElement("H6");
    newContentTitle.innerHTML = incomingJSON['title'];
    newContentTag.appendChild(newContentTitle);

    ///Add date
    newContentDate = document.createElement("H6");
    newContentDate.innerHTML = incomingJSON['date'];
    newContentTag.appendChild(newContentDate);

    newContentElement.appendChild(newContentTag);
  });

  newImage.addEventListener("mouseout", function(event) {
    newImage.src = incomingJSON['picture_url_before'];
    newImage.style.zIndex = 0;
    newContentTitle.style.display = "none";
    newContentDate.style.display = "none";
  });

  // ///Add title
  // let newContentTitle = document.createElement("H6");
  // newContentTitle.classList.add('title');
  // newContentTitle.innerHTML = incomingJSON['title'];
  // newContentElement.appendChild(newContentTitle);
  //
  // ///Add date
  // let newContentDate = document.createElement("H6");
  // newContentDate.classList.add('title');
  // newContentDate.innerHTML = incomingJSON['date'];
  // newContentElement.appendChild(newContentDate);

  workBlock.appendChild(newContentElement);

}



let heroTitle = document.getElementById('myname');
let heroPicture = document.getElementsByClassName('heropic');
let scrolled = true;

heroTitle.addEventListener("mouseover", function(event) {
  if (scrolled) {
    var timer = setTimeout("autoScroll()", 2000);
    scrolled = false;
  }
});

heroTitle.addEventListener("mouseout", function(event) {});

function autoScroll() {
  window.scrollBy(1000, 1000);
  // alert("hi");
}
