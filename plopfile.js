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
      {
        type: 'input',
        name: 'github',
        message: 'Your github username:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/modules/demos/{{dashCase id}}/index.tsx',
        templateFile: 'plop-templates/page.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/apis/{{dashCase id}}/index.ts',
        templateFile: 'plop-templates/api.hbs',
      },
      {
        type: 'modify',
        path: 'src/modules/apis/data.ts',
        pattern: /\/\/replace item here/gi,
        templateFile: 'plop-templates/demo.hbs',
      },
    ],
  });
};
