function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  // Set variables to change the style
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  // Add a paragraph
  const paragraph = document.createElement("p");
  paragraph.innerText = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  // Add a Spooky button
  const spookyButton = document.createElement("button");
  spookyButton.innerText = "Spooky";
  document.body.appendChild(spookyButton);
  spookyButton.addEventListener("click", spooky);

  // Add the Dark Mode button
  const DMButton = document.createElement("button");
  DMButton.innerText = "Dark mode";
  document.body.appendChild(DMButton);
  DMButton.addEventListener("click", darkMode);

  // Add the Scream Mode button
  const SMButton = document.createElement("button");
  SMButton.innerText = "Scream mode";
  document.body.appendChild(SMButton);
  SMButton.addEventListener("click", screamMode);
}

main();
