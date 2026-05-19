export const SCALES = [
  {
    id: 'yo',
    nameEn: 'Yo',
    nameJp: '陽旋',
    intervals: [0, 2, 5, 7, 9],
    ascending: [0, 2, 4, 5, 7, 9, 11],
    descending: [0, 2, 3, 5, 7, 9, 10],
    description: {
      en: 'The "bright" scale — major character without semitones. Found in folk songs, festival music, and min\'yo. Open, cheerful, and uplifting. The 7-note extended form (min\'yo scale) also has different passing tones ascending vs descending.',
      zh: '“阳”音阶，明亮的特性而无半音。常见于民谣、节庆音乐和民谣（min’yo）。开阔、欢快、振奋。7 音扩展形式（民谣音阶）在上行和下行时也有不同的经过音。',
    },
  },
  {
    id: 'miyako_bushi',
    nameEn: 'Miyako-bushi',
    nameJp: '都節',
    intervals: [0, 1, 5, 7, 8],
    ascending: [0, 1, 4, 5, 7, 8, 11],
    descending: [0, 1, 3, 5, 7, 8, 10],
    description: {
      en: 'The urban scale of Edo-period Japan. Dark, haunting quality with two semitone steps. Foundation of koto and shamisen music. Also called the "In" scale. The 7-note extended form has different auxiliary passing tones ascending vs descending — sharper tones going up (pulled toward the upper nuclear tone), flatter going down.',
      zh: '江户时代的城市音阶。阴暗神秘，带有两个半音阶。是筝、三味线音乐的基础。也称为“阴”音阶。7 音扩展形式在上行与下行时辅助通过音不同——上行偏高，下行偏低。',
    },
  },
  {
    id: 'hirajoshi',
    nameEn: 'Hirajoshi',
    nameJp: '平調子',
    intervals: [0, 2, 3, 7, 8],
    description: {
      en: 'The most widely known Japanese pentatonic scale. Melancholic, contemplative character. Standard koto tuning and a staple of classical shakuhachi repertoire.',
      zh: '最广为人知的日本五声音阶。忧郁、沉思的气质。是古筝标准调式，也是尺八古典曲目的基本音阶。',
    },
  },
  {
    id: 'in_sen',
    nameEn: 'In-sen',
    nameJp: '陰旋',
    intervals: [0, 1, 5, 7, 10],
    description: {
      en: 'The "shadow" scale. Minor-colored with a semitone step down from the root. Used in meditative honkyoku pieces. Evokes solitude and inner reflection.',
      zh: '“阴”音阶。带有小调色彩，在主音下方包含一个半音。用于冥想性质的本曲作品，唤起孤独与内省。',
    },
  },
  {
    id: 'iwato',
    nameEn: 'Iwato',
    nameJp: '岩戸',
    intervals: [0, 1, 5, 6, 10],
    description: {
      en: 'Named after the heavenly cave of Amaterasu. The darkest Japanese scale — two semitone steps create tension and mystery. Used in ceremonial and sacred music.',
      zh: '以天照大神的天岩戸命名。最阴暗的日本音阶，两个半音产生紧张与神秘感。用于仪式性和神圣音乐。',
    },
  },
  {
    id: 'akebono',
    nameEn: 'Akebono',
    nameJp: '曙',
    intervals: [0, 2, 3, 7, 9],
    description: {
      en: 'The "dawn" scale. Close to Hirajoshi but with a natural 6th instead of flat 6th. Used in Ryukyu (Okinawan) music and classical shamisen pieces.',
      zh: '“曙”音阶。接近 Hirajoshi，但使用天然大六度而非小六度。用于琉球（冲绳）音乐和古典三味线作品。',
    },
  },
];
