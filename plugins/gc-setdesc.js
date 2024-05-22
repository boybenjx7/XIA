const handler = async (m, {conn, args}) => {
  await conn.groupUpdateDescription(m.chat, `${args.join(' ')}`);
  m.reply('❗ *𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝙊 𝙇𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊');
};
handler.help = ['Setdesc <text>'];
handler.tags = ['group'];
handler.command = /^setdesk|setdesc$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
