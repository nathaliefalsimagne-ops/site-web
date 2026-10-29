(function () {
  var cfg = window.NATAN || {};
  var pages = [
    ["index.html", "Accueil"],
    ["formations.html", "Catalogue"],
    ["transparence.html", "Transparence"],
    ["espace-apprenant.html", "Espace apprenant"],
    ["outil-six-questions.html", "Outil gratuit"]
  ];
  var here = location.pathname.split("/").pop() || "index.html";
  if (here === "formation.html") here = "formations.html";

  var header = document.getElementById("site-header");
  if (header) {
    var links = pages.map(function (p) {
      var cur = p[0] === here ? ' aria-current="page"' : "";
      return '<li><a class="lnk" href="' + p[0] + '"' + cur + ">" + p[1] + "</a></li>";
    }).join("");
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap nav">' +
      '<a class="brand" href="index.html"><b>NATAN</b><span>Consulting · Formations IA</span></a>' +
      '<button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button>' +
      '<ul id="menu">' + links +
      '<li><a class="btn" href="index.html#contact">Parler à Nathalie</a></li></ul></div>';
    var btn = header.querySelector(".menu-btn");
    var menu = header.querySelector("#menu");
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="wrap ft"><div><b style="color:#fff">NATAN Consulting</b><br>Nathalie Falsimagne, expert-comptable<br>Architecture IA et coaching cyber pour cabinets comptables et TPE</div>' +
      '<div><a href="transparence.html">Charte de transparence</a><br><a href="formations.html">Catalogue</a><br><a href="outil-six-questions.html">Six questions avant d\'acheter</a></div></div>';
  }
})();

// Utilitaires partagés
window.$ = function (sel, root) { return (root || document).querySelector(sel); };
window.el = function (tag, attrs, children) {
  var n = document.createElement(tag);
  Object.keys(attrs || {}).forEach(function (k) {
    if (k === "text") n.textContent = attrs[k];
    else if (k === "class") n.className = attrs[k];
    else n.setAttribute(k, attrs[k]);
  });
  (children || []).forEach(function (c) { n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
  return n;
};
window.store = {
  get: function (k, d) { try { var v = localStorage.getItem("natan." + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set: function (k, v) { try { localStorage.setItem("natan." + k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } }
};

// Carte d'offre, partagée entre l'accueil et le catalogue
window.offerCard = function (o) {
  var tags = [el("span", { class: "tag", text: TYPES[o.type] })];
  o.publics.forEach(function (p) { tags.push(el("span", { class: "tag l", text: PUBLICS[p] })); });
  var href = o.lien || ("formation.html?id=" + encodeURIComponent(o.id));
  return el("article", { class: "card offer" }, [
    el("div", {}, tags),
    el("h3", { text: o.titre }),
    el("p", { class: "c small", text: o.sousTitre }),
    el("p", { text: o.accroche }),
    el("p", { class: "meta", text: o.duree + " · " + o.niveau }),
    el("div", { class: "more" }, [el("a", { class: "btn ghost", href: href, text: o.lien ? o.lienLibelle : "Voir la fiche" })])
  ]);
};
