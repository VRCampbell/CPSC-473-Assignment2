var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";
var THUMBNAIL_ARRAY;
var currentIndex = 0;

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use-strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use-strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use-strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use-strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  "use-strict";

  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  "use-strict";
  THUMBNAIL_ARRAY = getThumbnailsArray();
  THUMBNAIL_ARRAY.forEach(addThumbClickHandler);
}

function cycleForward() {
  "use-strict";
  if (currentIndex == THUMBNAIL_ARRAY.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  var thumb = THUMBNAIL_ARRAY[currentIndex];
  setDetailsFromThumb(thumb);
}

function cycleBackward() {
  "use-strict";
  if (currentIndex == 0) {
    currentIndex = THUMBNAIL_ARRAY.length - 1;
  } else {
    currentIndex--;
  }
  var thumb = THUMBNAIL_ARRAY[currentIndex];
  setDetailsFromThumb(thumb);
}

initializeEvents();
