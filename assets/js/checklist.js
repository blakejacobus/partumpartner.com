document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll("li.task-list-item input[type='checkbox']");
  if (!checkboxes.length) {
    return;
  }

  var storageKey = "partum-partner-checkboxes";
  var state = {};
  try {
    state = JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch (e) {
    state = {};
  }

  checkboxes.forEach(function (checkbox, index) {
    checkbox.removeAttribute("disabled");
    var key = window.location.pathname + "::" + index;
    checkbox.checked = state[key] === true;
    checkbox.addEventListener("change", function () {
      state[key] = checkbox.checked;
      localStorage.setItem(storageKey, JSON.stringify(state));
    });
  });

  var clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.textContent = "Clear checklist state";
  clearButton.className = "clear-checklist";
  clearButton.addEventListener("click", function () {
    checkboxes.forEach(function (checkbox, index) {
      var key = window.location.pathname + "::" + index;
      delete state[key];
      checkbox.checked = false;
    });
    localStorage.setItem(storageKey, JSON.stringify(state));
  });
  document.querySelector("main.content").appendChild(clearButton);
});
