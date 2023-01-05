import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }

  isOwner(userObject) {
    if (this.loggedIn()) {
      let tokenUserId = this.getProfile().data._id;
      let isOwner = userObject._id === tokenUserId;
      return { tokenUserId: tokenUserId, isOwner: !isOwner, logged: true };
    }
    return { tokenUserId: null, isOwner: false };
  }
}

export default new AuthService();
