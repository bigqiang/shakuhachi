export const SONGS = [
  {
    id: 'sakura',
    nameEn: 'Sakura Sakura',
    nameJp: '桜桜',
    tempo: 66,
    description: {
      en: 'The most famous Japanese melody. Uses the Miyako-bushi scale. A good first piece — all notes are in the Otsu register with no meri required except Ha meri (Bb).',
      zh: '最著名的日本旋律。使用 Miyako-bushi 音阶。适合作为第一首曲目——所有音都在 Otsu 音区，除 Ha meri（Bb）外无需 mer。',
    },
    phrases: [
      [
        { offset: 7, beats: 2 }, { offset: 7, beats: 2 }, { offset: 8, beats: 4 },
      ],
      [
        { offset: 7, beats: 2 }, { offset: 7, beats: 2 }, { offset: 5, beats: 4 },
      ],
      [
        { offset: 7, beats: 2 }, { offset: 7, beats: 1 }, { offset: 8, beats: 1 },
        { offset: 7, beats: 2 }, { offset: 5, beats: 2 },
      ],
      [
        { offset: 1, beats: 2 }, { offset: 5, beats: 1 }, { offset: 1, beats: 1 },
        { offset: 0, beats: 4 },
      ],
      [
        { offset: 7, beats: 2 }, { offset: 7, beats: 2 }, { offset: 8, beats: 4 },
      ],
      [
        { offset: 7, beats: 2 }, { offset: 7, beats: 2 }, { offset: 5, beats: 4 },
      ],
      [
        { offset: 7, beats: 2 }, { offset: 7, beats: 1 }, { offset: 8, beats: 1 },
        { offset: 7, beats: 2 }, { offset: 5, beats: 2 },
      ],
      [
        { offset: 1, beats: 2 }, { offset: 5, beats: 1 }, { offset: 1, beats: 1 },
        { offset: 0, beats: 4 },
      ],
      [
        { offset: 8, beats: 2 }, { offset: 8, beats: 2 },
        { offset: 7, beats: 2 }, { offset: 5, beats: 1 }, { offset: 7, beats: 1 },
      ],
      [
        { offset: 5, beats: 2 },
        { offset: 1, beats: 2 }, { offset: 5, beats: 1 }, { offset: 1, beats: 1 },
        { offset: 0, beats: 2 },
      ],
    ],
  },
  {
    id: 'amazingGrace',
    nameEn: 'Amazing Grace (Yo scale)',
    nameJp: 'アメイジング・グレイス',
    tempo: 72,
    description: {
      en: 'A well-known Western hymn that fits naturally on the Yo pentatonic scale. Good for practicing smooth transitions across the full basic range.',
      zh: '一首众所周知的西方赞美诗，天然适合 Yo 五声音阶。适合练习整个基本范围内的平滑转换。',
    },
    phrases: [
      [
        { offset: 0, beats: 1 },
        { offset: 5, beats: 2 }, { offset: 7, beats: 1 }, { offset: 5, beats: 1 },
        { offset: 7, beats: 2 },
      ],
      [
        { offset: 5, beats: 1 },
        { offset: 2, beats: 2 }, { offset: 0, beats: 1 },
        { offset: 2, beats: 3 },
      ],
      [
        { offset: 0, beats: 1 },
        { offset: 5, beats: 2 }, { offset: 7, beats: 1 }, { offset: 5, beats: 1 },
        { offset: 7, beats: 2 },
      ],
      [
        { offset: 9, beats: 1 },
        { offset: 12, beats: 3 },
      ],
      [
        { offset: 9, beats: 1 },
        { offset: 12, beats: 2 }, { offset: 9, beats: 1 }, { offset: 12, beats: 1 },
        { offset: 9, beats: 1 },
      ],
      [
        { offset: 7, beats: 1 },
        { offset: 5, beats: 2 }, { offset: 7, beats: 1 },
        { offset: 5, beats: 2 },
      ],
      [
        { offset: 2, beats: 1 },
        { offset: 0, beats: 2 }, { offset: 2, beats: 1 }, { offset: 5, beats: 1 },
        { offset: 2, beats: 2 },
      ],
      [
        { offset: 0, beats: 1 },
        { offset: 5, beats: 3 },
      ],
    ],
  },
  {
    id: 'takeda_lullaby',
    nameEn: 'Takeda Lullaby',
    nameJp: '竹田の子守唄',
    tempo: 58,
    description: {
      en: 'A traditional Japanese lullaby from Kyoto. Uses the Miyako-bushi scale with its characteristic minor feel. Simple and meditative.',
      zh: '来自京都的传统日本摇篮曲。使用 Miyako-bushi 音阶，具有独特的悲怆感。简洁而冥想。',
    },
    phrases: [
      [
        { offset: 5, beats: 2 }, { offset: 7, beats: 2 }, { offset: 8, beats: 2 },
        { offset: 7, beats: 2 },
      ],
      [
        { offset: 5, beats: 2 }, { offset: 1, beats: 2 }, { offset: 0, beats: 4 },
      ],
      [
        { offset: 5, beats: 2 }, { offset: 7, beats: 2 }, { offset: 8, beats: 2 },
        { offset: 7, beats: 2 },
      ],
      [
        { offset: 5, beats: 1 }, { offset: 7, beats: 1 },
        { offset: 5, beats: 2 }, { offset: 1, beats: 2 }, { offset: 0, beats: 2 },
      ],
    ],
  },
];
