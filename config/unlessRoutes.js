module.exports = {
  authenticateRoutes: {
    path: [
      { url: "/api/v1/test", method: "GET" },
      { url: "/api/v1/sign-up", method: "POST" },
      { url: "/api/v1/login", method: "POST" },
      { url: "/api/v1/admin/login", method: "POST" },
      { url: "/api/v1/verify-otp", method: "POST" },
      { url: "/api/v1/send-otp", method: "POST" },
      { url: "/api/v1/faqs", method: "GET" },
      // { url: "/^\/api\/v1\/test\/*/", method: "PATCH" },
    ],
  },
};
