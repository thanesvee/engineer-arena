import { useState, useCallback, useRef } from "react";

// ─── SVG ROBOTS ──────────────────────────────────────────────────────────────
function RobotCivil({ size = 80, animate = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <style>{`.rc-glow{${animate?"animation:rc-pulse 2s infinite":""}}
@keyframes rc-pulse{0%,100%{filter:drop-shadow(0 0 4px #3b82f6)}50%{filter:drop-shadow(0 0 12px #3b82f688)}}`}</style>
      <g className="rc-glow">
        {/* legs */}
        <rect x="26" y="62" width="10" height="14" rx="3" fill="#1d4ed8"/>
        <rect x="44" y="62" width="10" height="14" rx="3" fill="#1d4ed8"/>
        {/* body */}
        <rect x="18" y="36" width="44" height="28" rx="6" fill="#2563eb"/>
        {/* chest plate */}
        <rect x="26" y="42" width="28" height="14" rx="3" fill="#1e3a5f"/>
        {/* chest light */}
        <circle cx="40" cy="49" r="5" fill="#3b82f6"/>
        <circle cx="40" cy="49" r="3" fill="#93c5fd"/>
        {/* arms */}
        <rect x="4" y="38" width="12" height="8" rx="4" fill="#1d4ed8"/>
        <rect x="64" y="38" width="12" height="8" rx="4" fill="#1d4ed8"/>
        {/* crane arm right */}
        <rect x="72" y="28" width="4" height="20" rx="2" fill="#fbbf24"/>
        <rect x="66" y="26" width="14" height="4" rx="2" fill="#fbbf24"/>
        <rect x="78" y="26" width="2" height="10" rx="1" fill="#f59e0b"/>
        {/* neck */}
        <rect x="34" y="28" width="12" height="10" rx="3" fill="#1d4ed8"/>
        {/* head */}
        <rect x="22" y="10" width="36" height="22" rx="6" fill="#2563eb"/>
        {/* visor */}
        <rect x="26" y="15" width="28" height="10" rx="3" fill="#0f172a"/>
        <rect x="28" y="17" width="10" height="6" rx="2" fill="#3b82f6"/>
        <rect x="42" y="17" width="10" height="6" rx="2" fill="#3b82f6"/>
        {/* antenna */}
        <rect x="38" y="4" width="4" height="8" rx="2" fill="#60a5fa"/>
        <circle cx="40" cy="4" r="3" fill="#93c5fd"/>
        {/* bolts */}
        <circle cx="24" cy="42" r="2" fill="#1e40af"/>
        <circle cx="56" cy="42" r="2" fill="#1e40af"/>
      </g>
    </svg>
  );
}

function RobotMining({ size = 80, animate = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <style>{`.rm-glow{${animate?"animation:rm-pulse 2s infinite":""}}
@keyframes rm-pulse{0%,100%{filter:drop-shadow(0 0 4px #f59e0b)}50%{filter:drop-shadow(0 0 12px #f59e0b88)}}`}</style>
      <g className="rm-glow">
        <rect x="26" y="62" width="11" height="14" rx="3" fill="#b45309"/>
        <rect x="43" y="62" width="11" height="14" rx="3" fill="#b45309"/>
        {/* heavy body */}
        <rect x="14" y="34" width="52" height="30" rx="7" fill="#d97706"/>
        <rect x="22" y="40" width="36" height="16" rx="4" fill="#92400e"/>
        {/* power core */}
        <circle cx="40" cy="48" r="6" fill="#f59e0b"/>
        <circle cx="40" cy="48" r="3" fill="#fef3c7"/>
        {/* drill arm left */}
        <rect x="2" y="36" width="10" height="10" rx="3" fill="#b45309"/>
        <polygon points="2,36 2,46 -4,41" fill="#fbbf24"/>
        {/* shovel arm right */}
        <rect x="68" y="36" width="10" height="10" rx="3" fill="#b45309"/>
        <rect x="76" y="33" width="6" height="16" rx="1" fill="#fbbf24"/>
        {/* neck */}
        <rect x="32" y="26" width="16" height="10" rx="4" fill="#d97706"/>
        {/* head - helmet style */}
        <rect x="18" y="8" width="44" height="22" rx="8" fill="#d97706"/>
        <rect x="14" y="14" width="52" height="12" rx="4" fill="#b45309"/>
        {/* visor */}
        <rect x="24" y="15" width="32" height="8" rx="2" fill="#0f172a"/>
        <rect x="26" y="17" width="12" height="4" rx="1" fill="#fbbf24"/>
        <rect x="42" y="17" width="12" height="4" rx="1" fill="#fbbf24"/>
        {/* light on helmet */}
        <circle cx="40" cy="10" r="4" fill="#fef3c7"/>
        <circle cx="40" cy="10" r="2" fill="#fff"/>
      </g>
    </svg>
  );
}

function RobotMech({ size = 80, animate = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <style>{`.rmch-glow{${animate?"animation:rmch-pulse 2s infinite":""}}
@keyframes rmch-pulse{0%,100%{filter:drop-shadow(0 0 4px #8b5cf6)}50%{filter:drop-shadow(0 0 12px #8b5cf688)}}
.rmch-spin{${animate?"animation:spin 3s linear infinite":""};transform-origin:40px 49px}
@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
      <g className="rmch-glow">
        <rect x="28" y="63" width="9" height="13" rx="3" fill="#6d28d9"/>
        <rect x="43" y="63" width="9" height="13" rx="3" fill="#6d28d9"/>
        <rect x="16" y="36" width="48" height="28" rx="6" fill="#7c3aed"/>
        {/* gear on chest */}
        <g className="rmch-spin">
          <circle cx="40" cy="49" r="9" fill="#4c1d95"/>
          <circle cx="40" cy="49" r="6" fill="#6d28d9"/>
          <circle cx="40" cy="49" r="3" fill="#a78bfa"/>
          {[0,45,90,135,180,225,270,315].map((a,i) => (
            <rect key={i} x="39" y="39" width="2" height="5" rx="1" fill="#4c1d95"
              transform={`rotate(${a} 40 49)`}/>
          ))}
        </g>
        {/* arms with joints */}
        <rect x="2" y="38" width="12" height="7" rx="3" fill="#6d28d9"/>
        <circle cx="14" cy="41.5" r="4" fill="#4c1d95"/>
        <rect x="66" y="38" width="12" height="7" rx="3" fill="#6d28d9"/>
        <circle cx="66" cy="41.5" r="4" fill="#4c1d95"/>
        <rect x="32" y="28" width="16" height="10" rx="4" fill="#7c3aed"/>
        <rect x="20" y="10" width="40" height="22" rx="7" fill="#7c3aed"/>
        <rect x="24" y="14" width="32" height="11" rx="3" fill="#4c1d95"/>
        <rect x="26" y="16" width="11" height="7" rx="2" fill="#8b5cf6"/>
        <rect x="43" y="16" width="11" height="7" rx="2" fill="#8b5cf6"/>
        <rect x="37" y="2" width="6" height="10" rx="3" fill="#a78bfa"/>
        <circle cx="40" cy="2" r="3" fill="#c4b5fd"/>
        {/* vent lines */}
        <rect x="22" y="40" width="8" height="2" rx="1" fill="#4c1d95"/>
        <rect x="50" y="40" width="8" height="2" rx="1" fill="#4c1d95"/>
      </g>
    </svg>
  );
}

function RobotElec({ size = 80, animate = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <style>{`.re-glow{${animate?"animation:re-pulse 1.5s infinite":""}}
@keyframes re-pulse{0%,100%{filter:drop-shadow(0 0 4px #eab308)}50%{filter:drop-shadow(0 0 14px #eab30888)}}
.re-bolt{${animate?"animation:re-blink 1s infinite":""}opacity:1}
@keyframes re-blink{0%,100%{opacity:1}50%{opacity:0.2}}`}</style>
      <g className="re-glow">
        <rect x="28" y="62" width="10" height="14" rx="3" fill="#a16207"/>
        <rect x="42" y="62" width="10" height="14" rx="3" fill="#a16207"/>
        <rect x="17" y="35" width="46" height="28" rx="6" fill="#ca8a04"/>
        <rect x="25" y="41" width="30" height="16" rx="4" fill="#713f12"/>
        {/* lightning bolt on chest */}
        <g className="re-bolt">
          <polygon points="43,42 37,51 41,51 37,60 45,49 41,49" fill="#fef08a"/>
        </g>
        {/* electric arms */}
        <rect x="3" y="37" width="12" height="8" rx="4" fill="#ca8a04"/>
        <path d="M3 39 L-2 37 L0 41 L-4 43" stroke="#fef08a" strokeWidth="2" fill="none" className="re-bolt"/>
        <rect x="65" y="37" width="12" height="8" rx="4" fill="#ca8a04"/>
        <path d="M77 39 L82 37 L80 41 L84 43" stroke="#fef08a" strokeWidth="2" fill="none" className="re-bolt"/>
        <rect x="33" y="27" width="14" height="10" rx="3" fill="#ca8a04"/>
        <rect x="20" y="8" width="40" height="22" rx="7" fill="#ca8a04"/>
        <rect x="24" y="13" width="32" height="11" rx="3" fill="#713f12"/>
        <rect x="26" y="15" width="11" height="7" rx="2" fill="#eab308"/>
        <rect x="43" y="15" width="11" height="7" rx="2" fill="#eab308"/>
        {/* antennas */}
        <rect x="26" y="2" width="3" height="8" rx="1" fill="#fbbf24"/>
        <circle cx="27" cy="2" r="2" fill="#fef08a"/>
        <rect x="51" y="2" width="3" height="8" rx="1" fill="#fbbf24"/>
        <circle cx="52" cy="2" r="2" fill="#fef08a"/>
        <rect x="24" y="39" width="6" height="2" rx="1" fill="#713f12"/>
        <rect x="50" y="39" width="6" height="2" rx="1" fill="#713f12"/>
      </g>
    </svg>
  );
}

function RobotIndus({ size = 80, animate = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <style>{`.ri-glow{${animate?"animation:ri-pulse 2s infinite":""}}
@keyframes ri-pulse{0%,100%{filter:drop-shadow(0 0 4px #ef4444)}50%{filter:drop-shadow(0 0 12px #ef444488)}}
.ri-smoke{${animate?"animation:ri-up 2s infinite":""}opacity:0.6}
@keyframes ri-up{0%{transform:translateY(0);opacity:.6}100%{transform:translateY(-8px);opacity:0}}`}</style>
      <g className="ri-glow">
        <rect x="25" y="62" width="12" height="14" rx="3" fill="#991b1b"/>
        <rect x="43" y="62" width="12" height="14" rx="3" fill="#991b1b"/>
        {/* factory body */}
        <rect x="12" y="34" width="56" height="30" rx="6" fill="#dc2626"/>
        {/* factory windows */}
        <rect x="18" y="40" width="10" height="8" rx="2" fill="#7f1d1d"/>
        <rect x="32" y="40" width="10" height="8" rx="2" fill="#7f1d1d"/>
        <rect x="46" y="40" width="10" height="8" rx="2" fill="#7f1d1d"/>
        {/* chimney */}
        <rect x="58" y="20" width="8" height="18" rx="2" fill="#991b1b"/>
        <g className="ri-smoke">
          <circle cx="62" cy="18" r="3" fill="#94a3b8"/>
          <circle cx="59" cy="13" r="2" fill="#64748b"/>
        </g>
        {/* arms */}
        <rect x="0" y="37" width="10" height="8" rx="3" fill="#dc2626"/>
        <rect x="70" y="37" width="10" height="8" rx="3" fill="#dc2626"/>
        {/* conveyor arms */}
        <rect x="0" y="43" width="14" height="3" rx="1" fill="#fbbf24"/>
        <rect x="66" y="43" width="14" height="3" rx="1" fill="#fbbf24"/>
        <rect x="30" y="26" width="20" height="10" rx="4" fill="#dc2626"/>
        <rect x="18" y="8" width="44" height="22" rx="7" fill="#dc2626"/>
        <rect x="22" y="13" width="36" height="11" rx="3" fill="#7f1d1d"/>
        <rect x="24" y="15" width="12" height="7" rx="2" fill="#ef4444"/>
        <rect x="44" y="15" width="12" height="7" rx="2" fill="#ef4444"/>
        {/* top light */}
        <rect x="38" y="2" width="4" height="8" rx="2" fill="#fca5a5"/>
        <circle cx="40" cy="3" r="3" fill="#fef2f2"/>
      </g>
    </svg>
  );
}

function RobotEnv({ size = 80, animate = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <style>{`.rev-glow{${animate?"animation:rev-pulse 2s infinite":""}}
@keyframes rev-pulse{0%,100%{filter:drop-shadow(0 0 4px #22c55e)}50%{filter:drop-shadow(0 0 12px #22c55e88)}}
.rev-leaf{${animate?"animation:rev-wave 2s ease-in-out infinite":""}transform-origin:center}
@keyframes rev-wave{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}`}</style>
      <g className="rev-glow">
        <rect x="28" y="63" width="10" height="13" rx="3" fill="#15803d"/>
        <rect x="42" y="63" width="10" height="13" rx="3" fill="#15803d"/>
        <rect x="16" y="35" width="48" height="28" rx="7" fill="#16a34a"/>
        {/* globe on chest */}
        <circle cx="40" cy="49" r="10" fill="#0f4c75"/>
        <ellipse cx="40" cy="49" rx="4" ry="10" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="30" y1="49" x2="50" y2="49" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="40" cy="49" r="10" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        {/* leaf wings */}
        <g className="rev-leaf">
          <path d="M4 35 Q0 25 10 20 Q8 32 16 38 Z" fill="#22c55e"/>
          <path d="M76 35 Q80 25 70 20 Q72 32 64 38 Z" fill="#22c55e"/>
        </g>
        <rect x="32" y="27" width="16" height="10" rx="4" fill="#16a34a"/>
        <rect x="20" y="8" width="40" height="22" rx="7" fill="#16a34a"/>
        <rect x="24" y="13" width="32" height="11" rx="3" fill="#14532d"/>
        <rect x="26" y="15" width="11" height="7" rx="2" fill="#22c55e"/>
        <rect x="43" y="15" width="11" height="7" rx="2" fill="#22c55e"/>
        {/* sprout top */}
        <rect x="38" y="2" width="4" height="7" rx="2" fill="#4ade80"/>
        <path d="M40 2 Q36 -2 34 2 Q37 0 40 2Z" fill="#4ade80"/>
        <path d="M40 2 Q44 -2 46 2 Q43 0 40 2Z" fill="#4ade80"/>
      </g>
    </svg>
  );
}

function RobotChem({ size = 80, animate = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <style>{`.rch-glow{${animate?"animation:rch-pulse 2s infinite":""}}
@keyframes rch-pulse{0%,100%{filter:drop-shadow(0 0 4px #06b6d4)}50%{filter:drop-shadow(0 0 12px #06b6d488)}}
.rch-bub{${animate?"animation:rch-float 2s ease-in-out infinite":""}opacity:.8}
@keyframes rch-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}`}</style>
      <g className="rch-glow">
        <rect x="28" y="63" width="10" height="13" rx="3" fill="#0e7490"/>
        <rect x="42" y="63" width="10" height="13" rx="3" fill="#0e7490"/>
        <rect x="16" y="35" width="48" height="28" rx="7" fill="#0891b2"/>
        {/* flask on chest */}
        <path d="M34 42 L34 50 L29 58 L51 58 L46 50 L46 42 Z" fill="#164e63"/>
        <path d="M29 58 L51 58 L46 50 L34 50 Z" fill="#06b6d4" opacity="0.7"/>
        <rect x="34" y="40" width="12" height="4" rx="1" fill="#0e7490"/>
        {/* bubbles */}
        <g className="rch-bub">
          <circle cx="36" cy="55" r="2" fill="#67e8f9"/>
          <circle cx="42" cy="53" r="1.5" fill="#67e8f9"/>
          <circle cx="38" cy="57" r="1" fill="#a5f3fc"/>
        </g>
        {/* tube arms */}
        <rect x="2" y="37" width="12" height="8" rx="4" fill="#0891b2"/>
        <path d="M2 38 Q-4 38 -4 44" stroke="#67e8f9" strokeWidth="2" fill="none"/>
        <circle cx="-4" cy="44" r="3" fill="#0e7490"/>
        <rect x="66" y="37" width="12" height="8" rx="4" fill="#0891b2"/>
        <path d="M78 38 Q84 38 84 44" stroke="#67e8f9" strokeWidth="2" fill="none"/>
        <circle cx="84" cy="44" r="3" fill="#0e7490"/>
        <rect x="32" y="27" width="16" height="10" rx="4" fill="#0891b2"/>
        <rect x="20" y="8" width="40" height="22" rx="7" fill="#0891b2"/>
        <rect x="24" y="13" width="32" height="11" rx="3" fill="#164e63"/>
        <rect x="26" y="15" width="11" height="7" rx="2" fill="#06b6d4"/>
        <rect x="43" y="15" width="11" height="7" rx="2" fill="#06b6d4"/>
        <rect x="37" y="2" width="6" height="8" rx="3" fill="#22d3ee"/>
        <circle cx="40" cy="2" r="3" fill="#cffafe"/>
      </g>
    </svg>
  );
}

const ROBOT_COMPONENTS = {
  civil: RobotCivil, mining: RobotMining, mech: RobotMech,
  elec: RobotElec, indus: RobotIndus, env: RobotEnv, chem: RobotChem,
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const BRANCHES = [
  { id:"civil",  name:"โยธา",       robot:"CIVIL-X", color:"#3b82f6", dim:"#1e3a5f",
    basics:"สถิตยศาสตร์ กลศาสตร์วัสดุ คอนกรีตเสริมเหล็ก ฐานราก โครงสร้างเหล็ก ปฐพีกลศาสตร์",
    standards:"กฎกระทรวง2565 สาขาโยธา: อาคาร≥3ชั้น เสาเข็ม≥6ม. สะพานช่วง≥10ม. เขื่อน≥1.5ม. งานขุดดิน>3ม. มยผ.1301/1302 ACI318" },
  { id:"mining", name:"เหมืองแร่",  robot:"MINE-Ω",  color:"#f59e0b", dim:"#451a03",
    basics:"กลศาสตร์หิน ธรณีวิทยา วิศวกรรมระเบิด โลหกรรม ความเสถียรลาดดิน อุทกธรณีวิทยา",
    standards:"กฎกระทรวง2565 สาขาเหมืองแร่: ทำเหมืองทุกประเภท วัตถุระเบิดทุกขนาด โลหกรรมสารเคมีอันตราย ฟื้นฟูพื้นที่หลังปิดเหมือง" },
  { id:"mech",   name:"เครื่องกล", robot:"MECH-α",  color:"#8b5cf6", dim:"#2e1065",
    basics:"อุณหพลศาสตร์ กลศาสตร์ของไหล พลศาสตร์ ระบบควบคุม การถ่ายเทความร้อน วัสดุวิศวกรรม",
    standards:"กฎกระทรวง2565 สาขาเครื่องกล: เครื่องจักร≥100kW หม้อไอน้ำทุกขนาด ภาชนะรับแรงดัน AC≥350kW เตา≥40kW" },
  { id:"elec",   name:"ไฟฟ้า",     robot:"VOLT-7",  color:"#eab308", dim:"#422006",
    basics:"วงจรไฟฟ้า แม่เหล็กไฟฟ้า ระบบไฟฟ้ากำลัง อิเล็กทรอนิกส์กำลัง ระบบป้องกัน มอเตอร์ไฟฟ้า",
    standards:"กฎกระทรวง2565 สาขาไฟฟ้า: ระบบ≥300kVA แรงดัน≥3.3kV สาธารณะ≥200kVA ระบบสื่อสาร≥30W IEC มาตรฐาน กฟน/กฟภ" },
  { id:"indus",  name:"อุตสาหการ",robot:"INDUS-3", color:"#ef4444", dim:"#450a0a",
    basics:"การวิจัยดำเนินการ การควบคุมคุณภาพ Lean Six Sigma โลจิสติกส์ ความปลอดภัยอุตสาหกรรม ระบบการผลิต",
    standards:"กฎกระทรวง2565 สาขาอุตสาหการ: โรงงาน≥50คน/≥20ล้านบาท ระบบอัตโนมัติ การถลุงแร่ กากกัมมันตรังสี ระบบโลจิสติกส์" },
  { id:"env",    name:"สิ่งแวดล้อม",robot:"ECO-V",  color:"#22c55e", dim:"#052e16",
    basics:"คุณภาพน้ำ คุณภาพอากาศ การจัดการของเสีย EIA ระบบบำบัดน้ำเสีย อุทกวิทยา นิเวศวิทยา",
    standards:"กฎกระทรวง2565 สาขาสิ่งแวดล้อม: ประปา≥500ม³/วัน น้ำเสีย≥30ม³/วัน กากอุตสาหกรรมทุกขนาด ขยะ≥5,000กก/วัน EIA" },
  { id:"chem",   name:"เคมี",      robot:"CHEM-Σ", color:"#06b6d4", dim:"#082f49",
    basics:"เทอร์โมไดนามิกส์เคมี การถ่ายโอนมวล จลนศาสตร์เคมี การออกแบบเครื่องปฏิกรณ์ ความปลอดภัยสารเคมี",
    standards:"กฎกระทรวง2565 สาขาเคมี: กระบวนการเคมี≥500kW สารพิษทุกขนาด ความดัน≥2atm หอกลั่น≥7.5kW ภาชนะรับแรงดัน" },
];

const ETHICS_TEXT = `ข้อบังคับสภาวิศวกรว่าด้วยจรรยาบรรณ พ.ศ.2559:
ส่วนที่1 ต่อสาธารณะ: ข้อ5 ให้ความสำคัญต่อความปลอดภัย สุขอนามัย สวัสดิภาพสาธารณชน ทรัพย์สินและสิ่งแวดล้อม / ข้อ6 ละเว้นการสนับสนุนหรือเป็นตัวการการทุจริตในโครงการภาครัฐและเอกชน
ส่วนที่2 ต่อวิชาชีพ: ข้อ7 ซื่อสัตย์สุจริต มีความรับผิดชอบและระมัดระวัง / ข้อ8 ปฏิบัติตามหลักปฏิบัติและวิชาการ / ข้อ9 ไม่ประกอบวิชาชีพเกินความสามารถและความเชี่ยวชาญ / ข้อ10 ไม่ลงลายมือชื่อในงานที่ตนไม่ได้ทำ / ข้อ11 ไม่โฆษณาเกินความเป็นจริง / ข้อ12 ไม่รับหรือให้ทรัพย์สินโดยมิชอบ(สินบน) / ข้อ13 ไม่ใช้อิทธิพลแสวงหางาน
ส่วนที่3 ต่อผู้ว่าจ้าง: ข้อ14 ไม่ละทิ้งงานโดยไม่มีเหตุ / ข้อ15 ไม่เปิดเผยความลับของงาน / ข้อ16 ไม่รับงานแข่งขันโดยไม่แจ้งผู้ว่าจ้างรายแรก
ส่วนที่4 ต่อผู้ร่วมวิชาชีพ: ข้อ17 ไม่แย่งงานโดยมิชอบ / ข้อ18 ไม่รับทำงานซ้ำโดยไม่แจ้ง / ข้อ19 ไม่คัดลอกแบบโดยไม่ได้รับอนุญาต / ข้อ20 ไม่อ้างผลงานผู้อื่นมาเป็นของตน / ข้อ21 ไม่กระทำให้เสื่อมเสียชื่อเสียงผู้อื่น`;

const ZONE_CONFIG = [
  { id:"basics",    name:"พื้นฐาน",    icon:"🔬", count:5, pts:1, color:"#3b82f6" },
  { id:"standards", name:"มาตรฐาน",    icon:"📋", count:4, pts:2, color:"#f59e0b" },
  { id:"ethics",    name:"จรรยาบรรณ",  icon:"⚖️", count:3, pts:3, color:"#22c55e" },
];

const BADGES = [
  { id:"b1", name:"วิศวกรฝึกหัด",        emoji:"🥉", need:1  },
  { id:"b2", name:"ผ่านมาตรฐาน",         emoji:"📋", need:2  },
  { id:"b3", name:"รักษาจรรยาบรรณ",      emoji:"⚖️", need:3  },
  { id:"b4", name:"ชำนาญการ",            emoji:"🥈", need:5  },
  { id:"b5", name:"ผู้เชี่ยวชาญ",        emoji:"🥇", need:8  },
  { id:"b6", name:"ระดับสภา",            emoji:"💎", need:12 },
  { id:"b7", name:"วิศวกรผู้มีประสบการณ์", emoji:"🌟", need:0, special:true },
];

// ─── AI FETCH ────────────────────────────────────────────────────────────────
const PROMPT_RULES = `
กฎสำคัญมากในการสร้าง JSON:
1. "answer" คือ index (0=ก, 1=ข, 2=ค, 3=ง) ของตัวเลือกที่ถูกต้องเพียงข้อเดียว
2. ตรวจสอบให้แน่ใจว่าค่า "answer" ชี้ไปที่ตัวเลือกที่ถูกต้องจริงๆ
3. คำอธิบายใน "explanation" ต้องสอดคล้องกับตัวเลือกที่ "answer" ชี้ไป
4. ห้ามให้ answer=0 เสมอ ให้กระจาย ก/ข/ค/ง อย่างหลากหลาย
5. ตรวจสอบซ้ำก่อนส่ง: choices[answer] ต้องเป็นคำตอบที่ถูกต้อง
ตัวอย่าง: ถ้าคำตอบที่ถูกคือ "ข. 54 kN-m" → answer ต้องเป็น 1`;

function buildPrompt(branch, zone, portfolioText) {
  const b = BRANCHES.find(x => x.id === branch);
  const jsonFormat = `ตอบด้วย JSON เท่านั้น ห้ามมีข้อความอื่น:\n{"question":"คำถาม","choices":["ก.ตัวเลือก1","ข.ตัวเลือก2","ค.ตัวเลือก3","ง.ตัวเลือก4"],"answer":INDEX,"explanation":"คำอธิบาย"}\n${PROMPT_RULES}`;

  if (zone === "ethics") return {
    system: `คุณคือผู้ออกข้อสอบจรรยาบรรณวิศวกรไทย อ้างอิงข้อบังคับสภาวิศวกรพ.ศ.2559:\n${ETHICS_TEXT}\n${jsonFormat}`,
    user: "สร้างคำถามจรรยาบรรณที่หลากหลาย ไม่ซ้ำ และตรวจสอบ answer index ให้ถูกต้องก่อนส่ง"
  };
  if (zone === "portfolio") return {
    system: `คุณคือผู้ออกข้อสอบวิชาชีพวิศวกรรม${b.name}ไทย\n${jsonFormat}`,
    user: `ผลงานเด่นของวิศวกร:\n${portfolioText}\n\nสร้างคำถามเชื่อมโยงผลงานกับหลักวิศวกรรม${b.name} และตรวจสอบ answer index ให้ถูกต้องก่อนส่ง`
  };
  if (zone === "standards") return {
    system: `คุณคือผู้ออกข้อสอบมาตรฐาน/กฎหมายวิศวกรรม${b.name}ไทย อ้างอิง: ${b.standards}\n${jsonFormat}`,
    user: "สร้างคำถามเรื่องขนาด/ประเภทงานตามกฎกระทรวง2565 และตรวจสอบ answer index ให้ถูกต้องก่อนส่ง"
  };
  return {
    system: `คุณคือผู้ออกข้อสอบพื้นฐานวิศวกรรม${b.name}ไทย หัวข้อ: ${b.basics}\n${jsonFormat}`,
    user: "สร้างคำถามพื้นฐานวิศวกรรม มีตัวเลขจริงในโจทย์คำนวณ และตรวจสอบ answer index ให้ถูกต้องก่อนส่ง"
  };
}

function validateQuestion(q) {
  // ตรวจสอบว่า answer index ถูกต้อง
  if (!q || !q.choices || !q.question || !q.explanation) return false;
  if (q.answer < 0 || q.answer > 3) return false;
  if (q.choices.length !== 4) return false;
  // ตรวจสอบว่า explanation กล่าวถึงตัวเลือกที่ถูกต้อง
  const correctChoice = q.choices[q.answer];
  // ดึงเฉพาะตัวเลขหรือข้อความสำคัญจากตัวเลือกที่ถูก
  const keyText = correctChoice.replace(/^[ก-ง]\.\s*/, '').substring(0, 10);
  return keyText.length > 0;
}

async function fetchQuestion(branch, zone, used, portfolioText = "") {
  const { system, user } = buildPrompt(branch, zone, portfolioText);
  const avoid = used.length > 0 ? `\nหลีกเลี่ยงคำถามคล้าย: ${used.slice(-3).join(", ")}` : "";

  // ลองใหม่สูงสุด 3 ครั้งถ้าได้คำถามที่ไม่ถูกต้อง
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch("/api/ask", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ system, messages:[{role:"user", content: user + avoid + (attempt > 0 ? "\n(ครั้งที่ "+(attempt+1)+" กรุณาตรวจสอบ answer index ให้ถูกต้องด้วย)" : "")}] }),
    });
    const data = await res.json();
    const raw = data.content?.find(b => b.type === "text")?.text || "";
    try {
      const q = JSON.parse(raw.replace(/```json|```/g,"").trim());
      if (validateQuestion(q)) return q;
    } catch {}
  }
  throw new Error("ไม่สามารถสร้างคำถามที่ถูกต้องได้");
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function EngineerArena() {
  const [screen, setScreen]         = useState("select");
  const [branch, setBranch]         = useState(null);
  const [zoneIdx, setZoneIdx]       = useState(0);
  const [qIdx, setQIdx]             = useState(0);
  const [question, setQuestion]     = useState(null);
  const [loading, setLoading]       = useState(false);
  const [selected, setSelected]     = useState(null);
  const [revealed, setRevealed]     = useState(false);
  const [hp, setHp]                 = useState(100);
  const [exp, setExp]               = useState(0);
  const [score, setScore]           = useState(0);
  const [rounds, setRounds]         = useState(0);
  const [used, setUsed]             = useState([]);
  const [error, setError]           = useState(null);
  const [robotLevel, setRobotLevel] = useState(1);
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [newBadge, setNewBadge]     = useState(null);
  // Portfolio zone
  const [showPortfolioGate, setShowPortfolioGate] = useState(false);
  const [portfolioText, setPortfolioText]         = useState("");
  const [portfolioFile, setPortfolioFile]         = useState(null);
  const [portfolioReady, setPortfolioReady]       = useState(false);
  const [inPortfolioZone, setInPortfolioZone]     = useState(false);
  const [portfolioQIdx, setPortfolioQIdx]         = useState(0);
  const fileRef = useRef();

  const bData = BRANCHES.find(b => b.id === branch);
  const RobotComp = branch ? ROBOT_COMPONENTS[branch] : null;
  const curZone = ZONE_CONFIG[zoneIdx];
  const totalMainQ = ZONE_CONFIG.reduce((a,z) => a + z.count, 0);

  const loadQ = useCallback(async (br, zi, qi, usedList, portfolio = "") => {
    setLoading(true); setError(null); setSelected(null); setRevealed(false);
    try {
      const zone = ZONE_CONFIG[zi]?.id || "basics";
      const q = await fetchQuestion(br, zone, usedList, portfolio);
      setQuestion(q);
      setUsed(prev => [...prev, q.question.slice(0, 18)]);
    } catch { setError("โหลดคำถามไม่สำเร็จ กรุณาลองใหม่"); }
    finally { setLoading(false); }
  }, []);

  const loadPortfolioQ = useCallback(async (br, qi, usedList, portfolio) => {
    setLoading(true); setError(null); setSelected(null); setRevealed(false);
    try {
      const q = await fetchQuestion(br, "portfolio", usedList, portfolio);
      setQuestion(q);
      setUsed(prev => [...prev, q.question.slice(0, 18)]);
    } catch { setError("โหลดคำถามไม่สำเร็จ"); }
    finally { setLoading(false); }
  }, []);

  const startRound = (br) => {
    setBranch(br); setZoneIdx(0); setQIdx(0);
    setHp(100); setScore(0); setUsed([]);
    setQuestion(null); setShowPortfolioGate(false);
    setInPortfolioZone(false); setPortfolioQIdx(0);
    setScreen("map");
  };

  const enterZone = (zi) => {
    if (zi !== zoneIdx) return;
    setQIdx(0); setScreen("quiz");
    loadQ(branch, zi, 0, used);
  };

  const handleSelect = (idx) => {
    if (revealed) return;
    setSelected(idx); setRevealed(true);
    const correct = idx === question.answer;
    const pts = inPortfolioZone ? 4 : curZone?.pts || 1;
    if (correct) { setScore(s => s + pts); setExp(e => e + pts * 10); }
    else { setHp(h => Math.max(0, h - 20)); }
  };

  const nextQ = () => {
    if (inPortfolioZone) {
      const next = portfolioQIdx + 1;
      if (next >= 3) {
        // portfolio done
        if (!earnedBadges.includes("b7")) {
          setEarnedBadges(prev => [...prev, "b7"]);
          setNewBadge(BADGES.find(b => b.id === "b7"));
        }
        setInPortfolioZone(false);
        finishRound();
      } else {
        setPortfolioQIdx(next);
        loadPortfolioQ(branch, next, used, portfolioText);
      }
      return;
    }
    const nextQIdx = qIdx + 1;
    if (nextQIdx >= curZone.count) {
      const nextZone = zoneIdx + 1;
      if (nextZone >= ZONE_CONFIG.length) {
        // main zones done → show portfolio gate
        setShowPortfolioGate(true);
        setScreen("portfolioGate");
      } else {
        setZoneIdx(nextZone); setQIdx(0);
        setScreen("map");
      }
    } else {
      setQIdx(nextQIdx);
      loadQ(branch, zoneIdx, nextQIdx, used);
    }
  };

  const finishRound = () => {
    const newRounds = rounds + 1;
    setRounds(newRounds);
    if (newRounds % 2 === 0) setRobotLevel(l => Math.min(l + 1, 5));
    BADGES.filter(b => !b.special).forEach(b => {
      if (newRounds >= b.need && !earnedBadges.includes(b.id)) {
        setEarnedBadges(prev => [...prev, b.id]);
        setNewBadge(BADGES.find(x => x.id === b.id));
      }
    });
    setScreen("result");
  };

  const handlePortfolioFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPortfolioFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPortfolioText(ev.target.result?.slice(0, 3000) || file.name);
      setPortfolioReady(true);
    };
    reader.readAsText(file);
  };

  const startPortfolioZone = () => {
    setInPortfolioZone(true); setPortfolioQIdx(0);
    setScreen("quiz");
    loadPortfolioQ(branch, 0, used, portfolioText || portfolioFile?.name || "ผลงานวิศวกร");
  };

  const robotLvColor = [,"#3b82f6","#22c55e","#f59e0b","#ef4444","#8b5cf6"][robotLevel] || "#3b82f6";

  // ── SELECT ──────────────────────────────────────────────────────────────────
  if (screen === "select") return (
    <div style={p.page}>
      <div style={p.topBar}>
        <div style={p.logo}><span style={{fontSize:28}}>⚙️</span><div><div style={p.logoT}>ENGINEER ARENA</div><div style={p.logoS}>ผจญภัยทดสอบวิชาชีพวิศวกร</div></div></div>
        {rounds > 0 && <div style={p.roundPill}>รอบที่ {rounds} ✓</div>}
      </div>

      <div style={p.sectionTitle}>เลือกหุ่นยนต์ประจำสาขาของคุณ</div>
      <div style={p.sectionSub}>7 สาขาวิศวกรรมควบคุม • เล่นซ้ำได้ไม่จำกัด</div>

      <div style={p.branchGrid}>
        {BRANCHES.map(b => {
          const RC = ROBOT_COMPONENTS[b.id];
          return (
            <button key={b.id} style={{ ...p.branchCard, borderColor: b.color + "55", background: b.dim + "cc" }}
              onClick={() => startRound(b.id)}>
              <div style={p.robotWrap}>
                <RC size={72} animate={false}/>
              </div>
              <div style={{ ...p.robotName, color: b.color }}>{b.robot}</div>
              <div style={p.branchNameTxt}>{b.name}</div>
              <div style={{ ...p.selectPill, background: b.color + "22", color: b.color }}>▶ เลือก</div>
            </button>
          );
        })}
      </div>

      {earnedBadges.length > 0 && (
        <div style={p.badgeBox}>
          <div style={p.badgeTitle}>🎖️ Badge ที่สะสม</div>
          <div style={p.badgeRow}>
            {BADGES.map(b => (
              <div key={b.id} style={{ ...p.badgeItem, opacity: earnedBadges.includes(b.id) ? 1 : 0.2 }}>
                <div style={{fontSize:22}}>{b.emoji}</div>
                <div style={p.badgeLbl}>{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{textAlign:"center", marginTop:20, paddingTop:12, borderTop:"1px solid #0d1f35",
        color:"#334155", fontSize:11, letterSpacing:0.3}}>
        ทำเพื่อสาธารณประโยชน์โดย ผศ.ดร.ธเนศ วีระศิริ
      </div>
    </div>
  );

  // ── MAP ─────────────────────────────────────────────────────────────────────
  if (screen === "map") return (
    <div style={p.page}>
      <div style={p.statusBar}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          {RobotComp && <div style={{flexShrink:0}}><RobotComp size={50} animate={true}/></div>}
          <div>
            <div style={{color: bData?.color, fontWeight:700, fontSize:13}}>{bData?.robot} <span style={{...p.lvBadge, background: bData?.color + "33", color: bData?.color}}>Lv.{robotLevel}</span></div>
            <div style={p.barRow}><span style={p.barLbl}>HP</span><div style={p.barBg}><div style={{...p.barFill, width:hp+"%", background:hp>50?"#22c55e":hp>25?"#f59e0b":"#ef4444"}}/></div><span style={p.barNum}>{hp}</span></div>
            <div style={p.barRow}><span style={p.barLbl}>EXP</span><div style={p.barBg}><div style={{...p.barFill, width:Math.min(100,(exp%200)/2)+"%", background:bData?.color}}/></div><span style={p.barNum}>{exp}</span></div>
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{color:"#fbbf24",fontWeight:700,fontSize:16}}>รอบ {rounds+1}</div>
          <div style={{color:"#64748b",fontSize:11}}>{bData?.name}</div>
          <div style={{color:"#94a3b8",fontSize:12,marginTop:2}}>คะแนน: {score}</div>
        </div>
      </div>

      <div style={p.mapLabel}>🗺️ แผนที่ผจญภัย — กดโซนที่ไฮไลท์เพื่อเข้าต่อสู้</div>
      <div style={p.mapBox}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}}>
          <polyline points="72,155 192,115 326,100 458,118 562,148" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="6,4" fill="none"/>
        </svg>
        {/* terrain */}
        {[["🌲",55,190],["⛰️",195,205],["🌿",340,215],["🌊",62,205],["☁️",480,85]].map(([t,x,y],i)=>(
          <div key={i} style={{position:"absolute",left:x,top:y,fontSize:16,opacity:0.2}}>{t}</div>
        ))}
        <div style={{position:"absolute",left:10,top:143,textAlign:"center",fontSize:10,color:"#64748b"}}>
          <div style={{fontSize:16}}>🚩</div><div>เริ่ม</div>
        </div>

        {ZONE_CONFIG.map((z,i)=>{
          const pos=[{left:86,top:88},{left:218,top:72},{left:352,top:58}][i];
          const done=i<zoneIdx, active=i===zoneIdx, locked=i>zoneIdx;
          return(
            <div key={z.id} style={{...p.zoneBox, left:pos.left, top:pos.top,
              borderColor:done?"#22c55e":active?z.color:"#1e293b",
              background:done?"#14532d33":active?z.color+"22":"#061020",
              boxShadow:active?`0 0 18px ${z.color}44`:"none",
              opacity:locked?0.45:1, cursor:active?"pointer":"default"}}
              onClick={()=>enterZone(i)}>
              {done&&<div style={p.doneDot}>✓</div>}
              {locked&&<div style={p.lockDot}>🔒</div>}
              <div style={{fontSize:22}}>{z.icon}</div>
              <div style={{fontSize:10,color:"#475569"}}>โซน {i+1}</div>
              <div style={{fontSize:12,fontWeight:700,color:done?"#86efac":active?z.color:"#334155",lineHeight:1.2}}>{z.name}</div>
              <div style={{fontSize:10,color:"#475569"}}>{z.count}ข้อ</div>
              {active&&<div style={{fontSize:9,color:z.color,marginTop:3}}>▶ กดเข้าสู้!</div>}
            </div>
          );
        })}

        {/* robot token */}
        {(() => {
          const pos=[{left:86,top:88},{left:218,top:72},{left:352,top:58}][zoneIdx];
          return RobotComp&&<div style={{position:"absolute",left:pos.left+22,top:pos.top-32,zIndex:10}}>
            <RobotComp size={32} animate={true}/>
          </div>;
        })()}

        <div style={{position:"absolute",left:548,top:138,textAlign:"center",fontSize:10,color:"#64748b"}}>
          <div style={{fontSize:18}}>🏆</div><div>ผลงาน</div>
        </div>
      </div>

      <div style={p.progStrip}>
        {ZONE_CONFIG.map((z,i)=>(
          <div key={z.id} style={{...p.progCell, borderColor:i<zoneIdx?"#22c55e":i===zoneIdx?z.color:"#1e293b",
            background:i<zoneIdx?"#14532d22":i===zoneIdx?z.color+"11":"transparent"}}>
            <span style={{fontSize:14}}>{z.icon}</span>
            <span style={{fontSize:11,fontWeight:600,color:i<zoneIdx?"#86efac":i===zoneIdx?z.color:"#334155"}}>
              {i<zoneIdx?`✓ ${z.count}/${z.count}`:i===zoneIdx?`▶ 0/${z.count}`:`🔒 ${z.count}ข้อ`}
            </span>
            <span style={{fontSize:10,color:"#64748b"}}>{z.name}</span>
          </div>
        ))}
        <div style={{...p.progCell, borderColor:"#8b5cf644", background:"transparent", opacity:0.5}}>
          <span style={{fontSize:14}}>📁</span>
          <span style={{fontSize:11,color:"#8b5cf6"}}>โบนัส</span>
          <span style={{fontSize:10,color:"#64748b"}}>ผลงาน</span>
        </div>
      </div>

      <button style={p.backBtnSm} onClick={()=>setScreen("select")}>← เปลี่ยนสาขา</button>
    </div>
  );

  // ── QUIZ ────────────────────────────────────────────────────────────────────
  if (screen === "quiz") {
    const zConf = inPortfolioZone
      ? { icon:"📁", name:"ผลงานเด่น (โบนัส)", color:"#8b5cf6", pts:4 }
      : curZone;
    const qTotal = inPortfolioZone ? 3 : curZone?.count;
    const qCurrent = inPortfolioZone ? portfolioQIdx : qIdx;

    return (
      <div style={p.page}>
        <div style={{...p.zoneHdr, borderColor:zConf.color, background:zConf.color+"11"}}>
          <span style={{fontSize:20}}>{zConf.icon}</span>
          <div>
            <div style={{color:zConf.color, fontWeight:700, fontSize:14}}>{inPortfolioZone?"โซนโบนัส: "+zConf.name:"โซน "+(zoneIdx+1)+": "+zConf.name}</div>
            <div style={{color:"#64748b",fontSize:11}}>ข้อ {qCurrent+1}/{qTotal} • +{zConf.pts} pts/ข้อถูก</div>
          </div>
          <div style={{marginLeft:"auto",textAlign:"right"}}>
            <div style={p.barRow}>
              <span style={{...p.barLbl,width:24}}>HP</span>
              <div style={{...p.barBg,width:80}}><div style={{...p.barFill, width:hp+"%", background:hp>50?"#22c55e":hp>25?"#f59e0b":"#ef4444"}}/></div>
              <span style={p.barNum}>{hp}</span>
            </div>
            <div style={{color:zConf.color,fontWeight:700,fontSize:13,marginTop:4}}>คะแนน: {score}</div>
          </div>
        </div>

        {loading&&<div style={p.center}><div style={p.spin}/><div style={{color:"#64748b",fontSize:13,marginTop:10}}>AI สร้างคำถาม...</div></div>}
        {error&&!loading&&<div style={p.center}><div style={{color:"#f87171",marginBottom:12}}>{error}</div><button style={p.retryBtn} onClick={()=>inPortfolioZone?loadPortfolioQ(branch,portfolioQIdx,used,portfolioText):loadQ(branch,zoneIdx,qIdx,used)}>ลองใหม่</button></div>}

        {question&&!loading&&!error&&<>
          <div style={p.qBox}>
            <div style={p.qLbl}>คำถาม</div>
            <div style={p.qTxt}>{question.question}</div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:14}}>
            {question.choices.map((c,i)=>{
              let bg="#1e293b",bc="#334155",col="#e2e8f0";
              if(revealed){if(i===question.answer){bg="#14532d";bc="#22c55e";col="#86efac";}
              else if(i===selected){bg="#450a0a";bc="#ef4444";col="#fca5a5";}else col="#475569";}
              return<button key={i} style={{...p.choiceBtn,background:bg,borderColor:bc,color:col}} onClick={()=>handleSelect(i)}>{c}</button>;
            })}
          </div>
          {revealed&&<div style={{...p.expBox,borderColor:selected===question.answer?"#22c55e":"#ef4444"}}>
            <div style={{fontWeight:700,marginBottom:6,color:"#e2e8f0"}}>{selected===question.answer?`✅ ถูกต้อง! +${zConf.pts} pts`:"❌ ไม่ถูกต้อง -20 HP"}</div>
            <div style={{color:"#94a3b8",fontSize:13,lineHeight:1.7,marginBottom:12}}>{question.explanation}</div>
            <button style={p.nextBtn} onClick={nextQ}>
              {inPortfolioZone
                ? portfolioQIdx+1>=3?"🏆 ดูผลลัพธ์":"ข้อโบนัสถัดไป →"
                : qIdx+1>=curZone?.count
                  ? zoneIdx+1>=ZONE_CONFIG.length?"➡️ สู่โซนโบนัส":"➡️ โซนถัดไป"
                  :"ข้อถัดไป →"}
            </button>
          </div>}
        </>}
      </div>
    );
  }

  // ── PORTFOLIO GATE ──────────────────────────────────────────────────────────
  if (screen === "portfolioGate") return (
    <div style={p.page}>
      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{fontSize:48}}>🎯</div>
        <div style={{color:"#f1f5f9",fontSize:20,fontWeight:700,marginTop:8}}>ผ่าน 3 โซนหลักแล้ว!</div>
        <div style={{color:"#64748b",fontSize:13,marginTop:4}}>คะแนนสะสม: {score} pts</div>
      </div>

      <div style={{background:"#112240",border:"2px solid #8b5cf6",borderRadius:14,padding:20,marginBottom:16}}>
        <div style={{color:"#a78bfa",fontWeight:700,fontSize:15,marginBottom:6}}>📁 โซนโบนัส: ผลงานเด่น</div>
        <div style={{color:"#94a3b8",fontSize:13,lineHeight:1.7,marginBottom:14}}>
          อัปโหลดสรุปผลงานเด่นของคุณ (PDF หรือข้อความ) เพื่อให้ AI ออกคำถามที่เชื่อมโยงกับผลงานจริง
          ตอบถูก <span style={{color:"#a78bfa",fontWeight:700}}>+4 pts/ข้อ (x2 จากปกติ)</span> และได้ Badge พิเศษ
        </div>

        <div style={{display:"flex",gap:10,marginBottom:12}}>
          <button style={{...p.uploadBtn, flex:1}} onClick={()=>fileRef.current?.click()}>
            📎 {portfolioFile ? portfolioFile.name : "อัปโหลด PDF / Text"}
          </button>
          <input ref={fileRef} type="file" accept=".pdf,.txt,.doc,.docx" style={{display:"none"}} onChange={handlePortfolioFile}/>
        </div>

        <div style={{color:"#64748b",fontSize:11,marginBottom:10}}>หรือพิมพ์สรุปผลงานเด่นโดยย่อ:</div>
        <textarea
          style={{width:"100%",background:"#0a1628",border:"1px solid #334155",borderRadius:8,color:"#e2e8f0",fontSize:13,padding:10,minHeight:80,fontFamily:"inherit",resize:"vertical"}}
          placeholder="เช่น: โครงการออกแบบโครงสร้างอาคาร 5 ชั้น RC ในพื้นที่แผ่นดินไหว จ.เชียงราย..."
          value={portfolioText}
          onChange={e=>{ setPortfolioText(e.target.value); setPortfolioReady(e.target.value.length > 20); }}
        />

        <button style={{...p.nextBtn, marginTop:12,
          background: portfolioReady?"#8b5cf6":"#1e293b",
          opacity: portfolioReady?1:0.5, cursor:portfolioReady?"pointer":"not-allowed"}}
          onClick={()=>portfolioReady&&startPortfolioZone()}>
          ⚔️ เข้าสู่โซนโบนัส (+12 pts สูงสุด)
        </button>
      </div>

      <button style={{...p.nextBtn, background:"#1e293b", border:"1px solid #334155"}} onClick={finishRound}>
        ข้ามโซนโบนัส → ดูผลลัพธ์
      </button>
    </div>
  );

  // ── RESULT ──────────────────────────────────────────────────────────────────
  if (screen === "result") {
    const maxScore = totalMainQ * 2 + (inPortfolioZone || earnedBadges.includes("b7") ? 12 : 0);
    const pct = Math.min(100, Math.round((score / Math.max(maxScore, 1)) * 100));
    const grade = pct>=80?"🏆":pct>=60?"🥈":"🥉";
    return (
      <div style={p.page}>
        <div style={{textAlign:"center",marginBottom:20}}>
          {RobotComp&&<div style={{display:"inline-block",marginBottom:8}}><RobotComp size={80} animate={true}/></div>}
          <div style={{fontSize:40}}>{grade}</div>
          <div style={{color:"#f1f5f9",fontSize:22,fontWeight:700}}>รอบที่ {rounds} เสร็จสิ้น!</div>
          <div style={{color:bData?.color,fontSize:13}}>{bData?.robot} · {bData?.name} · Lv.{robotLevel}</div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
          {[["คะแนนรวม",score,"#fbbf24"],["EXP รับ","+" +(score*10),bData?.color||"#3b82f6"],["HP คงเหลือ",hp+"%",hp>50?"#22c55e":"#ef4444"],["ระดับหุ่น","Lv."+robotLevel,"#8b5cf6"]].map(([l,v,c],i)=>(
            <div key={i} style={{background:"#112240",border:"1px solid #1e3a5f",borderRadius:10,padding:12,textAlign:"center"}}>
              <div style={{fontSize:22,fontWeight:700,color:c}}>{v}</div>
              <div style={{color:"#64748b",fontSize:11}}>{l}</div>
            </div>
          ))}
        </div>

        {newBadge&&<div style={{background:"#1a1400",border:"2px solid #fbbf24",borderRadius:12,padding:14,textAlign:"center",marginBottom:14}}>
          <div style={{fontSize:32}}>{newBadge.emoji}</div>
          <div style={{color:"#fbbf24",fontWeight:700}}>ได้รับ Badge ใหม่!</div>
          <div style={{color:"#e2e8f0",fontSize:13}}>{newBadge.name}</div>
        </div>}

        {earnedBadges.length > 0 && (
          <div style={{background:"#112240",border:"1px solid #1e3a5f",borderRadius:10,padding:12,marginBottom:14}}>
            <div style={{color:"#64748b",fontSize:11,marginBottom:8,fontWeight:700}}>🎖️ BADGE ทั้งหมด</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {BADGES.map(b=>(
                <div key={b.id} style={{textAlign:"center",opacity:earnedBadges.includes(b.id)?1:0.2,minWidth:52}}>
                  <div style={{fontSize:20}}>{b.emoji}</div>
                  <div style={{fontSize:9,color:"#64748b"}}>{b.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{display:"flex",gap:10}}>
          <button style={{...p.nextBtn,flex:1,background:"#1e293b",border:"1px solid #334155"}} onClick={()=>setScreen("select")}>เปลี่ยนสาขา</button>
          <button style={{...p.nextBtn,flex:2}} onClick={()=>startRound(branch)}>🔄 เล่นรอบ {rounds+1}</button>
        </div>
      </div>
    );
  }
  return null;
}

// ─── STYLES ──────────────────────────────────────────────────────────────────
const p = {
  page:{minHeight:"100vh",background:"#060e1a",padding:"14px",fontFamily:"'Kanit','Sarabun',sans-serif",color:"#e2e8f0",maxWidth:680,margin:"0 auto"},
  topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18,paddingBottom:12,borderBottom:"1px solid #1e3a5f"},
  logo:{display:"flex",alignItems:"center",gap:10},
  logoT:{color:"#60a5fa",fontWeight:700,fontSize:20,letterSpacing:1},
  logoS:{color:"#475569",fontSize:11},
  roundPill:{background:"#1e3a5f",color:"#93c5fd",borderRadius:20,padding:"4px 14px",fontSize:12,fontWeight:700},
  sectionTitle:{color:"#f1f5f9",fontSize:17,fontWeight:700,marginBottom:4},
  sectionSub:{color:"#475569",fontSize:12,marginBottom:16},
  branchGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:10,marginBottom:20},
  branchCard:{border:"1.5px solid",borderRadius:14,padding:"14px 8px",cursor:"pointer",textAlign:"center",transition:"transform .15s",background:"transparent"},
  robotWrap:{display:"flex",justifyContent:"center",marginBottom:6},
  robotName:{fontSize:12,fontWeight:700,marginBottom:2},
  branchNameTxt:{color:"#e2e8f0",fontSize:13,fontWeight:600,marginBottom:8},
  selectPill:{display:"inline-block",borderRadius:10,padding:"2px 12px",fontSize:11,fontWeight:700},
  badgeBox:{background:"#0d1f35",border:"1px solid #1e3a5f",borderRadius:12,padding:14},
  badgeTitle:{color:"#64748b",fontSize:11,fontWeight:700,marginBottom:8,letterSpacing:1},
  badgeRow:{display:"flex",flexWrap:"wrap",gap:8},
  badgeItem:{textAlign:"center",minWidth:56},
  badgeLbl:{fontSize:9,color:"#64748b",marginTop:2,lineHeight:1.2},
  statusBar:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"#0d1f35",borderRadius:12,padding:"10px 14px",marginBottom:14,border:"1px solid #1e3a5f"},
  lvBadge:{fontSize:10,fontWeight:700,padding:"1px 7px",borderRadius:8,marginLeft:4},
  barRow:{display:"flex",alignItems:"center",gap:6,marginTop:3},
  barLbl:{color:"#475569",fontSize:10,width:28},
  barBg:{flex:1,height:6,background:"#1e293b",borderRadius:3,overflow:"hidden",minWidth:60},
  barFill:{height:"100%",borderRadius:3,transition:"width .3s"},
  barNum:{color:"#64748b",fontSize:10,width:28,textAlign:"right"},
  mapLabel:{color:"#475569",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:8},
  mapBox:{position:"relative",background:"#040c18",border:"1px solid #1e3a5f",borderRadius:14,height:248,overflow:"hidden",marginBottom:10},
  zoneBox:{position:"absolute",width:78,border:"1.5px solid",borderRadius:10,textAlign:"center",padding:"8px 4px",transition:"all .2s"},
  doneDot:{position:"absolute",top:-8,right:-8,background:"#22c55e",color:"#fff",borderRadius:"50%",width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10},
  lockDot:{position:"absolute",top:-8,right:-8,background:"#1e293b",borderRadius:"50%",width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10},
  progStrip:{display:"flex",gap:6,marginBottom:12},
  progCell:{flex:1,border:"1px solid",borderRadius:8,padding:"7px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:2},
  backBtnSm:{background:"none",border:"none",color:"#475569",cursor:"pointer",fontSize:12,padding:0},
  zoneHdr:{display:"flex",alignItems:"center",gap:12,border:"1.5px solid",borderRadius:12,padding:"10px 14px",marginBottom:14},
  qBox:{background:"#040c18",border:"1px solid #1e3a5f",borderRadius:12,padding:16,marginBottom:12,borderLeft:"4px solid #3b82f6"},
  qLbl:{color:"#475569",fontSize:10,fontWeight:700,letterSpacing:1,marginBottom:6},
  qTxt:{color:"#e2e8f0",fontSize:15,lineHeight:1.7},
  choiceBtn:{width:"100%",textAlign:"left",padding:"11px 14px",borderRadius:10,border:"1.5px solid",cursor:"pointer",fontSize:13,lineHeight:1.5,transition:"all .12s",fontFamily:"inherit"},
  expBox:{background:"#040c18",border:"1.5px solid",borderRadius:12,padding:14},
  nextBtn:{width:"100%",padding:"12px 0",borderRadius:10,background:"#3b82f6",color:"#fff",border:"none",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"},
  center:{textAlign:"center",padding:"44px 0"},
  spin:{width:34,height:34,border:"3px solid #1e293b",borderTop:"3px solid #3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto"},
  retryBtn:{padding:"10px 24px",borderRadius:8,background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer",fontFamily:"inherit"},
  uploadBtn:{padding:"10px 14px",borderRadius:8,background:"#1e293b",color:"#a78bfa",border:"1.5px solid #8b5cf6",cursor:"pointer",fontSize:13,fontFamily:"inherit",textAlign:"left"},
};
