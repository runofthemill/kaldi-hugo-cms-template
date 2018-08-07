// JS Goes here - ES6 supported
(function(h, i, v, e, s, d, k) {h.HiveSDKObject = s;h[s] = h[s] || function() {(h[s].q = h[s].q || []).push(arguments);}, d = i.createElement(v), k = i.getElementsByTagName(v)[0];d.async = 1;d.id = s;d.src = e + "?r=" + parseInt(new Date() / 60000);k.parentNode.insertBefore(d, k);})(window, document, "script", "https://cdn-prod.hive.co/static/js/sdk-loader.js", "HIVE_SDK");

HIVE_SDK("init", 113383, function(data) {
});

var submit = document.getElementById("submit");
var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  var email = submit.value;
  var regex = RegExp("^([\\w-+]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$", "i");

  if (regex.test(email)) {
    HIVE_SDK(
            "emailSignup", {
              email: email,
              firstName: "",
              lastName: "",
              location: ""
            },
            function(data) {
              console.log("Success!\n");
              console.table(data);
            },
            function(data) {
              console.log("Something went wrong :(\n");
              console.table(data);
            }
          );
  } else {
    alert("Please enter a valid email address.");
  }
});
