# 尺八指法指南

标准5孔尺八的操作指法参考。

## 功能

- **所有音符**：乙调（第一泛音区）和甲调（第二泛音区），包括梅里音（meri）和交叉指法
- **SVG 指法图**：每个音符的可视化按孔图
- **6种日本五声音阶**：都节调（Miyako-bushi）、平调子（Hirajoshi）、隐仙调（In-sen）、岩户调（Iwato）、洋调（Yo）、曙调（Akebono）
- **调性移调**：选择尺八尺寸（1.3–2.8 尺），所有西方音名会自动更新
- **三语支持**：英语 /汉语 / 俄语 切换

## 快速入门

```bash
# 安装依赖项 (类似 pip install -r requirements.txt)
npm install

# 启动开发服务器并支持热重载
npm run dev

# 在浏览器中打开: http://localhost:5173/
```

## 两个必用命令

| 命令 | 作用 |
|---------|-------------|
| `npm run dev` | 运行开发服务器，支持热加载 |
| `npm run build` | 生成 `dist/` 文件夹，输出静态文件 |

## 项目目录结构

```
src/
  data/          ← 尺八数据（notes、scales、sizes、translations）
  utils/         ← 移调函数
  context/       ← 全局状态（语言、选定调性）
  components/    ← 可重用 UI 组件（SVG 指法图、音符卡、布局）
  pages/         ← 每个章节一个页面（Home、Notes、Chart、Scales）
  App.css        ← 统一样式定义
```

## 添加内容

- **新增音阶**：在 `src/data/scales.js` 添加一个对象
- **新增语言**：在 `src/data/i18n.js` 添加一个key值
- **新增页面**：在 `src/pages/` 添加组件，并在 `src/App.jsx` 添加路由
