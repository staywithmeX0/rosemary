const line=require('@line/bot-sdk');
const client=new line.messagingApi.MessagingApiClient({
 channelAccessToken:process.env.LINE_CHANNEL_ACCESS_TOKEN
});
exports.reply=(replyToken,message)=>client.replyMessage({replyToken,messages:[message]});
