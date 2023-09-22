import { affiche, RANDOM, sleep } from "./utils/functions";

let generate_struc = (forme: unknown[][]) => {
  let temp = "<div class='grille'>";
  forme.forEach((ligne) => {
    temp += "<div class='ligne'>";
    ligne.forEach((elementLigne) => {
      temp += "<div class ='case' id=" + elementLigne + ">" + "</div>";
    });
    temp += "</div>";
  });
  temp += "</div>";
  return temp;
};

let generate_struc_dee = (ancre: string, nombre: number) => {
  let structure = [
    ["a", "c", "b"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  affiche.multi_tags(generate_struc(structure), ancre);

  switch (nombre) {
    case 1:
      affiche.multi_tags("<p class='color'></p>", "#e");
      break;
    case 2:
      affiche.multi_tags("<p class='color'></p>", "#a");
      affiche.multi_tags("<p class='color'></p>", "#i");
      break;
    case 3:
      affiche.multi_tags("<p class='color'></p>", "#a");
      affiche.multi_tags("<p class='color'></p>", "#e");
      affiche.multi_tags("<p class='color'></p>", "#i");
      break;
    case 4:
      affiche.multi_tags("<p class='color'></p>", "#a");
      affiche.multi_tags("<p class='color'></p>", "#b");
      affiche.multi_tags("<p class='color'></p>", "#i");
      affiche.multi_tags("<p class='color'></p>", "#g");
      break;
    case 5:
      affiche.multi_tags("<p class='color'></p>", "#a");
      affiche.multi_tags("<p class='color'></p>", "#b");
      affiche.multi_tags("<p class='color'></p>", "#i");
      affiche.multi_tags("<p class='color'></p>", "#g");
      affiche.multi_tags("<p class='color'></p>", "#e");
      break;
    case 6:
      structure.forEach((ligne) => {
        ligne.forEach((elementLigne) => {
          affiche.multi_tags("<p class='color'></p>", "#" + elementLigne);
        });
      });
      break;

    default:
      affiche.multi_tags("<p >ERREUR</p>", "#e");
      break;
  }
};

let dee = (ancre: string, nombre: number) => {
  generate_struc_dee(ancre, nombre);
};

let lancerDee = (ancre: string) => {
  dee(ancre, RANDOM(1, 7));


  document.querySelector(ancre)?.addEventListener("click", async () => {
    await sleep(1000);
    lancerDee(ancre);
  });
}
export default lancerDee;



