

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["636615832218239016"], 
  mongodbUri : "",
  spotifyClientId : "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret : "199a619d22dd4e55a4a2c1a7a3d70e63",
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
      name: "B0ss1",
      password: "hFF4BwIZfdV",
      host: "104.167.222.158",
      port: 11201,
      secure: false
      },
    { 
      name: "Public Lavalink v4 NonSSL",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v4.ajieblogs.eu.org",
      port: 80,
      secure: false
      },
    { 
      name: "AjieDev - Lavalink [Non SSL]",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v3.ajieblogs.eu.org",
      port: 80,
      secure: false
      },
    { 
      name: "INZEWORLD.COM (DE)",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
