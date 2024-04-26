const discord = require("discord.js");
const { ActivityType } = require('discord.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

//Thông tin, kết nối bot .
const MODEL = "gemini-pro";
const API_KEY = process.env.API_KEY || "khoa rieng tu ai";
const BOT_TOKEN = process.env.BOT_TOKEN || "Token bot";
const CHANNEL_ID = process.env.CHANNEL_ID || "id kenh chat";

//Google
const ai = new GoogleGenerativeAI(API_KEY);
const model = ai.getGenerativeModel({ model: MODEL });

//Discord
const client = new discord.Client({
  intents: Object.keys(discord.GatewayIntentBits),
});

//ready 
client.on("ready", () => {
  console.log(`Đã định dạng tài khoản. Đăng nhập thành công với định dạng '**${client.user?.tag}**'`);
  client.user?.setPresence({
    status: 'online',
    activities: [
      {
        name: 'AngelChatGPT | By Angel Team Studio',
        type: ActivityType.Playing,
      }
    ]
  })
});


//Bot discord login.
client.login(BOT_TOKEN);

client.on("messageCreate", async (message) => {
  try {
    if (message.author.bot) return;
    if (message.channel.id !== CHANNEL_ID) return;

    // Ignore messages that don't contain any meaningful content
    if (!message.content.trim()) {
      return;
    }

    await message.channel.sendTyping();
    
    const { response } = await model.generateContent(message.content);

    // Check if there is anything to say
    const generatedText = response.text().trim();
    if (!generatedText) {
      message.reply("Tôi không có gì để nói.");
      return;
    }

        // Check if the response was blocked due to safety
    if (response.text().includes("Phản hồi đã bị chặn do AN TOÀN")) {
       message.reply("Tôi xin lỗi nhưng tôi không thể đưa ra phản hồi đó để giữ cho nội dung được an toàn và sạch sẽ.");
       return;
        }

    // Check if the generated text is too long for Discord to handle
    if (generatedText.length > 2000) {
      message.reply("Tôi có quá nhiều điều muốn nói để Discord có thể gói gọn trong một tin nhắn.");
    } else {
      message.reply({
        content: generatedText,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    console.error(error.stack);
  }
  console.log(message.content);
});
