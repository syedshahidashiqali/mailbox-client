export const API_BASED_URL = "http://localhost:8080/api/v1";

export const getApiURL = (endpoint) => API_BASED_URL + endpoint;

// auth endpoints
export const LOGIN = getApiURL("/auth/login")
export const SIGNUP = getApiURL("/auth/register")

// Mails endpoints
export const SENDMAILURL = getApiURL("/mails/send-mail")
export const INBOX = getApiURL("/mails/inbox")
export const SENT = getApiURL("/mails/sent")

// User endpoints
export const GETUSER = getApiURL("/users")
