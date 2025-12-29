<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>MRL Travel | Obrigado</title>
  <meta name="robots" content="noindex, nofollow" />
  <meta name="theme-color" content="#0b1f3b" />

  <!-- ✅ COLE AQUI o seu tracking de conversão -->
  <!-- Meta Pixel / GA4 evento / Google Ads conversão... -->

  <style>
    :root{
      --text:#ecf2ff;
      --muted:#b9c6ea;
      --border: rgba(255,255,255,.12);
      --shadow: 0 18px 60px rgba(0,0,0,.45);
      --gold:#d7b46a;
      --gold2:#b9852a;
      --hero: url("/img/hero.jpg");
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
      color:var(--text);
      background:#050812;
    }
    .bg{
      position:fixed; inset:0; z-index:-3;
      background-image: var(--hero);
      background-size: cover;
      background-position: center;
      transform: scale(1.02);
    }
    .overlay{
      position:fixed; inset:0; z-index:-2;
      background:
        radial-gradient(1100px 680px at 22% 18%, rgba(44,111,255,.30), transparent 60%),
        radial-gradient(900px 600px at 78% 18%, rgba(215,180,106,.25), transparent 65%),
        linear-gradient(180deg, rgba(5,8,18,.78), rgba(5,8,18,.92));
    }
    .wrap{
      min-height:100vh;
      display:grid;
      place-items:center;
      padding:24px;
    }
    .card{
      width:min(680px, 96vw);
      border-radius: 22px;
      border:1px solid var(--border);
      background: rgba(10,16,32,.55);
      backdrop-filter: blur(10px);
      box-shadow: var(--shadow);
      padding: 26px 22px;
      text-align:center;
    }
    h1{
      margin: 0 0 10px;
      font-size: 30px;
      letter-spacing: -.2px;
    }
    p{
      margin: 8px 0;
      color: var(--muted);
      font-weight:800;
    }
    .count{
      margin: 16px auto 0;
      display:inline-flex; align-items:center; gap:8px;
      padding: 10px 14px;
      border-radius: 999px;
      border:1px solid var(--border);
      background: rgba(255,255,255,.05);
      color: var(--muted);
      font-weight:1000;
    }
    .btn{
      margin-top: 16px;
      display:inline-flex; align-items:center; justify-content:center;
      padding: 12px 18px;
      border-radius: 14px;
      border:1px solid rgba(215,180,106,.35);
      background: linear-gradient(180deg, rgba(215,180,106,.95), rgba(185,133,42,.95));
      color:#0a0f1e;
      font-weight:1000;
      cursor:pointer;
      box-shadow: 0 10px 28px rgba(0,0,0,.25);
    }
    .who{
      margin-top: 12px;
      font-size: 13px;
      color: rgba(255,255,255,.80);
      opacity:.9;
      font-weight:800;
    }
  </style>
</head>
<body>
  <div class="bg"></div>
  <div class="overlay"></div>

  <main class="wrap">
    <section class="card">
      <h1>Obrigado por preencher nosso formulário!</h1>
      <p>Em seguida você será redirecionado(a) para nosso grupo VIP.</p>

      <div class="count">Redirecionando em <span id="sec">3</span>s…</div>

      <button class="btn" id="goNow">Ir agora para o grupo</button>

      <div class="who" id="who"></div>
    </section>
  </main>

  <script>
    const qs = new URLSearchParams(window.location.search);
    const next = qs.get("next") || "https://chat.whatsapp.com/KZ1hgGkZMog5JsdCWHSr96";
    const nome = qs.get("nome");
    const whatsapp = qs.get("whatsapp");

    const who = document.getElementById("who");
    if (nome || whatsapp) {
      const wFmt = whatsapp ? whatsapp.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3") : "";
      who.textContent = `${nome ? "Nome: " + nome : ""}${nome && whatsapp ? " • " : ""}${whatsapp ? "WhatsApp: " + wFmt : ""}`;
    }

    document.getElementById("goNow").addEventListener("click", () => {
      window.location.href = next;
    });

    let s = 3;
    const sec = document.getElementById("sec");
    const timer = setInterval(() => {
      s--;
      sec.textContent = String(s);
      if (s <= 0) {
        clearInterval(timer);
        window.location.href = next;
      }
    }, 1000);
  </script>
</body>
</html>
