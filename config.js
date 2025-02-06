const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '263715907468'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'miltonbrian45@gmail.com'
global.github = 'https://github.com/HyHamza/BYTE-MD-LITE'
global.location = 'Earth'
global.gurl = 'https://instagram.com/talkdrove' // add your username
global.sudo = process.env.SUDO || "263715907468"
global.devs = '263715907468';
global.website = 'HyHamza.vercel.app' //wa.me/+92000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg'
module.exports = {
  sessionName: process.env.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0Z6WEJIN0t1R3RDb2QwMVhtT2lpVE5UdjdEUE01WDNhaDNVdWdYd2dHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicSt6QTlNV24wcWtxeUF1UmhGWE4zMnQvTzA5aW1ENXNLWEp1T3lmVE1oMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSnlDdFAwNGMzUDFFYWhoa0FWWTVzRTlpLzFKN3pFMjRUd3Y0SVJMZ25rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUaSs4d3U1M3NGc0xEY1FKbEZKNnNFbi9xTmVNVDZtaE4rL1IrbTIxM1hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KUy94VnhqYW5WQnAyelVJLzhkM0NMd3NvcnVldmJUaWxmQ21NejFuMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRmcU1kdWgzYjVNU0JiOG52V2oxaHMvTkVoTmZFVXI2ckxRYS9WOXdoenc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpVbFNiOFN0enNzWkk0OHpRaEhPTEtKTjdwdnFlcnJONEJyRnVabmRsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVJ0M0MzaWo4WUhmdGpLNDhoY3FsOG5CTUpSYSsvUkE4cGpybkR4V3B4cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJUWVBjQnlpUzFZWjYvVTZzMm9YejRGb2YvMXFBUm1RSlNKenJVcEQ3SkJaQUFuVkJYMDlsc1JSa2JTb0VodUZNYTkzajNLVnVJMFhBcFZDbGpYL2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6ImwrbWxVbUdxZVZzRTlXY25kRFNDL0tyYkswUjhOK25oMjR5K051QnUwakE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE5MjI0MzM1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFFQjYyRTI1OTVBOTdBQjYyQkQ0RTM5MDMzODg4RUI4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzg4MjM5OTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxOTIyNDMzNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRUE5ODkyNDk5RkQ2RjU5NjUzOUEzN0U2Mjk1Mjk2OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM4ODIzOTkxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0VG1lQWlWU1F4cVotdkNwNElabUx3IiwicGhvbmVJZCI6IjNmNzBhNjIyLTRiMjgtNGNkYS05NDg0LTU5Y2FiZGEyYzM0MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxTllBTGpKNSsxN0pQZ0daQ3Zjak9WbS96MnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVFeTB0VUdkSWxaRVZaWmx1eTBJYk9rTVNnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZFUE1GWEZCIiwibWUiOnsiaWQiOiIyNTQ3MTkyMjQzMzU6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiXCJNQUtBVEFfIE1BVElSRTE0XCIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDSDdiQUZFS2F5a2IwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpqcldvR3NhRUxiYXJMN1orMG96MlRJamc2OUpjZVJCYVl5RlpSVGZNSEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikd3TFFRWXJSUEhvOWpVTWphMldPNTd6YkJkRkJPL01sSENDSzJyT1paTDFLaGtFNTl6Z2owQ0cxelBFL29lcmd4ODlqYUd3V25yMjg2T2tzTURwOEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWSUJRV0Y1QlB0cVRQVDlYN3VqUU1lYVNjZ3hYelJLbVNtTHAxU0hCUmJ1QVF1TEIvLzVMemNjWWEwM2J6SXBJWkxvSi82TlJ4RzlyTWRGM1NIWkFqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxOTIyNDMzNToxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZNDYxcUJyR2hDMjJxeSsyZnRLTTlreUk0T3ZTWEhrUVdtTWhXVVUzekJ3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4ODIzOTg3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUh6ZCJ9 || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZFckJMSi9CRzFxamh1azhJMzZXT1lyd3lSTDg5aDBDMFhwUG9tVVZIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGYzejYwZWhhb2NLWExQODMyY2pmYWFOZlYrdHhNZmJiSC9vcm5EQ0t3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TXQ0Q3NydEZEUkI4V0lLNTRtM2ZrWHF5WEhhWVFOMG44WGdaUlZyOEg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtdHl1RFVWdVJQNWJyYkZQNVpRdkhoZ1RtMlNFZHZ1OUdzRVNqeHpRZ0U0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMc3lXaE1NNDZLN0ZWVEJKT1pVM2JQUHY0alhDSnpZc25lUzZpUlR5VjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ5eGcrVHRvamlwL0dPNjJnY3BPS0xLMis4Y1lnc3ZLNFk1aHA3VkZVQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUR1WTNxdTd4VHdNTjJ4UFhlRjBuRjVlZDY0MzRmeVU3QnY4OXB4L1IxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3hZUE16bTYwcjBBYWJBcEVmOUFzQ2xMMVR3T1hPNkNIK2VFeC9NVWpIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKMm9JMWs0VUVqaU1jYnVNMXBrRXVydzd6QjUrcGVJMk9NY3kyRXh5MGRCWG4yMjlIK0ovd0pwTG96WDh6S090RnVQYUFIZ1B4TkV4U2RiSlVCNUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJVdUhnSlMzdGsxdzBtSUd4QU1BMmwvZjMyWWdrcWZHWTVRWFdSV3ZXQ284PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUNkVRa0dwR1NaT0I4YjRzdmxUS21RIiwicGhvbmVJZCI6IjI5NmIzNDNkLTNhMWMtNDFhNy1hYTUyLWIyMTYxOGJjODFkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMUJVUDRYSngxV3FhdEQ1YVhqM1ZYdDBUNUk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImoxV1dldUxIcG5HRGR6S0ZialpiakF1Zm02az0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01ucCtQQUNFSjZvcmJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVISFN3Mm1wTVZjU1c0Tk1OUzNkK3FjdVl3eXY0bUVxanNGSVhhNkJTejQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkYvTCt4a08vNmJqb1lhWjZ0OHQ3VG9ra2JML2JBWlZmYmR1WW5pUVFmVENuQVNncWdyWENkR0tVbE1neS9NQkR2MTFPTEtiS2wzUzU4WlNLSFJKaERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0dEc4V1NyZkczeS9qYmJScUZFblk2K2h2SW03THNvRENsazhYb3gwUjZLaEU3ZnJsR21wV3ZVNTdOMmJZV1ZDaW1xeU0xTDVrWWNlRmROMzVyMmpDdz09In0sIm1lIjp7ImlkIjoiMjYzNzEyMTk2MTUyOjk3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMjE5NjE1Mjo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiaHgwc05wcVRGWEVsdURURFV0M2ZxbkxtTU1yK0poS283QlNGMnVnVXMrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTA0MjUwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUptNSJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BYTE-MD',
  packname:  process.env.PACK_NAME || 'Miltom Technologies',
  
  botname:   process.env.BOT_NAME === undefined ? "MILTON-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'TalkDrove' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'all' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*MILTON technologies* ",   
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'MILTON-MD-LITE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
