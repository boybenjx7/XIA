import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = imagen4;
  if (user.registered === true) throw `[✔️] 𝗬𝗮 𝗲𝘀𝘁𝗮𝘀 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗱𝗼\n\n¿𝗤𝘂𝗶𝗲𝗿𝗲𝘀 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗿𝘁𝗲 𝗱𝗲 𝗻𝘂𝗲𝘃𝗼?\n\n 📓𝗨𝘀𝗮 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗽𝗮𝗿𝗮 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘁𝘂 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗰𝗶𝗼𝗻 \n${usedPrefix}𝘂𝗻𝗿𝗲𝗴 <Número de serie>`;
  if (!Reg.test(text)) throw `❗ 𝙋𝙊𝙍𝙁𝘼𝙑𝙊𝙍 𝙀𝙅𝙀𝘾𝙐𝙏𝘼 𝘽𝙄𝙀𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n\n┣・🧸 𝙐𝙎𝙊 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊: ${usedPrefix + command} *𝙉𝙊𝙈𝘽𝙍𝙀.𝙀𝘿𝘼𝘿*\n*┣・🧸 𝙀𝙅𝙀𝙈𝙋𝙇𝙊: ${usedPrefix + command} 𝙃𝙔𝙋𝙀𝙍.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙳𝙴𝙱𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴*';
  if (!age) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰 𝙴𝙳𝙰𝙳 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙰*';
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙴𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾';
  age = parseInt(age);
  if (age > 100) throw '[⁉️] ¿𝗦𝗶𝗴𝘂𝗲𝘀 𝘃𝗶𝘃𝗼 𝗮𝘂𝗻 𝗮 𝘁𝘂 𝗲𝗱𝗮𝗱?';
  if (age < 5) throw '[⁉️] ¿𝗨𝗻 𝗯𝗲𝗯𝗲 𝗾𝘂𝗲 𝘂𝘀𝗮 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽? ';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏━━━━┣・🧸 𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏 🧸・┣━━━━┓
┃╭──────────────────
┃│「 🧸𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊🧸 」
┃├──────────────────
┃│🧸𝙉𝙤𝙢𝙗𝙧𝙚: ${name}ˣˣˣ
┃│🧸𝙀𝙙𝙖𝙙: ${age} años
┃│🧸𝙁𝙚𝙘𝙝𝙖: ${fecha}
┃│🧸𝘼ñ𝙤: ${año}
┃├──────────────────
┃│🧸𝙔𝙖 𝙚𝙨𝙩𝙖𝙨 𝙫𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙙𝙤
┃╰──────────────────
┗━━━━━━━━•◦ 🤖 ◦•━━━━━━━━┛
🧸𝙉° 𝙨𝙚𝙧𝙞𝙚:

${sn}`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'menu.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
