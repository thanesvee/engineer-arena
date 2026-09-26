# Engineer Arena Q&A 🎮

**Live:** https://engineer-arena.netlify.app
**เจ้าของโปรเจกต์:** ผศ.ดร.ธเนศ วีระศิริ
**ที่ปรึกษาและผู้พัฒนาร่วม:** Claude.ai (Anthropic)

เกมถาม-ตอบวิศวกรรมแบบผจญภัย สำหรับวิศวกรไทย 7 สาขาวิศวกรรมควบคุม ออกแบบเพื่อทบทวนและฝึกฝนความรู้เตรียมสอบเลื่อนขั้น ก.ว. โดยใช้ AI (Claude) สร้างคำถามใหม่แบบ real-time

## Tech Stack

- React 18 + Vite 5
- CSS-in-JS (inline styles)
- กราฟิก SVG วาดด้วยโค้ด (หุ่นยนต์ 7 สาขา, animation)
- PWA (manifest.json + Service Worker)
- Deploy แบบ Static บน Netlify (Drag & Drop)

## โครงสร้างโปรเจกต์

```
engineer-arena-v2/
├── index.html          ← PWA meta tags + Service Worker register
├── package.json
├── vite.config.js
├── public/
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── manifest.json
│   └── sw.js
└── src/
    ├── main.jsx        ← Entry point
    └── App.jsx         ← ตัวเกมทั้งหมด
```

## ฟีเจอร์หลัก

- **หุ่นยนต์ SVG 7 สาขา** — โยธา (CIVIL-X), เหมืองแร่ (MINE-Ω), เครื่องกล (MECH-α), ไฟฟ้า (VOLT-7), อุตสาหการ (INDUS-3), สิ่งแวดล้อม (ECO-V), เคมี (CHEM-Σ) แต่ละตัวมี animation เฉพาะตัว
- **แผนที่ผจญภัย Isometric** — 3 โซนหลัก + 1 โซนโบนัส
- **คำถาม 4 มิติ** — พื้นฐานวิศวกรรม (5 ข้อ), มาตรฐาน/กฎหมาย (4 ข้อ), จรรยาบรรณ (3 ข้อ), โบนัสผลงานเด่น (Upload PDF, 3 ข้อ)
- **ระบบเกม** — HP (ตอบผิด -20), EXP สะสมอัปเกรดหุ่นยนต์ Lv.1–5, Badge 7 ระดับ

## ฐานข้อมูลความรู้ที่ใช้

- กฎกระทรวงกำหนดสาขาวิชาชีพวิศวกรรม พ.ศ. 2565
- ข้อบังคับสภาวิศวกรว่าด้วยจรรยาบรรณ พ.ศ. 2559

## การพัฒนา

```bash
npm install
npm run dev       # dev server
npm run build     # build → dist/
npm run preview
```

## Deploy

```bash
npm run build
# ลากโฟลเดอร์ dist/ ไปวางที่ app.netlify.com → engineer-arena.netlify.app
```

## แผนพัฒนาต่อ

- [ ] เพิ่มเอกสารมาตรฐานเฉพาะสาขา (มยผ. IEC ASME ฯลฯ)
- [ ] Leaderboard รายสาขา (Supabase)
- [ ] Export Badge เป็นรูปแชร์ Facebook
- [ ] Streak ระบบเล่นติดต่อกัน 7 วัน
- [ ] เพิ่มสาขาวิศวกรรมที่ไม่ใช่ควบคุม (คอมพิวเตอร์ พลังงาน ฯลฯ)

## Repository

โค้ดนี้ push ขึ้น GitHub แล้วที่ [thanesvee/engineer-arena](https://github.com/thanesvee/engineer-arena)

## หมายเหตุ: ประวัติการล้างโฟลเดอร์ซ้ำ

เดิมพบโฟลเดอร์โค้ดของแอปนี้ 5 ชุดกระจายอยู่ใน D:\ (สำรอง/ก็อปปี้ระหว่างพัฒนา) ตรวจสอบแล้วพบว่าเวอร์ชันล่าสุดจริง (mtime ของ `src/App.jsx` ใหม่สุด) อยู่ในชุด `New deploy` / `2 Engineer-arena เกมส์` ไม่ใช่ชุดนี้ตามที่เข้าใจตอนแรก จึงคัดลอก `App.jsx` เวอร์ชันล่าสุดมาไว้ในโฟลเดอร์นี้และ push ขึ้น GitHub แล้ว จากนั้นได้ย้ายโฟลเดอร์ซ้ำอีก 4 ชุด (`engineer-arena-v2`, `engineer-arena-pwa`, `New deploy`, `2 Engineer-arena เกมส์`) ไปที่ถังขยะ (Recycle Bin) ของ Windows เหลือไว้เพียงโฟลเดอร์นี้ชุดเดียวเป็นต้นทาง
