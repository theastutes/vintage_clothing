export class AuthError extends Error {
  constructor(message = "Auth is required to acces this page") {
    super(message);
    this.name;
  }
}
