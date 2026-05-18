import {useState,useRef,useEffect,useCallback} from "react";
import {Home,Video,ClipboardList,Bot,BookOpen,Wrench,FileText,Send,Copy,Check,ExternalLink,Play,ArrowLeft,Clock,ChevronDown,ChevronUp,Plus,Sparkles,Mic,Image,Zap,CheckSquare,MessageSquare,Circle,X,Bell,Users,Hash,Smile,Paperclip,ShoppingBag,Search,Star,Filter,Globe,TrendingUp,AlertTriangle,Package,User,Award,BarChart2,Target,Activity,Edit2,Shield,LogOut,Film,Cpu,ChevronRight,Instagram,Youtube} from "lucide-react";

const LOGO_SRC   = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAAAOC0lEQVR42u2af2xTVRvHv7e92wpjZYy1c2RsHYGuGxsjEfZDUGaiiASIGEEQA2ZAFkSNmvgDDERR0MSABsJAQCOL0ZhBZnDGjMAkuCluA3VkKu3KpOvG5pCudWu79t77ff9405t1TtwY6vvjPslJeu8959xzPz3n+zznuVcAQGh206bTEGgANYAaQA2gZhpADaAGUAOomQZQA6gB1ABqpgHUAGoANYCaaQA1gBpADaBmGkANoAZQA/gfN2idDqIoQhCEf3wsArQvE/7eGSgIglpGMlMiZWgfkfND+7nR+cisu+OOO7B27VpMmjQJAKDX63/XZvA4B18b7ni4dqMxjrQIghB1rNPp/rDe0GuRY71eP2z9SBmuzdC+zp07R5LMyMgY8ZiGu/eN6o6ijK7B0EEMfYDBJT09nbNmzeKUKVOiBhwbG8vs7Gzm5eUxLi4uqo3FYuGsWbOYkpIS1X9aWhpnzpzJcePG0eVysaOjI+o++fn5UfcxmUwEQKPRyPz8fBqNRgKgwWDgrFmzaDabCYATJkxgcnKyOg6DwUCTyUSDwXDrAEYeorKykj09PWxvb+fly5e5c+fOKDCRWZSYmMjKykpGrK+vT627YsUKtra2qtd+/PFHTp8+nUajkdXV1ep5r9fLrVu3EgB37NjBYDBIknQ6nQyFQqypqaHZbObnn3+utvH5fCwtLaXVamVvby8bGhoYCARIkg6Hg5s3b6bX6yVJXrt2jXPnzuWRI0fo9Xo5d+5cAuCrr77K3t5e3nXXXX+4Ym4a4FtvvcXz58+zrq6OPT09DAQCTE5OVutEblZeXk6SPHPmDA8ePMhwOEySXL58OUOhEEmyvLycX3/9NUly586d3Lt3L0mypqaGhw8fpqIo7Ovr4yOPPKIC3bt3L+12O0lyz549PH78OEny+PHjfP/990mSdrud69evJ0n29vbywIEDvHz5MklSURQePnxYlYCKigp+8803JKnO3sgfMm3atJEu85tb+yUlJSTJxx57jIIgMCYmhgAYExPDK1eu0OPxUBRFAuCFCxcYDAb5wQcfqMAA8MEHH2QgEGB5eTlbW1vZ3d2t9t/a2kqPx8OPP/6YsizziSeeIABu2rSJiqJw9+7dDAQCtNvtBEBRFBkKhdjS0sI33niDiqJw9erVBMAtW7ZQlmW+8sorBMAHHniAiqLw2LFj7Orq4pUrV6jT6SgIgnrfyBK+kUQBoG608ZdOp4Ner8eXX36Jzs5OlJWVgSRkWf63RyJRUFAAi8WC9PR07NmzB7m5uXC73UhISABJnDx5EqIo4osvvoDNZsO2bdtQXFwMq9UKq9WK8vJyWCwWdHR0YOLEidDpdGhsbIQoipgxYwYEQUA4HIbBYEBtbS0AIDU1FTExMXC5XEhNTYUgCGhuboYoikhPT4/qY9q0aRAEAX19fTCZTHA4HFAUBZMnT0ZGRgYcDgeCwSAEQQB54yhPHA1ARVH+3UgUIUkSDh48iB07diA9PR0ul0s9bzAYsGvXLpSWlqptr127BrPZDEEQ0N7eDkmS4PF44PF4AABWqxXbt2/HmjVr1DbXr19HSkoKFEVR2+Tm5iIUCiEuLg4AMGXKFJSVlSErKwsk0d7eDpvNhlAoBLfbDUmSkJOTAwBwuVyQJAkzZ84EAEiSBJ1Oh59++gkAkJGRAVEU1WO9Xg9Jkm5dGDPU/aelpZEkX3rpJfV8QUGBKtQVFRXcvHkzSfKzzz5jW1sbPR4Px40bR0EQaDAYKIoi7777blXs33nnHT777LMkyaqqKnZ3d9PlclGv11MQBP78889sa2vj0aNHOZy9/vrrdLvdvHTpkurxOzs72dfXx8TERAJgfX09Q6EQKyoqSJKbN28mAK5cuZIk+cILL6iy8Kcsbib6VhQFer0ebrcbtbW12Lhxo3p+3759MBqNWLduHdauXYtff/0VAODxeJCamgqn04lAIACSCAaDkCQJ5eXlMBgMWLFiBcrKytDf3w8A8Hq9SE5OhsPhgCzLMJlMSEtLg8vlgslkAgCsWrUKRUVFyM/PR3Z2Nk6cOIEpU6agpaVFXdq33XYbnE4nent7ERsbi+nTp6O7uxsTJ04EANjtdgiCAJvNBgDqDByJiTe7hYlE7Hv27EF1dTVyc3Phcrkwd+5cNDc3o6KiAgBQWFgIAOqyizxYYmIili1bhgkTJsBms6G+vh7Hjh2LaiPLMnQ6HZqbm1UYer0enZ2dyM3Nhd/vx7FjxyDLMoqKimC1WhEbGwtBEPDDDz8AACwWCwRBgN1uV5e82WxGY2MjzGYzSMJut4OkCtDpdEZJ1l+STIg4jZMnT8Lj8WDdunVITk6GIAgIhUIQRREmkwlLliyB3+8HSZDEhAkTIAgC1qxZg6NHj2Lbtm1QFAUkodfrkZaWhnvvvRderxcxMTEqRABYtmwZJElCV1cXzGYz+vv7ER8fj6SkJFRXV6OyshK33347ZFlWgU2bNg2yLKuzKj09HbIso6urC0lJSepzGI1GLFiwAP39/ejo6FAd4i3dyg0tEY1488032dPTw5SUFPb395Mku7u7KUkSSTIQCPChhx5SdcrtdquB75IlS9Q2brdbbdPR0cHnnntObXP16lX198qVK3nmzBn1vMfjIUlu376dhw4dIkkWFxdHxaRr164lAD755JMkyddee02NAa9fv67qdnNz85+GLlE7MwAvjyUbQRKtra3YsmULqqqqcODAAWRkZCAQCODQoUNoampCc3Mzdu/ejYaGBjUBUFNTg6effhq1tbVwOBywWCzQ6XR499134XQ60dLSgp07dyIlJQXjx49HS0sLPvzwQ/j9fuzduxeffPIJMjIykJycjKtXr+Ltt9/Grl27UFxcDK/Xi/feew9+vx+zZ8+G3+9HRUUFenp6kJ2dDVEUceTIEVRXV2POnDkIh8M4ffo08vLy0NjYiI8++gh6vX5EM3DM6Sy9Xg9ZlnHq1ClMnjwZBw4cQFxcHCRJQltbm+pwEhIS4PP5EBsbC1EU0dfXh5MnT0Kn041IawZbUlISBgYG0N/fP6JY7Ub9XL9+HQBQXFyM+vp67NixAy+//LIakv1lTmTwDIwI7uzZs7F161YEAgHIsoxQKISBgQFIkoSBgQHV84bDYXR1daGurg5+vz9qsKIoqnpJEjqdDrIsQxRFKIqCwsJCKIqCuLg4NDU1we/3R8WmkVRVRNsixxGdjfS/dOlSHDx4EM8//zza29uxb98+CIKAqqqqETuQMWtgJB40m82UJIknTpwYdR8RvcnOzqbNZrth2mz+/PnMy8ujXq9XN/9Wq5V5eXkj2nYN1u1IfDrYIlu90aS5xjQDI8tv2bJl0Ov1cDqdWLRoESRJgs/nQyAQQDAYRCgUQjgcRjAYhCzLavwX+ZfNZjMKCgpw5syZYcMlRVFgs9kQDodx8eJFlJSUoKmpCZMmTUJRURHOnTun1v2j5Ry5JkkSBEHA/v37ceHCBZSUlAAAzp49i/r6+lFLypg0MLJstm7dio0bN0JRFMiyjKtXryIYDOKXX35BT08POjs70dbWBp/Ph0uXLsHr9cLr9aoPtXjxYvT09KCpqSlKFnQ6HUgiPj4ehYWFOH36NBYsWIBLly6hq6sLCxcuRH9/P7766qvfyUok9IlIwR8BHW5CjFrGxrqMBUHgokWL+N133/H8+fNqLm1w2b9/P7/99ls+9dRTUXm2zMxMrl69OiqxOngpCoLAnJwcZmVlcf78+UxNTSUApqam8tFHH2V8fPyIMs+D026D64miSFEUR5L3u7XprKEP29jYqGpJa2srRVFkbGwsdTodN2zYEKU1Ea0DwMcff5yrVq2iIAgsKytjQkICzWYzU1JSOGfOHAJgWVkZ582bx4kTJ6rtNm3axPXr1xMAN2zYwMTERE6dOpWrV6+mKIqcM2cOFy9ezLi4OJaWlnLhwoVqyi02NvZWpPJvfi88dCkAQG9vb1TmRVEUtVy7dk29NjAwgEAgAACw2WxISkpCXV0dli5dCovFgjvvvBPz5s3DPffcA5/Ph5KSEnR0dKC+vh4+nw8AkJmZiZycHNTW1uK+++6DzWbD/fffj9LSUvh8PuTn5+Phhx+GwWDAli1bIMsyjEajul9OSEiIGvuYwrixBtIRLTl79iyMRiMuXryIZ555Rk0iRDbnHo8HPp8PL774Is6fPw8AKCoqgtPphN/vh91ux6effopwOAyPx4NAIIBQKISUlBScOnVKDUOMRiOWL1+Ouro6/Pbbb3C5XKiqqoLBYFC3eA6HA5WVlXC73UhKSkJNTQ18Pp+aShv8Z/9XvheOvFosLCyMcgDDCXthYSEaGhpAEpmZmZg0aRLGjRuH+vp6tY7FYkFiYiIkScL48ePR0NAwpgB7VI70Vn4tEPGaJH/nzfR6fVQiwmQyqVnfiPcjGfW+VlEUSJKEGTNmID4+HoqiwOl0wmq1qm3y8/MRExOD77//HpmZmepMGyoxwwX/t8r4d5aI05kxYwbT09P/NAAWRZH5+fnqa06LxcLp06cTAHNzc5mdna3WnT9//li86T/jhceSyRnti21BENSQIzExkQUFBeq1tLQ0ZmVljXhH8h/jhW/WBu9ERiIPEU2TZRmyLGPq1KlwuVxqQB/Jdv9d2nfLNfCvtMGgI4DC4TBiYmIQHx+PnJwcOBwOdZumfZ01Ai8eFxeHrKwsAMCVK1fQ29v7t8++/6nP2/4JeP81S/jPdkF/RWjyfzcD/ynTvpHWAGoANYAaQM00gBpADaAGUDMNoAZQA6gB1EwDqAHUAGoANdMAagA1gP8P9i8+vHSYpF+F7QAAAABJRU5ErkJggg==";
const AVATAR_SRC = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAA8ADwDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAQACAwUGBAf/xAArEAACAQMCBQMDBQAAAAAAAAABAgADBBESIQUGMVFxE0FhFCKhMjOBkbH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgME/8QAHREBAQACAgMBAAAAAAAAAAAAAAECEQMSBCEiMf/aAAwDAQACEQMRAD8A44IopCygiigCKKLEAGNMJggTYjSJIBDpgRAGHElKgAkkAD3M4avEVp1tKpqTONWYHTiAxlvfW9esKW6MTgauhPadrWzdoHIRBiTtRYe0YUMBtCr6i5k6ygBDFj8xMzL0JHgyuqey6uQ1QiigyWGAPfMaOXKn05JqYcnfbO0HLtvUr1DXNQkIxUAncbS9UVaQqu5OADpGst7THPKy6jp4sJZuxjLq0a1rMlclcfHXsRN1y9SpcT4Db1qoPq4KM/uxBxmZm8pV7rhy3D1GcMMvl9l+MTis+YeJ8OoJbW9xopJ0XQpxk59xLn1GOc61uK/B3XJpkOO3QyveyKsQyEHxJrXm76qm9QcOqqij9TVBue3SOo82UXTL2NxqBwdGGH9x7SwtAYQ/BhdoEYhD5MYzGbRC45bvhQuzQZf3TkNnoQD/ALNFUNUBgXCtjOTjfPaYa2Yi7olSQQ64I8zbl2qWu5OxI28zm5ZrLbr8fL51VAyta8PvFermmxAUNjJbvtM/kNUz0yZb8c+2qUXZdOr+TKZTggiaYfm2XLfempJWnwe2CjTlcnzNZy3aLa8FoZUaqo9Vs/PT8YmR4l9ttRQbKNvxPQKSCnSRFGFVQB4iof/Z";

/* ── THEME ─────────────────────────────────────────────── */
const THEMES={
  dark:{
    bg:"#08080f",side:"#0c0c1a",card:"#111122",card2:"#181830",
    brd:"#1e1e38",brdh:"#363660",
    txt:"#f0f0ff",sub:"#a0a0c8",muted:"#6060a0",
    gold:"#e09830",goldD:"#b87820",
    green:"#22c55e",red:"#f05060",blue:"#4466ff",mocha:"#c4a882",
    purp:"#9055ff",
    navBg:"#e0983022",navBrd:"#e09830",
  },
  light:{
    bg:"#f5f5f8",side:"#ffffff",card:"#ffffff",card2:"#ededf5",
    brd:"#d0d0e0",brdh:"#a0a0c0",
    txt:"#0d0d1f",sub:"#3a3a5a",muted:"#7070a0",
    gold:"#9a5f00",goldD:"#7a4800",
    green:"#15803d",red:"#cc1a2e",blue:"#1a33bb",mocha:"#7a5530",
    purp:"#5522bb",
    navBg:"#9a5f0018",navBrd:"#9a5f00",
  },
};
const C=Object.assign({},THEMES.dark);

const css=`
  *{box-sizing:border-box;margin:0;padding:0;}
  ::-webkit-scrollbar{width:3px;}
  ::-webkit-scrollbar-thumb{background:${C.brd};border-radius:3px;}
  input:focus,textarea:focus{outline:none;border-color:${C.gold}!important;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  @keyframes scaleIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
  @keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}
  @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
  @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
  @keyframes slideLeft{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
  @keyframes glow{0%,100%{box-shadow:0 0 8px ${C.gold}30}50%{box-shadow:0 0 20px ${C.gold}60}}
  .fu{animation:fadeUp .35s cubic-bezier(.22,.68,0,1.2) both;}
  .fi{animation:fadeIn .25s ease both;}
  .sc{animation:scaleIn .3s cubic-bezier(.22,.68,0,1.2) both;}
  .sl{animation:slideLeft .3s ease both;}
  .d1{animation-delay:.05s}.d2{animation-delay:.10s}.d3{animation-delay:.15s}.d4{animation-delay:.20s}.d5{animation-delay:.25s}
  .hg:hover{border-color:${C.gold}!important;transform:translateY(-2px);transition:all .2s!important;}
  .hc:hover{border-color:${C.brdh}!important;transform:translateY(-1px);transition:all .2s!important;}
  .ni:hover{background:${C.card2}!important;}
`;

/* ── COPY UTIL ──────────────────────────────────────────── */
function copyText(text){
  try{
    if(navigator.clipboard&&window.isSecureContext){
      navigator.clipboard.writeText(text);return;
    }
  }catch(e){}
  const el=document.createElement("textarea");
  el.value=text;el.style.position="fixed";el.style.opacity="0";
  document.body.appendChild(el);el.focus();el.select();
  try{document.execCommand("copy");}catch(e){}
  document.body.removeChild(el);
}

/* ── DATA ───────────────────────────────────────────────── */
const VIDS=[
  {id:1,title:"מציאת מוצר מנצח - שיטת ה-3 שלבים",   dur:"24:15",cat:"מוצרים",  bg:"#0f1e3a",cohorts:["M1","M2"]},
  {id:2,title:"הגדרת קמפיין CBO נכון מאפס",           dur:"31:40",cat:"פרסום",   bg:"#1e0f3a",cohorts:["M1","M2"]},
  {id:3,title:"בניית עמוד מוצר שממיר",                dur:"18:55",cat:"חנות",    bg:"#0f3a1e",cohorts:["M1","M2"]},
  {id:4,title:"סקייל קמפיין - מתי ואיך",              dur:"12:20",cat:"פרסום",   bg:"#3a1e0f",cohorts:["M1","M2"]},
  {id:5,title:"ספקים: AliExpress vs CJ vs Zendrop",   dur:"22:10",cat:"ספקים",   bg:"#1e0f2a",cohorts:["M1","M2"]},
  {id:6,title:"ניתוח מדדים: ROAS CPA CTR",            dur:"28:05",cat:"אנליטיקס",bg:"#0f2a2a",cohorts:["M1","M2"]},
  {id:7,title:"קריאייטיב שמוכר ב-2025",               dur:"35:00",cat:"קריאייטיב",bg:"#2a200f",cohorts:["M1","M2"]},
  {id:8,title:"שופיפיי: הגדרות בסיס חשובות",         dur:"19:30",cat:"חנות",    bg:"#2a0f0f",cohorts:["M1","M2"]},
];

const PROMPTS=[
  /* ── פרסום ── */
  {id:1,cat:"פרסום",badge:"ממיר",title:"5 Hooks - כאב + סקרנות",
   txt:`כתוב 5 Hooks שונים ל-[מוצר] בפורמולת כאב + סקרנות. לכל Hook:
- מקסימום 2 שורות
- פותח עם מצב שלילי שהלקוח מכיר
- מסתיים עם גורם סקרנות שגורם לעצור

דוגמה לסגנון:
"בזבזתי 3 שנים וכסף על [בעיה] - עד שגיליתי שיש פתרון שלוקח 10 דקות."

5 הוקים שכוללים:
1. סקרנות + כאב
2. מספר ספציפי + הפתעה
3. שאלה ישירה שמנקרת
4. תוצאה מפתיעה שלא ציפו לה
5. קנטרן רגשי

שפה: עברית אנושית. לא שיווקית. כאילו חבר מספר.`},

  {id:2,cat:"פרסום",badge:"ממיר",title:"מודעת AIDA מלאה",
   txt:`כתוב מודעת פייסבוק/אינסטגרם מלאה ל-[מוצר] לפי AIDA:

**A - Attention (שורה 1-2):**
Hook שעוצר סקרול. לא שאלה. לא "היי". משפט עובדה מפתיעה או סיטואציה שהלקוח חי בה.

**I - Interest (שורות 3-6):**
הצג את הבעיה בשפת הלקוח. ספר על הכאב שהם כבר מכירים. אל תציג את המוצר עדיין.

**D - Desire (שורות 7-12):**
המוצר כפתרון. 3 תועלות ספציפיות עם תוצאות מדידות (שניות, קמ"ש, ₪, ימים).
כלול הוכחה: לקוח אמיתי / מספרים / השוואה.

**A - Action (שורה 13-15):**
CTA אחד בלבד + דחיפות אמיתית (לא מזויפת).

מגבלות: עד 180 מילים. שפה יומיומית ואנושית.`},

  {id:3,cat:"פרסום",badge:"מתקדם",title:"VSL Script 60 שניות",
   txt:`כתוב תסריט VSL של 60 שניות ל-[מוצר].

⏱ 0-5 שניות | HOOK:
"אם אתה [תיאור לקוח ספציפי] - צפה עד הסוף."
(לא כולל כולם. ממוקד לאדם אחד)

⏱ 5-15 שניות | הגברת הכאב:
תאר מה החיים נראים עם הבעיה. פרטים. תמונה ברורה.

⏱ 15-30 שניות | הפתרון:
הצג את המוצר. 1 משפט מה זה. 2 משפטים מה זה עושה.
"הראה, אל תספר" - תאר מה הלקוח רואה במסך.

⏱ 30-45 שניות | הוכחה:
תוצאה ספציפית: "[X] לקוחות [תוצאה] תוך [זמן]"
ציטוט קצר של לקוח אמיתי בסגנון אנושי.

⏱ 45-55 שניות | ביטול התנגדות:
"אני יודע מה אתה חושב - [התנגדות]. האמת היא ש..."

⏱ 55-60 שניות | CTA + דחיפות:
מה ללחוץ + למה עכשיו (לא "מבצע לזמן מוגבל").

שפה: דיבורית, אמיתית, ללא ז'רגון.`},

  {id:4,cat:"פרסום",badge:"ממיר",title:"5 התנגדויות + תשובות",
   txt:`הלקוח מתעניין ב-[מוצר] אבל לא מחליט. כתוב תשובה ממירה לכל התנגדות:

1️⃣ "יקר לי" - אל תוריד מחיר. הצדק את הערך: "מה עלה לך עד עכשיו לא לפתור את זה?"

2️⃣ "לא בטוח שעובד לי" - הוכחה ספציפית + ערבות החזר בלי שאלות.

3️⃣ "אני צריך לחשוב" - גלה מה באמת מעכב: "מה הדבר האחד שגורם לך להתלבט?"

4️⃣ "ראיתי דברים דומים" - הצג את ה-USP: מה אחד שונה ולמה זה חשוב.

5️⃣ "אין לי זמן עכשיו" - הכן להחלטה עכשיו: "לוקח פחות מ-3 דקות להזמין. תוצאה ראשונה תוך [זמן]."

לכל תשובה: 2-3 משפטים בלבד. טון אנושי ואמפתי, לא מכירתי.`},

  {id:5,cat:"פרסום",badge:"",title:"Facebook Ad - Native Style",
   txt:`כתוב מודעה בסגנון Native ל-[מוצר] - נראית כמו פוסט אורגני, לא כמו פרסומת.

הסגנון:
- כותרת: טיפ / עובדה / שאלה שמישהו היה כותב בפייסבוק
- גוף: כמו פוסט של חבר שמשתף גילוי. לא "מוצר", לא "מבצע".
- ה-CTA צריך להיות טבעי: "שמרתי את הלינק כאן למי שרוצה"

דוגמה לפתיחה:
"לא האמנתי שדבר כל כך קטן יכול לשנות [תוצאה] - אבל אחרי שבוע..."

כלול: 3 גרסאות שונות של Hook לבדיקת A/B.`},

  {id:6,cat:"אמייל",badge:"ממיר",title:"Abandoned Cart - 3 מיילים",
   txt:`בנה רצף Abandoned Cart ל-[מוצר] - 3 מיילים בהפרשי זמן:

📧 מייל 1 | שעה אחרי עזיבה
נושא: "שכחת משהו, [שם]?"
גוף: תמונת מוצר + 1 משפט על מה מפסידים + CTA ישיר.
ללא הנחה.

📧 מייל 2 | 24 שעות
נושא: "שאלה אחת לפני שאתה הולך..."
גוף: טפל בהתנגדות העיקרית (מחיר? ספק?) + ביקורת אחת אמיתית.

📧 מייל 3 | 48 שעות
נושא: "שמרנו לך 10% - פג מחר בחצות"
גוף: קוד הנחה + Countdown + 3 נקודות למה עכשיו.

כללי כתיבה:
- שפה כמו חבר, לא מותג
- 1 CTA לכל מייל
- מובייל פריינדלי`},

  {id:7,cat:"חנות",badge:"מתקדם",title:"Product Page מלא",
   txt:`כתוב את כל התוכן לעמוד מוצר ל-[מוצר]:

🔷 כותרת ראשית: (מבוסס תוצאה, לא תיאור)
"[פעולה/תוצאה] ב-[זמן] - [ביטול ספק]"

🔷 כותרת משנה: 1 משפט - איך זה עובד, ספציפי

🔷 3 Bullet Points (פורמט: תוצאה בזכות מאפיין):
• [תוצאה מדידה] בזכות [מאפיין ספציפי]
• מקסימום 8 מילים

🔷 Trust Line:
משלוח חינם | החזר 30 יום | X לקוחות מרוצים

🔷 תיאור ארוך (200-300 מילים):
1. הבעיה (3-4 משפטים בשפת הלקוח)
2. למה הפתרונות הישנים לא עובדים
3. המוצר כפתרון - 3 שלבים פשוטים
4. הוכחה: מספרים/ציטוט/השוואה
5. ערבות + CTA

🔷 FAQ (5 שאלות נפוצות + תשובות)`},

  /* ── מוצרים ── */
  {id:8,cat:"מוצרים",badge:"",title:"ניתוח מוצר - ציון 7 קריטריונים",
   txt:`נתח את [מוצר] לפי 7 קריטריונים. לכל אחד: ציון 0-10 + הסבר קצר.

1. WOW Factor - האם גורם לאנשים לעצור ולשתף? מה הרגע שמפתיע?
2. עוצמת הבעיה - כמה הכאב מוחשי ויומיומי? האם כואב להם כרגע?
3. ויזואליות - האם קל להדגים בוידאו 30 שניות? Before/After?
4. Impulse Buy - האם קונים רגשית ומיידית, או חושבים?
5. תחרות - כמה מוכרים פעילים ב-Meta Ads Library? פחות = ציון גבוה
6. מרג'ין 3X - האם אפשר למכור פי 3-4 ממחיר הקנייה?
7. ויראלי - האם אנשים ישלחו לחברים? למה?

📊 ציון כולל: X/70
✅ המלצה: בדוק עמוק / פוטנציאל גבוה / לדלג

הוסף: מחיר קנייה משוער ב-AliExpress, מחיר מכירה מומלץ, קהל יעד ספציפי.`},

  {id:9,cat:"מוצרים",badge:"",title:"USP - מה מבדיל אותי",
   txt:`עזור לי להגדיר USP (Unique Selling Point) ל-[מוצר] בשוק תחרותי.

פרטים על המוצר: [פרטים]
מחיר הקנייה: $[X]
מחיר מכירה מתוכנן: $[Y]
מתחרים עיקריים: [X, Y, Z]

בנה USP לפי 4 צירים:
1. 🚀 מהירות: "היחיד שמגיע תוך [X] ימים"
2. 💎 איכות: "בלי [חיסרון נפוץ]"
3. 🎁 בונוס: "כולל [משהו שאחרים לא נותנים]"
4. 🔒 ביטחון: "החזר מלא אם לא [תוצאה]"

בחר את ה-USP החזק ביותר ונמק. כתוב את ה-USP הסופי במשפט 1.`},

  {id:10,cat:"מוצרים",badge:"",title:"Product Description לשופיפיי",
   txt:`כתוב תיאור מוצר לשופיפיי ל-[מוצר] שממיר:

📌 מבנה חובה:

פסקה 1 - הבעיה (40-60 מילים):
תאר את הכאב. "כמה פעמים נמצאת במצב של [בעיה]? אתה לא לבד."

פסקה 2 - הפתרון (40-60 מילים):
הצג את המוצר. 1 משפט מה זה. 2 משפטים מה זה עושה ולמה.

5 תועלות (Bullets):
✅ [תוצאה ספציפית] - לא "איכות גבוהה"
✅ כל Bullet: תוצאה + מאפיין + זמן/מספר

פסקה 3 - ביטול ספק (20-30 מילים):
"אם לא ראית תוצאות תוך X ימים - מחזירים לך 100%"

CTA: "הוסף לעגלה - משלוח חינם עד [תאריך]"`},

  /* ── אמייל ── */
  {id:11,cat:"אמייל",badge:"",title:"Welcome Flow - 3 מיילים",
   txt:`בנה Welcome Email Flow ל-[מוצר/חנות]:

📧 מייל 1 | מיידי אחרי הרשמה - "ברוך הבא"
נושא: "ברוך הבא [שם] - הנה מה שמחכה לך"
תוכן: סיפור קצר + ה-USP + מה הם יקבלו + 1 CTA

📧 מייל 2 | 2 ימים אחרי - "הכירו את המוצר"
נושא: "לא ידעת שזה יכול לעשות את זה..."
תוכן: Feature שרוב הלקוחות לא מכירים + שאלה שמעודדת תגובה

📧 מייל 3 | 5 ימים אחרי - "הצעה בלעדית"
נושא: "רק למנויים: 15% הנחה לשבוע אחד"
תוכן: הנחה + 2-3 ביקורות + Countdown + CTA

טון: חבר שמדבר, לא מותג.`},

  /* ── חנות ── */
  {id:12,cat:"חנות",badge:"",title:"חנות Shopify - Checklist השקה",
   txt:`בדוק שהחנות שלי ב-Shopify מוכנה להשקה. עבור על כל סעיף:

🏗️ תשתית:
□ דומיין .com מחובר ועובד
□ SSL פעיל (https://)
□ PayPlus / שופיפיי פיימנטס מחובר ואומת
□ מדיניות החזרה + משלוח + פרטיות מלאה

📦 מוצר:
□ תמונות: מינימום 5, לפחות 1 לייפסטייל
□ כותרת מבוססת תוצאה
□ תיאור מלא + Bullets + FAQ
□ מחיר: פי 3+ ממחיר קנייה

⚡ ביצועים:
□ Mobile: כל כפתור CTA גלוי ללא גלילה
□ מהירות טעינה: מתחת ל-3 שניות
□ Facebook Pixel מותקן ופעיל
□ Abandoned Cart Flow ב-Klaviyo מוכן

🔒 אמון:
□ Trust Badges (משלוח חינם / החזר / מאובטח)
□ ביקורות (לפחות 10 לפני השקה)
□ לינק לוואטסאפ לשאלות

ציין מה חסר ואיך לתקן.`},

  {id:13,cat:"חנות",badge:"",title:"Upsell Funnel מלא",
   txt:`בנה Upsell Funnel מלא ל-[מוצר] עיקרי:

🛒 שלב 1 | עמוד מוצר:
Cross-sell: מוצר משלים שנמכר ב-30% פחות.
Bundle: 2 יחידות + X = Y% הנחה.

🛒 שלב 2 | לפני קופה (Pre-Purchase Upsell):
הצע שדרוג לחבילה גדולה יותר.
טקסט: "לקוחות שקנו X לקחו גם Y - חסוך [סכום] עכשיו"

🛒 שלב 3 | קופה:
Order Bump: מוצר קטן (מחיר $5-15) עם צ'קבוקס.

🛒 שלב 4 | אחרי קנייה (Post-Purchase):
One-Click Upsell: עוד אחד ב-40% הנחה.
ללא הכנסת פרטים מחדש.

מטרה: הגדלת AOV ב-30-50%.
כתוב את הטקסט הספציפי לכל שלב.`},
];

const CREATIVE_PROMPTS=[
  {id:20,cat:"Midjourney",title:"Before & After ריאליסטי",
   txt:`Split image product ad, two panels:
LEFT panel: [person, age/gender] struggling with [problem], tired expression, dim lighting, messy background, candid photo
RIGHT panel: SAME person smiling, using [product], bright natural window light, clean space, authentic reaction

Style: photorealistic, candid, no text overlay, no logo, shot on Canon EOS R5, 85mm lens --ar 16:9 --style raw --q 2`},

  {id:21,cat:"Midjourney",title:"Lifestyle Shot - מוכר",
   txt:`Authentic lifestyle product photography, [age] year old [gender] casually using [product] in [setting: home kitchen/living room/gym/outdoor], golden hour lighting, shallow depth of field, genuine candid moment, NOT posed, background slightly blurred, warm tones

The person looks HAPPY and NATURAL, not like a model
Shot on iPhone 15 Pro, unfiltered, slightly grainy for authenticity --ar 4:5 --style raw`},

  {id:22,cat:"Midjourney",title:"Product Hero Shot",
   txt:`Professional product photography of [product], centered on pure white background, studio lighting with soft shadows, 3/4 angle view, hyper-detailed surface texture, photorealistic rendering

Add: subtle gradient shadow beneath product, slight reflection on surface
Style: Apple product photography aesthetic, minimal, premium --ar 1:1 --q 2`},

  {id:23,cat:"Midjourney",title:"UGC Style - TikTok",
   txt:`Vertical video thumbnail, authentic UGC style, real person [age, gender] holding [product] close to camera, selfie angle, ring light reflection in eyes, genuine surprised/happy expression, bedroom or bathroom background

NOT professional. Looks like real customer review video.
Text overlay space at bottom: leave 20% blank --ar 9:16 --style raw`},

  {id:24,cat:"Higgsfield",title:"Product Demo - 30 שניות",
   txt:`Create a 30-second product demonstration video for [product].

Scene 1 (0-3s): Close-up of the problem - [describe problem visually]
Scene 2 (3-10s): Person discovering the product, unboxing or first use
Scene 3 (10-22s): Product in action - show the KEY benefit in real time, from multiple angles
Scene 4 (22-28s): Result - person reaction, before/after comparison or end state
Scene 5 (28-30s): Product centered on screen, clean background

Style: Warm, authentic. Natural lighting. No voiceover needed - let visuals tell the story.
Camera: handheld, slightly unstable for authenticity. No drone shots.`},

  {id:25,cat:"Higgsfield",title:"Testimonial Video - UGC",
   txt:`Generate a UGC-style testimonial video for [product].

Character: [age] year old [gender], casual clothes, at home
Setting: Kitchen table or bedroom, natural light from window

Script:
0-3s: "I never thought [product] would actually work for me..."
3-12s: Show the problem they had (act it out visually)
12-22s: First time using the product - genuine reaction
22-28s: Result: "After [X days], I noticed [specific result]"
28-30s: Holding product to camera, smiling

Tone: Completely genuine. Slightly nervous. Real person, not actor.`},

  {id:26,cat:"Higgsfield",title:"Nano Banana - תמונת מוצר 4K",
   txt:`Ultra-high quality product photography, 4K resolution:
Subject: [describe product exactly - shape, color, material]
Background: [Pure white / Gradient beige / Soft gray gradient]
Lighting: Studio three-point lighting, no harsh shadows
Angle: [Front / 3/4 / Top-down]
Details: Show texture clearly, any logos or text must be readable
Mood: Premium, trustworthy, clean

Additional context: This is for an e-commerce dropshipping product page.
Final image should look like it belongs on Amazon or Apple.com.`},

  {id:27,cat:"ChatGPT",title:"קריאייטיב 5 רעיונות סרטון",
   txt:`אני מוכר [מוצר] ב-[פלטפורמה]. קהל היעד: [גיל, מגדר, בעיה].
מחיר מכירה: $[X]. USP: [מה מייחד אותי].

תן לי 5 רעיונות לסרטוני קריאייטיב שונים לחלוטין. לכל רעיון:

📹 שם הסגנון: (UGC / Comparison / Tutorial / POV / Emotional)
🎬 תיאור הסצנה (3-4 משפטים)
🎤 Hook (משפט פתיחה, 5 שניות)
⏱ אורך מומלץ
🎯 קהל שמתחבר הכי חזק לסגנון זה

בסוף: מהם ה-2 שהייתי מפרסם ראשון ולמה?`},

  {id:28,cat:"ChatGPT",title:"ניתוח קמפיין Meta - מה לשפר",
   txt:`יש לי קמפיין Meta Ads ל-[מוצר] עם התוצאות הבאות:
CTR: [%] | CPC: $[X] | CPA: $[X] | ROAS: [X] | CPM: $[X]
תקציב יומי: $[X] | ימי ריצה: [X] | קהל: [Broad/LAL/Interest]

נתח את הנתונים ואמור לי:
1. מה לא עובד ולמה (CTR? קריאייטיב? קהל? Landing page?)
2. מה הפעולה הראשונה שצריך לעשות עכשיו
3. האם להגדיל תקציב, לשנות קריאייטיב, או לעצור ולבדוק
4. מה ה-Benchmark הנורמלי לנישת [נישה]
5. 3 שינויים קונקרטיים לשבוע הבא

תן תשובה ספציפית, לא כללית.`},
];

const GUIDES=[
  {id:1, stage:1, cat:"עסקי", level:"מתחיל", time:"10 דק'",
   title:"פתיחת עוסק בישראל",
   pdf:"guide_01_model.pdf",
   steps:["היכנסו ל-gov.il → שירותים לעסק → רישום עוסק","בחרו סוג: עוסק פטור (מתחת ל-120K ש'ח/שנה) / עוסק מורשה","מלאו פרטים: שם, ת.ז, כתובת, ענף עסקי (522900 - מסחר מקוון)","קבלו אישור בתוך 1-3 ימי עסקים","פתחו חשבון בנק עסקי נפרד","הירשמו ל-PayPlus עם פרטי העוסק"]},
  {id:2, stage:1, cat:"מחקר", level:"מתחיל", time:"15 דק'",
   title:"מחקר נישה ו-ICP",
   pdf:"guide_02_niche.pdf",
   steps:["רשמו 10 רעיונות לנישות ב-Google Sheets","לכל נישה: פתחו FB Ads Library וחפשו מוצרים פעילים","ספרו מתחרים: 3-10 = זהב | מתחת ל-3 = עדיין לא שוק | מעל 15 = רווי","בדקו Google Trends: האם הגרף עולה?","בחרו נישה אחת סופית ובנו ICP: גיל, מגדר, מדינה, כאב, ניסיון קודם"]},
  {id:3, stage:2, cat:"מוצרים", level:"מתחיל", time:"20 דק'",
   title:"מחקר ובחירת מוצר",
   pdf:"guide_02_niche.pdf",
   steps:["פתחו טבלת ניקוד ב-Google Sheets (WOW Factor, ויראליות, כאב, מרג'ין, תחרות)","סרקו Minea / FB Ads Library / TikTok לפחות 20 מוצרים","לכל מוצר: ציינו 0-10 בכל קריטריון (מינימום להמשך: 50/70)","בדקו מחיר קנייה מהספקית ומחיר מכירה פוטנציאלי (מינימום X3)","בחרו מוצר מנצח אחד והגדירו USP ברור"]},
  {id:4, stage:3, cat:"חנות", level:"מתחיל", time:"30 דק'",
   title:"הקמת חנות Shopify",
   pdf:"guide_03_shopify.pdf",
   steps:["פתחו חשבון Shopify בלינק האקדמיה (1$ ל-3 חודשים)","Settings → General: מטבע USD, אזור זמן ישראל","התקינו תבנית Lumin","רישום דומיין מ-GoDaddy (.com / .shop)","חיבור PayPlus: Settings → Payments → Add → PayPlus","הגדרת משלוח: Standard 6-12 ימים, Express 7-14 ימים","הוספת מוצר ראשון: Status: Draft עד שהחנות מוכנה"]},
  {id:5, stage:3, cat:"חנות", level:"מתחיל", time:"20 דק'",
   title:"חיבור הספקית לחנות",
   pdf:"guide_06_supplier.pdf",
   steps:["קבלו גישה לספקית האקדמיה בשלב זה","התקינו את אפליקציית הפולפילמנט המומלצת","חברו מוצר קיים מהספקית לחנות שלכם","בצעו הזמנת בדיקה ($1 לעצמכם) לוידוא התהליך","הגדירו: Tracking Number אוטומטי ללקוח דרך AfterShip"]},
  {id:6, stage:4, cat:"חנות", level:"ביניים", time:"45 דק'",
   title:"עמוד מוצר שממיר",
   pdf:"guide_08_product_page.pdf",
   steps:["כתיבת כותרת מבוססת תוצאה (לא שם מוצר)","3 Bullet Points: פורמט - תוצאה בזכות מאפיין + הוכחה","5+ תמונות: רקע לבן, Lifestyle, Before/After, Infographic","כתיבת תיאור מלא: בעיה → פתרון → תועלות → הוכחה","הוספת 10+ ביקורות עם תמונות (ייבוא דרך Loox)","הגדרת Urgency + Trust Badges","בדיקת Mobile View: CTA גלוי ללא גלילה","Vitals: Sticky Add to Cart + Upsell + Reviews"]},
  {id:7, stage:4, cat:"קריאייטיב", level:"ביניים", time:"60 דק'",
   title:"הכנת קריאייטיבים ראשונים",
   pdf:"guide_05_campaign.pdf",
   steps:["UGC ראשון: תסריט Hook→בעיה→פתרון→הוכחה→CTA (30-45 שנ')","Before/After: 3 תמונות לפחות + וידאו ב-Higgsfield אם אפשר","Native Ad: תוכן שנראה אורגני ולא כמו מודעה","הכינו 5 Hooks שונים (כאב / סקרנות / תוצאה)","וידוא טכני: 1080x1920 לסטורי/ריילס, 1080x1350 לפיד"]},
  {id:8, stage:5, cat:"פרסום", level:"מתחיל", time:"25 דק'",
   title:"הקמת חשבון מודעות Meta",
   pdf:"guide_04_meta_account.pdf",
   steps:["פתחו Business Manager ב-business.facebook.com","צרו Ad Account: Currency USD, Time Zone Israel","התקינו Facebook Pixel בחנות (Settings → Preferences)","הגדירו Events: ViewContent, AddToCart, Purchase","אמתו דומיין ב-Business Settings → Domains","בדיקה אחרונה: Events Manager → Test Events → כל Event מגיע?"]},
  {id:9, stage:6, cat:"פרסום", level:"ביניים", time:"30 דק'",
   title:"קמפיין Meta ראשון - ABO",
   pdf:"guide_05_campaign.pdf",
   steps:["Campaign: Objective = Sales (Purchase)","3 Ad Sets: Budget $10/יום כל אחד","קהל Broad: גיל+מגדר+מדינה בלבד (ללא Interests)","Attribution: 7-day click, 1-day view (חובה)","לכל Ad Set: 2-3 קריאייטיבים שונים (UGC / Before-After / Native)","הפעלה בבוקר ← המתנה 48-72 שעות ← ניתוח ראשון"]},
  {id:10, stage:6, cat:"אנליטיקס", level:"ביניים", time:"15 דק'",
   title:"קריאת מדדים ואופטימיזציה",
   pdf:"guide_07_metrics.pdf",
   steps:["Ads Manager → Campaign Level → בדקו ROAS, CTR, CPA","CTR מתחת 1% → החליפו קריאייטיב מיד","CPA מעל Breakeven → כבו Ad Set","ROAS מעל 2.5 × 5 ימים → מוכנים לסקייל","CPM מעל $50 → קהל רווי, הרחיבו","Frequency מעל 3 → הכניסו קהל חדש"]},
  {id:11, stage:7, cat:"שיווק", level:"מתקדם", time:"20 דק'",
   title:"הגדלת AOV - Upsell ו-Bundle",
   pdf:"guide_07_metrics.pdf",
   steps:["ReConvert: הגדירו Thank You Page עם Upsell מיידי","Bundle: חבילה של 2-3 יחידות במחיר מיוחד","Cross-sell: הציעו מוצר משלים בעמוד המוצר","Post-purchase: מייל תוך 24 שעות עם Offer","חישוב AOV נוכחי → מטרה: הגדלה ב-20% תוך חודש"]},
  {id:12, stage:8, cat:"אנליטיקס", level:"מתקדם", time:"20 דק'",
   title:"Google Sheets - לוח בקרה",
   pdf:"guide_07_metrics.pdf",
   steps:["פתחו Google Sheets עם 4 לשוניות: מכירות / מודעות / מוצרים / לקוחות","לשונית מודעות: ROAS, CPA, CTR, CPM, Spend, Revenue - יומי","לשונית מכירות: הכנסה, הוצאה, רווח נקי, AOV, LTV - שבועי","דוח שבועי: כל ראשון בשבוע - 20 דקות ניתוח","סקייל: ROAS 3+ × 5 ימים → הגדל תקציב 20%"]},
];

const TOOL_LOGOS={
  1:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiM2QjVDRTciLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NPC90ZXh0Pjwvc3ZnPg==",
  2:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMxODc3RjIiLz48cGF0aCBkPSJNMzYgMzJoNWwxLTZoLTZ2LTNjMC0yIDEtMyAzLTNoM3YtNXMtMS41LTAuNS00LTAuNWMtNSAwLTggMy04IDh2My41aC01VjMyaDV2MTZoNlYzMnoiIGZpbGw9IndoaXRlIi8+PC9zdmc+",
  3:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjZCMzUiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pjwvc3ZnPg==",
  4:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiM5NkJGNDgiLz48cGF0aCBkPSJNNDQgMThjMCAwLTEtMC41LTIuNS0wLjVzLTQgMS00IDFTMzYgMTUgMzIgMTVjLTcgMC0xMCA4LTExIDEybC00IDEuNUwxNiA1MGgyNGw0LTMyem0tMTItMWMyLjUgMCA0IDIuNSA0LjUgNUwzMCAyMy41QzMwLjUgMjAgMzIgMTcgMzIgMTd6bS0xIDVsLTUgMS41YzAuNS0zIDItNSAzLTUuNWwyIDR6bTYgMjJIMjJsLTMtMjAgOC0yLjVWMjRjMCAwLjggMC44IDEuNSAxLjUgMS41UzMwIDI0LjggMzAgMjR2LTIuNWw3LTIgMiAyMC41eiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=",
  5:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiM1QjRDRjUiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WPC90ZXh0Pjwvc3ZnPg==",
  6:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMxQTFBMUEiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjRkZENzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5LPC90ZXh0Pjwvc3ZnPg==",
  7:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwMEM0Q0MiLz48dGV4dCB4PSIzMiIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjMwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QzwvdGV4dD48L3N2Zz4=",
  8:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjJENTUiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DPC90ZXh0Pjwvc3ZnPg==",
  9:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjRENkQiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0Pjwvc3ZnPg==",
  10:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjZCOUQiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GPC90ZXh0Pjwvc3ZnPg==",
  11:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNFNjUxMDAiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DSjwvdGV4dD48L3N2Zz4=",
  12:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwMEJDRDQiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5aPC90ZXh0Pjwvc3ZnPg==",
  13:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzIgMTRjLTEwIDAtMTggOC0xOCAxOHM4IDE4IDE4IDE4YzkgMCAxNy03IDE3LTE4IDAtMS0wLjEtMi0wLjMtM0gzMnY2aDkuN0M0MCAzOSAzNi41IDQyIDMyIDQyYy01LjUgMC0xMC00LjUtMTAtMTBzNC41LTEwIDEwLTEwYzIuNSAwIDQuOCAwLjkgNi41IDIuNWw0LjUtNC41QzQwLjUgMTcgMzYuNSAxNCAzMiAxNHoiIGZpbGw9IiM0Mjg1RjQiLz48cGF0aCBkPSJNMTQgMzJjMC0yIDAuNC0zLjkgMS01LjZsLTYuNS01QzcgMjQuNCA2IDI4LjEgNiAzMnMxIDcuNiAyLjUgMTAuNmw2LjUtNUMxNC40IDM1LjkgMTQgMzQgMTQgMzJ6IiBmaWxsPSIjMzRBODUzIi8+PHBhdGggZD0iTTMyIDUwYzQgMCA3LjUtMS4zIDEwLjMtMy41bC02LjItNC44QzM0LjUgNDMgMzMuMyA0My41IDMyIDQzLjVjLTQuNSAwLTguMy0zLTkuNy03bC02LjUgNUMxOC41IDQ3IDI0LjggNTAgMzIgNTB6IiBmaWxsPSIjRkJCQzA1Ii8+PHBhdGggZD0iTTUwIDMyYzAtMS0wLjEtMi0wLjMtM0gzMnY2aDkuN2MtMC44IDItMi4yIDMuNy00IDQuN2w2LjIgNC44QzQ3LjUgNDEuOCA1MCAzNy4yIDUwIDMyeiIgZmlsbD0iI0VBNDMzNSIvPjwvc3ZnPg==",
  14:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjU3MjIiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EPC90ZXh0Pjwvc3ZnPg==",
  15:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiM3QzNBRUQiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SPC90ZXh0Pjwvc3ZnPg==",
  16:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNFQzQ4OTkiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5MPC90ZXh0Pjwvc3ZnPg==",
  17:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwRUE1RTkiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QPC90ZXh0Pjwvc3ZnPg==",
  18:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwRjUyQkEiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UPC90ZXh0Pjwvc3ZnPg==",
  19:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMxQjVFMjAiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pjwvc3ZnPg==",
  20:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMxRTNBNUYiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjMDBDNEZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UVzwvdGV4dD48L3N2Zz4=",
  21:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMxOTE5MTkiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5OPC90ZXh0Pjwvc3ZnPg==",
  22:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiM0QTE1NEIiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNCwxNCkgc2NhbGUoMC41NikiPjxwYXRoIGQ9Ik0yMiAxMmMwLTMuMy0yLjctNi02LTZzLTYgMi43LTYgNnY2aDZjMy4zIDAgNi0yLjcgNi02eiIgZmlsbD0iI0UwMUU1QSIvPjxwYXRoIGQ9Ik0yOCAxMmMwIDMuMyAyLjcgNiA2IDZoNlYxMmMwLTMuMy0yLjctNi02LTZzLTYgMi43LTYgNnoiIGZpbGw9IiMzNkM1RjAiLz48cGF0aCBkPSJNMzQgMzRjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDYtNi0yLjctNi02di02aDZ6IiBmaWxsPSIjMkVCNjdEIi8+PHBhdGggZD0iTTI4IDM0djZjMCAzLjMtMi43IDYtNiA2cy02LTIuNy02LTYgMi43LTYgNi02aDZ6IiBmaWxsPSIjRUNCMjJFIi8+PHBhdGggZD0iTTEwIDI4aDZ2NmgtNnoiIGZpbGw9IiNFMDFFNUEiLz48cGF0aCBkPSJNMTYgMjJoNnY2aC02eiIgZmlsbD0iIzM2QzVGMCIvPjxwYXRoIGQ9Ik0yOCAyMmg2djZoLTZ6IiBmaWxsPSIjMkVCNjdEIi8+PHBhdGggZD0iTTM0IDI4aDZ2NmgtNnoiIGZpbGw9IiNFQ0IyMkUiLz48L2c+PC9zdmc+",
  23:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwMDg5N0IiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CPC90ZXh0Pjwvc3ZnPg==",
  24:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzIgMTRjLTEwIDAtMTggOC0xOCAxOHM4IDE4IDE4IDE4YzkgMCAxNy03IDE3LTE4IDAtMS0wLjEtMi0wLjMtM0gzMnY2aDkuN0M0MCAzOSAzNi41IDQyIDMyIDQyYy01LjUgMC0xMC00LjUtMTAtMTBzNC41LTEwIDEwLTEwYzIuNSAwIDQuOCAwLjkgNi41IDIuNWw0LjUtNC41QzQwLjUgMTcgMzYuNSAxNCAzMiAxNHoiIGZpbGw9IiM0Mjg1RjQiLz48cGF0aCBkPSJNMTQgMzJjMC0yIDAuNC0zLjkgMS01LjZsLTYuNS01QzcgMjQuNCA2IDI4LjEgNiAzMnMxIDcuNiAyLjUgMTAuNmw2LjUtNUMxNC40IDM1LjkgMTQgMzQgMTQgMzJ6IiBmaWxsPSIjMzRBODUzIi8+PHBhdGggZD0iTTMyIDUwYzQgMCA3LjUtMS4zIDEwLjMtMy41bC02LjItNC44QzM0LjUgNDMgMzMuMyA0My41IDMyIDQzLjVjLTQuNSAwLTguMy0zLTkuNy03bC02LjUgNUMxOC41IDQ3IDI0LjggNTAgMzIgNTB6IiBmaWxsPSIjRkJCQzA1Ii8+PHBhdGggZD0iTTUwIDMyYzAtMS0wLjEtMi0wLjMtM0gzMnY2aDkuN2MtMC44IDItMi4yIDMuNy00IDQuN2w2LjIgNC44QzQ3LjUgNDEuOCA1MCAzNy4yIDUwIDMyeiIgZmlsbD0iI0VBNDMzNSIvPjwvc3ZnPg==",
  25:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMxMEEzN0YiLz48cGF0aCBkPSJNMzIgMTRjLTEuNSAwLTMgMC4zLTQuNCAwLjgtMy4zLTIuNC03LjgtMi0xMC42IDEuMS0yLjggMy4xLTMgNy42LTAuNiAxMC45QzE2LjEgMjggMTYgMjkuNSAxNiAzMWMwIDguOCA3LjIgMTYgMTYgMTZzMTYtNy4yIDE2LTE2YzAtMS41LTAuMi0zLTAuNi00LjMgMi4zLTMuNCAyLjItNy44LTAuNi0xMC45LTIuOC0zLjEtNy4zLTMuNS0xMC42LTEuMUMzNC45IDE0LjMgMzMuNSAxNCAzMiAxNHptMCA0YzEuNSAwIDMgMC40IDQuMiAxLjFsLTMuMyA1LjdjLTAuMy0wLjEtMC42LTAuMS0wLjktMC4xcy0wLjYgMC0wLjkgMC4xbC0zLjMtNS43QzI5IDE4LjQgMzAuNSAxOCAzMiAxOHptLTkuMSAyLjNsMy4zIDUuN2MtMC41IDAuNS0wLjkgMS4xLTEuMiAxLjdIMTguM2MwLjEtMi45IDEuNS01LjYgNC42LTcuNHptMTguMiAwYzMuMSAxLjggNC41IDQuNSA0LjYgNy40aC02LjdjLTAuMy0wLjYtMC43LTEuMi0xLjItMS43bDMuMy01Ljd6TTMyIDI4YzEuNyAwIDMgMS4zIDMgM3MtMS4zIDMtMyAzLTMtMS4zLTMtMyAxLjMtMyAzLTN6bS03LjYgNS4ybDMuMy01LjdjMC4zIDAuMSAwLjYgMC4xIDAuOSAwLjFoMS44bC0zLjMgNS43QzI1LjcgMzMuOCAyNC44IDMzLjYgMjQuNCAzMy4yem0xNCAwLjVjLTAuNCAwLjQtMS4zIDAuNi0xLjggMC4xbC0zLjMtNS43aDEuOGMwLjMgMCAwLjYgMCAwLjktMC4xbDMuMyA1LjdjLTAuMiAwLTAuNSAwLTAuOSAwek0yNiAzOC4yYzAuOCAwLjUgMS42IDAuOSAyLjQgMS4ybDAgNi42QzI1LjIgNDQuOCAyMyA0MS45IDIyIDM4LjVsNC0wLjN6bTEyIDBsNCAwLjNjLTEgMy40LTMuMiA2LjMtNi40IDcuNWwwLTYuNmMwLjgtMC4zIDEuNi0wLjcgMi40LTEuMnoiIGZpbGw9IndoaXRlIi8+PC9zdmc+",
  26:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjZCMzUiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMTwvdGV4dD48L3N2Zz4=",
  27:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMxNDE0MTQiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SPC90ZXh0Pjwvc3ZnPg==",
  28:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiM2MzY2RjEiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DPC90ZXh0Pjwvc3ZnPg==",
  29:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjAwMDAiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pjwvc3ZnPg==",
  30:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwMEJGQTUiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TVDwvdGV4dD48L3N2Zz4=",
  31:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMzRjUxQjUiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EPC90ZXh0Pjwvc3ZnPg==",
  32:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjU3MjIiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FPC90ZXh0Pjwvc3ZnPg==",
  33:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiM5QzI3QjAiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5OPC90ZXh0Pjwvc3ZnPg==",
  34:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjNDMDAiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0Pjwvc3ZnPg==",
  35:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiNGRjZCMzUiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PPC90ZXh0Pjwvc3ZnPg==",
  36:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiM2QjVDRTciLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QPC90ZXh0Pjwvc3ZnPg==",
  37:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMyMTk2RjMiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HPC90ZXh0Pjwvc3ZnPg==",
  38:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMwMEJDRDQiLz48dGV4dCB4PSIzMiIgeT0iNDQiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjMyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ZPC90ZXh0Pjwvc3ZnPg==",
};

const TOOLS=[
  {id:1,  name:"Minea",           url:"https://minea.com",                    cat:"מחקר",      hot:true, rating:4.6, reviews:1240, logo:"https://www.google.com/s2/favicons?domain=minea.com&sz=64",
   desc:"מחקר מוצרים ומעקב מודעות",
   guide:`כיצד להשתמש ב-Minea:
• נכנסים ל-Products → מסננים לפי מדינה (US/UK/AU) + פלטפורמה (Facebook/TikTok)
• מחפשים מוצרים עם Engagement גבוה ו-Likes עולה (לא יורד)
• לוחצים על מודעה → רואים כמה זמן היא רצה (מעל 2 שבועות = סימן טוב)
• בכרטיסיית "Store" רואים כמה חנויות מוכרות את אותו מוצר
• מייצאים רשימת Winner Products לגיליון אקסל ובודקים AliExpress`},
  {id:2,  name:"FB Ads Library",  url:"https://www.facebook.com/ads/library", cat:"מחקר",      hot:true, rating:4.3, reviews:890,  logo:"https://www.google.com/s2/favicons?domain=facebook.com&sz=64",
   desc:"ספריית מודעות - חינמי",
   guide:`כיצד להשתמש ב-Facebook Ads Library:
• נכנסים ל-facebook.com/ads/library → בוחרים מדינה → All Ads
• מחפשים שם מתחרה או מילת מפתח של המוצר
• מסננים: Active ads בלבד + Media type: Video
• מוצר שרואים 10+ מודעות פעילות = מוצר שעובד
• לוחצים "See ad details" → רואים מתי המודעה יצאה לאוויר`},
  {id:3,  name:"AdSpy",           url:"https://adspy.com",                    cat:"מחקר",      hot:false,rating:4.4, reviews:760,  logo:"https://www.google.com/s2/favicons?domain=adspy.com&sz=64",
   desc:"ריגול מודעות מתחרים",
   guide:`כיצד להשתמש ב-AdSpy:
• מחפשים לפי Keywords שמופיעים במודעה (למשל "free shipping" + קטגוריה)
• מסננים: Likes > 1000, Date seen: Last 30 days, Type: Video
• בוחרים מודעה → לוחצים Visit advertiser page → בודקים את החנות
• מעתיקים URL של חנות מתחרה ומדביקים ב-search לראות כל מודעותיהם
• שומרים מודעות טובות ב-Favorites לניתוח אחר כך`},
  {id:4,  name:"Shopify",         url:"https://shopify.com",                  cat:"חנות",      hot:true, rating:4.5, reviews:12400,logo:"https://www.google.com/s2/favicons?domain=shopify.com&sz=64",
   desc:"פלטפורמת החנות",
   guide:`הגדרת Shopify לדרופשיפינג:
• Apps חיוניים להתקנה ראשונה: DSers/AutoDS (ספקים), Vitals (המרה), Klaviyo (מייל)
• Settings → Checkout: הפעל Guest checkout + כתובת אחת
• Online Store → Themes: בוחרים Dawn (חינמי) או Debutify
• Products → הוסף תמונות, כתוב תיאור מבוסס תוצאה לא תיאור מוצר
• Analytics → מגדירים Google Analytics + Facebook Pixel מהיום הראשון`},
  {id:5,  name:"Vitals",          url:"https://vitals.co",                    cat:"חנות",      hot:false,rating:4.8, reviews:3200, logo:"https://www.google.com/s2/favicons?domain=vitals.co&sz=64",
   desc:"All-in-one לשופיפיי",
   guide:`Features חיוניים ב-Vitals:
• Product Reviews: ייבוא ביקורות מ-AliExpress בלחיצה אחת (נראה אמיתי)
• Sticky Add to Cart: כפתור קנייה נשאר גלוי בגלילה - מגדיל המרה בעד 20%
• Upsell & Cross-sell: מציע מוצר נוסף לפני קופה
• Visitor Replays: רואים הקלטות איך גולשים מתנהגים בחנות
• Page Speed Booster: מפעילים - מוריד זמן טעינה`},
  {id:6,  name:"Klaviyo",         url:"https://klaviyo.com",                  cat:"חנות",      hot:false,rating:4.6, reviews:2100, logo:"https://www.google.com/s2/favicons?domain=klaviyo.com&sz=64",
   desc:"Email Marketing + Flows",
   guide:`Flows חיוניים ב-Klaviyo:
• Abandoned Cart: מייל 1 (שעה) + מייל 2 (24ש) + מייל 3 (48ש עם הנחה)
• Welcome Series: 3 מיילים חמים שמציגים את המותג
• Post-Purchase: תודה + בקשת ביקורת אחרי 7 ימים
• Browse Abandonment: מייל למי שראה מוצר ולא קנה
• הגדירו Segments: Customers vs Prospects לשליחות שונות`},
  {id:7,  name:"Canva",           url:"https://canva.com",                    cat:"קריאייטיב", hot:false,rating:4.7, reviews:8900, logo:"https://www.google.com/s2/favicons?domain=canva.com&sz=64",
   desc:"עיצוב קריאייטיב מהיר",
   guide:`שימוש ב-Canva לפרסום דרופשיפינג:
• מחפשים "Facebook Ad" ו"Instagram Story" בתבניות
• Magic Resize: מייצרים גרסה אחת ואוטומטית ממירים לכל הפורמטים
• Background Remover: מנתקים רקע מתמונת מוצר בשנייה
• Brand Kit: שומרים צבעים + פונטים קבועים לכל הקריאייטיבים
• מורידים כ-MP4 לוידאו, PNG ללא רקע לתמונות`},
  {id:8,  name:"CapCut",          url:"https://capcut.com",                   cat:"קריאייטיב", hot:false,rating:4.5, reviews:5600, logo:"https://www.google.com/s2/favicons?domain=capcut.com&sz=64",
   desc:"עריכת וידאו לתוכן",
   guide:`עריכת UGC ב-CapCut:
• Auto Captions: מוסיף כתוביות אוטומטיות בעברית/אנגלית (חובה לריילס)
• Speed: מאיצים את החלקים הפחות מעניינים, מאטים את ה-WOW moment
• Text Overlay: מוסיפים Hook כטקסט על המסך ב-3 שניות הראשונות
• Sound: בוחרים טרנד מ-TikTok → Trending sounds
• Export: 1080x1920, 60fps לאיכות מקסימלית`},
  {id:9,  name:"Higgsfield",      url:"https://higgsfield.ai",                cat:"AI",        hot:true, rating:4.4, reviews:430,  logo:"https://www.google.com/s2/favicons?domain=higgsfield.ai&sz=64",
   desc:"יצירת וידאו AI לפרסום",
   guide:`יצירת וידאו מוצר ב-Higgsfield:
• מעלים תמונת מוצר ברקע לבן, רזולוציה גבוהה
• בוחרים סגנון: Cinematic / Product Showcase / Lifestyle
• Prompt: "slow zoom in, warm golden lighting, premium minimal, 4K"
• מייצרים 3-4 גרסאות ובוחרים הטובה ביותר
• מורידים MP4 ומשלבים עם Hook טקסטואלי ב-CapCut`},
  {id:10, name:"Foreplay",        url:"https://foreplay.co",                  cat:"קריאייטיב", hot:false,rating:4.5, reviews:620,  logo:"https://www.google.com/s2/favicons?domain=foreplay.co&sz=64",
   desc:"שמירת מודעות השראה",
   guide:`ארגון השראה ב-Foreplay:
• מתקינים Chrome Extension → לוחצים Save על כל מודעה טובה ב-FB
• מארגנים ב-Boards לפי קטגוריה: Hooks / Before&After / UGC
• Swipe File: ספרייה של מודעות מנצחות לפי נישה
• Discovery: מחפשים מודעות מנצחות לפי מוצר ישירות בפלטפורמה
• לפני יצירת קריאייטיב - עוברים על ה-Board להשראה`},
  {id:11, name:"CJ Dropshipping", url:"https://cjdropshipping.com",           cat:"ספקים",     hot:false,rating:4.2, reviews:980,  logo:"https://www.google.com/s2/favicons?domain=cjdropshipping.com&sz=64",
   desc:"ספק + פולפילמנט",
   guide:`עבודה עם CJ Dropshipping:
• מחפשים מוצר → Request a Quote להשגת מחיר טוב יותר
• בודקים: CJ Packet shipping time - מטרה מתחת ל-12 ימים לUS
• מחברים ל-Shopify → Auto-sync inventory ומחירים
• Source Product: שולחים לינק AliExpress ו-CJ מוצאים ספק זול יותר
• Quality Check: מבקשים Photos לפני שליחה ללקוח (עולה קצת)`},
  {id:12, name:"Zendrop",         url:"https://zendrop.com",                  cat:"ספקים",     hot:false,rating:4.4, reviews:1100, logo:"https://www.google.com/s2/favicons?domain=zendrop.com&sz=64",
   desc:"ספק אמריקאי מהיר",
   guide:`יתרונות Zendrop על AliExpress:
• US Warehouse: משלוח תוך 5-8 ימים לארה"ב (לעומת 15-30 של AliExpress)
• Auto-fulfillment: הזמנות עוברות לספק אוטומטית ללא מגע יד
• Custom Branding: הוסיפו לוגו לאריזה מינימום 100 יחידות
• Returns: Zendrop מטפל בהחזרות ישירות
• מחיר גבוה יותר מ-AliExpress - מפצים על מחיר מכירה גבוה יותר`},
  {id:13, name:"Google Trends",    url:"https://trends.google.com",               cat:"מחקר",         hot:false,rating:4.3,reviews:2400, logo:"https://www.google.com/s2/favicons?domain=google.com&sz=64",
   desc:"מגמות חיפוש גלובליות",
   guide:`שימוש ב-Google Trends לדרופשיפינג:
• מחפשים שם מוצר/קטגוריה ובוחרים מדינת יעד (US/UK)
• גרף עולה = נישה גדלה | גרף יורד = נישה מתה | עונתי = לתכנן מראש
• Related Queries: מגלים מה עוד מחפשים אנשים בנישה
• Compare: משווים 5 מוצרים זה מול זה לבחירת הנישה הנכונה
• Breakout keywords: קפיצה של 5000%+ = טרנד חדש לנצל`},

  /* ── שופיפיי Apps ── */
  {id:14, name:"DSers",             url:"https://dsers.com",                        cat:"שופיפיי Apps", hot:true, rating:4.7,reviews:3100, logo:"https://www.google.com/s2/favicons?domain=dsers.com&sz=64",
   desc:"פולפילמנט אוטומטי מ-AliExpress",
   guide:`DSers - פולפילמנט אוטומטי:
• מחבר חנות Shopify ל-AliExpress בלחיצה אחת
• Bulk Order: שולחים 100+ הזמנות לספק בו-זמנית תוך דקות
• Supplier Optimizer: מוצא ספק זול יותר לאותו מוצר אוטומטית
• Mapping: מגדירים וריאנטים (צבע/מידה) מול הספק אחת לתמיד
• Tracking: עדכון אוטומטי של מספר מעקב ללקוח`},
  {id:15, name:"ReConvert",         url:"https://reconvert.io",                     cat:"שופיפיי Apps", hot:true, rating:4.8,reviews:1900, logo:"https://www.google.com/s2/favicons?domain=reconvert.io&sz=64",
   desc:"Upsell לאחר קנייה",
   guide:`ReConvert - הכפלת ערך ההזמנה:
• Thank You Page מותאמת עם Upsell מיידי לאחר רכישה
• One-Click Upsell: הלקוח מוסיף מוצר ללא הכנסת פרטי כרטיס שוב
• Birthday Collector: אוסף תאריך יום הולדת לשלוח קופון
• Countdown Timer: יוצר דחיפות על ה-Upsell
• ממוצע: מגדיל AOV בין 10-30%`},
  {id:16, name:"Loox",              url:"https://loox.io",                          cat:"שופיפיי Apps", hot:true, rating:4.8,reviews:2700, logo:"https://www.google.com/s2/favicons?domain=loox.io&sz=64",
   desc:"ביקורות עם תמונות ווידאו",
   guide:`Loox - ביקורות שמוכרות:
• שולח אוטומטית בקשת ביקורת עם תמונה 14 יום אחרי קנייה
• Photo Reviews: ביקורות עם תמונת לקוח = אמינות גבוהה פי 3
• Referral: Loox מציע הנחה ללקוח שמביא חבר
• Widgets: מוסיפים גאלריית ביקורות בכל מקום בחנות
• Import: מייבאים ביקורות מ-AliExpress לתחילת הדרך`},
  {id:17, name:"PageFly",           url:"https://pagefly.io",                       cat:"שופיפיי Apps", hot:false,rating:4.7,reviews:1400, logo:"https://www.google.com/s2/favicons?domain=pagefly.io&sz=64",
   desc:"בניית עמודים ללא קוד",
   guide:`PageFly - עמודים שממירים:
• Drag & Drop: בונים Landing Page מקצועי ללא קידוד
• Templates: מאות תבניות מוכנות לנישות שונות
• A/B Testing: בודקים 2 גרסאות של עמוד ובוחרים המנצחת
• Mobile Editor: עורכים ספציפית לתצוגת מובייל
• Integration: עובד עם Klaviyo, Reviews, Vitals`},
  {id:18, name:"Tidio",             url:"https://tidio.com",                        cat:"שופיפיי Apps", hot:false,rating:4.6,reviews:1800, logo:"https://www.google.com/s2/favicons?domain=tidio.com&sz=64",
   desc:"Live Chat + AI לתמיכת לקוחות",
   guide:`Tidio - שירות לקוחות חכם:
• Live Chat: לקוחות מדברים ישירות עם מישהו מהצוות
• Lyro AI: בוט AI שעונה אוטומטית על 70% מהשאלות הנפוצות
• Abandoned Cart Bot: שולח הודעה אוטומטית למי שנטש
• Integration: מחובר ל-Shopify, Klaviyo, Facebook
• Mobile App: מגיבים ללקוחות מהטלפון בכל מקום`},
  {id:19, name:"AfterShip",         url:"https://aftership.com",                    cat:"שופיפיי Apps", hot:false,rating:4.5,reviews:1200, logo:"https://www.google.com/s2/favicons?domain=aftership.com&sz=64",
   desc:"עמוד מעקב הזמנות ממותג",
   guide:`AfterShip - חוויית משלוח מקצועית:
• Tracking Page: עמוד מעקב ממותג עם לוגו שלך במקום AliExpress
• Notifications: SMS + מייל אוטומטי בכל עדכון סטטוס
• Returns Portal: ממשק קל להחזרות שמפחית פניות תמיכה
• Analytics: זמני משלוח ממוצעים לפי ספק ומדינה
• מוריד בעד 40% מפניות "איפה ההזמנה שלי"`},

  /* ── ניהול עסק ── */
  {id:20, name:"Triple Whale",      url:"https://triplewhale.com",                  cat:"ניהול עסק",   hot:true, rating:4.7,reviews:890,  logo:"https://www.google.com/s2/favicons?domain=triplewhale.com&sz=64",
   desc:"אנליטיקס מרכזי לאיקומרס",
   guide:`Triple Whale - המוח של העסק:
• Dashboard: רואים ROAS, רווח נקי, AOV הכל במקום אחד
• Pixel: Pixel מדויק יותר של Triple Whale מ-Facebook Pixel
• Creative Cockpit: מנתח אילו קריאייטיבים מביאים הכי הרבה רווח
• Cohort Analysis: רואים כמה כל לקוח שווה לאורך זמן (LTV)
• MER: מחשב Marketing Efficiency Ratio על כל הפלטפורמות`},
  {id:21, name:"Notion",            url:"https://notion.so",                        cat:"ניהול עסק",   hot:true, rating:4.7,reviews:8400, logo:"https://www.google.com/s2/favicons?domain=notion.so&sz=64",
   desc:"ניהול פרויקטים ומסמכים",
   guide:`Notion לניהול עסק דרופשיפינג:
• Product Research DB: טבלה עם כל המוצרים שבדקתם + ניקוד
• Content Calendar: תכנון קריאייטיבים לחודש קדימה
• SOP Templates: נהלי עבודה קבועים (פולפילמנט, תמיכה, בדיקה)
• P&L Tracker: מעקב הכנסות והוצאות שבועי
• Team Wiki: מסמכים לעובדים/פרילנסרים`},
  {id:22, name:"Slack",             url:"https://slack.com",                        cat:"ניהול עסק",   hot:false,rating:4.5,reviews:12000,logo:"https://www.google.com/s2/favicons?domain=slack.com&sz=64",
   desc:"תקשורת צוות ועסקית",
   guide:`Slack לניהול עסק:
• Channels: ערוץ נפרד לכל נושא (ads, products, support, finance)
• Integrations: חיבור Shopify/Klaviyo לקבל התראות אוטומטיות
• Workflows: אוטומציות פשוטות כמו תזכורות יומיות
• Files: שיתוף קריאייטיבים, דוחות ותמונות בקלות
• Mobile: נגיש מהטלפון בכל מקום`},
  {id:23, name:"BeProfit",          url:"https://beprofit.co",                      cat:"ניהול עסק",   hot:false,rating:4.6,reviews:560,  logo:"https://www.google.com/s2/favicons?domain=beprofit.co&sz=64",
   desc:"חישוב רווחיות אמיתית",
   guide:`BeProfit - כמה אתה באמת מרוויח:
• Profit Dashboard: חישוב רווח נקי אחרי כל הוצאות (מודעות, מוצר, משלוח)
• COGS: מזין עלות מוצר פעם אחת ו-BeProfit מחשב אוטומטית
• LTV Analytics: ערך לקוח לאורך זמן לפי מוצר וסגמנט
• Reports: דוחות שבועיים/חודשיים אוטומטיים למייל
• Breakeven Calculator: יודעים מה ה-CPA המקסימלי שמותר`},
  {id:24, name:"Google Analytics",  url:"https://analytics.google.com",             cat:"ניהול עסק",   hot:true, rating:4.4,reviews:18000,logo:"https://www.google.com/s2/favicons?domain=google.com&sz=64",
   desc:"אנליטיקס אתר מקיף",
   guide:`Google Analytics 4 לחנות:
• Traffic Sources: רואים מאיפה מגיע כל גולש (מודעות, אורגני, ישיר)
• Funnel: רואים איפה אנשים נוטשים - דף מוצר? עגלה? קופה?
• Audiences: יוצרים קהלים לרימרקטינג ב-Google Ads
• Events: מגדירים Add to Cart, Checkout, Purchase כאירועים
• Real-time: רואים גולשים פעילים בחנות עכשיו`},

  /* ── AI כלים ── */
  {id:25, name:"ChatGPT",           url:"https://chat.openai.com",                  cat:"AI כלים",     hot:true, rating:4.7,reviews:45000,logo:"https://www.google.com/s2/favicons?domain=openai.com&sz=64",
   desc:"AI לכתיבה, מחקר ואוטומציה",
   guide:`ChatGPT לדרופשיפינג:
• כתיבת תיאורי מוצר, Body Copy ומיילים בשניות
• GPT-4o: ניתוח תמונת מוצר ויצירת תוכן שיווקי
• Custom GPT: יוצרים GPT מותאם לעסק עם הפרומפטים שלנו
• Code Interpreter: מנתח קובץ Excel של מכירות ומייצר גרפים
• שימוש יומי: הכנת HOOKs, ניתוח מתחרים, בריפינג לקריאייטיב`},
  {id:26, name:"ElevenLabs",        url:"https://elevenlabs.io",                    cat:"AI כלים",     hot:true, rating:4.6,reviews:2100, logo:"https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=64",
   desc:"יצירת קריינות AI ריאליסטית",
   guide:`ElevenLabs - קול אנושי מ-AI:
• Voice Cloning: מעלים הקלטה של 1 דקה ומכפילים את הקול
• Text to Speech: ממירים תסריט VSL לקריינות מקצועית תוך שניות
• 29 שפות כולל עברית ברמה גבוהה
• API: מחברים לכלי וידאו ליצירת תוכן אוטומטי
• שימוש: קריינות למודעות, VSL, UGC מדומה`},
  {id:27, name:"Runway",            url:"https://runwayml.com",                     cat:"AI כלים",     hot:true, rating:4.5,reviews:1400, logo:"https://www.google.com/s2/favicons?domain=runwayml.com&sz=64",
   desc:"יצירת וידאו AI מתקדם",
   guide:`Runway לפרסום דרופשיפינג:
• Gen-3: יוצרים וידאו מטקסט או מתמונה ב-4K
• Image to Video: תמונת מוצר → וידאו סינמטי ב-10 שניות
• Inpainting: מסירים רקע ומחליפים בכל רקע שנרצה
• Motion Brush: מזיזים חלק מסוים בתמונה (כמו עשן, גלים)
• שימוש: יצירת Hero Video לחנות ולמודעות ללא צלם`},
  {id:28, name:"Copy.ai",           url:"https://copy.ai",                          cat:"AI כלים",     hot:false,rating:4.4,reviews:3200, logo:"https://www.google.com/s2/favicons?domain=copy.ai&sz=64",
   desc:"כתיבת תוכן שיווקי ב-AI",
   guide:`Copy.ai לשיווק:
• 90+ Templates: מודעות, מיילים, Hooks, Landing Pages
• Workflow: יוצרים Pipeline שמייצר 10 וריאציות מודעה אוטומטית
• Brand Voice: מגדירים טון המותג ו-Copy.ai שומר עליו
• Chat: שיחה חופשית ליצירת תוכן כמו עם ChatGPT
• אידיאלי: כשצריך הרבה וריאציות מהר לבדיקת A/B`},
  {id:29, name:"Adobe Firefly",     url:"https://firefly.adobe.com",                cat:"AI כלים",     hot:false,rating:4.3,reviews:1800, logo:"https://www.google.com/s2/favicons?domain=adobe.com&sz=64",
   desc:"יצירת תמונות AI לשיווק",
   guide:`Adobe Firefly ליצירת תמונות:
• Text to Image: יוצרים תמונת מוצר Lifestyle מתיאור טקסטואלי
• Generative Fill: מוסיפים/מסירים אלמנטים מתמונה קיימת
• Background Generation: מחליפים רקע של מוצר בסצנה מקצועית
• Vectors: יוצרים אייקונים ואיורים לחנות
• בטוח מסחרית: Adobe מבטיחה שהתמונות חופשיות לשימוש עסקי`},

  /* ── מציאת מוצרים ── */
  {id:30, name:"Sell The Trend",    url:"https://sellthetrend.com",                 cat:"מציאת מוצרים",hot:true, rating:4.6,reviews:780,  logo:"https://www.google.com/s2/favicons?domain=sellthetrend.com&sz=64",
   desc:"מחקר מוצרים מתקדם עם AI",
   guide:`Sell The Trend - מציאת Winners:
• NEXUS: AI שמנתח מיליוני מוצרים ומדרג לפי פוטנציאל
• Hot Products: רשימת מוצרים חמים לפי קטגוריה ומדינה
• Store Intelligence: מנתח חנויות מתחרות ורואה מה הם מוכרים
• 1-Click Import: מעביר מוצר מ-AliExpress לחנות בלחיצה אחת
• Video Ads Maker: יוצר מודעת וידאו למוצר אוטומטית`},
  {id:31, name:"Dropship.io",       url:"https://dropship.io",                      cat:"מציאת מוצרים",hot:true, rating:4.5,reviews:540,  logo:"https://www.google.com/s2/favicons?domain=dropship.io&sz=64",
   desc:"מחקר חנויות ומוצרי מתחרים",
   guide:`Dropship.io - מחקר מתחרים:
• Sales Tracker: רואים כמה מכירות יש לכל חנות Shopify ביום
• Product Tracker: עוקבים אחרי מוצר ספציפי ורואים מגמת מכירות
• Winning Products: רשימה יומית של מוצרים שמתחילים להיות חמים
• Competitor Research: מזינים URL חנות → רואים הכל
• Chrome Extension: בודקים כל חנות Shopify שנתקלים בה`},
  {id:32, name:"Ecomhunt",          url:"https://ecomhunt.com",                     cat:"מציאת מוצרים",hot:false,rating:4.3,reviews:1100, logo:"https://www.google.com/s2/favicons?domain=ecomhunt.com&sz=64",
   desc:"מוצרים מנצחים כל יום",
   guide:`Ecomhunt - מוצרים יומיים:
• Daily Winners: 5-10 מוצרים חדשים כל יום עם ניתוח מלא
• Facebook Ads: רואים את המודעות שרצות למוצר
• Targeting: קהלי פייסבוק מוכנים לכל מוצר
• Profit Calculator: חישוב מרג'ין מיידי
• Saturation Meter: מדד רוויית השוק (0-100%)`},
  {id:33, name:"Niche Scraper",     url:"https://nichescraper.com",                 cat:"מציאת מוצרים",hot:false,rating:4.2,reviews:680,  logo:"https://www.google.com/s2/favicons?domain=nichescraper.com&sz=64",
   desc:"חיפוש מוצרים ברשת",
   guide:`Niche Scraper - מחקר נישה:
• Product Scraper: סורק AliExpress ומוצא מוצרים עם Growth גבוה
• Store Analysis: מנתח כל חנות Shopify שמזינים
• Hand Picked: צוות אנושי בוחר מוצרים מנצחים כל שבוע
• Video Ads: יוצר Slideshow Video למוצר אוטומטית
• Ali Growth Scanner: מוצא מוצרים שמכירותיהם קפצו לאחרונה`},

  /* ── הגדלת מכירות ── */
  {id:34, name:"Hotjar",            url:"https://hotjar.com",                       cat:"הגדלת מכירות",hot:true, rating:4.6,reviews:4200, logo:"https://www.google.com/s2/favicons?domain=hotjar.com&sz=64",
   desc:"הקלטות גולשים ו-Heatmaps",
   guide:`Hotjar - הבנת התנהגות גולשים:
• Heatmaps: רואים על מה אנשים לוחצים ואיפה הם עוצרים לגלול
• Session Recordings: הקלטות וידאו של כל ביקור בחנות
• Funnels: רואים איפה בדיוק אנשים נוטשים בתהליך הקנייה
• Surveys: שואלים גולשים בפופ-אפ קצר "למה לא קנית?"
• פעולה: מוצאים נקודות חיכוך ומתקנים לשיפור המרה`},
  {id:35, name:"OptiMonk",          url:"https://optimonk.com",                     cat:"הגדלת מכירות",hot:false,rating:4.5,reviews:890,  logo:"https://www.google.com/s2/favicons?domain=optimonk.com&sz=64",
   desc:"פופ-אפים חכמים להמרה",
   guide:`OptiMonk - פופ-אפים שמוכרים:
• Exit Intent: פופ-אפ ברגע שהגולש עומד לצאת - 10% הנחה
• Spin the Wheel: גלגל מזל עם הנחות שמגדיל רישום למייל
• Product Recommendations: מציע מוצרים רלוונטיים לפי התנהגות
• Countdown Timer: טיימר שיוצר דחיפות אמיתית
• A/B Testing: בודקים איזה פופ-אפ ממיר יותר`},
  {id:36, name:"Postscript",        url:"https://postscript.io",                    cat:"הגדלת מכירות",hot:false,rating:4.5,reviews:720,  logo:"https://www.google.com/s2/favicons?domain=postscript.io&sz=64",
   desc:"SMS Marketing לחנויות Shopify",
   guide:`Postscript - SMS שממיר:
• Abandoned Cart SMS: הודעת טקסט 30 דקות אחרי נטישת עגלה
• Open Rate: SMS נפתח ב-98% לעומת 20% במייל
• Flows: רצפי הודעות אוטומטיים לפי התנהגות לקוח
• Compliance: מוודא שכל הרשמה ל-SMS חוקית (TCPA)
• שילוב: עובד עם Klaviyo לסינרגיה בין SMS למייל`},
  {id:37, name:"Gorgias",           url:"https://gorgias.com",                      cat:"הגדלת מכירות",hot:false,rating:4.6,reviews:1300, logo:"https://www.google.com/s2/favicons?domain=gorgias.com&sz=64",
   desc:"Help Desk לחנויות איקומרס",
   guide:`Gorgias - תמיכת לקוחות שמוכרת:
• Unified Inbox: כל הפניות (מייל, SMS, IG, FB) במקום אחד
• Macros: תשובות אוטומטיות לשאלות חוזרות (איפה ההזמנה?)
• Shopify Integration: רואים פרטי הזמנה ישירות בשיחה
• Auto-Close: סוגר כרטיסי תמיכה אוטומטית לאחר תשובה
• Revenue Stats: רואים כמה הכנסה הגיעה מתמיכה שיצאה יד ביד`},
  {id:38, name:"Yotpo",             url:"https://yotpo.com",                        cat:"הגדלת מכירות",hot:false,rating:4.4,reviews:2100, logo:"https://www.google.com/s2/favicons?domain=yotpo.com&sz=64",
   desc:"ביקורות, נאמנות ו-UGC",
   guide:`Yotpo - הוכחה חברתית מלאה:
• Reviews: מסיסטם ביקורות עם תמונות ווידאו כמו Loox
• Loyalty: תוכנית נאמנות עם נקודות להחלפה להנחה
• Referrals: תוכנית חבר מביא חבר אוטומטית
• SMS: שילוב SMS Marketing ישירות בפלטפורמה
• UGC: ריכוז תוכן שלקוחות יצרו לגאלריית Instagram`},
];

const TMPLS=[
  {id:"t1",cat:"שופיפיי",title:"עמוד מוצר - תבנית מלאה",
   body:`══ כותרת ראשית ══
[תוצאה] בתוך [זמן] בלי [הדבר המפחיד]

══ כותרת משנה ══
[מוצר] נועד ל[קהל] שרוצים [תוצאה] בלי [חיסרון].

══ 3 Bullets ══
✓ [תוצאה] בזכות [מאפיין] - [מספר]
✓ [תוצאה] בזכות [מאפיין] - [מספר]
✓ [תוצאה] בזכות [מאפיין] - [מספר]

══ Trust Line ══
משלוח חינם | החזר 30 יום | +X לקוחות

══ CTA ══
"שלחו לי אחד" / "קנה עכשיו" / "התחל היום"`},
  {id:"t2",cat:"שופיפיי",title:"Abandoned Cart - 3 מיילים",
   body:`מייל 1 (שעה אחרי) - נושא: שכחת משהו?
גוף: [תמונה] + CTA אחד. קצר ולא מכירתי.

מייל 2 (24 שעות) - נושא: שאלה אחת לפני שאתה הולך...
גוף: טפל בהתנגדות נפוצה + ביקורת אחת אמיתית.

מייל 3 (48 שעות) - נושא: שמרנו לך 15% - נגמר מחר
גוף: קוד הנחה + Countdown + CTA ברור.`},
  {id:"t3",cat:"קריאייטיב",title:"Hook Bank - 20 הוקים",
   body:`── הוקי כאב ──
• "אם [בעיה] - אתה חייב לראות את זה."
• "בזבזתי [זמן] מנסה הכל - עד שגיליתי את זה."
• "הדבר שאף אחד לא אמר לי על [בעיה]."
• "אם [בעיה] שוברת אותך - זה לא אשמתך."
• "למה [X] אנשים עדיין סובלים? כי לא יודעים."

── הוקי סקרנות ──
• "הסוד שמאחורי [תוצאה] של [X] אנשים."
• "רוב האנשים עושים את [פעולה] לא נכון."
• "מה שגיליתי אחרי [X] שנים."
• "אף אחד לא מדבר על זה - אבל [עובדה]."
• "ניסיתי את [מוצר] למשך [זמן]. הנה מה קרה:"

── הוקי תוצאה ──
• "[X] אנשים כבר [תוצאה]. הגיע תורך."
• "תוך [זמן]: [תוצאה ספציפית ומדידה]."
• "מ[נקודת התחלה] ל[תוצאה] בלי [הדבר המפחיד]."
• "[סוג אדם] עשה [תוצאה] עם זה. הנה איך:"

── הוקי שאלה ──
• "כמה זמן עוד תתמודד עם [בעיה]?"
• "מה אם [בעיה] לא הייתה חייבת להיות כואבת?"
• "האם ידעת ש[עובדה מפתיעה]?"
• "ראית את [תוצאה] ותהית - איך הם עושים זאת?"`},
  {id:"t4",cat:"קריאייטיב",title:"UGC Creator Brief",
   body:`מותג: [שם] | מוצר: [מוצר]
פלטפורמה: TikTok / Reels | אורך: 30-45 שניות

── מה רוצים ──
אותנטי. לא סטודיו. לא מוזיקה מיוצרת.

── מבנה ──
0-4שנ:  Hook - [מה תגיד/תעשה בדיוק]
4-15שנ: בעיה - ספר על הבעיה שהייתה
15-30שנ: פתרון - הדגם בפעולה, הראה לא תספר
30-40שנ: תוצאה - מספרים ספציפיים
40-45שנ: CTA - "לקישור בביו"

── Do / Don't ──
✓ הסתכל למצלמה ב-Hook | ✓ הראה מוצר מכמה זוויות
✗ לא "מהפכני" "פנומנלי" | ✗ לא תאורת רינג לייט

── טכני ──
MP4 | 1080x1920 | 5שנ חזות בכל קצה`},
  {id:"t5",cat:"ניהול עסק",title:"צ'קליסט יומי",
   body:`── בוקר (לפני 10:00) ──
□ ROAS אתמול מעל 2.5?
□ Ad Sets מתחת 1.5 ROAS → כבה
□ CTR מתחת 0.8% → שנה קריאייטיב
□ הזמנות Shopify + ביטולים?
□ הזמנות שולחו? בדוק ב-CJ/AliExpress
□ מיילים לקוחות מעל 24 שעות?

── שבועי (ראשון) ──
□ ROAS ממוצע + CPA + CPM
□ קריאייטיב חדש לבדיקה
□ FB Ads Library - מה עושים מתחרים?

── KPI שבועיים ──
ROAS: ___ | הכנסה: ___ | הוצאות: ___
רווח נקי: ___ | הזמנות: ___ | CPA: ___`},
  {id:"t6",cat:"ניהול עסק",title:"טבלת ניקוד מוצר",
   body:`── ניקוד (0-10 כל קריטריון) ──
מינימום לבדיקה: 50/70

WOW Factor (עוצר סקרול?):      __/10
עוצמת הבעיה (כמה כואב?):       __/10
ויזואליות (קל להדגים?):         __/10
Impulse Buy (קנייה רגשית?):     __/10
תחרות נמוכה (פחות = גבוה):     __/10
מרג'ין 3X+ (פי 3 ממחיר קנייה): __/10
פוטנציאל ויראלי:                __/10

סה"כ: __/70

מחיר קנייה: $___ | מכירה: $___ | CPA: $___
רווח נקי למכירה: $___

□ בדיקה $100  □ פוטנציאל גבוה $300  □ לדלג`},
];

const STAGES=[
  {id:1,label:"יסודות",    desc:"הבנת המודל",         vids:[1],   gs:[2]},
  {id:2,label:"מוצר ראשון",desc:"מציאת מוצר ובדיקתו", vids:[2],   gs:[1]},
  {id:3,label:"הקמת חנות", desc:"בניית חנות שממירה",  vids:[3,8], gs:[3]},
  {id:4,label:"פרסום",     desc:"קמפיין ראשון חי",    vids:[4,5], gs:[4]},
  {id:5,label:"סקייל",     desc:"גדילה ורווח",        vids:[6,7], gs:[6]},
];

const CC={
  מחקר:"#3a7aff",חנות:"#22c55e",קריאייטיב:"#d040e0",AI:"#e09830",
  ספקים:"#f05060",פרסום:"#ff7030",מוצרים:"#30c0f0",אנליטיקס:"#8888ff",
  ביניים:"#e09830",מתחיל:"#22c55e",מתקדם:"#f05060",
  שופיפיי:"#7aad3a","ניהול עסק":"#4466ff",אמייל:"#20c0a0",
  Midjourney:"#9060e0",Higgsfield:"#e06030",
  "שופיפיי Apps":"#96BF48","ניהול עסק":"#4466ff","AI כלים":"#8855ff","מציאת מוצרים":"#30c0f0","הגדלת מכירות":"#f05060",
};

const KAI_SYS="אתה Kai, עוזר ה-AI של האקדמיה לאיקומרס ודרופשיפינג של Kaiel Kayam. תמיד ענה בעברית בלבד. מומחה ב: דרופשיפינג, פרסום פייסבוק/אינסטגרם, CBO/ABO, Creative Testing, מוצרים עם WOW factor, שופיפיי, ROAS/CPA/CTR/CPM/Breakeven, ספקי סין, קריאייטיב, UGC, Klaviyo, Psychology of Conversion. סגנון: ממוקד, מעשי, ישיר. תן מספרים ספציפיים. השתמש ברשימות.";
const KAI_QS=["מה זה ROAS?","כמה תקציב להתחיל?","איך לדעת שמוצר מנצח?","CBO vs ABO?","CTR נמוך - מה עושים?","איך לכתוב Hook?"];

const getAI4Sys=(name)=>`אתה AI FOR YOU - עוזר AI אישי ומותאם של ${name} באקדמיית Kaiel Kayam לדרופשיפינג.
תמיד ענה בעברית בלבד. תמיד פנה ל${name} בשמו.

המשימה שלך: ללמוד על ${name} ועל העסק שלו לאורך השיחה.
בהודעה הראשונה - שאל שאלות לאיסוף מידע: באיזה נישה הוא עובד? מה המוצרים? מה התקציב היומי? כמה זמן בתחום?
לאחר שאספת מידע - זכור אותו לכל שאלה הבאה ותן תשובות ספציפיות לעסק שלו.
שים לב לאיך ${name} כותב: קצר/ארוך, מקצועי/ידידותי - התאם את הסגנון שלך לשלו.
אם הוא נתקע בנושא מסוים - תן הסבר נוסף, שאל מה לא ברור, הצע דוגמה מעשית.
אם מבקשים תמונה - הצע פרומפט מפורט ל-Midjourney/DALL-E 4K.
סגנון: חכם, ידידותי, אישי. לא גנרי - מותאם ספציפית ל${name}.`;

const NAV=[
  {id:"home",    label:"ראשי",     Icon:Home},
  {id:"videos",  label:"סרטונים",  Icon:Video},
  {id:"prompts", label:"פרומפטים", Icon:ClipboardList},
  {id:"kai",     label:"Kai AI",   Icon:Bot},
  {id:"guides",  label:"מדריכים",  Icon:BookOpen},
  {id:"tools",   label:"כלים",     Icon:Wrench},
  {id:"templates",label:"תבניות",  Icon:FileText},
  {id:"tasks",   label:"משימות",   Icon:CheckSquare},
  {id:"ai4you",  label:"AI FOR YOU",Icon:Sparkles},
  {id:"community",label:"קהילה",     Icon:Users},
  {id:"products", label:"מוצרים",   Icon:ShoppingBag},
  {id:"adlib",   label:"ספריית מודעות", Icon:TrendingUp},
  {id:"creators",label:"יוצרי תוכן", Icon:Video},
];

/* ── ATOMS ──────────────────────────────────────────────── */
function Tag({label}){
  const col=CC[label]||C.gold;
  return <span style={{background:col+"1a",border:`1px solid ${col}50`,color:col,borderRadius:20,padding:"2px 9px",fontSize:11,fontWeight:500,whiteSpace:"nowrap"}}>{label}</span>;
}

function CpBtn({text}){
  const [ok,set]=useState(false);
  const go=()=>{copyText(text);set(true);setTimeout(()=>set(false),2000);};
  return(
    <button onClick={go} style={{background:ok?C.green+"22":C.card2,border:`1px solid ${ok?C.green:C.brd}`,color:ok?C.green:C.sub,borderRadius:8,padding:"6px 13px",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:5,flexShrink:0,transition:"all .2s"}}>
      {ok?<Check size={13}/>:<Copy size={13}/>}{ok?"הועתק":"העתק"}
    </button>
  );
}

function Pill({children,on,click}){
  return <button onClick={click} style={{background:on?C.gold:C.card,color:on?"#000":C.sub,border:`1px solid ${on?C.gold:C.brd}`,borderRadius:20,padding:"5px 13px",fontSize:12,cursor:"pointer",fontWeight:on?600:400,transition:"all .15s",whiteSpace:"nowrap"}}>{children}</button>;
}

function Ring({pct}){
  const r=20,ci=2*Math.PI*r;
  return(
    <svg width={50} height={50} style={{transform:"rotate(-90deg)"}}>
      <circle cx={25} cy={25} r={r} fill="none" stroke={C.brd} strokeWidth={3}/>
      <circle cx={25} cy={25} r={r} fill="none" stroke={C.gold} strokeWidth={3}
        strokeDasharray={ci} strokeDashoffset={ci-(pct/100)*ci}
        strokeLinecap="round" style={{transition:"stroke-dashoffset .5s"}}/>
    </svg>
  );
}

/* ── HOME ───────────────────────────────────────────────── */
function HomeP({watched,done,setSection}){
  const pct=Math.round(((watched.size+done.size)/(VIDS.length+GUIDES.length))*100);
  return(
    <div>
      <div className="sc" style={{background:`linear-gradient(135deg,${C.gold}14,${C.blue}08)`,border:`1px solid ${C.gold}28`,borderRadius:16,padding:"20px 24px",marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <img src={LOGO_SRC} alt="logo" style={{width:42,height:42,objectFit:"contain"}}/>
          <div>
            <div style={{fontSize:20,fontWeight:700,color:C.txt}}>ברוך הבא לאקדמיה</div>
            <div style={{fontSize:13,color:C.sub,marginTop:2}}>דרופשיפינג PRO · Kaiel Kayam</div>
          </div>
        </div>
        <div style={{textAlign:"center"}}><Ring pct={pct}/><div style={{fontSize:11,color:C.sub,marginTop:2}}>{pct}% הושלם</div></div>
      </div>
      <div style={{fontSize:11,fontWeight:600,color:C.muted,letterSpacing:1.5,textTransform:"uppercase",marginBottom:9}}>מסע הלמידה</div>
      <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:20}}>
        {STAGES.map((st,i)=>{
          const d=st.vids.filter(id=>watched.has(id)).length+st.gs.filter(id=>done.has(id)).length;
          const t=st.vids.length+st.gs.length;const ok=d===t;
          const cur=!ok&&STAGES.slice(0,i).every(s=>s.vids.every(id=>watched.has(id))&&s.gs.every(id=>done.has(id)));
          return(
            <div key={st.id} className={`fu d${Math.min(i+1,5)}`} style={{background:ok?C.green+"0e":cur?C.gold+"0e":C.card,border:`1px solid ${ok?C.green+"40":cur?C.gold+"40":C.brd}`,borderRadius:12,padding:"11px 14px",display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:28,height:28,borderRadius:"50%",background:ok?C.green+"22":cur?C.gold+"22":C.card2,border:`2px solid ${ok?C.green:cur?C.gold:C.muted}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                {ok?<Check size={13} color={C.green}/>:<span style={{fontSize:12,fontWeight:700,color:cur?C.gold:C.muted}}>{st.id}</span>}
              </div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:14,fontWeight:600,color:ok?C.green:cur?C.gold:C.sub}}>{st.label}</span>
                  {cur&&<span style={{background:C.gold+"1a",border:`1px solid ${C.gold}50`,color:C.gold,fontSize:10,borderRadius:20,padding:"1px 8px"}}>עכשיו כאן</span>}
                  {ok&&<span style={{background:C.green+"1a",border:`1px solid ${C.green}50`,color:C.green,fontSize:10,borderRadius:20,padding:"1px 8px"}}>הושלם</span>}
                </div>
                <div style={{fontSize:11,color:C.muted,marginTop:2}}>{st.desc}</div>
              </div>
              <span style={{fontSize:11,color:C.muted}}>{d}/{t}</span>
            </div>
          );
        })}
      </div>
      <div style={{fontSize:11,fontWeight:600,color:C.muted,letterSpacing:1.5,textTransform:"uppercase",marginBottom:9}}>גישה מהירה</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {(()=>{
          const VIS={
            videos:{c:"#ff4444",s:"8 שיעורים מקצועיים"},
            tasks:{c:"#22c55e",s:"משימות לפי שלב"},
            ai4you:{c:"#9055ff",s:"AI שמכיר אותך"},
            guides:{c:"#e09830",s:"8 מדריכים + PDF"},
            prompts:{c:"#30c0f0",s:"28 פרומפטים"},
            tools:{c:"#ff7030",s:"38 כלים"},
            templates:{c:"#ec4899",s:"6 תבניות"},
            kai:{c:"#4466ff",s:"צ'אט עם Kai"},
            community:{c:"#20c0a0",s:"קהילה ותמיכה"},
            products:{c:"#ffaa00",s:"273 מוצרים"},
          };
          return NAV.filter(n=>n.id!=="home").map((n,i)=>{
            const v=VIS[n.id]||{c:C.gold,s:""};
            return(
              <button key={n.id} onClick={()=>setSection(n.id)} className={`fu d${(i%5)+1}`}
                style={{background:`linear-gradient(135deg,${v.c}14,${v.c}06)`,border:`1px solid ${v.c}30`,borderRadius:14,padding:"13px 14px",cursor:"pointer",textAlign:"right",transition:"all .22s",position:"relative",overflow:"hidden"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 8px 24px ${v.c}22`;e.currentTarget.style.borderColor=v.c+"70";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=v.c+"30";}}>
                {/* Big icon area */}
                <div style={{width:38,height:38,borderRadius:10,background:v.c+"20",border:`1px solid ${v.c}30`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:9,float:"left"}}>
                  <n.Icon size={18} color={v.c}/>
                </div>
                <div style={{clear:"both",paddingTop:4}}>
                  <div style={{fontSize:13,fontWeight:700,color:C.txt,marginBottom:2}}>{n.label}</div>
                  <div style={{fontSize:11,color:v.c,opacity:.85}}>{v.s}</div>
                </div>
                {/* Decorative accent */}
                <div style={{position:"absolute",top:-8,right:-8,width:40,height:40,borderRadius:"50%",background:v.c+"10",pointerEvents:"none"}}/>
              </button>
            );
          });
        })()}
      </div>
    </div>
  );
}

/* ── VIDEOS ─────────────────────────────────────────────── */
function VideosP({watched,setWatched,cohort}){
  const [f,setF]=useState("הכל");
  const myVids=cohort?VIDS.filter(v=>!v.cohorts||v.cohorts.includes(cohort)):VIDS;
  const cats=["הכל",...new Set(myVids.map(v=>v.cat))];
  const list=f==="הכל"?myVids:myVids.filter(v=>v.cat===f);
  const tog=id=>setWatched(s=>{const n=new Set(s);n.has(id)?n.delete(id):n.add(id);return n;});
  return(
    <div>
      <div className="fu" style={{marginBottom:16}}>
        <h2 style={{fontSize:19,fontWeight:700,color:C.txt,margin:0}}>ספריית סרטונים</h2>
        <p style={{color:C.sub,fontSize:13,marginTop:3}}>{watched.size}/{myVids.length} נצפו {cohort&&<span style={{color:C.gold,fontWeight:600}}>· {COHORTS[cohort]?.label}</span>}</p>
      </div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>{cats.map(c=><Pill key={c} on={f===c} click={()=>setF(c)}>{c}</Pill>)}</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12}}>
        {list.map((v,i)=>{
          const w=watched.has(v.id);
          return(
            <div key={v.id} className={`fu d${(i%4)+1}`} style={{background:C.card,border:`1px solid ${w?C.green+"50":C.brd}`,borderRadius:14,overflow:"hidden",opacity:w?.72:1,transition:"all .2s"}}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
              onMouseLeave={e=>e.currentTarget.style.transform=""}>
              <div onClick={()=>tog(v.id)} style={{height:136,background:v.bg,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative"}}>
                <div style={{width:42,height:42,borderRadius:"50%",background:w?C.green+"dd":C.gold+"dd",display:"flex",alignItems:"center",justifyContent:"center",animation:w?"none":"pulse 2s ease-in-out infinite"}}>
                  {w?<Check size={17} color="#fff"/>:<Play size={17} color="#000" fill="#000"/>}
                </div>
                <span style={{position:"absolute",bottom:6,left:8,background:"rgba(0,0,0,.6)",padding:"2px 7px",borderRadius:5,fontSize:11,color:"#ccc",display:"flex",alignItems:"center",gap:3}}><Clock size={9}/>{v.dur}</span>
                <span style={{position:"absolute",top:7,right:7}}><Tag label={v.cat}/></span>
              </div>
              <div style={{padding:"10px 12px",display:"flex",alignItems:"flex-start",gap:7}}>
                <p style={{margin:0,flex:1,fontSize:13,fontWeight:500,color:w?C.muted:C.txt,lineHeight:1.4,textDecoration:w?"line-through":"none"}}>{v.title}</p>
                <button onClick={()=>tog(v.id)} style={{background:"none",border:`1px solid ${w?C.green:C.brd}`,borderRadius:6,padding:"2px 8px",fontSize:11,color:w?C.green:C.muted,cursor:"pointer",flexShrink:0}}>{w?"✓ נצפה":"סמן"}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── PROMPTS ────────────────────────────────────────────── */
function PromptsP(){
  const [tab,setTab]=useState("copy");
  const [f,setF]=useState("הכל");
  const list=tab==="copy"?PROMPTS:CREATIVE_PROMPTS;
  const cats=["הכל",...new Set(list.map(p=>p.cat))];
  const show=f==="הכל"?list:list.filter(p=>p.cat===f);
  return(
    <div>
      <div className="fu" style={{marginBottom:16}}>
        <h2 style={{fontSize:19,fontWeight:700,color:C.txt,margin:0}}>בנק פרומפטים</h2>
        <p style={{color:C.sub,fontSize:13,marginTop:3}}>העתק → החלף סוגריים → הדבק ב-ChatGPT / Claude</p>
      </div>
      <div style={{display:"flex",gap:0,marginBottom:12,background:C.card,border:`1px solid ${C.brd}`,borderRadius:10,padding:3,width:"fit-content"}}>
        {[["copy","ממיר - להעתקה"],["creative","ויזואל ו-AI"]].map(([id,lbl])=>(
          <button key={id} onClick={()=>{setTab(id);setF("הכל");}}
            style={{background:tab===id?C.gold:"transparent",color:tab===id?"#000":C.sub,border:"none",borderRadius:8,padding:"7px 16px",fontSize:13,cursor:"pointer",fontWeight:tab===id?600:400,transition:"all .2s"}}>{lbl}</button>
        ))}
      </div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>{cats.map(c=><Pill key={c} on={f===c} click={()=>setF(c)}>{c}</Pill>)}</div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {show.map((p,i)=>(
          <div key={p.id} className={`fu d${(i%4)+1} hc`} style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:14,padding:"15px 17px",transition:"all .2s"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10,gap:8}}>
              <div style={{display:"flex",alignItems:"center",gap:7,flexWrap:"wrap"}}>
                <span style={{fontSize:14,fontWeight:600,color:C.txt}}>{p.title}</span>
                <Tag label={p.cat}/>
                {p.badge&&<span style={{background:C.gold+"1a",border:`1px solid ${C.gold}50`,color:C.gold,fontSize:10,borderRadius:20,padding:"1px 8px",fontWeight:600}}>{p.badge}</span>}
              </div>
              <CpBtn text={p.txt}/>
            </div>
            <pre style={{margin:0,fontFamily:"inherit",fontSize:13,color:C.sub,lineHeight:1.7,whiteSpace:"pre-wrap",background:C.card2,border:`1px solid ${C.brd}`,color:C.txt,borderRadius:9,padding:"10px 13px"}}>{p.txt}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── KAI ────────────────────────────────────────────────── */
function KaiP(){
  const [msgs,setMsgs]=useState([{role:"assistant",content:"שלום! אני Kai - העוזר שלך לדרופשיפינג ואיקומרס.\nשאל אותי כל שאלה - אני פה 24/7."}]);
  const [inp,setInp]=useState("");const [load,setLoad]=useState(false);
  const endRef=useRef(null);
  useEffect(()=>endRef.current?.scrollIntoView({behavior:"smooth"}),[msgs]);

  const send=async(txt)=>{
    const t=(txt||inp).trim();if(!t||load)return;
    const next=[...msgs,{role:"user",content:t}];
    setMsgs(next);setInp("");setLoad(true);
    try{
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:800,system:KAI_SYS,messages:next.map(m=>({role:m.role,content:typeof m.content==="string"?m.content.replace(/\[קובץ מצורף:[^\]]*\]/,"").trim():m.content}))})});
      const d=await r.json();
      setMsgs(p=>[...p,{role:"assistant",content:d.content?.[0]?.text||"שגיאה."}]);
    }catch{setMsgs(p=>[...p,{role:"assistant",content:"שגיאת חיבור."}]);}
    setLoad(false);
  };

  return(
    <div className="fu" style={{display:"flex",flexDirection:"column",height:"calc(100vh - 70px)"}}>
      {/* Header */}
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14,padding:"14px 18px",background:C.card,border:`1px solid ${C.brd}`,borderRadius:14,flexShrink:0}}>
        <div style={{position:"relative"}}>
          <img src={AVATAR_SRC} alt="Kaiel" style={{width:48,height:48,borderRadius:"50%",objectFit:"cover",border:`2px solid ${C.gold}`}}/>
          <div style={{position:"absolute",bottom:1,right:1,width:11,height:11,borderRadius:"50%",background:C.green,border:`2px solid ${C.card}`}}/>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:15,fontWeight:700,color:C.txt}}>Kai - Kaiel Kayam</div>
          <div style={{fontSize:12,color:C.sub,marginTop:1}}>עוזר AI מבוסס על ידע האקדמיה · עברית בלבד</div>
          <div style={{display:"flex",alignItems:"center",gap:5,marginTop:2}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:C.green,animation:"pulse 2s infinite"}}/>
            <span style={{fontSize:11,color:C.green}}>פעיל 24/7 · תגובה תוך שניות</span>
          </div>
        </div>
      </div>
      {/* Suggestions */}
      {msgs.length===1&&(
        <div className="fi" style={{marginBottom:12,flexShrink:0}}>
          <div style={{fontSize:11,color:C.muted,marginBottom:7}}>שאלות נפוצות:</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
            {KAI_QS.map((q,i)=>(
              <button key={i} onClick={()=>send(q)}
                style={{background:C.card,border:`1px solid ${C.brd}`,color:C.sub,borderRadius:20,padding:"5px 12px",fontSize:12,cursor:"pointer",transition:"all .15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.color=C.gold;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=C.brd;e.currentTarget.style.color=C.sub;}}>{q}</button>
            ))}
          </div>
        </div>
      )}
      {/* Messages */}
      <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:10,marginBottom:10}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-start":"flex-end",alignItems:"flex-end",gap:7,animation:"fadeUp .3s ease both"}}>
            {m.role==="assistant"&&<img src={AVATAR_SRC} alt="" style={{width:24,height:24,borderRadius:"50%",objectFit:"cover",flexShrink:0}}/>}
            <div style={{maxWidth:"76%",background:m.role==="user"?C.card2:`linear-gradient(135deg,${C.gold}14,${C.blue}08)`,border:`1px solid ${m.role==="user"?C.brd:C.gold+"30"}`,borderRadius:m.role==="user"?"12px 12px 4px 12px":"12px 12px 12px 4px",padding:"10px 13px",fontSize:14,color:C.txt,lineHeight:1.65,whiteSpace:"pre-wrap"}}>{m.content}</div>
          </div>
        ))}
        {load&&(
          <div style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",gap:7}}>
            <img src={AVATAR_SRC} alt="" style={{width:24,height:24,borderRadius:"50%",objectFit:"cover"}}/>
            <div style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:"12px 12px 12px 4px",padding:"10px 15px",display:"flex",gap:4}}>
              {[0,1,2].map(i=><div key={i} style={{width:5,height:5,borderRadius:"50%",background:C.sub,animation:"blink 1.2s infinite",animationDelay:`${i*.2}s`}}/>)}
            </div>
          </div>
        )}
        <div ref={endRef}/>
      </div>
      {/* Input */}
      <div style={{display:"flex",gap:7,flexShrink:0}}>
        <input value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send()}
          placeholder="שאל כל שאלה על דרופשיפינג, פרסום, מוצרים..."
          style={{flex:1,background:C.card,border:`1px solid ${C.brd}`,borderRadius:12,padding:"11px 14px",fontSize:14,color:C.txt,direction:"rtl",fontFamily:"inherit"}}/>
        <button onClick={()=>send()} style={{background:inp.trim()&&!load?C.gold:C.card,border:"none",borderRadius:12,width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",cursor:inp.trim()&&!load?"pointer":"default",transition:"background .2s"}}>
          <Send size={15} color={inp.trim()&&!load?"#000":C.muted}/>
        </button>
      </div>
    </div>
  );
}

/* ── GUIDES ─────────────────────────────────────────────── */
function GuidesP({done,setDone}){
  const [open,setOpen]=useState(null);
  const [chk,setChk]=useState({});
  const togChk=(gid,si)=>setChk(p=>{const n={...p};n[`${gid}-${si}`]=!n[`${gid}-${si}`];return n;});
  const togDone=id=>setDone(s=>{const n=new Set(s);n.has(id)?n.delete(id):n.add(id);return n;});
  return(
    <div>
      <div className="fu" style={{marginBottom:16}}>
        <h2 style={{fontSize:19,fontWeight:700,color:C.txt,margin:0}}>מדריכים</h2>
        <p style={{color:C.sub,fontSize:13,marginTop:3}}>{done.size}/{GUIDES.length} הושלמו · כל מדריך זמין גם כ-PDF להורדה</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {GUIDES.map((g,i)=>{
          const isDone=done.has(g.id),isOpen=open===g.id;
          const cnt=g.steps.filter((_,si)=>chk[`${g.id}-${si}`]).length;
          return(
            <div key={g.id} className={`fu d${(i%4)+1}`} style={{background:C.card,border:`1px solid ${isDone?C.green+"40":isOpen?C.gold+"50":C.brd}`,borderRadius:14,overflow:"hidden",transition:"border-color .2s"}}>
              <button onClick={()=>setOpen(isOpen?null:g.id)} style={{width:"100%",background:"none",border:"none",padding:"13px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:10,textAlign:"right"}}>
                <div style={{width:28,height:28,borderRadius:8,background:isDone?C.green+"20":C.card2,border:`1px solid ${isDone?C.green+"50":C.brd}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {isDone?<Check size={13} color={C.green}/>:<span style={{fontSize:11,fontWeight:700,color:C.muted}}>{g.id}</span>}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:600,color:isDone?C.muted:C.txt,textDecoration:isDone?"line-through":"none"}}>{g.title}</div>
                  <div style={{display:"flex",gap:5,marginTop:3,flexWrap:"wrap",alignItems:"center"}}>
                    <Tag label={g.cat}/>
                    <Tag label={g.level}/>
                    <span style={{fontSize:11,color:C.muted}}>{g.time}</span>
                    <span style={{background:"#f0503018",border:"1px solid #f0503040",color:"#f05030",fontSize:10,borderRadius:20,padding:"1px 7px",display:"flex",alignItems:"center",gap:3}}>
                      <FileText size={9}/> PDF
                    </span>
                  </div>
                </div>
                <div style={{display:"flex",gap:6,alignItems:"center"}}>
                  {isOpen?<ChevronUp size={14} color={C.muted}/>:<ChevronDown size={14} color={C.muted}/>}
                </div>
              </button>
              {isOpen&&(
                <div style={{borderTop:`1px solid ${C.brd}`,padding:"12px 16px"}}>
                  <div style={{background:C.card2,borderRadius:6,height:3,marginBottom:11,overflow:"hidden"}}>
                    <div style={{height:"100%",background:C.gold,width:`${(cnt/g.steps.length)*100}%`,transition:"width .3s",borderRadius:6}}/>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",gap:5,marginBottom:11}}>
                    {g.steps.map((step,si)=>{
                      const c=chk[`${g.id}-${si}`];
                      return(
                        <div key={si} onClick={()=>togChk(g.id,si)}
                          style={{display:"flex",gap:8,alignItems:"flex-start",cursor:"pointer",padding:"5px 6px",borderRadius:7,transition:"background .15s"}}
                          onMouseEnter={e=>e.currentTarget.style.background=C.card2}
                          onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                          <div style={{width:18,height:18,borderRadius:"50%",background:c?C.green+"20":"transparent",border:`1.5px solid ${c?C.green:C.muted}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,transition:"all .2s"}}>
                            {c&&<Check size={10} color={C.green}/>}
                          </div>
                          <span style={{fontSize:13,color:c?C.muted:C.txt,lineHeight:1.45,textDecoration:c?"line-through":"none"}}>{step}</span>
                        </div>
                      );
                    })}
                  </div>
                  <button onClick={()=>togDone(g.id)} style={{background:isDone?C.green+"14":C.gold+"14",border:`1px solid ${isDone?C.green+"50":C.gold+"50"}`,color:isDone?C.green:C.gold,borderRadius:9,padding:"7px 14px",fontSize:13,cursor:"pointer",fontWeight:600,width:"100%"}}>
                    {isDone?"בטל סימון הושלם":"סמן כמדריך שהושלם"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── TOOLS ──────────────────────────────────────────────── */
function Stars({rating}){
  return(
    <div style={{display:"flex",alignItems:"center",gap:4}}>
      <div style={{display:"flex",gap:1}}>
        {[1,2,3,4,5].map(i=>{
          const full=i<=Math.floor(rating);
          const half=!full&&i===Math.ceil(rating)&&rating%1>=0.3;
          return(
            <svg key={i} width={11} height={11} viewBox="0 0 24 24" fill={full?"#e09830":half?"url(#h)":"none"} stroke="#e09830" strokeWidth={2}>
              {half&&<defs><linearGradient id="h"><stop offset="50%" stopColor="#e09830"/><stop offset="50%" stopColor="transparent"/></linearGradient></defs>}
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
          );
        })}
      </div>
      <span style={{fontSize:11,color:C.gold,fontWeight:600}}>{rating}</span>
    </div>
  );
}

function ToolsP(){
  const [f,setF]=useState("הכל");
  const [openGuide,setOpenGuide]=useState(null);
  const cats=["הכל",...new Set(TOOLS.map(t=>t.cat))];
  const list=f==="הכל"?TOOLS:TOOLS.filter(t=>t.cat===f);
  return(
    <div>
      <div className="fu" style={{marginBottom:16}}>
        <h2 style={{fontSize:19,fontWeight:700,color:C.txt,margin:0}}>ארגז הכלים</h2>
        <p style={{color:C.sub,fontSize:13,marginTop:3}}>לחץ לפתיחה ישירה · כל כלי עם דירוג אמיתי</p>
      </div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>{cats.map(c=><Pill key={c} on={f===c} click={()=>setF(c)}>{c}</Pill>)}</div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {list.map((t,i)=>(
          <div key={t.id} className={`fu d${(i%4)+1}`} style={{background:C.card,border:`1px solid ${openGuide===t.id?C.gold+"50":C.brd}`,borderRadius:14,overflow:"hidden",transition:"border-color .2s"}}>
            <div style={{padding:"14px 16px",display:"flex",alignItems:"center",gap:12}}>
              {/* Logo */}
              <div style={{width:44,height:44,borderRadius:12,background:C.card2,border:`1px solid ${C.brdh}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden",padding:2}}>
                <img src={TOOL_LOGOS[t.id]} alt={t.name}
                  style={{width:36,height:36,objectFit:"contain"}}/>
              </div>
              {/* Info */}
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3}}>
                  <span style={{fontSize:14,fontWeight:700,color:C.txt}}>{t.name}</span>
                  {t.hot&&<span style={{background:C.gold+"1a",border:`1px solid ${C.gold}50`,color:C.gold,fontSize:10,borderRadius:20,padding:"1px 7px"}}>מומלץ</span>}
                  <Tag label={t.cat}/>
                </div>
                <div style={{fontSize:12,color:C.sub,marginBottom:4}}>{t.desc}</div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <Stars rating={t.rating}/>
                  <span style={{fontSize:11,color:C.muted}}>({t.reviews.toLocaleString()} ביקורות)</span>
                </div>
              </div>
              {/* Actions */}
              <div style={{display:"flex",flexDirection:"column",gap:6,flexShrink:0}}>
                <a href={t.url} target="_blank" rel="noreferrer"
                  style={{background:C.gold,border:"none",borderRadius:8,padding:"6px 13px",color:"#000",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"none",display:"flex",alignItems:"center",gap:5,whiteSpace:"nowrap"}}>
                  <ExternalLink size={11}/>פתח
                </a>
                <button onClick={()=>setOpenGuide(openGuide===t.id?null:t.id)}
                  style={{background:C.card2,border:`1px solid ${openGuide===t.id?C.gold+"50":C.brd}`,borderRadius:8,padding:"6px 13px",color:openGuide===t.id?C.gold:C.sub,fontSize:12,cursor:"pointer",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:5}}>
                  <BookOpen size={11}/>הוראות
                </button>
              </div>
            </div>
            {openGuide===t.id&&(
              <div className="fi" style={{borderTop:`1px solid ${C.brd}`,padding:"12px 16px"}}>
                <pre style={{fontFamily:"inherit",fontSize:13,color:C.sub,lineHeight:1.75,whiteSpace:"pre-wrap",background:C.card2,border:`1px solid ${C.brd}`,color:C.txt,borderRadius:9,padding:"12px 14px",margin:0}}>{t.guide}</pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── TEMPLATES ──────────────────────────────────────────── */
function TemplatesP(){
  const [f,setF]=useState("הכל");const [open,setOpen]=useState(null);
  const cats=["הכל",...new Set(TMPLS.map(t=>t.cat))];
  const list=f==="הכל"?TMPLS:TMPLS.filter(t=>t.cat===f);
  return(
    <div>
      <div className="fu" style={{marginBottom:16}}>
        <h2 style={{fontSize:19,fontWeight:700,color:C.txt,margin:0}}>תבניות מוכנות</h2>
        <p style={{color:C.sub,fontSize:13,marginTop:3}}>העתק, מלא, השתמש</p>
      </div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>{cats.map(c=><Pill key={c} on={f===c} click={()=>setF(c)}>{c}</Pill>)}</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {list.map((t,i)=>(
          <div key={t.id} className={`fu d${(i%4)+1}`} style={{background:C.card,border:`1px solid ${open===t.id?C.gold+"50":C.brd}`,borderRadius:14,overflow:"hidden",transition:"border-color .2s"}}>
            <button onClick={()=>setOpen(open===t.id?null:t.id)} style={{width:"100%",background:"none",border:"none",padding:"13px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:10,textAlign:"right"}}>
              <div style={{width:32,height:32,borderRadius:9,background:C.gold+"18",border:`1px solid ${C.gold}40`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <FileText size={14} color={C.gold}/>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:600,color:C.txt}}>{t.title}</div>
                <div style={{marginTop:3}}><Tag label={t.cat}/></div>
              </div>
              <div style={{display:"flex",gap:7,alignItems:"center"}}>
                <CpBtn text={t.body}/>
                {open===t.id?<ChevronUp size={14} color={C.muted}/>:<ChevronDown size={14} color={C.muted}/>}
              </div>
            </button>
            {open===t.id&&(
              <div style={{borderTop:`1px solid ${C.brd}`,padding:"0 16px 14px"}}>
                <pre style={{marginTop:11,fontFamily:"inherit",fontSize:12,color:C.sub,lineHeight:1.75,whiteSpace:"pre-wrap",background:C.card2,border:`1px solid ${C.brd}`,color:C.txt,borderRadius:9,padding:"12px 14px",maxHeight:360,overflowY:"auto"}}>{t.body}</pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── TASKS ──────────────────────────────────────────────── */
const COLS=["לעשות","בתהליך","הושלם"];
const PRIOS={גבוה:{c:"#f05060",bg:"#f0506018"},בינוני:{c:"#e09830",bg:"#e0983018"},נמוך:{c:"#22c55e",bg:"#22c55e18"}};

const STAGE_TASKS=[
  {
    stage:"שלב 1 - מציאת הכיוון שלכם",
    color:"#4466ff",
    tasks:[
      "הגדירו את ה-ICP שלכם (Ideal Customer Profile) - גיל, מגדר, תחומי עניין, כאב",
      "בחרו 3 נישות פוטנציאליות ורשמו אותן בגיליון Google Sheets",
      "חפשו מתחרים בכל נישה ב-Meta Ads Library - רשמו 5 מתחרים לפחות",
      "בדקו כל נישה לפי 4 פרמטרים: ביקוש, תחרות, מרג'ין, ויראליות",
      "בחרו נישה אחת סופית ורשמו 3 סיבות למה בחרתם בה",
      "מחקר ראשוני: חפשו 10+ מוצרים פוטנציאליים בנישה שבחרתם",
    ]
  },
  {
    stage:"שלב 2 - מציאת המוצר שלנו",
    color:"#30c0f0",
    tasks:[
      "הכינו טבלת ניקוד מוצרים ב-Google Sheets (WOW Factor, ויראליות, מרג'ין, תחרות)",
      "בדקו 5 מוצרים לפחות עם ציון 50/70+ בטבלת הניקוד",
      "מצאו ספק ב-AliExpress/CJ לכל מוצר עם דירוג 4.5+ וזמן משלוח מתחת ל-15 יום",
      "הזמינו דוגמה פיזית של המוצר המנצח שבחרתם",
      "הגדירו USP (Unique Selling Point) - מה מבדיל אתכם מהמתחרים",
      "בדקו Value for Money - האם ניתן למכור פי 3 לפחות ממחיר הקנייה",
      "ניתוח מתחרים: בדקו 5 חנויות שמוכרות מוצר דומה ב-Ad Library",
    ]
  },
  {
    stage:"שלב 3 - הקמת תשתית לוגיסטית ועסקית",
    color:"#22c55e",
    tasks:[
      "פתיחת עוסק מורשה / פטור באתר gov.il (חובה לפני הכנסות)",
      "פתיחת חשבון בנק עסקי נפרד",
      "הקמת חנות Shopify (Free Trial - 1$ ל-3 חודשים בלינק המיוחד)",
      "התקנת תבנית Lumin על החנות",
      "רישום דומיין מ-GoDaddy (store.com / shop.co - לא .il)",
      "חיבור PayPlus כשער תשלום (דרך Settings → Payments)",
      "הגדרת מטבע, אזור זמן וכתובת החנות ב-Settings → General",
      "הוספת מוצר ראשון: שם, תיאור, מחיר, תמונות (Status: Draft תחילה)",
      "חיבור CJ Dropshipping / Dianxiaomi לפולפילמנט אוטומטי",
      "הגדרת זמני משלוח: Standard 6-12 ימים / Express 7-14 ימים",
      "התקנת Vitals App להמרה (Reviews, Sticky Cart, Upsell)",
      "הגדרת Trust Badges: משלוח חינם, החזרה 30 יום, תשלום מאובטח",
    ]
  },
  {
    stage:"שלב 4 - הצעת ערך ובידול",
    color:"#e09830",
    tasks:[
      "כתיבת כותרת ראשית מבוססת תוצאה (לא תיאור מוצר)",
      "הכנת 3 Bullet Points: פורמט - תוצאה בזכות מאפיין",
      "הוספת Trust Line: משלוח + החזר + מספר לקוחות",
      "בניית תיאור מוצר: בעיה → פתרון → תועלות → הוכחה → CTA",
      "הכנת תוכן TOF/MOF/BOF - 3 שלבי Funnel",
      "יצירת קריאייטיב UGC ראשון (30-45 שניות)",
      "יצירת קריאייטיב Before/After (3 תמונות לפחות, 5 עם Higgsfield)",
      "יצירת Native Ad - תוכן שנראה אורגני לא ממומן",
      "הכנת 5 Hooks שונים לבדיקה (Pain / Curiosity / Result)",
      "הגדרת Upsell + Bundle לאחר רכישה להגדלת AOV",
    ]
  },
  {
    stage:"שלב 5 - בניית משפך רכישה ומסע לקוח",
    color:"#d040e0",
    tasks:[
      "הגדרת Upsell - מוצר משלים לפני/אחרי קופה",
      "הגדרת Downsell - הצעה זולה יותר למי שלא קנה",
      "הגדרת Bundle - חבילה עם מחיר מיוחד (פי 2-3 יחידות)",
      "הגדרת Cross-sell - מוצר קשור בעמוד המוצר",
      "הגדרת Post-Purchase Upsell עם ReConvert",
      "הגדרת Abandoned Cart Flow ב-Klaviyo (3 מיילים)",
      "הגדרת Pop-up יציאה עם הנחה של 10%",
      "בדיקת 10 תרחישי רכישה שונים מקצה לקצה",
      "הגדרת Welcome Email Flow ב-Klaviyo (3 מיילים)",
    ]
  },
  {
    stage:"שלב 6 - שיווק בעולם ממומן",
    color:"#ff7030",
    tasks:[
      "התקנת Facebook Pixel ואימות ב-Events Manager",
      "הגדרת Events: ViewContent, AddToCart, InitiateCheckout, Purchase",
      "פתיחת קמפיין ABO ראשון - תקציב $20-30 ליום, קהל Broad",
      "יצירת 3 Ad Sets עם קריאייטיבים שונים (UGC / Before-After / Native)",
      "לכל Ad Set: 2-3 קריאייטיבים לבדיקה",
      "הגדרת Attribution: 7-day click, 1-day view",
      "לאחר 48-72 שעות: ניתוח CTR, CPC, CPA, ROAS ראשוני",
      "סגירת Ad Sets עם ROAS מתחת ל-1.5 ו-CTR מתחת ל-0.8%",
      "הגדלת תקציב ב-20% לכל Ad Set שעובד",
      "מעבר ל-CBO לאחר אופטימיזציה מוצלחת",
    ]
  },
  {
    stage:"שלב 7 - הגדלת סל הקניות ושמירת לקוחות",
    color:"#8855ff",
    tasks:[
      "התקנת SEA Post Purchase Survey לסקר לקוחות אחרי רכישה",
      "התקנת Zigpoll לסקרי לקוחות בזמן אמת",
      "הגדרת Shopify Forms לאיסוף פידבק",
      "חישוב AOV נוכחי ומיפוי 3 דרכים להגדיל ב-20%",
      "הטמעת Upsell לפני קופה (Cart Upsell)",
      "הטמעת Cross-sell בעמוד המוצר (3 מוצרים משלימים)",
      "יצירת Bundle Deal חדש עם מחיר מיוחד",
      "הגדרת After-sell: מייל תודה + בקשת ביקורת לאחר 7 ימים",
      "בדיקת LTV (ערך לקוח לאורך זמן) לפי סגמנט",
    ]
  },
  {
    stage:"שלב 8 - שמירת דאטה ותפעול נכון",
    color:"#20c0a0",
    tasks:[
      "הקמת Google Sheets מרכזי עם 4 לשוניות: מכירות, מודעות, מוצרים, לקוחות",
      "הגדרת KPIs שבועיים: ROAS, CPA, CTR, AOV, LTV",
      "מדידת ביצועים לפי Phase: 15 יום, 30 יום, 60 יום",
      "ניתוח CTR: מתחת ל-2% = החלף קריאייטיב",
      "ניתוח ROAS: מתחת ל-2.5 = עצור ובדוק",
      "ניתוח CPC: מעל $3 = בדוק קהל או קריאייטיב",
      "הכנת דוח שבועי: ROAS ממוצע, CPA, AOV, LTV",
      "תכנון Scaling: ROAS 3+ במשך 5 ימים → הגדל 20%",
      "בדיקת Repeat Purchase Rate ו-LTV מדי חודש",
      "מיפוי שלב הבא: Google Shopping / TikTok Ads / SMS Marketing",
    ]
  },
];

function TasksP(){
  const [tasks,setTasks]=useState([]);
  const [newT,setNewT]=useState("");
  const [newPrio,setNewPrio]=useState("בינוני");
  const [adding,setAdding]=useState(false);
  const [activeStage,setActiveStage]=useState(null);
  const [stageChecked,setStageChecked]=useState({});

  const addTask=()=>{
    if(!newT.trim())return;
    setTasks(p=>[...p,{id:Date.now(),title:newT.trim(),col:"לעשות",prio:newPrio,date:new Date().toLocaleDateString("he-IL")}]);
    setNewT("");setAdding(false);
  };
  const moveTask=(id,col)=>setTasks(p=>p.map(t=>t.id===id?{...t,col}:t));
  const delTask=id=>setTasks(p=>p.filter(t=>t.id!==id));
  const togStage=(stageIdx,taskIdx)=>{
    const k=`${stageIdx}-${taskIdx}`;
    setStageChecked(p=>({...p,[k]:!p[k]}));
  };
  const stageProgress=(si)=>{
    const s=STAGE_TASKS[si];
    const done=s.tasks.filter((_,ti)=>stageChecked[`${si}-${ti}`]).length;
    return {done,total:s.tasks.length,pct:Math.round((done/s.tasks.length)*100)};
  };

  return(
    <div>
      <div className="fu" style={{marginBottom:16,display:"flex",alignItems:"flex-start",justifyContent:"space-between"}}>
        <div>
          <h2 style={{fontSize:19,fontWeight:700,color:C.txt,margin:0}}>לוח משימות</h2>
          <p style={{color:C.sub,fontSize:13,marginTop:3}}>{tasks.length} משימות אישיות · {STAGE_TASKS.length} שלבים</p>
        </div>
        <button onClick={()=>setAdding(a=>!a)}
          style={{background:C.gold,border:"none",borderRadius:10,padding:"8px 16px",color:"#000",fontWeight:600,fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
          <Plus size={14}/> משימה חדשה
        </button>
      </div>

      {adding&&(
        <div className="sc" style={{background:C.card,border:`1px solid ${C.gold}50`,borderRadius:14,padding:"16px",marginBottom:16}}>
          <div style={{display:"flex",gap:10,marginBottom:10}}>
            <input value={newT} onChange={e=>setNewT(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addTask()}
              placeholder="כותרת המשימה..." autoFocus
              style={{flex:1,background:C.card2,border:`1px solid ${C.brd}`,color:C.txt,borderRadius:9,padding:"9px 12px",fontSize:14,color:C.txt,direction:"rtl",fontFamily:"inherit"}}/>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <span style={{fontSize:12,color:C.sub}}>עדיפות:</span>
            {Object.keys(PRIOS).map(p=>(
              <button key={p} onClick={()=>setNewPrio(p)}
                style={{background:newPrio===p?PRIOS[p].bg:"transparent",border:`1px solid ${newPrio===p?PRIOS[p].c:C.brd}`,color:newPrio===p?PRIOS[p].c:C.sub,borderRadius:20,padding:"3px 11px",fontSize:12,cursor:"pointer"}}>{p}</button>
            ))}
            <button onClick={addTask} style={{marginRight:"auto",background:C.gold,border:"none",borderRadius:8,padding:"7px 16px",color:"#000",fontWeight:600,fontSize:13,cursor:"pointer"}}>הוסף</button>
            <button onClick={()=>setAdding(false)} style={{background:"none",border:"none",color:C.muted,cursor:"pointer"}}><X size={16}/></button>
          </div>
        </div>
      )}

      {/* Kanban */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:24}}>
        {COLS.map(col=>{
          const colTasks=tasks.filter(t=>t.col===col);
          const colClr=col==="לעשות"?C.muted:col==="בתהליך"?C.gold:C.green;
          return(
            <div key={col} style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:14,padding:"14px",minHeight:200}}>
              <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:12,paddingBottom:10,borderBottom:`1px solid ${C.brd}`}}>
                {col==="לעשות"?<Circle size={13} color={colClr}/>:col==="בתהליך"?<Zap size={13} color={colClr}/>:<Check size={13} color={colClr}/>}
                <span style={{fontSize:13,fontWeight:600,color:colClr}}>{col}</span>
                <span style={{background:C.card2,color:C.muted,borderRadius:20,padding:"1px 8px",fontSize:11,marginRight:"auto"}}>{colTasks.length}</span>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {colTasks.map(task=>(
                  <div key={task.id} style={{background:C.card2,border:`1px solid ${C.brd}`,color:C.txt,borderRadius:10,padding:"11px 12px"}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor=C.brdh}
                    onMouseLeave={e=>e.currentTarget.style.borderColor=C.brd}>
                    <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:7}}>
                      <span style={{fontSize:13,fontWeight:500,color:C.txt,lineHeight:1.4,flex:1,paddingLeft:6}}>{task.title}</span>
                      <button onClick={()=>delTask(task.id)} style={{background:"none",border:"none",cursor:"pointer",color:C.muted,padding:0}}><X size={12}/></button>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:7}}>
                      <span style={{background:PRIOS[task.prio].bg,border:`1px solid ${PRIOS[task.prio].c}60`,color:PRIOS[task.prio].c,fontSize:10,borderRadius:20,padding:"1px 7px"}}>{task.prio}</span>
                      <span style={{fontSize:10,color:C.muted}}>{task.date}</span>
                    </div>
                    <div style={{display:"flex",gap:4}}>
                      {COLS.filter(c=>c!==col).map(c=>(
                        <button key={c} onClick={()=>moveTask(task.id,c)}
                          style={{background:C.card,border:`1px solid ${C.brd}`,color:C.muted,borderRadius:6,padding:"2px 8px",fontSize:10,cursor:"pointer",flex:1,transition:"all .15s"}}
                          onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.color=C.gold;}}
                          onMouseLeave={e=>{e.currentTarget.style.borderColor=C.brd;e.currentTarget.style.color=C.muted;}}>→ {c}</button>
                      ))}
                    </div>
                  </div>
                ))}
                {colTasks.length===0&&<div style={{textAlign:"center",padding:"20px 0",color:C.muted,fontSize:12}}>אין משימות</div>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stage Tasks from Canva */}
      <div style={{marginBottom:8,display:"flex",alignItems:"center",gap:8}}>
        <MessageSquare size={15} color={C.gold}/>
        <span style={{fontSize:15,fontWeight:700,color:C.txt}}>משימות לפי שלב</span>
        <span style={{fontSize:11,color:C.muted}}>מתוך תוכנית הליווי</span>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {STAGE_TASKS.map((st,si)=>{
          const {done,total,pct}=stageProgress(si);
          const isOpen=activeStage===si;
          return(
            <div key={si} className={`fu d${(si%4)+1}`} style={{background:C.card,border:`1px solid ${isOpen?st.color+"60":C.brd}`,borderRadius:14,overflow:"hidden",transition:"border-color .2s"}}>
              <button onClick={()=>setActiveStage(isOpen?null:si)}
                style={{width:"100%",background:"none",border:"none",padding:"13px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"right"}}>
                <div style={{width:32,height:32,borderRadius:9,background:st.color+"18",border:`1px solid ${st.color}40`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <span style={{fontSize:13,fontWeight:700,color:st.color}}>{si+1}</span>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:600,color:C.txt}}>{st.stage}</div>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginTop:4}}>
                    <div style={{flex:1,background:C.card2,borderRadius:4,height:3,overflow:"hidden",maxWidth:120}}>
                      <div style={{height:"100%",background:st.color,width:`${pct}%`,transition:"width .3s",borderRadius:4}}/>
                    </div>
                    <span style={{fontSize:11,color:C.muted}}>{done}/{total} הושלמו</span>
                  </div>
                </div>
                <div style={{display:"flex",gap:6,alignItems:"center"}}>
                  {isOpen?<ChevronUp size={14} color={C.muted}/>:<ChevronDown size={14} color={C.muted}/>}
                </div>
              </button>
              {isOpen&&(
                <div style={{borderTop:`1px solid ${C.brd}`,padding:"12px 16px"}}>
                  <div style={{display:"flex",flexDirection:"column",gap:6}}>
                    {st.tasks.map((task,ti)=>{
                      const checked=stageChecked[`${si}-${ti}`];
                      return(
                        <div key={ti} onClick={()=>togStage(si,ti)}
                          style={{display:"flex",gap:10,alignItems:"flex-start",cursor:"pointer",padding:"7px 8px",borderRadius:8,transition:"background .15s"}}
                          onMouseEnter={e=>e.currentTarget.style.background=C.card2}
                          onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                          <div style={{width:18,height:18,borderRadius:"50%",background:checked?st.color+"25":"transparent",border:`1.5px solid ${checked?st.color:C.muted}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,transition:"all .2s"}}>
                            {checked&&<Check size={10} color={st.color}/>}
                          </div>
                          <span style={{fontSize:13,color:checked?C.muted:C.txt,lineHeight:1.5,textDecoration:checked?"line-through":"none",transition:"all .2s"}}>{task}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── AI FOR YOU ─────────────────────────────────────────── */
const AI4_CHIPS=["בצע מחקר מוצר בשבילי","עזור לי לכתוב מודעה ממירה","נתח את המתחרים שלי","צור לי פרומפט לתמונה 4K","שאל אותי על העסק שלי"];

function AiForYouP({userName}){
  const [msgs,setMsgs]=useState([]);
  const [inp,setInp]=useState("");const [load,setLoad]=useState(false);
  const [started,setStarted]=useState(false);
  const [filePreview,setFilePreview]=useState(null);
  const [recording,setRecording]=useState(false);
  const [recTime,setRecTime]=useState(0);
  const recRef=useRef(null);
  const timerRef=useRef(null);
  const endRef=useRef(null);
  useEffect(()=>endRef.current?.scrollIntoView({behavior:"smooth"}),[msgs]);

  const toggleRecording=()=>{
    if(recording){
      if(recRef.current){try{recRef.current.stop();}catch{}}
      recRef.current=null;
      clearInterval(timerRef.current);
      setRecording(false);setRecTime(0);
    } else {
      const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
      if(!SR){alert("הדפדפן לא תומך בזיהוי קולי. נסה Chrome או Edge.");return;}
      const rec=new SR();
      rec.lang="he-IL";
      rec.continuous=true;
      rec.interimResults=true;
      let finalText="";
      rec.onresult=(e)=>{
        let interim="";
        for(let i=e.resultIndex;i<e.results.length;i++){
          if(e.results[i].isFinal) finalText+=e.results[i][0].transcript;
          else interim+=e.results[i][0].transcript;
        }
        setInp(finalText+interim);
      };
      rec.onerror=()=>{setRecording(false);setRecTime(0);clearInterval(timerRef.current);recRef.current=null;};
      rec.onend=()=>{setRecording(false);setRecTime(0);clearInterval(timerRef.current);recRef.current=null;};
      rec.start();
      recRef.current=rec;
      setRecording(true);setRecTime(0);
      timerRef.current=setInterval(()=>setRecTime(t=>t+1),1000);
    }
  };

  const buildApiContent=(text,fp)=>{
    if(!fp||!fp.base64) return text||"";
    const parts=[];
    if(fp.type==="image"){
      parts.push({type:"image",source:{type:"base64",media_type:fp.mimeType,data:fp.base64}});
    } else {
      const docMime=fp.mimeType==="application/pdf"?"application/pdf":"text/plain";
      parts.push({type:"document",source:{type:"base64",media_type:docMime,data:fp.base64}});
    }
    if(text) parts.push({type:"text",text});
    return parts;
  };

  const send=async(txt)=>{
    const t=(txt||inp).trim();
    const fp=filePreview;
    if(!t&&!fp)return;if(load)return;
    if(!started)setStarted(true);
    const displayContent=t+(fp?`\n[קובץ מצורף: ${fp.name}]`:"");
    const apiContent=buildApiContent(t,fp);
    const msgForDisplay={role:"user",content:displayContent,filePreview:fp||undefined};
    const msgForApi={role:"user",content:apiContent};
    const nextDisplay=[...msgs,msgForDisplay];
    const nextApi=[...msgs.map(m=>({role:m.role,content:typeof m.content==="string"?m.content:m.content})),msgForApi];
    setMsgs(nextDisplay);setInp("");setFilePreview(null);setLoad(true);
    try{
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1500,system:getAI4Sys(userName||""),messages:nextApi.map(m=>({role:m.role,content:m.content}))})});
      const d=await r.json();
      setMsgs(p=>[...p,{role:"assistant",content:d.content?.[0]?.text||"שגיאה."}]);
    }catch{setMsgs(p=>[...p,{role:"assistant",content:"שגיאת חיבור."}]);}
    setLoad(false);
  };

  return(
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 70px)"}}>
      {!started?(
        /* Gemini-style landing */
        <div className="sc" style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:28,padding:"20px"}}>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:13,color:C.sub,marginBottom:6}}>שלום, כאן</div>
            <h1 style={{fontSize:32,fontWeight:700,color:C.txt,margin:0,letterSpacing:-0.5}}>שלום, {userName}</h1>
            <p style={{color:C.sub,fontSize:14,marginTop:8,maxWidth:340}}>ה-AI האישי שלך · לומד אותך ואת העסק שלך · מותאם לדרופשיפינג</p>
          </div>

          {/* Big search box */}
          <div style={{width:"100%",maxWidth:560}}>
            {/* File preview */}
            {filePreview&&(
              <div style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:12,padding:"8px 12px",marginBottom:8,display:"flex",alignItems:"center",gap:8}}>
                {filePreview.type==="image"
                  ? <img src={filePreview.url} style={{width:48,height:48,borderRadius:8,objectFit:"cover"}}/>
                  : <div style={{width:48,height:48,borderRadius:8,background:C.card2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>📄</div>
                }
                <div style={{flex:1}}>
                  <div style={{fontSize:12,fontWeight:600,color:C.txt}}>{filePreview.name}</div>
                  <div style={{fontSize:11,color:C.sub}}>{filePreview.size}</div>
                </div>
                <button onClick={()=>setFilePreview(null)} style={{background:"none",border:"none",cursor:"pointer",color:C.muted,fontSize:16}}>×</button>
              </div>
            )}
            {/* Recording indicator */}
            {recording&&(
              <div style={{background:`${C.red}15`,border:`1px solid ${C.red}40`,borderRadius:12,padding:"8px 14px",marginBottom:8,display:"flex",alignItems:"center",gap:8}}>
                <div style={{width:10,height:10,borderRadius:"50%",background:C.red,animation:"pulse 1s infinite"}}/>
                <span style={{fontSize:13,color:C.red,fontWeight:600}}>מקליט... לחץ שוב לעצור</span>
                <span style={{fontSize:12,color:C.muted,marginRight:"auto"}}>{recTime}s</span>
              </div>
            )}
            <div style={{background:C.card,border:`1px solid ${recording?C.red:C.brd}`,borderRadius:20,padding:"14px 18px",display:"flex",alignItems:"center",gap:12,boxShadow:`0 4px 24px rgba(0,0,0,.25)`,transition:"border-color .2s"}}
              onMouseEnter={e=>{if(!recording)e.currentTarget.style.borderColor=C.brdh;}}
              onMouseLeave={e=>{if(!recording)e.currentTarget.style.borderColor=C.brd;}}>
              <div style={{flex:1}}>
                <input value={inp} onChange={e=>setInp(e.target.value)}
                  onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send()}
                  placeholder={recording?"מקליט...":"שאל אותי כל דבר..."}
                  disabled={recording}
                  style={{width:"100%",background:"none",border:"none",fontSize:15,color:C.txt,direction:"rtl",fontFamily:"inherit"}}/>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                {/* File upload */}
                <label title="העלאת קובץ/תמונה" style={{cursor:"pointer",display:"flex",alignItems:"center",padding:4,borderRadius:8,transition:"background .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.background=C.card2}
                  onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                  <input type="file" accept="image/*,.pdf,.txt,.doc,.docx" style={{display:"none"}}
                    onChange={e=>{
                      const f=e.target.files?.[0];if(!f)return;
                      const isImg=f.type.startsWith("image/");
                      const url=isImg?URL.createObjectURL(f):null;
                      const kb=Math.round(f.size/1024);
                      const reader=new FileReader();
                      reader.onload=()=>{
                        const b64=reader.result.split(",")[1];
                        setFilePreview({name:f.name,size:`${kb}KB`,type:isImg?"image":"file",url,base64:b64,mimeType:f.type});
                      };
                      reader.readAsDataURL(f);
                      e.target.value="";
                    }}/>
                  <Paperclip size={17} color={filePreview?C.gold:C.muted}/>
                </label>
                {/* Voice recording */}
                <button title="הקלטה קולית" onClick={toggleRecording}
                  style={{background:"none",border:"none",cursor:"pointer",padding:4,borderRadius:8,transition:"background .15s",display:"flex",alignItems:"center"}}
                  onMouseEnter={e=>e.currentTarget.style.background=C.card2}
                  onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                  <Mic size={17} color={recording?C.red:C.muted}/>
                </button>
                {/* Send */}
                <button onClick={()=>send()}
                  style={{background:(inp.trim()||filePreview)?C.gold:C.card2,border:`1px solid ${(inp.trim()||filePreview)?C.gold:C.brd}`,borderRadius:10,width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all .2s"}}>
                  <Send size={14} color={(inp.trim()||filePreview)?"#000":C.muted}/>
                </button>
              </div>
            </div>
          </div>

          {/* Chips */}
          <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",maxWidth:560}}>
            {AI4_CHIPS.map((chip,i)=>(
              <button key={i} onClick={()=>send(chip)} className={`fu d${(i%4)+1}`}
                style={{background:C.card,border:`1px solid ${C.brd}`,color:C.sub,borderRadius:20,padding:"8px 16px",fontSize:13,cursor:"pointer",transition:"all .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.color=C.txt;e.currentTarget.style.background=C.card2;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=C.brd;e.currentTarget.style.color=C.sub;e.currentTarget.style.background=C.card;}}>
                {chip}
              </button>
            ))}
          </div>

          <div style={{fontSize:11,color:C.muted,display:"flex",alignItems:"center",gap:5}}>
            <Sparkles size={11}/> AI אישי שלומד עליך ועל העסק שלך
          </div>
        </div>
      ):(
        /* Chat mode */
        <>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14,padding:"12px 16px",background:C.card,border:`1px solid ${C.brd}`,borderRadius:14,flexShrink:0}}>
            <div style={{width:36,height:36,borderRadius:"50%",background:`linear-gradient(135deg,${C.purp},${C.blue})`,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Sparkles size={16} color="#fff"/>
            </div>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:C.txt}}>AI FOR YOU</div>
              <div style={{fontSize:11,color:C.sub}}>AI אישי · לומד אותך ואת העסק שלך</div>
            </div>
            <button onClick={()=>{setStarted(false);setMsgs([]);}} style={{marginRight:"auto",background:"none",border:`1px solid ${C.brd}`,borderRadius:8,padding:"5px 11px",color:C.sub,fontSize:12,cursor:"pointer"}}>שיחה חדשה</button>
          </div>
          <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:10,marginBottom:10}}>
            {msgs.map((m,i)=>(
              <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-start":"flex-end",animation:"fadeUp .3s ease both"}}>
                {m.role==="assistant"&&<div style={{width:24,height:24,borderRadius:"50%",background:`linear-gradient(135deg,${C.purp},${C.blue})`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginLeft:8,alignSelf:"flex-end"}}><Sparkles size={11} color="#fff"/></div>}
                <div style={{maxWidth:"76%",background:m.role==="user"?C.card2:`linear-gradient(135deg,${C.purp}14,${C.blue}08)`,border:`1px solid ${m.role==="user"?C.brd:C.purp+"30"}`,borderRadius:m.role==="user"?"12px 12px 4px 12px":"12px 12px 12px 4px",padding:"10px 13px",fontSize:14,color:C.txt,lineHeight:1.65,whiteSpace:"pre-wrap"}}>{m.content}</div>
              </div>
            ))}
            {load&&<div style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",gap:8}}><div style={{width:24,height:24,borderRadius:"50%",background:`linear-gradient(135deg,${C.purp},${C.blue})`,display:"flex",alignItems:"center",justifyContent:"center"}}><Sparkles size={11} color="#fff"/></div><div style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:"12px 12px 12px 4px",padding:"10px 15px",display:"flex",gap:4}}>{[0,1,2].map(i=><div key={i} style={{width:5,height:5,borderRadius:"50%",background:C.sub,animation:"blink 1.2s infinite",animationDelay:`${i*.2}s`}}/>)}</div></div>}
            <div ref={endRef}/>
          </div>
          <div style={{display:"flex",gap:7,flexShrink:0}}>
            <input value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send()}
              placeholder="שאל כל דבר - AI FOR YOU מכיר אותך..."
              style={{flex:1,background:C.card,border:`1px solid ${C.brd}`,borderRadius:12,padding:"11px 14px",fontSize:14,color:C.txt,direction:"rtl",fontFamily:"inherit"}}/>
            <button onClick={()=>send()} style={{background:inp.trim()&&!load?C.purp:C.card,border:"none",borderRadius:12,width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",cursor:inp.trim()&&!load?"pointer":"default",transition:"background .2s"}}>
              <Send size={15} color={inp.trim()&&!load?"#fff":C.muted}/>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* ── MINI KAI ───────────────────────────────────────────── */
function MiniKai({onClose,onExpand}){
  const [msgs,setMsgs]=useState([{role:"assistant",content:"שלום! אני Kai. שאל אותי כל שאלה."}]);
  const [inp,setInp]=useState("");const [load,setLoad]=useState(false);
  const endRef=useRef(null);
  useEffect(()=>endRef.current?.scrollIntoView({behavior:"smooth"}),[msgs]);
  const send=async(txt)=>{
    const t=(txt||inp).trim();if(!t||load)return;
    const next=[...msgs,{role:"user",content:t}];
    setMsgs(next);setInp("");setLoad(true);
    try{
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:500,system:KAI_SYS,messages:next.map(m=>({role:m.role,content:m.content}))})});
      const d=await r.json();
      setMsgs(p=>[...p,{role:"assistant",content:d.content?.[0]?.text||"שגיאה."}]);
    }catch{setMsgs(p=>[...p,{role:"assistant",content:"שגיאת חיבור."}]);}
    setLoad(false);
  };
  return(
    <div style={{position:"fixed",bottom:86,left:22,width:320,background:C.card,border:`1px solid ${C.brd}`,borderRadius:16,overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,.6)",zIndex:900,display:"flex",flexDirection:"column",maxHeight:400,animation:"scaleIn .25s ease both"}}>
      <div style={{padding:"10px 13px",background:C.card2,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${C.brd}`}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <img src={AVATAR_SRC} alt="" style={{width:26,height:26,borderRadius:"50%",objectFit:"cover",border:`1.5px solid ${C.gold}`}}/>
          <div>
            <div style={{fontSize:12,fontWeight:600,color:C.txt}}>Kai - Kaiel Kayam</div>
            <div style={{display:"flex",alignItems:"center",gap:4}}><span style={{width:5,height:5,borderRadius:"50%",background:C.green,display:"inline-block"}}/><span style={{fontSize:10,color:C.green}}>פעיל</span></div>
          </div>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <button onClick={onExpand} style={{background:"none",border:"none",cursor:"pointer",color:C.sub,fontSize:11}}>הרחב</button>
          <X size={14} color={C.muted} style={{cursor:"pointer"}} onClick={onClose}/>
        </div>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:10,display:"flex",flexDirection:"column",gap:7}}>
        {msgs.length===1&&<div style={{display:"flex",flexWrap:"wrap",gap:5}}>{KAI_QS.slice(0,4).map((q,i)=><button key={i} onClick={()=>send(q)} style={{background:C.card2,border:`1px solid ${C.brd}`,color:C.sub,borderRadius:9,padding:"3px 8px",fontSize:11,cursor:"pointer"}}>{q}</button>)}</div>}
        {msgs.map((m,i)=><div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-start":"flex-end"}}><div style={{maxWidth:"88%",background:m.role==="user"?C.card2:C.gold+"18",border:`1px solid ${m.role==="user"?C.brd:C.gold+"30"}`,borderRadius:9,padding:"7px 10px",fontSize:13,color:C.txt,lineHeight:1.5,whiteSpace:"pre-wrap"}}>{m.content}</div></div>)}
        {load&&<div style={{display:"flex",justifyContent:"flex-end"}}><div style={{background:C.card2,borderRadius:9,padding:"7px 13px",display:"flex",gap:4}}>{[0,1,2].map(i=><div key={i} style={{width:4,height:4,borderRadius:"50%",background:C.sub,animation:"blink 1.2s infinite",animationDelay:`${i*.2}s`}}/>)}</div></div>}
        <div ref={endRef}/>
      </div>
      <div style={{padding:9,borderTop:`1px solid ${C.brd}`,display:"flex",gap:6}}>
        <input value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="שאל..." style={{flex:1,background:C.card2,border:`1px solid ${C.brd}`,color:C.txt,borderRadius:7,padding:"6px 9px",fontSize:13,color:C.txt,direction:"rtl",fontFamily:"inherit"}}/>
        <button onClick={()=>send()} style={{background:inp.trim()&&!load?C.gold:C.card2,border:"none",borderRadius:7,width:32,height:32,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s"}}><Send size={13} color={inp.trim()&&!load?"#000":C.muted}/></button>
      </div>
    </div>
  );
}

/* ── NOTIFICATION PANEL ─────────────────────────────────── */
function NotifPanel({onClose,onRead,readIds}){
  const unreadCount = NOTIFICATIONS.filter(n=>!readIds.has(n.id)).length;
  return(
    <div className="fi" style={{position:"fixed",inset:0,zIndex:1100}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()}
        style={{position:"fixed",top:0,right:188,width:340,height:"100vh",background:C.side,borderLeft:`1px solid ${C.brd}`,display:"flex",flexDirection:"column",animation:"slideNotif .25s ease both",zIndex:1100,boxShadow:"-8px 0 32px rgba(0,0,0,.4)"}}>
        <style>{"@keyframes slideNotif{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}"}</style>
        <div style={{padding:"16px 18px",borderBottom:`1px solid ${C.brd}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div>
            <div style={{fontSize:15,fontWeight:700,color:C.txt}}>עדכונים</div>
            {unreadCount>0&&<div style={{fontSize:11,color:C.gold,marginTop:2}}>{unreadCount} חדשים לא נקראו</div>}
          </div>
          <X size={16} color={C.muted} style={{cursor:"pointer"}} onClick={onClose}/>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"10px"}}>
          {NOTIFICATIONS.length===0?(
            <div style={{textAlign:"center",padding:"40px 20px",color:C.muted}}>
              <Bell size={32} color={C.brd} style={{margin:"0 auto 12px",display:"block"}}/>
              <div style={{fontSize:14}}>אין עדכונים כרגע</div>
              <div style={{fontSize:11,marginTop:4,color:C.brdh}}>עדכונים חדשים יופיעו כאן</div>
            </div>
          ):(
            [...NOTIFICATIONS].reverse().map(n=>{
              const isNew = !readIds.has(n.id);
              return(
                <div key={n.id} onClick={()=>onRead(n.id)}
                  style={{background:isNew?C.gold+"0d":C.card2,border:`1px solid ${isNew?C.gold+"40":C.brd}`,borderRadius:12,padding:"13px 14px",marginBottom:8,cursor:"pointer",transition:"all .2s",position:"relative"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=C.brdh}
                  onMouseLeave={e=>e.currentTarget.style.borderColor=isNew?C.gold+"40":C.brd}>
                  {isNew&&<div style={{position:"absolute",top:10,left:10,width:7,height:7,borderRadius:"50%",background:C.gold,animation:"pulse 2s infinite"}}/>}
                  <div style={{fontSize:14,fontWeight:600,color:C.txt,marginBottom:5,paddingLeft:isNew?14:0}}>{n.title}</div>
                  <div style={{fontSize:12,color:C.sub,lineHeight:1.55,marginBottom:7}}>{n.body}</div>
                  <div style={{fontSize:10,color:C.muted}}>{n.date}</div>
                </div>
              );
            })
          )}
        </div>
        <div style={{padding:"12px 18px",borderTop:`1px solid ${C.brd}`,fontSize:11,color:C.muted,textAlign:"center"}}>
          עדכונים מ-Kaiel Kayam · Academy
        </div>
      </div>
    </div>
  );
}


/* ── COMMUNITY ──────────────────────────────────────────── */
const CHANNELS=[
  {id:"כללי",   emoji:"💬",desc:"שיחות כלליות"},
  {id:"מוצרים", emoji:"📦",desc:"שיתוף מוצרים ורעיונות"},
  {id:"פרסום",  emoji:"📢",desc:"קמפיינים ומודעות"},
  {id:"הצלחות", emoji:"🏆",desc:"ניצחונות ותוצאות"},
  {id:"שאלות",  emoji:"🙋",desc:"שאלות ועזרה הדדית"},
];

const EMOJI_LIST=["👍","❤️","🔥","💯","🚀","😂","👀","💪"];

function CommunityP({userName}){
  const [ch,setCh]=useState("כללי");
  const [msgs,setMsgs]=useState({});
  const [inp,setInp]=useState("");
  const [sending,setSending]=useState(false);
  const [loaded,setLoaded]=useState(false);
  const [showEmoji,setShowEmoji]=useState(false);
  const [hovered,setHovered]=useState(null);
  const [commRecording,setCommRecording]=useState(false);
  const [commImgPreview,setCommImgPreview]=useState(null);
  const endRef=useRef(null);
  const inputRef=useRef(null);
  const commRecRef=useRef(null);
  const commFileRef=useRef(null);

  const load=async()=>{
    try{
      const r=await window.storage.get("community-v1",true);
      if(r&&r.value) setMsgs(JSON.parse(r.value));
    }catch(e){}
    setLoaded(true);
  };

  useEffect(()=>{
    load();
    const iv=setInterval(load,4000);
    return()=>clearInterval(iv);
  },[]);

  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs,ch]);

  const toggleCommRecording=()=>{
    if(commRecording){
      if(commRecRef.current){try{commRecRef.current.stop();}catch{}}
      commRecRef.current=null;
      setCommRecording(false);
    } else {
      const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
      if(!SR){alert("הדפדפן לא תומך בזיהוי קולי. נסה Chrome.");return;}
      const rec=new SR();
      rec.lang="he-IL";
      rec.continuous=false;
      rec.interimResults=false;
      rec.onresult=(e)=>{
        const t=e.results[0][0].transcript;
        setInp(p=>(p?p+" ":"")+t);
      };
      rec.onerror=()=>{setCommRecording(false);commRecRef.current=null;};
      rec.onend=()=>{setCommRecording(false);commRecRef.current=null;};
      rec.start();
      commRecRef.current=rec;
      setCommRecording(true);
    }
  };

  const handleCommImage=(e)=>{
    const f=e.target.files?.[0];if(!f)return;
    if(f.size>800000){alert("תמונה גדולה מדי. מקסימום 800KB.");e.target.value="";return;}
    const reader=new FileReader();
    reader.onload=()=>setCommImgPreview({name:f.name,data:reader.result});
    reader.readAsDataURL(f);
    e.target.value="";
  };

  const send=async(text)=>{
    const t=(text||inp).trim();
    const img=commImgPreview;
    if(!t&&!img||sending)return;
    setSending(true);setInp("");setCommImgPreview(null);
    const now=new Date();
    const msg={
      id:Date.now()+"_"+Math.random().toString(36).slice(2),
      author:userName||"אנונימי",
      text:t,
      image:img?img.data:undefined,
      time:now.toLocaleTimeString("he-IL",{hour:"2-digit",minute:"2-digit"}),
      date:now.toLocaleDateString("he-IL"),
      reactions:{},
    };
    try{
      const cur={...msgs};
      if(!cur[ch])cur[ch]=[];
      cur[ch]=[...cur[ch],msg].slice(-200);
      setMsgs({...cur});
      await window.storage.set("community-v1",JSON.stringify(cur),true);
    }catch(e){}
    setSending(false);
    setTimeout(()=>inputRef.current?.focus(),50);
  };

  const react=async(msgId,emoji)=>{
    try{
      const cur=JSON.parse(JSON.stringify(msgs));
      if(!cur[ch])return;
      const m=cur[ch].find(m=>m.id===msgId);
      if(!m)return;
      if(!m.reactions)m.reactions={};
      if(!m.reactions[emoji])m.reactions[emoji]=[];
      const idx=m.reactions[emoji].indexOf(userName);
      if(idx>=0)m.reactions[emoji].splice(idx,1);
      else m.reactions[emoji].push(userName);
      if(m.reactions[emoji].length===0)delete m.reactions[emoji];
      setMsgs({...cur});
      await window.storage.set("community-v1",JSON.stringify(cur),true);
    }catch(e){}
  };

  const chMsgs=(msgs[ch]||[]);
  const unreadPerCh=(c)=>(msgs[c]||[]).length;

  return(
    <div style={{display:"flex",height:"calc(100vh - 48px)",borderRadius:16,overflow:"hidden",border:`1px solid ${C.brd}`,background:C.card}}>

      {/* LEFT - Channels */}
      <div style={{width:220,background:C.side,borderLeft:`1px solid ${C.brd}`,display:"flex",flexDirection:"column",flexShrink:0}}>
        <div style={{padding:"14px 14px 10px",borderBottom:`1px solid ${C.brd}`}}>
          <div style={{fontSize:13,fontWeight:700,color:C.txt}}>קהילת האקדמיה</div>
          <div style={{fontSize:11,color:C.sub,marginTop:2,display:"flex",alignItems:"center",gap:4}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:C.green}}/>
            {loaded?"פעיל":"טוען..."}
          </div>
        </div>
        <div style={{padding:"8px 6px",flex:1}}>
          <div style={{fontSize:10,fontWeight:600,color:C.muted,letterSpacing:1.5,textTransform:"uppercase",padding:"4px 8px",marginBottom:4}}>ערוצים</div>
          {CHANNELS.map(c=>{
            const cnt=unreadPerCh(c.id);
            const active=ch===c.id;
            return(
              <button key={c.id} onClick={()=>setCh(c.id)}
                style={{width:"100%",background:active?C.gold+"18":"transparent",border:"none",borderRadius:8,padding:"8px 10px",cursor:"pointer",display:"flex",alignItems:"center",gap:7,color:active?C.gold:C.txt,fontSize:13,fontWeight:active?600:400,transition:"all .15s",textAlign:"right",marginBottom:2}}
                onMouseEnter={e=>{if(!active)e.currentTarget.style.background=C.card2;}}
                onMouseLeave={e=>{if(!active)e.currentTarget.style.background="transparent";}}>
                <span style={{fontSize:13}}>{c.emoji}</span>
                <span style={{flex:1}}>{c.id}</span>
                {cnt>0&&!active&&<span style={{background:C.brdh,color:C.sub,borderRadius:20,padding:"0px 6px",fontSize:10}}>{cnt}</span>}
              </button>
            );
          })}
        </div>
        <div style={{padding:"10px 14px",borderTop:`1px solid ${C.brd}`,display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:`linear-gradient(135deg,${C.gold},${C.blue})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#000",flexShrink:0}}>
            {(userName||"?")[0].toUpperCase()}
          </div>
          <div style={{flex:1,overflow:"hidden"}}>
            <div style={{fontSize:12,fontWeight:600,color:C.txt,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{userName}</div>
            <div style={{fontSize:10,color:C.green}}>מחובר</div>
          </div>
        </div>
      </div>

      {/* RIGHT - Chat */}
      <div style={{flex:1,display:"flex",flexDirection:"column",background:C.bg}}>
        {/* Channel header */}
        <div style={{padding:"12px 18px",borderBottom:`1px solid ${C.brd}`,display:"flex",alignItems:"center",gap:10,background:C.card,flexShrink:0}}>
          <span style={{fontSize:18}}>{CHANNELS.find(c=>c.id===ch)?.emoji}</span>
          <div>
            <div style={{fontSize:14,fontWeight:700,color:C.txt}}>{ch}</div>
            <div style={{fontSize:11,color:C.sub}}>{CHANNELS.find(c=>c.id===ch)?.desc}</div>
          </div>
          <div style={{marginRight:"auto",fontSize:11,color:C.muted}}>{chMsgs.length} הודעות</div>
        </div>

        {/* Messages */}
        <div style={{flex:1,overflowY:"auto",padding:"16px 18px",display:"flex",flexDirection:"column",gap:2}}>
          {!loaded&&(
            <div style={{textAlign:"center",padding:"40px",color:C.muted}}>
              <div style={{fontSize:24,marginBottom:8}}>··</div>
              <div style={{fontSize:13}}>טוען הודעות...</div>
            </div>
          )}
          {loaded&&chMsgs.length===0&&(
            <div style={{textAlign:"center",padding:"50px 20px",color:C.muted}}>
              <div style={{fontSize:36,marginBottom:10}}>{CHANNELS.find(c=>c.id===ch)?.emoji}</div>
              <div style={{fontSize:14,fontWeight:600,color:C.sub,marginBottom:4}}>ברוכים הבאים ל-{ch}</div>
              <div style={{fontSize:12}}>{CHANNELS.find(c=>c.id===ch)?.desc}</div>
              <div style={{fontSize:12,marginTop:4}}>היה הראשון לכתוב!</div>
            </div>
          )}
          {chMsgs.map((m,i)=>{
            const mine=m.author===userName;
            const prevSame=i>0&&chMsgs[i-1].author===m.author&&chMsgs[i-1].date===m.date;
            const reactions=Object.entries(m.reactions||{}).filter(([,arr])=>arr.length>0);
            return(
              <div key={m.id} style={{display:"flex",flexDirection:"column",alignItems:mine?"flex-start":"flex-end",marginTop:prevSame?2:10}}
                onMouseEnter={()=>setHovered(m.id)}
                onMouseLeave={()=>setHovered(null)}>
                {!prevSame&&(
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3,flexDirection:mine?"row":"row-reverse"}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:`linear-gradient(135deg,${mine?C.gold:C.blue},${mine?C.goldD:C.purp})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#fff"}}>
                      {m.author[0].toUpperCase()}
                    </div>
                    <span style={{fontSize:12,fontWeight:600,color:mine?C.gold:C.blue}}>{m.author}</span>
                    <span style={{fontSize:10,color:C.muted}}>{m.time} · {m.date}</span>
                  </div>
                )}
                <div style={{position:"relative",maxWidth:"70%"}}>
                  <div style={{background:mine?`linear-gradient(135deg,${C.gold}22,${C.gold}10)`:C.card,border:`1px solid ${mine?C.gold+"40":C.brd}`,borderRadius:mine?"16px 4px 16px 16px":"4px 16px 16px 16px",padding:"9px 13px",fontSize:14,color:C.txt,lineHeight:1.55,wordBreak:"break-word"}}>
                    {m.image&&<img src={m.image} style={{width:"100%",maxWidth:240,borderRadius:8,display:"block",marginBottom:m.text?6:0}} alt=""/>}
                    {m.text}
                    {prevSame&&!m.image&&<span style={{fontSize:10,color:C.muted,marginRight:8,float:"left"}}>{m.time}</span>}
                  </div>
                  {/* Reactions */}
                  {reactions.length>0&&(
                    <div style={{display:"flex",gap:4,marginTop:3,flexWrap:"wrap",justifyContent:mine?"flex-start":"flex-end"}}>
                      {reactions.map(([emoji,users])=>(
                        <button key={emoji} onClick={()=>react(m.id,emoji)}
                          style={{background:users.includes(userName)?C.gold+"20":C.card2,border:`1px solid ${users.includes(userName)?C.gold+"50":C.brd}`,borderRadius:20,padding:"2px 7px",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:3,color:C.sub}}>
                          {emoji}<span style={{fontSize:11,color:C.muted}}>{users.length}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  {/* Hover emoji picker */}
                  {hovered===m.id&&(
                    <div className="fi" style={{position:"absolute",top:-32,[mine?"left":"right"]:0,background:C.card,border:`1px solid ${C.brd}`,borderRadius:20,padding:"4px 8px",display:"flex",gap:2,zIndex:10,boxShadow:"0 4px 12px rgba(0,0,0,.4)"}}>
                      {EMOJI_LIST.map(e=>(
                        <button key={e} onClick={()=>react(m.id,e)}
                          style={{background:"none",border:"none",cursor:"pointer",fontSize:14,padding:"2px",borderRadius:6,transition:"transform .15s"}}
                          onMouseEnter={ev=>ev.currentTarget.style.transform="scale(1.3)"}
                          onMouseLeave={ev=>ev.currentTarget.style.transform="scale(1)"}>
                          {e}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div ref={endRef}/>
        </div>

        {/* Input */}
        <div style={{padding:"12px 16px",borderTop:`1px solid ${C.brd}`,background:C.card,flexShrink:0}}>
          {/* Image preview */}
          {commImgPreview&&(
            <div style={{background:C.card2,border:`1px solid ${C.brd}`,borderRadius:10,padding:"6px 10px",marginBottom:8,display:"flex",alignItems:"center",gap:8}}>
              <img src={commImgPreview.data} style={{width:40,height:40,borderRadius:6,objectFit:"cover"}}/>
              <div style={{flex:1,fontSize:12,color:C.sub,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{commImgPreview.name}</div>
              <button onClick={()=>setCommImgPreview(null)} style={{background:"none",border:"none",cursor:"pointer",color:C.muted,fontSize:16,lineHeight:1}}>×</button>
            </div>
          )}
          {/* Recording indicator */}
          {commRecording&&(
            <div style={{background:`${C.red}15`,border:`1px solid ${C.red}40`,borderRadius:10,padding:"5px 12px",marginBottom:8,display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:C.red,animation:"pulse 1s infinite"}}/>
              <span style={{fontSize:12,color:C.red,fontWeight:600}}>מקליט... לחץ שוב לעצור</span>
            </div>
          )}
          <input type="file" accept="image/*" ref={commFileRef} style={{display:"none"}} onChange={handleCommImage}/>
          <div style={{display:"flex",alignItems:"center",gap:8,background:C.card2,border:`1px solid ${commRecording?C.red:C.brd}`,color:C.txt,borderRadius:14,padding:"8px 12px",transition:"border-color .2s"}}
            onClick={()=>setShowEmoji(false)}>
            <div style={{flex:1,display:"flex",alignItems:"center",gap:8}}>
              <button title="שתף תמונה" onClick={()=>commFileRef.current?.click()}
                style={{background:"none",border:"none",cursor:"pointer",padding:2,display:"flex",flexShrink:0}}>
                <Paperclip size={16} color={commImgPreview?C.gold:C.muted}/>
              </button>
              <input ref={inputRef} value={inp} onChange={e=>setInp(e.target.value)}
                onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}}
                placeholder={commRecording?`מקליט ב-${ch}...`:`כתוב הודעה ב-${ch}...`}
                disabled={commRecording}
                style={{flex:1,background:"none",border:"none",fontSize:14,color:C.txt,direction:"rtl",fontFamily:"inherit"}}/>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6,flexShrink:0}}>
              <div style={{position:"relative"}}>
                <button onClick={e=>{e.stopPropagation();setShowEmoji(s=>!s);}}
                  style={{background:"none",border:"none",cursor:"pointer",color:C.muted,padding:2,display:"flex"}}>
                  <Smile size={18}/>
                </button>
                {showEmoji&&(
                  <div style={{position:"absolute",bottom:32,left:0,background:C.card,border:`1px solid ${C.brd}`,borderRadius:14,padding:"10px",display:"flex",flexWrap:"wrap",gap:6,width:200,boxShadow:"0 4px 16px rgba(0,0,0,.4)",zIndex:20}}>
                    {["😊","😂","🔥","💯","👍","❤️","🚀","💪","🤑","📈","💰","🎯","✅","⚡","🙏","👀"].map(e=>(
                      <button key={e} onClick={()=>{setInp(p=>p+e);setShowEmoji(false);}}
                        style={{background:"none",border:"none",cursor:"pointer",fontSize:20,padding:2,borderRadius:6}}>{e}</button>
                    ))}
                  </div>
                )}
              </div>
              <button title="הקלטה קולית" onClick={toggleCommRecording}
                style={{background:"none",border:"none",cursor:"pointer",padding:2,display:"flex"}}>
                <Mic size={16} color={commRecording?C.red:C.muted}/>
              </button>
              <button onClick={()=>send()}
                style={{background:(inp.trim()||commImgPreview)?C.gold:C.brdh,border:"none",borderRadius:10,width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",cursor:(inp.trim()||commImgPreview)?"pointer":"default",transition:"background .2s"}}>
                <Send size={14} color={(inp.trim()||commImgPreview)?"#000":C.muted}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ── PRODUCTS ───────────────────────────────────────────── */




const PRODUCTS=[
  {id:1,name:"מכשיר עיסוי חשמלי לצוואר וגב",niche:"בריאות",pm:8.5,px:13.99,ps:44.99,w:"340g",di:88,dg:94,risk:0,st:"",tags:["עיסוי", "כאב גב", "צוואר"],desc:"מכשיר עיסוי חשמלי עם 6 ראשים מסתובבים וחום מובנה. מפחית כאבי שרירים בצוואר ובגב תוך 15 דקות. ביקוש עקבי כל השנה. WOW Factor גבוה בוידאו."},
  {id:2,name:"כרית אורתופדית לצוואר",niche:"בריאות",pm:6.2,px:10.5,ps:34.99,w:"800g",di:82,dg:89,risk:5,st:"משקל גבוה",tags:["שינה", "כאב צוואר", "ארגונומיה"],desc:"כרית זיכרון בצורת גל לתמיכה בעמוד השדרה. מפחיתה כאבי צוואר ומשפרת שינה. פופולרית בגיל 35+."},
  {id:3,name:"מדבקות חימום לגב 12 שעות",niche:"בריאות",pm:2.1,px:4.5,ps:16.99,w:"80g",di:91,dg:95,risk:0,st:"",tags:["כאב גב", "מדבקות", "חום"],desc:"מדבקות חימום 12 שעות לכאבי גב, שרירים ומפרקים. מרג'ין גבוה מאוד. Impulse Buy קלאסי, ביקוש גדל בחורף."},
  {id:4,name:"מכשיר TENS לשיכוך כאב",niche:"בריאות",pm:12,px:19.99,ps:59.99,w:"120g",di:79,dg:86,risk:10,st:"מכשיר חשמלי",tags:["TENS", "כאב", "פיזיותרפיה"],desc:"גירוי חשמלי לשיכוך כאב כרוני. 6 מצבים, 20 עוצמות. תחליף פיזיותרפיה ביתית."},
  {id:5,name:"מסכת עיניים עם חימום",niche:"בריאות",pm:5.5,px:9.99,ps:29.99,w:"150g",di:85,dg:88,risk:0,st:"",tags:["עיניים", "שינה", "עייפות"],desc:"חשמלית עם חום וויברציה. לעייפות עיניים, כאבי ראש ושינה. פופולרית לעובדי מסך."},
  {id:6,name:"מכשיר עיסוי כף רגל",niche:"בריאות",pm:15,px:24.99,ps:69.99,w:"1200g",di:76,dg:83,risk:8,st:"משקל גבוה",tags:["רגליים", "עיסוי", "עייפות"],desc:"שיאצו לכפות רגליים עם חום ולחץ. לעומדים שעות. ביקוש עקבי."},
  {id:7,name:"גלגלת יוגה לגב תחתון",niche:"בריאות",pm:4,px:7.5,ps:24.99,w:"500g",di:80,dg:87,risk:0,st:"",tags:["יוגה", "גב", "מתיחות"],desc:"EVA לעיסוי עצמי של גב, רגליים וישבן. פיזיותרפיה ביתית."},
  {id:8,name:"מד לחץ דם לפרק יד",niche:"בריאות",pm:9,px:16.99,ps:44.99,w:"160g",di:87,dg:91,risk:12,st:"מכשיר רפואי",tags:["לחץ דם", "בריאות", "ניטור"],desc:"אוטומטי עם זיכרון 60 מדידות. ביקוש עצום בגיל 45+."},
  {id:9,name:"מד חמצן בדם SpO2",niche:"בריאות",pm:5.5,px:10.99,ps:29.99,w:"60g",di:88,dg:92,risk:8,st:"מכשיר רפואי",tags:["חמצן", "SpO2", "בריאות"],desc:"לאצבע, תצוגת OLED. ביקוש עצום מאז COVID."},
  {id:10,name:"מתיחון גב תחתון ארגונומי",niche:"בריאות",pm:4.5,px:8.99,ps:24.99,w:"400g",di:84,dg:87,risk:0,st:"",tags:["גב", "מתיחה", "כאב"],desc:"מפחית לחץ על דיסקים. 10 דקות ביום לשיפור ניכר."},
  {id:11,name:"מנקה שיניים מים 3 מצבים",niche:"בריאות",pm:15,px:26.99,ps:69.99,w:"350g",di:85,dg:89,risk:0,st:"",tags:["שיניים", "ניקוי", "מים"],desc:"לחץ מים מגמר פלאק 99.9%. ביקוש גדל."},
  {id:12,name:"רצועת מעקב שינה ודופק",niche:"בריאות",pm:12,px:21.99,ps:54.99,w:"40g",di:84,dg:88,risk:0,st:"",tags:["שינה", "ניטור", "דופק"],desc:"SpO2 ואפליקציה. ביקוש גדל עם מודעות בריאות."},
  {id:13,name:"עט מיקרובליידינג לגבות",niche:"יופי",pm:3.5,px:6.99,ps:22.99,w:"30g",di:89,dg:93,risk:0,st:"",tags:["גבות", "איפור", "מיקרובליידינג"],desc:"עמיד במים. 4 קצות. מחזיק 24 שעות. Impulse Buy קלאסי לנשים."},
  {id:14,name:"מכשיר IPL הסרת שיער ביתי",niche:"יופי",pm:22,px:38.99,ps:99.99,w:"320g",di:84,dg:90,risk:15,st:"מוצר אלקטרוני",tags:["הסרת שיער", "IPL", "לייזר"],desc:"500,000 פולסים. חוסך 80% מעלות סלון. ביקוש עצום."},
  {id:15,name:"רולר ג'ייד לעיסוי פנים",niche:"יופי",pm:3,px:6.5,ps:24.99,w:"120g",di:86,dg:90,risk:0,st:"",tags:["עיסוי פנים", "ג'ייד", "גלו"],desc:"מפחית נפיחות, משפר זרימת דם. ויראלי TikTok."},
  {id:16,name:"מכשיר ואקום לקומדונים",niche:"יופי",pm:8,px:14.99,ps:39.99,w:"200g",di:89,dg:93,risk:5,st:"",tags:["פנים", "קומדונים", "ואקום"],desc:"4 ראשים ועוצמות. ויראלי מאוד ב-TikTok Beauty."},
  {id:17,name:"מסכת פנים קולגן זהב 24K",niche:"יופי",pm:1.8,px:3.99,ps:14.99,w:"50g",di:90,dg:94,risk:0,st:"",tags:["פנים", "קולגן", "מסכה"],desc:"חבילה 5 יחידות. ויראלי TikTok. Impulse Buy חזק."},
  {id:18,name:"מכשיר RF הידוק עור פנים",niche:"יופי",pm:18,px:29.99,ps:79.99,w:"280g",di:81,dg:86,risk:12,st:"מכשיר חשמלי",tags:["RF", "הידוק", "פנים"],desc:"3 עוצמות. תחליף טיפול סלון."},
  {id:19,name:"שמפו ביוטין נגד נשירה",niche:"יופי",pm:5,px:9.99,ps:32.99,w:"300g",di:88,dg:91,risk:5,st:"",tags:["שיער", "נשירה", "שמפו"],desc:"ביוטין וקראטין. מחזק שורשים. מוצר חוזר."},
  {id:20,name:"מברשת ניקוי פנים חשמלית",niche:"יופי",pm:5.5,px:10.99,ps:34.99,w:"180g",di:82,dg:87,risk:0,st:"",tags:["פנים", "ניקוי", "נקבוביות"],desc:"6 ראשים וויברציה. מנקה נקבוביות."},
  {id:21,name:"מכשיר אדים לפנים",niche:"יופי",pm:8,px:14.99,ps:39.99,w:"320g",di:83,dg:87,risk:0,st:"",tags:["פנים", "אדים", "נקבוביות"],desc:"פותח נקבוביות ב-3 דקות. ויראלי TikTok Beauty."},
  {id:22,name:"ציפורניים ג'ל UV ערכה",niche:"יופי",pm:4,px:8.99,ps:27.99,w:"200g",di:85,dg:88,risk:0,st:"",tags:["ציפורניים", "ג'ל", "UV"],desc:"20 גוונים. מחזיק 3 שבועות. חוסך 70% ממחיר סלון."},
  {id:23,name:"מנקה אוויר HEPA קומפקטי",niche:"בית",pm:8,px:14.99,ps:39.99,w:"400g",di:83,dg:88,risk:0,st:"",tags:["אוויר", "ניקוי", "HEPA"],desc:"HEPA + UV נגד חיידקים. למשרד, חדר שינה ורכב."},
  {id:24,name:"קופסאות ארגון שקופות סט 8",niche:"בית",pm:4,px:8.5,ps:24.99,w:"600g",di:86,dg:89,risk:0,st:"",tags:["ארגון", "מגירות", "סדר"],desc:"8 יחידות עם מכסה. לקוחות קונים ריבויים."},
  {id:25,name:"כוס חימום USB חשמלית",niche:"בית",pm:9,px:16.99,ps:44.99,w:"350g",di:85,dg:89,risk:3,st:"",tags:["קפה", "חימום", "USB"],desc:"שומר קפה בטמפרטורה מדויקת. מוצר מתנה ויומיומי."},
  {id:26,name:"מסנן מים לברז 3 מצבים",niche:"בית",pm:6,px:11.99,ps:32.99,w:"250g",di:88,dg:92,risk:0,st:"",tags:["מים", "פילטר", "בריאות"],desc:"מסיר כלור ומתכות. ביקוש קבוע ומוצר חוזר."},
  {id:27,name:"שקיות ואקום לבגדים סט 8",niche:"בית",pm:3,px:6.5,ps:19.99,w:"400g",di:87,dg:91,risk:0,st:"",tags:["אחסון", "ואקום", "בגדים"],desc:"חיסכון 80% מקום. מוצר חוזר פופולרי."},
  {id:28,name:"מברשת כלים עם משאבת סבון",niche:"בית",pm:3.5,px:6.99,ps:19.99,w:"180g",di:82,dg:86,risk:0,st:"",tags:["ניקוי", "כלים", "מטבח"],desc:"משאבת סבון מובנית. חוסכת 70% סבון. Impulse Buy."},
  {id:29,name:"מנורת LED שולחן 4 מצבים",niche:"בית",pm:8,px:14.99,ps:39.99,w:"220g",di:84,dg:88,risk:0,st:"",tags:["תאורה", "LED", "עבודה"],desc:"4 מצבי צבע, 10 עוצמות, USB. לעבודה ולמידה."},
  {id:30,name:"משאבת שמפו אוטומטית חיישן",niche:"בית",pm:4,px:7.99,ps:22.99,w:"220g",di:82,dg:85,risk:0,st:"",tags:["אמבטיה", "חיישן", "נוחות"],desc:"אוטומטית בלי מגע. Impulse Buy לאמבטיה."},
  {id:31,name:"מנקה ידיים אוטומטי חיישן",niche:"בית",pm:7,px:12.99,ps:34.99,w:"280g",di:87,dg:91,risk:0,st:"",tags:["ידיים", "אוטומטי", "היגיינה"],desc:"300ml. אינפרא-אדום. ביקוש גדל אחרי COVID."},
  {id:32,name:"שולחן עבודה מתכוונן לספה",niche:"בית",pm:12,px:21.99,ps:54.99,w:"1500g",di:79,dg:82,risk:10,st:"משקל",tags:["עבודה", "שולחן", "WFH"],desc:"עם מחזיק כוסות. WFH פופולרי מאוד."},
  {id:33,name:"מרסס בשר לתיבול ברביקיו",niche:"בית",pm:5,px:9.99,ps:27.99,w:"120g",di:81,dg:84,risk:0,st:"",tags:["בשר", "תיבול", "ברביקיו"],desc:"מחט לתיבול עמוק. ויראלי TikTok BBQ. Impulse Buy."},
  {id:34,name:"רצועות לטקס כניסה לאימון סט 5",niche:"כושר",pm:4.5,px:8.99,ps:27.99,w:"200g",di:90,dg:94,risk:0,st:"",tags:["כושר", "התנגדות", "אימון"],desc:"5 עוצמות שונות. לישבן, גב, זרועות. ביקוש עצום."},
  {id:35,name:"גלגלת Ab-Wheel כפולה",niche:"כושר",pm:5,px:9.99,ps:29.99,w:"400g",di:85,dg:88,risk:0,st:"",tags:["בטן", "אימון", "ביתי"],desc:"גלגלת כפולה עם ידיות ומחצלת ברכיים."},
  {id:36,name:"שעון ספורט GPS מד לב",niche:"כושר",pm:14,px:24.99,ps:64.99,w:"50g",di:86,dg:91,risk:8,st:"",tags:["שעון", "ספורט", "GPS"],desc:"GPS, מד לב, 7 מצבי ספורט. עמיד 50M."},
  {id:37,name:"קפיציות כף יד סט 5 עוצמות",niche:"כושר",pm:3,px:5.99,ps:17.99,w:"100g",di:82,dg:86,risk:0,st:"",tags:["יד", "כוח", "שיקום"],desc:"5 עוצמות לחיזוק ושיקום. Impulse Buy."},
  {id:38,name:"כדור שיווי משקל 65cm",niche:"כושר",pm:6,px:11.99,ps:34.99,w:"900g",di:78,dg:82,risk:0,st:"",tags:["שיווי משקל", "כדור", "ישיבה"],desc:"לאימון ולכסא ישיבה אקטיבי. עם משאבה."},
  {id:39,name:"שרוולי דחיסה לריצה זוג",niche:"כושר",pm:3.5,px:6.99,ps:19.99,w:"80g",di:83,dg:87,risk:0,st:"",tags:["ריצה", "דחיסה", "שריר"],desc:"מפחיתים עייפות שוק ב-30%."},
  {id:40,name:"כפפות אימון משקולות",niche:"כושר",pm:5,px:9.99,ps:27.99,w:"120g",di:82,dg:86,risk:0,st:"",tags:["כושר", "כפפות", "משקולות"],desc:"תמיכת פרק יד ורפידות ג'ל."},
  {id:41,name:"אינסולים ג'ל לנעלי ריצה",niche:"כושר",pm:3.5,px:6.99,ps:19.99,w:"120g",di:85,dg:89,risk:0,st:"",tags:["נעליים", "ג'ל", "ריצה"],desc:"מפחיתים כאב ברכיים 40%. מוצר חוזר."},
  {id:42,name:"חגורת גב לאימוני כוח",niche:"כושר",pm:10,px:18.99,ps:49.99,w:"350g",di:80,dg:84,risk:5,st:"",tags:["גב", "אימון", "חגורה"],desc:"עור PU למניעת פציעות בסקוואט."},
  {id:43,name:"טבעת LED צילום סלפי",niche:"טכנולוגיה",pm:5.5,px:10.99,ps:32.99,w:"280g",di:88,dg:92,risk:0,st:"",tags:["צילום", "LED", "TikTok"],desc:"10 אינץ', חצובה, 3 צבעי אור. חיוני לקריאייטורים."},
  {id:44,name:"מעמד טלפון מגנטי לרכב",niche:"טכנולוגיה",pm:3.5,px:6.99,ps:19.99,w:"80g",di:90,dg:94,risk:0,st:"",tags:["רכב", "טלפון", "מגנט"],desc:"אחיזה חזקה לכל גודל. Impulse Buy. מרג'ין גבוה."},
  {id:45,name:"אוזניות TWS Bluetooth ANC",niche:"טכנולוגיה",pm:12,px:22.99,ps:59.99,w:"50g",di:87,dg:91,risk:10,st:"אלקטרוניקה",tags:["אוזניות", "Bluetooth", "ANC"],desc:"ביטול רעשים, 24 שעות סוללה."},
  {id:46,name:"סוללה ניידת MagSafe 10000mAh",niche:"טכנולוגיה",pm:10,px:18.99,ps:49.99,w:"250g",di:86,dg:90,risk:8,st:"ליתיום",tags:["סוללה", "MagSafe", "ניידת"],desc:"MagSafe + USB-C, 20W."},
  {id:47,name:"USB-C Hub 7 פורטים",niche:"טכנולוגיה",pm:6,px:11.99,ps:32.99,w:"120g",di:85,dg:89,risk:3,st:"",tags:["USB", "מחשב", "Hub"],desc:"4xUSB-A, USB-C, HDMI, SD. 5Gbps."},
  {id:48,name:"עט Stylus לאייפד",niche:"טכנולוגיה",pm:8,px:14.99,ps:39.99,w:"20g",di:83,dg:87,risk:0,st:"",tags:["אייפד", "עט", "ציור"],desc:"4096 רמות לחץ, iPad 2018+."},
  {id:49,name:"שקע WiFi חכם ניטור חשמל",niche:"טכנולוגיה",pm:5.5,px:10.99,ps:29.99,w:"80g",di:84,dg:88,risk:8,st:"חשמל",tags:["בית חכם", "WiFi", "אלקסה"],desc:"ניטור צריכת חשמל. Alexa + Google Home."},
  {id:50,name:"מדפסת תמונות מיני Bluetooth",niche:"טכנולוגיה",pm:22,px:38.99,ps:99.99,w:"180g",di:81,dg:85,risk:5,st:"",tags:["מדפסת", "תמונות", "Bluetooth"],desc:"57mm, דיו תרמי. ויראלי TikTok Gifts."},
  {id:51,name:"פד עכבר XL 90x40cm",niche:"טכנולוגיה",pm:5,px:9.99,ps:27.99,w:"400g",di:85,dg:88,risk:0,st:"",tags:["עכבר", "פד", "גדול"],desc:"ריפוד 4mm. גיימינג ועבודה."},
  {id:52,name:"מיקרופון USB לפודקאסט",niche:"טכנולוגיה",pm:18,px:32.99,ps:79.99,w:"400g",di:83,dg:87,risk:0,st:"",tags:["מיקרופון", "פודקאסט", "USB"],desc:"קונדנסר USB עם פופ פילטר."},
  {id:53,name:"ווב-קאם Full-HD 1080p",niche:"טכנולוגיה",pm:12,px:21.99,ps:54.99,w:"120g",di:85,dg:89,risk:0,st:"",tags:["ווב-קאם", "ועידה", "עבודה"],desc:"1080p, מיקרופון מובנה. ביקוש גדל."},
  {id:54,name:"פד טעינה אלחוטי 15W Qi",niche:"טכנולוגיה",pm:5,px:9.99,ps:27.99,w:"80g",di:87,dg:91,risk:3,st:"",tags:["Qi", "טעינה", "אלחוטי"],desc:"iPhone ו-Samsung. ביקוש עקבי."},
  {id:55,name:"מגן מסך הידרוג'ל אוטומטי",niche:"טכנולוגיה",pm:5,px:9.99,ps:27.99,w:"30g",di:85,dg:88,risk:0,st:"",tags:["נייד", "מגן", "מסך"],desc:"עם מכונת הדבקה. Impulse Buy."},
  {id:56,name:"כבל USB-C 100W 3 מטר",niche:"טכנולוגיה",pm:2.5,px:4.99,ps:14.99,w:"80g",di:90,dg:94,risk:0,st:"",tags:["כבל", "USB-C", "מטען"],desc:"100W, ניילון קלוע, 3 מטר. מוצר חוזר."},
  {id:57,name:"מזין אוטומטי לחיות 4L",niche:"חיות",pm:18,px:32.99,ps:79.99,w:"1200g",di:86,dg:90,risk:5,st:"",tags:["מזין", "חיות", "אוטומטי"],desc:"3 ארוחות ביום, מצלמה, App."},
  {id:58,name:"מברשת שאיבת שיער חיות",niche:"חיות",pm:6,px:11.99,ps:32.99,w:"250g",di:88,dg:92,risk:0,st:"",tags:["כלב", "חתול", "ברשת"],desc:"לחצן לאיסוף שיער. ויראלי TikTok."},
  {id:59,name:"מזרקת מים לחתול 2L",niche:"חיות",pm:12,px:21.99,ps:54.99,w:"600g",di:84,dg:88,risk:0,st:"",tags:["חתול", "מים", "מזרקה"],desc:"פילטר פחם. מונע בעיות כליות."},
  {id:60,name:"צעצוע לייזר אוטומטי לחתול",niche:"חיות",pm:5,px:9.99,ps:27.99,w:"120g",di:87,dg:90,risk:0,st:"",tags:["חתול", "לייזר", "צעצוע"],desc:"תנועה אקראית. ויראלי TikTok Pets."},
  {id:61,name:"מיטת כלב/חתול אורתופדית",niche:"חיות",pm:14,px:25.99,ps:64.99,w:"800g",di:82,dg:85,risk:0,st:"",tags:["כלב", "חתול", "מיטה"],desc:"זיכרון, ניתנת לכביסה."},
  {id:62,name:"ערכת ציור 145 חלקים לילדים",niche:"ילדים",pm:8,px:14.99,ps:39.99,w:"500g",di:84,dg:87,risk:0,st:"",tags:["ציור", "ילדים", "יצירה"],desc:"צבעים, מכחולים, עפרונות. מתנה מושלמת."},
  {id:63,name:"מוניטור תינוק WiFi Full-HD",niche:"ילדים",pm:20,px:35.99,ps:89.99,w:"350g",di:85,dg:89,risk:8,st:"מצלמה",tags:["תינוק", "מוניטור", "WiFi"],desc:"Full-HD, ראיית לילה, App."},
  {id:64,name:"מכונת רעש לבן לתינוק",niche:"ילדים",pm:6,px:11.99,ps:32.99,w:"180g",di:86,dg:90,risk:0,st:"",tags:["שינה", "רעש לבן", "תינוק"],desc:"20 סאונדים, טיימר, חיישן בכי."},
  {id:65,name:"שעון GPS לילדים עם SOS",niche:"ילדים",pm:20,px:35.99,ps:89.99,w:"50g",di:83,dg:87,risk:8,st:"SIM",tags:["שעון", "GPS", "ילדים"],desc:"שיחות קוליות, מעקב מיקום, SOS."},
  {id:66,name:"אוהל משחק קפיצי לחדר ילדים",niche:"ילדים",pm:15,px:26.99,ps:64.99,w:"700g",di:82,dg:85,risk:0,st:"",tags:["משחק", "אוהל", "ילדים"],desc:"130x130, קל לפתיחה. ויראלי TikTok."},
  {id:67,name:"לוח גיר מדבקה לקיר",niche:"ילדים",pm:7,px:13.99,ps:37.99,w:"200g",di:79,dg:82,risk:0,st:"",tags:["ילדים", "גיר", "קיר"],desc:"60x90 להסרה. מתנה פופולרית."},
  {id:68,name:"כרית צוואר מתנפחת לנסיעות",niche:"נסיעות",pm:5,px:9.99,ps:27.99,w:"150g",di:83,dg:87,risk:0,st:"",tags:["נסיעה", "כרית", "צוואר"],desc:"מתקפלת לתיק קטן. מתנה לנוסעים."},
  {id:69,name:"מנעול TSA קוד חבילה 3",niche:"נסיעות",pm:4.5,px:8.99,ps:24.99,w:"60g",di:84,dg:88,risk:0,st:"",tags:["מנעול", "מזוודה", "TSA"],desc:"TSA מאושר. חבילת 3."},
  {id:70,name:"מתאם חשמל עולמי 4-ב-1",niche:"נסיעות",pm:7,px:12.99,ps:34.99,w:"120g",di:86,dg:90,risk:8,st:"חשמלי",tags:["נסיעה", "מתאם", "חשמל"],desc:"3xUSB + USB-C, 2300W. חיוני."},
  {id:71,name:"שקיות ארגון מזוודה סט 8",niche:"נסיעות",pm:5,px:9.99,ps:27.99,w:"200g",di:85,dg:89,risk:0,st:"",tags:["ארגון", "מזוודה", "שקיות"],desc:"8 שקיות בצבעים. חוסכות 30% מקום."},
  {id:72,name:"מנורת גן סולארית 200 LED",niche:"גינה",pm:4.5,px:8.99,ps:24.99,w:"280g",di:85,dg:89,risk:0,st:"",tags:["גינה", "סולארי", "תאורה"],desc:"עמידה למים. נדלקת אוטומטית."},
  {id:73,name:"מחרוזת תאורה סולארית 50 נורות",niche:"גינה",pm:6.5,px:12.99,ps:34.99,w:"350g",di:84,dg:88,risk:0,st:"",tags:["גינה", "אור", "מחרוזת"],desc:"5 מטר. עמידה למים. Impulse Buy."},
  {id:74,name:"מד לחות pH וטמפרטורה לקרקע",niche:"גינה",pm:4.5,px:8.99,ps:24.99,w:"80g",di:79,dg:82,risk:0,st:"",tags:["גינה", "צמחים", "לחות"],desc:"ללא סוללות. מתנה לגננים."},
  {id:75,name:"ספרינקלר 360 12 מצבי ריסוס",niche:"גינה",pm:7,px:13.99,ps:37.99,w:"300g",di:79,dg:83,risk:0,st:"",tags:["גינה", "ספרינקלר", "ריסוס"],desc:"12 מצבים. ביקוש עונתי חזק."},
  {id:76,name:"שעון מגנטי מינימליסטי לגברים",niche:"אופנה",pm:8,px:15.99,ps:44.99,w:"80g",di:83,dg:87,risk:5,st:"",tags:["שעון", "גברים", "מינימליסטי"],desc:"רצועה מגנטית נירוסטה. מתנה פופולרית."},
  {id:77,name:"תיק גב אנטי-גנב עם USB",niche:"אופנה",pm:14,px:25.99,ps:64.99,w:"500g",di:84,dg:88,risk:3,st:"",tags:["תיק", "אנטי-גנב", "USB"],desc:"רוכסן נסתר, USB, RFID."},
  {id:78,name:"משקפי שמש מקוטבות UV400",niche:"אופנה",pm:5,px:9.99,ps:29.99,w:"60g",di:86,dg:90,risk:3,st:"",tags:["משקפיים", "שמש", "קוטב"],desc:"UV400, TR90 גמישה. Impulse Buy."},
  {id:79,name:"ארנק עור אנטי-RFID",niche:"אופנה",pm:4.5,px:8.99,ps:26.99,w:"80g",di:85,dg:88,risk:0,st:"",tags:["ארנק", "RFID", "עור"],desc:"ל-8 כרטיסים. מתנה לגברים."},
  {id:80,name:"דאשקם 4K GPS קדמי+אחורי",niche:"רכב",pm:22,px:38.99,ps:99.99,w:"180g",di:86,dg:90,risk:8,st:"",tags:["רכב", "דאשקם", "4K"],desc:"4K + GPS + מצלמה אחורית."},
  {id:81,name:"מטען רכב USB-C 65W מהיר",niche:"רכב",pm:4,px:7.99,ps:22.99,w:"40g",di:91,dg:95,risk:3,st:"",tags:["רכב", "USB-C", "מטען"],desc:"65W, USB-C + USB-A. Impulse Buy."},
  {id:82,name:"שואב אבק רכב 6000Pa",niche:"רכב",pm:8,px:14.99,ps:39.99,w:"400g",di:84,dg:88,risk:0,st:"",tags:["רכב", "שואב אבק", "ניקוי"],desc:"6000Pa, 3 ראשים. USB/12V."},
  {id:83,name:"מנורת ירח ריאליסטית LED",niche:"גאדג'טים",pm:8,px:14.99,ps:39.99,w:"280g",di:86,dg:90,risk:0,st:"",tags:["עיצוב", "ירח", "LED"],desc:"16 צבעים, שליטת מגע. מתנה."},
  {id:84,name:"קובייה מגנטית אנטי-סטרס",niche:"גאדג'טים",pm:4,px:7.99,ps:22.99,w:"60g",di:84,dg:88,risk:0,st:"",tags:["סטרס", "אנטי", "מגנט"],desc:"6 פונקציות. ויראלי TikTok."},
  {id:85,name:"מנורה הולוגרמה 3D RGB",niche:"גאדג'טים",pm:12,px:21.99,ps:54.99,w:"200g",di:82,dg:86,risk:0,st:"",tags:["הולוגרמה", "LED", "עיצוב"],desc:"20 דגמים, USB. ויראלי TikTok."},
  {id:86,name:"עפרון 5-ב-1 מגנטי",niche:"גאדג'טים",pm:2.5,px:4.99,ps:14.99,w:"30g",di:88,dg:92,risk:0,st:"",tags:["עפרון", "מגנט", "מכתבים"],desc:"מגנט, עט, פינצטה, קוצב. ויראלי."},
  {id:87,name:"ביצית ריחנית אנטי-סטרס",niche:"גאדג'טים",pm:2.5,px:4.99,ps:14.99,w:"40g",di:85,dg:88,risk:0,st:"",tags:["סטרס", "ריח", "ידיים"],desc:"עיסוי ביד עם ריח. ויראלי TikTok."},
  {id:88,name:"מנפח בלונים חשמלי",niche:"גאדג'טים",pm:6,px:11.99,ps:32.99,w:"250g",di:80,dg:83,risk:0,st:"",tags:["בלונים", "מסיבה", "מהיר"],desc:"1000 בלונים לשעה. לאירועים."},
  {id:89,name:"מגנט לוח מחיק A4",niche:"גאדג'טים",pm:4,px:7.99,ps:22.99,w:"150g",di:82,dg:85,risk:0,st:"",tags:["לוח", "מחיק", "מטבח"],desc:"עם עט מגנטי. לרשימות שבועיות."},
  {id:90,name:"טבעת LED לאצבע סלפי",niche:"גאדג'טים",pm:3,px:5.99,ps:17.99,w:"20g",di:87,dg:91,risk:0,st:"",tags:["אור", "צילום", "טבעת"],desc:"נטענת. 3 צבעים. ויראלי TikTok."},
  {id:91,name:"סט שמנים אתריים 8 בקבוקים",niche:"בריאות",pm:9,px:16.99,ps:44.99,w:"300g",di:85,dg:88,risk:3,st:"",tags:["שמנים", "ארומתרפיה", "הרפיה"],desc:"לוונדר, נענע, לימון. לדיפוזר."},
  {id:92,name:"דיפוזר אדים ארומה 500ml",niche:"בריאות",pm:10,px:18.99,ps:49.99,w:"400g",di:84,dg:87,risk:0,st:"",tags:["אדים", "ארומה", "דיפוזר"],desc:"7 צבעי LED, כיבוי אוטומטי."},
  {id:93,name:"כפכפים עיסוי רפלקסולוגיה",niche:"בריאות",pm:6,px:11.99,ps:32.99,w:"350g",di:81,dg:84,risk:0,st:"",tags:["כפכפים", "עיסוי", "בריאות"],desc:"בליטות רפלקסולוגיה לעיסוי ביתי."},
  {id:94,name:"מברשת שיניים חשמלית 40000RPM",niche:"בריאות",pm:12,px:21.99,ps:54.99,w:"200g",di:86,dg:90,risk:0,st:"",tags:["שיניים", "חשמלי", "בריאות"],desc:"5 מצבים, טיימר 2 דקות, USB."},
  {id:95,name:"מנוח עיניים עם דחיסת אוויר",niche:"בריאות",pm:14,px:25.99,ps:64.99,w:"300g",di:82,dg:85,risk:0,st:"",tags:["עיניים", "מנוח", "דחיסה"],desc:"אוויר דחוס, חום, ויברציה."},
  {id:96,name:"מנורת LED חכמה RGB App",niche:"בית",pm:8,px:14.99,ps:39.99,w:"220g",di:84,dg:88,risk:5,st:"",tags:["תאורה", "LED", "RGB"],desc:"16 מיליון צבעים, App, נטענת."},
  {id:97,name:"שעון קיר LED טמפרטורה",niche:"בית",pm:8,px:14.99,ps:39.99,w:"300g",di:82,dg:85,risk:0,st:"",tags:["שעון", "קיר", "LED"],desc:"25cm, טמפרטורה ולחות."},
  {id:98,name:"מגבת מיקרופייבר XL 180x100",niche:"יופי",pm:6,px:11.99,ps:32.99,w:"300g",di:83,dg:86,risk:0,st:"",tags:["מגבת", "ים", "XL"],desc:"מייבשת פי 3 מהר. לים וספורט."},
  {id:99,name:"קרם ידיים אורגני שיאה קוקוס",niche:"יופי",pm:3,px:5.99,ps:17.99,w:"100g",di:84,dg:87,risk:3,st:"",tags:["ידיים", "לחות", "קרם"],desc:"ריח עדין. מוצר חוזר לנשים."},
  {id:100,name:"כפפות סיליקון לתנור 250°C",niche:"בית",pm:4,px:7.99,ps:22.99,w:"200g",di:83,dg:86,risk:0,st:"",tags:["מטבח", "סיליקון", "בישול"],desc:"אחיזה מושלמת. שוטפות במדיח."},
  {id:101,name:"בלנדר מיני USB 350ml",niche:"בית",pm:9,px:16.99,ps:44.99,w:"300g",di:85,dg:89,risk:3,st:"",tags:["בלנדר", "USB", "שייקים"],desc:"נטען. 6 להבים. ויראלי TikTok."},
  {id:102,name:"מסחטת פירות חשמלית 400W",niche:"בית",pm:14,px:24.99,ps:64.99,w:"1200g",di:81,dg:84,risk:5,st:"",tags:["מסחטה", "בריאות", "מיצים"],desc:"2 מהירויות. ביקוש בנישת בריאות."},
  {id:103,name:"מנקה לחץ נייד עם מאגר",niche:"בית",pm:20,px:35.99,ps:89.99,w:"1800g",di:81,dg:84,risk:8,st:"משקל",tags:["ניקוי", "לחץ", "מרפסת"],desc:"0.8L מאגר. לרצפות ומרפסות."},
  {id:104,name:"מכשיר וואפל מיני",niche:"בית",pm:8,px:14.99,ps:39.99,w:"350g",di:82,dg:85,risk:3,st:"",tags:["וואפל", "מטבח", "בוקר"],desc:"2 בו-זמנית, מתחמם 3 דקות."},
  {id:105,name:"פנס סולארי חירום 200 לומן",niche:"בית",pm:6,px:11.99,ps:32.99,w:"200g",di:83,dg:87,risk:0,st:"",tags:["פנס", "סולארי", "חירום"],desc:"200 לומן, USB מטען."},
  {id:106,name:"ערכת ניקוי מצלמה מקצועית",niche:"טכנולוגיה",pm:6,px:11.99,ps:32.99,w:"100g",di:82,dg:85,risk:0,st:"",tags:["מצלמה", "ניקוי", "עדשה"],desc:"בלואר, מברשת, מטלית. ל-DSLR."},
  {id:107,name:"אוזניות ספורט IPX7 Bluetooth",niche:"טכנולוגיה",pm:10,px:18.99,ps:49.99,w:"30g",di:85,dg:88,risk:5,st:"",tags:["ספורט", "אוזניות", "IPX7"],desc:"עמידות מים, 10 שעות סוללה."},
  {id:108,name:"מאוורר USB שקט 20dB",niche:"טכנולוגיה",pm:5,px:9.99,ps:27.99,w:"200g",di:84,dg:87,risk:0,st:"",tags:["מאוורר", "USB", "קיץ"],desc:"3 מהירויות, 20dB. Impulse Buy."},
  {id:109,name:"מנורת לבה מודרנית 40cm",niche:"בית",pm:12,px:21.99,ps:54.99,w:"600g",di:78,dg:81,risk:0,st:"",tags:["לבה", "עיצוב", "מנורה"],desc:"LED בבסיס. מתנה לנוער."},
  {id:110,name:"מקרן מיני Bluetooth HDMI",niche:"טכנולוגיה",pm:25,px:42.99,ps:99.99,w:"800g",di:80,dg:84,risk:8,st:"חשמל",tags:["קולנוע", "מקרן", "Bluetooth"],desc:"100 אינץ', Bluetooth + HDMI."},
  {id:111,name:"מנקה ניינה חשמלי לתינוק",niche:"ילדים",pm:8,px:15.99,ps:44.99,w:"250g",di:88,dg:91,risk:3,st:"",tags:["תינוק", "בקבוק", "ניקוי"],desc:"4 ראשי מברשת. חיוני לכל הורה חדש."},
  {id:112,name:"כרית הנקה ארגונומית",niche:"ילדים",pm:9,px:16.99,ps:44.99,w:"400g",di:84,dg:87,risk:0,st:"",tags:["הנקה", "כרית", "תינוק"],desc:"זיכרון, תמיכה לגב האם."},
  {id:113,name:"מכשיר NIR לכאב ופנים",niche:"בריאות",pm:18,px:32.99,ps:79.99,w:"300g",di:80,dg:84,risk:8,st:"קרינה",tags:["NIR", "כאב", "פנים"],desc:"טיפול NIR. 10 דקות ביום."},
  {id:114,name:"מדחס נייד לצמיגי רכב",niche:"רכב",pm:12,px:21.99,ps:54.99,w:"600g",di:83,dg:87,risk:3,st:"",tags:["רכב", "צמיגים", "מדחס"],desc:"USB-C. ממלא צמיג ב-3 דקות."},
  {id:115,name:"בושם רכב LCD דיגיטלי",niche:"רכב",pm:6,px:11.99,ps:32.99,w:"80g",di:83,dg:86,risk:0,st:"",tags:["רכב", "בושם", "LCD"],desc:"תצוגת LCD, 3 עוצמות."},
  {id:116,name:"מכשיר ואקום לקומדונים מתקדם",niche:"יופי",pm:12,px:21.99,ps:59.99,w:"250g",di:86,dg:90,risk:5,st:"",tags:["פנים", "ואקום", "קומדונים"],desc:"5 ראשים, 5 עוצמות. ויראלי."},
  {id:117,name:"מגן כרית לשיניים בלילה",niche:"בריאות",pm:8,px:14.99,ps:39.99,w:"50g",di:80,dg:83,risk:5,st:"",tags:["שיניים", "חריקה", "מגן"],desc:"סיליקון, מגן על שיניים בלילה. ביקוש."},
  {id:118,name:"שמן CBD 1000mg",niche:"בריאות",pm:8,px:15.99,ps:44.99,w:"50g",di:83,dg:87,risk:15,st:"בדוק חוקיות",tags:["CBD", "כאב", "הרפיה"],desc:"לכאב, חרדה ושינה. חוקי בישראל."},
  {id:119,name:"מצלמת IP WiFi Full-HD חיצונית",niche:"טכנולוגיה",pm:22,px:38.99,ps:99.99,w:"450g",di:82,dg:86,risk:10,st:"מצלמה",tags:["אבטחה", "WiFi", "חוץ"],desc:"עמידה למים, ראיית לילה."},
  {id:120,name:"קייס AirPods ויניל 50+ דגמים",niche:"טכנולוגיה",pm:2,px:3.99,ps:12.99,w:"20g",di:87,dg:90,risk:0,st:"",tags:["AirPods", "קייס", "ויניל"],desc:"50+ דגמים. Impulse Buy מאוד."},
  {id:121,name:"אמבטיית רגליים חשמלית",niche:"בריאות",pm:18,px:32.99,ps:79.99,w:"1500g",di:79,dg:83,risk:8,st:"חשמלי",tags:["רגליים", "ספא", "אמבטיה"],desc:"חימום, בועות ורטט."},
  {id:122,name:"מגבות מיקרופייבר לשיער זוג",niche:"יופי",pm:4,px:7.99,ps:22.99,w:"350g",di:85,dg:88,risk:0,st:"",tags:["מגבת", "מיקרופייבר", "שיער"],desc:"עם כפתור. מייבשת 50% פחות זמן."},
  {id:123,name:"מכשיר גלוואני לקרם פנים",niche:"יופי",pm:12,px:21.99,ps:59.99,w:"180g",di:80,dg:84,risk:10,st:"חשמלי",tags:["פנים", "גלוואני", "קרם"],desc:"חדירת סרום לעומק."},
  {id:124,name:"מרסס תרסיס לצמחים 500ml",niche:"גינה",pm:3.5,px:6.99,ps:19.99,w:"200g",di:80,dg:83,risk:0,st:"",tags:["גינה", "צמחים", "מרסס"],desc:"Impulse Buy לגינה ועציצים."},
  {id:125,name:"שקית ים עמידה Dry Bag 20L",niche:"נסיעות",pm:7,px:13.99,ps:37.99,w:"200g",di:79,dg:83,risk:0,st:"",tags:["שחייה", "תיק", "ים"],desc:"אטומה לחלוטין. לים וקיאק."},
  {id:126,name:"כוס מים חכמה עם תזכורת LED",niche:"בריאות",pm:8,px:14.99,ps:39.99,w:"350g",di:82,dg:86,risk:0,st:"",tags:["מים", "תזכורת", "בריאות"],desc:"LED מתזכרת לשתות. 500ml."},
  {id:127,name:"מגב זכוכית מגנטי כפול",niche:"בית",pm:5.5,px:10.99,ps:29.99,w:"300g",di:81,dg:84,risk:0,st:"",tags:["חלונות", "מגב", "ניקוי"],desc:"שני צידי זכוכית בו-זמנית. ויראלי."},
  {id:128,name:"מנקה אולטרסאוניק לירקות",niche:"בית",pm:15,px:26.99,ps:69.99,w:"500g",di:77,dg:83,risk:5,st:"חשמלי",tags:["ניקוי", "בריאות", "ירקות"],desc:"מסיר חומרי הדברה."},
  {id:129,name:"ערכת הלבנת שיניים LED",niche:"יופי",pm:6,px:11.99,ps:32.99,w:"80g",di:84,dg:87,risk:5,st:"",tags:["שיניים", "הלבנה", "LED"],desc:"ג'ל + מנורה LED. תוצאות ב-7 ימים."},
  {id:130,name:"שרשרת ציפוי זהב 18K",niche:"אופנה",pm:3,px:6.5,ps:22.99,w:"20g",di:87,dg:90,risk:8,st:"אלרגיות",tags:["תכשיט", "זהב", "נשים"],desc:"תליון לב. ביקוש עצום סביב מתנות."},
  {id:131,name:"מנורת שולחן אינדוקציה 2000W",niche:"בית",pm:14,px:25.99,ps:64.99,w:"800g",di:79,dg:82,risk:8,st:"חשמל",tags:["בישול", "אינדוקציה", "שולחן"],desc:"8 עוצמות. לדירות קטנות."},
  {id:132,name:"מקל סלפי כדורי 360°",niche:"גאדג'טים",pm:6,px:11.99,ps:32.99,w:"180g",di:84,dg:87,risk:0,st:"",tags:["סלפי", "360", "מצלמה"],desc:"ראש 360, Bluetooth, נטען."},
  {id:133,name:"מכשיר קיטור בגדים 1200W",niche:"בית",pm:15,px:26.99,ps:64.99,w:"400g",di:80,dg:83,risk:5,st:"קיטור",tags:["בגדים", "קיטור", "קמטים"],desc:"180ml. מסיר קמטים ב-20 שניות."},
  {id:134,name:"מיכלי אחסון ואקום לאוכל סט 4",niche:"בית",pm:6,px:11.99,ps:32.99,w:"350g",di:81,dg:84,risk:0,st:"",tags:["אחסון", "ואקום", "אוכל"],desc:"שמירת טריות 3 פעמים ארוך יותר."},
  {id:135,name:"ממיר ביצים רכות קשות",niche:"בית",pm:4,px:7.99,ps:22.99,w:"150g",di:82,dg:85,risk:0,st:"",tags:["ביצים", "מטבח", "גאדג'ט"],desc:"קובע רמת בישול הביצה בדיוק. ויראלי."},
  {id:136,name:"מסנן מקלחת ויטמין C",niche:"בריאות",pm:5.5,px:10.99,ps:29.99,w:"200g",di:83,dg:86,risk:0,st:"",tags:["מקלחת", "מסנן", "שיער"],desc:"מסיר כלור. מגן שיער ועור. מוצר חוזר."},
  {id:137,name:"תרסיס עיכוב לגברים",niche:"יופי",pm:6,px:11.99,ps:32.99,w:"30g",di:84,dg:87,risk:5,st:"",tags:["גברים", "עיכוב", "תרסיס"],desc:"מוצר מביך לקנות פיזית. ביקוש דרופשיפינג גדול."},
  {id:138,name:"מחבת ניאון-סטיק PFOA-Free",niche:"בית",pm:10,px:18.99,ps:49.99,w:"700g",di:83,dg:86,risk:3,st:"",tags:["מחבת", "מטבח", "ניאון-סטיק"],desc:"PFOA-Free. ויראלי TikTok Kitchen."},
  {id:139,name:"כד ספורט מבודד 1 ליטר",niche:"כושר",pm:5,px:9.99,ps:27.99,w:"300g",di:84,dg:87,risk:0,st:"",tags:["ספורט", "כד", "מבודד"],desc:"24 שעות קור, ידית, סטרו."},
  {id:140,name:"מכשיר RF גוף הרזיה",niche:"יופי",pm:20,px:35.99,ps:89.99,w:"350g",di:80,dg:84,risk:12,st:"חשמלי",tags:["גוף", "RF", "הרזיה"],desc:"RF לצמצום שומן ומרקם עור. ביקוש."},
  {id:141,name:"מתלה קיר לאופניים מתקפל",niche:"כושר",pm:10,px:18.99,ps:49.99,w:"800g",di:77,dg:82,risk:5,st:"",tags:["אופניים", "אחסון", "קיר"],desc:"נירוסטה, 30 ק'ג. חוסך מקום."},
  {id:142,name:"מזרן יוגה קורק טבעי 6mm",niche:"כושר",pm:18,px:32.99,ps:79.99,w:"1800g",di:80,dg:85,risk:12,st:"משקל",tags:["יוגה", "קורק", "מזרן"],desc:"אנטי-בקטריאלי. לנישת בריאות."},
  {id:143,name:"אפוד כבד מתכוונן 5-20 ק'ג",niche:"כושר",pm:20,px:35.99,ps:89.99,w:"5000g",di:75,dg:79,risk:8,st:"משקל גבוה",tags:["אפוד", "כבד", "CrossFit"],desc:"לאימון כוח וCrossFit."},
  {id:144,name:"כיסוי גיגית לרכב UV",niche:"רכב",pm:14,px:25.99,ps:64.99,w:"500g",di:80,dg:83,risk:3,st:"",tags:["רכב", "כיסוי", "UV"],desc:"עמיד UV ומים. מגן על הצבע."},
  {id:145,name:"שטיח לחדר ילדים XPE פאזל",niche:"ילדים",pm:12,px:21.99,ps:54.99,w:"600g",di:82,dg:85,risk:0,st:"",tags:["ילדים", "שטיח", "פאזל"],desc:"XPE רך, 12 חלקים. לרצפת ילדים."},
  {id:146,name:"מגב רצפה ספוג מיקרופייבר",niche:"בית",pm:5,px:9.99,ps:27.99,w:"300g",di:82,dg:85,risk:0,st:"",tags:["ניקוי", "רצפה", "מגב"],desc:"ספוג + מגב גומי. ויראלי TikTok."},
  {id:147,name:"עגיל אוזן לחץ נגד בחילה",niche:"בריאות",pm:4,px:7.99,ps:22.99,w:"10g",di:84,dg:87,risk:0,st:"",tags:["בחילה", "נסיעה", "לחץ"],desc:"לנסיעות ים. 2 יחידות. Impulse Buy."},
  {id:148,name:"מכשיר EMS לאימון בטן",niche:"כושר",pm:15,px:26.99,ps:64.99,w:"150g",di:79,dg:83,risk:8,st:"חשמלי",tags:["בטן", "EMS", "כושר"],desc:"גירוי שרירי בטן 6 מצבים."},
  {id:149,name:"תנור לחם קטן 2L",niche:"בית",pm:18,px:32.99,ps:79.99,w:"1200g",di:79,dg:82,risk:5,st:"חשמל",tags:["לחם", "תנור", "בית"],desc:"2L, ממיר 300W. לחם תוצרת בית."},
  {id:150,name:"משטח לגרידת כרטיסי הגרלה",niche:"גאדג'טים",pm:2,px:3.99,ps:12.99,w:"20g",di:81,dg:83,risk:0,st:"",tags:["הגרלה", "גרידה", "גאדג'ט"],desc:"כפית גרידה מיוחדת. Impulse Buy. ויראלי."},
  {id:151,name:"מכשיר אינפרא אדום 660nm לכאב",niche:"בריאות",pm:18,px:32.99,ps:79.99,w:"300g",di:80,dg:84,risk:8,st:"קרינה",tags:["NIR", "כאב", "עור"],desc:"טיפול אור אינפרא-אדום 660nm ו-850nm לשיכוך כאב, שיפור עור והאצת ריפוי. 10 דקות ביום. ביקוש גדל מאוד."},
  {id:152,name:"מכשיר לייזר נמוך לכאב פרק",niche:"בריאות",pm:12,px:21.99,ps:54.99,w:"150g",di:78,dg:82,risk:8,st:"לייזר",tags:["לייזר", "פרק", "כאב"],desc:"לייזר רפואי נמוך 650nm לכאב פרקים ושרירים. 5 ראשים, 30 דקות ביום. ביקוש גדל."},
  {id:153,name:"קסדת EMS לכאב ראש ומיגרנה",niche:"בריאות",pm:15,px:26.99,ps:64.99,w:"250g",di:79,dg:83,risk:8,st:"EMS",tags:["מיגרנה", "ראש", "EMS"],desc:"קסדה עם גירוי EMS לשיכוך כאב ראש ומיגרנה. 4 מצבים, נטענת. ביקוש גדל."},
  {id:154,name:"מכשיר עיסוי גב חשמלי מרצפת",niche:"בריאות",pm:22,px:38.99,ps:89.99,w:"1200g",di:77,dg:81,risk:5,st:"",tags:["גב", "עיסוי", "מרצפת"],desc:"מרצפת עיסוי גב עם חום וויברציה. 8 מנוע. לשימוש בבית. ביקוש עקבי."},
  {id:155,name:"רצועת ירך אלסטית לשיקום",niche:"בריאות",pm:8,px:14.99,ps:39.99,w:"200g",di:80,dg:83,risk:0,st:"",tags:["ירך", "שיקום", "כאב"],desc:"רצועת לחיצה אלסטית לכאב ירך וברך. 2 רמות לחץ. ביקוש מתמיד."},
  {id:156,name:"מנקה אוזניים ספירלה",niche:"בריאות",pm:4,px:7.99,ps:22.99,w:"50g",di:84,dg:87,risk:3,st:"",tags:["אוזניים", "ניקוי", "בריאות"],desc:"מנקה אוזניים ספירלה בטוח עם 16 גדלים. Impulse Buy קלאסי. ויראלי TikTok."},
  {id:157,name:"מגן ברכיים ספורט 4D",niche:"בריאות",pm:6,px:11.99,ps:32.99,w:"200g",di:83,dg:86,risk:0,st:"",tags:["ברכיים", "ספורט", "הגנה"],desc:"מגן ברכיים 4D עם פאנלים כורכמיים. לריצה ופעילות ספורטיבית."},
  {id:158,name:"פלסטר כורכום לכאב",niche:"בריאות",pm:3,px:5.99,ps:17.99,w:"60g",di:85,dg:88,risk:0,st:"",tags:["כורכום", "כאב", "פלסטר"],desc:"פלסטר כורכום לכאב פרקים ושרירים. 10 יחידות. Impulse Buy. ויראלי."},
  {id:159,name:"רולר עיניים זהב אנטי-אייג'ינג",niche:"יופי",pm:5,px:9.99,ps:27.99,w:"80g",di:86,dg:89,risk:0,st:"",tags:["עיניים", "זהב", "אנטי-אייג'ינג"],desc:"רולר עיניים מזהב 24K לעיגולים שחורים ונפיחות. ויראלי TikTok. Impulse Buy."},
  {id:160,name:"מסכת שפתיים קולגן",niche:"יופי",pm:2,px:3.99,ps:12.99,w:"30g",di:87,dg:90,risk:0,st:"",tags:["שפתיים", "קולגן", "לחות"],desc:"מסכת שפתיים קולגן לחות. 10 יחידות. Impulse Buy. ביקוש עצום."},
  {id:161,name:"ספריית בלוש שיער ויטמין E",niche:"יופי",pm:4,px:7.99,ps:22.99,w:"150g",di:83,dg:86,risk:0,st:"",tags:["שיער", "ויטמין", "בלוש"],desc:"ספריית שיער עם ויטמין E לשיער חזק ומבריק. מוצר חוזר."},
  {id:162,name:"מרסס פנים מים מינרליים",niche:"יופי",pm:5,px:9.99,ps:27.99,w:"100g",di:84,dg:87,risk:0,st:"",tags:["פנים", "מרסס", "לחות"],desc:"מרסס מים מינרליים 80ml. לחות מיידית. Impulse Buy. ביקוש בקיץ."},
  {id:163,name:"סרום ויטמין C 20%",niche:"יופי",pm:5,px:9.99,ps:29.99,w:"30g",di:88,dg:91,risk:3,st:"",tags:["ויטמין C", "סרום", "עור"],desc:"סרום ויטמין C 20% לעור בוהק. 30ml. ביקוש עצום ומוצר חוזר."},
  {id:164,name:"מסיר איפור מיקרופייבר כרית",niche:"יופי",pm:3,px:5.99,ps:17.99,w:"100g",di:82,dg:85,risk:0,st:"",tags:["איפור", "מסיר", "מיקרופייבר"],desc:"כרית מיקרופייבר למסירת איפור עם מים בלבד. 3 יחידות. Impulse Buy."},
  {id:165,name:"מזרק מילוי שפתיים הידרה",niche:"יופי",pm:8,px:14.99,ps:39.99,w:"50g",di:83,dg:86,risk:5,st:"",tags:["שפתיים", "מילוי", "הידרה"],desc:"מזרק הידרה לשפתיים מלאות ללא מחט. אפקט מיידי. ביקוש."},
  {id:166,name:"מגב קיר מקלחת עמיד",niche:"בית",pm:5,px:9.99,ps:27.99,w:"250g",di:82,dg:85,risk:0,st:"",tags:["מקלחת", "מגב", "ניקוי"],desc:"מגב קיר מקלחת מנירוסטה. מניע ידנית. Impulse Buy לאמבטיה."},
  {id:167,name:"מגב כפול לחלונות מגנטי",niche:"בית",pm:6,px:11.99,ps:32.99,w:"300g",di:81,dg:84,risk:0,st:"",tags:["חלונות", "מגב", "מגנטי"],desc:"שני צידי זכוכית בו-זמנית. ויראלי TikTok Cleaning."},
  {id:168,name:"מנקה שטיח קצף",niche:"בית",pm:7,px:12.99,ps:34.99,w:"400g",di:80,dg:83,risk:0,st:"",tags:["שטיח", "ניקוי", "קצף"],desc:"מנקה שטיח בקצף. ללא שטיפה. ריח רענן. Impulse Buy."},
  {id:169,name:"תיבת כביסה מתקפלת 50L",niche:"בית",pm:8,px:14.99,ps:39.99,w:"400g",di:80,dg:83,risk:0,st:"",tags:["כביסה", "תיבה", "ארגון"],desc:"תיבת כביסה מתקפלת 50L. עמידה, קלה לאחסון. מוצר בית קלאסי."},
  {id:170,name:"מעמד סבון כלים מנירוסטה",niche:"בית",pm:5,px:9.99,ps:27.99,w:"300g",di:81,dg:84,risk:0,st:"",tags:["מטבח", "סבון", "נירוסטה"],desc:"מעמד סבון כלים מנירוסטה עם ספוג. עיצוב נקי. מוצר מתנה."},
  {id:171,name:"מנורת לילה חיישן USB",niche:"בית",pm:4,px:7.99,ps:22.99,w:"80g",di:83,dg:86,risk:0,st:"",tags:["מנורה", "לילה", "חיישן"],desc:"מנורת לילה עם חיישן תנועה. USB. 16 צבעים. Impulse Buy."},
  {id:172,name:"קופסת אוכל מחוממת USB",niche:"בית",pm:12,px:21.99,ps:54.99,w:"600g",di:80,dg:83,risk:3,st:"",tags:["אוכל", "חימום", "USB"],desc:"קופסת אוכל מחוממת USB ל-65°C. 800ml. לעבודה. ביקוש גדל."},
  {id:173,name:"ספרינקלר צינור גמיש 30m",niche:"בית",pm:8,px:14.99,ps:39.99,w:"500g",di:79,dg:82,risk:0,st:"",tags:["גינה", "צינור", "ספרינקלר"],desc:"צינור גמיש 30 מטר. מתרחב פי 3. ביקוש עונתי חזק."},
  {id:174,name:"כדור פיספי טניס שולחן",niche:"כושר",pm:5,px:9.99,ps:27.99,w:"200g",di:78,dg:81,risk:0,st:"",tags:["טניס שולחן", "פיספי", "כדור"],desc:"כדור פיספי ABS טניס שולחן. 40+. חבילת 12. ביקוש קבוע."},
  {id:175,name:"כפפות אגרוף MMA",niche:"כושר",pm:8,px:14.99,ps:39.99,w:"400g",di:79,dg:82,risk:0,st:"",tags:["אגרוף", "MMA", "כפפות"],desc:"כפפות MMA עם ריפוד ג'ל. לאימון וספארינג. ביקוש עקבי."},
  {id:176,name:"מתח בר דלת קפיצה",niche:"כושר",pm:10,px:18.99,ps:49.99,w:"600g",di:80,dg:83,risk:5,st:"",tags:["מתח", "דלת", "כושר"],desc:"בר מתח לדלת ללא קידוח. מקסימום 100 ק'ג. ביקוש קבוע."},
  {id:177,name:"מחרוזת קפיצה בלא חוט",niche:"כושר",pm:5,px:9.99,ps:27.99,w:"150g",di:82,dg:85,risk:0,st:"",tags:["קפיצה", "מחרוזת", "כושר"],desc:"מחרוזת קפיצה בלא חוט עם משקולות. קפיצה פנימה. ויראלי."},
  {id:178,name:"גלגלת שיאצו ידנית",niche:"כושר",pm:4,px:7.99,ps:22.99,w:"300g",di:81,dg:84,risk:0,st:"",tags:["שיאצו", "גלגלת", "גב"],desc:"גלגלת שיאצו ידנית לגב ורגליים. 4 ראשים. Impulse Buy."},
  {id:179,name:"כרית ספינה ישיבה ארגונומית",niche:"כושר",pm:7,px:13.99,ps:37.99,w:"400g",di:80,dg:83,risk:0,st:"",tags:["ישיבה", "ארגונומיה", "כאב גב"],desc:"כרית ספינה ארגונומית לכאב גב. ג'ל זיכרון. לכיסא משרדי."},
  {id:180,name:"בגד ים ספנדקס ספורט",niche:"כושר",pm:8,px:14.99,ps:39.99,w:"150g",di:79,dg:82,risk:0,st:"",tags:["שחייה", "בגד ים", "ספורט"],desc:"בגד ים ספנדקס ספורטיבי. UV50+. לשחייה ורמה ספורטיבית."},
  {id:181,name:"מייצב כף יד גימבל חד-ציר",niche:"טכנולוגיה",pm:15,px:26.99,ps:64.99,w:"250g",di:81,dg:84,risk:0,st:"",tags:["גימבל", "וידאו", "מייצב"],desc:"גימבל חד-ציר לסמארטפון. חיבור Bluetooth. 12 שעות סוללה. ביקוש גדל."},
  {id:182,name:"מקלט Bluetooth 5.0 AUX",niche:"טכנולוגיה",pm:5,px:9.99,ps:27.99,w:"40g",di:83,dg:86,risk:0,st:"",tags:["Bluetooth", "AUX", "רכב"],desc:"מקלט Bluetooth 5.0 לרכב ורמקולים ישנים. Impulse Buy קלאסי."},
  {id:183,name:"מצלמת רשת 4K PTZ WiFi",niche:"טכנולוגיה",pm:22,px:38.99,ps:99.99,w:"350g",di:80,dg:84,risk:10,st:"מצלמה",tags:["4K", "PTZ", "אבטחה"],desc:"מצלמת 4K עם סיבוב 360°, ראיית לילה ואחסון SD. ביקוש גדל."},
  {id:184,name:"שעון חכם Amoled 2025",niche:"טכנולוגיה",pm:20,px:35.99,ps:89.99,w:"60g",di:85,dg:89,risk:5,st:"",tags:["שעון", "Amoled", "חכם"],desc:"שעון חכם Amoled 2025 עם GPS, SpO2 ו-7 ימים סוללה. ביקוש עצום."},
  {id:185,name:"אוזניות עצם Bluetooth",niche:"טכנולוגיה",pm:12,px:21.99,ps:54.99,w:"40g",di:82,dg:86,risk:0,st:"",tags:["אוזניות", "עצם", "Bluetooth"],desc:"אוזניות הולכת עצם OpenEar. IP55, 8 שעות. לרכיבה וריצה."},
  {id:186,name:"רמקול LED Bluetooth IP67",niche:"טכנולוגיה",pm:10,px:18.99,ps:49.99,w:"300g",di:83,dg:86,risk:0,st:"",tags:["רמקול", "Bluetooth", "LED"],desc:"רמקול עמיד מים IP67 עם אורות LED. 10W. לים ובריכה."},
  {id:187,name:"מנורת UV ג'ל ריפוי 48W",niche:"טכנולוגיה",pm:6,px:11.99,ps:32.99,w:"200g",di:82,dg:85,risk:5,st:"UV",tags:["UV", "ג'ל", "ציפורניים"],desc:"מנורה UV/LED 48W לריפוי ג'ל ציפורניים. 36 נורות. Impulse Buy."},
  {id:188,name:"כבל מגנטי 3-ב-1 USB-C",niche:"טכנולוגיה",pm:4,px:7.99,ps:22.99,w:"60g",di:86,dg:89,risk:0,st:"",tags:["כבל", "מגנטי", "USB-C"],desc:"כבל מגנטי 3-ב-1: USB-C, Micro, Lightning. Impulse Buy."},
  {id:189,name:"בקבוק מים לכלב 500ml",niche:"חיות",pm:5,px:9.99,ps:27.99,w:"200g",di:82,dg:85,risk:0,st:"",tags:["כלב", "מים", "בקבוק"],desc:"בקבוק מים לכלב 500ml עם קערה מובנית. לטיולים. Impulse Buy."},
  {id:190,name:"מברשת שיער חשמלית לחיות",niche:"חיות",pm:8,px:14.99,ps:39.99,w:"250g",di:83,dg:86,risk:0,st:"",tags:["כלב", "חתול", "מברשת"],desc:"מברשת שיער חשמלית לחיות עם שאיבה. ניקוי בלחיצה. ויראלי."},
  {id:191,name:"ספה אורתופדית לכלב XL",niche:"חיות",pm:18,px:32.99,ps:79.99,w:"1000g",di:81,dg:84,risk:0,st:"",tags:["כלב", "ספה", "אורתופדי"],desc:"ספה אורתופדית XL לכלב גדול. זיכרון. כיסוי נשלף לכביסה."},
  {id:192,name:"קולר GPS חכם לכלב",niche:"חיות",pm:25,px:42.99,ps:99.99,w:"150g",di:79,dg:82,risk:8,st:"SIM",tags:["כלב", "GPS", "קולר"],desc:"קולר GPS עם SIM ומעקב בזמן אמת. ביקוש גדל."},
  {id:193,name:"מנקה שיניים לכלב אצבע",niche:"חיות",pm:3,px:5.99,ps:17.99,w:"50g",di:81,dg:84,risk:0,st:"",tags:["כלב", "שיניים", "ניקוי"],desc:"מנקה שיניים לכלב לאצבע. סיליקון. 2 יחידות. Impulse Buy."},
  {id:194,name:"פסנתר ילדים 61 מקשים",niche:"ילדים",pm:20,px:35.99,ps:79.99,w:"2000g",di:79,dg:82,risk:5,st:"משקל",tags:["פסנתר", "ילדים", "מוזיקה"],desc:"פסנתר 61 מקשים לילדים עם 128 צלילים. נטען. ביקוש קבוע."},
  {id:195,name:"ערכת מדע וניסויים",niche:"ילדים",pm:10,px:18.99,ps:49.99,w:"500g",di:81,dg:84,risk:0,st:"",tags:["מדע", "ניסויים", "חינוך"],desc:"ערכת מדע 100+ ניסויים לגיל 6-14. מתנה חינוכית. ביקוש קבוע."},
  {id:196,name:"סקייטבורד לילדים",niche:"ילדים",pm:14,px:25.99,ps:59.99,w:"1200g",di:79,dg:82,risk:5,st:"",tags:["סקייטבורד", "ילדים", "ספורט"],desc:"סקייטבורד ABEC-7 לילדים. דק 7 שכבות. ביקוש עונתי."},
  {id:197,name:"בובת LED קסם מהבהבת",niche:"ילדים",pm:6,px:11.99,ps:32.99,w:"200g",di:82,dg:85,risk:0,st:"",tags:["בובה", "LED", "ילדים"],desc:"בובת LED מהבהבת קסם. ויראלי TikTok Toys. Impulse Buy."},
  {id:198,name:"ארנק נסיעות RFID עם פספורט",niche:"נסיעות",pm:8,px:14.99,ps:39.99,w:"150g",di:83,dg:86,risk:0,st:"",tags:["ארנק", "RFID", "פספורט"],desc:"ארנק נסיעות עם RFID ומקום לפספורט. כרטיסים + מזומן. Impulse Buy."},
  {id:199,name:"כרית ישיבה ניידת מתנפחת",niche:"נסיעות",pm:6,px:11.99,ps:32.99,w:"200g",di:80,dg:83,risk:0,st:"",tags:["ישיבה", "כרית", "מתנפחת"],desc:"כרית ישיבה מתנפחת לנסיעות ארוכות. 150 ק'ג. קומפקטית."},
  {id:200,name:"ערכת עזרה ראשונה מינימל",niche:"נסיעות",pm:8,px:14.99,ps:39.99,w:"300g",di:80,dg:83,risk:0,st:"",tags:["עזרה ראשונה", "נסיעה", "בטיחות"],desc:"ערכת עזרה ראשונה 100 פריטים לנסיעות. תיק קומפקטי. ביקוש קבוע."},
  {id:201,name:"מנורה סולארית עמוד 4W",niche:"גינה",pm:8,px:14.99,ps:39.99,w:"500g",di:80,dg:83,risk:0,st:"",tags:["גינה", "סולארי", "עמוד"],desc:"מנורת עמוד סולארית 4W ל-8 שעות. עמידה מזג אוויר. ביקוש."},
  {id:202,name:"מיכל קומפוסט 25L",niche:"גינה",pm:10,px:18.99,ps:49.99,w:"600g",di:76,dg:79,risk:0,st:"",tags:["קומפוסט", "גינה", "אקולוגי"],desc:"מיכל קומפוסט 25L עם מסנן ריח. לגינה ומטבח. ביקוש גדל."},
  {id:203,name:"אדנית עצמית השקייה",niche:"גינה",pm:7,px:13.99,ps:37.99,w:"400g",di:78,dg:81,risk:0,st:"",tags:["עציץ", "השקיה", "חכם"],desc:"אדנית עצמית השקייה 3L. לשבועיים ללא השקיה. מושלם לנסיעות."},
  {id:204,name:"צמיד מגנטי בריאות טיטן",niche:"אופנה",pm:5,px:9.99,ps:27.99,w:"50g",di:80,dg:83,risk:5,st:"",tags:["צמיד", "מגנטי", "טיטן"],desc:"צמיד מגנטי טיטן לבריאות. ניירוסטה. מתנה לגברים."},
  {id:205,name:"שרשרת לב כסף 925",niche:"אופנה",pm:4,px:7.99,ps:22.99,w:"15g",di:85,dg:88,risk:3,st:"",tags:["שרשרת", "כסף", "לב"],desc:"שרשרת 925 כסף עם תליון לב. מתנה לנשים. ביקוש סביב חגים."},
  {id:206,name:"כיסוי טלפון עם ארנק",niche:"אופנה",pm:5,px:9.99,ps:27.99,w:"80g",di:83,dg:86,risk:0,st:"",tags:["טלפון", "כיסוי", "ארנק"],desc:"כיסוי טלפון עם ארנק ל-3 כרטיסים. עור PU. Impulse Buy."},
  {id:207,name:"משקפי שמש Vintage עגולים",niche:"אופנה",pm:4,px:7.99,ps:22.99,w:"50g",di:84,dg:87,risk:0,st:"",tags:["משקפיים", "וינטג'", "עגול"],desc:"משקפי שמש Vintage עגולים. UV400. מסגרת מתכת. ויראלי."},
  {id:208,name:"מטהר אוויר רכב HEPA USB",niche:"רכב",pm:10,px:18.99,ps:49.99,w:"200g",di:82,dg:85,risk:0,st:"",tags:["רכב", "HEPA", "אוויר"],desc:"מטהר אוויר רכב HEPA USB. PM2.5. שקט. עמיד. ביקוש."},
  {id:209,name:"כרית ישיבה לרכב זיכרון",niche:"רכב",pm:8,px:14.99,ps:39.99,w:"600g",di:81,dg:84,risk:0,st:"",tags:["רכב", "ישיבה", "זיכרון"],desc:"כרית ישיבה זיכרון לרכב. לנסיעות ארוכות. ביקוש קבוע."},
  {id:210,name:"אמצוח רכב נדלק בחמישה שניות",niche:"רכב",pm:15,px:26.99,ps:64.99,w:"400g",di:80,dg:83,risk:5,st:"ליתיום",tags:["רכב", "אמצוח", "חירום"],desc:"מאיץ מנוע קומפקטי 1000A ליתיום. נדלק גם ב-0 volts. ביקוש."},
  {id:211,name:"שעון מעורר LED מראה",niche:"גאדג'טים",pm:6,px:11.99,ps:32.99,w:"200g",di:81,dg:84,risk:0,st:"",tags:["שעון", "מראה", "LED"],desc:"שעון מעורר מראה LED. טמפרטורה. 7 צבעים. Impulse Buy."},
  {id:212,name:"קוביית Rubik מהירות",niche:"גאדג'טים",pm:5,px:9.99,ps:27.99,w:"100g",di:80,dg:83,risk:0,st:"",tags:["רוביק", "קובייה", "מהירות"],desc:"קוביית Rubik מקצועית לפתרון מהיר. ציר מגנטי. ביקוש קבוע."},
  {id:213,name:"כרטיסים בניית קלפים",niche:"גאדג'טים",pm:4,px:7.99,ps:22.99,w:"80g",di:79,dg:82,risk:0,st:"",tags:["קלפים", "בנייה", "גאדג'ט"],desc:"קלפים לבנייה 3D. 54 יחידות. ויראלי TikTok. Impulse Buy."},
  {id:214,name:"מכשיר עיסוי ראש 8 ראשים",niche:"בריאות",pm:8,px:14.99,ps:39.99,w:"300g",di:84,dg:87,risk:0,st:"",tags:["ראש", "עיסוי", "מתח"],desc:"מכשיר עיסוי ראש 8 ראשים ויברציה. לשחרור מתח. ויראלי TikTok."},
  {id:215,name:"מנקה פנים ויטמין C+E",niche:"יופי",pm:6,px:11.99,ps:32.99,w:"100g",di:83,dg:86,risk:0,st:"",tags:["פנים", "ויטמין", "ניקוי"],desc:"מנקה פנים עם ויטמין C+E. קצף ג'ל. מוצר חוזר."},
  {id:216,name:"גלגל AB מתקפל",niche:"כושר",pm:8,px:14.99,ps:39.99,w:"600g",di:80,dg:83,risk:0,st:"",tags:["AB", "גלגל", "מתקפל"],desc:"גלגל AB מתקפל עם מד התנגדות. לאימון בית. ביקוש עקבי."},
  {id:217,name:"מחצלת TPE אנטי-החלקה",niche:"כושר",pm:10,px:18.99,ps:49.99,w:"900g",di:81,dg:84,risk:0,st:"",tags:["מחצלת", "TPE", "יוגה"],desc:"מחצלת TPE 6mm אנטי-החלקה. לכל פעילות. מחיר-איכות."},
  {id:218,name:"מייצב גב ישיבה",niche:"בריאות",pm:6,px:11.99,ps:32.99,w:"300g",di:82,dg:85,risk:0,st:"",tags:["גב", "ישיבה", "מייצב"],desc:"מייצב גב לישיבה נכונה. אלסטי. לכיסא משרדי. ביקוש WFH."},
  {id:219,name:"נעלי קצף ים",niche:"נסיעות",pm:5,px:9.99,ps:27.99,w:"250g",di:81,dg:84,risk:0,st:"",tags:["נעליים", "ים", "קצף"],desc:"נעלי ים קצף EVA. 5 מידות. ביקוש עונתי חזק בקיץ."},
  {id:220,name:"מרסס שיניים נייד",niche:"נסיעות",pm:8,px:14.99,ps:39.99,w:"200g",di:80,dg:83,risk:0,st:"",tags:["שיניים", "מרסס", "נייד"],desc:"מרסס שיניים 200ml נייד USB. IPX7. ביקוש בנסיעות."},
  {id:221,name:"עפרון מכני 0.5 נקי",niche:"גאדג'טים",pm:2,px:3.99,ps:12.99,w:"15g",di:82,dg:85,risk:0,st:"",tags:["עפרון", "מכני", "לימוד"],desc:"עפרון מכני 0.5mm עם מחק. חבילת 3. Impulse Buy."},
  {id:222,name:"ספרייה מגנטית לשמן",niche:"בית",pm:3,px:5.99,ps:17.99,w:"100g",di:80,dg:83,risk:0,st:"",tags:["מגנט", "ספרייה", "מטבח"],desc:"ספרייה מגנטית לשמן זית ורטבים. לדלת מקרר. Impulse Buy."},
  {id:223,name:"מנעול אצבע חכם",niche:"טכנולוגיה",pm:20,px:35.99,ps:79.99,w:"300g",di:79,dg:82,risk:8,st:"חשמל",tags:["מנעול", "טביעת אצבע", "חכם"],desc:"מנעול טביעת אצבע + קוד + מפתח. ל-50 אצבעות. ביקוש גדל."},
  {id:224,name:"נורת UV נגד יתושים",niche:"בית",pm:8,px:14.99,ps:39.99,w:"200g",di:82,dg:85,risk:5,st:"UV",tags:["יתושים", "UV", "נורה"],desc:"נורת UV למשיכה והריגת יתושים. שקטה. ביקוש עצום בקיץ."},
  {id:225,name:"מגן עיניים משקפי מחשב",niche:"בריאות",pm:5,px:9.99,ps:27.99,w:"40g",di:83,dg:86,risk:0,st:"",tags:["עיניים", "מחשב", "UV"],desc:"משקפי מחשב anti-blue light. עדשות צהובות. Impulse Buy."},
  {id:226,name:"מכשיר גלגול שוקה",niche:"כושר",pm:5,px:9.99,ps:27.99,w:"200g",di:81,dg:84,risk:0,st:"",tags:["שוקה", "גלגול", "כאב"],desc:"גלגלת שוקה לשחרור שרירים. ויברציה. 4 מצבים."},
  {id:227,name:"קרם גוף שיאה קוקוס",niche:"יופי",pm:4,px:7.99,ps:22.99,w:"200g",di:83,dg:86,risk:0,st:"",tags:["גוף", "קרם", "שיאה"],desc:"קרם גוף שיאה וקוקוס 200ml. מוצר חוזר. ביקוש קבוע."},
  {id:228,name:"ניקוי פנים ג'ל קוריאני",niche:"יופי",pm:4,px:7.99,ps:22.99,w:"150g",di:82,dg:85,risk:0,st:"",tags:["פנים", "ג'ל", "קוריאני"],desc:"ג'ל ניקוי פנים קוריאני עם חומצה היאלורונית. לחות."},
  {id:229,name:"שמן ארגן מרוקאי",niche:"יופי",pm:5,px:9.99,ps:27.99,w:"50g",di:84,dg:87,risk:0,st:"",tags:["שמן", "ארגן", "שיער"],desc:"שמן ארגן מרוקאי טהור לשיער. 50ml. מוצר חוזר קלאסי."},
  {id:230,name:"תרסיס קולגן שיער",niche:"יופי",pm:5,px:9.99,ps:27.99,w:"150g",di:82,dg:85,risk:0,st:"",tags:["שיער", "קולגן", "תרסיס"],desc:"תרסיס קולגן לשיער. מחזק ומגן מחום. מוצר חוזר."},
  {id:231,name:"מסיר אבנית שיניים אולטרסאוניק",niche:"בריאות",pm:8,px:14.99,ps:39.99,w:"150g",di:82,dg:85,risk:5,st:"",tags:["שיניים", "אבנית", "אולטרסאוניק"],desc:"מסיר אבנית אולטרסאוניק ביתי. LED. 3 מצבים."},
  {id:232,name:"כיסוי ראש מיקרופייבר",niche:"יופי",pm:3,px:5.99,ps:17.99,w:"60g",di:81,dg:84,risk:0,st:"",tags:["ראש", "מיקרופייבר", "שיער"],desc:"כיסוי ראש מיקרופייבר מהיר ייבוש. כפתור. חבילת 3."},
  {id:233,name:"מקלחת ראש לחץ חכם",niche:"בית",pm:8,px:14.99,ps:39.99,w:"300g",di:81,dg:84,risk:0,st:"",tags:["מקלחת", "לחץ", "ראש"],desc:"ראש מקלחת 9 מצבים. מסנן סיד. חיסכון במים."},
  {id:234,name:"כרית נסיעה U-shape",niche:"נסיעות",pm:5,px:9.99,ps:27.99,w:"150g",di:82,dg:85,risk:0,st:"",tags:["נסיעה", "כרית", "צוואר"],desc:"כרית U-Shape לנסיעה. זיכרון. ביקוש קבוע."},
  {id:235,name:"מייבש שיניים UV",niche:"בריאות",pm:10,px:18.99,ps:49.99,w:"200g",di:79,dg:82,risk:5,st:"UV",tags:["שיניים", "UV", "חיטוי"],desc:"מייבש מברשת שיניים UV. חיטוי 99.9%. ביקוש."},
  {id:236,name:"מזון לדגים אוטומטי",niche:"חיות",pm:12,px:21.99,ps:54.99,w:"400g",di:78,dg:81,risk:0,st:"",tags:["דגים", "מזון", "אוטומטי"],desc:"מזין אוטומטי לאקווריום. 2 פעמים ביום. USB. ביקוש."},
  {id:237,name:"שמיכת כבד נגד חרדה",niche:"בריאות",pm:20,px:35.99,ps:79.99,w:"3000g",di:79,dg:82,risk:5,st:"משקל",tags:["שמיכה", "חרדה", "כבד"],desc:"שמיכה כבדה 6 ק'ג לטיפול בחרדה ושינה. ביקוש גדל."},
  {id:238,name:"כרית שינה קירור ג'ל",niche:"בריאות",pm:12,px:21.99,ps:54.99,w:"500g",di:81,dg:84,risk:0,st:"",tags:["שינה", "קירור", "ג'ל"],desc:"כרית שינה עם ג'ל קירור. שומרת טמפרטורה. ביקוש גדל."},
  {id:239,name:"ספה מתקפלת לגינה",niche:"גינה",pm:20,px:35.99,ps:79.99,w:"2000g",di:77,dg:80,risk:8,st:"משקל",tags:["גינה", "ספה", "מתקפלת"],desc:"ספה מתקפלת לגינה. עמידה UV. 150 ק'ג. ביקוש עונתי."},
  {id:240,name:"תאורת LED בריכה סולארית",niche:"גינה",pm:8,px:14.99,ps:39.99,w:"200g",di:78,dg:81,risk:0,st:"",tags:["בריכה", "LED", "סולארי"],desc:"נורות LED סולאריות לבריכה עמידות מים IP68."},
  {id:241,name:"ציוד ניקוי רכב סט",niche:"רכב",pm:10,px:18.99,ps:49.99,w:"500g",di:82,dg:85,risk:0,st:"",tags:["רכב", "ניקוי", "סט"],desc:"סט ניקוי רכב 12 חלקים. מגבונים, ספוג, וואקס. ביקוש."},
  {id:242,name:"מעמד ספר בישול",niche:"בית",pm:5,px:9.99,ps:27.99,w:"200g",di:79,dg:82,risk:0,st:"",tags:["מטבח", "ספר", "מעמד"],desc:"מעמד ספר בישול מתכוונן. 360°. לטאבלט ולמתכון."},
  {id:243,name:"ריסוס ילדים נגד חרקים",niche:"ילדים",pm:4,px:7.99,ps:22.99,w:"100g",di:82,dg:85,risk:3,st:"בדוק",tags:["ילדים", "חרקים", "ריסוס"],desc:"ריסוס טבעי נגד חרקים לילדים. אלוורה. Impulse Buy."},
  {id:244,name:"שמיכה חמה תינוק",niche:"ילדים",pm:8,px:14.99,ps:39.99,w:"300g",di:82,dg:85,risk:0,st:"",tags:["תינוק", "שמיכה", "חמה"],desc:"שמיכת פלנל לתינוק. רכה. ניתנת לכביסה. מתנה."},
  {id:245,name:"מחצלת משחק לתינוק",niche:"ילדים",pm:10,px:18.99,ps:49.99,w:"400g",di:84,dg:87,risk:0,st:"",tags:["תינוק", "מחצלת", "משחק"],desc:"מחצלת משחק XPE 180×200. מודפסת. עמידה. ביקוש קבוע."},
  {id:246,name:"פנסולת לריצה לילה",niche:"כושר",pm:5,px:9.99,ps:27.99,w:"100g",di:80,dg:83,risk:0,st:"",tags:["ריצה", "פנס", "לילה"],desc:"פנס לחזה לריצה לילה. LED, USB. IPX5. ביקוש."},
  {id:247,name:"שוקית ספורט 5 אצבעות",niche:"כושר",pm:4,px:7.99,ps:22.99,w:"80g",di:79,dg:82,risk:0,st:"",tags:["גרביים", "ריצה", "5 אצבעות"],desc:"גרביים 5 אצבעות לריצה. Coolmax. חבילת 5."},
  {id:248,name:"מכשיר ניפוח כדורי ספורט",niche:"כושר",pm:8,px:14.99,ps:39.99,w:"300g",di:78,dg:81,risk:0,st:"",tags:["כדור", "ניפוח", "ספורט"],desc:"משאבת כדור חשמלית USB. 20 PSI. כדורסל/כדורגל."},
  {id:249,name:"שלמה ישיבה גב נוחה",niche:"בריאות",pm:12,px:21.99,ps:54.99,w:"400g",di:80,dg:83,risk:0,st:"",tags:["גב", "ישיבה", "כיסא"],desc:"כרית גב ארגונומית לכיסא. אוורירית. לבית ולרכב."},
  {id:250,name:"מכשיר עיסוי כפות ידיים",niche:"בריאות",pm:10,px:18.99,ps:49.99,w:"300g",di:80,dg:83,risk:0,st:"",tags:["ידיים", "עיסוי", "לחץ"],desc:"מכשיר עיסוי כפות ידיים לחץ ואוויר. 3 מצבים. ביקוש."},
  {id:251,name:"מחסנית מסנני מים 5 שלב",niche:"בית",pm:15,px:26.99,ps:64.99,w:"500g",di:79,dg:82,risk:0,st:"",tags:["מים", "מסנן", "5 שלב"],desc:"מחסנית מסנן מים 5 שלב. חיבור ברז. הסרת כלור."},
  {id:252,name:"מנורת שולחן נטענת מגנטית",niche:"בית",pm:12,px:21.99,ps:54.99,w:"300g",di:81,dg:84,risk:0,st:"",tags:["מנורה", "שולחן", "מגנטית"],desc:"מנורת LED מגנטית. 3 צבעים, 10 עוצמות. לקיר ולשולחן."},
  {id:253,name:"שלט אוניברסלי חכם IR+Bluetooth",niche:"טכנולוגיה",pm:8,px:14.99,ps:39.99,w:"80g",di:81,dg:84,risk:0,st:"",tags:["שלט", "אוניברסלי", "IR"],desc:"שלט אוניברסלי חכם IR+Bluetooth. לטלוויזיה, מזגן, וכו'."},
  {id:254,name:"מדביק אריחים ופלסטיק נאנו",niche:"בית",pm:5,px:9.99,ps:27.99,w:"100g",di:82,dg:85,risk:0,st:"",tags:["דבק", "נאנו", "תיקון"],desc:"דבק ננו שקוף מחזיק 70 ק'ג. Impulse Buy TikTok."},
  {id:255,name:"מסנן שיער ברז אמבטיה",niche:"בית",pm:4,px:7.99,ps:22.99,w:"60g",di:83,dg:86,risk:0,st:"",tags:["שיער", "מסנן", "ברז"],desc:"מסנן שיער לברז אמבטיה. סיליקון. Impulse Buy."},
  {id:256,name:"שעון עמידות UV SPF",niche:"בריאות",pm:6,px:11.99,ps:32.99,w:"30g",di:80,dg:83,risk:0,st:"",tags:["UV", "שמש", "SPF"],desc:"מד UV לחשיפת שמש. מזהיר כשצריך קרם. Impulse Buy."},
  {id:257,name:"מייצב פנסים לאופניים",niche:"כושר",pm:5,px:9.99,ps:27.99,w:"150g",di:78,dg:81,risk:0,st:"",tags:["אופניים", "פנס", "בטיחות"],desc:"מייצב פנסי LED לאופניים. USB. IPX5. ביקוש."},
  {id:258,name:"מחלק חלב לתינוק",niche:"ילדים",pm:6,px:11.99,ps:32.99,w:"150g",di:81,dg:84,risk:0,st:"",tags:["תינוק", "חלב", "מחלק"],desc:"מחלק אבקת חלב 3 תאים. לנסיעות. Impulse Buy לאמהות."},
  {id:259,name:"מזרן לב מתנפח לקמפינג",niche:"נסיעות",pm:15,px:26.99,ps:64.99,w:"700g",di:78,dg:81,risk:0,st:"",tags:["קמפינג", "מזרן", "מתנפח"],desc:"מזרן מתנפח לקמפינג. 190×60. IPX4. ביקוש עונתי."},
  {id:260,name:"מיכל לאחסון כלי עבודה",niche:"בית",pm:8,px:14.99,ps:39.99,w:"500g",di:78,dg:81,risk:0,st:"",tags:["כלים", "אחסון", "מיכל"],desc:"מיכל כלי עבודה נשלף 3 שכבות. נירוסטה. ביקוע קבוע."},
  {id:261,name:"כרית נסיעה 3-ב-1",niche:"נסיעות",pm:8,px:14.99,ps:39.99,w:"200g",di:80,dg:83,risk:0,st:"",tags:["נסיעה", "כרית", "3-ב-1"],desc:"כרית נסיעה 3-ב-1: כרית+סדין+שמיכה. קומפקטית."},
  {id:262,name:"מזרק פגוש ואקום עדין",niche:"יופי",pm:9,px:16.99,ps:44.99,w:"150g",di:82,dg:85,risk:3,st:"",tags:["פגוש", "ואקום", "יופי"],desc:"מכשיר ואקום לפגוש שפתיים. אפקט מיידי. 3 גדלים."},
  {id:263,name:"ספרית שיניים חכמה",niche:"בריאות",pm:8,px:14.99,ps:39.99,w:"200g",di:80,dg:83,risk:0,st:"",tags:["שיניים", "ספרית", "חכמה"],desc:"ספרית שיניים חכמה עם UV וחיישן לחץ. USB. 30 ימים."},
  {id:264,name:"חליפת ים לידה",niche:"ילדים",pm:8,px:14.99,ps:39.99,w:"100g",di:81,dg:84,risk:0,st:"",tags:["תינוק", "ים", "חליפה"],desc:"חליפת ים תינוק UPF50+. עם כיסוי ראש. ביקוש קיץ."},
  {id:265,name:"מכשיר חדירת קרם אלחוטי",niche:"יופי",pm:12,px:21.99,ps:54.99,w:"200g",di:80,dg:83,risk:8,st:"חשמלי",tags:["קרם", "חדירה", "אלחוטי"],desc:"מכשיר חדירת קרם אלקטרופורציה. 3 מצבים. אנטי-אייג'ינג."},
  {id:266,name:"כוס כדורי חימום מגנטי",niche:"בריאות",pm:5,px:9.99,ps:27.99,w:"100g",di:82,dg:85,risk:0,st:"",tags:["כדורים", "מגנטי", "חימום"],desc:"2 כדורי מגנטי לעיסוי ידיים. לשיקום ומתח."},
  {id:267,name:"מגש שולחן זכוכית מחוסמת",niche:"בית",pm:10,px:18.99,ps:49.99,w:"600g",di:78,dg:81,risk:5,st:"זכוכית",tags:["שולחן", "זכוכית", "מגש"],desc:"מגש זכוכית מחוסמת לשולחן. עמיד. עיצוב נקי."},
  {id:268,name:"כרית פנים אנטי-קמטים",niche:"יופי",pm:8,px:14.99,ps:39.99,w:"300g",di:80,dg:83,risk:0,st:"",tags:["פנים", "כרית", "קמטים"],desc:"כרית סיליקון אנטי-קמטים לשינה. שומרת לחות."},
  {id:269,name:"מנורת LED לימוד 2 ראשים",niche:"ילדים",pm:8,px:14.99,ps:39.99,w:"400g",di:81,dg:84,risk:0,st:"",tags:["לימוד", "מנורה", "LED"],desc:"מנורת לימוד 2 ראשים. 5 צבעים. USB. לפרק ולשולחן."},
  {id:270,name:"כיסוי מיטה עמיד מים",niche:"בית",pm:10,px:18.99,ps:49.99,w:"500g",di:79,dg:82,risk:0,st:"",tags:["מיטה", "כיסוי", "עמיד מים"],desc:"כיסוי מיטה עמיד מים. 180×200. כיסוי כסף. מתנה לחולים."},
  {id:271,name:"מסרק חשמלי להסרת כינים",niche:"בריאות",pm:8,px:14.99,ps:39.99,w:"100g",di:82,dg:85,risk:0,st:"",tags:["כינים", "מסרק", "חשמלי"],desc:"מסרק חשמלי להסרת כינים. USB. בטוח לילדים."},
  {id:272,name:"מניפה ניידת USB קומפקטית",niche:"גאדג'טים",pm:4,px:7.99,ps:22.99,w:"80g",di:83,dg:86,risk:0,st:"",tags:["מניפה", "USB", "קומפקט"],desc:"מניפה USB קומפקטית. 3 מהירויות. Impulse Buy בקיץ."},
  {id:273,name:"צנצנת ואקום פרימיום 500ml",niche:"בית",pm:6,px:11.99,ps:32.99,w:"400g",di:80,dg:83,risk:0,st:"",tags:["צנצנת", "ואקום", "אחסון"],desc:"צנצנת ואקום 500ml בורוסיליקט. לחות ירידה. ביקוש."},
];



const PRODUCT_IMAGES={
  1:["https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg"],
  2:["https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg"],
  3:["https://ae-pic-a1.aliexpress-media.com/kf/S10240706b30c429994c8290599d77837v.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3be5c821638a4f41aee44f7f31e50a09I.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb7b562d2c71f44acafa142bb94bdcf71i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S38a263e53f974693b2b42b2146697de8X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7de1a7a1d37847d1a23052897f2a15c7M.jpg"],
  4:["https://ae-pic-a1.aliexpress-media.com/kf/S325a0e0d21f04210b80e4c5087333d9ao.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7f2a22ad007147caaecfe153025a67394.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3be5c821638a4f41aee44f7f31e50a09I.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfc85a65c8cd34c099f8a7df82c348379Y.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S51a0585f5173421da3f865eb212e4e59T.jpg"],
  5:["https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg"],
  6:["https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg"],
  7:["https://ae-pic-a1.aliexpress-media.com/kf/S76d62df8e2d347be9bf83c3c73add8d1O.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S59e3989e572048ad816f1ad29d728e7dJ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S93d86e986e694166bf43c1d3fb1b5640E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S198e2e56147c4b2986861535f6530dd5N.jpg"],
  8:["https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S93d86e986e694166bf43c1d3fb1b5640E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  9:["https://ae-pic-a1.aliexpress-media.com/kf/S93d86e986e694166bf43c1d3fb1b5640E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg"],
  10:["https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg"],
  11:["https://ae-pic-a1.aliexpress-media.com/kf/S9706a669f5654755b3d9f4c67964ded9t.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S60546330d9994bce86505c119bd0d9e0F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S41041992888745fb9d190f97ce110fd3X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg"],
  12:["https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg"],
  13:["https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg"],
  14:["https://ae-pic-a1.aliexpress-media.com/kf/S30fc1863fc8742529e1e7c300bce2655N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8de4008cc65e40898491c7fe8c2771d7i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5a938211d4644dd58fdbd77e790be191N.jpg"],
  15:["https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg"],
  16:["https://ae-pic-a1.aliexpress-media.com/kf/Sc56727c3978e478c9e94ffb3c7fed05et.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5a938211d4644dd58fdbd77e790be191N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S30fc1863fc8742529e1e7c300bce2655N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8de4008cc65e40898491c7fe8c2771d7i.jpg"],
  17:["https://ae-pic-a1.aliexpress-media.com/kf/S0d1993603ee94b9fa2042e7af2bd28e0b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4b05c61cef344e5eb816f8aeddf71cf8o.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa2a8ea1d98f4473e9adf30e3bf682d5d6.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf69cb09feb304eb8987b4e28cf8856572.jpg"],
  18:["https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg"],
  19:["https://ae01.alicdn.com/kf/Sbbd54b2a7b9a4013b48c3d8e7f9b458eQ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd9978ecb871242e0a5b751708752c35ci.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sffbfc1a422cf488db6d5b8c6e453d9eev.jpg", "https://ae01.alicdn.com/kf/S14d9aa7aa8b9493d87b4352ca6328d61s.jpg", "https://ae01.alicdn.com/kf/S54f4136f213d42cfb35f1bf223c3f8509.jpg"],
  20:["https://ae-pic-a1.aliexpress-media.com/kf/S8de4008cc65e40898491c7fe8c2771d7i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5a938211d4644dd58fdbd77e790be191N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S30fc1863fc8742529e1e7c300bce2655N.jpg"],
  21:["https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg"],
  22:["https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg"],
  23:["https://ae-pic-a1.aliexpress-media.com/kf/Sf06539dfb8244a228704c45754d24b3d4.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8db8dede3c534086bc982493e5d07ed5u.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S73850f0c3d5b447aa620e23010309010P.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf963e65342824b0db6fcfcee910230e4l.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S9a3507fa8027424bb43a6385d5b310b8Z.jpg"],
  24:["https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg"],
  25:["https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg"],
  26:["https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S73850f0c3d5b447aa620e23010309010P.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  27:["https://ae-pic-a1.aliexpress-media.com/kf/S5a938211d4644dd58fdbd77e790be191N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S30fc1863fc8742529e1e7c300bce2655N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8de4008cc65e40898491c7fe8c2771d7i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc56727c3978e478c9e94ffb3c7fed05et.jpg"],
  28:["https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg"],
  29:["https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg"],
  30:["https://ae-pic-a1.aliexpress-media.com/kf/Sd9978ecb871242e0a5b751708752c35ci.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sffbfc1a422cf488db6d5b8c6e453d9eev.jpg", "https://ae01.alicdn.com/kf/S14d9aa7aa8b9493d87b4352ca6328d61s.jpg", "https://ae01.alicdn.com/kf/S54f4136f213d42cfb35f1bf223c3f8509.jpg", "https://ae01.alicdn.com/kf/Sbbd54b2a7b9a4013b48c3d8e7f9b458eQ.jpg"],
  31:["https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg"],
  32:["https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  33:["https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg"],
  34:["https://ae-pic-a1.aliexpress-media.com/kf/S4c087581b8af46dbb3fcdcdcfde627c88.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg"],
  35:["https://ae-pic-a1.aliexpress-media.com/kf/S93d86e986e694166bf43c1d3fb1b5640E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S198e2e56147c4b2986861535f6530dd5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S76d62df8e2d347be9bf83c3c73add8d1O.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S59e3989e572048ad816f1ad29d728e7dJ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg"],
  36:["https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4c087581b8af46dbb3fcdcdcfde627c88.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S08564e7340b64e6d9580e18e414b65d5w.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf8d62ed097f94bfa82ea28a349b8950ey.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  37:["https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg"],
  38:["https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg"],
  39:["https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg"],
  40:["https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  41:["https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg"],
  42:["https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg"],
  43:["https://ae-pic-a1.aliexpress-media.com/kf/S0435fa4b3151427d9b5fa4e33836ab7dw.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se20c9e4543da4344b9b487ed68e7e299Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H4f4b066b021a4f1ca7c05661a563472aH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc5d2119787734d13893aafec491dfea4A.jpg"],
  44:["https://ae-pic-a1.aliexpress-media.com/kf/S4d86c5fbb1bd4318b23822df5871fab6F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06e11bb5b221475cbc6d426b1862d3efD.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda96b4f3aa4a41a5a604a78884301481q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfa7d72091f414d348934323bb8f83d0dZ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H275ca8369c5f4725a005ae0f0ba77fab6.jpg"],
  45:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ab88287245b4df99a643062f6b1c389k.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sb33e230986564dd1b507d06d264fa53fL.jpg"],
  46:["https://ae-pic-a1.aliexpress-media.com/kf/S08564e7340b64e6d9580e18e414b65d5w.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd03d77700a904dbd9b389b279cd870411.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4c087581b8af46dbb3fcdcdcfde627c88.jpg"],
  47:["https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg"],
  48:["https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg"],
  49:["https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg"],
  50:["https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png"],
  51:["https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  52:["https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg"],
  53:["https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg"],
  54:["https://ae-pic-a1.aliexpress-media.com/kf/S06e11bb5b221475cbc6d426b1862d3efD.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H275ca8369c5f4725a005ae0f0ba77fab6.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4d86c5fbb1bd4318b23822df5871fab6F.jpg"],
  55:["https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png"],
  56:["https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg"],
  57:["https://ae-pic-a1.aliexpress-media.com/kf/S8755f10a398e4f7fbe9fee81072f5ea7m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7868f50ed24444de8c5415df2cd47c69O.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S81d3e0fca0a643a8a47f147b7a1e335c1.jpg"],
  58:["https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Scc1821915d834c5a8508a2233614394al.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S36639e87e1f14e0da8c85dc22fe2b691X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7b71e6a7b1d0443a9e0404b0d9334e5d8.jpg"],
  59:["https://ae-pic-a1.aliexpress-media.com/kf/S7868f50ed24444de8c5415df2cd47c69O.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S81d3e0fca0a643a8a47f147b7a1e335c1.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8755f10a398e4f7fbe9fee81072f5ea7m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg"],
  60:["https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S81d3e0fca0a643a8a47f147b7a1e335c1.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8755f10a398e4f7fbe9fee81072f5ea7m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7868f50ed24444de8c5415df2cd47c69O.jpg"],
  61:["https://ae-pic-a1.aliexpress-media.com/kf/S81d3e0fca0a643a8a47f147b7a1e335c1.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8755f10a398e4f7fbe9fee81072f5ea7m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7868f50ed24444de8c5415df2cd47c69O.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg"],
  62:["https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg"],
  63:["https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg"],
  64:["https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg"],
  65:["https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  66:["https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg"],
  67:["https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg"],
  68:["https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg"],
  69:["https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7b71e6a7b1d0443a9e0404b0d9334e5d8.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S50aba8a871214d5292d7125cfff9c80aI.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0acdd5a2bcda479ea42262d5d4635edeH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc0f282b4666343eaa239773bd6e7b986U.jpg"],
  70:["https://ae-pic-a1.aliexpress-media.com/kf/S7b71e6a7b1d0443a9e0404b0d9334e5d8.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S50aba8a871214d5292d7125cfff9c80aI.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0acdd5a2bcda479ea42262d5d4635edeH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc0f282b4666343eaa239773bd6e7b986U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg"],
  71:["https://ae-pic-a1.aliexpress-media.com/kf/S50aba8a871214d5292d7125cfff9c80aI.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0acdd5a2bcda479ea42262d5d4635edeH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc0f282b4666343eaa239773bd6e7b986U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7b71e6a7b1d0443a9e0404b0d9334e5d8.jpg"],
  72:["https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2fe06a0925be42239ab7e328582c2313Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg"],
  73:["https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2fe06a0925be42239ab7e328582c2313Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg"],
  74:["https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg"],
  75:["https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  76:["https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg"],
  77:["https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg"],
  78:["https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sfa7d72091f414d348934323bb8f83d0dZ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg"],
  79:["https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg"],
  80:["https://ae-pic-a1.aliexpress-media.com/kf/Sda96b4f3aa4a41a5a604a78884301481q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06e11bb5b221475cbc6d426b1862d3efD.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfa7d72091f414d348934323bb8f83d0dZ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H275ca8369c5f4725a005ae0f0ba77fab6.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4d86c5fbb1bd4318b23822df5871fab6F.jpg"],
  81:["https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg"],
  82:["https://ae-pic-a1.aliexpress-media.com/kf/S2fe06a0925be42239ab7e328582c2313Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg"],
  83:["https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg"],
  84:["https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg"],
  85:["https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png"],
  86:["https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  87:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg"],
  88:["https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg"],
  89:["https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg"],
  90:["https://ae-pic-a1.aliexpress-media.com/kf/Se20c9e4543da4344b9b487ed68e7e299Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H4f4b066b021a4f1ca7c05661a563472aH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc5d2119787734d13893aafec491dfea4A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0435fa4b3151427d9b5fa4e33836ab7dw.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg"],
  91:["https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  92:["https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg"],
  93:["https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg"],
  94:["https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S9706a669f5654755b3d9f4c67964ded9t.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S60546330d9994bce86505c119bd0d9e0F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S41041992888745fb9d190f97ce110fd3X.jpg"],
  95:["https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg"],
  96:["https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg"],
  97:["https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg"],
  98:["https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg"],
  99:["https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg"],
  100:["https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg"],
  101:["https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg"],
  102:["https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  103:["https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg"],
  104:["https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg"],
  105:["https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2fe06a0925be42239ab7e328582c2313Z.jpg"],
  106:["https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  107:["https://ae-pic-a1.aliexpress-media.com/kf/S1ab88287245b4df99a643062f6b1c389k.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sb33e230986564dd1b507d06d264fa53fL.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg"],
  108:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg"],
  109:["https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg"],
  110:["https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png"],
  111:["https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg"],
  112:["https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg"],
  113:["https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg"],
  114:["https://ae-pic-a1.aliexpress-media.com/kf/S4d86c5fbb1bd4318b23822df5871fab6F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H275ca8369c5f4725a005ae0f0ba77fab6.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06e11bb5b221475cbc6d426b1862d3efD.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda96b4f3aa4a41a5a604a78884301481q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg"],
  115:["https://ae-pic-a1.aliexpress-media.com/kf/H275ca8369c5f4725a005ae0f0ba77fab6.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06e11bb5b221475cbc6d426b1862d3efD.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda96b4f3aa4a41a5a604a78884301481q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4d86c5fbb1bd4318b23822df5871fab6F.jpg"],
  116:["https://ae-pic-a1.aliexpress-media.com/kf/Sc56727c3978e478c9e94ffb3c7fed05et.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5a938211d4644dd58fdbd77e790be191N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S30fc1863fc8742529e1e7c300bce2655N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8de4008cc65e40898491c7fe8c2771d7i.jpg"],
  117:["https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg"],
  118:["https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg"],
  119:["https://ae-pic-a1.aliexpress-media.com/kf/S4d86c5fbb1bd4318b23822df5871fab6F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda96b4f3aa4a41a5a604a78884301481q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06e11bb5b221475cbc6d426b1862d3efD.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfa7d72091f414d348934323bb8f83d0dZ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H275ca8369c5f4725a005ae0f0ba77fab6.jpg"],
  120:["https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png"],
  121:["https://ae-pic-a1.aliexpress-media.com/kf/S978ab941191342328baaceca53bc789c8.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5cf9eb9469384fb4bf2d52ffbde2e482U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3f8cb4f3f5454df58ae525f6075b85710.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa27a9926705a470bac78e68420260d20G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1026bbc61f764043afcb6fe6923b8d00e.jpg"],
  122:["https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg"],
  123:["https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg"],
  124:["https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg"],
  125:["https://ae-pic-a1.aliexpress-media.com/kf/S7b71e6a7b1d0443a9e0404b0d9334e5d8.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S50aba8a871214d5292d7125cfff9c80aI.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0acdd5a2bcda479ea42262d5d4635edeH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc0f282b4666343eaa239773bd6e7b986U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg"],
  126:["https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  127:["https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  128:["https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg"],
  129:["https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S9706a669f5654755b3d9f4c67964ded9t.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S60546330d9994bce86505c119bd0d9e0F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S41041992888745fb9d190f97ce110fd3X.jpg"],
  130:["https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  131:["https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg"],
  132:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg"],
  133:["https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg"],
  134:["https://ae-pic-a1.aliexpress-media.com/kf/S30fc1863fc8742529e1e7c300bce2655N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8de4008cc65e40898491c7fe8c2771d7i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc56727c3978e478c9e94ffb3c7fed05et.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5a938211d4644dd58fdbd77e790be191N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg"],
  135:["https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg"],
  136:["https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  137:["https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg"],
  138:["https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg"],
  139:["https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg"],
  140:["https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg"],
  141:["https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg"],
  142:["https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg"],
  143:["https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg"],
  144:["https://ae-pic-a1.aliexpress-media.com/kf/S4d86c5fbb1bd4318b23822df5871fab6F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H275ca8369c5f4725a005ae0f0ba77fab6.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06e11bb5b221475cbc6d426b1862d3efD.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda96b4f3aa4a41a5a604a78884301481q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg"],
  145:["https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg"],
  146:["https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg"],
  147:["https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg"],
  148:["https://ae-pic-a1.aliexpress-media.com/kf/S51a0585f5173421da3f865eb212e4e59T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S325a0e0d21f04210b80e4c5087333d9ao.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7f2a22ad007147caaecfe153025a67394.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3be5c821638a4f41aee44f7f31e50a09I.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfc85a65c8cd34c099f8a7df82c348379Y.jpg"],
  149:["https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg"],
  150:["https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png"],
  151:["https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  152:["https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg"],
  153:["https://ae-pic-a1.aliexpress-media.com/kf/S51a0585f5173421da3f865eb212e4e59T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S325a0e0d21f04210b80e4c5087333d9ao.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7f2a22ad007147caaecfe153025a67394.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3be5c821638a4f41aee44f7f31e50a09I.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfc85a65c8cd34c099f8a7df82c348379Y.jpg"],
  154:["https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg"],
  155:["https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg"],
  156:["https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  157:["https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg"],
  158:["https://ae-pic-a1.aliexpress-media.com/kf/S10240706b30c429994c8290599d77837v.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S3be5c821638a4f41aee44f7f31e50a09I.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb7b562d2c71f44acafa142bb94bdcf71i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S38a263e53f974693b2b42b2146697de8X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7de1a7a1d37847d1a23052897f2a15c7M.jpg"],
  159:["https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg"],
  160:["https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf69cb09feb304eb8987b4e28cf8856572.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0d1993603ee94b9fa2042e7af2bd28e0b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4b05c61cef344e5eb816f8aeddf71cf8o.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa2a8ea1d98f4473e9adf30e3bf682d5d6.jpg"],
  161:["https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg"],
  162:["https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg"],
  163:["https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg"],
  164:["https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg"],
  165:["https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg"],
  166:["https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg"],
  167:["https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  168:["https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg"],
  169:["https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg"],
  170:["https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg"],
  171:["https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg"],
  172:["https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg"],
  173:["https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg"],
  174:["https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg"],
  175:["https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  176:["https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg"],
  177:["https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg"],
  178:["https://ae-pic-a1.aliexpress-media.com/kf/S59e3989e572048ad816f1ad29d728e7dJ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S93d86e986e694166bf43c1d3fb1b5640E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S198e2e56147c4b2986861535f6530dd5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S76d62df8e2d347be9bf83c3c73add8d1O.jpg"],
  179:["https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg"],
  180:["https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  181:["https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  182:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg"],
  183:["https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg"],
  184:["https://ae-pic-a1.aliexpress-media.com/kf/Sf8d62ed097f94bfa82ea28a349b8950ey.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4c087581b8af46dbb3fcdcdcfde627c88.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S08564e7340b64e6d9580e18e414b65d5w.jpg"],
  185:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ab88287245b4df99a643062f6b1c389k.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sb33e230986564dd1b507d06d264fa53fL.jpg"],
  186:["https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  187:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg"],
  188:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg"],
  189:["https://ae-pic-a1.aliexpress-media.com/kf/S7868f50ed24444de8c5415df2cd47c69O.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S81d3e0fca0a643a8a47f147b7a1e335c1.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8755f10a398e4f7fbe9fee81072f5ea7m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg"],
  190:["https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S81d3e0fca0a643a8a47f147b7a1e335c1.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8755f10a398e4f7fbe9fee81072f5ea7m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7868f50ed24444de8c5415df2cd47c69O.jpg"],
  191:["https://ae-pic-a1.aliexpress-media.com/kf/S81d3e0fca0a643a8a47f147b7a1e335c1.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8755f10a398e4f7fbe9fee81072f5ea7m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7868f50ed24444de8c5415df2cd47c69O.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg"],
  192:["https://ae-pic-a1.aliexpress-media.com/kf/S8755f10a398e4f7fbe9fee81072f5ea7m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7868f50ed24444de8c5415df2cd47c69O.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S81d3e0fca0a643a8a47f147b7a1e335c1.jpg"],
  193:["https://ae-pic-a1.aliexpress-media.com/kf/S41041992888745fb9d190f97ce110fd3X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S9706a669f5654755b3d9f4c67964ded9t.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S60546330d9994bce86505c119bd0d9e0F.jpg"],
  194:["https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg"],
  195:["https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg"],
  196:["https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg"],
  197:["https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg"],
  198:["https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg"],
  199:["https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg"],
  200:["https://ae-pic-a1.aliexpress-media.com/kf/S7b71e6a7b1d0443a9e0404b0d9334e5d8.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S50aba8a871214d5292d7125cfff9c80aI.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0acdd5a2bcda479ea42262d5d4635edeH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc0f282b4666343eaa239773bd6e7b986U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg"],
  201:["https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2fe06a0925be42239ab7e328582c2313Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg"],
  202:["https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg"],
  203:["https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg"],
  204:["https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png"],
  205:["https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  206:["https://ae-pic-a1.aliexpress-media.com/kf/S50aba8a871214d5292d7125cfff9c80aI.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0acdd5a2bcda479ea42262d5d4635edeH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc0f282b4666343eaa239773bd6e7b986U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7b71e6a7b1d0443a9e0404b0d9334e5d8.jpg"],
  207:["https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sfa7d72091f414d348934323bb8f83d0dZ.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg"],
  208:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg"],
  209:["https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg"],
  210:["https://ae-pic-a1.aliexpress-media.com/kf/H275ca8369c5f4725a005ae0f0ba77fab6.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06e11bb5b221475cbc6d426b1862d3efD.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda96b4f3aa4a41a5a604a78884301481q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4d86c5fbb1bd4318b23822df5871fab6F.jpg"],
  211:["https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg"],
  212:["https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg"],
  213:["https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg"],
  214:["https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg"],
  215:["https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg"],
  216:["https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  217:["https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg"],
  218:["https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg"],
  219:["https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7b71e6a7b1d0443a9e0404b0d9334e5d8.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S50aba8a871214d5292d7125cfff9c80aI.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0acdd5a2bcda479ea42262d5d4635edeH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc0f282b4666343eaa239773bd6e7b986U.jpg"],
  220:["https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S9706a669f5654755b3d9f4c67964ded9t.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S60546330d9994bce86505c119bd0d9e0F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S41041992888745fb9d190f97ce110fd3X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg"],
  221:["https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png"],
  222:["https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  223:["https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg"],
  224:["https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg"],
  225:["https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg"],
  226:["https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg"],
  227:["https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg"],
  228:["https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg"],
  229:["https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg"],
  230:["https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf69cb09feb304eb8987b4e28cf8856572.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0d1993603ee94b9fa2042e7af2bd28e0b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4b05c61cef344e5eb816f8aeddf71cf8o.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa2a8ea1d98f4473e9adf30e3bf682d5d6.jpg"],
  231:["https://ae-pic-a1.aliexpress-media.com/kf/S9706a669f5654755b3d9f4c67964ded9t.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S60546330d9994bce86505c119bd0d9e0F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S41041992888745fb9d190f97ce110fd3X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg"],
  232:["https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg"],
  233:["https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg"],
  234:["https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg"],
  235:["https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S9706a669f5654755b3d9f4c67964ded9t.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S60546330d9994bce86505c119bd0d9e0F.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S41041992888745fb9d190f97ce110fd3X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg"],
  236:["https://ae-pic-a1.aliexpress-media.com/kf/S81d3e0fca0a643a8a47f147b7a1e335c1.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8755f10a398e4f7fbe9fee81072f5ea7m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2715d9d70dae40ce88793b041f5f2127Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7868f50ed24444de8c5415df2cd47c69O.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfed1ab39c1bd41e6a04cbc0475a2450ah.jpg"],
  237:["https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg"],
  238:["https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg"],
  239:["https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg"],
  240:["https://ae-pic-a1.aliexpress-media.com/kf/Sf6d10778005f487eb1213699843263f5Q.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2fe06a0925be42239ab7e328582c2313Z.jpg"],
  241:["https://ae-pic-a1.aliexpress-media.com/kf/Sc275fe47357e43649748991c542b26deV.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2fe06a0925be42239ab7e328582c2313Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S00c1962b13c0463084ef48d31e2bcf5dc.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5c1711a27c754620bc97c5f04ee569faq.jpg"],
  242:["https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  243:["https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg"],
  244:["https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg"],
  245:["https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg"],
  246:["https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg"],
  247:["https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg"],
  248:["https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg"],
  249:["https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg"],
  250:["https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg"],
  251:["https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg"],
  252:["https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  253:["https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S06739e2b088e4502a48f1025ccf30725e.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Scb3b7cb4da3743ebb2180f237d27f817T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg"],
  254:["https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg"],
  255:["https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg"],
  256:["https://ae-pic-a1.aliexpress-media.com/kf/Sa657b5ef78d44a86acec2fef3826ea7aC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sa37d57af4d8c4b79b006ecaa700cfc5ed.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se3150ed911c0440bbdd6da1652fe86a0N.png", "https://ae-pic-a1.aliexpress-media.com/kf/S530bffaf89154894b3103b235efe09fca.png", "https://ae-pic-a1.aliexpress-media.com/kf/Sab21fca207274052ab7610eb96b9ee1aM.jpg"],
  257:["https://ae-pic-a1.aliexpress-media.com/kf/S999f089b55b44c62a2a9bbd79ce3df4ek.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1ba4419f65704f91934ee51512a59dc0U.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se489ecaaa3a4448380668528d9f58c14E.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5b951bdee66d44d4922b9223f93e46d8Z.jpg"],
  258:["https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg"],
  259:["https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S7b71e6a7b1d0443a9e0404b0d9334e5d8.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S50aba8a871214d5292d7125cfff9c80aI.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0acdd5a2bcda479ea42262d5d4635edeH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc0f282b4666343eaa239773bd6e7b986U.jpg"],
  260:["https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg"],
  261:["https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg"],
  262:["https://ae-pic-a1.aliexpress-media.com/kf/S5a938211d4644dd58fdbd77e790be191N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S30fc1863fc8742529e1e7c300bce2655N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8de4008cc65e40898491c7fe8c2771d7i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc56727c3978e478c9e94ffb3c7fed05et.jpg"],
  263:["https://ae-pic-a1.aliexpress-media.com/kf/S41041992888745fb9d190f97ce110fd3X.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se96d5b6bc97a41e9b83e6517c8295c944.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8acdec56f33544288ac351f0e18c520bH.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S9706a669f5654755b3d9f4c67964ded9t.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S60546330d9994bce86505c119bd0d9e0F.jpg"],
  264:["https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg"],
  265:["https://ae-pic-a1.aliexpress-media.com/kf/S996a64a1f7ae4d9f8bb588a59ee93c85W.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sfec5cb440cbf43c2a1f23d0aed8f176cR.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0ea698c18e0841198e21d5ab773fa4edv.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb5c62983ce1b4b0eb10fb19ed0c0eabaN.jpg"],
  266:["https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  267:["https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg"],
  268:["https://ae-pic-a1.aliexpress-media.com/kf/S1f427c1780ed43fc98a93a04a5d7e30dd.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sab1ddba0921f48038adac7be2164a5fdF.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S779204711ef247648229d200dccb9085m.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se1d9208bf9ac4906921d890c14d0e4dea.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S6599d428d91a4f0d8bf2cb07f925101eC.jpg"],
  269:["https://ae-pic-a1.aliexpress-media.com/kf/S2b545a1fa67f46f5be26d7237b0e9efe3.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S109aa52b0f1248e39c062495f9a1b40cn.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sd86496ffb8ea4d1da31379f24094666fP.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb574059c63f049eba62b58d7e60b8797G.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S1efc5a191b0d4927ad4f5968b150dcb6D.jpg"],
  270:["https://ae-pic-a1.aliexpress-media.com/kf/Se847d2fae6374aeeb35acc85ea649a40K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sdf9344579011453abb6f30311bde0730K.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sda70a984eb21461a8993a7eddc7dfa80T.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sb2585bfd22d340bcb153218dd77827a9A.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Se9c3448a91d14361a1666b584718c385B.jpg"],
  271:["https://ae-pic-a1.aliexpress-media.com/kf/Sc44d762ea7194d36952314b8eedd47d5N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S0546bd4c579249339832d2cb33afd669j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc3228a8b6c6748d7a5c9a39cf752c6921.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S4e3a149a364c4a40852344b2e7ae86062.jpeg", "https://ae-pic-a1.aliexpress-media.com/kf/S268f8b40e2494805979a9597f9f927f6b.jpg"],
  272:["https://ae-pic-a1.aliexpress-media.com/kf/H8de9dcde37b14d67806da3231de73bdeo.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S42f400c6de8343e2a30153d46235d2c3V.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S61739dd40352461a9ee43b77797abc91j.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H85c80a9d794a4c7a8b0168db7d60b9edf.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/H856145c4f35440cc9fce476f58ea046dr.jpg"],
  273:["https://ae-pic-a1.aliexpress-media.com/kf/Sc556d2badfa9464e8600c6d716b79fd1H.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S30fc1863fc8742529e1e7c300bce2655N.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S8de4008cc65e40898491c7fe8c2771d7i.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/Sc56727c3978e478c9e94ffb3c7fed05et.jpg", "https://ae-pic-a1.aliexpress-media.com/kf/S5a938211d4644dd58fdbd77e790be191N.jpg"],
};

const NICHES_ALL=["הכל","בריאות","יופי","בית","כושר","טכנולוגיה","חיות","ילדים","נסיעות","גינה","אופנה","רכב","גאדג'טים"];
const RISK_CLR={0:"#22c55e",5:"#e09830",8:"#ff7030",10:"#f05060",12:"#f05060",15:"#c00000"};
const NICHE_CLR={"בריאות":"#22c55e","יופי":"#ec4899","בית":"#4466ff","כושר":"#ff7030","טכנולוגיה":"#8855ff","חיות":"#e09830","ילדים":"#30c0f0","נסיעות":"#20c0a0","גינה":"#7aad3a","אופנה":"#d040e0","רכב":"#ff4444","גאדג'טים":"#ffaa00"};

function demandBar(val,color){
  return(
    <div style={{display:"flex",alignItems:"center",gap:6}}>
      <div style={{flex:1,height:5,background:"#1e1e38",borderRadius:3,overflow:"hidden"}}>
        <div style={{height:"100%",width:val+"%",background:color,borderRadius:3,transition:"width .4s"}}/>
      </div>
      <span style={{fontSize:10,color,fontWeight:600,minWidth:26}}>{val}%</span>
    </div>
  );
}

function ProductModal({p,onClose}){
  const [img,setImg]=useState(0);
  const imgs=PRODUCT_IMAGES[p.id]||Array.from({length:5},(_,i)=>`https://picsum.photos/seed/${p.id*7+i}/600/500`);
  return(
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div onClick={e=>e.stopPropagation()} className="sc" style={{background:C.side,border:"1px solid #1e1e38",borderRadius:18,width:"100%",maxWidth:860,maxHeight:"90vh",overflowY:"auto",display:"flex",flexDirection:"column",gap:0}}>
        {/* Header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:"1px solid #1e1e38"}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{background:NICHE_CLR[p.niche]+"22",border:"1px solid "+NICHE_CLR[p.niche]+"50",color:NICHE_CLR[p.niche],borderRadius:20,padding:"2px 10px",fontSize:11}}>{p.niche}</div>
            {p.risk>0&&<div style={{background:"#f0506018",border:"1px solid #f0506040",color:"#f05060",borderRadius:20,padding:"2px 10px",fontSize:11,display:"flex",alignItems:"center",gap:4}}><AlertTriangle size={9}/>סיכון {p.risk}%</div>}
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:C.sub}}><X size={18}/></button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0}}>
          {/* Images */}
          <div style={{padding:"16px",borderLeft:"1px solid #1e1e38"}}>
            <div style={{borderRadius:12,overflow:"hidden",marginBottom:8,background:C.card,height:260,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={imgs[img]} alt={p.name} loading="lazy" crossOrigin="anonymous" style={{width:"100%",height:"100%",objectFit:"cover",transition:"opacity .3s"}}/>
            </div>
            <div style={{display:"flex",gap:6}}>
              {imgs.map((src,i)=>(
                <button key={i} onClick={()=>setImg(i)} style={{flex:1,background:img===i?"#1e1e38":"transparent",border:"1px solid "+(img===i?"#e09830":"#1e1e38"),borderRadius:8,padding:2,cursor:"pointer",overflow:"hidden",height:50}}>
                  <img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:6}}/>
                </button>
              ))}
            </div>
          </div>
          {/* Details */}
          <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:12}}>
            <h2 style={{fontSize:17,fontWeight:700,color:C.txt,margin:0,lineHeight:1.4}}>{p.name}</h2>
            {/* Price */}
            <div style={{background:C.card,border:"1px solid #1e1e38",borderRadius:12,padding:"12px 14px"}}>
              <div style={{fontSize:11,color:C.sub,marginBottom:4}}>טווח מחירים</div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                  <div style={{fontSize:11,color:C.sub}}>קנייה</div>
                  <div style={{fontSize:15,fontWeight:700,color:"#e09830"}}>${p.pm} - ${p.px}</div>
                </div>
                <div style={{textAlign:"center",color:"#1e1e38",fontSize:20}}>→</div>
                <div style={{textAlign:"left"}}>
                  <div style={{fontSize:11,color:C.sub}}>מכירה מומלצת</div>
                  <div style={{fontSize:15,fontWeight:700,color:"#22c55e"}}>${p.ps}</div>
                </div>
                <div style={{textAlign:"left"}}>
                  <div style={{fontSize:11,color:C.sub}}>מרג'ין</div>
                  <div style={{fontSize:15,fontWeight:700,color:"#4466ff"}}>×{(p.ps/p.px).toFixed(1)}</div>
                </div>
              </div>
            </div>
            {/* Demand */}
            <div style={{background:C.card,border:"1px solid #1e1e38",borderRadius:12,padding:"12px 14px"}}>
              <div style={{fontSize:11,color:C.sub,marginBottom:8}}>רמת ביקוש</div>
              <div style={{marginBottom:6}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                  <span style={{fontSize:11,color:C.sub,display:"flex",alignItems:"center",gap:4}}><span>🇮🇱</span>ישראל</span>
                </div>
                {demandBar(p.di,"#4466ff")}
              </div>
              <div>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                  <span style={{fontSize:11,color:C.sub,display:"flex",alignItems:"center",gap:4}}><Globe size={10}/>עולמי</span>
                </div>
                {demandBar(p.dg,"#22c55e")}
              </div>
            </div>
            {/* Meta */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
              <div style={{background:C.card,border:"1px solid #1e1e38",borderRadius:10,padding:"8px 10px"}}>
                <div style={{fontSize:10,color:C.sub}}>משקל</div>
                <div style={{fontSize:13,fontWeight:600,color:C.txt}}>{p.w}</div>
              </div>
              {p.risk>0&&(
                <div style={{background:"#f0506012",border:"1px solid #f0506030",borderRadius:10,padding:"8px 10px"}}>
                  <div style={{fontSize:10,color:"#f05060"}}>סיכון</div>
                  <div style={{fontSize:13,fontWeight:600,color:"#f05060"}}>{p.st}</div>
                </div>
              )}
              {p.risk===0&&(
                <div style={{background:"#22c55e12",border:"1px solid #22c55e30",borderRadius:10,padding:"8px 10px"}}>
                  <div style={{fontSize:10,color:"#22c55e"}}>סיכון</div>
                  <div style={{fontSize:13,fontWeight:600,color:"#22c55e"}}>אין סיכון</div>
                </div>
              )}
            </div>
            {/* Tags */}
            <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
              {p.tags.map(t=>(
                <span key={t} style={{background:"#1e1e38",color:C.sub,borderRadius:20,padding:"2px 9px",fontSize:11}}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Description */}
        <div style={{padding:"16px 20px",borderTop:"1px solid #1e1e38"}}>
          <div style={{fontSize:13,fontWeight:600,color:"#e09830",marginBottom:6}}>תיאור מוצר</div>
          <p style={{fontSize:13,color:"#c0c0e0",lineHeight:1.7,margin:0}}>{p.desc}</p>
        </div>
      </div>
    </div>
  );
}

function ProductsP(){
  const [q,setQ]=useState("");
  const [niche,setNiche]=useState("הכל");
  const [sort,setSort]=useState("demand");
  const [maxRisk,setMaxRisk]=useState(20);
  const [modal,setModal]=useState(null);
  const [page,setPage]=useState(1);
  const PER=24;

  const filtered=PRODUCTS.filter(p=>{
    if(niche!=="הכל"&&p.niche!==niche)return false;
    if(p.risk>maxRisk)return false;
    if(q.trim()){
      const lq=q.toLowerCase();
      return p.name.toLowerCase().includes(lq)||p.niche.toLowerCase().includes(lq)||p.tags.some(t=>t.toLowerCase().includes(lq));
    }
    return true;
  }).sort((a,b)=>{
    if(sort==="demand")return b.di-a.di;
    if(sort==="price_asc")return a.pm-b.pm;
    if(sort==="price_desc")return b.pm-a.pm;
    if(sort==="margin")return (b.ps/b.px)-(a.ps/a.px);
    return 0;
  });

  const pages=Math.ceil(filtered.length/PER);
  const shown=filtered.slice((page-1)*PER,page*PER);

  return(
    <div>
      {/* Header */}
      <div className="fu" style={{marginBottom:16,display:"flex",alignItems:"flex-start",justifyContent:"space-between"}}>
        <div>
          <h2 style={{fontSize:19,fontWeight:700,color:C.txt,margin:0}}>מאגר מוצרים</h2>
          <p style={{color:C.sub,fontSize:13,marginTop:3}}>{filtered.length} מוצרים · {PRODUCTS.length} במאגר · עודכן לפי ביקוש</p>
        </div>
      </div>

      {/* Search bar */}
      <div className="fu" style={{background:C.card,border:"1px solid "+C.brd,borderRadius:14,padding:"12px 14px",marginBottom:12,display:"flex",alignItems:"center",gap:10}}>
        <Search size={16} color={C.muted}/>
        <input value={q} onChange={e=>{setQ(e.target.value);setPage(1);}} placeholder="חפש לפי שם, נישה, תג..." style={{flex:1,background:"none",border:"none",fontSize:14,color:C.txt,direction:"rtl",fontFamily:"inherit"}}/>
        {q&&<button onClick={()=>{setQ("");setPage(1);}} style={{background:"none",border:"none",cursor:"pointer",color:C.muted}}><X size={14}/></button>}
      </div>

      {/* Filters */}
      <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
        <div style={{display:"flex",gap:5,flexWrap:"wrap",flex:1}}>
          {NICHES_ALL.map(n=>(
            <button key={n} onClick={()=>{setNiche(n);setPage(1);}}
              style={{background:niche===n?(NICHE_CLR[n]||C.gold)+"22":C.card,border:"1px solid "+(niche===n?(NICHE_CLR[n]||C.gold)+"60":C.brd),color:niche===n?(NICHE_CLR[n]||C.gold):C.sub,borderRadius:20,padding:"4px 12px",fontSize:12,cursor:"pointer",transition:"all .15s",fontWeight:niche===n?600:400}}>
              {n}
            </button>
          ))}
        </div>
        <select value={sort} onChange={e=>setSort(e.target.value)} style={{background:C.card,border:"1px solid "+C.brd,borderRadius:8,padding:"5px 10px",fontSize:12,color:C.txt,direction:"rtl"}}>
          <option value="demand">ביקוש ↓</option>
          <option value="margin">מרג'ין ↓</option>
          <option value="price_asc">מחיר ↑</option>
          <option value="price_desc">מחיר ↓</option>
        </select>
        <div style={{display:"flex",alignItems:"center",gap:6,background:C.card,border:"1px solid "+C.brd,borderRadius:8,padding:"5px 10px"}}>
          <AlertTriangle size={11} color={maxRisk>0?"#f05060":C.muted}/>
          <span style={{fontSize:11,color:C.sub}}>סיכון מקס:</span>
          <select value={maxRisk} onChange={e=>setMaxRisk(+e.target.value)} style={{background:"none",border:"none",fontSize:11,color:C.txt,cursor:"pointer"}}>
            <option value={0}>0% (ללא סיכון)</option>
            <option value={5}>עד 5%</option>
            <option value={10}>עד 10%</option>
            <option value={20}>הכל</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10}}>
        {shown.map((p,i)=>{
          const mainImg=`https://picsum.photos/seed/${p.id*7}/400/300`;
          const margin=(p.ps/p.px).toFixed(1);
          const nc=NICHE_CLR[p.niche]||C.gold;
          return(
            <div key={p.id} className={`fu d${(i%4)+1}`}
              onClick={()=>setModal(p)}
              style={{background:C.card,border:"1px solid "+C.brd,borderRadius:14,overflow:"hidden",cursor:"pointer",transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.borderColor=nc+"60";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.borderColor=C.brd;}}>
              {/* Image */}
              <div style={{position:"relative",height:150,background:C.card,overflow:"hidden"}}>
                <img src={mainImg} alt={p.name} loading="lazy"
                  style={{width:"100%",height:"100%",objectFit:"cover",transition:"opacity .3s"}}
                  onError={e=>{
                    const nc=NICHE_CLR[p.niche]||"#4466ff";
                    e.target.style.display="none";
                    e.target.parentNode.style.background=nc+"18";
                    e.target.parentNode.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:6px"><span style="font-size:28px">📦</span><span style="font-size:11px;color:${nc};font-family:sans-serif">${p.niche}</span></div>`;
                  }}/>
                <div style={{position:"absolute",top:7,right:7}}>
                  <span style={{background:nc+"22",border:"1px solid "+nc+"50",color:nc,borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:600}}>{p.niche}</span>
                </div>
                {p.risk>0&&(
                  <div style={{position:"absolute",top:7,left:7}}>
                    <span style={{background:"#f0506022",border:"1px solid #f0506060",color:"#f05060",borderRadius:20,padding:"2px 7px",fontSize:9,display:"flex",alignItems:"center",gap:2}}><AlertTriangle size={8}/>סיכון {p.risk}%</span>
                  </div>
                )}
                <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent,rgba(8,8,15,.8)",padding:"12px 10px 6px",display:"flex",gap:3}}>
                  {[1,2,3,4].map(i=><div key={i} style={{flex:1,height:2,background:"rgba(255,255,255,.3)",borderRadius:2}}/>)}
                  <div style={{flex:1,height:2,background:"rgba(255,255,255,.15)",borderRadius:2}}/>
                </div>
              </div>
              {/* Info */}
              <div style={{padding:"10px 12px"}}>
                <p style={{fontSize:12,fontWeight:600,color:C.txt,margin:"0 0 7px",lineHeight:1.4,height:34,overflow:"hidden"}}>{p.name}</p>
                {/* Price range */}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <span style={{fontSize:11,color:C.muted}}>קנייה:</span>
                  <span style={{fontSize:12,fontWeight:700,color:C.gold}}>${p.pm}–${p.px}</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}>
                  <span style={{fontSize:11,color:C.muted}}>מכירה:</span>
                  <span style={{fontSize:12,fontWeight:700,color:"#22c55e"}}>${p.ps} <span style={{fontSize:10,color:"#4466ff"}}>×{margin}</span></span>
                </div>
                {/* Demand bars */}
                <div style={{display:"flex",flexDirection:"column",gap:3}}>
                  <div style={{display:"flex",alignItems:"center",gap:5}}>
                    <span style={{fontSize:9,color:C.muted,width:16}}>🇮🇱</span>
                    {demandBar(p.di,"#4466ff")}
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:5}}>
                    <Globe size={9} color={C.muted}/>
                    {demandBar(p.dg,"#22c55e")}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length===0&&(
        <div style={{textAlign:"center",padding:"50px",color:C.muted}}>
          <Package size={36} color={C.brd} style={{margin:"0 auto 10px",display:"block"}}/>
          <div style={{fontSize:14}}>לא נמצאו מוצרים</div>
        </div>
      )}

      {/* Pagination */}
      {pages>1&&(
        <div style={{display:"flex",justifyContent:"center",gap:6,marginTop:16}}>
          {Array.from({length:pages},(_,i)=>(
            <button key={i} onClick={()=>{setPage(i+1);window.scrollTo(0,0);}}
              style={{width:32,height:32,borderRadius:8,background:page===i+1?C.gold:C.card,border:"1px solid "+(page===i+1?C.gold:C.brd),color:page===i+1?"#000":C.sub,cursor:"pointer",fontSize:13,fontWeight:page===i+1?700:400}}>
              {i+1}
            </button>
          ))}
        </div>
      )}

      {modal&&<ProductModal p={modal} onClose={()=>setModal(null)}/>}
    </div>
  );
}

/* ── LOGIN ──────────────────────────────────────────────── */
/* ── עדכונים - ערוך כאן להוסיף עדכונים חדשים ─────────── */
const NOTIFICATIONS = [
  // דוגמה - מחק ועדכן לפי הצורך:
  // { id:1, title:"וובינר הבא 🔥", body:"יום שישי 20:00 - נושא: מציאת מוצר מנצח. הירשמו בלינק בקבוצה.", date:"27/04/2025", unread:true },
];
/* ── AUTH DATA ──────────────────────────────────────────── */
const STUDENTS={
  "333232569":{name:"שילת מור",    cohort:"M1"},
  "033491481":{name:"יניב אדרי",   cohort:"M1"},
  "040539025":{name:"ר.א.מיכלוביץ",cohort:"M1"},
  "330622382":{name:"רום ארמון",   cohort:"M1"},
  "214854663":{name:"נהוראי לייזר",cohort:"M1"},
  "216442145":{name:"רון אברהמי",  cohort:"M1"},
  "216985697":{name:"נועם ברזובסקי",cohort:"M1"},
  "216350140":{name:"נדב בן עזרא", cohort:"M1"},
  "213121882":{name:"אלירן מנה",   cohort:"M2"},
  "027494533":{name:"מיכאל פסו",   cohort:"M2"},
};
const COHORT_CODES={"M1":"M1","M2":"M2"};
const COHORTS={
  M1:{label:"מחזור 1",start:"01/02/26",end:"01/04/26",active:false},
  M2:{label:"מחזור 2",start:"01/05/26",end:"01/07/26",active:true},
};

function LoginScreen({onLogin}){
  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [code,setCode]=useState("");
  const [err,setErr]=useState("");

  const go=()=>{
    const cleanId=id.trim();
    const cleanName=name.trim();
    const cleanCode=code.trim().toUpperCase();
    if(!cleanId||!cleanName||!cleanCode){setErr("נא למלא את כל השדות");return;}
    const s=STUDENTS[cleanId];
    if(!s){setErr("פרטים שגויים. פנה לקאיאל.");return;}
    const enteredName=cleanName.toLowerCase();
    const storedName=s.name.toLowerCase();
    const nameMatch=storedName.includes(enteredName.split(" ")[0])||enteredName.includes(storedName.split(" ")[0]);
    if(!nameMatch){setErr("פרטים שגויים. פנה לקאיאל.");return;}
    if(cleanCode!==s.cohort){setErr("פרטים שגויים. פנה לקאיאל.");return;}
    onLogin({name:s.name,cohort:s.cohort,id:cleanId});
  };

  const inp={width:"100%",background:C.card,border:`1px solid ${C.brd}`,borderRadius:12,padding:"12px 16px",fontSize:15,color:C.txt,direction:"rtl",fontFamily:"inherit",textAlign:"right",outline:"none"};

  return(
    <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:18,fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
      <style>{css}</style>
      <img src={LOGO_SRC} alt="logo" style={{width:110,height:110,objectFit:"contain"}}/>
      <div style={{textAlign:"center"}}>
        <div style={{fontSize:22,fontWeight:700,color:C.txt,marginBottom:5}}>ברוך הבא לאקדמיה</div>
        <div style={{fontSize:13,color:C.sub}}>הכנס פרטים לכניסה</div>
      </div>
      <div style={{width:300,display:"flex",flexDirection:"column",gap:10}}>
        <input autoFocus value={id} onChange={e=>{setId(e.target.value);setErr("");}}
          onKeyDown={e=>e.key==="Enter"&&document.getElementById("nameField").focus()}
          placeholder="מספר ת.ז" maxLength={9} style={inp}/>
        <input id="nameField" value={name} onChange={e=>{setName(e.target.value);setErr("");}}
          onKeyDown={e=>e.key==="Enter"&&document.getElementById("codeField").focus()}
          placeholder="שם מלא" style={inp}/>
        <input id="codeField" value={code} onChange={e=>{setCode(e.target.value.toUpperCase());setErr("");}}
          onKeyDown={e=>e.key==="Enter"&&go()}
          placeholder="קוד זיהוי" style={inp}/>
        {err&&<div style={{fontSize:12,color:C.red,textAlign:"center"}}>{err}</div>}
        <button onClick={go}
          style={{background:C.gold,border:"none",borderRadius:12,padding:"13px",fontSize:15,fontWeight:700,color:"#000",cursor:"pointer",marginTop:2,transition:"opacity .2s"}}
          onMouseEnter={e=>e.currentTarget.style.opacity=".88"}
          onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
          כניסה לאקדמיה
        </button>
      </div>
      <div style={{fontSize:11,color:C.muted}}>Academy · Kaiel Kayam</div>
    </div>
  );
}

/* ── PROFILE ────────────────────────────────────────────── */
function ProfileP({userName,cohort,watched,done,setSection,onLogout}){
  const [profile,setProfile]=useState(null);
  const [communityCount,setCommunityCount]=useState(0);
  const [editing,setEditing]=useState(false);
  const [displayName,setDisplayName]=useState(userName||"");
  const [saving,setSaving]=useState(false);
  const [loaded,setLoaded]=useState(false);

  /* Load profile data from storage */
  useEffect(()=>{
    const init=async()=>{
      try{
        /* Load or create profile record */
        const key="profile_"+userName;
        let prof=null;
        try{
          const r=await window.storage.get(key,false);
          if(r&&r.value) prof=JSON.parse(r.value);
        }catch{}
        if(!prof){
          prof={joinDate:new Date().toLocaleDateString("he-IL"),displayName:userName,aiMessages:0};
          await window.storage.set(key,JSON.stringify(prof),false);
        }
        setProfile(prof);
        setDisplayName(prof.displayName||userName);

        /* Count community messages by this user */
        try{
          const cr=await window.storage.get("community-v1",true);
          if(cr&&cr.value){
            const data=JSON.parse(cr.value);
            let count=0;
            Object.values(data).forEach(arr=>{
              if(Array.isArray(arr)) count+=arr.filter(m=>m.author===userName).length;
            });
            setCommunityCount(count);
          }
        }catch{}
      }catch{}
      setLoaded(true);
    };
    init();
  },[userName]);

  const saveProfile=async()=>{
    setSaving(true);
    try{
      const key="profile_"+userName;
      const updated={...profile,displayName:displayName.trim()||userName};
      await window.storage.set(key,JSON.stringify(updated),false);
      setProfile(updated);
      setEditing(false);
    }catch{}
    setSaving(false);
  };

  /* ── METRICS ── */
  const totalVids=VIDS.length;   /* 12 */
  const totalGuides=GUIDES.length; /* 12 */
  const watchedCount=watched.size;
  const doneCount=done.size;
  const videoRatio=watchedCount/totalVids;
  const guideRatio=doneCount/totalGuides;
  const communityRatio=Math.min(communityCount/10,1);

  /* Weighted activity score (0-100) */
  const score=Math.round(
    videoRatio*40 +
    guideRatio*35 +
    communityRatio*25
  );

  const getLevel=()=>{
    if(score>=80) return {label:"מתקדם",color:C.gold};
    if(score>=50) return {label:"בתהליך",color:C.blue};
    if(score>=20) return {label:"מתחיל",color:C.green};
    return {label:"חדש",color:C.muted};
  };
  const lvl=getLevel();

  /* ── RECOMMENDATIONS ENGINE ── */
  const getRecs=()=>{
    const recs=[];
    /* Video recommendations */
    if(videoRatio===0){
      recs.push({p:3,Icon:Video,color:C.red,title:"התחל מהסרטונים",body:`טרם צפית בסרטון אחד. ה-8 סרטונים הראשונים הם הבסיס לכל השאר.`,action:"videos",cta:"לסרטונים"});
    } else if(videoRatio<0.4){
      recs.push({p:2,Icon:Video,color:C.gold,title:"המשך לצפות",body:`צפית ב-${watchedCount} מתוך ${totalVids} סרטונים. לפחות ${Math.ceil(totalVids*0.5)-watchedCount} סרטונים נוספים לפני שעוברים לקמפיינים.`,action:"videos",cta:"לסרטונים"});
    } else if(videoRatio<0.8){
      recs.push({p:1,Icon:Video,color:C.blue,title:"כמעט סיימת את הסרטונים",body:`נותרו לך ${totalVids-watchedCount} סרטונים - סיים אותם לפני שמסקלים.`,action:"videos",cta:"לסרטונים"});
    }
    /* Guide recommendations */
    if(guideRatio===0){
      recs.push({p:3,Icon:BookOpen,color:C.red,title:"פתח את המדריכים",body:`לא השלמת אף מדריך. המדריכים הם צ'קליסטים פרקטיים שאפשר לעקוב לפיהם שלב אחרי שלב.`,action:"guides",cta:"למדריכים"});
    } else if(guideRatio<0.5){
      recs.push({p:2,Icon:BookOpen,color:C.gold,title:"השלם עוד מדריכים",body:`השלמת ${doneCount}/${totalGuides} מדריכים - עוד ${Math.ceil(totalGuides*0.5)-doneCount} ויש לך יותר ממחצית הכלים ביד.`,action:"guides",cta:"למדריכים"});
    }
    /* Community */
    if(communityCount===0){
      recs.push({p:2,Icon:Users,color:C.purp,title:"היכנס לקהילה",body:`טרם פרסמת הודעה בקהילה. שיתוף שאלה אחת בערוץ #שאלות מחזיר בממוצע 3 תשובות מועילות.`,action:"community",cta:"לקהילה"});
    } else if(communityCount<5){
      recs.push({p:1,Icon:Users,color:C.blue,title:"הגבר פעילות בקהילה",body:`פרסמת ${communityCount} הודעות. חברים פעילים בקהילה מתקדמים מהר יותר בגלל פידבק מיידי.`,action:"community",cta:"לקהילה"});
    }
    /* High performer */
    if(score>=75&&videoRatio>=0.6&&guideRatio>=0.5){
      recs.push({p:1,Icon:TrendingUp,color:C.green,title:"מוכן לשלב הבא",body:`ניצול גבוה של הפלטפורמה. הגיע הזמן להתמקד בסקייל קמפיינים ולבדוק מוצרים נוספים מהבנק.`,action:"products",cta:"למוצרים"});
    }
    /* If nothing urgent, suggest AI */
    if(recs.length<2){
      recs.push({p:1,Icon:Sparkles,color:C.gold,title:"נצל את AI FOR YOU",body:`ה-AI האישי שלך מותאם לדרופשיפינג - שאל אותו על קמפיינים, מוצרים, וניתוח מדדים.`,action:"ai4you",cta:"ל-AI FOR YOU"});
    }
    return recs.sort((a,b)=>b.p-a.p);
  };
  const recs=loaded?getRecs():[];

  const StatCard=({Icon:Ic,label,value,max,color,sub})=>{
    const pct=Math.round((value/max)*100);
    return(
      <div style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:14,padding:"16px 18px",flex:1,minWidth:140}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
          <div style={{width:32,height:32,borderRadius:8,background:color+"18",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Ic size={15} color={color}/>
          </div>
          <span style={{fontSize:12,color:C.sub,fontWeight:500}}>{label}</span>
        </div>
        <div style={{fontSize:26,fontWeight:800,color:C.txt,marginBottom:4}}>{value}<span style={{fontSize:13,color:C.muted,fontWeight:400}}>/{max}</span></div>
        <div style={{height:4,background:C.card2,borderRadius:4,overflow:"hidden",marginBottom:4}}>
          <div style={{height:"100%",width:`${pct}%`,background:color,borderRadius:4,transition:"width 1s ease"}}/>
        </div>
        <div style={{fontSize:11,color:C.muted}}>{sub||`${pct}% הושלם`}</div>
      </div>
    );
  };

  if(!loaded) return(
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:300,color:C.muted,fontSize:14}}>טוען פרופיל...</div>
  );

  return(
    <div className="fu" style={{maxWidth:800,margin:"0 auto",padding:"4px 0 40px"}}>

      {/* ── HEADER CARD ── */}
      <div style={{background:`linear-gradient(135deg,${C.card},${C.card2})`,border:`1px solid ${C.brd}`,borderRadius:18,padding:"28px 28px 24px",marginBottom:20,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${C.gold},${C.blue},${C.purp})`}}/>
        <div style={{display:"flex",alignItems:"flex-start",gap:20}}>
          {/* Avatar */}
          <div style={{width:70,height:70,borderRadius:"50%",background:`linear-gradient(135deg,${C.gold},${C.blue})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontWeight:800,color:"#000",flexShrink:0,border:`3px solid ${C.gold}40`}}>
            {(profile?.displayName||userName||"?")[0].toUpperCase()}
          </div>
          {/* Info */}
          <div style={{flex:1}}>
            {editing?(
              <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}>
                <input value={displayName} onChange={e=>setDisplayName(e.target.value)}
                  style={{background:C.card2,border:`1px solid ${C.gold}`,borderRadius:8,padding:"6px 12px",fontSize:16,color:C.txt,fontFamily:"inherit",fontWeight:700,direction:"rtl"}}/>
                <button onClick={saveProfile} disabled={saving}
                  style={{background:C.gold,border:"none",borderRadius:8,padding:"6px 14px",cursor:"pointer",fontSize:13,fontWeight:600,color:"#000"}}>
                  {saving?"שומר...":"שמור"}
                </button>
                <button onClick={()=>{setEditing(false);setDisplayName(profile?.displayName||userName);}}
                  style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:8,padding:"6px 12px",cursor:"pointer",fontSize:13,color:C.sub}}>ביטול</button>
              </div>
            ):(
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                <h2 style={{fontSize:22,fontWeight:800,color:C.txt,margin:0}}>{profile?.displayName||userName}</h2>
                <button onClick={()=>setEditing(true)}
                  style={{background:"none",border:"none",cursor:"pointer",color:C.muted,padding:2,display:"flex"}}
                  title="ערוך שם">
                  <Edit2 size={13}/>
                </button>
              </div>
            )}
            <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
              <span style={{background:lvl.color+"20",border:`1px solid ${lvl.color}50`,color:lvl.color,borderRadius:20,padding:"2px 10px",fontSize:12,fontWeight:600}}>
                {lvl.label}
              </span>
              <span style={{fontSize:12,color:C.muted,display:"flex",alignItems:"center",gap:4}}>
                <Shield size={11}/> מתלווה פעיל
              </span>
              {profile?.joinDate&&(
                <span style={{fontSize:12,color:C.muted,display:"flex",alignItems:"center",gap:4}}>
                  <Clock size={11}/> הצטרף: {profile.joinDate}
                </span>
              )}
            </div>
          </div>
          {/* Score ring */}
          <div style={{textAlign:"center",flexShrink:0}}>
            <div style={{width:72,height:72,borderRadius:"50%",background:`conic-gradient(${C.gold} ${score*3.6}deg,${C.card2} 0deg)`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 0 0 4px ${C.card}`}}>
              <div style={{width:56,height:56,borderRadius:"50%",background:C.card,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{fontSize:18,fontWeight:800,color:C.gold,lineHeight:1}}>{score}</div>
                <div style={{fontSize:9,color:C.muted}}>ניקוד</div>
              </div>
            </div>
            <div style={{fontSize:10,color:C.muted,marginTop:5}}>פעילות כוללת</div>
          </div>
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div style={{display:"flex",gap:12,marginBottom:20,flexWrap:"wrap"}}>
        <StatCard Icon={Video}    label="סרטונים"  value={watchedCount} max={totalVids}   color={C.blue}  />
        <StatCard Icon={BookOpen} label="מדריכים"  value={doneCount}    max={totalGuides} color={C.purp}  />
        <StatCard Icon={Users}    label="קהילה"    value={communityCount} max={Math.max(communityCount,20)} color={C.green} sub={`${communityCount} הודעות`}/>
      </div>

      {/* ── RECOMMENDATIONS ── */}
      <div style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:16,padding:"20px 22px",marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
          <Target size={16} color={C.gold}/>
          <h3 style={{fontSize:15,fontWeight:700,color:C.txt,margin:0}}>המלצות מותאמות אישית</h3>
          <span style={{fontSize:11,color:C.muted,marginRight:"auto"}}>מבוסס על הפעילות שלך בלבד</span>
        </div>
        {recs.length===0?(
          <div style={{fontSize:13,color:C.muted,textAlign:"center",padding:"20px 0"}}>אין נתוני פעילות עדיין. התחל להשתמש בפלטפורמה.</div>
        ):(
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {recs.map((r,i)=>(
              <div key={i} style={{display:"flex",alignItems:"flex-start",gap:12,background:C.card2,border:`1px solid ${r.color}30`,borderRadius:12,padding:"12px 14px"}}>
                <div style={{width:34,height:34,borderRadius:9,background:r.color+"18",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                  <r.Icon size={15} color={r.color}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:700,color:C.txt,marginBottom:3}}>{r.title}</div>
                  <div style={{fontSize:12,color:C.sub,lineHeight:1.55}}>{r.body}</div>
                </div>
                <button onClick={()=>setSection(r.action)}
                  style={{background:r.color,border:"none",borderRadius:8,padding:"6px 12px",cursor:"pointer",fontSize:12,fontWeight:600,color:r.color===C.gold?"#000":"#fff",flexShrink:0,whiteSpace:"nowrap"}}>
                  {r.cta}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── ACCOUNT DETAILS ── */}
      <div style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:16,padding:"20px 22px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
          <Shield size={15} color={C.gold}/>
          <h3 style={{fontSize:15,fontWeight:700,color:C.txt,margin:0}}>פרטי חשבון</h3>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:0}}>
          {[
            {label:"שם תצוגה",    value:profile?.displayName||userName},
            {label:"שם כניסה",    value:userName},
            {label:"סוג חשבון",   value:"מתלווה - Kaiel Kayam Academy"},
            {label:"תאריך הצטרפות",value:profile?.joinDate||"לא ידוע"},
            {label:"סרטונים שנצפו",value:`${watchedCount} / ${totalVids}`},
            {label:"מדריכים שהושלמו",value:`${doneCount} / ${totalGuides}`},
            {label:"הודעות בקהילה",value:`${communityCount}`},
          ].map((row,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 0",borderBottom:i<6?`1px solid ${C.brd}`:"none"}}>
              <span style={{fontSize:13,color:C.sub}}>{row.label}</span>
              <span style={{fontSize:13,color:C.txt,fontWeight:500}}>{row.value}</span>
            </div>
          ))}
        </div>
        {onLogout&&(
          <button onClick={onLogout}
            style={{marginTop:16,background:"none",border:`1px solid ${C.red}50`,borderRadius:10,padding:"9px 18px",cursor:"pointer",color:C.red,fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:7,transition:"all .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.background=C.red+"15";}}
            onMouseLeave={e=>{e.currentTarget.style.background="none";}}>
            <LogOut size={14}/> התנתקות
          </button>
        )}
      </div>
    </div>
  );
}

/* ── ADS LIBRARY ─────────────────────────────────────────── */

/* ── ADS GENERATOR ──────────────────────────────────────── */
const IMG={
  "בריאות":[101,102,103,104,105,106,107,108],
  "יופי":[201,202,203,204,205,206,207,208],
  "בית":[301,302,303,304,305,306,307,308],
  "טכנולוגיה":[401,402,403,404,405,406,407,408],
  "ביגוד":[501,502,503,504,505,506,507,508],
  "חיות מחמד":[601,602,603,604,605,606],
  "ילדים":[701,702,703,704,705,706],
  "ספורט":[801,802,803,804,805,806,807,808],
  "מזון":[901,902,903,904,905,906],
  "רכב":[1001,1002,1003,1004,1005],
  "חינוך":[1101,1102,1103,1104,1105,1106],
  "תזונה":[1201,1202,1203,1204,1205,1206],
  "נסיעות":[1301,1302,1303,1304,1305,1306],
};

const AD_TMPL={
  "בריאות":{
    count:100,
    brands:["MassagePro","HealthMax","PainRelief","TENSmed","HeatCare","SpineEase","NeckFlex","BackPro","JointCare","OrthoFlex","PulseLife","HealWave","ComfortZone","MedRelax","VitalCare","ThermaFlow","BioHeal","ErgoLife","SpaCure","PeakHealth"],
    hooks:[
      "הרופא שלי אמר לי לקנות את זה. אחרי שבוע הבנתי למה.",
      "בזבזתי 4 שנים וכסף על כאבי גב - עד שגיליתי את זה",
      "למה אנשים עם כאב כרוני עוברים לזה במקום כדורים?",
      "אחרי 10 שעות עמידה - הרגליים שלי סוף סוף נחות",
      "2.3 מיליון אנשים כבר גילו את הסוד הזה",
      "שמתי את זה בצוואר בזמן ישיבת זום. הקולגות שאלו מה קרה.",
      "הפיזיותרפיסטית שלי ביקשה לראות מה אני משתמש בו",
      "10 דקות ביום שינו את כל הגב שלי",
      "לא האמנתי שיש פתרון כזה פשוט לכאב כרוני",
      "כירופרקטיקה = 300 לסשן. זה = 199 לכל החיים.",
      "POV: קנית את זה ב-22:00 כי כבר לא יכולת לישון מהכאב",
      "הגיל לא גורם לכאב גב. הישיבה גורמת. הנה הפתרון.",
      "מה שפיזיותרפיסט גובה 3,600 בשנה אני עושה בבית ב-10 דקות",
      "אם אתה עובד מול מסך הגב שלך בסכנה. תראה למה.",
      "לפני ואחרי 14 יום: הגב שלי לגמרי שונה",
      "הרמתי משהו לא נכון. שנה אחר כך גיליתי את הפתרון.",
      "כולם בעבודה שואלים אותי מה עשיתי לגב שלי",
      "לא כדורים. לא זריקות. לא ניתוח. זה.",
      "90% מהאנשים עם כאב גב עושים טעות אחת. הנה מה.",
      "הדבר שהרופא שלי לא אמר לי על כאב כרוני"
    ],
    bodies:[
      "מכשיר העיסוי שלנו עם 6 ראשים מסתובבים וחום מובנה. 15 דקות ביום. 50,000 לקוחות מרוצים.",
      "מדבקות חום 12 שעות. אין תרופות, אין תופעות לוואי. רק חום טבעי שמרפה שרירים.",
      "טכנולוגיית TENS מחקה את סיגנל הגוף ובולמת כאב מהמקור. 6 מצבים, 20 עוצמות.",
      "מכשיר עיסוי לצוואר וגב. עובד בזמן שאתה עובד, נוהג, או צופה בסדרה.",
      "כרית זיכרון ארגונומית לתמיכה מלאה בעמוד השדרה. מפחיתה כאב תוך 7 ימים.",
      "מתיחון גב ארגונומי. 10 דקות ביום. 60% הפחתת לחץ על דיסקים.",
      "גלגלת פומרול. מנקה נקודות הדק בגב וישבן. פיזיותרפיה עצמית ביתית.",
      "מד לחץ דם אוטומטי עם זיכרון 60 מדידות. מה שהיה עולה אלפי שקלים.",
      "מסכת חום לעיניים. מפחיתה עייפות עיניים ב-73% תוך 10 דקות. 50K לקוחות.",
      "אוורור גב דינמי לישיבה ממושכת. מונע כאב עוד לפני שהוא מתחיל."
    ],
    ctas:["קנה עכשיו - 50% הנחה","הזמן היום","נסה 30 יום חינם","קבל הנחה בלעדית","חסוך עכשיו","שדרג את החיים שלך","קנה לפני שייגמר","הזמן עם משלוח חינם"],
    platforms:[["facebook"],["instagram"],["instagram","facebook"],["tiktok"],["tiktok","instagram"],["facebook","instagram","tiktok"]],
    formats:["video","video","image","image","carousel"],
    hotEvery:4,
  },
  "יופי":{
    count:80,
    brands:["GlowUp","JadeGlow","IPLpro","LuminaSkin","CollagenLab","BeautyRx","SkinFirst","GlowCode","PureSkin","RadiancePro","VelvetGlow","SilkSkin","AuraBeauty","NaturalGlow","CrystalClear","DermaPro","FlawlessSkin","SkinLab","BeautyScience","EliteBeauty"],
    hooks:[
      "ניסיתי את זה כי ראיתי את זה 47 פעם בטיקטוק. הנה התוצאות אחרי 14 יום.",
      "הסוד של נשים קוריאניות לעור צעיר - עכשיו זמין בישראל",
      "חסכתי 4,000 בשנה עם הרכישה הזו. הנה החשבון המלא.",
      "POV: פתחת את החבילה ב-10 בשבת בבוקר. 20 דקות אחר כך...",
      "הדרמטולוגית שלי בדקה את זה. מה שהיא אמרה הפתיע אותי.",
      "64% מהנשים שניסו דיווחו על שינוי בתוך 30 יום",
      "עשיתי את הטיפול הזה בבית. הסלון ביקש לדעת מה עשיתי.",
      "מה שמוצרי הטיפוח ב-500 לא מספרים לך",
      "הייתי ספקנית. אחרי שבועיים שיניתי דעה לחלוטין.",
      "לפני ואחרי: 21 יום. ללא פילטרים. ללא עריכה.",
      "3 שנים חיפשתי פתרון לעור שלי. מצאתי אותו.",
      "הסיבה האמיתית שהעור שלך נראה עייף בגיל 30",
      "הביקורות לא משקרות: 12,000 נשים כבר גילו את זה",
      "TikTok made me buy it - ואני שמחה שעשיתי",
      "מה שסלוני יופי לא רוצים שתדעי",
    ],
    bodies:[
      "רולר ג'ייד מקורי. מפחית נפיחות בבוקר ב-5 דקות. 200,000+ נמכרו בעולם.",
      "מכשיר הוואקום לקומדונים. 4 ראשים ו-4 עוצמות. ויראלי ב-TikTok Beauty.",
      "מסכת זהב 24K. 5 יחידות. אפקט הידוק ולחות מיידי. Impulse Buy חזק.",
      "מכשיר IPL ביתי. 500,000 פולסים = 20 שנה שימוש. חסכי 4,000 בשנה.",
      "סרום ויטמין C ורטינול. עובד בלילה כשהעור מתחדש. 89% שיפור ב-21 יום.",
      "מברשת ניקוי פנים חשמלית. 6 ראשים. מנקה נקבוביות פי 4 טוב ממברשת רגילה.",
      "מכשיר RF הידוק עור. תחליף טיפול סלון. 3 עוצמות. 81% שיפור בחודשיים.",
      "מכשיר אדים לפנים. פותח נקבוביות ב-3 דקות. ויראלי TikTok Beauty.",
    ],
    ctas:["קבלי 45% הנחה","הזמיני עכשיו","נסי 30 יום","קבלי את המוצר","שדרגי את הטיפוח","קחי עכשיו","הפתיעי את עצמך","קבלי חינם משלוח"],
    platforms:[["instagram"],["instagram","tiktok"],["tiktok"],["facebook","instagram"],["instagram","facebook","tiktok"]],
    formats:["video","video","image","carousel"],
    hotEvery:5,
  },
  "בית":{
    count:70,
    brands:["HomeGenius","OrganizeIt","CleanPro","SpaceSaver","NestLife","HomeHero","TidyHome","PureHome","SmartHome","CozyNest","HomeFlow","ClearSpace","NeatLife","HomeCraft","DwellPro","CleanCo","NestPro","HomeEdge","PureLiving","TidyNest"],
    hooks:[
      "Clean with me: שינוי הארגון שחיכיתי לו 2 שנים",
      "בדקנו את האוויר בבית. לא האמנו מה מצאנו.",
      "לפני ואחרי: כך נראה הבית שלנו אחרי 40 דקות",
      "הסיבה שהבית שלך תמיד נראה מבולגן - ולא אשמתך",
      "מה שמנקות מקצועיות משתמשות בזה ואתה לא יודע",
      "חיסכנו 180 חשמל בחודש הראשון עם השינוי הזה",
      "הדרך הכי זולה לגרום לבית להרגיש כמו בית יוקרה",
      "אישתי ביקשה להחזיר את כל מוצרי הניקוי שלה ולקנות רק את זה",
      "משפחה של 5. בית מסודר. סוד אחד.",
      "מה שה-IKEA לא מוכר לך - ואנחנו כן",
      "3 שנים קניתי דברים מיותרים. הפריט הזה שינה הכל.",
      "הפתרון ל-73% מהבלגן בבית הוא פריט אחד. הנה הוא.",
    ],
    bodies:[
      "סט 8 קופסאות שקופות עם מכסה. לקח 40 דקות לארגן את כל המטבח. לקוחות קונים בממוצע 2.3 סטים.",
      "מנקה אוויר HEPA + UV. מסיר 99.97% חלקיקים, אלרגיות, ריחות. למשרד וחדר שינה.",
      "מסנן מים לברז. מסיר כלור ומתכות. מחובר בדקה. ללא כלים. ללא אינסטלטור.",
      "שקיות ואקום לבגדים. חיסכון 80% מקום. ארוז פי 3 יותר. לנסיעות ולאחסון.",
      "מברשת כלים עם משאבת סבון מובנית. חוסכת 70% סבון. Impulse Buy קלאסי.",
      "כוס חימום USB. שומרת קפה בטמפרטורה מדויקת. מתנה ליומיום. 12,000 ביקורות.",
      "מנורת LED שולחן 4 מצבים. 10 עוצמות. USB. לעבודה ולמידה מהבית.",
      "רובוט שואב אבק. 120 דקות. מיפוי חכם. חוזר לבסיס לבד.",
    ],
    ctas:["הזמן עכשיו","שדרג את הבית","קנה היום","נסה 30 יום","קבל הנחה","שלח לי עכשיו","קנה 2 קבל 1","משלוח חינם"],
    platforms:[["facebook"],["instagram","facebook"],["tiktok","instagram"],["facebook","instagram"]],
    formats:["video","image","image","carousel"],
    hotEvery:6,
  },
  "טכנולוגיה":{
    count:60,
    brands:["TechPulse","GadgetHub","SmartPro","DigitalEdge","TechFirst","InnoGear","DeviceMax","TechCore","SmartLife","GadgetPro","TechWave","ByteGear","PixelPro","TechNest","SmartEdge","InnoCore","DeviceLife","TechFlow","BytePro","PixelLife"],
    hooks:[
      "למה כולם מזמינים את זה מ-Amazon ולא בארץ? גילינו.",
      "גיליתי שאני ישן רע. המכשיר הזה גילה לי למה.",
      "הוספתי את זה לבית. חסכתי 180 חשמל בחודש הראשון.",
      "הסמארטפון שלך שווה פחות בלי הגאדג'ט הזה",
      "קניתי את זה כי ראיתי סיפור באינסטגרם. החלטה הכי טובה.",
      "מה שאפל לא מספרת לך על הטכנולוגיה שלה",
      "עובד עם כל מכשיר. תוצאות מיידיות. פחות מ-$40.",
      "10,000 לקוחות. 4.9 כוכבים. הנה למה.",
      "חשבתי שזה גימיק. אחרי שבוע שיניתי דעה.",
      "הגאדג'ט הזה ייצר לי 2 שעות פנויות ביום",
    ],
    bodies:[
      "שקע WiFi חכם עם ניטור צריכת חשמל. Alexa + Google Home. מזהה בזבוז חשמל.",
      "אוזניות ANC. 30 שעות סוללה. ביטול רעש אקטיבי. 70% מחיר מתחרות.",
      "רצועת מעקב שינה SpO2. אפליקציה מנתחת כל שלב שינה. 14 ימי ניסיון.",
      "מטען אלחוטי 3-ב-1. טלפון, שעון, אוזניות - בו-זמנית. עיצוב מינימליסטי.",
      "מצלמת אבטחה 4K. ראיית לילה. התראות מיידיות. ענן חינם ל-7 ימים.",
      "אוזניה עם GPT מובנה. שואל שאלות בקול ומקבל תשובות. עתיד כבר כאן.",
      "טאבלט לילדים 10 אינץ'. מסך IPS. כיסוי עמיד. 12 שעות סוללה.",
      "ג'ויסטיק גיימינג. 12 כפתורים. רטט. PC+PS+Switch.",
    ],
    ctas:["קנה ישיר","שדרג עכשיו","הזמן היום","קבל הנחה","נסה חינם","קנה לפני שייגמר","הזמן עם משלוח","קבל מיידית"],
    platforms:[["facebook"],["instagram","facebook"],["tiktok"],["facebook","instagram","tiktok"]],
    formats:["video","image","carousel","video"],
    hotEvery:5,
  },
  "ביגוד":{
    count:55,
    brands:["UrbanWear","StylePro","FashionFirst","TrendSet","ClothingCo","StyleEdge","WearPro","FitWear","ModeLife","TrendLife","StyleFirst","UrbanEdge","FashionPro","ClothingPro","StyleCore","WearLife","ModeEdge","TrendPro","UrbanLife","FitStyle"],
    hooks:[
      "קניתי את זה כי הבגדים שלי פסקו להתאים. לא מחסור בגדים.",
      "הסיבה שרוב הבגדים נראים לא טוב: הם לא מותאמים לך",
      "ירדתי 8 קג. לא שיניתי את כל הארון. שיניתי פריט אחד.",
      "האאוטפיט שכולם שאלו עליו. מחיר שלא תאמין.",
      "3 פריטים שגורמים לכל אאוטפיט להיראות יקר",
      "למה בגדי ספורט הכי יקרים לא בהכרח הכי טובים",
      "קניתי 5 חולצות. חיסכתי 600. נראה טוב יותר.",
      "מה שסטייליסטים לא מספרים ללקוחות שלהם",
      "הגרב שינה את הריצה שלי. לא צחקו.",
      "לא מאמינה שלגינס יכול לשנות ביטחון עצמי. עד שניסיתי.",
    ],
    bodies:[
      "לגינס דחיסה עם כיסים עמוקים. Squat-proof. 4 כיוונים מתיחה. מחזיק צורה.",
      "חולצת DryFit לגברים. מייבשת פי 3 מכותנה. מגן UV50. 12 צבעים.",
      "ג'קט חורף קל משקל 400g. מתכווץ לכדור. עמיד מים.",
      "נעלי ריצה עם קצף BOOST. ספיגת זעזועים מקסימלית.",
      "גרביים ל-42KM. אנטי-שלפוחיות. כותנה מריניו. 6 זוגות בחבילה.",
      "שמלת מקסי קיץ. מתאימה לכל מידה. 100% ויסקוז. 18 צבעים.",
      "חגורת ריצה עם 6 כיסים ובקבוק. לא זזה בריצה. מובטח.",
    ],
    ctas:["קנה עכשיו","הזמן היום","שדרג את הסגנון","קבל 30% הנחה","משלוח חינם","נסה 60 יום","קנה 2 קבל 20%","הוסף לעגלה"],
    platforms:[["instagram"],["tiktok","instagram"],["facebook","instagram"],["instagram","tiktok"]],
    formats:["video","image","video","carousel"],
    hotEvery:6,
  },
  "חיות מחמד":{
    count:45,
    brands:["PetPro","PawsLife","FurBuddy","PetFirst","PawsPro","FurLife","PetEdge","PawsFirst","FurPro","PetCore","PawsLife","FurEdge","PetFlow","PawsCore","FurFirst","PetLife","PawsFlow","FurCore","PetWave","PawsEdge"],
    hooks:[
      "הכלב שלי שנא אמבטיות. עד שניסינו את זה.",
      "הוצאתי 3,000 על וטרינר. הפתרון היה ב-89.",
      "חתול שלי לא ישן טוב. הסיבה הפתיעה אותי.",
      "20 דקות ספיקות לנקות את הכלב בבית. בדיוק כך.",
      "מה שוטרינרים ממליצים אבל לא תמיד אומרים",
      "הכלב שלי ירד 2 קג. הפתרון פשוט.",
      "חתול שלי שמח יותר אחרי שינוי אחד פשוט",
      "30,000 הזמנות בחודש האחרון. מה הכלבים אוהבים בזה?",
    ],
    bodies:[
      "מברשת עיסוי לכלבים עם משאבת שמפו. מנקה ומעסה בו-זמנית. 30K הזמנות בחודש.",
      "שמיכת ריגוע לכלבים חרדים. 7 משקלות. 5 גדלים. מפחית חרדה ב-68%.",
      "מזרן אורתופדי לכלבים. ג'ל זיכרון. לפרקים ולגב. כלבים מבוגרים אוהבים אותו.",
      "גריב אינטראקטיבי לחתולים. 3 מצבים. טעינת USB. 4 שעות פעולה.",
      "אוכל לחתולים עם ויטמינים טבעיים. שיפור פרווה בתוך 3 שבועות.",
      "מזרקת מים לכלבים בגן. חיישן קרבה. סוללה נטענת. עמיד מים.",
      "GPS לצווארון כלב. עדכון מיקום כל 10 שניות. 7 ימי סוללה.",
    ],
    ctas:["פנקו את הכלב","הזמן עכשיו","קבל הנחה","נסה חינם","קנה עכשיו","שדרג לחיית המחמד","קבלו 30% הנחה","הזמן עם משלוח"],
    platforms:[["tiktok","instagram"],["facebook"],["instagram","facebook"],["tiktok"]],
    formats:["video","video","image","carousel"],
    hotEvery:5,
  },
  "ילדים":{
    count:45,
    brands:["KidsFirst","TinyGenius","LittlePro","KidsLife","TinyPro","LittleFirst","KidsEdge","TinyLife","LittlePros","KidsCore","TinyEdge","LittleLife","KidsFlow","TinyCore","LittleEdge","KidsWave","TinyFlow","LittleCore","KidsPro","TinyWave"],
    hooks:[
      "בתי בת ה-6 לא זזה מזה שעה. לא מסך. לא יוטיוב. זה.",
      "3 חודשים, ילד מוכן לגן. עם הכלי הזה.",
      "הסבתא קנתה את זה. הילד לא בא הביתה.",
      "גיליתי שהילד שלי מוכשר יותר ממה שחשבתי. בזכות זה.",
      "הצעצוע שמורה כיתה א ממליצת עליו",
      "פחות זמן מסך, יותר יצירתיות. הפתרון: זה.",
      "STEM בגיל 5: איך הצעצוע הזה מכין לבי'ס",
      "קניתי לבן שלי. עכשיו כל הבית משחק איתו.",
    ],
    bodies:[
      "ערכת ניסויים מדעיים 6-12. 25 ניסויים. הוראות בעברית. STEM חינוכי.",
      "משחק בנייה מגנטי 120 חלקים. מפתח חשיבה מרחבית. 3-10 שנים.",
      "קיט ציור בצבעי מים. 36 צבעים. 50 דפי נייר. ניתן לשטוף מהבגדים.",
      "רובוט תכנות לילדים. לומדים קוד משחק. גיל 6+. 4.9/5.",
      "כלי נגינה ילדים - גיטרה אקוסטית. מדריך PDF. 5-12 שנים.",
      "ערכת שף ילדים. 15 כלים בטוחים. 20 מתכונים.",
      "לגו תואם 500 חלקים. עיר שלמה. גיל 4-10. 4.8/5.",
    ],
    ctas:["הפתיעו את הילדים","הזמן עכשיו","קנה לילד שלך","קבל הנחה","נסה ותחזיר","הזמן מתנה","שלח כמתנה","קבלו 40% הנחה"],
    platforms:[["facebook"],["instagram","facebook"],["tiktok","instagram"],["facebook","instagram"]],
    formats:["video","image","carousel","video"],
    hotEvery:6,
  },
  "ספורט":{
    count:55,
    brands:["FitPro","ActiveEdge","SportFirst","FitLife","ActivePro","SportEdge","FitFirst","ActiveLife","SportPro","FitCore","ActiveFirst","SportLife","FitEdge","ActiveCore","SportFirst2","FitFlow","ActiveEdge2","SportCore","FitWave","ActiveFlow"],
    hooks:[
      "ריצה 5K ל-10K בתוך 8 שבועות. הנה הדרך הנכונה.",
      "אימון 20 דקות ביום שמחליף שעה בחדר כושר",
      "למה 80% מהאנשים מפסיקים להתאמן אחרי חודש",
      "הציוד שגרם לי לא לדלג על שום אימון שנה שלמה",
      "נשרפו 500 קלוריות. 30 דקות. בלי לרוץ.",
      "הכסא שציית בו 8 שעות ביום הורג אותך לאט",
      "Personal Trainer גבה 400 לשעה. קניתי את זה במקום.",
      "פציעה שעצרה אותי 6 חודשים. ההתאוששות הייתה בזכות זה.",
      "HIIT, יוגה, כוח - עם פריט אחד בלבד",
      "3 חודשים, 12 קג פחות. הכלי שהצטרפתי בגללו.",
    ],
    bodies:[
      "כדור פיטנס מנופח אוטומטית. 300 קג עמידות. מגיע עם תרגילים.",
      "גומי התנגדות 5 עוצמות. החלפה לחדר כושר ביתי. כולל הוראות אימון.",
      "מד דופק GPS לריצה. 7 ספורטים. 5 ימי סוללה. עמיד מים 50m.",
      "אופניים נייחים מתקפלים. 8 הילוכים. 120 קג עמידות. מסך LCD.",
      "מזרן יוגה TPE אנטי-החלקה. 6mm עובי. נגד חיידקים. 5 שנות אחריות.",
      "מתלה קפיצות בדלת. עד 100קג. ללא קידוח. 5 רמות גובה.",
      "כפפות כושר עם תמיכת פרק. פאדינג כפול. גדלים XS-XXL.",
    ],
    ctas:["שדרג את האימון","קנה עכשיו","הזמן היום","קבל 30% הנחה","נסה 60 יום","קנה ספורטיבי","הוסף לעגלה","משלוח מהיר"],
    platforms:[["instagram"],["instagram","tiktok"],["facebook","instagram"],["tiktok"],["facebook"]],
    formats:["video","video","image","carousel","image"],
    hotEvery:5,
  },
  "מזון":{
    count:40,
    brands:["NutriFirst","HealthyEat","FoodPro","NutriLife","HealthyPro","FoodFirst","NutriEdge","HealthyLife","FoodEdge","NutriPro","HealthyFirst","FoodLife","NutriCore","HealthyEdge","FoodCore","NutriFlow","HealthyCore","FoodFlow","NutriWave","HealthyFlow"],
    hooks:[
      "קפה בלי סוכר שטעים יותר מקפה עם סוכר. הסוד:",
      "ירדתי 6 קג בלי דיאטה. שיניתי רק את ארוחת הבוקר.",
      "הסיבה שאתה רעב שעה אחרי ארוחה - ולא אשמתך",
      "פרוטאין שייק שטעים כמו גלידה. אפס גרם סוכר.",
      "גילינו למה 70% מהישראלים חסרים ויטמין אחד.",
      "האחרות מכינות ארוחה ב-10 דקות. הנה איך.",
      "שמן זית שהדיאטנית שלי שלחה לי קישור אליו",
      "רעב לפני 12? הסיבה הפתיעה אותי.",
    ],
    bodies:[
      "אבקת חלבון 100% מי גבינה. 25g חלבון לסקופ. 5 טעמים. ללא סוכר מוסף.",
      "כמוסות אומגה 3 מדגים פרמיום. 1000mg EPA+DHA. ללא ריח דגים.",
      "Multi-vitamin יומי. 23 ויטמינים ומינרלים. מינון מדויק לפי מחקרים.",
      "אבקת ירוקים. 40 ירקות ופירות בכף אחת. תחליף לשייקים. 4.7/5.",
      "קפה נוסקף עם קולגן. 10g קולגן לכוס. 500 כוסות.",
      "גרנולה ביתית ללא גלוטן. 8g חלבון ל-100g. 6 טעמים. ללא סוכר.",
      "ממריץ טבעי: ג'ינג'ר+כורכום+פלפל שחור. 60 כוסות.",
    ],
    ctas:["הזמן עכשיו","נסה חינם","קבל 3 ב-2","הזמן מארז","שלח לי","קנה היום","קבל הנחה","משלוח חינם"],
    platforms:[["instagram","tiktok"],["facebook"],["instagram","facebook"],["tiktok","instagram"]],
    formats:["video","image","carousel","video"],
    hotEvery:6,
  },
  "רכב":{
    count:30,
    brands:["AutoPro","CarFirst","DriveEdge","AutoLife","CarEdge","DriveFirst","AutoEdge","CarPro","DriveLife","AutoFirst","CarLife","DriveEdge2","AutoCore","CarCore","DriveCore","AutoFlow","CarFlow","DriveFlow","AutoWave","CarWave"],
    hooks:[
      "הסיבה שהרכב שלך מריח לא טוב - והפתרון ב-2 דקות",
      "חסכתי 1,200 תחזוקה עם הגאדג'ט הזה לרכב",
      "הטעות שכולם עושים עם מזגן הרכב בקיץ",
      "3 אביזרים שכל נהג צריך ולא קיבל מהדילר",
      "ניסיתי 12 מארגני רכב. זה היחיד שנשאר",
      "מה שמוסך לא מספר לך על הרכב שלך",
      "הרכב שלי נראה כמו חדש. עלה לי $39.",
    ],
    bodies:[
      "ארגנייזר רכב 12 חלקים. לא מתקין. ממוין ב-15 דקות. 4.9/5.",
      "מנקה מושבי עור. UV-proof. ריחני. שומר 5 שנים. 500ml.",
      "מצלמת DASH 4K עם GPS. ראיית לילה. 150 מעלות שדה ראייה.",
      "אוורור מושב קיץ עם USB. מקרר 8 מעלות בדקות. 3 מהירויות.",
      "OBD2 Bluetooth. מאבחן תקלות מנוע מהטלפון. חוסך 300 למוסך.",
      "מארגן תא מטען. 3 חדרים. עמיד. מתקפל.",
    ],
    ctas:["שדרג את הרכב","הזמן עכשיו","קנה היום","קבל הנחה","משלוח חינם","קנה 2 קבל 10%","הוסף לעגלה","קנה מיידית"],
    platforms:[["facebook"],["instagram","facebook"],["tiktok"],["facebook","instagram"]],
    formats:["video","image","carousel","image"],
    hotEvery:7,
  },
  "חינוך":{
    count:30,
    brands:["EduFirst","LearnPro","SkillEdge","EduLife","LearnFirst","SkillFirst","EduEdge","LearnLife","SkillLife","EduPro","LearnEdge","SkillPro","EduCore","LearnCore","SkillCore","EduFlow","LearnFlow","SkillFlow","EduWave","LearnWave"],
    hooks:[
      "למדתי אנגלית ב-6 חודשים. שיטה אחת. מובטח.",
      "הטעות שגרמה לי להיכשל בפסיכומטרי פעמיים",
      "3 חודשים לכרטיס הטיסה - לימוד שפה בשיטה מוכחת",
      "הקורס שהמנהל שלי שאל מאיפה הכישורים האלה",
      "ילדים לומדים 3x מהר יותר עם הגישה הזו",
      "פיתחתי כישור חדש ב-30 יום. $29.99 בלבד.",
      "הסיבה שרוב הקורסים לא עובדים - ומה כן",
    ],
    bodies:[
      "קורס אנגלית עסקית 60 שיעורים. Native אמריקאי. גישה ל-3 שנים. תעודה.",
      "ערכת לימוד ספרדית: 500 כרטיסיות + אפליקציה + שיחה שבועית.",
      "קורס Excel מקיף. 80 שיעורים. מתחיל למומחה. אחריות לתוצאות.",
      "ספר ניווט מניות בשוק ישראלי. 400 עמודים. עדכונים שנתיים.",
      "קורס Photoshop. 50 פרויקטים מעשיים. גישה לנצח. 4.8/5.",
      "תוכנית Python 12 שבועות. יוצאים עם 5 פרויקטים בפורטפוליו.",
    ],
    ctas:["הרשם עכשיו","התחל ללמוד","קבל גישה","קנה קורס","התחל היום","נסה חינם 7 ימים","הצטרף עכשיו","שדרג הכישורים"],
    platforms:[["facebook"],["instagram","facebook"],["tiktok","instagram"]],
    formats:["video","image","carousel","video"],
    hotEvery:7,
  },
  "תזונה":{
    count:30,
    brands:["NutriMax","VitaFirst","SupPro","NutriPro","VitaEdge","SupFirst","NutriEdge","VitaLife","SupEdge","NutriLife","VitaCore","SupLife","NutriFirst2","VitaFlow","SupCore","NutriCore","VitaWave","SupFlow","NutriFlow2","VitaFirst2"],
    hooks:[
      "הסיבה שאתה עייף כל יום - חסר ב-97% מהישראלים",
      "ירדתי 8 קג תוך 3 חודשים עם שינוי אחד בלבד",
      "מה שרופאים ממליצים לפני שינה לשיפור חילוף חומרים",
      "הדיאטנית שלי נתנה לי רשימת תוספים. זה ברשימה.",
      "3 דברים שאתה חייב לאכול בבוקר כדי לרזות",
      "חסכתי 2,000 על תזונאי. קניתי את זה במקום.",
      "הסוד שאתלטים מסתירים בנוגע לתוספי ספורט",
    ],
    bodies:[
      "ויטמין D3+K2. 5000 IU ליום. שמן MCT לספיגה מרבית. 90 כמוסות.",
      "מגנזיום גליצינט. לשינה טובה, פחות חרדה, שרירים גמישים. 120mg.",
      "פרוביוטיקה 50 מיליארד. 12 זנים. ציפוי Delayed-Release.",
      "ברזל לייזום. לא גורם לעצירות. עם ויטמין C לספיגה. 60 כמוסות.",
      "אשווגנדה KSM-66. 300mg. מפחית קורטיזול ב-28%. 60 כמוסות.",
      "Collagen Peptides. 10g לסקופ. חסר טעם. מתמיס בכל שתייה.",
    ],
    ctas:["הזמן עכשיו","קנה היום","קבל 3 ב-2","שדרג הבריאות","נסה חינם","קבל הנחה","משלוח מהיר","קנה מארז"],
    platforms:[["facebook"],["instagram","facebook"],["tiktok","instagram"],["instagram"]],
    formats:["video","image","carousel","video"],
    hotEvery:6,
  },
  "נסיעות":{
    count:25,
    brands:["TravelPro","JourneyFirst","ExploreEdge","TravelLife","JourneyEdge","ExploreFirst","TravelEdge","JourneyPro","ExplorePro","TravelFirst","JourneyLife","ExploreLife","TravelCore","JourneyCore","ExploreCore","TravelFlow","JourneyFlow","ExploreFlow","TravelWave","JourneyWave"],
    hooks:[
      "טסתי ל-12 מדינות עם תיק אחד. הסוד:",
      "חסכתי 3,000 על נסיעה לאירופה. הנה איך.",
      "הטעות שכל תייר ישראלי עושה בנסיעה לחו'ל",
      "3 גאדג'טים שאני לא עולה על מטוס בלעדיהם",
      "הדרך הכי זולה לישון טוב בטיסה ארוכה",
      "גיליתי את הפתרון לג'ט לג אחרי 50 טיסות",
    ],
    bodies:[
      "כרית נסיעה ממברנת זיכרון. מתכווצת לגודל כדור. ערכת טיפולי שינה.",
      "מנעול TSA. 3 כפתורי קוד. עמיד מים. 4 צבעים. מאושר בינלאומי.",
      "מארגן מזוודה 8 חלקים. לדחיסה. לא מתקפל. נפח x3.",
      "מטען נסיעות אוניברסלי. 200 מדינות. USB-C + A. 65W GaN.",
      "כרטיס AirTag Slim. עמיד 2 שנים. משלוח מהיר.",
      "מנורת קריאה LED לטיסה. קליפס חכם. 10 עוצמות. USB-C.",
    ],
    ctas:["הזמן לנסיעה","קנה לטיול","שדרג הנסיעה","הזמן עכשיו","קבל הנחה","נסה בלי סיכון","קנה היום","משלוח מהיר"],
    platforms:[["instagram","tiktok"],["facebook"],["instagram","facebook"],["tiktok"]],
    formats:["video","image","carousel","image"],
    hotEvery:6,
  },
};

function srand(seed){let s=seed;return()=>{s=(s*1664525+1013904223)&0xffffffff;return(s>>>0)/0xffffffff;};}

const ADS_DATA=(()=>{
  const ads=[];let id=1;
  Object.entries(AD_TMPL).forEach(([niche,t])=>{
    const imgs=IMG[niche]||IMG["בריאות"];
    for(let i=0;i<t.count;i++){
      const rng=srand(id*31+i*17+niche.length*7);
      const r=()=>rng();
      const days=15+Math.floor(r()*100);
      const reachN=(0.1+r()*3.9).toFixed(1);
      const hs=Math.round((6.0+r()*4.0)*10)/10;
      const pIdx=Math.floor(r()*t.platforms.length);
      const fIdx=Math.floor(r()*t.formats.length);
      const bIdx=Math.floor(r()*t.brands.length);
      const hIdx=Math.floor(r()*t.hooks.length);
      const bodyIdx=Math.floor(r()*t.bodies.length);
      const ctaIdx=Math.floor(r()*t.ctas.length);
      const imgIdx=Math.floor(r()*imgs.length);
      ads.push({
        id,
        brand:t.brands[bIdx],
        platform:t.platforms[pIdx],
        format:t.formats[fIdx],
        niche,
        days,
        reach:reachN+"M",
        hookScore:Math.min(10,hs),
        hot:(i%t.hotEvery===0),
        hook:t.hooks[hIdx],
        body:t.bodies[bodyIdx],
        cta:t.ctas[ctaIdx],
        img:`https://picsum.photos/seed/${imgs[imgIdx]}/400/260`,
      });
      id++;
    }
  });
  return ads;
})();

const NICHES_AD=["הכל","בריאות","יופי","בית","טכנולוגיה","ביגוד","חיות מחמד","ילדים","ספורט","מזון","רכב","חינוך","תזונה","נסיעות"];
const FORMATS_AD=["הכל","video","image","carousel"];
const PLATFORMS_AD=["הכל","facebook","instagram","tiktok"];
const SORTS_AD=[
  {id:"hot",label:"טרנדים"},
  {id:"days",label:"רץ הכי הרבה"},
  {id:"reach",label:"הכי נצפה"},
  {id:"score",label:"Hook Score"},
];

const PlatformIcon=({p,size=13})=>{
  const icons={
    facebook:<svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z"/></svg>,
    instagram:<svg width={size} height={size} viewBox="0 0 24 24" fill="url(#ig)"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#fd5949"/><stop offset="50%" stopColor="#d6249f"/><stop offset="100%" stopColor="#285AEB"/></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    tiktok:<svg width={size} height={size} viewBox="0 0 24 24" fill="#000"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  };
  return icons[p]||null;
};

function AdCard({ad,onOpen,onSave}){
  const [saved,setSaved]=useState(ad.saved||false);
  const reachNum=parseFloat(ad.reach);
  const reachLabel=ad.reach;
  const scoreColor=ad.hookScore>=9?C.red:ad.hookScore>=8?C.gold:ad.hookScore>=7?C.blue:C.muted;
  return(
    <div className="sc hc" onClick={()=>onOpen(ad)}
      style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:16,overflow:"hidden",cursor:"pointer",display:"flex",flexDirection:"column",transition:"all .2s",position:"relative"}}>
      {/* Thumbnail / creative area */}
      <div style={{height:140,background:`linear-gradient(135deg,${ad.bg||"#111122"},#1a1a30)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",padding:"16px 14px",gap:8,overflow:"hidden"}}>
        {ad.img&&<img src={ad.img} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:0.65}} onError={e=>{e.target.style.display="none";}}/>}
        {ad.hot&&<div style={{position:"absolute",top:10,right:10,background:C.red,color:"#fff",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",gap:4}}><Activity size={9}/>HOT</div>}
        <div style={{position:"absolute",top:10,left:10,display:"flex",gap:4}}>
          {ad.platform.map(p=><span key={p} style={{background:"rgba(0,0,0,.5)",borderRadius:6,padding:"3px 5px",display:"flex",alignItems:"center"}}><PlatformIcon p={p} size={12}/></span>)}
        </div>
        {ad.format==="video"&&<div style={{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(255,255,255,.3)"}}><Play size={14} color="#fff" fill="#fff"/></div>}
        {ad.format==="image"&&<div style={{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(255,255,255,.3)"}}><Image size={14} color="#fff"/></div>}
        <div style={{fontSize:11,color:"rgba(255,255,255,.5)",fontWeight:500,textTransform:"uppercase",letterSpacing:0.5}}>{ad.format} · {ad.niche}</div>
      </div>
      {/* Content */}
      <div style={{padding:"12px 14px",flex:1,display:"flex",flexDirection:"column",gap:8}}>
        {/* Brand */}
        <div style={{fontSize:11,fontWeight:700,color:C.gold,letterSpacing:0.5}}>{ad.brand}</div>
        {/* Hook - main headline */}
        <div style={{fontSize:13,fontWeight:700,color:C.txt,lineHeight:1.5,flex:1}}>"{ad.hook}"</div>
        {/* Metrics row */}
        <div style={{display:"flex",alignItems:"center",gap:10,paddingTop:4,borderTop:`1px solid ${C.brd}`}}>
          <div style={{display:"flex",alignItems:"center",gap:4}} title="ימים שהמודעה רצה">
            <Clock size={10} color={C.muted}/>
            <span style={{fontSize:11,color:ad.days>60?C.green:C.sub,fontWeight:ad.days>60?700:400}}>{ad.days}d</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:4}} title="הגעה משוערת">
            <Globe size={10} color={C.muted}/>
            <span style={{fontSize:11,color:C.sub}}>{reachLabel}</span>
          </div>
          <div style={{marginRight:"auto",display:"flex",alignItems:"center",gap:3}}>
            <span style={{fontSize:10,color:C.muted}}>Hook</span>
            <span style={{fontSize:12,fontWeight:800,color:scoreColor}}>{ad.hookScore}</span>
          </div>
          <button onClick={e=>{e.stopPropagation();setSaved(s=>!s);}} title={saved?"הסר שמירה":"שמור מודעה"}
            style={{background:"none",border:"none",cursor:"pointer",padding:2,color:saved?C.gold:C.muted,transition:"color .2s"}}>
            <Star size={13} fill={saved?C.gold:"none"} color={saved?C.gold:C.muted}/>
          </button>
        </div>
      </div>
    </div>
  );
}

function AdModal({ad,onClose}){
  if(!ad)return null;
  const scoreColor=ad.hookScore>=9?C.red:ad.hookScore>=8?C.gold:ad.hookScore>=7?C.blue:C.muted;
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={onClose}>
      <div className="sc" style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:20,maxWidth:560,width:"100%",maxHeight:"88vh",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
        {/* Header */}
        <div style={{padding:"18px 20px 14px",borderBottom:`1px solid ${C.brd}`,display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:38,height:38,borderRadius:10,background:ad.bg||C.card2,display:"flex",alignItems:"center",justifyContent:"center"}}>
            {ad.format==="video"?<Play size={16} color={C.gold}/>:<Image size={16} color={C.gold}/>}
          </div>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:700,color:C.txt}}>{ad.brand}</div>
            <div style={{display:"flex",gap:6,marginTop:3}}>
              {ad.platform.map(p=><span key={p} style={{display:"flex",alignItems:"center",gap:3,background:C.card2,borderRadius:6,padding:"1px 6px",fontSize:10,color:C.sub}}><PlatformIcon p={p} size={10}/>{p}</span>)}
              <span style={{background:C.card2,borderRadius:6,padding:"1px 6px",fontSize:10,color:C.sub}}>{ad.format}</span>
            </div>
          </div>
          <button onClick={onClose} style={{background:C.card2,border:`1px solid ${C.brd}`,borderRadius:8,width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:C.muted}}>
            <X size={14}/>
          </button>
        </div>
        {/* Body */}
        <div style={{padding:"18px 20px",display:"flex",flexDirection:"column",gap:16}}>
          {/* Metrics */}
          <div style={{display:"flex",gap:10}}>
            {[
              {label:"ימים פעיל",value:ad.days,color:ad.days>60?C.green:C.gold},
              {label:"הגעה",value:ad.reach,color:C.blue},
              {label:"Hook Score",value:ad.hookScore+"/10",color:scoreColor},
              {label:"ניש",value:ad.niche,color:C.purp},
            ].map(m=>(
              <div key={m.label} style={{flex:1,background:C.card2,border:`1px solid ${C.brd}`,borderRadius:10,padding:"10px 12px",textAlign:"center"}}>
                <div style={{fontSize:15,fontWeight:800,color:m.color}}>{m.value}</div>
                <div style={{fontSize:10,color:C.muted,marginTop:2}}>{m.label}</div>
              </div>
            ))}
          </div>
          {/* Hook */}
          <div style={{background:C.gold+"12",border:`1px solid ${C.gold}40`,borderRadius:12,padding:"14px 16px"}}>
            <div style={{fontSize:10,fontWeight:700,color:C.gold,letterSpacing:1,marginBottom:6}}>HOOK</div>
            <div style={{fontSize:15,fontWeight:700,color:C.txt,lineHeight:1.55}}>"{ad.hook}"</div>
          </div>
          {/* Body */}
          <div style={{background:C.card2,border:`1px solid ${C.brd}`,borderRadius:12,padding:"14px 16px"}}>
            <div style={{fontSize:10,fontWeight:700,color:C.sub,letterSpacing:1,marginBottom:6}}>BODY COPY</div>
            <div style={{fontSize:13,color:C.txt,lineHeight:1.65}}>{ad.body}</div>
          </div>
          {/* CTA */}
          <div style={{background:C.blue+"15",border:`1px solid ${C.blue}40`,borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:10}}>
            <div style={{flex:1}}>
              <div style={{fontSize:10,fontWeight:700,color:C.blue,letterSpacing:1,marginBottom:3}}>CALL TO ACTION</div>
              <div style={{fontSize:14,fontWeight:700,color:C.txt}}>{ad.cta}</div>
            </div>
          </div>
          {/* Why it works */}
          <div style={{background:C.card2,border:`1px solid ${C.brd}`,borderRadius:12,padding:"14px 16px"}}>
            <div style={{fontSize:10,fontWeight:700,color:C.sub,letterSpacing:1,marginBottom:8}}>למה זה עובד</div>
            <div style={{display:"flex",flexDirection:"column",gap:5}}>
              {ad.days>60&&<div style={{fontSize:12,color:C.green,display:"flex",alignItems:"center",gap:6}}><Check size={11}/>רצה {ad.days} ימים - ספין של מודעה מנצחת</div>}
              {ad.hookScore>=9&&<div style={{fontSize:12,color:C.red,display:"flex",alignItems:"center",gap:6}}><Check size={11}/>Hook Score גבוה במיוחד - מייצר עצירה מיידית</div>}
              {ad.platform.includes("tiktok")&&<div style={{fontSize:12,color:C.blue,display:"flex",alignItems:"center",gap:6}}><Check size={11}/>פועל ב-TikTok - פוטנציאל ויראלי גבוה</div>}
              <div style={{fontSize:12,color:C.gold,display:"flex",alignItems:"center",gap:6}}><Check size={11}/>הגיע ל-{ad.reach} אנשים - פוטנציאל שוק מוכח</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdsLibraryP(){
  const [q,setQ]=useState("");
  const [niche,setNiche]=useState("הכל");
  const [format,setFormat]=useState("הכל");
  const [platform,setPlatform]=useState("הכל");
  const [sort,setSort]=useState("hot");
  const [modal,setModal]=useState(null);
  const [onlySaved,setOnlySaved]=useState(false);
  const [savedIds,setSavedIds]=useState(new Set());

  const toggleSave=id=>setSavedIds(s=>{const n=new Set(s);n.has(id)?n.delete(id):n.add(id);return n;});

  const filtered=ADS_DATA
    .filter(a=>{
      if(onlySaved&&!savedIds.has(a.id)) return false;
      if(niche!=="הכל"&&a.niche!==niche) return false;
      if(format!=="הכל"&&a.format!==format) return false;
      if(platform!=="הכל"&&!a.platform.includes(platform)) return false;
      if(q){const lq=q.toLowerCase();return a.hook.includes(q)||a.brand.toLowerCase().includes(lq)||a.niche.includes(q)||a.body.includes(q);}
      return true;
    })
    .sort((a,b)=>{
      if(sort==="hot") return (b.hot?1:0)-(a.hot?1:0)||b.hookScore-a.hookScore;
      if(sort==="days") return b.days-a.days;
      if(sort==="reach") return parseFloat(b.reach)-parseFloat(a.reach);
      if(sort==="score") return b.hookScore-a.hookScore;
      return 0;
    });

  const FilterPill=({val,active,onClick,children})=>(
    <button onClick={onClick}
      style={{background:active?C.gold:C.card2,border:`1px solid ${active?C.gold:C.brd}`,color:active?"#000":C.sub,borderRadius:20,padding:"5px 13px",fontSize:12,cursor:"pointer",fontWeight:active?600:400,transition:"all .15s",whiteSpace:"nowrap"}}>
      {children||val}
    </button>
  );

  return(
    <div style={{display:"flex",flexDirection:"column",gap:0,height:"calc(100vh - 48px)"}}>
      {/* ── TOP BAR ── */}
      <div style={{padding:"0 0 16px",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
          <div style={{flex:1,position:"relative"}}>
            <Search size={14} color={C.muted} style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)"}}/>
            <input value={q} onChange={e=>setQ(e.target.value)}
              placeholder="חפש לפי hook, מותג, ניש..."
              style={{width:"100%",background:C.card,border:`1px solid ${C.brd}`,borderRadius:12,padding:"10px 36px 10px 14px",fontSize:14,color:C.txt,direction:"rtl",fontFamily:"inherit"}}/>
          </div>
          <div style={{display:"flex",gap:6}}>
            {SORTS_AD.map(s=>(
              <FilterPill key={s.id} val={s.id} active={sort===s.id} onClick={()=>setSort(s.id)}>{s.label}</FilterPill>
            ))}
          </div>
          <button onClick={()=>setOnlySaved(s=>!s)}
            style={{background:onlySaved?C.gold+"20":"transparent",border:`1px solid ${onlySaved?C.gold:C.brd}`,borderRadius:20,padding:"5px 12px",cursor:"pointer",color:onlySaved?C.gold:C.sub,fontSize:12,display:"flex",alignItems:"center",gap:5,transition:"all .15s"}}>
            <Star size={12} fill={onlySaved?C.gold:"none"} color={onlySaved?C.gold:C.sub}/>שמורות
          </button>
        </div>
        {/* Filter rows */}
        <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
          <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
            <span style={{fontSize:11,color:C.muted,fontWeight:600,whiteSpace:"nowrap"}}>ניש:</span>
            {NICHES_AD.map(n=><FilterPill key={n} val={n} active={niche===n} onClick={()=>setNiche(n)}>{n}</FilterPill>)}
          </div>
          <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
            <span style={{fontSize:11,color:C.muted,fontWeight:600,whiteSpace:"nowrap"}}>פורמט:</span>
            {FORMATS_AD.map(f=><FilterPill key={f} val={f} active={format===f} onClick={()=>setFormat(f)}>{f==="הכל"?f:f}</FilterPill>)}
          </div>
          <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
            <span style={{fontSize:11,color:C.muted,fontWeight:600,whiteSpace:"nowrap"}}>פלטפורמה:</span>
            {PLATFORMS_AD.map(p=><FilterPill key={p} val={p} active={platform===p} onClick={()=>setPlatform(p)}>{p==="הכל"?p:p.charAt(0).toUpperCase()+p.slice(1)}</FilterPill>)}
          </div>
        </div>
        {/* Results count */}
        <div style={{marginTop:10,fontSize:12,color:C.muted}}>
          מציג <span style={{color:C.gold,fontWeight:700}}>{filtered.length}</span> מודעות מתוך {ADS_DATA.length}
          {q&&<span> · תוצאות עבור "<span style={{color:C.txt}}>{q}</span>"</span>}
        </div>
      </div>

      {/* ── GRID ── */}
      <div style={{flex:1,overflowY:"auto",paddingBottom:20}}>
        {filtered.length===0?(
          <div style={{textAlign:"center",padding:"60px 20px",color:C.muted}}>
            <Search size={32} color={C.brd} style={{marginBottom:12}}/>
            <div style={{fontSize:15,color:C.sub,marginBottom:4}}>לא נמצאו מודעות</div>
            <div style={{fontSize:12}}>נסה לשנות את הפילטרים או לנקות את החיפוש</div>
          </div>
        ):(
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:14}}>
            {filtered.map(ad=>(
              <AdCard key={ad.id} ad={{...ad,saved:savedIds.has(ad.id)}}
                onOpen={setModal}
                onSave={()=>toggleSave(ad.id)}/>
            ))}
          </div>
        )}
      </div>

      {modal&&<AdModal ad={{...modal,saved:savedIds.has(modal.id)}} onClose={()=>setModal(null)}/>}
    </div>
  );
}

/* ── CONTENT CREATORS ───────────────────────────────────── */
const ISRAELI_CREATORS=[
  {
    id:"daniel_achdut",
    name:"דניאל אחדות",
    handle:"@daniel_achdut",
    avatar:"ד",
    avatarColor:"#f5a623",
    niche:"UGC · דרופשיפינג",
    bio:"יוצר תוכן UGC מקצועי המתמחה במודעות ביצועים לאיקומרס. מייצר קריאייטיב ממיר לשוק הישראלי עם דגש על storytelling אותנטי ו-hook חזק.",
    tags:["UGC","וידאו","עברית","דרופשיפינג","פייסבוק","אינסטגרם"],
    stats:{videos:"3",avgTurn:"48h",formats:"Video · Reels · Story"},
    whatsapp:"+972586900439",
    driveFolder:"1o9VI4HztO8_FxUQy9-x8s33lJFEraYvs",
    videos:[
      {id:"v1",title:"Sporthub UGC - V1",label:"ספורט · UGC",thumb:"🏋️",driveId:null,localFile:"Sporthub_UGC1_V1__Marly_.mp4"},
      {id:"v2",title:"ראיון רחוב",label:"Street Interview · UGC",thumb:"🎤",driveId:null,localFile:"ראיון_רחוב_-lapoedagar.mp4"},
      {id:"v3",title:"סרטון 3",label:"UGC · Creative",thumb:"🎬",driveId:null,localFile:"3.mp4"},
    ],
  },
];

/* ── 7 AI AVATAR PERSONAS ── */
const AI_CREATORS=[
  {
    id:"ariel",gender:"male",
    name:"אריאל",age:"30",style:"ספורטיבי-קז'ואל",
    accent:"ישראלי",niche:"בריאות · ספורט · גאדג'טים",
    photo:"https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113642_f230d8a1-fe0d-4ce9-9913-d16f847d5651.png",
    gallery:[
      "https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113642_f230d8a1-fe0d-4ce9-9913-d16f847d5651.png",
    ],
    prompt:"Professional portrait photo of Israeli man in his early 30s, short dark hair, light stubble, warm friendly smile, wearing casual navy blue t-shirt, natural studio lighting, white background, photorealistic UGC creator",
    color:"#3b82f6",
    useCases:["מוצרי בריאות","ציוד ספורט","גאדג'טים טכנולוגיים"],
    bestFor:"Hook אמינותי, ביקורת מוצר",
  },
  {
    id:"yonatan",gender:"male",
    name:"יונתן",age:"26",style:"Creative-Casual",
    accent:"ישראלי",niche:"טכנולוגיה · לייפסטייל",
    photo:"https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113523_1160e7ca-2030-4817-9557-923bd45fefcc.png",
    gallery:[
      "https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113523_1160e7ca-2030-4817-9557-923bd45fefcc.png",
    ],
    prompt:"Professional portrait photo of Israeli man in his mid 20s, curly hair, friendly confident expression, wearing white button-up shirt, clean natural background, photorealistic, lifestyle influencer look",
    color:"#8b5cf6",
    useCases:["מוצרי טכנולוגיה","אביזרים","לייפסטייל"],
    bestFor:"סרטוני טיקטוק, Trendy Hook",
  },
  {
    id:"amir",gender:"male",
    name:"אמיר",age:"38",style:"Professional",
    accent:"ישראלי",niche:"בית · רכב · כלים",
    photo:"https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113529_80ab1692-6ca7-413d-8e3a-e46280f9545e.png",
    gallery:[
      "https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113529_80ab1692-6ca7-413d-8e3a-e46280f9545e.png",
    ],
    prompt:"Professional portrait photo of Middle Eastern man in his late 30s, athletic build, clean shaved, serious professional expression, wearing dark grey polo shirt, soft studio lighting, photorealistic UGC creator",
    color:"#10b981",
    useCases:["מוצרי בית","רכב","כלים מקצועיים"],
    bestFor:"מודעות Testimonial, תוצאות מוכחות",
  },
  {
    id:"niv",gender:"male",
    name:"ניב",age:"23",style:"Street · Urban",
    accent:"ישראלי",niche:"ביגוד · אקססוריז · TikTok",
    photo:"https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113534_fea5c9f9-be10-422b-8337-61f1d9dd9f0e.png",
    gallery:[
      "https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113534_fea5c9f9-be10-422b-8337-61f1d9dd9f0e.png",
    ],
    prompt:"Professional portrait photo of young Israeli man early 20s, streetwear casual style, baseball cap, confident smirk, urban background slightly blurred, photorealistic, TikTok UGC creator vibe",
    color:"#f59e0b",
    useCases:["ביגוד","אקססוריז","מוצרי TikTok"],
    bestFor:"ויראל Hook, Gen-Z קהל",
  },
  {
    id:"mia",gender:"female",
    name:"מיה",age:"27",style:"Beauty · Lifestyle",
    accent:"ישראלית",niche:"יופי · תזונה · לייפסטייל",
    photo:"https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113539_20bfa24a-d8c3-40c5-8204-3a4d31aa8524.png",
    gallery:[
      "https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113539_20bfa24a-d8c3-40c5-8204-3a4d31aa8524.png",
    ],
    prompt:"Professional portrait photo of young Israeli woman late 20s, long dark wavy hair, natural makeup, bright smile, wearing beige crop top, white clean background, photorealistic beauty and lifestyle UGC creator",
    color:"#ec4899",
    useCases:["מוצרי יופי","תזונה","לייפסטייל נשי"],
    bestFor:"Before/After, Testimonial רגשי",
  },
  {
    id:"shira",gender:"female",
    name:"שירה",age:"32",style:"Professional · Trustworthy",
    accent:"ישראלית",niche:"בריאות · תוספים · בית",
    photo:"https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113544_507b75eb-2d37-4932-9519-8f1be36fe122.png",
    gallery:[
      "https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113544_507b75eb-2d37-4932-9519-8f1be36fe122.png",
    ],
    prompt:"Professional portrait photo of Israeli woman early 30s, professional confident look, straight brown hair shoulder length, minimal makeup, wearing structured blazer, soft neutral background, photorealistic, professional UGC content creator",
    color:"#0ea5e9",
    useCases:["מוצרי בריאות","תוספים","ציוד בית"],
    bestFor:"VSL, Expert Hook, אמינות גבוהה",
  },
  {
    id:"noa",gender:"female",
    name:"נועה",age:"22",style:"Trendy · Playful",
    accent:"ישראלית",niche:"אופנה · יופי · TikTok",
    photo:"https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113550_1f454e91-e376-4a70-8bdb-dc8c6144a93b.png",
    gallery:[
      "https://d8j0ntlcm91z4.cloudfront.net/user_38GsnL6mL5R9kZn0sNGOBjl94Js/hf_20260507_113550_1f454e91-e376-4a70-8bdb-dc8c6144a93b.png",
    ],
    prompt:"Professional portrait photo of young Israeli woman early 20s, playful expression, blonde highlighted hair, trendy casual outfit pastel colors, natural outdoor soft bokeh background, photorealistic, social media influencer UGC creator",
    color:"#f97316",
    useCases:["אופנה","יופי","מוצרי Gen-Z"],
    bestFor:"TikTok Trend Hook, Relatable Content",
  },
];

function VideoCarousel({videos,driveFolder}){
  const [idx,setIdx]=useState(0);
  const [playing,setPlaying]=useState(false);
  const vid=videos[idx];
  const prev=()=>{setIdx(i=>(i-1+videos.length)%videos.length);setPlaying(false);};
  const next=()=>{setIdx(i=>(i+1)%videos.length);setPlaying(false);};
  return(
    <div style={{background:C.card2,border:`1px solid ${C.brd}`,borderRadius:14,overflow:"hidden"}}>
      {/* Header */}
      <div style={{padding:"12px 16px",borderBottom:`1px solid ${C.brd}`,display:"flex",alignItems:"center",gap:8}}>
        <Film size={14} color={C.gold}/>
        <span style={{fontSize:13,fontWeight:600,color:C.txt}}>תיק עבודות</span>
        <span style={{fontSize:11,color:C.muted,marginRight:4}}>{idx+1}/{videos.length}</span>
        <a href={`https://drive.google.com/drive/folders/${driveFolder}`} target="_blank" rel="noreferrer"
          style={{marginRight:"auto",fontSize:11,color:C.gold,display:"flex",alignItems:"center",gap:4,textDecoration:"none"}}>
          <ExternalLink size={11}/>כל הסרטונים ב-Drive
        </a>
      </div>

      {/* Main video area */}
      <div style={{position:"relative",background:"#000",minHeight:240}}>
        {!playing?(
          /* Thumbnail / Preview */
          <div style={{height:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,background:"linear-gradient(135deg,#0d0d1a,#1a1a2e)",position:"relative"}}>
            <div style={{fontSize:48}}>{vid.thumb}</div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:4}}>{vid.title}</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,.5)"}}>{vid.label}</div>
            </div>
            <button onClick={()=>setPlaying(true)}
              style={{width:56,height:56,borderRadius:"50%",background:C.gold,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 20px rgba(245,166,35,.5)"}}>
              <Play size={22} color="#000" fill="#000"/>
            </button>
          </div>
        ):(
          /* Video player - from Google Drive folder embed */
          <div style={{height:280,background:"#000",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <iframe
              src={`https://drive.google.com/embeddedfolderview?id=${driveFolder}#grid`}
              style={{width:"100%",height:"100%",border:"none"}}
              allow="autoplay"
              title={vid.title}
            />
          </div>
        )}

        {/* Nav arrows */}
        {videos.length>1&&(
          <>
            <button onClick={prev} style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,.6)",border:"none",borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff"}}>
              <ChevronRight size={18}/>
            </button>
            <button onClick={next} style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,.6)",border:"none",borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff"}}>
              <ArrowLeft size={18}/>
            </button>
          </>
        )}
      </div>

      {/* Dots + thumbnails row */}
      <div style={{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
        {videos.map((v,i)=>(
          <button key={v.id} onClick={()=>{setIdx(i);setPlaying(false);}}
            style={{background:C.card,border:`2px solid ${i===idx?C.gold:C.brd}`,borderRadius:10,padding:"8px 14px",cursor:"pointer",display:"flex",alignItems:"center",gap:6,transition:"all .15s"}}>
            <span style={{fontSize:16}}>{v.thumb}</span>
            <span style={{fontSize:11,color:i===idx?C.gold:C.muted,fontWeight:i===idx?700:400}}>{v.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function AiAvatarCard({cr,onOpen}){
  return(
    <div className="sc hc" onClick={()=>onOpen(cr)}
      style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:16,overflow:"hidden",cursor:"pointer",transition:"all .2s"}}>
      {/* Photo */}
      <div style={{position:"relative",height:200,background:cr.color+"18",overflow:"hidden"}}>
        <img src={cr.photo} alt={cr.name}
          style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}
          onError={e=>{e.target.style.display="none";}}/>
        <div style={{position:"absolute",top:8,right:8,background:cr.gender==="female"?"#ec489960":"#3b82f660",backdropFilter:"blur(8px)",border:`1px solid ${cr.color}60`,borderRadius:20,padding:"3px 9px",fontSize:10,fontWeight:700,color:"#fff"}}>
          {cr.gender==="female"?"נשי":"גברי"}
        </div>
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:60,background:"linear-gradient(transparent,rgba(0,0,0,.7))"}}/>
        <div style={{position:"absolute",bottom:10,right:12}}>
          <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>{cr.name}</div>
          <div style={{fontSize:11,color:"rgba(255,255,255,.7)"}}>{cr.age} שנים · {cr.style}</div>
        </div>
      </div>
      {/* Info */}
      <div style={{padding:"12px 14px",display:"flex",flexDirection:"column",gap:8}}>
        <div style={{fontSize:11,color:cr.color,fontWeight:600}}>{cr.niche}</div>
        <div style={{fontSize:12,color:C.sub,lineHeight:1.5}}><span style={{fontWeight:600,color:C.txt}}>הכי מתאים ל: </span>{cr.bestFor}</div>
        <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
          {cr.useCases.map(u=>(
            <span key={u} style={{background:cr.color+"15",border:`1px solid ${cr.color}30`,color:cr.color,borderRadius:20,padding:"2px 8px",fontSize:10}}>{u}</span>
          ))}
        </div>
        <div style={{paddingTop:6,borderTop:`1px solid ${C.brd}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <span style={{fontSize:11,color:C.muted,display:"flex",alignItems:"center",gap:4}}><Image size={10}/>לחץ לגלריה + פרומפט</span>
          <ChevronRight size={14} color={C.muted}/>
        </div>
      </div>
    </div>
  );
}

function AiAvatarModal({cr,onClose}){
  const [copied,setCopied]=useState(false);
  if(!cr)return null;
  const copyPrompt=()=>{
    navigator.clipboard?.writeText(cr.prompt).catch(()=>{});
    setCopied(true);setTimeout(()=>setCopied(false),2000);
  };
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.8)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={onClose}>
      <div style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:20,maxWidth:520,width:"100%",maxHeight:"88vh",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
        {/* Header */}
        <div style={{padding:"16px 18px",borderBottom:`1px solid ${C.brd}`,display:"flex",alignItems:"center",gap:12}}>
          <img src={cr.photo} alt={cr.name} style={{width:44,height:44,borderRadius:"50%",objectFit:"cover",objectPosition:"top",border:`2px solid ${cr.color}`}}/>
          <div style={{flex:1}}>
            <div style={{fontSize:15,fontWeight:700,color:C.txt}}>{cr.name} · {cr.age}</div>
            <div style={{fontSize:11,color:cr.color,fontWeight:600}}>{cr.niche}</div>
          </div>
          <button onClick={onClose} style={{background:C.card2,border:`1px solid ${C.brd}`,borderRadius:8,width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:C.muted}}>
            <X size={13}/>
          </button>
        </div>

        <div style={{padding:"16px 18px",display:"flex",flexDirection:"column",gap:14}}>
          {/* Gallery */}
          <div>
            <div style={{fontSize:11,fontWeight:700,color:C.sub,letterSpacing:1,marginBottom:8}}>GALLERY - לחץ להורדה</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:8}}>
              {cr.gallery.map((img,i)=>(
                <a key={i} href={img} download={`${cr.name}_${i+1}.png`} target="_blank" rel="noreferrer"
                  style={{display:"block",borderRadius:10,overflow:"hidden",border:`1px solid ${C.brd}`,position:"relative",aspectRatio:"1"}}>
                  <img src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}}/>
                  <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0)",transition:"background .2s",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div style={{background:"rgba(0,0,0,.6)",borderRadius:20,padding:"4px 8px",fontSize:10,color:"#fff",opacity:0}}>הורד</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Use cases */}
          <div style={{background:C.card2,border:`1px solid ${C.brd}`,borderRadius:12,padding:"12px 14px"}}>
            <div style={{fontSize:11,fontWeight:700,color:C.sub,letterSpacing:1,marginBottom:6}}>הכי מתאים ל</div>
            <div style={{fontSize:13,fontWeight:600,color:C.txt,marginBottom:6}}>{cr.bestFor}</div>
            <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
              {cr.useCases.map(u=>(
                <span key={u} style={{background:cr.color+"18",border:`1px solid ${cr.color}40`,color:cr.color,borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:500}}>{u}</span>
              ))}
            </div>
          </div>

          {/* Prompt copy box */}
          <div style={{background:C.card2,border:`1px solid ${C.gold}40`,borderRadius:12,overflow:"hidden"}}>
            <div style={{padding:"10px 14px",borderBottom:`1px solid ${C.brd}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <span style={{fontSize:11,fontWeight:700,color:C.gold,letterSpacing:1}}>PROMPT ליצירת הדמות</span>
              <button onClick={copyPrompt}
                style={{background:copied?C.green:C.gold,border:"none",borderRadius:8,padding:"5px 12px",cursor:"pointer",fontSize:11,fontWeight:700,color:"#000",display:"flex",alignItems:"center",gap:5,transition:"all .2s"}}>
                {copied?<><Check size={11}/>הועתק!</>:<><Copy size={11}/>העתק</>}
              </button>
            </div>
            <div style={{padding:"12px 14px",fontSize:12,color:C.sub,lineHeight:1.7,fontFamily:"monospace",direction:"ltr",textAlign:"left"}}>
              {cr.prompt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IsraeliCreatorCard({creator,onClick}){
  return(
    <div className="sc hc" onClick={onClick}
      style={{background:C.card,border:`1px solid ${C.brd}`,borderRadius:16,padding:"20px",cursor:"pointer",transition:"all .2s"}}>
      <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
        <div style={{width:52,height:52,borderRadius:"50%",background:`linear-gradient(135deg,${creator.avatarColor},${creator.avatarColor}80)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:800,color:"#fff",flexShrink:0}}>
          {creator.avatar}
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:15,fontWeight:700,color:C.txt}}>{creator.name}</div>
          <div style={{fontSize:12,color:C.muted}}>{creator.handle}</div>
          <div style={{fontSize:11,color:creator.avatarColor,fontWeight:600,marginTop:2}}>{creator.niche}</div>
        </div>
        <ChevronRight size={16} color={C.muted}/>
      </div>
      <p style={{fontSize:13,color:C.sub,lineHeight:1.6,margin:"0 0 12px"}}>{creator.bio}</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:12}}>
        {creator.tags.map(t=>(
          <span key={t} style={{background:C.card2,border:`1px solid ${C.brd}`,color:C.sub,borderRadius:20,padding:"2px 9px",fontSize:11}}>{t}</span>
        ))}
      </div>
      <div style={{display:"flex",gap:12,paddingTop:10,borderTop:`1px solid ${C.brd}`}}>
        <div style={{textAlign:"center",flex:1}}>
          <div style={{fontSize:16,fontWeight:800,color:C.gold}}>{creator.stats.videos}</div>
          <div style={{fontSize:10,color:C.muted}}>סרטונים</div>
        </div>
        <div style={{textAlign:"center",flex:1}}>
          <div style={{fontSize:16,fontWeight:800,color:C.blue}}>{creator.stats.avgTurn}</div>
          <div style={{fontSize:10,color:C.muted}}>זמן מסירה</div>
        </div>
        <div style={{textAlign:"center",flex:1}}>
          <div style={{fontSize:11,fontWeight:600,color:C.sub}}>{creator.stats.formats}</div>
          <div style={{fontSize:10,color:C.muted}}>פורמטים</div>
        </div>
      </div>
    </div>
  );
}

function ContentCreatorsP(){
  const [tab,setTab]=useState("israeli");
  const [selectedCreator,setSelectedCreator]=useState(null);
  const [aiModal,setAiModal]=useState(null);

  if(selectedCreator){
    const cr=ISRAELI_CREATORS.find(c=>c.id===selectedCreator);
    return(
      <div style={{maxWidth:820,margin:"0 auto"}}>
        <button onClick={()=>setSelectedCreator(null)}
          style={{background:"none",border:"none",cursor:"pointer",color:C.gold,fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:6,marginBottom:20,padding:0}}>
          <ArrowLeft size={14}/>חזור ליוצרים
        </button>
        {/* Profile header */}
        <div style={{background:`linear-gradient(135deg,${C.card},${C.card2})`,border:`1px solid ${C.brd}`,borderRadius:18,padding:"24px 26px",marginBottom:18,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${cr.avatarColor},${cr.avatarColor}60)`}}/>
          <div style={{display:"flex",alignItems:"flex-start",gap:18,flexWrap:"wrap"}}>
            <div style={{width:72,height:72,borderRadius:"50%",background:`linear-gradient(135deg,${cr.avatarColor},${cr.avatarColor}80)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,fontWeight:800,color:"#fff",flexShrink:0}}>
              {cr.avatar}
            </div>
            <div style={{flex:1,minWidth:200}}>
              <h2 style={{fontSize:22,fontWeight:800,color:C.txt,margin:"0 0 3px"}}>{cr.name}</h2>
              <div style={{fontSize:12,color:C.muted,marginBottom:8}}>{cr.handle} · {cr.niche}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                {cr.tags.map(t=>(
                  <span key={t} style={{background:cr.avatarColor+"20",border:`1px solid ${cr.avatarColor}50`,color:cr.avatarColor,borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:600}}>{t}</span>
                ))}
              </div>
            </div>
            {/* WhatsApp contact */}
            <a href={`https://wa.me/${cr.whatsapp.replace(/[^0-9]/g,"")}`} target="_blank" rel="noreferrer"
              style={{background:"#25D366",borderRadius:10,padding:"9px 18px",fontSize:13,fontWeight:700,color:"#fff",textDecoration:"none",display:"flex",alignItems:"center",gap:7,flexShrink:0}}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              שלח הודעה
            </a>
          </div>
          <p style={{fontSize:14,color:C.sub,lineHeight:1.65,margin:"16px 0 0"}}>{cr.bio}</p>
        </div>
        {/* Stats */}
        <div style={{display:"flex",gap:10,marginBottom:18}}>
          {[
            {label:"סרטונים",value:cr.stats.videos,color:C.gold},
            {label:"זמן מסירה",value:cr.stats.avgTurn,color:C.blue},
            {label:"פורמטים",value:cr.stats.formats,color:C.green},
          ].map((s,i)=>(
            <div key={i} style={{flex:1,background:C.card,border:`1px solid ${C.brd}`,borderRadius:12,padding:"14px 16px",textAlign:"center"}}>
              <div style={{fontSize:15,fontWeight:800,color:s.color,marginBottom:3}}>{s.value}</div>
              <div style={{fontSize:10,color:C.muted}}>{s.label}</div>
            </div>
          ))}
        </div>
        {/* Video carousel */}
        {cr.videos&&cr.videos.length>0&&<VideoCarousel videos={cr.videos} driveFolder={cr.driveFolder}/>}
      </div>
    );
  }

  return(
    <div style={{maxWidth:920,margin:"0 auto"}}>
      {/* Tab toggle */}
      <div style={{display:"flex",gap:0,background:C.card2,border:`1px solid ${C.brd}`,borderRadius:14,padding:4,marginBottom:22,width:"fit-content"}}>
        {[
          {id:"israeli",label:"יוצרים ישראלים",Icon:Users},
          {id:"ai",label:"דמויות AI",Icon:Cpu},
        ].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)}
            style={{background:tab===t.id?C.gold:"transparent",border:"none",borderRadius:10,padding:"9px 20px",cursor:"pointer",fontSize:13,fontWeight:700,color:tab===t.id?"#000":C.sub,display:"flex",alignItems:"center",gap:7,transition:"all .2s"}}>
            <t.Icon size={13}/>{t.label}
          </button>
        ))}
      </div>

      {tab==="israeli"?(
        <div>
          <div style={{marginBottom:16}}>
            <h2 style={{fontSize:18,fontWeight:800,color:C.txt,margin:"0 0 4px"}}>יוצרים ישראלים</h2>
            <p style={{fontSize:13,color:C.muted,margin:0}}>יוצרי UGC וקריאייטיב. לחץ על יוצר לצפייה בתיק עבודות ויצירת קשר ישיר.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:14}}>
            {ISRAELI_CREATORS.map(cr=>(
              <IsraeliCreatorCard key={cr.id} creator={cr} onClick={()=>setSelectedCreator(cr.id)}/>
            ))}
            <div style={{background:C.card,border:`2px dashed ${C.brd}`,borderRadius:16,padding:"28px 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,minHeight:180}}>
              <div style={{width:44,height:44,borderRadius:"50%",background:C.card2,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Plus size={20} color={C.muted}/>
              </div>
              <div style={{fontSize:14,fontWeight:600,color:C.muted,textAlign:"center"}}>יוצר הבא בדרך</div>
              <div style={{fontSize:11,color:C.brd,textAlign:"center"}}>יוצרים נוספים יתווספו בקרוב</div>
            </div>
          </div>
        </div>
      ):(
        <div>
          <div style={{marginBottom:16}}>
            <h2 style={{fontSize:18,fontWeight:800,color:C.txt,margin:"0 0 4px"}}>דמויות AI מוכנות לשימוש</h2>
            <p style={{fontSize:13,color:C.muted,margin:0}}>7 דמויות AI שנוצרו עבורך. לחץ על דמות לצפייה בגלריה, העתקת תמונות ופרומפט ליצירה מחדש.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:14}}>
            {AI_CREATORS.map(cr=><AiAvatarCard key={cr.id} cr={cr} onOpen={setAiModal}/>)}
          </div>
        </div>
      )}
      {aiModal&&<AiAvatarModal cr={aiModal} onClose={()=>setAiModal(null)}/>}
    </div>
  );
}

/* ── ROOT ───────────────────────────────────────────────── */
export default function App(){
  const [_theme,_setTheme]=useState(()=>{try{return localStorage.getItem("ak_theme")||"dark"}catch{return"dark"}});
  const _isDark=_theme==="dark";
  // sync C with current theme on every render
  Object.assign(C,THEMES[_theme]||THEMES.dark);
  useEffect(()=>{
    try{localStorage.setItem("ak_theme",_theme);}catch{}
    document.body.style.background=C.bg;
    document.body.style.color=C.txt;
  },[_theme]);
  const _toggle=()=>_setTheme(t=>t==="dark"?"light":"dark");

  const [userInfo,setUserInfo]=useState(null);
  const userName=userInfo?.name||null;
  const userCohort=userInfo?.cohort||null;
  const [section,setSection]=useState("home");
  const [watched,setWatched]=useState(new Set());
  const [done,setDone]=useState(new Set());
  const [kai,setKai]=useState(false);
  const [notifOpen,setNotifOpen]=useState(false);
  const [readIds,setReadIds]=useState(new Set());
  const unread = NOTIFICATIONS.filter(n=>!readIds.has(n.id)).length;
  const markRead = id=>setReadIds(s=>{const n=new Set(s);n.add(id);return n;});

  const handleLogout=()=>{setUserInfo(null);setSection("home");setWatched(new Set());setDone(new Set());};

  if(!userInfo) return <LoginScreen onLogin={setUserInfo}/>;

  const render=()=>{
    switch(section){
      case"home":      return <HomeP      watched={watched} done={done} setSection={setSection}/>;
      case"videos":    return <VideosP    watched={watched} setWatched={setWatched} cohort={userCohort}/>;
      case"prompts":   return <PromptsP/>;
      case"kai":       return <KaiP/>;
      case"guides":    return <GuidesP    done={done} setDone={setDone}/>;
      case"tools":     return <ToolsP/>;
      case"templates": return <TemplatesP/>;
      case"tasks":     return <TasksP/>;
      case"ai4you":    return <AiForYouP userName={userName}/>;
      case"community": return <CommunityP userName={userName}/>;
      case"products":  return <ProductsP/>;
      case"adlib":     return <AdsLibraryP/>;
      case"creators":  return <ContentCreatorsP/>;
      case"profile":   return <ProfileP userName={userName} cohort={userCohort} watched={watched} done={done} setSection={setSection} onLogout={handleLogout}/>;
      default:         return null;
    }
  };

  return(
    <div dir="rtl" style={{display:"flex",height:"100vh",background:C.bg,fontFamily:"'Segoe UI',system-ui,sans-serif",color:C.txt,overflow:"hidden"}}>
      <style>{css}</style>

      {/* SIDEBAR */}
      <aside style={{width:188,background:C.side,borderLeft:`1px solid ${C.brd}`,display:"flex",flexDirection:"column",flexShrink:0}}>
        <div style={{padding:"13px 14px 11px",borderBottom:`1px solid ${C.brd}`,display:"flex",alignItems:"center",gap:8}}>
          <img src={LOGO_SRC} alt="logo" style={{width:34,height:34,objectFit:"contain"}}/>
          <div style={{flex:1}}>
            <div style={{fontSize:10,fontWeight:800,color:C.gold,letterSpacing:.5}}>ACADEMY</div>
            <div style={{fontSize:9,color:C.muted}}>Kaiel Kayam</div>
          </div>
          <button onClick={_toggle} title={_isDark?"מצב בהיר":"מצב כהה"}
            style={{background:_isDark?"#1e1e38":"#e8e8f0",border:"none",borderRadius:20,padding:"5px 9px",cursor:"pointer",display:"flex",alignItems:"center",gap:5,color:_isDark?"#a0a0c8":"#555570",fontSize:11,transition:"all .25s",flexShrink:0}}
            onMouseEnter={e=>{e.currentTarget.style.background=_isDark?"#2a2a4a":"#d8d8ee";}}
            onMouseLeave={e=>{e.currentTarget.style.background=_isDark?"#1e1e38":"#e8e8f0";}}>
            {_isDark
              ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              : <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
            {_isDark?"☀️":"🌙"}
          </button>
        </div>
        <nav style={{flex:1,padding:"7px 6px",overflowY:"auto"}}>
          {NAV.map(n=>{
            const a=section===n.id;
            const isAI=n.id==="ai4you";
            return(
              <button key={n.id} onClick={()=>setSection(n.id)} className="ni"
                style={{width:"100%",background:a?(isAI?C.purp+"22":C.navBg):"transparent",border:"none",borderRight:a?`2px solid ${isAI?C.purp:C.navBrd}`:"2px solid transparent",borderRadius:"8px 0 0 8px",padding:"9px 10px",cursor:"pointer",display:"flex",alignItems:"center",gap:8,color:a?(isAI?C.purp:C.navBrd):C.txt,fontSize:13,fontWeight:a?600:400,transition:"all .15s",marginBottom:1,textAlign:"right"}}>
                <n.Icon size={14}/>{n.label}
                {n.id==="kai"&&<span style={{marginRight:"auto",width:6,height:6,borderRadius:"50%",background:C.green}}/>}
              </button>
            );
          })}
        </nav>
        {/* Bell */}
        <div style={{padding:"10px 10px",borderTop:`1px solid ${C.brd}`}}>
          <button onClick={()=>setSection("profile")} className="ni"
            style={{width:"100%",background:section==="profile"?C.navBg:"transparent",border:"none",borderRight:section==="profile"?`2px solid ${C.navBrd}`:"2px solid transparent",borderRadius:"8px 0 0 8px",padding:"9px 10px",cursor:"pointer",display:"flex",alignItems:"center",gap:8,color:section==="profile"?C.navBrd:C.txt,fontSize:13,fontWeight:section==="profile"?600:400,transition:"all .15s",marginBottom:6,textAlign:"right"}}>
            <User size={14}/>הפרופיל שלי
          </button>
          <button onClick={()=>setNotifOpen(o=>!o)} className="ni"
            style={{width:"100%",background:notifOpen?C.gold+"18":"transparent",border:"none",borderRadius:9,padding:"9px 10px",cursor:"pointer",display:"flex",alignItems:"center",gap:8,color:unread>0?C.gold:C.txt,fontSize:13,transition:"all .15s",position:"relative"}}>
            <div style={{position:"relative"}}>
              <Bell size={14}/>
              {unread>0&&(
                <div style={{position:"absolute",top:-5,right:-5,width:14,height:14,borderRadius:"50%",background:C.red,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:"#fff",border:`1.5px solid ${C.side}`,animation:"pulse 2s infinite"}}>
                  {unread}
                </div>
              )}
            </div>
            עדכונים
            {unread>0&&<span style={{marginRight:"auto",background:C.red,color:"#fff",borderRadius:20,padding:"1px 6px",fontSize:10,fontWeight:700}}>{unread}</span>}
          </button>
        </div>
      </aside>
      {notifOpen&&<NotifPanel onClose={()=>setNotifOpen(false)} onRead={markRead} readIds={readIds}/>}

      {/* MAIN */}
      <main style={{flex:1,overflowY:"auto",padding:"24px 28px"}}>
        {render()}
      </main>

      {/* FLOATING KAI */}
      {section!=="kai"&&(
        kai
          ?<MiniKai onClose={()=>setKai(false)} onExpand={()=>{setKai(false);setSection("kai");}}/>
          :<button onClick={()=>setKai(true)}
              style={{position:"fixed",bottom:22,left:22,width:52,height:52,borderRadius:"50%",background:`linear-gradient(135deg,${C.gold},${C.blue})`,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:900,boxShadow:`0 4px 18px ${C.gold}50`,transition:"transform .2s",animation:"glow 3s ease-in-out infinite"}}
              onMouseEnter={e=>e.currentTarget.style.transform="scale(1.12)"}
              onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
              <Bot size={20} color="#fff"/>
            </button>
      )}
    </div>
  );
}
