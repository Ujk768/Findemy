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

const user = localStorage.getItem("user");

type User = {
  name: string;
  email: string;
  id: string;
};
const userObj: User = user ? JSON.parse(user) : "";

export const generateIntials = () => {
  if (user) {
    let name = userObj?.name;
    const myArray = name.split(" ");
    const firstLetter = myArray[0]?.charAt(0);
    const lastLetter = myArray[1]?.charAt(0);
    let initial = "";
    if (firstLetter) {
      initial = initial + firstLetter;
    }
    if (lastLetter) {
      initial = initial + " " + lastLetter;
    }
    return initial;
  }
};

export function deleteCookie(cookieName: string) {
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}