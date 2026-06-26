const video = document.getElementById("wildlifeVideo");
const actionBtn = document.getElementById("videoActionBtn");
const statusMessage = document.getElementById("statusMessage");

function setStatus(message) {
  statusMessage.textContent = message;
}

function hideVideo() {
  video.pause();
  video.setAttribute("hidden", "hidden");
  actionBtn.textContent = "Show/Play Video";
  actionBtn.setAttribute("aria-pressed", "true");
  setStatus("Video hidden.");
}

function showAndPlayVideo() {
  video.removeAttribute("hidden");
  const playPromise = video.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      setStatus("Video shown. Press play to start manually if needed.");
    });
  }

  actionBtn.textContent = "Hide Video";
  actionBtn.setAttribute("aria-pressed", "false");
  setStatus("Video is visible and playing.");
}

actionBtn.addEventListener("click", () => {
  if (video.hasAttribute("hidden")) {
    showAndPlayVideo();
    return;
  }

  if (video.paused) {
    showAndPlayVideo();
    return;
  }

  hideVideo();
});
