'use client';

import React from "react";

// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({ dark = false, time = '9:41' }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      display: 'flex', gap: 154, alignItems: 'center', justifyContent: 'center',
      padding: '21px 24px 19px', boxSizing: 'border-box',
      position: 'relative', zIndex: 20, width: '100%',
    }}>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 1.5 }}>
        <span style={{
          fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 590,
          fontSize: 17, lineHeight: '22px', color: c,
        }}>{time}</span>
      </div>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, paddingTop: 1, paddingRight: 1 }}>
        <svg width="19" height="12" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/>
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c}/>
          <circle cx="8.5" cy="10.5" r="1.5" fill={c}/>
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.35" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill={c}/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={c} fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({ children, dark = false, style = {} }) {
  return (
    <div style={{
      height: 44, minWidth: 44, borderRadius: 9999,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: dark
        ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)'
        : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style,
    }}>
      {/* blur + tint */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 9999,
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)',
      }} />
      {/* shine */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 9999,
        boxShadow: dark
          ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)'
          : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
        border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', padding: '0 4px' }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({ title = 'Title', dark = false, trailingIcon = true }) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = (content) => (
    <IOSGlassPill dark={dark}>
      <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {content}
      </div>
    </IOSGlassPill>
  );
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 10,
      paddingTop: 62, paddingBottom: 10, position: 'relative', zIndex: 5,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px',
      }}>
        {/* back chevron */}
        {pillIcon(
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ marginLeft: -1 }}>
            <path d="M10 2L2 10l8 8" stroke={muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {/* trailing ellipsis */}
        {trailingIcon && pillIcon(
          <svg width="22" height="6" viewBox="0 0 22 6">
            <circle cx="3" cy="3" r="2.5" fill={muted}/>
            <circle cx="11" cy="3" r="2.5" fill={muted}/>
            <circle cx="19" cy="3" r="2.5" fill={muted}/>
          </svg>
        )}
      </div>
      {/* large title */}
      <div style={{
        padding: '0 16px',
        fontFamily: '-apple-system, system-ui',
        fontSize: 34, fontWeight: 700, lineHeight: '41px',
        color: text, letterSpacing: 0.4,
      }}>{title}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({ title, detail, icon, chevron = true, isLast = false, dark = false }) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', minHeight: 52,
      padding: '0 16px', position: 'relative',
      fontFamily: '-apple-system, system-ui', fontSize: 17,
      letterSpacing: -0.43,
    }}>
      {icon && (
        <div style={{
          width: 30, height: 30, borderRadius: 7, background: icon,
          marginRight: 12, flexShrink: 0,
        }} />
      )}
      <div style={{ flex: 1, color: text }}>{title}</div>
      {detail && <span style={{ color: sec, marginRight: 6 }}>{detail}</span>}
      {chevron && (
        <svg width="8" height="14" viewBox="0 0 8 14" style={{ flexShrink: 0 }}>
          <path d="M1 1l6 6-6 6" stroke={ter} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {!isLast && (
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          left: icon ? 58 : 16, height: 0.5, background: sep,
        }} />
      )}
    </div>
  );
}

function IOSList({ header, children, dark = false }) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return (
    <div>
      {header && (
        <div style={{
          fontFamily: '-apple-system, system-ui', fontSize: 13,
          color: hc, textTransform: 'uppercase',
          padding: '8px 36px 6px', letterSpacing: -0.08,
        }}>{header}</div>
      )}
      <div style={{
        background: bg, borderRadius: 26,
        margin: '0 16px', overflow: 'hidden',
      }}>{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children, width = 402, height = 874, dark = false,
  title, keyboard = false,
}) {
  return (
    <div style={{
      width, height, borderRadius: 48, overflow: 'hidden',
      position: 'relative', background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50,
      }} />
      {/* status bar (absolute) */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <IOSStatusBar dark={dark} />
      </div>
      {/* nav + content */}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {title !== undefined && <IOSNavBar title={title} dark={dark} />}
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
        {keyboard && <IOSKeyboard dark={dark} />}
      </div>
      {/* home indicator — always on top */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60,
        height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
        paddingBottom: 8, pointerEvents: 'none',
      }}>
        <div style={{
          width: 139, height: 5, borderRadius: 100,
          background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)',
        }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({ dark = false }) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: <svg width="19" height="17" viewBox="0 0 19 17"><path d="M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z" fill={glyph}/></svg>,
    del: <svg width="23" height="17" viewBox="0 0 23 17"><path d="M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z" fill="none" stroke={glyph} strokeWidth="1.6" strokeLinejoin="round"/><path d="M10 5l7 7M17 5l-7 7" stroke={glyph} strokeWidth="1.6" strokeLinecap="round"/></svg>,
    ret: <svg width="20" height="14" viewBox="0 0 20 14"><path d="M18 1v6H4m0 0l4-4M4 7l4 4" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  };

  const key = (content, { w, flex, ret, fs = 25, k } = {}) => (
    <div key={k} style={{
      height: 42, borderRadius: 8.5,
      flex: flex ? 1 : undefined, width: w, minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs, fontWeight: 458, color: ret ? '#fff' : glyph,
    }}>{content}</div>
  );

  const row = (keys, pad = 0) => (
    <div style={{ display: 'flex', gap: 6.5, justifyContent: 'center', padding: `0 ${pad}px` }}>
      {keys.map(l => key(l, { flex: true, k: l }))}
    </div>
  );

  return (
    <div style={{
      position: 'relative', zIndex: 15, borderRadius: 27, overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      boxShadow: dark
        ? '0 -2px 20px rgba(0,0,0,0.09)'
        : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)',
    }}>
      {/* liquid glass bg — same recipe as nav pills */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 27,
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 27,
        boxShadow: dark
          ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)'
          : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
        border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
        pointerEvents: 'none',
      }} />

      {/* autocorrect bar */}
      <div style={{
        display: 'flex', gap: 20, alignItems: 'center',
        padding: '8px 22px 13px', width: '100%', boxSizing: 'border-box',
        position: 'relative',
      }}>
        {['"The"', 'the', 'to'].map((w, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ width: 1, height: 25, background: '#ccc', opacity: 0.3 }} />}
            <div style={{
              flex: 1, textAlign: 'center',
              fontFamily: '-apple-system, system-ui', fontSize: 17,
              color: sugg, letterSpacing: -0.43, lineHeight: '22px',
            }}>{w}</div>
          </React.Fragment>
        ))}
      </div>

      {/* key layout */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 13,
        padding: '0 6.5px', width: '100%', boxSizing: 'border-box',
        position: 'relative',
      }}>
        {row(['q','w','e','r','t','y','u','i','o','p'])}
        {row(['a','s','d','f','g','h','j','k','l'], 20)}
        <div style={{ display: 'flex', gap: 14.25, alignItems: 'center' }}>
          {key(icons.shift, { w: 45, k: 'shift' })}
          <div style={{ display: 'flex', gap: 6.5, flex: 1 }}>
            {['z','x','c','v','b','n','m'].map(l => key(l, { flex: true, k: l }))}
          </div>
          {key(icons.del, { w: 45, k: 'del' })}
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {key('ABC', { w: 92.25, fs: 18, k: 'abc' })}
          {key('', { flex: true, k: 'space' })}
          {key(icons.ret, { w: 92.25, ret: true, k: 'ret' })}
        </div>
      </div>

      {/* bottom spacer (emoji+mic area, icons omitted) */}
      <div style={{ height: 56, width: '100%', position: 'relative' }} />
    </div>
  );
}

typeof window !== "undefined" && Object.assign(window, {
  IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard,
});

// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({ title = 'Tweaks', noDeckControls = false, children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(
    () => typeof document !== 'undefined' && !!document.querySelector('deck-stage'),
    [],
  );
  // deck-stage enables its rail in connectedCallback, but this panel can
  // mount before that element has upgraded. The initial read catches the
  // common case; the listener covers mounting first. (Older deck-stage.js
  // copies still wait for the host's __omelette_rail_enabled postMessage —
  // same listener handles those.)
  const [railEnabled, setRailEnabled] = React.useState(
    () => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled,
  );
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = (e) => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try { return localStorage.getItem('deck-stage.railVisible') !== '0'; } catch (e) { return true; }
  });
  const toggleRail = (on) => {
    setRailVisible(on);
    window.postMessage({ type: '__deck_rail_visible', on }, '*');
  };
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" data-noncommentable=""
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">
          {children}
          {hasDeckStage && railEnabled && !noDeckControls && (
            <TweakSection label="Deck">
              <TweakToggle label="Thumbnail rail" value={railVisible} onChange={toggleRail} />
            </TweakSection>
          )}
        </div>
      </div>
    </>
  );
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))} />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'} />
  </svg>
);

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <input type="color" className="twk-swatch" value={value}
               onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
                    aria-checked={on} data-on={on ? '1' : '0'}
                    aria-label={colors.join(', ')} title={colors.join(' · ')}
                    style={{ background: hero }}
                    onClick={() => onChange(o)}>
              {sup.length > 0 && (
                <span>
                  {sup.map((c, j) => <i key={j} style={{ background: c }} />)}
                </span>
              )}
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" className={secondary ? 'twk-btn secondary' : 'twk-btn'}
            onClick={onClick}>{label}</button>
  );
}

typeof window !== "undefined" && Object.assign(window, {
  useTweaks, TweaksPanel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakNumber, TweakColor, TweakButton,
});

// atoms.jsx — fans.market brand-kit primitives

// ── Icon ───────────────────────────────────────────────────────
const Icon = ({ name, size = 22, color = "currentColor", strokeWidth = 2, style }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round",
    style,
  };
  switch (name) {
    case "home": return <svg {...props}><path d="M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2V11z"/></svg>;
    case "home-fill": return <svg {...props} fill={color} stroke="none"><path d="M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2V11z"/></svg>;
    case "live": return <svg {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill={color}/></svg>;
    case "target": return <svg {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={color}/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>;
    case "search": return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>;
    case "user": return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>;
    case "users": return <svg {...props}><circle cx="9" cy="8" r="4"/><path d="M1 20c0-3 3.5-5 8-5s8 2 8 5"/><circle cx="17" cy="6" r="3"/><path d="M23 18c0-2-2-3.5-5-3.5"/></svg>;
    case "wallet": return <svg {...props}><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/></svg>;
    case "play": return <svg {...props} fill={color} stroke="none"><path d="M6 4l14 8-14 8V4z"/></svg>;
    case "plus": return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "info": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>;
    case "bell": return <svg {...props}><path d="M6 8a6 6 0 1112 0c0 7 3 7 3 9H3c0-2 3-2 3-9z"/><path d="M10 21a2 2 0 004 0"/></svg>;
    case "heart": return <svg {...props}><path d="M20.84 4.6a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.07a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.79 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
    case "heart-fill": return <svg {...props} fill={color} stroke="none"><path d="M20.84 4.6a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.07a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.79 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
    case "bookmark": return <svg {...props}><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"/></svg>;
    case "chevron": return <svg {...props}><path d="M9 6l6 6-6 6"/></svg>;
    case "chevron-left": return <svg {...props}><path d="M15 6l-6 6 6 6"/></svg>;
    case "chevron-down": return <svg {...props}><path d="M6 9l6 6 6-6"/></svg>;
    case "trophy": return <svg {...props}><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 11-10 0V4z"/><path d="M17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/></svg>;
    case "tv": return <svg {...props}><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg>;
    case "ticket": return <svg {...props}><path d="M3 8a2 2 0 002-2V5h14v1a2 2 0 002 2v8a2 2 0 00-2 2v1H5v-1a2 2 0 00-2-2V8z"/><path d="M12 6v12" strokeDasharray="2 2"/></svg>;
    case "x": return <svg {...props}><path d="M18 6L6 18M6 6l12 12"/></svg>;
    case "share": return <svg {...props}><path d="M12 3v13M7 8l5-5 5 5M20 21H4"/></svg>;
    case "lock": return <svg {...props}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>;
    case "shield": return <svg {...props}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "spark": return <svg {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case "fire": return <svg {...props}><path d="M12 22c4 0 7-2.7 7-7 0-3.5-3-4-3-8 0 0-3 2-3 6 0-2-2-3-2-5 0 0-3 2-3 7 0 4.3 3 7 4 7z"/></svg>;
    case "fire-fill": return <svg {...props} fill={color} stroke="none"><path d="M12 22c4 0 7-2.7 7-7 0-3.5-3-4-3-8 0 0-3 2-3 6 0-2-2-3-2-5 0 0-3 2-3 7 0 4.3 3 7 4 7z"/></svg>;
    case "lightning": return <svg {...props} fill={color} stroke="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
    case "check": return <svg {...props}><path d="M5 12l5 5 9-11"/></svg>;
    case "arrow-up": return <svg {...props}><path d="M12 19V5M5 12l7-7 7 7"/></svg>;
    case "arrow-down": return <svg {...props}><path d="M12 5v14M5 12l7 7 7-7"/></svg>;
    case "arrow-right": return <svg {...props}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
    case "trend-up": return <svg {...props}><path d="M3 17l6-6 4 4 8-8M21 7h-6M21 7v6"/></svg>;
    case "calendar": return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>;
    case "diamond": return <svg {...props}><path d="M6 3h12l3 6-9 12L3 9l3-6z"/><path d="M3 9h18M12 3v18"/></svg>;
    case "chart": return <svg {...props}><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>;
    case "filter": return <svg {...props}><path d="M3 5h18M6 12h12M10 19h4"/></svg>;
    case "sliders": return <svg {...props}><path d="M4 6h12M4 12h6M4 18h14M16 6h4M14 12h6M22 18h-2"/><circle cx="14" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="20" cy="18" r="2"/></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

// ── Brand mark ────────────────────────────────────────────────
const BrandMark = ({ size = 16, glyphOnly = false, mono = false, style = {} }) => (
  <div className={"brand-mark" + (mono ? " on-light" : "")} style={{ fontSize: size, ...style }}>
    <span className="fm-glyph"/>
    {!glyphOnly && (
      <span className="fm-word" style={{ fontSize: size * 1.15 }}>
        <span className="fm-fans">fans</span><span className="fm-dot">.</span><span className="fm-market">market</span>
      </span>
    )}
  </div>
);

// ── Mascot ────────────────────────────────────────────────────
const Mascot = ({ size = 120, floaty = false, style = {} }) => (
  <div
    className={"mascot" + (floaty ? " floaty" : "")}
    style={{ width: size, height: size * 0.86, ...style }}
  />
);

// ── Inline mascot glyph ───────────────────────────────────────
const Splash = ({ size = 22 }) => (
  <span style={{
    display: "inline-block", width: size, height: size,
    backgroundImage: `url(${(typeof window !== "undefined" && window.__resources?.mascotPng) || "/mascot.png"})`,
    backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
    flexShrink: 0,
  }}/>
);

// ── Sport palettes ────────────────────────────────────────────
const SPORT_PALETTES = {
  basketball: ["#FF6A4D", "#7A1F0E"],
  football:   ["#1E5E3F", "#0A2818"],
  soccer:     ["#4FB755", "#0F3320"],
  cricket:    ["#246BFF", "#1E3A8A"],
  tennis:     ["#FFBA00", "#7A5A0E"],
  esports:    ["#8B00FF", "#3D1F7A"],
  motorsport: ["#FF2D2D", "#3A0A14"],
  hockey:     ["#246BFF", "#0E2A3A"],
};

// ── Generic placeholder ───────────────────────────────────────
const Placeholder = ({ c1 = "#FF2D2D", c2 = "#D81B7A", label, sublabel, height, aspect, children, style = {} }) => (
  <div className="ph ph-grain" style={{
    width: "100%", height: height || (aspect ? undefined : 160), aspectRatio: aspect,
    borderRadius: 12, "--ph-1": c1, "--ph-2": c2,
    display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 12,
    ...style,
  }}>
    {label && <div style={{ position: "absolute", top: 10, left: 10, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>{label}</div>}
    {sublabel && <div style={{ position: "relative", zIndex: 1, fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>{sublabel}</div>}
    {children}
  </div>
);

// ── Icon button ───────────────────────────────────────────────
const IconBtn = ({ name, onClick, size = 38, iconSize = 18 }) => (
  <button onClick={onClick} className="icon-btn" style={{ width: size, height: size }}>
    <Icon name={name} size={iconSize} color="#fff"/>
  </button>
);

// ── Team logo bubble ──────────────────────────────────────────
const TeamLogo = ({ team, size = 36 }) => {
  const [c1, c2] = SPORT_PALETTES[team.sport] || ["#FF2D2D", "#D81B7A"];
  return (
    <div className="team-logo" style={{
      width: size, height: size,
      background: `linear-gradient(135deg, ${c1}, ${c2})`,
      fontSize: size * 0.36, color: "#fff",
    }}>{team.abbr || team.name?.slice(0,3).toUpperCase()}</div>
  );
};

// ── Top nav ───────────────────────────────────────────────────
const TopNav = ({ active = "For You", onCat, profile = "M", greeting }) => {
  const cats = ["For You", "NBA", "EPL", "Soccer", "Cricket", "F1", "Live"];
  return (
    <div className="topnav">
      <div className="topnav-row">
        <BrandMark size={15}/>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <IconBtn name="search"/>
          <IconBtn name="bell"/>
          <div className="avatar" style={{ width: 32, height: 32, fontSize: 13, "--a1": "#FF2D2D", "--a2": "#D81B7A" }}>{profile}</div>
        </div>
      </div>
      {greeting}
      <div className="topnav-cats">
        {cats.map(c => (
          <button key={c} className={"chip " + (active === c ? "active" : "")} onClick={() => onCat && onCat(c)}>{c}</button>
        ))}
      </div>
    </div>
  );
};

// ── Tab bar ───────────────────────────────────────────────────
const TabBar = ({ active, onTab }) => {
  const items = [
    { id: "home",   label: "HOME",   icon: "home" },
    { id: "live",   label: "LIVE",   icon: "live" },
    { id: "pick",   label: "PICKS",  icon: "target" },
    { id: "wallet", label: "WALLET", icon: "wallet" },
    { id: "me",     label: "ME",     icon: "user" },
  ];
  return (
    <div className="tabbar">
      {items.map(it => {
        const isActive = active === it.id;
        const isCenter = it.id === "pick";
        return (
          <button key={it.id}
            className={"tabbar-item " + (isActive ? "active" : "") + (isCenter && isActive ? " center" : "")}
            onClick={() => onTab && onTab(it.id)}>
            <Icon name={it.icon} size={22} color={isActive ? (isCenter ? "#FF2D2D" : "#fff") : "rgba(255,255,255,0.45)"}/>
            <span>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// ── Live ticker ───────────────────────────────────────────────
const LiveTicker = ({ items }) => (
  <div className="ticker-wrap">
    <div className="ticker">
      {[...items, ...items].map((t, i) => (
        <span key={i} style={{ fontSize: 11, color: "rgba(255,255,255,0.78)", fontWeight: 500, display: "inline-flex", gap: 8, alignItems: "center" }}>
          <span className="tag tag-live" style={{ padding: "2px 6px", fontSize: 9 }}><span className="dot"/>{t.tag}</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.9)" }}>{t.text}</span>
          <span style={{ color: "rgba(255,255,255,0.18)" }}>·</span>
        </span>
      ))}
    </div>
  </div>
);

// ── Hero ──────────────────────────────────────────────────────
const Hero = ({ data, onPlay, onPredict, disabled }) => {
  const [c1, c2] = SPORT_PALETTES[data.sport] || ["#FF2D2D", "#D81B7A"];
  return (
    <div style={{ position: "relative", margin: "0 0 4px" }}>
      <div className="ph ph-grain motif-rings" style={{ width: "100%", height: 440, "--ph-1": c1, "--ph-2": c2, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 50%, rgba(10,10,10,0.7) 80%, rgba(10,10,10,1) 100%)" }}/>
        <svg viewBox="0 0 400 440" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.38, mixBlendMode: "screen" }}>
          <text x="200" y="240" textAnchor="middle" fontFamily="Space Mono, monospace" fontWeight="700" fontSize="100" fill="rgba(255,255,255,0.2)" letterSpacing="6">{data.scoreLine || ""}</text>
        </svg>
        <div style={{ position: "absolute", top: 124, left: 16, display: "flex", gap: 6, alignItems: "center" }}>
          <span className="tag tag-live"><span className="dot"/>LIVE</span>
          <span className="tag tag-soft">{data.league}</span>
        </div>
        <div style={{ position: "absolute", left: 16, right: 16, bottom: 18, zIndex: 2 }}>
          <div className="t-label" style={{ marginBottom: 6, color: "rgba(255,255,255,0.65)" }}>{data.eyebrow}</div>
          <div className="t-display" style={{ fontSize: 30, marginBottom: 6 }}>{data.title}</div>
          <div className="t-body" style={{ color: "rgba(255,255,255,0.72)", marginBottom: 16 }}>{data.subtitle}</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn btn-primary" onClick={onPlay} style={{ flex: 1 }}><Icon name="play" size={14} color="#fff"/>Join Live</button>
            <button className={"btn btn-secondary" + (disabled ? " is-disabled" : "")} onClick={onPredict} style={{ flex: 1 }}><Icon name="target" size={14} color="#fff"/>Make Pick</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Match card ────────────────────────────────────────────────
const MatchCard = ({ m, onClick, big, variant = "rail" }) => {
  const [c1, c2] = SPORT_PALETTES[m.sport] || ["#FF2D2D", "#D81B7A"];

  if (variant === "list") {
    return (
      <button onClick={onClick} className="pick-card" style={{ width: "100%", textAlign: "left", color: "#fff", cursor: "pointer" }}>
        <div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
            {m.live ? <span className="tag tag-live"><span className="dot"/>LIVE</span> : <span className="tag tag-soft">{m.starts || "UPCOMING"}</span>}
            <span style={{ fontSize: 10, color: "var(--text-faint)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.league}</span>
          </div>
          <div className="team-row">
            <TeamLogo team={{ sport: m.sport, abbr: m.home }} size={28}/>
            <div className="team-name">{m.homeFull || m.home}</div>
            <div className="team-line">{m.line ? m.line[0] : (m.score ? m.score[0] : "")}</div>
          </div>
          <div className="team-row">
            <TeamLogo team={{ sport: m.sport, abbr: m.away }} size={28}/>
            <div className="team-name">{m.awayFull || m.away}</div>
            <div className="team-line">{m.line ? m.line[1] : (m.score ? m.score[1] : "")}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div className="conf-box">
            <div className="conf-v">{m.conf || "68%"}</div>
            <div className="conf-k">Confidence</div>
          </div>
          <div className="conf-box" style={{ background: "rgba(255,45,45,0.10)", borderColor: "rgba(255,45,45,0.25)" }}>
            <div className="conf-v units">{m.units || "1.6u"}</div>
            <div className="conf-k units">To Win</div>
          </div>
        </div>
        <div className="meta-row">
          <span>{m.live ? `In play · ${m.q || ""}` : `Starts in ${m.startsIn || "12:34"}`}</span>
          <span style={{ color: "var(--fire-red)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 4 }}>View Pick <Icon name="arrow-right" size={11} color="currentColor"/></span>
        </div>
      </button>
    );
  }

  const w = big ? 260 : 180;
  const h = big ? 220 : 200;
  return (
    <button onClick={onClick} style={{ width: w, padding: 0, border: 0, background: "transparent", textAlign: "left", color: "#fff", cursor: "pointer" }}>
      <div className="ph ph-grain" style={{ width: "100%", height: h, borderRadius: 12, "--ph-1": c1, "--ph-2": c2, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.88) 100%)" }}/>
        <div style={{ position: "absolute", top: 8, left: 8, display: "flex", gap: 4 }}>
          {m.live && <span className="tag tag-live" style={{ padding: "3px 6px", fontSize: 9 }}><span className="dot"/>LIVE</span>}
          {!m.live && m.starts && <span className="tag tag-soft" style={{ padding: "3px 6px", fontSize: 9 }}>{m.starts}</span>}
        </div>
        {m.q && <div style={{ position: "absolute", top: 8, right: 8, fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, background: "rgba(0,0,0,0.65)", padding: "3px 7px", borderRadius: 4, color: "#fff" }}>{m.q}</div>}
        <div style={{ position: "absolute", bottom: 10, left: 10, right: 10, zIndex: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <TeamLogo team={{ sport: m.sport, abbr: m.home }} size={22}/>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700 }}>{m.home}</div>
            </div>
            {m.score && <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700 }}>{m.score[0]}</div>}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <TeamLogo team={{ sport: m.sport, abbr: m.away }} size={22}/>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700 }}>{m.away}</div>
            </div>
            {m.score && <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700 }}>{m.score[1]}</div>}
          </div>
        </div>
      </div>
      <div style={{ padding: "8px 2px 0" }}>
        <div style={{ fontSize: 10, color: "var(--text-faint)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{m.league}</div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.headline}</div>
        {m.pool && <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>{m.pool} pool</div>}
      </div>
    </button>
  );
};

// ── Creator card ──────────────────────────────────────────────
const CreatorCard = ({ c, onClick }) => (
  <button onClick={onClick} style={{ width: 110, padding: 0, border: 0, background: "transparent", textAlign: "center", color: "#fff", cursor: "pointer" }}>
    <div className="ph ph-grain" style={{ width: 92, height: 92, borderRadius: "50%", margin: "0 auto", "--ph-1": c.c1 || "#FF2D2D", "--ph-2": c.c2 || "#D81B7A", position: "relative", border: c.live ? "2.5px solid #FF2D2D" : "2.5px solid rgba(255,255,255,0.1)" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, color: "rgba(255,255,255,0.55)" }}>{c.initials}</div>
      {c.live && <div style={{ position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)", background: "var(--fire-red)", color: "#fff", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 999, letterSpacing: "0.1em" }}>LIVE</div>}
    </div>
    <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700 }}>{c.name}</div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-faint)", marginTop: 1 }}>{c.followers}</div>
  </button>
);

// ── Continue card ─────────────────────────────────────────────
const ContinueCard = ({ p, onClick, disabled }) => {
  const [c1, c2] = SPORT_PALETTES[p.sport] || ["#FF2D2D", "#D81B7A"];
  return (
    <button onClick={onClick} disabled={disabled} style={{ width: 220, padding: 0, border: 0, background: "transparent", textAlign: "left", color: "#fff", cursor: "pointer" }}>
      <div className="ph" style={{ width: "100%", height: 124, borderRadius: 12, "--ph-1": c1, "--ph-2": c2, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)" }}/>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--fire-red)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 22px rgba(255,45,45,0.5)" }}>
            <Icon name="play" size={18} color="#fff"/>
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 3, background: "rgba(255,255,255,0.1)" }}>
          <div style={{ width: (p.progress || 60) + "%", height: "100%", background: "var(--fire-red)" }}/>
        </div>
        <div style={{ position: "absolute", top: 8, left: 8, fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", background: "rgba(0,0,0,0.65)", padding: "3px 7px", borderRadius: 4 }}>{p.tag}</div>
      </div>
      <div style={{ padding: "8px 2px 0" }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{p.title}</div>
        <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>{p.meta}</div>
      </div>
    </button>
  );
};

// ── Notification card ─────────────────────────────────────────
const NotifCard = ({ icon = "mascot", color = "#FF2D2D", title, sub, time, onClick }) => (
  <button onClick={onClick} style={{ width: 230, padding: 14, border: 0, borderRadius: 14, background: "var(--surface)", textAlign: "left", color: "#fff", display: "flex", flexDirection: "column", gap: 8, cursor: "pointer", flexShrink: 0 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {icon === "mascot" ? <Splash size={26}/> : (
        <div style={{ width: 26, height: 26, borderRadius: 8, background: `${color}26`, color, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name={icon} size={14} color={color}/>
        </div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.25 }}>{title}</div>
        <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2, lineHeight: 1.35 }}>{sub}</div>
      </div>
    </div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-mute)" }}>{time}</div>
  </button>
);

typeof window !== "undefined" && Object.assign(window, {
  Icon, BrandMark, Mascot, Splash, Placeholder, SPORT_PALETTES, IconBtn,
  TopNav, TabBar, LiveTicker, Hero, MatchCard, TeamLogo, CreatorCard, ContinueCard, NotifCard,
});

// screens-onboarding.jsx — fans.market onboarding flow

const PROFILES = [
  { id: "marcus", name: "Marcus", initials: "M", c1: "#FF2D2D", c2: "#D81B7A", verified: true,  sub: "Verified · NBA fan" },
  { id: "sage",   name: "Sage",   initials: "S", c1: "#246BFF", c2: "#8B00FF", verified: true,  sub: "Verified · IPL fan" },
  { id: "ren",    name: "Ren",    initials: "R", c1: "#00C2A8", c2: "#246BFF", verified: false, sub: "Browse only · EPL" },
  { id: "kid",    name: "Kids",   initials: "K", c1: "#FFBA00", c2: "#FF6A4D", verified: false, sub: "Browse only" },
];

const SPORTS = [
  { id: "basketball", name: "Basketball", c1: "#FF6A4D", c2: "#7A1F0E" },
  { id: "soccer",     name: "Soccer",     c1: "#4FB755", c2: "#0F3320" },
  { id: "football",   name: "Football",   c1: "#1E5E3F", c2: "#0A2818" },
  { id: "cricket",    name: "Cricket",    c1: "#246BFF", c2: "#1E3A8A" },
  { id: "tennis",     name: "Tennis",     c1: "#FFBA00", c2: "#7A5A0E" },
  { id: "motorsport", name: "F1",         c1: "#FF2D2D", c2: "#3A0A14" },
  { id: "esports",    name: "Esports",    c1: "#8B00FF", c2: "#3D1F7A" },
  { id: "hockey",     name: "Hockey",     c1: "#246BFF", c2: "#0E2A3A" },
];

const TEAMS_NBA = [
  { id: "la",  name: "LAL", city: "Los Angeles",  c1: "#FFBA00", c2: "#5A2D8E" },
  { id: "bos", name: "BOS", city: "Boston",       c1: "#00C2A8", c2: "#0A4A30" },
  { id: "gsw", name: "GSW", city: "Golden State", c1: "#FFBA00", c2: "#246BFF" },
  { id: "mia", name: "MIA", city: "Miami",        c1: "#FF2D2D", c2: "#1E0A14" },
  { id: "nyk", name: "NYK", city: "New York",     c1: "#FF6A4D", c2: "#246BFF" },
  { id: "den", name: "DEN", city: "Denver",       c1: "#FFBA00", c2: "#246BFF" },
];

// ── 1. PROFILE PICKER ────────────────────────────────────────
const ProfilePicker = ({ onSelect }) => (
  <div className="fm-screen" style={{
    background: "radial-gradient(80% 60% at 50% 20%, rgba(255,45,45,0.20), transparent 60%), #0A0A0A",
    display: "flex", flexDirection: "column", alignItems: "center",
    padding: "60px 24px 40px",
  }}>
    <BrandMark size={16}/>

    <div style={{ marginTop: 26, display: "flex", justifyContent: "center" }}>
      <img
        src="/VideoProject11-ezgif.com-gif-maker.gif"
        alt=""
        className="mascot floaty"
        style={{
          width: 150, height: 129, objectFit: "contain", display: "block", backgroundImage: "none",
          filter: "blur(0.5px)", color: "rgba(255, 255, 255, 0)",
        }}
      />
    </div>

    <div className="t-display" style={{ fontSize: 32, marginTop: 24, textAlign: "center" }}>
      <span style={{ color: "var(--fire-red)" }}>Back</span> your instinct.
    </div>
    <div style={{ fontSize: 14, color: "var(--text-dim)", marginTop: 10, textAlign: "center", maxWidth: 300, lineHeight: 1.5 }}>
      Live predictions. Real fans. Pick a profile to enter the arena.
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, width: "100%", maxWidth: 320, marginTop: 32 }}>
      {PROFILES.map(p => (
        <button key={p.id} onClick={() => onSelect(p)}
          style={{ background: "transparent", border: 0, color: "#fff", padding: 0, cursor: "pointer" }}>
          <div className="avatar square" style={{
            width: "100%", aspectRatio: 1, fontSize: 44,
            "--a1": p.c1, "--a2": p.c2,
            boxShadow: "0 12px 32px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.08)",
          }}>{p.initials}</div>
          <div style={{ marginTop: 10, fontSize: 14, fontWeight: 700 }}>{p.name}</div>
          <div style={{ fontSize: 10, color: p.verified ? "var(--teal-boost)" : "var(--electric-blue)", marginTop: 3, fontWeight: 600 }}>
            {p.verified ? "● VERIFIED" : "○ BROWSE"}
          </div>
        </button>
      ))}
    </div>

    <button onClick={() => onSelect(null)} className="btn btn-ghost" style={{ marginTop: 36, borderRadius: 4 }}>
      Manage profiles
    </button>

    <div style={{ fontSize: 10, color: "var(--text-mute)", marginTop: 32, textAlign: "center", lineHeight: 1.55, maxWidth: 290 }}>
      Predictions involve real risk. 21+ in eligible regions. Loyalty credentials are not investments.
    </div>
  </div>
);

// ── 2. LIVE DISCOVERY ────────────────────────────────────────
const LiveDiscovery = ({ profile, onContinue, organic }) => (
  <div className="fm-screen" style={{ background: "#0A0A0A", position: "relative" }}>
    <div className="ph ph-grain motif-rings" style={{
      width: "100%", height: 480, position: "absolute", top: 0, left: 0,
      "--ph-1": organic ? "#246BFF" : "#D81B7A",
      "--ph-2": organic ? "#1E0A28" : "#3A0A14",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 50%, rgba(10,10,10,0.98) 90%)" }}/>
      <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.42 }}>
        <ellipse cx="200" cy="460" rx="320" ry="130" fill="rgba(0,0,0,0.55)"/>
        <text x="200" y="220" textAnchor="middle" fontFamily="Space Mono, monospace" fontWeight="700" fontSize="110" fill="rgba(255,255,255,0.18)">87-82</text>
      </svg>
    </div>

    <div style={{ position: "relative", padding: "60px 22px 0", color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <BrandMark size={14}/>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <Icon name="ticket" size={12}/>
          {organic ? "Via @kayla" : "Via Arena QR"}
        </div>
      </div>
    </div>

    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 22px 40px" }}>
      <span className="tag tag-live" style={{ marginBottom: 12 }}><span className="dot"/>Happening Now</span>
      <div className="t-display" style={{ fontSize: 36, marginTop: 14, marginBottom: 10 }}>
        {organic
          ? <>Lakers vs <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>Celtics</span></>
          : <>Welcome to the <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>Arena</span></>}
      </div>
      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginBottom: 6, fontWeight: 500 }}>
        {organic ? "Q3 starts in 4 min · @kayla_courtside is live" : "Lakers vs Celtics · Q2 · 3:24 remaining"}
      </div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 26, lineHeight: 1.5 }}>
        {organic
          ? "Kayla shared her Q3 pick. Tap in to follow along — no funding needed yet."
          : "You're courtside. We've matched you to your section. Tap in for live picks, scores, and the room."}
      </div>
      <button className="btn btn-primary btn-cta-full" style={{ borderRadius: "var(--r-xs)" }} onClick={onContinue}>
        <Icon name="lightning" size={14} color="#fff"/>
        Continue · 2 quick questions
      </button>
      <div style={{ fontSize: 10, color: "var(--text-mute)", textAlign: "center", marginTop: 12 }}>
        No funding required to enter. We'll only ask for ID if you make a pick.
      </div>
    </div>
  </div>
);

// ── 3. ENTRY GATE ────────────────────────────────────────────
const EntryGate = ({ onDone }) => {
  const [step, setStep] = React.useState(0);
  const [pick, setPick] = React.useState(null);

  const options = [
    { id: "buzzer",  label: "Buzzer-beater", sub: "Late, loud, all-or-nothing" },
    { id: "grinder", label: "Grinder",       sub: "Defense wins it" },
    { id: "watcher", label: "Watcher",       sub: "I'm just here to see how it ends" },
    { id: "stats",   label: "Stats nerd",    sub: "Show me the model" },
  ];
  const reveal = {
    buzzer:  { type: "Clutch Fan",  line: "You ride for the last shot. We'll show you closing-minute picks." },
    grinder: { type: "Grinder",     line: "You like halves won in the trenches. We'll surface defensive props." },
    watcher: { type: "Storyteller", line: "You love the arc. We'll lean on recaps and creator threads." },
    stats:   { type: "Quant",       line: "Model edge and probability bars front and center." },
  };

  return (
    <div className="fm-screen" style={{
      background: "radial-gradient(60% 50% at 50% 15%, rgba(255,45,45,0.18), transparent 60%), #0A0A0A",
      padding: "60px 22px 40px", display: "flex", flexDirection: "column",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="t-label">Step 1 of 2</div>
        <button onClick={onDone} style={{ background: "transparent", border: 0, color: "var(--text-faint)", fontSize: 13, fontWeight: 600 }}>Skip</button>
      </div>

      {step === 0 ? (
        <>
          <div className="t-label" style={{ color: "var(--fire-red)", marginTop: 30, marginBottom: 10 }}>Quick — no wrong answer</div>
          <div className="t-display" style={{ fontSize: 28, marginBottom: 10 }}>
            What kind of fan <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>are you</span>, really?
          </div>
          <div style={{ fontSize: 13, color: "var(--text-faint)", marginBottom: 22 }}>We use this to set the room — not the odds.</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 26 }}>
            {options.map(o => (
              <button key={o.id} onClick={() => setPick(o.id)}
                style={{
                  textAlign: "left", padding: "16px 18px",
                  background: pick === o.id ? "rgba(255,45,45,0.14)" : "var(--surface)",
                  border: pick === o.id ? "1.5px solid var(--fire-red)" : "1px solid var(--line)",
                  borderRadius: 14, color: "#fff",
                  display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
                }}>
                <div style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: pick === o.id ? "var(--fire-red)" : "rgba(255,255,255,0.06)",
                  border: pick === o.id ? "0" : "1.5px solid rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {pick === o.id && <Icon name="check" size={12} color="#fff"/>}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{o.label}</div>
                  <div style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 2 }}>{o.sub}</div>
                </div>
              </button>
            ))}
          </div>

          <button className="btn btn-primary btn-cta-full"
            style={{ opacity: pick ? 1 : 0.4, pointerEvents: pick ? "auto" : "none" }}
            onClick={() => setStep(1)}>
            Reveal my fan type
          </button>
        </>
      ) : (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
          <div className="t-label" style={{ marginBottom: 16 }}>You are a</div>
          <Mascot size={170} floaty style={{ margin: "0 auto" }}/>
          <div className="t-display" style={{ fontSize: 36, marginTop: 24 }}>
            <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>{reveal[pick].type}</span>
          </div>
          <div style={{ fontSize: 14, color: "var(--text-dim)", marginTop: 12, lineHeight: 1.5, padding: "0 16px" }}>
            {reveal[pick].line}
          </div>
          <button onClick={onDone} className="btn btn-primary btn-cta-full" style={{ marginTop: 40 }}>Set up my Arena</button>
          <button onClick={() => setStep(0)} style={{ background: "transparent", border: 0, color: "var(--text-faint)", fontSize: 13, marginTop: 12, padding: 12, fontWeight: 600 }}>Pick again</button>
        </div>
      )}
    </div>
  );
};

// ── 4. LIGHT ONBOARDING ──────────────────────────────────────
const LightOnboarding = ({ onDone, audience }) => {
  const [step, setStep] = React.useState(0);
  const [sports, setSports] = React.useState(new Set(["basketball"]));
  const [teams, setTeams] = React.useState(new Set(["la"]));
  const [age, setAge] = React.useState(false);
  const [tos, setTos] = React.useState(false);

  const toggle = (set, setFn, id) => {
    const next = new Set(set);
    if (next.has(id)) next.delete(id); else next.add(id);
    setFn(next);
  };

  const steps = [
    { title: <>Pick your <span style={{fontStyle:"italic",color:"var(--fire-red)"}}>sports</span></>, sub: "We'll personalize your arena, ticker, and picks." },
    { title: <>Tap your <span style={{fontStyle:"italic",color:"var(--fire-red)"}}>teams</span></>,  sub: "Your colors take over Home and the Live Ticker." },
    { title: "One last thing", sub: "Region and terms. Funding stays gated." },
  ];

  return (
    <div className="fm-screen" style={{ background: "#0A0A0A", padding: "60px 22px 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <button onClick={() => step > 0 ? setStep(step - 1) : null} style={{ background: "transparent", border: 0, color: step > 0 ? "#fff" : "var(--text-mute)", padding: 0 }}>
          <Icon name="chevron-left" size={22}/>
        </button>
        <div style={{ display: "flex", gap: 4 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ width: i === step ? 26 : 10, height: 4, borderRadius: 999, background: i <= step ? "var(--fire-red)" : "rgba(255,255,255,0.12)", transition: "width 0.3s" }}/>
          ))}
        </div>
        <button onClick={onDone} style={{ background: "transparent", border: 0, color: "var(--text-faint)", fontSize: 13, fontWeight: 600 }}>Skip</button>
      </div>

      <div className="t-label" style={{ color: "var(--fire-red)", marginBottom: 8 }}>
        {audience === "bettor" ? "Bettor-first Setup" : "Fan-first Setup"}
      </div>
      <div className="t-display" style={{ fontSize: 28, marginBottom: 8 }}>{steps[step].title}</div>
      <div style={{ fontSize: 13, color: "var(--text-faint)", marginBottom: 22 }}>{steps[step].sub}</div>

      {step === 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 22 }}>
          {SPORTS.map(s => {
            const on = sports.has(s.id);
            return (
              <button key={s.id} onClick={() => toggle(sports, setSports, s.id)}
                style={{ padding: 0, border: 0, borderRadius: 14, overflow: "hidden", background: "transparent", position: "relative", textAlign: "left", height: 86, cursor: "pointer" }}>
                <div className="ph ph-grain" style={{
                  width: "100%", height: "100%", "--ph-1": s.c1, "--ph-2": s.c2,
                  opacity: on ? 1 : 0.55, display: "flex", alignItems: "flex-end", padding: 12,
                  border: on ? "2px solid #fff" : "2px solid transparent",
                }}>
                  <div style={{ position: "relative", zIndex: 1, fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "#fff" }}>{s.name}</div>
                  {on && <div style={{ position: "absolute", top: 8, right: 8, width: 22, height: 22, borderRadius: "50%", background: "var(--fire-red)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={12} color="#fff"/></div>}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {step === 1 && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 22 }}>
          {TEAMS_NBA.map(t => {
            const on = teams.has(t.id);
            return (
              <button key={t.id} onClick={() => toggle(teams, setTeams, t.id)}
                style={{ padding: 0, border: 0, background: "transparent", color: "#fff", cursor: "pointer" }}>
                <div className="ph ph-grain" style={{
                  width: "100%", aspectRatio: "1", borderRadius: 14, "--ph-1": t.c1, "--ph-2": t.c2,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: on ? 1 : 0.55, border: on ? "2px solid #fff" : "2px solid transparent", position: "relative",
                }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>{t.name}</div>
                  {on && <div style={{ position: "absolute", top: 6, right: 6, width: 20, height: 20, borderRadius: "50%", background: "var(--fire-red)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={11} color="#fff"/></div>}
                </div>
                <div style={{ fontSize: 11, marginTop: 6, textAlign: "center", color: "rgba(255,255,255,0.7)" }}>{t.city}</div>
              </button>
            );
          })}
        </div>
      )}

      {step === 2 && (
        <div style={{ marginBottom: 22 }}>
          <div className="card" style={{ marginBottom: 10 }}>
            <div className="t-label" style={{ marginBottom: 4 }}>Region</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>California, US</div>
                <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>Browse OK · Funding eligible</div>
              </div>
              <Icon name="check" size={22} color="var(--teal-boost)"/>
            </div>
          </div>

          {[{ val: age, set: setAge, label: <>I'm <b>21 or older</b> and legally of age to make predictions in my jurisdiction.</> },
            { val: tos, set: setTos, label: <>I agree to the <u>Terms</u>, <u>Privacy</u>, and <u>Responsible Play</u> commitments.</> }
          ].map((item, i) => (
            <button key={i} onClick={() => item.set(!item.val)} style={{
              width: "100%", textAlign: "left",
              background: item.val ? "rgba(0,194,168,0.08)" : "var(--surface)",
              border: "1px solid " + (item.val ? "rgba(0,194,168,0.4)" : "var(--line)"),
              borderRadius: 14, padding: 14, marginBottom: 8, color: "#fff",
              display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
            }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: item.val ? "var(--teal-boost)" : "transparent", border: item.val ? "0" : "1.5px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {item.val && <Icon name="check" size={13} color="#000"/>}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.45 }}>{item.label}</div>
            </button>
          ))}

          <div className="alert alert-info" style={{ marginTop: 14 }}>
            <div className="a-ic"><Icon name="info" size={12} color="#fff"/></div>
            <div>
              <div className="a-title">No funding yet</div>
              <div className="a-sub">Browse, follow creators, and join the Arena. Wallet only when you make a pick.</div>
            </div>
          </div>
        </div>
      )}

      <button className="btn btn-primary btn-cta-full"
        onClick={() => step < 2 ? setStep(step + 1) : onDone()}
        style={{ opacity: step === 2 && (!age || !tos) ? 0.4 : 1, pointerEvents: step === 2 && (!age || !tos) ? "none" : "auto" }}>
        {step < 2 ? "Continue" : "Enter the Arena"}
      </button>
    </div>
  );
};

typeof window !== "undefined" && Object.assign(window, { ProfilePicker, LiveDiscovery, EntryGate, LightOnboarding, SPORTS, TEAMS_NBA, PROFILES });

// screens-app.jsx — Arena home + Guided Pick + Sheet + Settlement + Bettor + Blocked

const HERO_LIVE = {
  league: "NBA · Reg. Season",
  eyebrow: "From your Arena · Court 1",
  title: "Lakers vs Celtics",
  subtitle: "Q2 · 3:24 · 87-82. Lakers are 12-2 on closing minutes at home.",
  sport: "basketball",
  scoreLine: "87-82",
};

const LIVE_MATCHES = [
  { sport: "basketball", live: true, home: "LAL", away: "BOS", score: [87, 82], q: "Q2 3:24", league: "NBA", headline: "Lakers tighten the half", pool: "$48k", conf: "68%", units: "1.6u", line: ["-4.5", "+4.5"] },
  { sport: "soccer",     live: true, home: "ARS", away: "CHE", score: [1, 1],   q: "67'",    league: "EPL", headline: "Chelsea press is breaking", pool: "$22k", conf: "61%", units: "2.1u", line: ["-0.5", "+0.5"] },
  { sport: "cricket",    live: true, home: "IND", away: "AUS", score: [142,"—"],q: "12.4 ov",league: "ODI", headline: "Powerplay edge to India",   pool: "$31k", conf: "72%", units: "1.4u" },
  { sport: "esports",    live: true, home: "T1",  away: "GenG",score: [2, 1],   q: "Game 4", league: "LCK", headline: "Map 4 dragon fight",         pool: "$11k", conf: "58%", units: "1.9u" },
  { sport: "tennis",     live: true, home: "ALC", away: "SIN", score: ["6-4","3-5"], q: "Set 2", league: "ATP", headline: "Alcaraz break point",   pool: "$9k",  conf: "64%", units: "1.8u" },
];

const UPCOMING_MATCHES = [
  { sport: "basketball", starts: "Tonight 7:30", home: "LAL", away: "GSW", league: "NBA", headline: "Battle of the West",       pool: "$120k", startsIn: "2:14:00" },
  { sport: "football",   starts: "Sun 1:00",     home: "KC",  away: "BUF", league: "NFL", headline: "Mahomes vs Allen, again", pool: "$340k" },
  { sport: "soccer",     starts: "Sat 9:30",     home: "MCI", away: "LIV", league: "EPL", headline: "Title race rematch",       pool: "$95k" },
  { sport: "motorsport", starts: "Sun 6:00",     home: "VER", away: "NOR", league: "F1",  headline: "Pole battle for Abu Dhabi",pool: "$54k" },
];

const CREATORS = [
  { initials: "K", name: "@kayla_courtside", followers: "428k", live: true,  c1: "#FF2D2D", c2: "#D81B7A" },
  { initials: "D", name: "@drebreakdown",    followers: "212k", live: true,  c1: "#246BFF", c2: "#1E3A8A" },
  { initials: "M", name: "@modeledge",       followers: "89k",  live: false, c1: "#8B00FF", c2: "#3D1F7A" },
  { initials: "T", name: "@therunbacks",     followers: "156k", live: false, c1: "#00C2A8", c2: "#0A4A30" },
  { initials: "J", name: "@jaynba",          followers: "612k", live: true,  c1: "#FFBA00", c2: "#5A2D8E" },
];

const CONTINUE_PICKS = [
  { tag: "SAVED",    title: "Lakers -3.5 1H",       meta: "Saved 2h ago · Pool $48k",    progress: 30, sport: "basketball" },
  { tag: "WATCHING", title: "Arsenal next goal",     meta: "Live · @drebreakdown's pick", progress: 70, sport: "soccer" },
  { tag: "DRAFT",    title: "Alcaraz to win Set 2",  meta: "Draft pick · 60s to lock",    progress: 90, sport: "tennis" },
];

const TICKER_ITEMS = [
  { tag: "LAL",  text: "87-82 · Q2 3:24" },
  { tag: "BOS",  text: "Brown back in" },
  { tag: "POOL", text: "Lakers 1H +$12k in 60s" },
  { tag: "ARS",  text: "1-1 Chelsea · 67'" },
  { tag: "F1",   text: "Verstappen pole Abu Dhabi" },
  { tag: "IPL",  text: "India 142/3 · RR 11.4" },
];

const NOTIFS = [
  { icon: "mascot", title: "Your pick is live!",  sub: "BOS -4.5 is now active.",       time: "2m ago" },
  { icon: "fire",   title: "Win streak update",    sub: "You're on a 7-pick win streak!", time: "5m ago",  color: "#FF6A4D" },
  { icon: "bell",   title: "Market update",        sub: "Player status updated 5m ago.", time: "12m ago", color: "#246BFF" },
];

// ── ARENA ─────────────────────────────────────────────────────
const Arena = ({ access, audience, funded, onOpenPick, onTab, activeTab, onOpenLive }) => {
  const browseOnly = access === "browse";
  const [cat, setCat] = React.useState("For You");

  const greeting = (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
      <Splash size={28}/>
      <div>
        <div className="t-label" style={{ color: "var(--text-faint)" }}>Good evening</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Marcus<span style={{ color: "var(--fire-red)" }}>.</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fm-screen">
      <TopNav active={cat} onCat={setCat} profile="M" greeting={greeting}/>

      {browseOnly && (
        <div className="banner banner-browse">
          <Icon name="info" size={14}/>
          Browse mode · funding & predictions disabled.
        </div>
      )}

      <Hero data={HERO_LIVE} onPlay={onOpenLive} onPredict={() => !browseOnly && onOpenPick("hero")} disabled={browseOnly}/>
      <LiveTicker items={TICKER_ITEMS}/>

      <div className="rail-title">
        <h3>Studio Live</h3>
        <span className="more">See all <Icon name="chevron" size={10}/></span>
      </div>
      <div className="row-rail" style={{ paddingTop: 0 }}>
        {CREATORS.map((c, i) => <CreatorCard key={i} c={c} onClick={onOpenLive}/>)}
      </div>

      <div className="rail-title">
        <h3>Picks for the Arena</h3>
        <span className="more" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>Lakers · Celtics <Icon name="chevron" size={10}/></span>
      </div>
      <div style={{ padding: "0 16px 8px", display: "flex", flexDirection: "column", gap: 10 }}>
        {LIVE_MATCHES.slice(0, 2).map((m, i) => (
          <MatchCard key={i} m={m} variant="list" onClick={() => !browseOnly && onOpenPick(`pickcard-${i}`)}/>
        ))}
      </div>

      <div className="rail-title">
        <h3>Activity</h3>
        <span className="more">3 new</span>
      </div>
      <div className="row-rail">
        {NOTIFS.map((n, i) => <NotifCard key={i} {...n}/>)}
      </div>

      <div className="rail-title">
        <h3>Continue Predicting</h3>
        <span className="more">3 open</span>
      </div>
      <div className="row-rail">
        {CONTINUE_PICKS.map((p, i) => (
          <ContinueCard key={i} p={p} onClick={() => !browseOnly && onOpenPick(`continue-${i}`)} disabled={browseOnly}/>
        ))}
      </div>

      <div className="rail-title">
        <h3>Trending Live</h3>
        <span className="more">Top markets</span>
      </div>
      <div className="row-rail">
        {LIVE_MATCHES.map((m, i) => (
          <MatchCard key={i} m={m} onClick={() => !browseOnly && onOpenPick(`trend-${i}`)}/>
        ))}
      </div>

      <div className="rail-title">
        <h3>Coming Up</h3>
        <span className="more">Your teams</span>
      </div>
      <div className="row-rail">
        {UPCOMING_MATCHES.map((m, i) => (
          <MatchCard key={i} m={m} onClick={() => !browseOnly && onOpenPick(`upcoming-${i}`)}/>
        ))}
      </div>

      <div className="rail-title">
        <h3>Watch Parties</h3>
        <span className="more">Tonight</span>
      </div>
      <div className="row-rail">
        {[
          { title: "Lakers @ Warriors Watch Party", host: "@kayla_courtside · 1.2k going", sport: "basketball" },
          { title: "Sunday Night Football Room",    host: "@drebreakdown · 480 going",     sport: "football" },
          { title: "EPL Saturday Live Room",        host: "@therunbacks · 220 going",      sport: "soccer" },
        ].map((w, i) => (
          <button key={i} style={{ width: 240, padding: 0, border: 0, background: "transparent", color: "#fff", textAlign: "left", cursor: "pointer" }}>
            <Placeholder c1={SPORT_PALETTES[w.sport][0]} c2={SPORT_PALETTES[w.sport][1]} height={130} style={{ borderRadius: 12 }} label="Watch Party">
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "inline-block", background: "var(--fire-red)", padding: "4px 10px", borderRadius: 6, fontSize: 10, fontWeight: 700, marginBottom: 6, letterSpacing: "0.1em" }}>RSVP</div>
              </div>
            </Placeholder>
            <div style={{ padding: "8px 2px" }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{w.title}</div>
              <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>{w.host}</div>
            </div>
          </button>
        ))}
      </div>

      <div style={{ height: 120 }}/>
      <TabBar active={activeTab} onTab={onTab}/>
    </div>
  );
};

// ── GUIDED PICK ───────────────────────────────────────────────
const GuidedPick = ({ onBack, onMakePick, access, funded }) => {
  const browseOnly = access === "browse";
  const [stake, setStake] = React.useState(5);
  const [side, setSide] = React.useState("yes");
  const stakes = [2, 5, 10, 20, 50];
  const probYes = 68;
  const payoutMult = side === "yes" ? 1.61 : 2.7;
  const payout = (stake * payoutMult).toFixed(2);

  return (
    <div className="fm-screen" style={{ background: "var(--bg)" }}>
      <div className="ph ph-grain motif-rings" style={{ height: 260, "--ph-1": "#FF6A4D", "--ph-2": "#7A1F0E", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, var(--bg) 100%)" }}/>
        <div style={{ position: "absolute", top: 56, left: 16, right: 16, display: "flex", justifyContent: "space-between" }}>
          <button onClick={onBack} className="icon-btn"><Icon name="chevron-left" size={20} color="#fff"/></button>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="icon-btn"><Icon name="bookmark" size={16} color="#fff"/></button>
            <button className="icon-btn"><Icon name="share" size={15} color="#fff"/></button>
          </div>
        </div>
        <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
          <text x="200" y="180" textAnchor="middle" fontFamily="Space Mono, monospace" fontWeight="700" fontSize="100" fill="rgba(0,0,0,0.45)">87-82</text>
        </svg>
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
            <span className="tag tag-live"><span className="dot"/>LIVE Q2 · 3:24</span>
            <span className="tag tag-soft">NBA</span>
            <span className="tag tag-gold">Guided</span>
          </div>
          <div className="t-display" style={{ fontSize: 24, lineHeight: 1.1 }}>
            Lakers to <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>win</span> this half
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.62)", marginTop: 4, fontFamily: "var(--font-mono)" }}>LAL 87 — 82 BOS</div>
        </div>
      </div>

      <div style={{ padding: "16px 16px 0" }}>
        <div className="card" style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <div className="t-label">Market Probability</div>
            <div style={{ fontSize: 10, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>refresh 4s</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>{probYes}%</span>
              <span style={{ fontSize: 13, color: "var(--text-faint)", marginLeft: 8 }}>Yes — Lakers 1H</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>vs {100 - probYes}%</div>
          </div>
          <div className="prob-bar"><div className="prob-fill" style={{ width: probYes + "%" }}/></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-faint)", marginTop: 8, fontFamily: "var(--font-mono)" }}>
            <span>Pool <b style={{ color: "var(--text)" }}>$48,210</b></span>
            <span>1,204 fans in</span>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <Splash size={16}/>
            <div className="t-label" style={{ color: "var(--fire-red)" }}>Why this pick</div>
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.9)" }}>
            Lakers are <b>12-2 on closing minutes at home</b> this season. Brown is back in but Lakers are <b>+8 net rating</b> in this 5-man unit. Risk: bench depth flips next 6 minutes.
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 14, fontSize: 11, color: "var(--text-faint)" }}>
            <span><b style={{ color: "var(--teal-boost)" }}>Edge</b> +3.2%</span>
            <span><b style={{ color: "var(--text)" }}>Confidence</b> Med</span>
            <span><b style={{ color: "var(--text)" }}>Fee</b> 1.0%</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
          {[
            { id: "yes", label: "Yes · Lakers", mult: 1.61, bg: "rgba(0,194,168,0.14)", border: "var(--teal-boost)", col: "var(--teal-boost)" },
            { id: "no",  label: "No · Celtics", mult: 2.70, bg: "rgba(255,45,45,0.14)",  border: "var(--fire-red)",  col: "var(--fire-red)" },
          ].map(s => (
            <button key={s.id} onClick={() => setSide(s.id)}
              style={{
                flex: 1, padding: "14px 12px",
                background: side === s.id ? s.bg : "var(--surface)",
                border: side === s.id ? `1.5px solid ${s.border}` : "1px solid var(--line)",
                borderRadius: 12, color: "#fff", textAlign: "left", cursor: "pointer",
              }}>
              <div className="t-label" style={{ color: s.col, marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700 }}>{s.mult}×</div>
              <div style={{ fontSize: 11, color: "var(--text-faint)" }}>Win ${(stake * s.mult).toFixed(2)} on ${stake}</div>
            </button>
          ))}
        </div>

        <div className="card" style={{ marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div className="t-label">Your pick</div>
            <div style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>{funded ? "Wallet $42.50" : "Wallet not funded"}</div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 38, fontWeight: 700, letterSpacing: "-0.04em" }}>
              <span style={{ color: "var(--text-faint)", fontSize: 22 }}>$</span>{stake}
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="t-label" style={{ color: "var(--teal-boost)" }}>Potential payout</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: "var(--teal-boost)" }}>${payout}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {stakes.map(s => (
              <button key={s} onClick={() => setStake(s)}
                style={{
                  flex: 1, padding: "10px 0", borderRadius: 10,
                  background: stake === s ? "var(--fire-red)" : "rgba(255,255,255,0.06)",
                  border: 0, color: "#fff", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, cursor: "pointer",
                }}>${s}</button>
            ))}
          </div>
        </div>

        <div className="card-elev" style={{ marginBottom: 14, display: "flex", gap: 12, alignItems: "center" }}>
          <Icon name="users" size={18} color="rgba(255,255,255,0.7)"/>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>
            <b style={{ fontFamily: "var(--font-mono)" }}>1,204</b> fans made this pick — and <b>@drebreakdown</b>, <b>@modeledge</b>.
          </div>
        </div>

        {browseOnly ? (
          <div style={{ marginBottom: 28 }}>
            <button disabled className="btn btn-cta-full" style={{ background: "rgba(255,255,255,0.08)", color: "var(--text-faint)" }}>Funding unavailable in browse</button>
            <div style={{ fontSize: 11, color: "var(--text-mute)", textAlign: "center", marginTop: 10 }}>Switch to a verified profile to make this pick.</div>
          </div>
        ) : (
          <div style={{ marginBottom: 28 }}>
            <button className="btn btn-primary btn-cta-full" onClick={() => onMakePick({ stake, side, payout, payoutMult })}>
              <Icon name="lightning" size={16} color="#fff"/>
              Make pick · ${stake}
            </button>
            <div style={{ fontSize: 11, color: "var(--text-mute)", textAlign: "center", marginTop: 10, lineHeight: 1.4 }}>
              Predictions are at-risk. Fees and final cost shown before confirm.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ── PREDICTION SHEET ──────────────────────────────────────────
const PredictionSheet = ({ pick, funded, onClose, onSettle, access }) => {
  const [step, setStep] = React.useState(0);
  const [checks, setChecks] = React.useState([false, false, false, false]);
  const [ack, setAck] = React.useState(false);
  const [depositMethod, setDepositMethod] = React.useState("usdc");
  const [confirming, setConfirming] = React.useState(false);

  React.useEffect(() => {
    if (step !== 0) return;
    const timers = checks.map((_, i) =>
      setTimeout(() => setChecks(prev => { const next = [...prev]; next[i] = true; return next; }), 500 + i * 600)
    );
    return () => timers.forEach(clearTimeout);
  }, [step]);

  const allChecked = checks.every(Boolean);
  const compChecks = [
    { title: "Eligibility · 21+ in CA",          sub: "Confirmed from your onboarding" },
    { title: "Geofence · Crypto.com Arena",       sub: "Venue + IP cross-checked" },
    { title: "Risk disclosure",                   sub: "Stake at risk. House fee 1.0%. Settled from official source." },
    { title: "Session limits",                    sub: "Daily cap $200 · Single-pick cap $50" },
  ];

  return (
    <div className="sheet-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="sheet">
        <div className="sheet-handle"/>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 18 }}>
          {[0, funded ? null : 1, 2].filter(x => x !== null).map((s, i, arr) => (
            <div key={i} style={{ width: 28, height: 4, borderRadius: 999, background: i <= arr.indexOf(step) ? "var(--fire-red)" : "rgba(255,255,255,0.1)" }}/>
          ))}
        </div>

        {step === 0 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 18 }}>
              <Icon name="shield" size={36} color="var(--fire-red)"/>
              <div className="t-display" style={{ fontSize: 22, marginTop: 12 }}>Quick safety checks</div>
              <div style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 4 }}>We confirm eligibility before any funding.</div>
            </div>
            <div>
              {compChecks.map((c, i) => (
                <div className="comp-row" key={i}>
                  <div className={"comp-check " + (checks[i] ? "" : (i === checks.findIndex(x => !x) ? "running" : "pending"))}>
                    {checks[i] ? <Icon name="check" size={14}/> : (i === checks.findIndex(x => !x) ? <div className="shimmer" style={{ width: 12, height: 12, borderRadius: 6 }}/> : <span>·</span>)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{c.title}</div>
                    <div style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 2 }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary btn-cta-full"
              style={{ marginTop: 20, opacity: allChecked ? 1 : 0.4, pointerEvents: allChecked ? "auto" : "none" }}
              onClick={() => setStep(funded ? 2 : 1)}>
              {allChecked ? "Continue" : "Verifying…"}
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 18 }}>
              <Icon name="wallet" size={36} color="var(--fire-red)"/>
              <div className="t-display" style={{ fontSize: 22, marginTop: 12 }}>Fund your wallet</div>
              <div style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 4 }}>Stake locked from this balance only. Withdraw anytime.</div>
            </div>
            <div style={{ background: "var(--bg-2)", borderRadius: 14, padding: 14, marginBottom: 12 }}>
              <div className="t-label">You're depositing</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 34, fontWeight: 700, marginTop: 6 }}>$25 <span style={{ fontSize: 14, color: "var(--text-faint)", fontWeight: 600 }}>USDC</span></div>
              <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 4 }}>Enough for this pick + a few more.</div>
            </div>
            <div className="t-label" style={{ marginBottom: 8 }}>Source</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
              {[
                { id: "usdc",  icon: "diamond",   name: "Coinbase Wallet · USDC", sub: "Connected · 0.4s settlement" },
                { id: "usdt",  icon: "diamond",   name: "USDT on-ramp",            sub: "Card or bank · 1.0% fee" },
                { id: "apple", icon: "lightning", name: "Apple Pay → USDC",        sub: "Instant · 2.9% on-ramp" },
              ].map(m => (
                <button key={m.id} onClick={() => setDepositMethod(m.id)}
                  style={{
                    padding: 14, borderRadius: 12,
                    background: depositMethod === m.id ? "rgba(255,45,45,0.10)" : "var(--bg-2)",
                    border: depositMethod === m.id ? "1.5px solid var(--fire-red)" : "1px solid var(--line)",
                    color: "#fff", textAlign: "left", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 12,
                  }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={m.icon} size={18} color="var(--text)"/>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{m.name}</div>
                    <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>{m.sub}</div>
                  </div>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", border: depositMethod === m.id ? "0" : "1.5px solid rgba(255,255,255,0.2)", background: depositMethod === m.id ? "var(--fire-red)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {depositMethod === m.id && <Icon name="check" size={12} color="#fff"/>}
                  </div>
                </button>
              ))}
            </div>
            <button className="btn btn-primary btn-cta-full" onClick={() => setStep(2)}>Fund $25 · Continue</button>
            <div style={{ fontSize: 10, color: "var(--text-mute)", textAlign: "center", marginTop: 10 }}>Wallet held by FanMarket Custody · audited daily</div>
          </>
        )}

        {step === 2 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div className="t-label" style={{ color: "var(--fire-red)" }}>Final confirmation</div>
              <div className="t-display" style={{ fontSize: 22, marginTop: 6 }}>
                Lakers <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>win</span> this half
              </div>
            </div>
            <div style={{ background: "var(--bg-2)", borderRadius: 14, padding: 14, marginBottom: 12 }}>
              <SheetRow k="Side"           v={pick.side === "yes" ? "Yes · Lakers 1H" : "No · Celtics / Draw"}/>
              <SheetRow k="Stake"          v={`$${pick.stake}.00 USDC`}/>
              <SheetRow k="Multiplier"     v={`${pick.payoutMult}×`}/>
              <SheetRow k="Fee · 1.0%"     v={`$${(pick.stake * 0.01).toFixed(2)}`}/>
              <SheetRow k="Net cost"       v={`$${(pick.stake * 1.01).toFixed(2)}`} sep/>
              <SheetRow k="Potential payout" v={`$${pick.payout}`} hi/>
            </div>
            <button onClick={() => setAck(!ack)} style={{
              width: "100%", textAlign: "left",
              background: ack ? "rgba(0,194,168,0.08)" : "var(--surface)",
              border: "1px solid " + (ack ? "rgba(0,194,168,0.4)" : "var(--line)"),
              borderRadius: 12, padding: 12, marginBottom: 14, color: "#fff",
              display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer",
            }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: ack ? "var(--teal-boost)" : "transparent", border: ack ? "0" : "1.5px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                {ack && <Icon name="check" size={12} color="#000"/>}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.45 }}>
                I understand my stake is <b>at risk</b>, may settle to <b>zero</b>, and that this is a prediction — not an investment. Settled from official NBA source.
              </div>
            </button>
            <button className={"btn btn-primary btn-cta-full" + (confirming ? " btn-loading" : "")}
              style={{ opacity: ack ? 1 : 0.4, pointerEvents: ack && !confirming ? "auto" : "none" }}
              onClick={() => { setConfirming(true); setTimeout(() => onSettle(pick), 1100); }}>
              Confirm · Pay ${(pick.stake * 1.01).toFixed(2)}
            </button>
            <button onClick={onClose} style={{ width: "100%", background: "transparent", border: 0, color: "var(--text-faint)", fontSize: 13, padding: 14, fontWeight: 600 }}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

const SheetRow = ({ k, v, hi, sep }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "8px 0", borderTop: sep ? "0.5px solid var(--line)" : "0", marginTop: sep ? 6 : 0, paddingTop: sep ? 12 : 8 }}>
    <span style={{ fontSize: 13, color: "var(--text-faint)" }}>{k}</span>
    <span style={{ fontSize: hi ? 18 : 13, fontWeight: hi ? 700 : 600, color: hi ? "var(--teal-boost)" : "#fff", fontFamily: "var(--font-mono)" }}>{v}</span>
  </div>
);

// ── SETTLEMENT ────────────────────────────────────────────────
const Settlement = ({ pick, outcome, onContinue }) => {
  const win = outcome === "win";
  const balance = win ? (42.5 + parseFloat(pick.payout)) : 42.5;

  return (
    <div className="fm-screen" style={{
      background: win
        ? "radial-gradient(60% 50% at 50% 30%, rgba(0,194,168,0.18), transparent 60%), #0A0A0A"
        : "radial-gradient(60% 50% at 50% 30%, rgba(255,45,45,0.14), transparent 60%), #0A0A0A",
      position: "relative", padding: "60px 22px 40px",
    }}>
      {win && (
        <div className="confetti">
          {Array.from({ length: 30 }).map((_, i) => (
            <i key={i} style={{ left: (Math.random() * 100) + "%", background: ["#FF2D2D","#FF6A4D","#FFBA00","#00C2A8","#D81B7A"][i % 5], animationDuration: (2 + Math.random() * 2) + "s", animationDelay: (Math.random() * 2) + "s" }}/>
          ))}
        </div>
      )}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
          <Mascot size={120} floaty/>
        </div>
        <div className="t-label" style={{ color: win ? "var(--teal-boost)" : "var(--text-faint)", marginBottom: 8, textAlign: "center" }}>
          {win ? "Pick settled · Win" : "Pick settled"}
        </div>
        <div className="t-display" style={{ fontSize: 36, textAlign: "center", marginBottom: 10 }}>
          {win ? <>Lakers <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>held it</span>.</> : <>Close — they <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>didn't</span>.</>}
        </div>
        <div style={{ fontSize: 14, color: "var(--text-faint)", marginBottom: 20, lineHeight: 1.45, textAlign: "center" }}>
          {win ? "Final: Lakers 109, Celtics 106. Half-time pick settled on official NBA scoreline." : "Celtics won the 1H 58-52. The pool was close — 41% of fans were on your side."}
        </div>
        <div className="card" style={{ borderColor: win ? "rgba(0,194,168,0.3)" : "var(--line)", marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <span className="t-label">Pick</span>
            <span style={{ fontSize: 13, fontWeight: 700 }}>Lakers 1H · {pick.side === "yes" ? "Yes" : "No"}</span>
          </div>
          <SheetRow k="Stake"          v={`$${pick.stake}.00`}/>
          <SheetRow k="Settled"        v={win ? "Won" : "Lost"}/>
          <SheetRow k={win ? "Payout" : "Loss"} v={win ? `+$${pick.payout}` : `-$${pick.stake}.00`} hi/>
          <SheetRow k="Wallet balance" v={`$${balance.toFixed(2)}`} sep/>
        </div>
        <div style={{ background: "linear-gradient(135deg, rgba(216,27,122,0.12), rgba(255,186,0,0.06))", border: "1px solid rgba(255,186,0,0.25)", borderRadius: 18, padding: 16, marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="trophy" size={22} color="var(--sunset-orange)"/>
              <div>
                <div className="t-label" style={{ color: "var(--sunset-orange)" }}>Fan Pass</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800 }}>Courtside · Tier 1</div>
              </div>
            </div>
            <span className="tag tag-gold">+12 XP</span>
          </div>
          <div className="prob-bar"><div className="prob-fill gold" style={{ width: "38%" }}/></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginTop: 8, fontFamily: "var(--font-mono)" }}>
            <span style={{ color: "var(--text-faint)" }}>38 / 100 XP</span>
            <span style={{ color: "var(--sunset-orange)", fontWeight: 700 }}>62 to Active Trader</span>
          </div>
        </div>
        <button className="btn btn-primary btn-cta-full" onClick={onContinue}>{win ? "Pick another" : "Back to the Arena"}</button>
        <button onClick={onContinue} style={{ width: "100%", background: "transparent", border: 0, color: "var(--text-faint)", fontSize: 13, padding: 14, fontWeight: 600 }}>Withdraw to wallet</button>
      </div>
    </div>
  );
};

// ── BETTOR HOME ───────────────────────────────────────────────
const BettorHome = ({ access, funded, onOpenPick, onTab, activeTab, onOpenLive }) => {
  const browseOnly = access === "browse";
  return (
    <div className="fm-screen">
      <TopNav active="NBA" profile="M"/>
      {browseOnly && <div className="banner banner-browse"><Icon name="info" size={14}/>Browse mode · execution disabled.</div>}
      <div style={{ padding: "8px 16px 0" }}>
        <div style={{ background: "linear-gradient(135deg, rgba(255,106,77,0.14), rgba(255,45,45,0.08))", border: "1px solid rgba(255,106,77,0.3)", borderRadius: 18, padding: 18, marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Icon name="fire-fill" size={14} color="var(--energy-coral)"/>
            <div className="t-label" style={{ color: "var(--energy-coral)" }}>Top edge · +4.2% · Live</div>
          </div>
          <div className="t-display" style={{ fontSize: 24, marginBottom: 4 }}>Lakers 1H · <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>Yes</span></div>
          <div style={{ fontSize: 13, color: "var(--text-faint)", marginBottom: 14, fontFamily: "var(--font-mono)" }}>Pool 62% · Model 66.2% · Edge +4.2%</div>
          <div style={{ display: "flex", gap: 8, fontSize: 11, marginBottom: 16 }}>
            <BChip k="Polymarket" v="1.58"/>
            <BChip k="DraftKings" v="1.55"/>
            <BChip k="FanMarket"  v="1.61" hi/>
          </div>
          <button className={"btn btn-primary btn-cta-full" + (browseOnly ? " is-disabled" : "")} onClick={() => onOpenPick("bettor-top")}>
            {funded ? "Execute · $25" : "Connect wallet · $25"}
          </button>
        </div>
      </div>
      <div style={{ padding: "0 16px", marginBottom: 6 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <StatChip label="Wallet" value={funded ? "$42.50" : "$0.00"}/>
          <StatChip label="Open"   value="$15.00" sub="2 picks"/>
          <StatChip label="24h PnL" value={funded ? "+$8.20" : "—"} hi/>
        </div>
      </div>
      <div className="rail-title"><h3>Recommended now</h3><span className="more">Edge-sorted</span></div>
      <div className="row-rail">
        {LIVE_MATCHES.map((m, i) => <MatchCard key={i} m={m} big onClick={() => !browseOnly && onOpenPick(`bettor-live-${i}`)}/>)}
      </div>
      <div className="rail-title"><h3>Price alerts</h3><span className="more">3 active</span></div>
      <div style={{ padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { mkt: "Mahomes 250+ pass yds", from: "1.85", to: "1.92", delta: "+3.8%" },
          { mkt: "Arsenal next goal",     from: "2.10", to: "2.45", delta: "+16.6%" },
          { mkt: "Verstappen pole",       from: "1.32", to: "1.28", delta: "-3.0%" },
        ].map((a, i) => (
          <div key={i} className="card" style={{ padding: 12, display: "flex", alignItems: "center", gap: 12 }}>
            <Icon name="bell" size={18} color="rgba(255,255,255,0.7)"/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{a.mkt}</div>
              <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2, fontFamily: "var(--font-mono)" }}>{a.from}× → {a.to}×</div>
            </div>
            <span className="tag" style={{ background: a.delta.startsWith("+") ? "rgba(0,194,168,0.18)" : "rgba(255,45,45,0.18)", color: a.delta.startsWith("+") ? "var(--teal-boost)" : "var(--fire-red)", fontFamily: "var(--font-mono)" }}>{a.delta}</span>
          </div>
        ))}
      </div>
      <div style={{ height: 100 }}/>
      <TabBar active={activeTab} onTab={onTab}/>
    </div>
  );
};

const BChip = ({ k, v, hi }) => (
  <div style={{ flex: 1, padding: "8px 10px", borderRadius: 8, background: hi ? "rgba(255,45,45,0.15)" : "rgba(255,255,255,0.04)", border: hi ? "1px solid var(--fire-red)" : "1px solid var(--line)" }}>
    <div className="t-label" style={{ fontSize: 9 }}>{k}</div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, marginTop: 2, color: hi ? "var(--fire-red)" : "#fff" }}>{v}×</div>
  </div>
);

const StatChip = ({ label, value, sub, hi }) => (
  <div className="stat-chip" style={{ flex: 1 }}>
    <div className="v" style={{ fontSize: 17, color: hi ? "var(--teal-boost)" : "#fff" }}>{value}</div>
    <div className="k">{label}</div>
    {sub && <div style={{ fontSize: 10, color: "var(--text-faint)", marginTop: 2 }}>{sub}</div>}
  </div>
);

// ── BLOCKED ───────────────────────────────────────────────────
const Blocked = ({ onBack }) => (
  <div className="fm-screen" style={{ background: "radial-gradient(60% 50% at 50% 30%, rgba(255,45,45,0.16), transparent 60%), #0A0A0A", padding: "60px 22px 40px", display: "flex", flexDirection: "column" }}>
    <button onClick={onBack} style={{ background: "transparent", border: 0, color: "#fff", padding: 0, alignSelf: "flex-start" }}><Icon name="chevron-left" size={22}/></button>
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
        <Mascot size={130} style={{ filter: "drop-shadow(0 12px 30px rgba(255,45,45,0.4)) grayscale(0.4)" }}/>
      </div>
      <div className="t-label" style={{ color: "var(--fire-red)", textAlign: "center", marginBottom: 10 }}>Unavailable in your region</div>
      <div className="t-display" style={{ fontSize: 28, textAlign: "center", marginBottom: 12 }}>
        We can't route you to <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>fans.market</span> here — yet.
      </div>
      <div style={{ fontSize: 14, color: "var(--text-faint)", marginTop: 4, lineHeight: 1.5, textAlign: "center" }}>Prediction markets aren't licensed in your jurisdiction.</div>
      <div className="card" style={{ marginTop: 24 }}>
        <div className="t-label" style={{ marginBottom: 6 }}>What you can do</div>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
          <li>Get notified when we launch.</li>
          <li>Follow creators on social.</li>
          <li>Contact support if this seems wrong.</li>
        </ul>
      </div>
      <button className="btn btn-primary btn-cta-full" style={{ marginTop: 24 }}>Notify me at launch</button>
    </div>
  </div>
);

typeof window !== "undefined" && Object.assign(window, { Arena, BettorHome, GuidedPick, PredictionSheet, Settlement, Blocked, StatChip });

// screens-tabs.jsx — Live, Picks, Wallet, Me (fans.market brand kit)

const LIVE_DATA = {
  featured: {
    sport: "basketball",
    league: "NBA · Crypto.com Arena · Q2 3:24",
    eyebrow: "Live now · 12k watching",
    title: "Lakers 87 — 82 Celtics",
    subtitle: "Closing minute of the half. Tatum just picked up his 3rd foul.",
    scoreLine: "87-82",
  },
  rails: [
    {
      title: "Live · NBA", sub: "5 games",
      matches: [
        { sport: "basketball", live: true, home: "LAL", away: "BOS", score: [87, 82], q: "Q2 3:24", league: "NBA", headline: "Lakers · Celtics", pool: "$48k", conf: "68%", units: "1.6u" },
        { sport: "basketball", live: true, home: "DAL", away: "PHX", score: [62, 58], q: "Q2 2:48", league: "NBA", headline: "Mavs · Suns",      pool: "$31k", conf: "61%", units: "1.9u" },
        { sport: "basketball", live: true, home: "MIA", away: "ATL", score: [44, 51], q: "Q2 6:11", league: "NBA", headline: "Heat · Hawks",      pool: "$18k", conf: "55%", units: "2.0u" },
        { sport: "basketball", live: true, home: "DEN", away: "MIN", score: [22, 18], q: "Q1 4:02", league: "NBA", headline: "Nuggets · Wolves",  pool: "$22k", conf: "72%", units: "1.4u" },
      ],
    },
    {
      title: "Live · EPL", sub: "Saturday slate",
      matches: [
        { sport: "soccer", live: true, home: "ARS", away: "CHE", score: [1, 1], q: "67'", league: "EPL", headline: "Arsenal · Chelsea",    pool: "$22k", conf: "61%", units: "2.1u" },
        { sport: "soccer", live: true, home: "LIV", away: "TOT", score: [2, 0], q: "54'", league: "EPL", headline: "Liverpool · Spurs",    pool: "$31k", conf: "78%", units: "1.3u" },
        { sport: "soccer", live: true, home: "MCI", away: "NEW", score: [0, 0], q: "23'", league: "EPL", headline: "City · Newcastle",     pool: "$18k", conf: "52%", units: "2.4u" },
      ],
    },
    {
      title: "Live · Cricket", sub: "T20 World Cup",
      matches: [
        { sport: "cricket", live: true, home: "IND", away: "AUS", score: ["142/3","—"], q: "12.4 ov", league: "T20WC", headline: "India · Australia",   pool: "$31k", conf: "72%", units: "1.4u" },
        { sport: "cricket", live: true, home: "ENG", away: "PAK", score: ["88/2", "—"], q: "8.1 ov",  league: "T20WC", headline: "England · Pakistan", pool: "$14k", conf: "60%", units: "1.7u" },
      ],
    },
    {
      title: "Live · Esports", sub: "LCK Finals",
      matches: [
        { sport: "esports", live: true, home: "T1", away: "GenG", score: [2, 1], q: "Game 4", league: "LCK", headline: "T1 · Gen.G", pool: "$11k", conf: "58%", units: "1.9u" },
        { sport: "esports", live: true, home: "DK", away: "HLE",  score: [1, 1], q: "Game 3", league: "LCK", headline: "DK · HLE",   pool: "$6k",  conf: "55%", units: "2.0u" },
      ],
    },
  ],
};

// ── LIVE ──────────────────────────────────────────────────────
const Live = ({ access, onOpenPick, onTab, activeTab }) => {
  const browseOnly = access === "browse";
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "NBA", "EPL", "Cricket", "Tennis", "Esports", "NFL", "F1"];

  return (
    <div className="fm-screen" style={{ paddingBottom: 100 }}>
      <div className="topnav">
        <div className="topnav-row">
          <BrandMark size={15}/>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span className="tag tag-live"><span className="dot"/>2.4k in</span>
            <IconBtn name="search"/>
          </div>
        </div>
        <div className="topnav-cats">
          {filters.map(f => (
            <button key={f} className={"chip " + (filter === f ? "active" : "")} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: -64 }}>
        <Hero data={LIVE_DATA.featured} onPredict={() => !browseOnly && onOpenPick("live-hero")} onPlay={() => {}} disabled={browseOnly}/>
      </div>

      {browseOnly && <div className="banner banner-browse"><Icon name="info" size={14}/>Browse mode · funding & predictions disabled.</div>}

      <div className="rail-title">
        <h3>Rooms in this game</h3>
        <span className="more"><span style={{ color: "var(--fire-red)", fontWeight: 800 }}>● 412</span> live</span>
      </div>
      <div className="row-rail">
        {[
          { title: "Loud half · Sec 213",  host: "@kayla",        count: "47 in",  c1: "#FF2D2D", c2: "#D81B7A" },
          { title: "Quants Only",          host: "@modeledge",    count: "12 in",  c1: "#8B00FF", c2: "#3D1F7A" },
          { title: "Lakers Diehards",      host: "@ringculture",  count: "208 in", c1: "#FFBA00", c2: "#5A2D8E" },
          { title: "First-time Picks",     host: "@drebreakdown", count: "61 in",  c1: "#246BFF", c2: "#1E3A8A" },
        ].map((r, i) => (
          <div key={i} style={{ width: 240, flexShrink: 0 }}>
            <div className="ph ph-grain" style={{ width: "100%", height: 130, borderRadius: 12, "--ph-1": r.c1, "--ph-2": r.c2, position: "relative", padding: 12, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="tag tag-live"><span className="dot"/>LIVE</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#fff", fontWeight: 700, background: "rgba(0,0,0,0.45)", padding: "3px 8px", borderRadius: 999 }}>{r.count}</span>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, lineHeight: 1.15, color: "#fff" }}>{r.title}</div>
            </div>
            <div style={{ padding: "6px 2px", fontSize: 11, color: "var(--text-faint)" }}>{r.host}</div>
          </div>
        ))}
      </div>

      {LIVE_DATA.rails.map((rail, i) => (
        <React.Fragment key={i}>
          <div className="rail-title">
            <h3>{rail.title}</h3>
            <span className="more">{rail.sub}</span>
          </div>
          <div className="row-rail">
            {rail.matches.map((m, j) => <MatchCard key={j} m={m} onClick={() => !browseOnly && onOpenPick(`live-${i}-${j}`)}/>)}
          </div>
        </React.Fragment>
      ))}

      <TabBar active={activeTab} onTab={onTab}/>
    </div>
  );
};

// ── PICKS ─────────────────────────────────────────────────────
const Picks = ({ access, funded, onOpenPick, onTab, activeTab }) => {
  const browseOnly = access === "browse";
  const [tab, setTab] = React.useState("open");

  const open = funded ? [
    { mkt: "Lakers win 1H",     stake: 5,  mult: "1.61×", payout: 8.05,  game: "LAL 87 - 82 BOS", q: "Q2 3:24", side: "Yes", progress: 62, sport: "basketball" },
    { mkt: "Arsenal next goal", stake: 10, mult: "2.10×", payout: 21.00, game: "ARS 1 - 1 CHE",   q: "67'",     side: "Yes", progress: 38, sport: "soccer" },
  ] : [];

  const saved = [
    { mkt: "Alcaraz wins Set 2",        game: "Alcaraz vs Sinner · ATP Finals", price: "1.85×", note: "Saved 2h ago",    sport: "tennis" },
    { mkt: "Mahomes over 275 pass yds", game: "Sun 1:00 PM · KC vs BUF",        price: "1.92×", note: "Saved yesterday", sport: "football" },
    { mkt: "Verstappen pole",           game: "Sun · F1 Abu Dhabi",             price: "1.32×", note: "Saved 3d ago",    sport: "motorsport" },
  ];

  const history = funded ? [
    { mkt: "Heat 2H spread",       stake: 5,  result: "win",  payout: 9.50,  date: "Yesterday", sport: "basketball" },
    { mkt: "Doncic over 38.5 pts", stake: 10, result: "loss", payout: 0,     date: "Yesterday", sport: "basketball" },
    { mkt: "Liverpool to win",     stake: 15, result: "win",  payout: 28.50, date: "Sun",       sport: "soccer" },
    { mkt: "Sinner straight sets", stake: 5,  result: "loss", payout: 0,     date: "Sat",       sport: "tennis" },
  ] : [];

  return (
    <div className="fm-screen" style={{ paddingBottom: 100 }}>
      <div style={{ padding: "60px 20px 12px" }}>
        <BrandMark size={13} glyphOnly={true} style={{ opacity: 0.55, marginBottom: 14 }}/>
        <div className="t-display" style={{ fontSize: 32 }}>
          Your <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>Picks</span>
        </div>
        <div style={{ fontSize: 13, color: "var(--text-faint)", marginTop: 6, fontFamily: "var(--font-mono)" }}>
          {funded ? `${open.length} open · ${saved.length} saved · ${history.length} settled` : `${saved.length} saved · fund to make a pick`}
        </div>
      </div>

      <div style={{ padding: "0 20px 16px" }}>
        <div className="seg" style={{ width: "100%" }}>
          {[
            { id: "open",    label: `Open${open.length ? ` · ${open.length}` : ""}` },
            { id: "saved",   label: `Saved${saved.length ? ` · ${saved.length}` : ""}` },
            { id: "history", label: "History" },
          ].map(s => (
            <button key={s.id} onClick={() => setTab(s.id)} className={"seg-item " + (tab === s.id ? "active" : "")} style={{ flex: 1 }}>{s.label}</button>
          ))}
        </div>
      </div>

      {tab === "open" && (
        <div style={{ padding: "0 20px" }}>
          {open.length === 0 ? (
            <PicksEmpty
              title={funded ? "No open picks" : "Fund to start picking"}
              sub={funded ? "When you make a pick, it'll live here while it settles." : "We never charge until you're ready. Add to wallet anytime."}
              cta={funded ? "Browse the Arena" : "Fund my wallet"}
              onClick={() => onTab("live")}
            />
          ) : open.map((p, i) => <OpenPickCard key={i} p={p} onClick={() => onOpenPick(`open-${i}`)}/>)}
        </div>
      )}

      {tab === "saved" && (
        <div style={{ padding: "0 20px" }}>
          {saved.map((s, i) => (
            <div key={i} onClick={() => !browseOnly && onOpenPick(`saved-${i}`)} className="card"
              style={{ marginBottom: 10, display: "flex", gap: 12, alignItems: "center", cursor: "pointer", padding: 14 }}>
              <div className="ph" style={{ width: 48, height: 48, borderRadius: 10, flexShrink: 0, "--ph-1": SPORT_PALETTES[s.sport][0], "--ph-2": SPORT_PALETTES[s.sport][1] }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{s.mkt}</div>
                <div style={{ fontSize: 11, color: "var(--text-faint)" }}>{s.game}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700 }}>{s.price}</div>
                <div style={{ fontSize: 10, color: "var(--text-faint)", marginTop: 2 }}>{s.note}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "history" && (
        <div style={{ padding: "0 20px" }}>
          {history.length === 0 ? (
            <PicksEmpty title="No settled picks yet" sub="Once a pick settles, you'll see the result and payout here." cta="Browse markets" onClick={() => onTab("live")}/>
          ) : (
            <>
              <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                <StatChip label="Settled" value={history.length}/>
                <StatChip label="W/L" value={`${history.filter(h=>h.result==="win").length}-${history.filter(h=>h.result==="loss").length}`}/>
                <StatChip label="Net" value={`+$${history.reduce((s,h)=>s+(h.payout-h.stake),0).toFixed(2)}`} hi/>
              </div>
              {history.map((h, i) => (
                <div key={i} className="card" style={{ marginBottom: 10, padding: 14, display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 6, alignSelf: "stretch", borderRadius: 3, background: h.result === "win" ? "var(--teal-boost)" : "var(--fire-red)", flexShrink: 0 }}/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{h.mkt}</div>
                    <div style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>${h.stake} · {h.date}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: h.result === "win" ? "var(--teal-boost)" : "var(--fire-red)" }}>
                      {h.result === "win" ? `+$${(h.payout-h.stake).toFixed(2)}` : `-$${h.stake}.00`}
                    </div>
                    <div style={{ fontSize: 9, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, marginTop: 2 }}>{h.result}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      <TabBar active={activeTab} onTab={onTab}/>
    </div>
  );
};

const OpenPickCard = ({ p, onClick }) => (
  <div onClick={onClick} className="card" style={{ marginBottom: 12, cursor: "pointer" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
      <span className="tag tag-live"><span className="dot"/>In play · {p.q}</span>
      <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>{p.game}</span>
    </div>
    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
      {p.mkt} <span style={{ fontSize: 11, color: "var(--text-faint)", fontWeight: 500 }}>· {p.side}</span>
    </div>
    <div className="prob-bar" style={{ marginBottom: 8 }}><div className="prob-fill" style={{ width: p.progress + "%" }}/></div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, paddingTop: 12, borderTop: "0.5px solid var(--line)" }}>
      <div>
        <div className="t-label">Stake</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700, marginTop: 2 }}>${p.stake}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="t-label">Mult</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700, marginTop: 2 }}>{p.mult}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div className="t-label" style={{ color: "var(--teal-boost)" }}>To Win</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700, marginTop: 2, color: "var(--teal-boost)" }}>${p.payout.toFixed(2)}</div>
      </div>
    </div>
  </div>
);

// ── WALLET ────────────────────────────────────────────────────
const Wallet = ({ access, funded, onTab, activeTab, onFund }) => {
  const browseOnly = access === "browse";
  const balance = funded ? 84.10 : 0.00;
  const open = funded ? 15.00 : 0.00;
  const cashable = balance - open;

  return (
    <div className="fm-screen" style={{ paddingBottom: 100 }}>
      <div style={{ padding: "60px 20px 0" }}>
        <BrandMark size={13} glyphOnly={true} style={{ opacity: 0.55, marginBottom: 14 }}/>
        <div className="t-display" style={{ fontSize: 32 }}>
          My <span style={{ fontStyle: "italic", color: "var(--fire-red)" }}>Portfolio</span>
        </div>
        <div style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 6, marginBottom: 22, letterSpacing: "0.04em" }}>
          USDC · custodied by FanMarket Trust · audited daily
        </div>

        <div style={{ background: "linear-gradient(135deg, #1E1E2A 0%, #0C0C14 100%)", border: "1px solid var(--line-2)", borderRadius: 18, padding: 18, marginBottom: 12, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,45,45,0.22), transparent 60%)" }}/>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, position: "relative" }}>
            <div>
              <div className="t-label">Total balance</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 38, fontWeight: 700, marginTop: 6, letterSpacing: "-0.04em" }}>${cashable.toFixed(2)}</div>
              <div style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 4 }}>
                <span style={{ color: funded ? "var(--teal-boost)" : "var(--text-faint)", fontWeight: 600 }}>{funded ? "● Funded" : "○ Not funded"}</span>
                {funded && <span style={{ fontFamily: "var(--font-mono)" }}> · ${open.toFixed(2)} locked</span>}
              </div>
            </div>
            <div className="tag tag-win">USDC</div>
          </div>
          {funded && (
            <svg viewBox="0 0 200 40" style={{ width: "100%", height: 40, marginBottom: 10, position: "relative" }} preserveAspectRatio="none">
              <defs><linearGradient id="splg" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#FF2D2D" stopOpacity="0.4"/><stop offset="100%" stopColor="#FF2D2D" stopOpacity="0"/></linearGradient></defs>
              <path d="M0,30 L20,28 L40,25 L60,18 L80,22 L100,15 L120,18 L140,10 L160,12 L180,7 L200,5 L200,40 L0,40 Z" fill="url(#splg)"/>
              <path d="M0,30 L20,28 L40,25 L60,18 L80,22 L100,15 L120,18 L140,10 L160,12 L180,7 L200,5" stroke="#FF2D2D" strokeWidth="1.5" fill="none"/>
            </svg>
          )}
          <div style={{ display: "flex", gap: 8, position: "relative" }}>
            <button onClick={onFund} disabled={browseOnly} className={"btn btn-primary" + (browseOnly ? " is-disabled" : "")} style={{ flex: 1 }}>
              <Icon name="plus" size={14} color="#fff"/>Add funds
            </button>
            <button disabled={!funded || browseOnly} className={"btn btn-secondary" + (!funded || browseOnly ? " is-disabled" : "")} style={{ flex: 1 }}>
              <Icon name="arrow-up" size={14} color="#fff"/>Withdraw
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
          <StatChip label="Today"   value={funded ? "+$8.20"  : "—"} hi={funded}/>
          <StatChip label="7D PnL"  value={funded ? "+$42.10" : "—"} hi={funded}/>
          <StatChip label="All time" value={funded ? "+$184"  : "—"} hi={funded}/>
        </div>

        <div className="card" style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>Daily deposit limit</div>
              <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>Resets at midnight PT</div>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)", fontWeight: 700 }}>$25 / $50</div>
          </div>
          <div className="prob-bar"><div className="prob-fill" style={{ width: "50%", background: "linear-gradient(90deg, var(--electric-blue), var(--teal-boost))" }}/></div>
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(255,186,0,0.10), rgba(255,45,45,0.06))", border: "1px solid rgba(255,186,0,0.22)", borderRadius: 14, padding: 14, marginBottom: 22, display: "flex", alignItems: "center", gap: 12 }}>
          <Icon name="trophy" size={22} color="var(--sunset-orange)"/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Tier 1 · Courtside</div>
            <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>Lower fees at $200 lifetime stake</div>
          </div>
          <Icon name="chevron" size={16} color="var(--text-faint)"/>
        </div>

        <div className="t-label" style={{ marginBottom: 10 }}>Activity</div>
      </div>

      <div style={{ padding: "0 20px" }}>
        {(funded ? [
          { type: "win",     title: "Heat 2H spread won",    amt: "+$4.50",  time: "Yesterday 11:32 PM", note: "Settled · Heat 58 - 52" },
          { type: "deposit", title: "Funded wallet",          amt: "+$25.00", time: "Yesterday 7:24 PM",  note: "Apple Pay · USDC" },
          { type: "loss",    title: "Doncic O38.5 lost",      amt: "-$10.00", time: "Yesterday 7:08 PM",  note: "Doncic finished with 32" },
          { type: "fee",     title: "Pick fee · Heat spread", amt: "-$0.05",  time: "Yesterday 6:55 PM",  note: "1.0% house fee" },
          { type: "win",     title: "Liverpool win settled",  amt: "+$13.50", time: "Sun 4:14 PM",        note: "Liverpool 2 - 0" },
        ] : [
          { type: "info", title: "No activity yet", amt: "", time: "", note: "Fund your wallet to make your first pick." },
        ]).map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "0.5px solid var(--line)" }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: a.type==="win"?"rgba(0,194,168,0.12)":a.type==="loss"?"rgba(255,45,45,0.12)":a.type==="deposit"?"rgba(36,107,255,0.12)":a.type==="fee"?"rgba(255,186,0,0.12)":"rgba(255,255,255,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon name={a.type==="win"?"trophy":a.type==="loss"?"arrow-down":a.type==="deposit"?"plus":a.type==="fee"?"info":"wallet"} size={16}
                color={a.type==="win"?"var(--teal-boost)":a.type==="loss"?"var(--fire-red)":a.type==="deposit"?"var(--electric-blue)":a.type==="fee"?"var(--sunset-orange)":"var(--text-faint)"}/>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{a.title}</div>
              <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>{a.note}{a.time ? ` · ${a.time}` : ""}</div>
            </div>
            {a.amt && <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: a.amt.startsWith("+")?"var(--teal-boost)":a.amt.startsWith("-")?"var(--fire-red)":"#fff" }}>{a.amt}</div>}
          </div>
        ))}
      </div>

      <div style={{ padding: "20px 16px 90px", textAlign: "center", fontSize: 10, color: "var(--text-mute)", lineHeight: 1.6 }}>
        Funds in segregated trust. Withdraw any time. <u>Responsible play settings</u>
      </div>
      <TabBar active={activeTab} onTab={onTab}/>
    </div>
  );
};

// ── ME ────────────────────────────────────────────────────────
const Me = ({ access, funded, audience, onTab, activeTab, onLogout, onTweakAudience }) => {
  const browseOnly = access === "browse";

  return (
    <div className="fm-screen" style={{ paddingBottom: 100 }}>
      <div style={{ paddingTop: 60, paddingBottom: 20, background: "radial-gradient(60% 50% at 50% 0%, rgba(255,45,45,0.20), transparent 70%)" }}>
        <div style={{ padding: "0 20px", display: "flex", alignItems: "center", gap: 14 }}>
          <div className="avatar" style={{ width: 64, height: 64, fontSize: 26, "--a1": "#FF2D2D", "--a2": "#D81B7A" }}>M</div>
          <div style={{ flex: 1 }}>
            <div className="t-display" style={{ fontSize: 22 }}>Marcus</div>
            <div style={{ fontSize: 11, color: "var(--text-faint)", display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
              <span style={{ color: browseOnly ? "var(--electric-blue)" : "var(--teal-boost)", fontWeight: 700, letterSpacing: "0.05em" }}>{browseOnly ? "○ BROWSE" : "● VERIFIED"}</span>
              · @marcus.213
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <span className="tag tag-pro">PRO</span>
              <span className="tag tag-gold">LVL 12</span>
            </div>
          </div>
          <button className="icon-btn"><Icon name="share" size={16} color="#fff"/></button>
        </div>

        <div style={{ display: "flex", padding: "20px 20px 0", gap: 8 }}>
          {[
            { k: "Picks",    v: funded ? "32"    : "0",   hi: false },
            { k: "Hit Rate", v: funded ? "58%"   : "—",   hi: false },
            { k: "Streak",   v: funded ? "3W"    : "—",   hi: false },
            { k: "Net",      v: funded ? "+$184" : "—",   hi: true },
          ].map((s, i) => (
            <div key={i} className="stat-chip" style={{ flex: 1, padding: "10px 8px", alignItems: "center", textAlign: "center" }}>
              <div className="v" style={{ fontSize: 16, color: s.hi && funded ? "var(--teal-boost)" : "#fff" }}>{s.v}</div>
              <div className="k">{s.k}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Fan Pass */}
      <div style={{ padding: "16px 20px 22px" }}>
        <div style={{ background: "linear-gradient(135deg, #1E0A28 0%, #4A0F2E 50%, #FF2D2D 130%)", borderRadius: 22, padding: 20, position: "relative", overflow: "hidden", border: "1px solid rgba(255,186,0,0.25)" }}>
          <div style={{ position: "absolute", top: -50, right: -50, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,186,0,0.30), transparent 60%)" }}/>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22, position: "relative" }}>
            <div>
              <div className="t-label" style={{ color: "rgba(255,186,0,0.85)" }}>Fan Pass · Tier 1</div>
              <div className="t-display" style={{ fontSize: 22, marginTop: 6 }}>Courtside</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>Section 213 · Lakers · Since Q1 '26</div>
            </div>
            <Splash size={42}/>
          </div>
          <div style={{ position: "relative" }}>
            <div className="prob-bar" style={{ background: "rgba(0,0,0,0.3)" }}><div className="prob-fill gold" style={{ width: funded ? "38%" : "8%" }}/></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 11, color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-mono)" }}>
              <span>{funded ? "38 / 100 XP" : "8 / 100 XP"}</span>
              <span style={{ color: "#FFBA00", fontWeight: 700 }}>62 to Active Trader →</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 16, position: "relative" }}>
            {["Floor seat raffle", "Creator drops", "VIP rooms"].map((p, i) => (
              <div key={i} style={{ flex: 1, padding: "8px 10px", background: "rgba(0,0,0,0.3)", borderRadius: 8, fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.85)", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <Icon name="lock" size={10} color="rgba(255,255,255,0.4)"/>{p}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div style={{ padding: "0 20px 22px" }}>
        <div className="t-label" style={{ marginBottom: 8 }}>Leaderboard · This week</div>
        <div className="card" style={{ padding: 0 }}>
          {[
            { rank: 1,  name: "CourtVision", initials: "C", units: "+12.4u", c1: "#FF2D2D", c2: "#D81B7A" },
            { rank: 2,  name: "SharpBets",   initials: "S", units: "+8.7u",  c1: "#246BFF", c2: "#8B00FF" },
            { rank: 3,  name: "AlexWins",    initials: "A", units: "+6.3u",  c1: "#00C2A8", c2: "#246BFF" },
            { rank: 12, name: "you",         initials: "M", units: "+2.1u",  c1: "#FF2D2D", c2: "#D81B7A", you: true },
          ].map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderBottom: i < 3 ? "0.5px solid var(--line)" : "0", background: r.you ? "rgba(255,45,45,0.06)" : "transparent" }}>
              <div style={{ width: 24, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: r.you ? "var(--fire-red)" : (r.rank <= 3 ? "#fff" : "var(--text-faint)") }}>{r.rank}</div>
              {r.you ? <Splash size={26}/> : <div className="avatar" style={{ width: 26, height: 26, fontSize: 11, "--a1": r.c1, "--a2": r.c2 }}>{r.initials}</div>}
              <div style={{ flex: 1, fontSize: 13, fontWeight: r.you ? 800 : 600, color: r.you ? "var(--fire-red)" : "#fff" }}>{r.name}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: "var(--teal-boost)" }}>{r.units}</div>
            </div>
          ))}
        </div>
      </div>

      <MeSection title="Account">
        <MeRow icon="user"   label="Edit profile"      sub="Marcus · @marcus.213"                                         onClick={() => {}}/>
        <MeRow icon="shield" label="Verification"      sub={browseOnly ? "Browse only · Verify to predict" : "Verified · CA"} badge={browseOnly ? "Verify" : null} onClick={() => {}}/>
        <MeRow icon="wallet" label="Linked wallets"    sub="Coinbase · USDC"                                              onClick={() => {}}/>
        <MeRow icon="bell"   label="Notifications"     sub="Live games, picks settling"                                   onClick={() => {}}/>
      </MeSection>

      <MeSection title="Responsible play">
        <MeRow icon="shield" label="Deposit limits"    sub="$50 / day · $200 / week" onClick={() => {}}/>
        <MeRow icon="info"   label="Session reminders" sub="Every 30 min"            onClick={() => {}}/>
        <MeRow icon="lock"   label="Cool-down"         sub="Self-pause 24h–6mo"      onClick={() => {}}/>
      </MeSection>

      <MeSection title="Preferences">
        <MeRow icon="target"  label="Audience mode"    sub={audience === "bettor" ? "Bettor-first · Pro tools" : "Fan-first · Plain-English picks"} onClick={onTweakAudience}/>
        <MeRow icon="fire"    label="Following"        sub="3 creators · 6 teams"   onClick={() => {}}/>
        <MeRow icon="diamond" label="Fan Pass benefits" sub="View tier perks"       onClick={() => {}}/>
      </MeSection>

      <MeSection title="Support">
        <MeRow icon="info"   label="Help center"              onClick={() => {}}/>
        <MeRow icon="shield" label="Terms · Privacy · Risk"   onClick={() => {}}/>
        <MeRow icon="x"      label="Sign out" sub="Switch to another profile" onClick={onLogout} danger/>
      </MeSection>

      <div style={{ padding: "18px 20px 100px", textAlign: "center", fontSize: 10, color: "var(--text-mute)", lineHeight: 1.6 }}>
        <BrandMark size={11} mono style={{ opacity: 0.5, marginBottom: 6 }}/>
        <div style={{ fontFamily: "var(--font-mono)" }}>v0.4 · build 1278</div>
        <div>Predictions involve real risk. 21+ where eligible.</div>
      </div>

      <TabBar active={activeTab} onTab={onTab}/>
    </div>
  );
};

// ── Helpers ───────────────────────────────────────────────────
const MeSection = ({ title, children }) => (
  <div style={{ padding: "0 20px 22px" }}>
    <div className="t-label" style={{ marginBottom: 8, paddingLeft: 4 }}>{title}</div>
    <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>{children}</div>
  </div>
);

const MeRow = ({ icon, label, sub, badge, danger, onClick }) => (
  <button onClick={onClick} style={{ width: "100%", background: "transparent", border: 0, padding: "14px 14px", display: "flex", alignItems: "center", gap: 12, color: "#fff", borderBottom: "0.5px solid var(--line)", textAlign: "left", cursor: "pointer" }}>
    <div style={{ width: 34, height: 34, borderRadius: 10, background: danger ? "rgba(255,45,45,0.10)" : "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <Icon name={icon} size={16} color={danger ? "var(--fire-red)" : "#fff"}/>
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: danger ? "var(--fire-red)" : "#fff" }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>{sub}</div>}
    </div>
    {badge && <span className="tag" style={{ background: "var(--fire-red)", color: "#fff", padding: "4px 10px" }}>{badge}</span>}
    {!badge && !danger && <Icon name="chevron" size={14} color="var(--text-faint)"/>}
  </button>
);

const PicksEmpty = ({ title, sub, cta, onClick }) => (
  <div style={{ padding: "30px 20px 20px", textAlign: "center" }}>
    <Mascot size={120} floaty style={{ margin: "0 auto 18px", filter: "drop-shadow(0 8px 20px rgba(255,45,45,0.3)) grayscale(0.3)" }}/>
    <div className="t-display" style={{ fontSize: 22, marginBottom: 6 }}>{title}</div>
    <div style={{ fontSize: 13, color: "var(--text-faint)", lineHeight: 1.5, marginBottom: 22, maxWidth: 280, marginLeft: "auto", marginRight: "auto" }}>{sub}</div>
    {cta && <button onClick={onClick} className="btn btn-primary" style={{ padding: "12px 22px" }}>{cta}</button>}
  </div>
);

typeof window !== "undefined" && Object.assign(window, { Live, Picks, Wallet, Me });

// app.jsx — fans.market prototype root.
// Routes between onboarding flow and the 5 main tabs.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "audience": "fan",
  "access": "eligible",
  "discovery": "live",
  "funded": "pre",
  "startScreen": "profile"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const [screen, setScreen] = React.useState(t.startScreen === "home" ? "app" : (t.startScreen || "profile"));
  const [activeTab, setActiveTab] = React.useState("home");
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [activePick, setActivePick] = React.useState(null);
  const [settled, setSettled] = React.useState(null);

  // Tweak-driven jumps
  const lastStartScreen = React.useRef(t.startScreen);
  React.useEffect(() => {
    if (t.startScreen === lastStartScreen.current) return;
    lastStartScreen.current = t.startScreen;
    if (t.startScreen === "settle") {
      setSettled({ pick: { stake: 5, side: "yes", payout: "8.05", payoutMult: 1.61 }, outcome: "win" });
      setScreen("settle");
    } else if (t.startScreen === "home") {
      setScreen("app"); setActiveTab("home");
    } else if (t.startScreen === "live") {
      setScreen("app"); setActiveTab("live");
    } else if (t.startScreen === "wallet") {
      setScreen("app"); setActiveTab("wallet");
    } else if (t.startScreen === "me") {
      setScreen("app"); setActiveTab("me");
    } else if (t.startScreen === "picks") {
      setScreen("app"); setActiveTab("pick");
    } else {
      setScreen(t.startScreen);
    }
  }, [t.startScreen]);

  // Blocked overrides everything
  React.useEffect(() => {
    if (t.access === "blocked" && screen !== "blocked") setScreen("blocked");
  }, [t.access]);

  // ── Handlers ──────────────────────────────────────
  const goHome = () => {
    setScreen("app");
    setActiveTab("home");
    setSettled(null);
    setSheetOpen(false);
  };
  const onTab = (id) => {
    setActiveTab(id);
    setScreen("app");
    setSettled(null);
    setSheetOpen(false);
  };
  const openPick = (id) => {
    setActivePick({ id });
    setScreen("pick");
  };
  const makePick = (pickData) => {
    setActivePick(pickData);
    setSheetOpen(true);
  };
  const settle = (pickData) => {
    setSheetOpen(false);
    const win = Math.random() > 0.35;
    setSettled({ pick: pickData, outcome: win ? "win" : "loss" });
    setScreen("settle");
  };

  // ── Render ─────────────────────────────────────────
  if (t.access === "blocked" || screen === "blocked") {
    return (
      <>
        <Blocked onBack={() => { setTweak("access", "eligible"); setScreen("profile"); }}/>
        <TweaksUI t={t} setTweak={setTweak}/>
      </>
    );
  }

  if (screen === "profile") {
    return (
      <>
        <ProfilePicker onSelect={(p) => {
          if (p && !p.verified) setTweak("access", "browse");
          else if (p && p.verified && t.access === "browse") setTweak("access", "eligible");
          setScreen("discovery");
        }}/>
        <TweaksUI t={t} setTweak={setTweak}/>
      </>
    );
  }

  if (screen === "discovery") {
    return (
      <>
        <LiveDiscovery
          profile="M"
          organic={t.discovery === "organic"}
          onContinue={() => setScreen("gate")}
        />
        <TweaksUI t={t} setTweak={setTweak}/>
      </>
    );
  }

  if (screen === "gate") {
    return (
      <>
        <EntryGate onDone={() => setScreen("onboarding")}/>
        <TweaksUI t={t} setTweak={setTweak}/>
      </>
    );
  }

  if (screen === "onboarding") {
    return (
      <>
        <LightOnboarding audience={t.audience} onDone={() => { setScreen("app"); setActiveTab("home"); }}/>
        <TweaksUI t={t} setTweak={setTweak}/>
      </>
    );
  }

  // Pick detail
  if (screen === "pick") {
    return (
      <>
        <GuidedPick
          onBack={goHome}
          onMakePick={makePick}
          access={t.access}
          funded={t.funded === "post"}
        />
        {sheetOpen && (
          <PredictionSheet
            pick={activePick}
            funded={t.funded === "post"}
            access={t.access}
            onClose={() => setSheetOpen(false)}
            onSettle={settle}
          />
        )}
        <TweaksUI t={t} setTweak={setTweak}/>
      </>
    );
  }

  // Settlement
  if (screen === "settle" && settled) {
    return (
      <>
        <Settlement pick={settled.pick} outcome={settled.outcome} onContinue={goHome}/>
        <TweaksUI t={t} setTweak={setTweak}/>
      </>
    );
  }

  // ── Main app tabs ──────────────────────────────────
  const sharedProps = {
    access: t.access,
    audience: t.audience,
    funded: t.funded === "post",
    onOpenPick: openPick,
    onTab,
    activeTab,
  };

  let TabContent;
  if (activeTab === "home") {
    TabContent = t.audience === "bettor"
      ? <BettorHome {...sharedProps} onOpenLive={() => onTab("live")}/>
      : <Arena {...sharedProps} onOpenLive={() => onTab("live")}/>;
  } else if (activeTab === "live") {
    TabContent = <Live {...sharedProps}/>;
  } else if (activeTab === "pick") {
    TabContent = <Picks {...sharedProps}/>;
  } else if (activeTab === "wallet") {
    TabContent = <Wallet {...sharedProps} onFund={() => setTweak("funded", "post")}/>;
  } else if (activeTab === "me") {
    TabContent = <Me {...sharedProps}
      onLogout={() => { setScreen("profile"); setActiveTab("home"); }}
      onTweakAudience={() => setTweak("audience", t.audience === "fan" ? "bettor" : "fan")}/>;
  } else {
    TabContent = <Arena {...sharedProps} onOpenLive={() => onTab("live")}/>;
  }

  return (
    <>
      {TabContent}
      <TweaksUI t={t} setTweak={setTweak}/>
    </>
  );
}

// ─── Tweaks UI ─────────────────────────────────────────────────
function TweaksUI({ t, setTweak }) {
  return (
    <TweaksPanel title="fans.market · Tweaks">
      <TweakSection label="Journey route"/>
      <TweakRadio label="Audience" value={t.audience}
        options={[{ value: "fan", label: "Fan-first" }, { value: "bettor", label: "Bettor" }]}
        onChange={(v) => setTweak("audience", v)}/>
      <TweakRadio label="Discovery" value={t.discovery}
        options={[{ value: "live", label: "Live" }, { value: "organic", label: "Organic" }]}
        onChange={(v) => setTweak("discovery", v)}/>

      <TweakSection label="Access state"/>
      <TweakRadio label="Access" value={t.access}
        options={[
          { value: "eligible", label: "Eligible" },
          { value: "browse",   label: "Browse" },
          { value: "blocked",  label: "Blocked" },
        ]}
        onChange={(v) => setTweak("access", v)}/>
      <TweakRadio label="Funded" value={t.funded}
        options={[{ value: "pre", label: "Pre" }, { value: "post", label: "Post" }]}
        onChange={(v) => setTweak("funded", v)}/>

      <TweakSection label="Jump to screen"/>
      <TweakSelect label="Screen" value={t.startScreen}
        options={[
          { value: "profile",    label: "Onboarding · Profile picker" },
          { value: "discovery",  label: "Onboarding · Live discovery" },
          { value: "gate",       label: "Onboarding · Entry gate" },
          { value: "onboarding", label: "Onboarding · Light setup" },
          { value: "home",       label: "Tab · Home (Arena)" },
          { value: "live",       label: "Tab · Live" },
          { value: "picks",      label: "Tab · Picks" },
          { value: "wallet",     label: "Tab · Wallet" },
          { value: "me",         label: "Tab · Me" },
          { value: "pick",       label: "Flow · Guided pick" },
          { value: "settle",     label: "Flow · Settlement" },
        ]}
        onChange={(v) => setTweak("startScreen", v)}/>
    </TweaksPanel>
  );
}

// ─── Mount ──────────────────────────────────────────────────────
function Root() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      minHeight: "100vh",
    }}>
      <IOSDevice width={402} height={874} dark={true}>
        <App/>
      </IOSDevice>
    </div>
  );
}



export default function FansMarketApp() {
  return <Root />;
}
