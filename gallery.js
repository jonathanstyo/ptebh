// Selecting all required elements
const filterItem = document.querySelector(".custom-items-wrapper");
const filterImg = document.querySelectorAll(".custom-gallery .custom-image");
const descriptionParagraph = document.querySelector(".custom-fullscreen-preview-box .custom-desc");
const readMoreLink = document.querySelector('.custom-fullscreen-preview-box .read-more-link');

window.onload = () => { // after window loaded
    filterItem.onclick = (selectedItem) => { // if user click on filterItem div
        if (selectedItem.target.classList.contains("custom-item")) { // if user selected item has .custom-item class
            filterItem.querySelector(".active").classList.remove("active"); // remove the active class which is in first item
            selectedItem.target.classList.add("active"); // add that active class on user selected item
            let filterCategory = selectedItem.target.getAttribute("data-category"); // getting data-category value of user selected item and store in a filterCategory variable
            filterImg.forEach((image) => {
                let filterImages = image.getAttribute("data-category"); // getting image data-category value
                // if user selected item data-category value is equal to images data-category value
                // or user selected item data-category value is equal to "all"
                if ((filterImages == filterCategory) || (filterCategory == "all")) {
                    image.classList.remove("hide"); // first remove the hide class from the image
                    image.classList.add("show"); // add show class in image
                } else {
                    image.classList.add("hide"); // add hide class in image
                    image.classList.remove("show"); // remove show class from the image
                }
            });
        }
    }
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].setAttribute("onclick", "preview(this)"); // adding onclick attribute in all available images
    }
}

// fullscreen image preview function
// selecting all required elements
const fullscreenPreviewBox = document.querySelector(".custom-fullscreen-preview-box"),
    categoryTitle = fullscreenPreviewBox.querySelector(".custom-category-title p"),
    previewImg = fullscreenPreviewBox.querySelector("img"),
    closeIcon = fullscreenPreviewBox.querySelector(".custom-close-icon"),
    shadow = document.querySelector(".custom-shadow");

function preview(element) {
    // once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; // getting user clicked image source link and stored in a variable
    let selectedImgCategory = element.getAttribute("data-category"); // getting user clicked image data-category value
    let selectedImgDescription = element.getAttribute("data-desc"); // getting user clicked image description
    previewImg.src = selectedPrevImg; // passing the user clicked image source in preview image source
    categoryTitle.textContent = selectedImgCategory; // passing user clicked data-category value in category name
    descriptionParagraph.textContent = selectedImgDescription; // passing user clicked image description
    descriptionParagraph.classList.remove('expanded'); // Ensure the description is collapsed initially
    readMoreLink.textContent = 'Read More'; // Ensure the "Read More" link text is set correctly
    fullscreenPreviewBox.classList.add("show"); // show the preview image box
    shadow.classList.add("show"); // show the light grey background
    closeIcon.onclick = () => { // if user click on close icon of preview box
        fullscreenPreviewBox.classList.remove("show"); // hide the preview box
        shadow.classList.remove("show"); // hide the light grey background
        document.querySelector("body").style.overflow = "auto"; // show the scroll bar on body
    }
    // Close the preview box and shadow when clicking outside of it
    shadow.onclick = () => {
        fullscreenPreviewBox.classList.remove("show"); // hide the preview box
        shadow.classList.remove("show"); // hide the light grey background
        document.querySelector("body").style.overflow = "auto"; // show the scroll bar on body
    };

    closeIcon.onclick = () => { // if user click on close icon of preview box
        fullscreenPreviewBox.classList.remove("show"); // hide the preview box
        shadow.classList.remove("show"); // hide the light grey background
        document.querySelector("body").style.overflow = "auto"; // show the scroll bar on body
    };
}

// Add event listener for the "Read More" link
readMoreLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    descriptionParagraph.classList.toggle('expanded'); // Toggle the "expanded" class on description paragraph
    if (descriptionParagraph.classList.contains('expanded')) {
        readMoreLink.textContent = 'Read Less'; // Change link text when expanded
    } else {
        readMoreLink.textContent = 'Read More'; // Change link text when collapsed
    }
});
