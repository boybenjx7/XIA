// manden porno test
const linkRegex = /https:/i;
export async function before(m, {conn, isAdmin, isBotAdmin, text}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return !0;
      if (m.text.includes(linkThisGroup2)) return !0;
      if (m.text.includes(linkThisGroup3)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆𝙎 」*\n𝙃𝙖𝙨𝙩𝙖 𝙡𝙖 𝙫𝙞𝙨𝙩𝙖 𝙗𝙖𝙗𝙮 👋 ${user} 𝙧𝙤𝙢𝙥𝙞𝙨𝙩𝙚 𝙡𝙖𝙨 𝙧𝙚𝙜𝙡𝙖𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤...!!`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('🔮 𝙀𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣, 𝙉𝙤 𝙥𝙪𝙚𝙙𝙚 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧 𝙖𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('❗𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙋𝙊𝙍𝙌𝙐𝙀 𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 +51 936732723 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙃𝘼𝘽𝙄𝙇𝙄𝙏𝘼𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 .𝙍𝙀𝙎𝙏𝙍𝙄𝘾𝙏');
  }
  return !0;
}
