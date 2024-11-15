const os = require("os");
const fs = require("fs");
const Config = require("../config");
let {
  fancytext,
  tlang,
  tiny,
  runtime,
  formatp,
  prefix,
  smd,
  commands,
} = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const astro_patch = require("../lib/plugins");
const { exec } = require("child_process");
const translatte = require("translatte");

smd(
  {
    pattern: "menus",
    type: "MENU list",
    info: "user",
    dontAddCommandList: true,
  },
  async (message) => {
    try {
      let menuMessage = ` 
👉ʀᴜɴᴛɪᴍᴇ - ${runtime(process.uptime())} 
👉ᴅᴀᴛᴇ - ${message.date} 
👉ɴᴏᴡ ᴛɪᴍᴇ - ${message.time} 
👉Fᴏᴜɴᴅᴇʀ- *Phantom*
👉Oᴡɴᴇʀ - ${Config.ownername} 
👉Nᴜᴍ - ${owner.split(",")[0]} 
👉Mᴇᴍᴏ - ${formatp(os.totalmem() - os.freemem())} 
      \n *KATAKURI_MD*\n\n ${readmore} 
╭──👉 *ALL MENU* 👈 
│☾︎✨☽︎ *_LIST_*
│☾︎✨☽︎ *_CATEGORY_*
│☾︎✨☽︎ *_ALIVE_*
│☾︎✨☽︎ *_ALIVE_*
│☾︎✨☽︎ *_UPTIME_*
│☾︎✨☽︎ *_WEATHER_*
│☾︎✨☽︎ *_LINK_*
│☾︎✨☽︎ *_CPU_*
│☾︎✨☽︎ *_REPO_*
│
│`𝙋𝙃𝘼𝙉𝙏𝙊𝙈`
╰─────────────⦁`.trim();
      return await message.bot.sendUi(message.from, { caption: menuMessage });
    } catch (error) {
      await message.error(error + "\nCommand:menus", error);
    }
  }
);
// Command: Set Custom Command
astro_patch.cmd(
  {
    pattern: "setcmd",
    desc: "To set a custom command",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (message, query, { Void }) => {
    try {
      if (!query) {
        return await message.send(
          "*_Please provide cmd name by replying a Sticker_*"
        );
      }

      let queryParts = query.split(",");
      let newCommand, originalCommand;
      let isSticker = false;

      if (message.quoted) {
        let quotedType = message.quoted.mtype;
        if (quotedType === "stickerMessage" && query) {
          isSticker = true;
          newCommand = query.split(" ")[0];
          originalCommand = "sticker-" + message.quoted.msg.fileSha256;
        }
      }

      if (!isSticker && queryParts.length > 1) {
        originalCommand = queryParts[0].trim().toLowerCase();
        newCommand = queryParts[1].trim().toLowerCase();
      } else if (!isSticker) {
        return await message.send(
          "*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*"
        );
      }

      if (newCommand.length < 1) {
        return await message.reply(
          "*_Uhh Please, Provide New_Cmd Name First_*"
        );
      }

      if (global.setCmdAlias[newCommand]) {
        return await message.send(
          `*_"${isSticker ? "Given Sticker" : newCommand}" Already set for "${
            global.setCmdAlias[newCommand]
          }" Cmd, Please try another ${isSticker ? "Sticker" : "Name"}_*`
        );
      }

      const foundCommand =
        astro_patch.commands.find((cmd) => cmd.pattern === originalCommand) ||
        astro_patch.commands.find(
          (cmd) => cmd.alias && cmd.alias.includes(originalCommand)
        );

      if (foundCommand) {
        global.setCmdAlias[newCommand] = foundCommand.pattern;
        return await message.send(
          `*_Cmd "${global.setCmdAlias[newCommand]}" Successfully set to "${
            isSticker ? "Sticker" : newCommand
          }"._*\n*_These all names are reset if the bot restarts_*`
        );
      } else {
        return await message.send(
          `*_Provided Cmd (${originalCommand}) not found in bot commands. Please provide a valid command name_*`
        );
      }
    } catch (error) {
      await message.error(error + "\nCommand:setcmd", error);
    }
  }
);

// Command: Delete Custom Command
astro_patch.cmd(
  {
    pattern: "delcmd",
    desc: "To delete a custom command",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (message, query, { Void }) => {
    try {
      let commandName = query ? query.split(" ")[0].trim().toLowerCase() : "";
      let isSticker = false;

      if (message.quoted) {
        if (message.quoted.mtype === "stickerMessage") {
          isSticker = true;
          commandName = "sticker-" + message.quoted.msg.fileSha256;
        } else if (!query) {
          return await message.send(
            "*_Please reply to a Sticker that was set for a command_*"
          );
        }
      } else if (!query) {
        return await message.send(
          "*_Uhh Dear, provide the name that was set for a command_*\n*Eg: _.delcmd Cmd_Name_*"
        );
      }

      if (global.setCmdAlias[commandName]) {
        await message.send(
          `*_"${
            isSticker ? "Given Sticker" : commandName
          }" deleted successfully for "${
            global.setCmdAlias[commandName]
          }" command_*`
        );
        delete global.setCmdAlias[commandName];
        return;
      } else {
        return await message.send(
          `*_"${
            isSticker ? "Given Sticker" : commandName
          }" is not set for any command._*\n *_Please provide a valid ${
            isSticker ? "Sticker" : "command name"
          } to delete_*`
        );
      }
    } catch (error) {
      await message.error(error + "\nCommand:delcmd", error);
    }
  }
);
// Command: Uptime
astro_patch.cmd(
  {
    pattern: "uptime",
    alias: ["runtime"],
    desc: "Tells runtime/uptime of bot.",
    category: "misc",
    filename: __filename,
  },
  async (message) => {
    try {
      message.reply(
        `*_Uptime of ${tlang().title}: ${runtime(process.uptime())}_*`
      );
    } catch (error) {
      await message.error(error + "\n\ncommand : uptime", error, false);
    }
  }
);

// Command: List Menu
astro_patch.cmd(
  {
    pattern: "list",
    desc: "list menu",
    category: "user",
    react: "🥀",
  },
  async (message) => {
    try {
      const { commands } = require("../lib");
      let listMessage = `\n  
╭━━👉 * ${Config.botname} * 👈    
┃ ☾✨︎☽︎ *_PREFIX_*: ${Config.HANDLERS}
┃ ☾✨☽︎ *_OWNER_*: ${Config.ownername}
┃ ☾︎✨☽︎ *_COMMANDS_*: ${commands.length}
┃ ☾✨☽︎ *_UPTIME_*: ${runtime(process.uptime())}
┃ ☾✨︎☽︎ *_MEM_*: ${formatp(os.totalmem() - os.freemem())}
╰━━━━━━━━━━━━━━⊷\n`;

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern === undefined) {
          continue;
        }
        listMessage += `*${i + 1} ${fancytext(commands[i].pattern, 1)}*\n`;
        listMessage += `  ${fancytext(commands[i].desc, 1)}\n`;
      }

      return await message.sendUi(message.chat, {
        caption: listMessage + Config.caption,
      });
    } catch (error) {
      await message.error(error + "\nCommand:list", error);
    }
  }
);

// Command: Owner
astro_patch.smd(
  {
    pattern: "owner",
    desc: "To display owner information",
    category: "owner",
    filename: __filename,
  },
  async (message) => {
    try {
      const vcard =
        "BEGIN:VCARD\nVERSION:3.0\nFN:" +
        Config.ownername +
        "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" +
        global.owner?.split(",")[0] +
        ":+" +
        global.owner?.split(",")[0] +
        "\nEND:VCARD";

      let contactMessage = {
        contacts: {
          displayName: Config.ownername,
          contacts: [
            {
              vcard,
            },
          ],
        },
        contextInfo: {
          externalAdReply: {
            title: Config.ownername,
            body: "Touch here.",
            renderLargerThumbnail: true,
            thumbnailUrl: "",
            thumbnail: log0,
            mediaType: 1,
            mediaUrl: "",
            sourceUrl:
              "https://wa.me/+" +
              global.owner?.split(",")[0] +
              "?text=Hii+" +
              Config.ownername,
          },
        },
      };

      return await message.sendMessage(message.jid, contactMessage, {
        quoted: message,
      });
    } catch (error) {
      await message.error(error + "\nCommand:owner", error);
    }
  }
);

// Command: Translate
astro_patch.cmd(
  {
    pattern: "trt",
    alias: ["translate"],
    category: "user",
    filename: __filename,
    use: "< text >",
    desc: "Translates the given text to the desired language.",
  },
  async (message, query) => {
    try {
      let targetLanguage = query ? query.split(" ")[0].toLowerCase() : "en";
      if (!message.reply_text) {
        var textToTranslate =
          query.replace(targetLanguage, "")?.trim() || false;
      } else {
        var textToTranslate = message.reply_text;
      }

      if (!textToTranslate) {
        return await message.reply(
          `*Please provide the text to translate. Example: ${prefix}trt en Who are you*`
        );
      }

      var translation = await translatte(textToTranslate, {
        from: "auto",
        to: targetLanguage,
      });

      if ("text" in translation) {
        return await message.reply(translation.text);
      }
    } catch (error) {
      await message.error(error + "\n\nCommand: trt", error);
    }
  }
);
const readDirectory = (directoryPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject("Error reading directory");
      } else {
        resolve(files);
      }
    });
  });
};
astro_patch.cmd(
  {
    pattern: "file",
    desc: "to get the exact name and location of the command in the repository, so the user can edit it.",
    category: "user",
    fromMe: true,
    filename: __filename,
  },
  async (message, query) => {
    try {
      if (!query) {
        return message.reply("*Please provide a command or directory*");
      }

      if (query.startsWith(".")) {
        let result = "*------------- FILE MANAGER -2------------*\n";
        try {
          const files = await readDirectory(query);
          files.forEach((file) => {
            result += file + "\n";
          });
          await message.reply(result.toString());
        } catch (error) {
          message.reply(error);
        }
        return;
      }

      const { commands } = require("../lib");
      let output = [];
      let command = query.split(" ")[0].toLowerCase().trim();
      let commandInfo =
        commands.find((cmd) => cmd.pattern === command) ||
        commands.find((cmd) => cmd.alias && cmd.alias.includes(command));

      if (!commandInfo) {
        return await message.reply("*❌No such command.*");
      }

      output.push("*🍁Command:* " + commandInfo.pattern);
      if (commandInfo.category) {
        output.push("*🧩Type:* " + commandInfo.category);
      }
      if (commandInfo.alias && commandInfo.alias[0]) {
        output.push("*🧩Alias:* " + commandInfo.alias.join(", "));
      }
      if (commandInfo.desc) {
        output.push("*✨Description:* " + commandInfo.desc);
      }
      if (commandInfo.use) {
        output.push(
          "*〽️Usage:*\n ```" +
            prefix +
            commandInfo.pattern +
            " " +
            commandInfo.use +
            "```"
        );
      }
      if (commandInfo.usage) {
        output.push("*〽️Usage:*\n ```" + commandInfo.usage + "```");
      }
      if (commandInfo.filename) {
        output.push("*✨FileName:* " + commandInfo.filename);
      }
      try {
        if (
          query.includes("function") &&
          commandInfo.function &&
          message.isAsta &&
          commandInfo.pattern !== "file"
        ) {
          output.push("*🧩Function:* " + commandInfo.function.toString());
        }
      } catch {}
      await message.reply(output.join("\n"));
    } catch (error) {
      await message.error(error + "\nCommand:file", error);
    }
  }
);

astro_patch.cmd(
  {
    pattern: "eval",
    alias: ["$"],
    category: "tools",
    filename: __filename,
    fromMe: true,
    desc: "Runs JavaScript code on the Node.js server.",
    use: "< run code >",
    dontAddCommandList: true,
  },
  async (message, query, { isCreator, cmdName, Void }) => {
    try {
      if (!query) {
        return message.reply("*Provide a query to run*");
      }
      let result = eval("const a = async()=>{\n" + query + "\n}\na()");
      if (typeof result === "object") {
        await message.reply(JSON.stringify(result));
      } else {
        await message.reply(result.toString());
      }
    } catch (error) {
      return await message.reply(error.toString());
    }
  }
);

astro_patch.smd(
  {
    pattern: "subowner",
    desc: "To display subowner information",
    category: "owner",
    filename: __filename,
  },
  async (message) => {
    try {
      // Define subowners list
      const subowners = [
        { name: "HAKI", waid: "2349112171078" }
      ];

      // Construct contact messages for each subowner
      let contactMessages = subowners.map(subowner => {
        const vcard =
          "BEGIN:VCARD\nVERSION:3.0\nFN:" +
          subowner.name + // Subowner's name
          "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" +
          subowner.waid + // Subowner's WhatsApp ID
          ":+" +
          subowner.waid +
          "\nEND:VCARD";

        return {
          contacts: {
            displayName: subowner.name,
            contacts: [
              {
                vcard,
              },
            ],
          },
          contextInfo: {
            externalAdReply: {
              title: subowner.name,
              body: "Touch here.",
              renderLargerThumbnail: true,
              thumbnailUrl: "",
              thumbnail: log0,
              mediaType: 1,
              mediaUrl: "",
              sourceUrl:
                "https://wa.me/+" +
                subowner.waid +
                "?text=Hello+" +
                subowner.name,
            },
          },
        };
      });

      // Send each contact message
      for (let contactMessage of contactMessages) {
        await message.sendMessage(message.jid, contactMessage, {
          quoted: message,
        });
      }
      
    } catch (error) {
      await message.error(error + "\nCommand:subowner", error);
    }
  }
);
