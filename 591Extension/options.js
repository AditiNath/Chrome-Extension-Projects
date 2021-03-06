// // Saves options to chrome.storage
// function save_options() {
//   console.log("Save Button pressed");
//   var color = document.getElementById('color').value;
//   var likesColor = document.getElementById('like').checked;
//   chrome.storage.sync.set({ //add "storage" in the permission
//     favoriteColor: color,
//     likesColor: likesColor
//   }, function() {
//     // Update status to let user know options were saved.
//     var status = document.getElementById('status');
//     status.textContent = 'Options saved.';
//     setTimeout(function() {
//       status.textContent = '';
//     }, 750);
//   });
// }
//
// // Restores select box and checkbox state using the preferences
// // stored in chrome.storage.
// function restore_options() {
//   // Use default value color = 'red' and likesColor = true.
//   chrome.storage.sync.get({
//     favoriteColor: 'red',
//     likesColor: true
//   }, function(items) {
//     document.getElementById('color').value = items.favoriteColor;
//     document.getElementById('like').checked = items.likesColor;
//   });
// }

function post_to_server(){
  $.ajax({
    type: 'POST',
    contentType: 'application/json',
    url: 'http://127.0.0.1:8000/products/',
    data: formToJSON(),
    success: function (data, textStatus, xhr) {
              console.log(data);
      },
      error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
      }

  });

}

function formToJSON() {
  return JSON.stringify({"name":"Ishrat1","description":"Ishrat Ahmed","price":"10.00"});
}

//bind events to dom elements
//https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
//document.addEventListener('DOMContentLoaded', restore_options);
//document.querySelector('#save').addEventListener('click', save_options);
document.querySelector('#connect').addEventListener('click', post_to_server);
