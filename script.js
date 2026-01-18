function loadDept(faculty) {
  if (faculty === "") {
    document.getElementById("output").innerHTML = "";
    return;
  }

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "info.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var html = "<ul>";

      if (data.faculty && data.faculty[faculty]) {
        data.faculty[faculty].forEach(function (dept) {
          html += "<li>" + dept + "</li>";
        });
      } else {
        html += "<li>No department found</li>";
      }

      html += "</ul>";
      document.getElementById("output").innerHTML =
        "Department Name:" + html;
    }
  };
  xhr.send();
}
