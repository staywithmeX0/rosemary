const { handleEvent } = require('../services/router');

module.exports = async (req,res)=>{
 if(req.method!=='POST') return res.status(200).send('OK');
 const events=req.body.events||[];
 await Promise.all(events.map(handleEvent));
 res.status(200).send('OK');
};
