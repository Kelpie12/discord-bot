var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () =>{
    console.log("Bot is ready");
});

client.on("message", msg =>{
    if(msg.content === "Hello BOT"){
        msg.reply("WHUSUP");
    }
    if (msg.content === "181219"){
        msg.channel.send("I Love You Baby :heart:");
    }
    if(msg.content === "i love you bot"){
        msg.channel.send("I Love You Too Baby :heart:");
    }
    if(msg.content === "say i love you to yesiko"){
        // const rnd = Math.floor(Math.random()*10);
        const rnd = 2;
        if(rnd >= 5){
            msg.channel.send("i love you yesikoooooo :heart:");
        }else{
            msg.channel.send("I love you yesikooooooooooo");
        }
    }
    if(msg.content === "I love you yesikooooooooooo"){
        msg.channel.send(":heart:");
    }
    
    if(msg.content === "say i love you to arel"){
        msg.channel.send("i love you arellll :heart:");
    }
});

client.login(process.env.TOKEN);