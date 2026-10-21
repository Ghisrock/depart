const nom = 'Awa'; // Type : string
const budget = 30000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transportNombre = Number(transportTexte); // type : number ; unité : FCFA - nombre converti
const alimentationNombre = Number(alimentationTexte); // type : number ; unité ; FCFA - nombre converti
const loisirsNombre = Number(loisirsTexte); // type : number ; unité ; FCFA nombre converti  

// TODO : calculez le total, le budget restant et budgetRespected.
const totalDepenses = transportNombre + alimentationNombre + loisirsNombre; // type: number ; unité : FCFA 
const budgetRestant = budget - totalDepenses; // type : number ; unité :   FCFA 
const budgetRespected = budgetRestant >= 0; // typye : boolean
// // TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Nom: ${nom}`);
console.log(`Budget initial: ${budget} FCFA`);
console.log(`Transport: ${transportNombre} FCFA`);
console.log(`Alimentation: ${alimentationNombre} FCFA`);
console.log(`Loisirs: ${loisirsNombre} FCFA`);
console.log(`Total des depenses: ${totalDepenses} FCFA`);
console.log(`Budget restant: ${budgetRestant} FCFA`);
console.log(`Budget respecté: ${budgetRespected}`);