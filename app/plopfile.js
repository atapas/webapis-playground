module.exports = plop => {
  // demo generator
  plop.setGenerator("demo", {
    description: "add new demo",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Please provide a demo name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "pages/demos/{{name}}/index.js",
        templateFile: "plop-templates/page.hbs",
      },
      {
        type: "add",
        path: "web-apis/{{name}}/index.js",
        templateFile: "plop-templates/api.hbs",
      },
    ],
  });
}
