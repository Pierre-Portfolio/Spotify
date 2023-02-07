fetch('./navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const elements = [
        { id: "info_about_image", displayId: "info_about" },
        { id: "info_music_image", displayId: "info_music" },
        { id: "info_nous_image", displayId: "info_nous" },
        { id: "info_down_image", displayId: "info_down" }
      ];
      
    elements.forEach(({ id, displayId }) => {
      document.getElementById(id).addEventListener("mouseover", function() {
        document.getElementById(displayId).style.display = "inline";
      });
      
      document.getElementById(id).addEventListener("mouseout", function() {
        document.getElementById(displayId).style.display = "none";
      });
    });

  });