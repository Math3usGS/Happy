const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-22.2508414",  
    long: "-45.7124668",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 01 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "5535934718877",
    images: [
      "https://images.unsplash.com/photo-1601477720069-99fbd7173f56?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

      "https://images.unsplash.com/photo-1602676816569-cc20f9d1d477?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 14h às 21h",
    open_on_weekends: "0",
  });

  
  // consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);
  
  //consultar somente 1 orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2" ');
  console.log(orphanage);

  /*// deletar dados da tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"));
  console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"));
  */
});
