

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["636615832218239016", ""], 
  mongodbUri : "mongodb+srv://b0ss:MgfaYXNCOzl9p1WV@b0ss-music-v2.gll1e.mongodb.net/?retryWrites=true&w=majority&appName=B0ss-Music-v2",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#89ced3",
  activityName: "", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/uklnrp",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
  {
      name: "Catfein ID",
      password: "catfein",
      host: "lava.catfein.com",
      port: 4000,
      secure: false
    },
    { 
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
