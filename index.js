const caseAll = document.querySelectorAll(".case");
const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => {
  caseAll.forEach((caseDiv) => {
    caseDiv.style.background = "#222222";
    colorChoose.innerHTML = "Choisissez votre couleur ! ";
    colorChoose.style.color = "#ffffff";
  });
});
// Colors

const rouge = document.querySelector(".rouge");
const rouge2 = document.querySelector(".rouge2");
const bordeaux = document.querySelector(".bordeaux");
const bordeaux2 = document.querySelector(".bordeaux2");
const bordeaux3 = document.querySelector(".bordeaux3");
const white = document.querySelector(".white");
const rose = document.querySelector(".rose");
const rose2 = document.querySelector(".rose2");
const rose3 = document.querySelector(".rose3");
const violet = document.querySelector(".violet");
const violet2 = document.querySelector(".violet2");
const violet3 = document.querySelector(".violet3");
const bleu = document.querySelector(".bleu");
const bleu2 = document.querySelector(".bleu2");
const bleu3 = document.querySelector(".bleu3");
const turquoise = document.querySelector(".turquoise");
const turquoise2 = document.querySelector(".turquoise2");
const turquoise3 = document.querySelector(".turquoise3");
const vert = document.querySelector(".vert");
const vert2 = document.querySelector(".vert2");
const vert3 = document.querySelector(".vert3");
const jaune = document.querySelector(".jaune");
const jaune2 = document.querySelector(".jaune2");
const jaune3 = document.querySelector(".jaune3");
const orango = document.querySelector(".orango");
const orango2 = document.querySelector(".orango2");
const orango3 = document.querySelector(".orango3");
const tan = document.querySelector(".tan");
const tan2 = document.querySelector(".tan2");
const tan3 = document.querySelector(".tan3");
const gris = document.querySelector(".gris");
const gris2 = document.querySelector(".gris2");
const gris3 = document.querySelector(".gris3");
const vertPomme = document.querySelector(".vertpomme");
const vertPomme2 = document.querySelector(".vertpomme2");
const vertPomme3 = document.querySelector(".vertpomme3");
const prune = document.querySelector(".prune");
const prune2 = document.querySelector(".prune2");
const prune3 = document.querySelector(".prune3");
const orange = document.querySelector(".orange");
const orange2 = document.querySelector(".orange2");
const orange3 = document.querySelector(".orange3");

const taupe = document.querySelector(".taupe");
const taupe2 = document.querySelector(".taupe2");
const taupe3 = document.querySelector(".taupe3");

const resetCase = document.querySelector(".reset");

// Params
const colorChoose = document.querySelector(".color-choose");
const pixels64 = document.querySelector(".pixels64");
const pixels576 = document.querySelector(".pixels576");
const pixels1024 = document.querySelector(".pixels1024");

const super64 = document.querySelector(".super64");
const super576 = document.querySelector(".super576");
const super1024 = document.querySelector(".super1024");

super64.addEventListener("click", () => {
  pixels64.style.display = "block";
  pixels576.style.display = "none";
  pixels1024.style.display = "none";
});

super576.addEventListener("click", () => {
  pixels64.style.display = "none";
  pixels576.style.display = "block";
  pixels1024.style.display = "none";
});

super1024.addEventListener("click", () => {
  pixels64.style.display = "none";
  pixels576.style.display = "none";
  pixels1024.style.display = "block";
});

rouge.addEventListener("click", () => {
  colorChoose.innerHTML = "Rouge clair";
  colorChoose.style.color = "#c24444";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#c24444";
    });
  });
});

rouge2.addEventListener("click", () => {
  colorChoose.innerHTML = "Rouge";
  colorChoose.style.color = "#a32626";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#a32626";
    });
  });
});

bordeaux.addEventListener("click", () => {
  colorChoose.innerHTML = "Bordeaux clair";
  colorChoose.style.color = "#691414";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#691414";
    });
  });
});

bordeaux2.addEventListener("click", () => {
  colorChoose.innerHTML = "Bordeaux";
  colorChoose.style.color = "#400d0d";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#400d0d";
    });
  });
});

bleu.addEventListener("click", () => {
  colorChoose.innerHTML = "Bleu clair";
  colorChoose.style.color = "#98afc1";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#98afc1";
    });
  });
});

bleu2.addEventListener("click", () => {
  colorChoose.innerHTML = "Bleu";
  colorChoose.style.color = "#6c8ba3";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#6c8ba3";
    });
  });
});

bleu3.addEventListener("click", () => {
  colorChoose.innerHTML = "Bleu foncé";
  colorChoose.style.color = "#3b5b73";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#3b5b73";
    });
  });
});

turquoise.addEventListener("click", () => {
  colorChoose.innerHTML = "Turquoise";
  colorChoose.style.color = "#7eaaa4";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#7eaaa4";
    });
  });
});

turquoise2.addEventListener("click", () => {
  colorChoose.innerHTML = "Turquoise foncé";
  colorChoose.style.color = "#638c86";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#638c86";
    });
  });
});

turquoise3.addEventListener("click", () => {
  colorChoose.innerHTML = "Turquoise clair";
  colorChoose.style.color = "#a8cac5";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#a8cac5";
    });
  });
});

vertPomme.addEventListener("click", () => {
  colorChoose.innerHTML = "Vert pomme clair";
  colorChoose.style.color = "#b3c173";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#b3c173";
    });
  });
});

vertPomme2.addEventListener("click", () => {
  colorChoose.innerHTML = "Vert pomme";
  colorChoose.style.color = "#97a651";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#97a651";
    });
  });
});

vertPomme3.addEventListener("click", () => {
  colorChoose.innerHTML = "Vert pomme foncé";
  colorChoose.style.color = "#7c8f26";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#7c8f26";
    });
  });
});

vert.addEventListener("click", () => {
  colorChoose.innerHTML = "Vert clair";
  colorChoose.style.color = "#a0b283";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#a0b283";
    });
  });
});

vert2.addEventListener("click", () => {
  colorChoose.innerHTML = "Vert";
  colorChoose.style.color = "#758857";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#758857";
    });
  });
});

vert3.addEventListener("click", () => {
  colorChoose.innerHTML = "Vert foncé";
  colorChoose.style.color = "#4d583d";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#4d583d";
    });
  });
});

vert.addEventListener("click", () => {
  colorChoose.innerHTML = "Vert clair";
  colorChoose.style.color = "#a0b283";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#a0b283";
    });
  });
});

violet.addEventListener("click", () => {
  colorChoose.innerHTML = "Violet clair";
  colorChoose.style.color = "#c56faa";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#c56faa";
    });
  });
});

violet2.addEventListener("click", () => {
  colorChoose.innerHTML = "Violet";
  colorChoose.style.color = "#894774";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#894774";
    });
  });
});

violet3.addEventListener("click", () => {
  colorChoose.innerHTML = "Violet foncé";
  colorChoose.style.color = "#673d5a";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#673d5a";
    });
  });
});

rose.addEventListener("click", () => {
  colorChoose.innerHTML = "Rose clair";
  colorChoose.style.color = "#e97792";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#e97792";
    });
  });
});

rose2.addEventListener("click", () => {
  colorChoose.innerHTML = "Rose";
  colorChoose.style.color = "#e54c70";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#e54c70";
    });
  });
});

rose3.addEventListener("click", () => {
  colorChoose.innerHTML = "Rose foncé";
  colorChoose.style.color = "#ba3252";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#ba3252";
    });
  });
});

prune.addEventListener("click", () => {
  colorChoose.innerHTML = "Prune clair";
  colorChoose.style.color = "#932a4f";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#932a4f";
    });
  });
});

prune2.addEventListener("click", () => {
  colorChoose.innerHTML = "Prune";
  colorChoose.style.color = "#771839";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#771839";
    });
  });
});

prune3.addEventListener("click", () => {
  colorChoose.innerHTML = "Prune foncé";
  colorChoose.style.color = "#540d26";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#540d26";
    });
  });
});

jaune.addEventListener("click", () => {
  colorChoose.innerHTML = "Jaune clair";
  colorChoose.style.color = "#debb6f";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#debb6f";
    });
  });
});

jaune2.addEventListener("click", () => {
  colorChoose.innerHTML = "Jaune";
  colorChoose.style.color = "#ddad47";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#ddad47";
    });
  });
});

jaune3.addEventListener("click", () => {
  colorChoose.innerHTML = "Jaune foncé";
  colorChoose.style.color = "#e9a21a";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#e9a21a";
    });
  });
});

orange.addEventListener("click", () => {
  colorChoose.innerHTML = "Orange clair";
  colorChoose.style.color = "#df9665";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#df9665";
    });
  });
});

orange2.addEventListener("click", () => {
  colorChoose.innerHTML = "Orange";
  colorChoose.style.color = "#e3791c";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#e3791c";
    });
  });
});

orange3.addEventListener("click", () => {
  colorChoose.innerHTML = "Orange foncé";
  colorChoose.style.color = "#d55320";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#d55320";
    });
  });
});

orango.addEventListener("click", () => {
  colorChoose.innerHTML = "Marron clair";
  colorChoose.style.color = "#a8472a";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#a8472a";
    });
  });
});

orango2.addEventListener("click", () => {
  colorChoose.innerHTML = "Marron";
  colorChoose.style.color = "#823620";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#823620";
    });
  });
});

orango3.addEventListener("click", () => {
  colorChoose.innerHTML = "Marron foncé";
  colorChoose.style.color = "#5a2211";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#5a2211";
    });
  });
});

tan.addEventListener("click", () => {
  colorChoose.innerHTML = "Beige clair";
  colorChoose.style.color = "#d2b193";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#d2b193";
    });
  });
});

tan2.addEventListener("click", () => {
  colorChoose.innerHTML = "Beige";
  colorChoose.style.color = "#b0715f";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#b0715f";
    });
  });
});

tan3.addEventListener("click", () => {
  colorChoose.innerHTML = "Beige foncé";
  colorChoose.style.color = "#885546";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#885546";
    });
  });
});

taupe.addEventListener("click", () => {
  colorChoose.innerHTML = "Taupe clair";
  colorChoose.style.color = "#917162";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#917162";
    });
  });
});

taupe2.addEventListener("click", () => {
  colorChoose.innerHTML = "Taupe";
  colorChoose.style.color = "#6b4f42";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#6b4f42";
    });
  });
});

taupe3.addEventListener("click", () => {
  colorChoose.innerHTML = "Taupe foncé";
  colorChoose.style.color = "#3c2b24";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#3c2b24";
    });
  });
});

gris.addEventListener("click", () => {
  colorChoose.innerHTML = "Gris clair";
  colorChoose.style.color = "#c0c0c0";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#c0c0c0";
    });
  });
});

gris2.addEventListener("click", () => {
  colorChoose.innerHTML = "Gris";
  colorChoose.style.color = "#8a8a8a";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#8a8a8a";
    });
  });
});

gris3.addEventListener("click", () => {
  colorChoose.innerHTML = "Gris foncé";
  colorChoose.style.color = "#565656";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#565656";
    });
  });
});

white.addEventListener("click", () => {
  colorChoose.innerHTML = "Blanc";
  colorChoose.style.color = "#e9e4d7";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#e9e4d7";
    });
  });
});

resetCase.addEventListener("click", () => {
  colorChoose.innerHTML = "Pas de couleur";
  colorChoose.style.color = "#222222";
  caseAll.forEach((caseDiv) => {
    caseDiv.addEventListener("click", () => {
      caseDiv.style.background = "#222222";
    });
  });
});
