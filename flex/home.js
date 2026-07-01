module.exports=()=>({
 type:'flex',
 altText:'Rosemalicious',
 contents:{
  type:'bubble',
  body:{
   type:'box',
   layout:'vertical',
   contents:[
    {type:'text',text:'ROSEMALICIOUS',weight:'bold',size:'xl'},
    {type:'text',text:'Luxury House Pakchong',size:'sm',color:'#888888'}
   ]
  },
  footer:{
   type:'box',
   layout:'vertical',
   contents:[
    {type:'button',style:'primary',action:{type:'postback',label:'🏠 House',data:'HOUSE'}}
   ]
  }
 }
});
