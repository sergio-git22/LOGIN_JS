import { isUserLogged } from "./auth.js";
import { logout } from "./auth.js";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");

if (!token || !userId) {
  logout();
}

async function checkUser() {
  console.log(token);
  const isLogged = await isUserLogged(token, userId);

  if (!isLogged) {
    logout();
  }
}

checkUser();
