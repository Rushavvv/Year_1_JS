/* 
   Event listener for DOMContentLoaded to ensure the document is fully loaded before executing JavaScript.
*/
document.addEventListener('DOMContentLoaded', function() {

    // Selecting all elements with the class 'open-popup-btn'.
    const openPopupButtons = document.querySelectorAll('.open-popup-btn');

    // Selecting all elements with the class 'close'.
    const closePopupButtons = document.querySelectorAll('.close');

    // Selecting all elements with the class 'popup'.
    const popups = document.querySelectorAll('.popup');

    // Adding click event listeners to all elements with the class 'open-popup-btn'.
    openPopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Finding the closest ancestor with the class 'item' and then selecting the '.popup' within it.
            const popup = this.closest('.item').querySelector('.popup');
            // Calling the openPopup function with the selected popup.
            openPopup(popup);
        });
    });

    // Adding click event listeners to all elements with the class 'close'.
    closePopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Finding the closest ancestor with the class 'popup'.
            const popup = this.closest('.popup');
            // Calling the closePopup function with the selected popup.
            closePopup(popup);
        });
    });

    // Adding click event listeners to all elements with the class 'popup'.
    popups.forEach(popup => {
        popup.addEventListener('click', function(e) {
            // Checking if the clicked element is not within the '.popup-content'.
            if (!e.target.closest('.popup-content')) {
                // Calling the closePopup function with the selected popup.
                closePopup(popup);
            }
        });
    });

    // Function to open the specified popup.
    function openPopup(popup) {
        if (popup) {
            popup.style.display = 'block';
        }
    }

    // Function to close the specified popup.
    function closePopup(popup) {
        if (popup) {
            popup.style.display = 'none';
        }
    }
});
