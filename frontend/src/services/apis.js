const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

// Auth endpoints
export const authEndpoints = {
    LOGIN_API: BASE_URL + "/auth/login",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGOUT_API: BASE_URL + "/auth/logout",
    FORGOT_PASSWORD_API: BASE_URL + "/auth/forgot-password",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/change-password",
}

// Contact endpoints
export const contactEndpoints = {
    CONTACT_API: BASE_URL + "/reach/contact"
}