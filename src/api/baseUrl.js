export default function getBaseUrl() {
  /*
  const inDevelopment = window.location.hostname === "localhost";
  return inDevelopment ? "http://localhost:3001/" : "/";
  */
 console.log("getBaseUrl"); /* eslint-disable-line no-console*/
  return getQueryStringParameterByName("useMockApi") ? "http://localhost:3001/" : "https://limitless-savannah-50223.herokuapp.com/";
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
