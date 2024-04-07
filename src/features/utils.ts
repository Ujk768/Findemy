export function setCookie(cookieName: string, cookieValue) {
  // Get current date and time
  var currentDate = new Date();

  // Calculate the expiration time for the cookie (2 hours from now)
  var expirationDate = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours in milliseconds

  // Convert expiration date to UTC format
  var expires = expirationDate.toUTCString();

  // Set the cookie with the provided name, value, and expiration date
  document.cookie =
    cookieName + "=" + cookieValue + "; expires=" + expires + "; path=/";
}

export function getCookie(cookieName: string) {
  return document.cookie
    .split(";")
    .find((row) => row.trim().startsWith(cookieName + "="))
    ?.split("=")[1];
}
