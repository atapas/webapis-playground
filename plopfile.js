module.exports = plop => {
  // demo generator
  plop.setGenerator('demo', {
    description: 'add new demo',
    prompts: [
      {
        type: 'input',
        name: 'id',
        message:
          'Give us a demo id(Any string without space. Example - _payment_request_):',
      },
      {
        type: 'input',
        name: 'emoji',
        message: 'Please provide a emoji thats represet the demo - 📺):',
      },
      {
        type: 'input',
        name: 'title',
        message: 'Please provide a demo title(Example - Payment Request API):',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Tell us more about the demo(Max 1024 characters):',
      },
      {
        type: 'input',
        name: 'path',
        message:
          'Please provide the demo folder name(Any string without space. Example - payment-request):',
      },
      {
        type: 'input',
        name: 'canIUseURL',
        message:
          'Give us the feature url from https://caniuse.com/(Example - https://caniuse.com/payment-request):',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Tell us your name:',
      },
      {
        type: 'input',
        name: 'twitter',
        message: 'Your Twitter handle (Without the @):',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your e-mail address:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/demos/{{path}}/index.js',
        templateFile: 'plop-templates/page.hbs',
      },
      {
        type: 'add',
        path: 'src/web-apis/{{path}}/index.js',
        templateFile: 'plop-templates/api.hbs',
      },
      {
        type: 'modify',
        path: 'src/utils/data/demos.js',
        pattern: /\/\/replace item here/gi,
        templateFile: 'plop-templates/demo.hbs',
      },
    ],
  });
};
