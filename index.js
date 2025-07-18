let currentlyFlipped = null;
let flipTimeout = null;

function flipThis(clickedDiv) {
  // If another card is flipped, unflip it
  if (currentlyFlipped && currentlyFlipped !== clickedDiv) {
    currentlyFlipped.classList.remove("flipped");
    clearTimeout(flipTimeout);
  }

  // If the clicked card is already flipped, do nothing (prevent double flip)
  if (clickedDiv === currentlyFlipped) return;

  // Flip the clicked card
  clickedDiv.classList.add("flipped");
  currentlyFlipped = clickedDiv;

  // Auto-unflip after 2 seconds
  flipTimeout = setTimeout(() => {
    clickedDiv.classList.remove("flipped");
    currentlyFlipped = null;
  }, 3000);
}

// Unflip on clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".flip-container") && currentlyFlipped) {
    currentlyFlipped.classList.remove("flipped");
    clearTimeout(flipTimeout);
    currentlyFlipped = null;
  }
});
