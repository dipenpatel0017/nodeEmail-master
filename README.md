### Send Emails with Nodemailer using Ethereal

# Nodemailer with Ethereal Email

This project demonstrates how to send emails using Nodemailer and Ethereal, a service for generating test email accounts.

## Prerequisites

- Node.js installed on your machine
- An internet connection to download dependencies and communicate with the Ethereal service
- download dependencies injected the Vscode on the terminal bar

## Installation

1. Clone the repository:
   ```bash
    git clone https://github.com/dipenpatel0017/nodeEmail-master.git
   cd nodeEmail-master
Install the dependencies:
```bash
npm install
```
Setup
Create a file named .env in the root directory of the project.

2. Add the following environment variables to the .env file:
```bash
ETHEREAL_USER=your_ethereal_user
ETHEREAL_PASS=your_ethereal_password
```

You can generate Ethereal credentials using the following script:
```bash
const nodemailer = require('nodemailer');

async function createEtherealAccount() {
    let testAccount = await nodemailer.createTestAccount();
    console.log('Ethereal Account:');
    console.log(`User: ${testAccount.user}`);
    console.log(`Pass: ${testAccount.pass}`);
}

createEtherealAccount().catch(console.error);
```

Run the script:

```bash

node createEtherealAccount.js
```
3. Copy the generated credentials into the `.env` file.

Usage
1. Update the sendEmail.js file with the recipient email and message details.

2. Run the script to send an email:

```bash
node sendEmail.js
```
3. Check the console output for the Ethereal message URL to view the sent email.

### Example sendEmail.js
Here is an example of the sendEmail.js script:
```bash
require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.ETHEREAL_USER,
            pass: process.env.ETHEREAL_PASS
        }
    });

    let info = await transporter.sendMail({
        from: '"Sender Name" <sender@example.com>',
        to: 'recipient@example.com',
        subject: 'Hello',
        text: 'Hello world?',
        html: '<b>Hello world?</b>'
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

sendEmail().catch(console.error);
```

### License
This project is licensed under the MIT License.


## Conclusion
```bash 
This README file provides clear instructions on setting up and running a Node.js project that sends emails using Nodemailer and Ethereal. It includes steps for installing dependencies, configuring environment variables, and running the email-sending script.
```
### Output

![Screenshot 2024-05-31 181227](https://github.com/dipenpatel0017/nodeEmail-master/assets/154975783/97ade65f-58ec-4e72-9756-a59d02606122)

```bash
localhost:5000/mail
```
![Screenshot 2024-05-31 181116](https://github.com/dipenpatel0017/nodeEmail-master/assets/154975783/ac7043c3-ec9f-4786-abe6-1353ef0c3cc1)

### Ethereal Email view on the website above..
- creat a new file this site
```bash
https://ethereal.email/
```
![Screenshot 2024-05-31 181056](https://github.com/dipenpatel0017/nodeEmail-master/assets/154975783/73816d90-fb60-42ca-9c2d-96ba148843b8)






