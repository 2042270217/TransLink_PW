const languages = {
  "auto": "自动检测",
  "zh": "中文",
  "yue": "粤语",
  "wyw": "文言文",
  "kor": "韩语",
  "fra": "法语",
  "th": "泰语",
  "ara": "阿拉伯语",
  "pt": "葡萄牙语",
  "de": "德语",
  "el": "希腊语",
  "nl": "荷兰语",
  "bul": "保加利亚语",
  "est": "爱沙尼亚语",
  "fin": "芬兰语",
  "cs": "捷克语",
  "slo": "斯洛文尼亚语",
  "swe": "瑞典语",
  "cht": "繁体中文",
  "en": "英语",
  "jp": "日语",
  "spa": "西班牙语",
  "ru": "俄语",
  "it": "意大利语",
  "pl": "波兰语",
  "dan": "丹麦语",
  "rom": "罗马尼亚语",
  "hu": "匈牙利语",
  "vie": "越南语"
};

function findLanguageCode(languageName) {
  const entry = Object.entries(languages).find(([code, name]) => name === languageName);
  return entry ? entry[0] : null;
}

function convertLanguageCode(inputCode) {
  // 定义一个对象，将输入代码映射到标准语言代码
  const codeMap = {
      "zh": "CHN_ENG",
      "en": "ENG",
      "jp": "JAP",
      "kor": "KOR",
      "fra": "FRE",
      "spa": "SPA",
      "pt": "POR",
      "de": "GER",
      "it": "ITA",
      "ru": "RUS"
  };
  // 返回对应的标准语言代码，如果找不到则返回默认值"CHN_ENG"
  return codeMap[inputCode] || "CHN_ENG";
}

module.exports = {
  findLanguageCode,
  convertLanguageCode,
}