function toggleFacts() {
    const moreInfo = document.getElementById("more-info");
    const button = document.querySelector("button");
  
    if (moreInfo.classList.contains("hidden")) {
      moreInfo.classList.remove("hidden");
      button.textContent = "Hide Fun Facts";
    } else {
      moreInfo.classList.add("hidden");
      button.textContent = "😎 More Fun Facts";
    }
  }
  