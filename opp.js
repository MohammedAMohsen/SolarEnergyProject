
  const text = document.getElementById("interactive-text");
  text.addEventListener("mouseover", () => {
    text.style.color = "green";
  });
  text.addEventListener("mouseout", () => {
    text.style.color = "black";
  });

