const closeJoinX = document.getElementById("close-join-x");
const joinResources = document.getElementById("join-resources");

closeJoinX.addEventListener("click", closeJoinResources);
function closeJoinResources() {
    joinResources.style.opacity = 0;
}
