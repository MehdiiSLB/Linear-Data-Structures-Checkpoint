set1 = [2, 5, 7, 9];
set2 = [3, 5, 6, 9];

function SommeSet(set1, set2) {
  let sommeCommun = 0;
  let sommeDifferent = 0;

  for (let i = 0; i < set1.length; i++) {
    if (set2.includes(set1[i])) {
      sommeCommun += set1[i];
    } else {
      sommeDifferent += set1[i];
    }
  }
  for (let i = 0; i < set2.length; i++) {
    if (set1.includes(set2[i])) {
      sommeCommun += set2[i];
    } else {
      sommeDifferent += set2[i];
    }
    return {
      sommeCommun: sommeCommun,
      sommeDifferent: sommeDifferent,
    };
  }
  const resultat = sommeSets(set1, set2);
  console.log("Somme des élément en commun :" + resultat.sommeCommun);
  console.log("Somme des élément différents :" + resultat.sommeDifferent);
}
