const webpush = require('web-push');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const vapidKeys = webpush.generateVAPIDKeys();

const writeFile = data => {
  fs.writeFile('.env.local', data, err => {
    if (err) throw err;
    console.log('.env.local generated successfully!');
  });
};

try {
  // VAPID keys should be generated only once.
  const data = `PUSH_API_PRIVATE_KEY=${vapidKeys.privateKey}\nNEXT_PUBLIC_PUSH_API_PUBLIC_KEY=${vapidKeys.publicKey}`;
  if (fs.existsSync('.env.test')) {
    rl.question(
      '.env.local already exists, overwrite? Type yes to overwrite or any key to abort\n',
      overwrite => {
        rl.close();
        if (overwrite === 'yes') return writeFile(data);
        return console.log('Generate Keys Aborted');
      }
    );
  } else {
    writeFile(data);
  }
} catch (_error) {
  rl.close();
  console.log('Error generating .env.local file');
  console.log(
    'Rename .env.local.example to .env.local and copy corresponding keys'
  );
  console.log(`PRIVATE KEY: ${vapidKeys.privateKey}`);
  console.log(`PUBLIC KEY: ${vapidKeys.publicKey}`);
}
