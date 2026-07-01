const {reply}=require('./reply');
const home=require('../flex/home');

exports.handleEvent=async(event)=>{
 if(event.type!=='postback') return;
 if(event.postback.data==='HOME'){
   return reply(event.replyToken,home());
 }
};
