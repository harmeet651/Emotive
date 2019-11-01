# Emotive
YouTube Demo - https://www.youtube.com/watch?v=JHoeJPVkkzs

Output: Data can be saved to DATABASE and text message received and replied back opt message also received
https://github.com/harmeet651/Emotive/blob/master/TemplateNodeJs-master/Screenshot_20191101-075550.jpg
https://github.com/harmeet651/Emotive/blob/master/TemplateNodeJs-master/Screenshot_20191101-073824.jpg

Project Setup // please email me incase of any issues
//STEP ONE
install nodejs
mkdir myapp
cd myapp
npm init
npm install express --save

other packages
npm install body-parser
npm install --save path
npm install -g require
npm install request
npm install twilio

//STEP TWO
unzip ngrok and run it as admin, and add the url to the twilio account to recieve messages

start using these commands in command promt
node app.js //for making new words and saving in POstGres
node sms.js //to send and recieve messages
