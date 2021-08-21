# Discord Mass Unban
This code can be used to unban all banned users from your Discord Server.

# Installation
## Required Files
Before you can use the code above, you need to make sure that you have all files, which are mentioned below, installed.

 - [Node.js](https://nodejs.org/en/download/) (Version 16+)
 - npm (Included in Node.js)

## Prepare the code

 - Extract the .zip file and put all contents into a folder
 - Open a terminal and navigate into the folder
 - Run `npm install`

## Update the values

Open the file called `index.js` with an Editor

    const  USER_ID = "insert your discord userid in here";
    const  TOKEN = "insert your discord bot token in here";
You have to insert your Discord UserID and your Discord Bot Token into the 2 fields.
After you've done that, you're pretty much ready to go.

Not sure how to get your Discord ID? [Remote Tools - How to find a Discord ID](https://www.remote.tools/remote-work/how-to-find-discord-id)

Not sure how to create a bot or get the token? [WriteBots - How to get a Discord Bot Token](https://www.writebots.com/discord-bot-token/)

# Starting the Discord Bot

 - Use the terminal from before or open a new one
 - Run `node .` or `node index.js`
 - In Discord, run: `u!start` in the desired server

# Not working?
## Common Problems

 - Enable Privileged Gateway Intents
 ![](https://pileshare.com/u/JFggN)

 - Make sure that you have Node.js (Version 16+) installed
 - Make sure that you have all dependencies installed
 - Make sure that you are running `node .` or `node index.js` in the right directory

If you still encounter issues, feel free to message me on Discord.
[Joshyyy#4795](https://discords.com/bio/p/joshyyy)
