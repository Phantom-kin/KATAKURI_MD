//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "itscraftee360@gmail.com";
global.location = "Pretoria, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Pretoria";
global.github = process.env.GITHUB || "https://github.com/Phantom-kin/KATAKURI_MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/17q2vs.jpg";
global.devs = "27748255848";
global.sudo = process.env.SUDO || "27748255848";
global.owner = process.env.OWNER_NUMBER || "27748255848";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/17q2vs.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://king-phantom.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09WcFNMd1U2NFdxdC9UeVZ2WXBYMS9qZnZnTklaSnFwWUpLZ3U2SDhrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm5ONEl6b2l2TkVxM25BOGRFSWptNVkrWExxMDdTY1lwZFJnaU1OV0VFdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQXZtSThWNFNCZ2tiZVpYclVHUjRDTmVkMVNNNXo0aUtybjhwekFyNm1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWcW1lSEtHVWY4a2FHd2ZoNHpRN1VQNzNqWGt6N2lsTzV6Y29EZkhBNEdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1Hb2F2cnJvQmh2dFBKbys5QnRmb0dLeEprN2JmZ08wQjY3WUpoZ1k5Vlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFqa2s1bHI0WDdOLzdCbHRxZ2xvY3Q2Q3cyTEhwWWtYK056cmE1emFWWGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE40bE84WGZnTFhqVldlVXhBb0IzOEFCY1lpdkE4aHpacWVGVDZYcTAxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnVPZGIvT1YrNWdSQld0NFNrSlJhSm1tcElhTDFScThFamN6NzMwRzNRRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhsaDh0bW9hUzRQR0dZSEVvUGRZZU5YZEsrZE0rVjFncURWZXVIbDIwM2wzVFlnOWRnQnMwbE5lSXRndy9sZ01RcFkrVzViYXM0bUZlNUpQUXAyVGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiI3M1l3SnVZYy96N3RiTnNjQ1hhNXR5QVEza0U0K05sT0tpSy9DT3BtZE9FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0dUl5b0x2MFNDNklXZXZPWi00d0JRIiwicGhvbmVJZCI6IjQzZmZkOTdmLTNhNjktNDdlOC05YTA3LTU0YTg5ODdmOTI3NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLbDJtUzcyWVM2dUZYMDZBMmtIS0hrTWxoZVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNm4yRGIrVXZsYU9WVXR1enZ1bTUyNXliQmxvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdaTlROWUJLIiwibWUiOnsiaWQiOiIyNzc0ODI1NTg0ODo5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYi85dk1HRUtxVzNya0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVenk5S1FZNGJDOTI3WHZud3VIaXgvR3MyT2V2MjgvdmlIaThTelhNUXhFPSIsImFjY291bnRTaWduYXR1cmUiOiJtVlRob3RGNnpCeDA2c3hheHlqeGpaemxVNnArblJ5RVl2RTRMVnlieTJTUEJub2VOTkF4alluZGpMYUpmQWdhRmNWVGVNQlhqdHBkUVI3cWVjVkNCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSHFkVTFycmp1ZGQ3S3Z2SHhYUGZlSU11Y1RiN1NWMUtaYytTdGNJTVBGYXJCSGlSZUc0VGhmblNZRUlqZHRJbWhNcUtDVlZpbmQ5bTZnd0d1VTlKaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc0ODI1NTg0ODo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZNOHZTa0dPR3d2ZHUxNzU4TGg0c2Z4ck5qbnI5dlA3NGg0dkVzMXpFTVIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE2OTMzNjh9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KATAKURI_MD™`",
  author: process.env.PACK_AUTHER || "KATAKURI_MD",
  packname: process.env.PACK_NAME || "K A T A K U R I",
  botname: process.env.BOT_NAME || "KATAKURI_MD",
  ownername: process.env.OWNER_NAME || "KATAKURI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "K A T A K U R I").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
