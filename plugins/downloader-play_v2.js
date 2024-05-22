import fetch from 'node-fetch';
let data;
let buff;
let mimeType;
let fileName;
let apiUrl;
let enviando = false;
const handler = async (m, { command, usedPrefix, conn, text }) => {
  if (!text) throw `❗𝙋𝙊𝙍𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 + 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝘼𝙇𝙂𝙐𝙉𝘼 𝘾𝘼𝙉𝘾𝙄𝙊𝙉\n\n*—◉ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 1:*\n*${usedPrefix + command}* 𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏 - 𝘽𝙀𝙉𝙅𝘼𝙈𝙄𝙉\n*—◉ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 2:*\n*${usedPrefix + command}* https://youtu.be/...`;
if (enviando) return;
    enviando = true
  try {
    const apiUrls = [
      `https://api.boxmine.xyz/api/ytplay?text=${text}`,
      `https://api.brunosobrino.repl.co/api/ytplay?text=${text}`,  
      `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}`
    ];

    for (const url of apiUrls) {
      try {
        const res = await fetch(url);
        data = await res.json();
        if (data.resultado && data.resultado.url) {
          break;
        }
      } catch {}
    }

    if (!data.resultado || !data.resultado.url) {
      enviando = false;
      throw `*[❗] No se pudo obtener la URL del video/canción.*`;
    } else {
      try {
        if (command === 'play.1') {
              apiUrl = `https://api.boxmine.xyz/api/v1/ytmp3?url=${data.resultado.url}`;
              mimeType = 'audio/mpeg';
              fileName = 'error.mp3';
              buff = await conn.getFile(apiUrl);
            } else if (command === 'play.2') {
              apiUrl = `https://api.boxmine.xyz/api/v1/ytmp4?url=${data.resultado.url}`;
              mimeType = 'video/mp4';
              fileName = 'error.mp4';
              buff = await conn.getFile(apiUrl);
        }
      } catch {
        try {
          if (command === 'play.1') {
              apiUrl = `https://api.brunosobrino.repl.co/api/v1/ytmp3?url=${data.resultado.url}`;
              mimeType = 'audio/mpeg';
              fileName = 'error.mp3';
              buff = await conn.getFile(apiUrl);
            } else if (command === 'play.2') {
              apiUrl = `https://api.brunosobrino.repl.co/api/v1/ytmp4?url=${data.resultado.url}`;
              mimeType = 'video/mp4';
              fileName = 'error.mp4';
              buff = await conn.getFile(apiUrl);             
          }
        } catch {
          try {
            if (command === 'play.1') {
              apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp3?url=${data.resultado.url}`;
              mimeType = 'audio/mpeg';
              fileName = 'error.mp3';
              buff = await conn.getFile(apiUrl);
            } else if (command === 'play.2') {
              apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp4?url=${data.resultado.url}`;
              mimeType = 'video/mp4';
              fileName = 'error.mp4';
              buff = await conn.getFile(apiUrl);
            }
          } catch {
            enviando = false;
            throw `*[❗] Error al descargar el video/canción desde las APIs disponibles.`;
          }
        }
      }
    }

    const dataMessage = `*=> Título:* ${data.resultado.title}\n*=> Canal:* ${data.resultado.channel}\n*=> URL:* ${data.resultado.url}\n*=> Publicado:* ${data.resultado.publicDate}`;
    await conn.sendMessage(m.chat, { text: dataMessage }, { quoted: m });

    if (buff) {
      await conn.sendMessage(m.chat, {[mimeType.startsWith('audio') ? 'audio' : 'video']: buff.data, mimetype: mimeType, fileName: fileName}, {quoted: m});
      enviando = false;
    } else {
      enviando = false;
      throw `*[❗] Error al descargar el video/canción desde las APIs disponibles.`;
    }
  } catch (error) {
    enviando = false;
    throw `*[❗] Error: ${error.message || 'Ocurrió un error inesperado'}.*`;
  }
};
handler.help = ['play.1', 'play.2'].map((v) => v + ' <texto>');
handler.tags = ['downloader'];
handler.command = ['play.1', 'play.2'];
export default handler;


/*import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
const handler = async (m, {command, usedPrefix, conn, text}) => {
  if (!text) throw `*❗𝙋𝙊𝙍𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 + 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝘼𝙇𝙂𝙐𝙉𝘼 𝘾𝘼𝙉𝘾𝙄𝙊𝙉*\n\n*—◉ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 1:*\n*${usedPrefix + command} 𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏 - 𝘽𝙀𝙉𝙅𝘼𝙈𝙄𝙉*`;
  try {
    if (command == 'play.1') {
      conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴀᴜᴅɪᴏ...⏳_*`, m);
      try {
        const mediaa = await ytPlay(text);
        const audiocore = mediaa.result2?.[0]?.audio || mediaa.result2?.[1]?.audio || mediaa.result2?.[2]?.audio || null;
        const aa = await conn.sendMessage(m.chat, {audio: {url: audiocore}, fileName: `error.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
        if (!aa) {
        throw new Error('❗*𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝙏𝙀 𝙋𝙄𝘿𝙀 𝘿𝙄𝙎𝘾𝙐𝙇𝙋𝘼𝙎, 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙁𝘼𝙇𝙇𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙀𝙈𝙊𝙎 𝘾𝙊𝙉 𝙊𝙏𝙍𝙊');
       }        
      } catch {
        const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
        const json = await res.json();
        const aa_1 = await conn.sendMessage(m.chat, {audio: {url: json.result.audio}, fileName: `error.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
        if (!aa_1) aa_1 = await conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, {mimetype: 'audio/mpeg'});
      }
    }
    if (command == 'play.2') {
      conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴠɪᴅᴇᴏ...⏳_*`, m);
      try {
        const mediaa = await ytPlayVid(text);
        const aa_2 = await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: `_𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
        if (!aa_2) {
        throw new Error('❗*𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝙏𝙀 𝙋𝙄𝘿𝙀 𝘿𝙄𝙎𝘾𝙐𝙇𝙋𝘼𝙎, 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙁𝘼𝙇𝙇𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙀𝙈𝙊𝙎 𝘾𝙊𝙉 𝙊𝙏𝙍𝙊');
       }
      } catch {
        const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
        const json = await res.json();
        await conn.sendFile(m.chat, json.result.video, 'error.mp4', `_𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏_`, m);
      }
    }
  } catch {
    throw '❗*𝙃𝙔𝙋𝙀𝙍´𝙑 𝘽𝙊𝙏* 𝙏𝙀 𝙋𝙄𝘿𝙀 𝘿𝙄𝙎𝘾𝙐𝙇𝙋𝘼𝙎, 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙁𝘼𝙇𝙇𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙇𝙊 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊';
  }
};
handler.help = ['play.1', 'play.2'].map((v) => v + ' <texto>');
handler.tags = ['downloader'];
handler.command = ['play.1', 'play.2'];
export default handler;

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}*/
