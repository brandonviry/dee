let RANDOM = (min?: number, max?: number) => {
  max = max === undefined ? 100 : max;
  min = min === undefined ? 1 : min;

  return Math.floor(Math.random() * (max - min)) + min;
};



let list = {
  RANDOM: (taille: number,min?: number, max?: number) => {
    max = max === undefined ? 9 : max;
    min = min === undefined ? 1 : min;
    let nombre = [];
    while (nombre.length < taille) {
             

      nombre.push(RANDOM(min, max));
    }
    return nombre;
  },
};

let affiche = {
  tags: (contenue?: string, ancre?: string, balise?: string) => {
    contenue = contenue === undefined ? "ERREUR : Contenue " : contenue;
    balise = balise === undefined ? "p" : balise;
    ancre = ancre === undefined ? "body" : ancre;

    let node = document.createElement(balise);
    document.querySelector(ancre)?.appendChild(node);
    node.innerHTML = contenue;
  },
  text: (texte: string, tags?: string | undefined) => {
    if (tags === undefined) {
      tags = "body";
    }

    let node = document.createElement("p");
    document.querySelector(tags)?.appendChild(node);
    node.textContent = texte;
  },
  multi_tags: (contenue: string, tags?: string | undefined) => {
    if (tags === undefined) {
      tags = "body";
    }
    document.querySelector(tags)!.innerHTML = contenue;
  },
};

let sleep= async (ms:number)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export { affiche, RANDOM, list,sleep };
