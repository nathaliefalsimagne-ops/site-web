// Catalogue NATAN. Pour ajouter une offre : copier un bloc, changer l'id, remplir les champs.
// La fiche de transparence répond aux mêmes six questions pour chaque offre.
// "transparence" ne contient que ce qui diffère du modèle par défaut (voir TRANSPARENCE_DEFAUT).

window.TYPES = {
  formation: "Formation",
  atelier: "Atelier",
  support: "Support",
  exercice: "Exercices"
};

window.PUBLICS = {
  cabinets: "Cabinets comptables",
  tpe: "TPE et dirigeants",
  tous: "Tous publics"
};

window.TRANSPARENCE_DEFAUT = {
  conception: "Conçu par Nathalie Falsimagne, expert-comptable depuis 30 ans, et mis à jour par NATAN Consulting. Aucun contenu n'est acheté en marque blanche.",
  animation: "Animé par la personne qui l'a conçu. Vous pouvez lui parler avant de vous inscrire.",
  suivi: "Groupes volontairement réduits. Chaque participant travaille sur son propre cabinet ou sa propre structure, pas sur un cas générique.",
  resultats: "Les résultats de chaque session sont publiés, y compris ce qui n'a pas fonctionné.",
  responsable: "Vous écrivez directement à Nathalie Falsimagne. Pas de standard, pas de sous-traitant entre vous et elle."
};

window.CATALOGUE = [
  {
    id: "cabinet-2030",
    titre: "Cabinet Comptable 2030",
    sousTitre: "Le cabinet qui gouverne la donnée",
    type: "formation",
    publics: ["cabinets"],
    niveau: "Tous niveaux",
    duree: "45 min en conférence, 3h30 en formation",
    modalite: "Conférence ou formation, en présentiel ou à distance",
    accroche: "Votre cabinet ne fait plus seulement de la comptabilité. Il fait de la gouvernance de données. Une mission que personne ne vous demande encore, et que vos clients vont chercher ailleurs.",
    objectifs: [
      "Repérer les usages d'IA et les flux de données que votre cabinet ne voit pas",
      "Poser les trois piliers NATAN sur votre propre organisation",
      "Identifier une mission de gouvernance de données facturable à vos clients"
    ],
    programme: [
      { titre: "Ce que tout le monde rate", detail: "Le point aveugle : ce que le cabinet croit protégé et ne l'est pas." },
      { titre: "La partie que personne ne nomme", detail: "Les maillons cachés : sous-traitants, hébergeurs, IA utilisées sans que personne ne les ait validées." },
      { titre: "Pourquoi ça compte au-delà du titre", detail: "Du monde où la confidentialité se décrète au monde où elle s'architecture. Les trois piliers NATAN." },
      { titre: "La version positive qui fait encore peur", detail: "La méthode SCORE : votre bilan actif et passif, et les bascules qui transforment une exigence en ressource." }
    ],
    livrables: ["Support de séance", "Votre premier bilan SCORE", "Fiche des trois bascules prioritaires"],
    piliers: ["Convergence", "Souveraineté", "Opportunité"]
  },
  {
    id: "secret-pro-ia",
    titre: "Secret professionnel et IA",
    sousTitre: "Ce que votre cabinet ne maîtrise pas encore",
    type: "formation",
    publics: ["cabinets"],
    niveau: "Intermédiaire",
    duree: "3h30",
    modalite: "Présentiel ou distanciel",
    accroche: "Un collaborateur colle un bilan client dans un assistant d'IA. Qui est en faute, lui ou vous ? La question est plus subtile qu'elle n'en a l'air.",
    objectifs: [
      "Distinguer ce que le secret professionnel protège et ce qu'il ne protège pas",
      "Cartographier la chaîne de sous-traitance qui touche les données de vos clients",
      "Rédiger les premières règles d'usage de l'IA pour votre équipe"
    ],
    programme: [
      { titre: "La relation, pas la personne", detail: "Ce que le secret professionnel protège réellement dans un cabinet." },
      { titre: "La chaîne de sous-traitance", detail: "Qui touche vos données sans que vous le sachiez, avec un cas réel daté." },
      { titre: "Le cas du bilan dans l'assistant d'IA", detail: "Exercice : responsabilités du collaborateur, responsabilités du cabinet." },
      { titre: "Votre charte IA", detail: "Atelier d'écriture : les règles que votre équipe peut réellement appliquer." }
    ],
    livrables: ["Trame de charte IA", "Cartographie de votre chaîne de sous-traitance", "Cas pratiques corrigés"],
    piliers: ["Convergence", "Souveraineté"]
  },
  {
    id: "shadow-ia",
    titre: "Shadow IA",
    sousTitre: "Qui utilise quoi dans votre cabinet ?",
    type: "atelier",
    publics: ["cabinets", "tpe"],
    niveau: "Débutant",
    duree: "3h",
    modalite: "Atelier collectif, présentiel ou distanciel",
    accroche: "Les comptes personnels, les extensions de navigateur, les outils testés un soir. Vous ne pouvez pas gouverner ce que vous n'avez pas vu.",
    objectifs: [
      "Dresser la liste réelle des outils d'IA utilisés par votre équipe",
      "Classer chaque usage : autorisé, à encadrer, à arrêter",
      "Repartir avec un référent IA désigné et une règle écrite"
    ],
    programme: [
      { titre: "L'enquête interne", detail: "Une méthode pour faire parler l'équipe sans chercher de coupable." },
      { titre: "Le tri", detail: "Autorisé, à encadrer, à arrêter : les critères, sur vos propres outils." },
      { titre: "Les bascules", detail: "Les trois gestes qui transforment un risque en actif : cartographie, charte, accord de traitement des données." }
    ],
    livrables: ["Cartographie de vos outils d'IA", "Grille de tri", "Plan d'action à 30 jours"],
    piliers: ["Souveraineté", "Opportunité"]
  },
  {
    id: "score-bilan",
    titre: "Votre bilan SCORE",
    sousTitre: "Actif, passif et bascules",
    type: "atelier",
    publics: ["cabinets"],
    niveau: "Intermédiaire",
    duree: "3h30",
    modalite: "Atelier collectif",
    accroche: "Lire votre conformité numérique comme un bilan comptable : ce que vous maîtrisez d'un côté, ce qui vous expose de l'autre. Vous connaissez déjà la grille.",
    objectifs: [
      "Poser votre propre bilan actif et passif",
      "Repérer vos bascules : les exigences qui, une fois satisfaites, deviennent des ressources",
      "Hiérarchiser vos chantiers selon l'effet de levier"
    ],
    programme: [
      { titre: "Les cinq piliers SCORE", detail: "Souveraineté, Conformité, Organisation, Ressources, Exigences." },
      { titre: "Votre bilan", detail: "Chaque participant passe les points de contrôle sur son propre cabinet." },
      { titre: "Les bascules", detail: "Où agir en premier pour faire passer le bilan du négatif au positif." }
    ],
    livrables: ["Bilan SCORE de votre cabinet", "Liste ordonnée de vos bascules"],
    piliers: ["Convergence", "Souveraineté", "Opportunité"]
  },
  {
    id: "tpe-premiers-usages",
    titre: "L'IA pour dirigeants de TPE",
    sousTitre: "Premiers usages, sans prendre de risque",
    type: "formation",
    publics: ["tpe"],
    niveau: "Débutant",
    duree: "1 journée",
    modalite: "Présentiel ou distanciel",
    accroche: "Vous avez entendu qu'il fallait s'y mettre. Cette journée vous donne trois usages qui rendent service dès lundi, et les limites à ne pas franchir avec vos données.",
    objectifs: [
      "Mettre en place trois usages concrets dans votre activité",
      "Savoir quelles données ne jamais confier à un outil d'IA",
      "Évaluer la fiabilité d'une réponse avant de la reprendre"
    ],
    programme: [
      { titre: "Le collaborateur le plus rapide et le moins fiable", detail: "Comprendre ce que l'IA fait bien, et là où elle invente." },
      { titre: "Trois usages sur vos vrais dossiers", detail: "Courriers, synthèses, préparation de rendez-vous : vous travaillez sur votre propre matière." },
      { titre: "Vos données, vos règles", detail: "Ce qui ne sort jamais de chez vous, et pourquoi." }
    ],
    livrables: ["Vos trois usages documentés", "Aide-mémoire des données interdites"],
    piliers: ["Souveraineté", "Opportunité"]
  },
  {
    id: "six-questions",
    titre: "Six questions avant d'acheter une formation IA",
    sousTitre: "L'outil gratuit pour dirigeants et responsables formation",
    type: "support",
    publics: ["tous"],
    niveau: "Tous niveaux",
    duree: "10 minutes",
    modalite: "En ligne, imprimable",
    accroche: "Avant de financer quoi que ce soit, six questions. Si le vendeur ne sait pas répondre à trois d'entre elles, vous avez votre réponse.",
    objectifs: [
      "Savoir qui a conçu et qui anime réellement la formation",
      "Exiger des compétences écrites noir sur blanc",
      "Obtenir un taux de réussite avant de signer"
    ],
    programme: [],
    livrables: ["Fiche imprimable avec votre score"],
    piliers: ["Souveraineté"],
    lien: "outil-six-questions.html",
    lienLibelle: "Ouvrir l'outil"
  },
  {
    id: "exercices-cabinet",
    titre: "Exercices pratiques : cas de cabinet",
    sousTitre: "S'entraîner sur des situations réelles",
    type: "exercice",
    publics: ["cabinets", "tpe"],
    niveau: "Tous niveaux",
    duree: "20 min par exercice",
    modalite: "En ligne, à votre rythme",
    accroche: "Des cas tirés du terrain : le bilan dans l'assistant d'IA, les comptes personnels, l'outil hébergé hors de l'Union. Vous choisissez, puis vous voyez ce que ça change.",
    objectifs: [
      "Vous entraîner à arbitrer sur des situations concrètes",
      "Mesurer votre propre bilan actif et passif",
      "Garder une trace de votre progression"
    ],
    programme: [],
    livrables: ["Corrigés commentés", "Votre bilan à imprimer"],
    piliers: ["Convergence", "Souveraineté", "Opportunité"],
    lien: "espace-apprenant.html",
    lienLibelle: "Ouvrir l'espace apprenant"
  }
];
