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
install PostgreSQL
make a new table Emotive, add 3 columns to it 
1. id datatype - integer, primary key
2. text datatype - text
3. message datatype - text
add your connection string to your code

//STEP THREE
unzip ngrok and run it as admin, and add the url to the twilio account to recieve messages

//Start
start using these commands in command promt
node app.js //for making new words and saving in PostGreSQL
node sms.js //to send and recieve messages

use vhost in code to run just one script
can be used to send bulk messages too

Thanks
Harmeet Singh
