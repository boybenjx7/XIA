const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('*❗ *𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝙊 𝙀𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝘼 𝙋𝘼𝙍𝘼 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊');
  } else throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝚁, 𝚄𝚂𝙴:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
