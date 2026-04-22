import React, { useState } from "react";

const slides = [
  { type: "cover" },
  { type: "overview" },
  {
    type: "question", id: 1,
    title: "スロー",
    videoUrl: "https://www.youtube.com/shorts/7VUU9bh5sws",
    videoEmbed: false,
    thumbnail: "https://drive.google.com/uc?export=view&id=1hkisTXTfoBBVGd95DTqRfB5dKs0ue4Y0",
    pointsLabel: "意識するポイント",
    sentences: [
      { id: "q1_1", parts: ["構え①：上の手は「", "」の位置で持つ"], blanks: [{ id: "b1", answer: "肘幅" }], choices: ["根元", "肩幅", "肘幅", "エンド"] },
      { id: "q1_2", parts: ["構え②：スローポジション（上の手は下の手より「", "」位置に）"], blanks: [{ id: "b2", answer: "高い" }], choices: ["高い", "水平な", "低い"] },
      { id: "q1_3", parts: ["投げる前：エンドを「", "」に向けたまま投げる"], blanks: [{ id: "b3", answer: "相手" }], choices: ["空", "相手", "地面", "自分"] },
      { id: "q1_4", parts: ["投げ方：（右手の場合）時計の針で「", "」時の角度で振る"], blanks: [{ id: "b4", answer: "1～7時" }], choices: ["12～6時", "1～7時", "2～8時", "3～9時"] },
      { id: "q1_5", parts: ["投げ終わり：下の手が「", "」にあるぐらい振り切る"], blanks: [{ id: "b5", answer: "腰骨" }], choices: ["脇", "腰骨", "胸", "へそ"] },
    ],
  },
  {
    type: "explanation", id: 1, title: "解説①：スロー",
    points: [
      { label: "構え①", text: "上の手の肘がエンドにつく長さで持つのが投げやすい幅。" },
      { label: "構え②", text: "上の手が下の手より下がると投げる時にボールが上に抜けてしまう。" },
      { label: "投げる前", text: "エンドを相手に向けることで、左右のブレがなくなる。" },
      { label: "投げ方", text: "「縦振り」ではあるが「1時→7時」が実際の縦振りイメージ。" },
      { label: "投げ終わり", text: "下の手が残らないように腰骨まで振り切る。" },
    ],
  },
  {
    type: "question", id: 2,
    title: "キャッチ",
    videoUrl: "",
    videoEmbed: false,
    thumbnail: null,
    pointsLabel: "意識するポイント",
    sentences: [
      { id: "q2_1", parts: ["構え①：上の手は「", "」でクロスを持つ"], blanks: [{ id: "b6", answer: "肘幅" }], choices: ["根元", "肩幅", "肘幅", "エンド"] },
      { id: "q2_2", parts: ["構え②：「", "」構える"], blanks: [{ id: "b7", answer: "脱力して" }], choices: ["力んで", "脱力して"] },
      { id: "q2_3", parts: ["取る前：ボールに対して「", "」する"], blanks: [{ id: "b8", answer: "面の正面を向ける" }], choices: ["面の正面を向ける", "面を斜めにする", "面を下げる"] },
      { id: "q2_4", parts: ["取る瞬間①：ボールが大きくそれた場合、「", "」とる"], blanks: [{ id: "b9", answer: "上の手の位置を変えて長さを調整して" }], choices: ["上の手の位置を変えて長さを調整して", "そのままの持ち手のまま手を伸ばして"] },
      { id: "q2_5", parts: ["取る瞬間②：ボールの勢いが強い場合は「", "」ことでボールの勢いを無くす"], blanks: [{ id: "b10", answer: "ボールと同じ方向に引く" }], choices: ["ボールと同じ方向に引く", "地面と水平になるぐらい引く", "ボールに対して正面から勢いをつける"] },
    ],
  },
  {
    type: "explanation", id: 2, title: "解説②：キャッチ",
    points: [
      { label: "構え①", text: "顔の近くで扱った方が取りやすいが、根元を持つと窮屈になるので肩幅が望ましい。" },
      { label: "構え②", text: "ボールの勢いを吸収したり、ボールがそれた時に長さを調整する上でも、脱力して持つ。" },
      { label: "取る前", text: "面がボールに対してしっかりと向いてないと、構造的にボールがクロスに入らない。" },
      { label: "取る瞬間①", text: "このために上の手を脱力して構えて調整する。高いボールは上の手を下げてクロスを伸ばし、体のど真ん中に来た場合は根元を持って短くして取る。" },
      { label: "取る瞬間②", text: "「引く」ことを強く意識すると引きすぎるので、重要なのはボールの勢いを吸収すること。" },
    ],
  },
  {
    type: "question", id: 3,
    title: "スクープ",
    videoUrl: "",
    videoEmbed: false,
    thumbnail: null,
    pointsLabel: "意識するポイント",
    sentences: [
      { id: "q3_1", parts: ["構え：上の手は「", "」でクロスを持つ"], blanks: [{ id: "b11", answer: "ひじ幅" }], choices: ["根元", "肩幅", "ひじ幅", "エンド"] },
      { id: "q3_2", parts: ["拾い方①：ヘッドの先が地面と「", "」になるようにする"], blanks: [{ id: "b12", answer: "水平" }], choices: ["水平", "垂直"] },
      { id: "q3_3", parts: ["拾い方②：クロスの「", "」まで入れる"], blanks: [{ id: "b13", answer: "ポケット" }], choices: ["ポケット", "ヘッドの先", "ヘッドの先とポケットの間"] },
      { id: "q3_4", parts: ["拾った後①：クロスを立ててヘッドの面を「", "」"], blanks: [{ id: "b14", answer: "自分の方に向ける" }], choices: ["自分の方に向ける", "投げたい方に向ける", "横に向ける"] },
      { id: "q3_5", parts: ["拾った後②：拾った後は「", "」まで持ってくる"], blanks: [{ id: "b15", answer: "スローポジション" }], choices: ["腰の位置", "胸の位置", "スローポジション"] },
    ],
  },
  {
    type: "explanation", id: 3, title: "解説③：スクープ",
    points: [
      { label: "構え", text: "すぐ投げられるように長く持つ。実際には肩幅で持ったり、根元で持ったりする場合もあり、追って取り組んでいく。" },
      { label: "拾い方①", text: "下の手を下げることでより水平になる。角度があると地面に突き刺さって拾えない。" },
      { label: "拾い方②", text: "しっかりとポケットに入れないと、その後の動作でボールが安定しない。" },
      { label: "拾った後①", text: "下の手首を自分に向けることでよりクロスが立って自分の方を向かせることができ、その後の動作がやりやすくなる。" },
      { label: "拾った後②", text: "拾って満足するのではなく、その後の展開のためにもすぐにスローポジションまで持ってくる。" },
    ],
  },
  {
    type: "question", id: 4,
    title: "言葉の定義",
    videoUrl: "",
    videoEmbed: false,
    thumbnail: null,
    pointsLabel: "意識するポイント",
    sentences: [
      { id: "q4_1", parts: ["クレードルとは「", "」である"], blanks: [{ id: "b16", answer: "ボールの重さを感じること" }], choices: ["クロスをくるくる回すこと", "投げる前に必ずやる予備動作", "ボールの重さを感じること"] },
      { id: "q4_2", parts: ["スローポジションとは投げる時のベースとなる手の位置であり、上の手が「", "」の高さかつ下の手より高い位置"], blanks: [{ id: "b17", answer: "頭" }], choices: ["頭", "首", "胸", "腰"] },
      { id: "q4_3", parts: ["ボックスとは、キャッチの時に取りやすいベースとなる位置であり、場所は「", "」である"], blanks: [{ id: "b18", answer: "顔の横" }], choices: ["顔の横", "首の横", "胸の横", "頭の上"] },
      { id: "q4_4", parts: ["ダブルスレットとは2つの脅威が出せるクロスの持ち方であり、いつでも「", "」の2つができるクロスの持ち方"], blanks: [{ id: "b19", answer: "1on1とパス" }], choices: ["1on1とパス", "シュートとパス", "1on1とシュート"] },
      { id: "q4_5", parts: ["トリプルスレットとは3つの脅威が出せるクロスの持ち方であり、いつでも「", "」の3つができるクロスの持ち方"], blanks: [{ id: "b20", answer: "1on1とパスとシュート" }], choices: ["1on1とパスとシュート", "スクープとシュートとパス", "スクープと1on1とパス"] },
    ],
  },
  {
    type: "explanation", id: 4, title: "解説④：言葉の定義",
    points: [
      { label: "クレードル", text: "ボールの重さを感じるためにも、ボールを持たずにクレードルの動作をすることはNG（下手になる）。" },
      { label: "スローポジション", text: "今後色々な場所で投げるためにも、まずはしっかりとスローポジションを覚え、キャッチ後・スクープ後にすぐスローポジションに持ってくることを意識。" },
      { label: "ボックス", text: "取りやすさだけでなく、その後のパスやシュートも考えるとボックスでもらうのが一番都合が良い。" },
      { label: "ダブルスレット", text: "ダブルスレットからパスを出せないとダブルスレットにならないので、ダブルスレット→スローポジションのクレードルが重要。" },
      { label: "トリプルスレット", text: "理想は常にトリプルスレットであり、基礎ができてからトリプルスレットでのスロー（スローポジションとは異なり低い位置でクロスを扱う）を身に着ける。" },
    ],
  },
  { type: "result" },
];

function getResultMessage(score, total) {
  const pct = score / total;
  if (pct === 1)  return { emoji: "🏆", title: "ユース候補だね！",     sub: "完璧な理解力。この調子でグラウンドでも魅せよう。" };
  if (pct >= 0.8) return { emoji: "🔥", title: "なかなかやるじゃん！", sub: "基礎はバッチリ。あとは反復あるのみ。" };
  if (pct >= 0.6) return { emoji: "💪", title: "まだまだこれから！",   sub: "伸びしろだらけ。練習で差をつけよう。" };
  if (pct >= 0.4) return { emoji: "😅", title: "要復習だ...",          sub: "解説をもう一度読み直してもう一回チャレンジ！" };
  return           { emoji: "🥍", title: "もっと頑張れ！",             sub: "基礎からしっかり叩き込もう。ラクロスはここから始まる。" };
}

// ── Dropdown: position:fixed で overflow clipping を完全回避 ─────────────────
function BlankSelect({ blank, sentence, userAnswers, openSelect, onOpen, onSelect }) {
  const selected = userAnswers[blank.id];
  const isOpen   = openSelect === blank.id;
  const btnRef   = React.useRef(null);
  const [pos, setPos] = React.useState({ top: 0, bottom: 0, left: 0, goUp: false });

  const handleOpen = (e) => {
    e.stopPropagation();
    if (isOpen) { onOpen(null); return; }
    if (btnRef.current) {
      const rect   = btnRef.current.getBoundingClientRect();
      const dropH  = sentence.choices.length * 50 + 8;
      const goUp   = window.innerHeight - rect.bottom < dropH;
      setPos({ top: rect.bottom + 4, bottom: window.innerHeight - rect.top + 4, left: rect.left, goUp });
    }
    onOpen(blank.id);
  };

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <button
        ref={btnRef}
        onClick={handleOpen}
        style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          minWidth: 76, padding: "3px 10px", borderRadius: 6,
          border: selected ? "2px solid #22c55e" : "2px dashed #f59e0b",
          background: selected ? "#f0fdf4" : "#fffbeb",
          color: selected ? "#15803d" : "#92400e",
          fontWeight: 700, fontSize: "0.95em", cursor: "pointer",
        }}
      >
        {selected || "　　　"}
        <span style={{ fontSize: "0.7em", opacity: 0.6 }}>▼</span>
      </button>

      {isOpen && (
        <div
          onClick={e => e.stopPropagation()}
          style={{
            position: "fixed",
            left: pos.left,
            ...(pos.goUp ? { bottom: pos.bottom } : { top: pos.top }),
            zIndex: 9999,
            background: "#fff",
            border: "2px solid #cbd5e1",
            borderRadius: 12,
            boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
            minWidth: 140,
            overflow: "hidden",
          }}
        >
          {sentence.choices.map((c) => (
            <button
              key={c}
              onClick={() => { onSelect(blank.id, c); }}
              style={{
                display: "block", width: "100%",
                padding: "13px 18px", textAlign: "left",
                background: "none", border: "none",
                borderBottom: "1px solid #f1f5f9",
                cursor: "pointer", fontSize: "1em", fontWeight: 600, color: "#1e293b",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f0fdf4"}
              onMouseLeave={e => e.currentTarget.style.background = "none"}
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </span>
  );
}

function SentenceRow({ sentence, userAnswers, openSelect, onOpen, onSelect }) {
  let blankIdx = 0;
  return (
    <li style={{ padding: "10px 0", borderBottom: "1px solid #f1f5f9", lineHeight: 1.8, fontSize: "0.88em", color: "#1e293b" }}>
      {sentence.parts.map((part, i) => {
        if (i < sentence.blanks.length) {
          const blank = sentence.blanks[blankIdx++];
          return (
            <span key={i}>
              {part}
              <BlankSelect blank={blank} sentence={sentence} userAnswers={userAnswers} openSelect={openSelect} onOpen={onOpen} onSelect={onSelect} />
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </li>
  );
}

function CoverSlide({ onNext }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0ea5e9 100%)", color: "#fff", textAlign: "center", padding: 40 }}>
      <div style={{ fontSize: 72, marginBottom: 16 }}>🥍</div>
      <div style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 8, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>ラクロス基礎技術テスト</div>
      <div style={{ fontSize: "1em", opacity: 0.7, marginBottom: 40, letterSpacing: "0.12em" }}>LACROSSE FUNDAMENTAL TEST</div>
      <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 16, padding: "16px 32px", marginBottom: 40, border: "1px solid rgba(255,255,255,0.15)" }}>
        <div style={{ opacity: 0.65, fontSize: "0.88em", marginBottom: 4 }}>新入生向け / 全3問</div>
        <div style={{ fontWeight: 700 }}>クロスの持ち方・投げ方・キャッチ</div>
      </div>
      <button onClick={onNext} style={{ background: "#0ea5e9", color: "#fff", border: "none", borderRadius: 50, padding: "16px 48px", fontSize: "1.1em", fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 24px rgba(14,165,233,0.4)" }}>
        スタート →
      </button>
    </div>
  );
}

function OverviewSlide({ onNext }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f8fafc", padding: 32 }}>
      <div style={{ maxWidth: 520, width: "100%" }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>📋</div>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "1.8rem", fontWeight: 900, color: "#0f172a", marginBottom: 8 }}>テストについて</h2>
        <p style={{ color: "#64748b", marginBottom: 28 }}>受け方を確認してから始めよう。</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {[
            ["🎯", "全3問", "クロスの基本動作に関する穴埋め問題"],
            ["📱", "操作方法", "空欄をタップして選択肢を選ぶ。全部埋めたら「回答を送信」"],
            ["📺", "動画あり", "各問題に動画リンクあり。事前に見てから解くのを推奨"],
            ["📊", "結果確認", "最後に得点と苦手ポイントを表示"],
          ].map(([icon, label, desc]) => (
            <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#fff", borderRadius: 12, padding: "14px 18px", border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: 22 }}>{icon}</span>
              <div>
                <div style={{ fontWeight: 800, color: "#0f172a", marginBottom: 2 }}>{label}</div>
                <div style={{ color: "#64748b", fontSize: "0.9em" }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onNext} style={{ width: "100%", background: "#0f172a", color: "#fff", border: "none", borderRadius: 12, padding: "16px", fontSize: "1.05em", fontWeight: 800, cursor: "pointer" }}>
          問題を始める →
        </button>
      </div>
    </div>
  );
}

function QuestionSlide({ slide, onSubmit }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [openSelect, setOpenSelect]   = useState(null);
  const [showVideo, setShowVideo]     = useState(false);

  const allBlanks   = slide.sentences.flatMap(s => s.blanks);
  const filledCount = allBlanks.filter(b => userAnswers[b.id]).length;
  const allFilled   = filledCount === allBlanks.length;

  const handleSelect = (blankId, value) => {
    setUserAnswers(prev => ({ ...prev, [blankId]: value }));
    setOpenSelect(null);
  };
  const handleSubmit = () => {
    const results = {};
    allBlanks.forEach(b => { results[b.id] = { answer: userAnswers[b.id], correct: b.answer }; });
    onSubmit(results);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9", display: "flex", flexDirection: "column", paddingBottom: allFilled ? 88 : 0 }}
      onClick={() => setOpenSelect(null)}>

      {/* Header */}
      <div style={{ background: "#0f172a", color: "#fff", padding: "14px 16px", display: "flex", alignItems: "center", gap: 10, position: "sticky", top: 0, zIndex: 50 }}>
        <span style={{ background: "#0ea5e9", borderRadius: 8, padding: "3px 12px", fontWeight: 900, fontSize: "0.82em", flexShrink: 0 }}>Q{slide.id}</span>
        <span style={{ fontWeight: 700, fontSize: "0.97em" }}>{slide.title}</span>
        <span style={{ marginLeft: "auto", fontSize: "0.78em", opacity: 0.6, flexShrink: 0 }}>{filledCount}/{allBlanks.length}</span>
      </div>
      <div style={{ height: 4, background: "#1e293b" }}>
        <div style={{ height: "100%", background: "#0ea5e9", width: `${(filledCount / allBlanks.length) * 100}%`, transition: "width 0.3s ease" }} />
      </div>

      {/* Thumbnail row */}
      <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 16px", background: "#1e293b" }}>
        <div
          onClick={e => { e.stopPropagation(); slide.videoEmbed ? setShowVideo(true) : window.open(slide.videoUrl, "_blank"); }}
          style={{ width: 140, height: 88, flexShrink: 0, background: "#0f172a", borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", position: "relative" }}
        >
          {slide.thumbnail ? <img src={slide.thumbnail} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: 26 }}>🎬</span>}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.35)" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 12, marginLeft: 2 }}>▶</span>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75em", marginBottom: 6 }}>動画を見てから問題を解こう</div>
          {slide.videoEmbed ? (
            <button
              onClick={e => { e.stopPropagation(); setShowVideo(true); }}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#0ea5e9", color: "#fff", borderRadius: 8, padding: "7px 16px", border: "none", fontWeight: 800, fontSize: "0.88em", cursor: "pointer" }}
            >
              ▶ 動画を見る
            </button>
          ) : (
            <a href={slide.videoUrl} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#0ea5e9", color: "#fff", borderRadius: 8, padding: "7px 16px", textDecoration: "none", fontWeight: 800, fontSize: "0.88em" }}>
              ▶ 動画はこちら
            </a>
          )}
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16 }}
        >
          <div onClick={e => e.stopPropagation()} style={{ width: "100%", maxWidth: 520, background: "#000", borderRadius: 12, overflow: "hidden" }}>
            <iframe src={slide.videoUrl} style={{ width: "100%", aspectRatio: "16/9", border: "none", display: "block" }} allow="autoplay" allowFullScreen />
          </div>
          <button onClick={() => setShowVideo(false)} style={{ marginTop: 16, background: "rgba(255,255,255,0.15)", color: "#fff", border: "none", borderRadius: 8, padding: "10px 28px", fontWeight: 700, cursor: "pointer", fontSize: "0.95em" }}>
            ✕ 閉じる
          </button>
        </div>
      )}

      {/* Questions */}
      <div style={{ flex: 1, padding: 16 }}>
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", overflow: "visible" }}>
          <div style={{ padding: "12px 20px", borderBottom: "2px solid #0ea5e9", fontWeight: 900, fontSize: "0.88em", color: "#0ea5e9", textDecoration: "underline", letterSpacing: "0.06em" }}>
            {slide.pointsLabel}
          </div>
          <ul style={{ listStyle: "none", padding: "0 20px", margin: 0 }}>
            {slide.sentences.map(s => (
              <SentenceRow key={s.id} sentence={s} userAnswers={userAnswers} openSelect={openSelect} onOpen={setOpenSelect} onSelect={handleSelect} />
            ))}
          </ul>
        </div>
        {!allFilled && <div style={{ textAlign: "center", color: "#94a3b8", fontSize: "0.82em", marginTop: 14 }}>空欄をタップして選択してください</div>}
      </div>

      {/* Submit fixed */}
      {allFilled && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "12px 16px", background: "rgba(241,245,249,0.96)", backdropFilter: "blur(8px)", borderTop: "1px solid #e2e8f0", zIndex: 100, animation: "slideUp 0.25s ease" }}>
          <button onClick={handleSubmit} style={{ width: "100%", background: "linear-gradient(135deg, #0ea5e9 0%, #0f172a 100%)", color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: "1.05em", fontWeight: 900, cursor: "pointer", boxShadow: "0 4px 20px rgba(14,165,233,0.35)" }}>
            ✅ 回答を送信
          </button>
        </div>
      )}
    </div>
  );
}

function ExplanationSlide({ slide, questionResults, onNext }) {
  const correctCount = Object.values(questionResults).filter(r => r.answer === r.correct).length;
  const totalCount   = Object.values(questionResults).length;
  return (
    <div style={{ minHeight: "100vh", background: "#f0fdf4", padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ maxWidth: 640, width: "100%" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: "22px", border: "1px solid #bbf7d0", marginBottom: 16, boxShadow: "0 2px 12px rgba(34,197,94,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ fontSize: 30 }}>✅</span>
            <div>
              <div style={{ fontWeight: 900, fontSize: "1.15em", color: "#0f172a" }}>{slide.title}</div>
              <div style={{ color: "#15803d", fontWeight: 700, fontSize: "0.92em" }}>{correctCount}/{totalCount}問正解</div>
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            {Object.entries(questionResults).map(([id, { answer, correct }]) => {
              const ok = answer === correct;
              return (
                <div key={id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #f0fdf4" }}>
                  <span style={{ fontSize: 18 }}>{ok ? "⭕" : "❌"}</span>
                  <span style={{ color: "#64748b", fontSize: "0.9em", flex: 1 }}>
                    あなた：<strong style={{ color: ok ? "#15803d" : "#dc2626" }}>{answer}</strong>
                    {!ok && <span>　正解：<strong style={{ color: "#15803d" }}>{correct}</strong></span>}
                  </span>
                </div>
              );
            })}
          </div>
          <div style={{ background: "#f8fafc", borderRadius: 12, padding: "14px 18px", borderLeft: "4px solid #0ea5e9" }}>
            <div style={{ fontWeight: 800, color: "#0ea5e9", fontSize: "0.82em", marginBottom: 10, letterSpacing: "0.08em" }}>COACHING POINTS</div>
            {slide.points.map(p => (
              <div key={p.label} style={{ marginBottom: 8 }}>
                <span style={{ fontWeight: 800, color: "#0f172a", background: "#e0f2fe", borderRadius: 4, padding: "1px 8px", fontSize: "0.85em", marginRight: 8 }}>{p.label}</span>
                <span style={{ color: "#475569", fontSize: "0.93em" }}>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={onNext} style={{ width: "100%", background: "#0f172a", color: "#fff", border: "none", borderRadius: 12, padding: "16px", fontSize: "1.05em", fontWeight: 800, cursor: "pointer" }}>
          次の問題へ →
        </button>
      </div>
    </div>
  );
}

function ResultSlide({ allResults, onRetry }) {
  const questionSlides = slides.filter(s => s.type === "question");
  const totalBlanks    = questionSlides.flatMap(s => s.sentences.flatMap(sen => sen.blanks));
  const total   = totalBlanks.length;
  const correct = Object.values(allResults).filter(r => r.answer === r.correct).length;
  const { emoji, title, sub } = getResultMessage(correct, total);
  const pct = Math.round((correct / total) * 100);
  const weakSlides = questionSlides.filter(s =>
    s.sentences.flatMap(sen => sen.blanks).some(b => allResults[b.id]?.answer !== b.answer)
  );
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0ea5e9 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, color: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ fontSize: 72 }}>{emoji}</div>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, marginBottom: 8 }}>{title}</div>
        <div style={{ opacity: 0.8, fontSize: "1em" }}>{sub}</div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: "22px 40px", marginBottom: 20, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", textAlign: "center", minWidth: 240 }}>
        <div style={{ fontSize: "3.2rem", fontWeight: 900, lineHeight: 1 }}>{correct}<span style={{ fontSize: "1.4rem", opacity: 0.65 }}>/{total}</span></div>
        <div style={{ opacity: 0.65, marginTop: 4, fontSize: "0.9em" }}>正解数　/　得点率 {pct}%</div>
      </div>
      {weakSlides.length > 0 && (
        <div style={{ background: "rgba(239,68,68,0.15)", borderRadius: 16, padding: "14px 22px", border: "1px solid rgba(239,68,68,0.3)", marginBottom: 20, maxWidth: 440, width: "100%" }}>
          <div style={{ fontWeight: 800, marginBottom: 8, fontSize: "0.88em", opacity: 0.9 }}>🎯 重点的に練習しよう</div>
          {weakSlides.map(s => <div key={s.id} style={{ opacity: 0.85, fontSize: "0.93em", marginBottom: 3 }}>• {s.title}</div>)}
        </div>
      )}
      {correct === total && (
        <div style={{ background: "rgba(34,197,94,0.15)", borderRadius: 16, padding: "14px 22px", border: "1px solid rgba(34,197,94,0.3)", marginBottom: 20, maxWidth: 440, width: "100%", textAlign: "center", fontWeight: 700 }}>
          🏅 全問正解！グラウンドでも魅せてくれ！
        </div>
      )}
      <button onClick={onRetry} style={{ background: "#fff", color: "#0f172a", border: "none", borderRadius: 50, padding: "14px 40px", fontSize: "1em", fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}>
        もう一度チャレンジ
      </button>
    </div>
  );
}

export default function App() {
  const [slideIndex, setSlideIndex]    = useState(0);
  const [allResults, setAllResults]    = useState({});
  const [questionResults, setQResults] = useState({});
  const slide  = slides[slideIndex];
  const goNext = () => setSlideIndex(i => i + 1);
  const handleQuestionSubmit = (results) => { setQResults(results); setAllResults(prev => ({ ...prev, ...results })); goNext(); };
  const handleRetry = () => { setSlideIndex(0); setAllResults({}); setQResults({}); };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Hiragino Sans', 'Noto Sans JP', sans-serif; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      {slide.type === "cover"       && <CoverSlide onNext={goNext} />}
      {slide.type === "overview"    && <OverviewSlide onNext={goNext} />}
      {slide.type === "question"    && <QuestionSlide key={slide.id} slide={slide} onSubmit={handleQuestionSubmit} />}
      {slide.type === "explanation" && <ExplanationSlide slide={slide} questionResults={questionResults} onNext={goNext} />}
      {slide.type === "result"      && <ResultSlide allResults={allResults} onRetry={handleRetry} />}
    </>
  );
}
