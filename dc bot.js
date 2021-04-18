const Discord = require('discord.js');

const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION',]});

//let wichtelnichtgesagt=[ "Lukas", "Joshua", "Noah", "Chrys", "Justus", "Emil", "Finn", "Felix", "Tom", "Leo", "Olli", "Moritz", "Nils", "Tim"]//[ "Lukas", "Joshua", "Noah", "Chrys", "Justus", "Emil", "Finn", "Felix", "Tom", "Leo", "Olli", "Moritz", "Nils", "Tim"
// let keinewichtel=[ "306442792694185988","369158308764057610",  "502935953254645770", "701145528003461163", "704259153853415444", "767113432952209479", "690196728586043450", "409751253808054272", "664814168326799361", "618843257639665709", "222782282832936960", "515826712081203201", "761297613294665798", "260430109276766210"]

const AmongUsEmbed = new Discord.MessageEmbed()
    .setColor('#54000e')
    .setTitle('Among Us Commands')
    //.setURL('')
    .setDescription('List of all the commands, related to Among Us used by Yupsi-Bot')
    .setThumbnail('https://cdn.discordapp.com/attachments/768406230116073495/768609238074916934/Y-darkrot.jpg')
    .addFields(
        {name: '\u200B', value: '\u200B'},
        {name: 'required role: crewmate', value: '\u200B'},
        {name: '+skeldmap', value: '"+skeldmap" gives you a picture of the map called "The Skeld"'},
        {name: '+mirahqmap', value: '"+mirahqmap" gives you a picture of the map called "Mira HQ"'},
        {name: '+polusmap', value: '"+polusmap" gives you a picture of the map called "Polus"'},
      )  

client.on('ready',async ()=>{
  console.log('Ready')
  client.user.setActivity(`wishing you a nice Christmas`, {type: ""});
     
});
client.on('message', async message=>{ //commands
  if(message.content==='+hinzufügen'){
      let amongusemoji =message.guild.emojis.cache.find(emoji => emoji.name === 'AmongUs' )
      let cocemoji     =message.guild.emojis.cache.find(emoji => emoji.name === 'coc'     )
      let skribblemoji =message.guild.emojis.cache.find(emoji => emoji.name === 'skribbl' )
      let valorantemoji=message.guild.emojis.cache.find(emoji => emoji.name === 'valorant')
      let owemoji      =message.guild.emojis.cache.find(emoji => emoji.name === 'ow'      )
      let mcemoji      =message.guild.emojis.cache.find(emoji => emoji.name === 'mc'      )
      let csemoji      =message.guild.emojis.cache.find(emoji => emoji.name === 'csgo'    )
      let gtaemoji     =message.guild.emojis.cache.find(emoji => emoji.name === 'GTAV'    )
      let osuemoji     =message.guild.emojis.cache.find(emoji => emoji.name === 'osu'     )

     
      let roles = new Discord.MessageEmbed()
        .setColor('#54000e')
        .setTitle('Reaction Roles')
        .setThumbnail('https://cdn.discordapp.com/attachments/768406230116073495/768609238074916934/Y-darkrot.jpg')
        .setDescription('React to give yourself a role:')
        .addFields(
            {name: amongusemoji, value: skribblemoji, inline: true},     
            {name: 'Among us', value: 'Skribbl.io', inline: true},
            {name: '\u200B', value: '\u200B', inline: true },
            {name: valorantemoji, value: owemoji, inline: true},
            {name: 'Valorant', value: 'Overwatch', inline: true},
            {name: '\u200B', value: '\u200B', inline: true },
            {name: mcemoji, value: cocemoji, inline: true},
            {name: 'Minecraft', value: 'Clash of Clans', inline: true},
            {name: '\u200B', value: '\u200B', inline: true },
            {name: csemoji, value: gtaemoji, inline: true},
            {name: 'CS:GO', value: 'GTAV', inline: true},
            {name: '\u200B', value: '\u200B', inline: true },
            {name: osuemoji, value: '\u200B', inline: true},
            {name: 'osu!', value: '\u200B', inline:true},
            {name: '\u200B', value:'\u200B', inline: true},
            )
            let channel=message.guild.channels.cache.find(c=>c.id==='710409738470293548')
            let edited=await channel.messages.fetch('779821395261521941')
            edited.edit(roles)
            edited.react('789424753722261504')
  }if(message.content==='+wichtel'){
   /*if(message.member.roles.cache.find(r =>r.id ==='782311150041563188')){ 
     let i=Math.floor(Math.random()*(wichtelnichtgesagt.length))
      let j=Math.floor(Math.random()*(keinewichtel.length))
      if(wichtelnichtgesagt.length===0){
          message.member.send('Du hast schon einen Wichtel!')
       }else{
          let member=message.guild.members.cache.find(member=>member.id===keinewichtel[j])
          member.send(wichtelnichtgesagt[i]+' ist die Person, für die du wichtelst')
          console.log(member.user.username)
          wichtelnichtgesagt.splice(i,1)
          keinewichtel.splice(j,1)
          member.roles.remove('782311150041563188')
          message.delete();
      }  
    }*/
  }if(message.content==='+rr'){
      let amongusemoji =message.guild.emojis.cache.find(emoji => emoji.name === 'AmongUs');
      let cocemoji     =message.guild.emojis.cache.find(emoji => emoji.name === 'coc');
      let skribblemoji =message.guild.emojis.cache.find(emoji => emoji.name === 'skribbl');
      let valorantemoji=message.guild.emojis.cache.find(emoji => emoji.name === 'valorant');
      let owemoji      =message.guild.emojis.cache.find(emoji => emoji.name === 'ow');
      let mcemoji      =message.guild.emojis.cache.find(emoji => emoji.name === 'mc');
      let csemoji      =message.guild.emojis.cache.find(emoji => emoji.name === 'csgo');
      let gtaemoji     =message.guild.emojis.cache.find(emoji => emoji.name === 'GTAV')

      let roles = new Discord.MessageEmbed()
        .setColor('#54000e')
        .setTitle('Reaction Roles')
        .setThumbnail('https://cdn.discordapp.com/attachments/768406230116073495/768609238074916934/Y-darkrot.jpg')
        .setDescription('React to give yourself a role:')
        .addFields(
            {name: amongusemoji, value: skribblemoji, inline: true},     
            {name: 'Among us', value: 'Skribbl.io', inline: true},
            {name: '\u200B', value: '\u200B', inline: true },
            {name: valorantemoji, value: owemoji, inline: true},
            {name: 'Valorant', value: 'Overwatch', inline: true},
            {name: '\u200B', value: '\u200B', inline: true },
            {name: mcemoji, value: cocemoji, inline: true},
            {name: 'Minecraft', value: 'Clash of Clans', inline: true},
            {name: '\u200B', value: '\u200B', inline: true },
            {name: csemoji, value: gtaemoji, inline: true},
            {name: 'CS:GO', value: 'GTAV', inline: true},
            {name: '\u200B', value: '\u200B', inline: true },
        )
      message.channel.send(roles).then(roles=>{
        roles.react("767030541726777405")
        .then(()=>roles.react("711849874483576902"))
        .then(()=>roles.react("711848505987301376"))
        .then(()=>roles.react("711847642283638864"))
        .then(()=>roles.react("711848004054941767"))
        .then(()=>roles.react("711850473468067910"))
        .then(()=>roles.react("770322748995797022"))
        .then(()=>roles.react("770325428560199720")) 
    })                  
  }if(message.content==='+rr2'){
    message.delete()
    let blue = '🔵';
    let red='🔴'
    let green='🟢'
    let white='⚪'
    let yellow='🟡'
    let brown='🟤'
    let purple='🟣'

      const color =new Discord.MessageEmbed()
      .setColor('#54000e')
      .setTitle('Color Picker')
      .setThumbnail('https://cdn.discordapp.com/attachments/768406230116073495/768609238074916934/Y-darkrot.jpg')
      .setDescription('React to chose a color for your name: ')
      .addFields(
        {name: blue, value: red, inline: true},     
        {name: 'blue', value: 'red', inline: true},
        {name: '\u200B', value: '\u200B', inline: true },
        {name: green, value: white, inline: true},
        {name: 'green', value: 'white', inline: true},
        {name: '\u200B', value: '\u200B', inline: true },
        {name: yellow, value: brown, inline: true},
        {name: 'yellow', value: 'brown', inline: true},
        {name: '\u200B', value: '\u200B', inline: true },
        {name: purple, value: '\u200B', inline: true},
        {name: 'purple', value: '\u200B', inline: true},
        {name: '\u200B', value: '\u200B', inline: true },
    )
    message.channel.send(color).then(color=>{
      color.react(blue)
      .then(()=>color.react(red))
      .then(()=>color.react(green))
      .then(()=>color.react(white))
      .then(()=>color.react(yellow))
      .then(()=>color.react(brown))
      .then(()=>color.react(purple))

    })
  }
  
  if(message.content ==='+skeldmap'){ //skeld
    message.channel.send({files: ['./images/SKELD_MAP.jpg']})
  }if(message.content ==='+mirahqmap'){ //mirahq
    message.channel.send({files: ['./images/Mirahq.jpg']})
  }if(message.content ==='+polusmap'){ //polus
    message.channel.send({files: ['./images/Polus.jpg']})  
  }if(message.content === '+dyechart'){//dyechart
    message.channel.send({files: ['./images/dyechart.png']})
  }if(message.content === '+potionbrewing'){//potionbrewing
    message.channel.send({files: ['./images/potionbrewing.png']})
  }if(message.content === '+orelevels'){
    message.channel.send({files: ['./images/ore_distrubution.png']})
  }if(message.content.includes('justus')||message.content.includes('Justus')){
    message.react('🍎')
  }if(message.author.id==='704259153853415444'){ 
    message.reply('Bonjour Justin')
  }if(message.author.id==='767113432952209479'){
    message.react('🌳')
  }if(message.content === '+amongus-commands'){
   message.channel.send(AmongUsEmbed)
  }if(message.content.startsWith ('+avatar')){
   let member =message.mentions.members.first();
   message.channel.send(member.user.avatarURL())
  }if(message.content ==='+mute'){ //mute
  if(message.member.roles.cache.find(r =>r.id ==='711875768782684180'||r.id ==='703338610841223258' )){
      if (message.member.voice.channel) {
         let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
          for (const [memberID, member] of channel.members) {                    
           member.voice.setMute(true);
           message.delete({ timeout: 1})
         }
       }
  }
  }if(message.content === '+unmute'){ //unmute
      if(message.member.roles.cache.find(r =>r.id ==='711875768782684180'||r.id ==='703338610841223258'  )){
        if (message.member.voice.channel) {
      let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
      for (const [memberID, member] of channel.members) {              
        member.voice.setMute(false);
        message.delete({ timeout: 1})
      }
    }
 }    
  }if(message.content.startsWith('+poll')){
  if(message.member.roles.cache.find(r =>r.id ==='711875768782684180'||r.id ==='703338610841223258' )){
    let inhalt =message.content.substring(6)
    let zeit=inhalt.substring(0,9)
    let poll = new Discord.MessageEmbed()
    .setColor('#54000e')
    .setTitle(inhalt.substring(9))
    let nachricht=await message.channel.send(poll)
      nachricht.react('✅')
      nachricht.react('❌') 
let pollno=-1;
let pollyes=-1;
client.on('messageReactionAdd', async (reaction)=>{
    if(reaction.message.id===nachricht.id){
    switch(reaction.emoji.name){
      case '✅':
      pollyes++
      break
      case '❌':
      pollno++
      break
      
    }
    
}
client.on('messageReactionRemove', async (reaction)=>{
  if(reaction.message.id===nachricht.id){
  switch(reaction.emoji.name){
    case '✅':
    pollyes--
    break
    case '❌':
    pollno--
    break
    }
  }
})
 
})
let pollresult = new Discord.MessageEmbed()
.setColor('#54000e')
.setTitle('the poll: "'+inhalt.substring(9)+'" has ended. '+pollyes+' voted for yes, '+pollno+' voted for no.')
 nachricht.edit(poll)
setTimeout(function(){ nachricht.edit(pollresult)}, zeit)


     /* const filter = (reaction) => ['❌', '✅'].includes(reaction.emoji.name);
      const collector = nachricht.createReactionCollector(filter, { time: zeit });
      collector.on('end', collected => {
        console.log(collected.size);
        let poll = new Discord.MessageEmbed()
        .setColor('#54000e')
        .setTitle('the poll: "'+inhalt.substring(9)+'" has ended. '+' voted for yes, '+' voted for no.')
         nachricht.edit(poll)
      });    

      
    const filter=(reaction)=>{
      return reaction.emoji.name === '✅'
    }
    const filter2=(reaction)=>{
      return reaction.emoji.name==='❌'
    }
    const collector = nachricht.createReactionCollector(filter, {time:zeit-100})
    const collectorne= nachricht.createReactionCollector(filter2, {time: zeit})

    
    collector.on('end', collected =>{
      let pollyes=collected.size-1   
      console.log(pollyes)
      collectorne.on('end', collected=>{
        
        let pollno=collected.size-1
        let poll = new Discord.MessageEmbed()
        .setColor('#54000e')
        .setTitle('the poll: "'+inhalt.substring(9)+'" has ended. '+pollyes+' voted for yes, '+pollno+' voted for no.')
         nachricht.edit(poll)
      })
      
    })*/      
  }
  }if(message.content.length===6){
  if(message.channel.id ==='767031553552416809'){
      let channel = message.member.voice.channel
       if (channel.id==='767028016597172257'){
      const amonguscode = message.content;
      if(amonguscode===amonguscode.toUpperCase()&&amonguscode!=='JUSTUS'&&amonguscode!=='JOSHUA'){
        channel.setName('Among Us '+amonguscode)
        }
      }
    }
  }if(message.content.startsWith('+botschreiben')){
    if (message.member.roles.cache.find(r =>r.id ==='711875768782684180'||r.id ==='703338610841223258'  )){
    let inhalt=message.content.substring(14)
    let lol=message.guild.channels.cache.get(inhalt.substring(0,18))
    let text=inhalt.substring(19)
    lol.send(text)
  }
  }if(message.content.startsWith('+welcome')){
  let member =message.mentions.members.first();
  const join=new Discord.MessageEmbed()
    .setDescription('Hey <@'+member+'>, welcome to **'+member.guild.name+'**Discord Server.\n\n\nCongratulations, you are the **'+member.guild.memberCount+'**th Member of **'+member.guild.name+'**Discord Server.')
    .setThumbnail(member.user.avatarURL())
    .setColor('#54000e')
    let channel=message.guild.channels.cache.find(channel=>channel.id==='711870491295481897')
    channel.send(join)
    message.delete()
  }if(message.content.startsWith('+new')){
    if(message.channel.id==='790993344469139536'){
        let content=message.content.substring(5)
        let channelname=content.slice(0, -2)
        let succesfull='Channel '+channelname+'was created!'
        let channel =await message.guild.channels.create(channelname, {
          type:'voice'
        
        })
            let categoryID='790993216601980958'
            channel.setParent(categoryID)
            channel.setUserLimit(content.substring(content.length-2))
            
            
        
          let geschrieben=await message.reply(succesfull)
          setTimeout(function(){
            geschrieben.delete()
          },3000 )
            let channelloeschen = setInterval(function(){if(channel.members.size===0){
            channel.delete()
            console.log('hi')
            clearInterval(channelloeschen)
           }console.log('ho')},10000)
          
         
          /*setTimeout(function(){
           
           if(channel.members.size===0){
            channel.delete()
           }
          }, 10000 7200000)*/
    }message.delete()
  }if(message.content.startsWith('+newEmbed')){
    const embed=new Discord.MessageEmbed()
    .setColor('#54000e')
    .setDescription(message.content.substring(10))
    message.channel.send(embed)
  }

});
client.on('messageReactionAdd', async (reaction,user)=> { //rr add
	if (reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);		
			return;
		}
	}if(reaction.message.id === '779821395261521941'){  //gamereactions
    let member=await reaction.message.guild.members.fetch(user.id)
    switch(reaction.emoji.name){
      case 'AmongUs' :
        member.roles.add('767027669162131486')
        break
      case 'skribbl' :
        member.roles.add('711854531633217546')
        break
      case 'valorant' :
        member.roles.add('711851943512768596')
        break
      case 'ow' :
        member.roles.add('711851513470779462')
        break
      case 'mc' :
        member.roles.add('711854720955973682')
        break
      case 'coc' :
        member.roles.add('711865028965564468')
        break
      case 'csgo' :
        member.roles.add('770750349694861382')
        break
      case 'GTAV' :
        member.roles.add('770750223063842826')
        break 
      case 'osu':
        member.roles.add('789424485232148510') 
      break      
      default:
        reaction.remove()
    }     
  }if(reaction.message.id ==='711902724232314910'){
    if(reaction.emoji.name==='check'){
      reaction.message.guild.members.cache.find(m=>m.id ===user.id).roles.add('711845985143226418')
    }else{
      reaction.remove()
    }
  }if(reaction.message.id==='788143386385317908'){
    let member=await reaction.message.guild.members.fetch(user.id)
      if(!member.roles.cache.find(r=>r.id==='787427419137114153'||r.id==='787427571386155069'||r.id==='787427688583397377'||r.id==='787427797089648681'||r.id==='787427864655691776'||r.id==='787427996759752714'||r.id==='787429026523512882')){
    switch(reaction.emoji.name){
        case '🔵':
          member.roles.add('787427419137114153')
          break
        case '🔴':
          member.roles.add('787427571386155069')
          break
        case '🟢':
          member.roles.add('787427688583397377')
          break
        case '⚪':
          member.roles.add('787427797089648681')
          break  
        case '🟡':
          member.roles.add('787427864655691776')
          break
        case '🟤':
          member.roles.add('787427996759752714')
          break
        case '🟣' :
          member.roles.add('787429026523512882')   
          break
        default:
          reaction.remove() 
        }
      }else{
        reaction.users.remove(user) 
    }
  }
})
client.on('messageReactionRemove', async (reaction,user)=> { //rr remove
	if (reaction.partial) {
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);		
			return;
		}
	}if(reaction.message.id === '779821395261521941'){   
    let member=await reaction.message.guild.members.fetch(user.id)
    switch(reaction.emoji.name){
      case 'AmongUs' :
        member.roles.remove('767027669162131486')
      break
      case 'skribbl' :
        member.roles.remove('711854531633217546')
      break
      case 'valorant' :
        member.roles.remove('711851943512768596')
      break
      case 'ow' :
        member.roles.remove('711851513470779462')
      break
      case 'mc' :
        member.roles.remove('711854720955973682')
      break
      case 'coc' :
        member.roles.remove('711865028965564468')
      break
      case 'csgo' :
        member.roles.remove('770750349694861382')
      break
      case 'GTAV' :
        member.roles.remove('770750223063842826')
      break 
      case 'osu':
        member.roles.remove('789424485232148510') 
      break 
      default:
        reaction.remove()   
    }
  
  }if(reaction.message.id==='788143386385317908'){
    let member=await reaction.message.guild.members.fetch(user.id)
    switch(reaction.emoji.name){
      case '🔵':
        member.roles.remove('787427419137114153')
        break
      case '🔴':
        member.roles.remove('787427571386155069')
        break
      case '🟢':
        member.roles.remove('787427688583397377')
        break
      case '⚪':
        member.roles.remove('787427797089648681')
        break  
      case '🟡':
        member.roles.remove('787427864655691776')
        break
      case '🟤':
        member.roles.remove('787427996759752714')
        break
      case '🟣' :
        member.roles.remove('787429026523512882')   
        break
      default:
        reaction.remove() 
    }
  }
})
client.on('guildMemberAdd', member =>{
  let channel=member.guild.channels.cache.find(channel=>channel.id ==='711870491295481897')
  const join=new Discord.MessageEmbed()
    .setDescription('Hey <@'+member+'>, welcome to **'+member.guild.name+'**Discord Server.\n\n\nCongratulations, you are the **'+member.guild.memberCount+'**th Member of **'+member.guild.name+'**Discord Server.')
    .setThumbnail(member.user.avatarURL())
    .setColor('#54000e')
    channel.send(join)
    member.send('hello <@'+member+'> , Welcome to **'+member.guild.name+'** Discord Server. A server all fun and games. Please take a look at the rules Channel and read them. Afterwards you can get the roles you need in the #📃reaction-roles channel!')
    const modlog=member.guild.channels.cache.find(channel => channel.id==='711890937260802170')
    modlog.send('<@'+member+'>**has joined the server**')
})
client.on('guildMemberRemove', member=>{
  const modlog=member.guild.channels.cache.find(channel => channel.id==='711890937260802170')
  modlog.send('***'+member.user.username+'#'+member.user.discriminator+' just left the server***')
})

client.login('');