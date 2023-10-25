$(document).ready(function(){
  $(".content").slice(0, 1).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 1).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
})

// function copyToClipboard(textareaId) {
//   // Get the textarea element by ID
//   var textarea = document.getElementById(textareaId);
//   var textToCopy = textarea.value;

//   // Use the Clipboard API to copy the text to the clipboard
//   navigator.clipboard.writeText(textToCopy)
//       .then(function() {
//           alert("Text with formatting has been copied to the clipboard.");
//       })
//       .catch(function(err) {
//           console.error("Unable to copy text: ", err);
//           alert("Unable to copy text. Please use your browser's copy shortcut (e.g., Ctrl+C or Command+C).");
//       });
// }

function copyToClipboard(textareaId) {
  // Get the textarea element by ID
  var textarea = document.getElementById(textareaId);
  var textToCopy = textarea.value;

  // Use the Clipboard API to copy the text to the clipboard
  navigator.clipboard.writeText(textToCopy)
      .then(function() {
          //showNotice("Text with formatting has been copied to the clipboard.");
          launch_copy()
      })
      .catch(function(err) {
          console.error("Unable to copy text: ", err);
          //showNotice("Unable to copy text. Please use your browser's copy shortcut (e.g., Ctrl+C or Command+C).");
          launch_copy()
        });
}

// function showNotice(message) {
//   var notice = document.getElementById("notice");
//   notice.textContent = message;
//   notice.style.display = "block";
//   setTimeout(function() {
//       notice.style.display = "none";
//   }, 3000); // Display notice for 3 seconds
// }

function launch_copy() {
  var x = document.getElementById("toast")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}