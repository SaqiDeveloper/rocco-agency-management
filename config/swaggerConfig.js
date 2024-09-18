const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Turbo Credit API",
    description: "",
    version: "1.0.0",
    contact: {
      email: "abc@example.com",
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

module.exports = {
  swaggerDefinition,
  basePath: "BASE_PATH",
  apis: ["src/routes/*.js"],
};
