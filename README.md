# sendgrid-api-nodejs
This tool can be used to quickly and easily send emails using SendGrid API v3 using NodeJs.

## How to use
1. Insert the file name in the `base64.js` that you want to send as an attachment. Run the script. A new file named attachment.txt will be created.
2. In `mail.js`, put the filename of the attachment. Content type field is optional.
3. Step 1-3 can be skipped if no attachment is to be sent.
4. Insert the recipients' email ids in `emails.txt`.
5. Run `nodejs mail.js` to send mails.
