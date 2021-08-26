function ehThais(texto) {
  return new Promise((resolve, reject) => {
    if(texto == "Thaís") {
      resolve(console.log(`sim é a ${texto}`));
    } else {
      reject(new Error(`Mentira! Não é a Thaís!`));
    }
  });
}

ehThais("Thaís");
ehThais("Claudia");