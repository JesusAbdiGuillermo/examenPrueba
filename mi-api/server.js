const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const { Types } = require("@prisma/client/runtime/library");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/apps", async (req, res) => {
  try {
    const apps = await prisma.apps.findMany();
    res.json(apps);
  } catch (error) {
    res.status(500).json({ error: `Error en la busqueda ${error}` });
  }
  
  
});

app.get("/search", async (req, res) => {
  try {
    const apps = await prisma.apps.findMany({
      where: {
          name: {
            startsWith: req.query.name,
          },
        },
    });
    if(req.query.name === "")
      //retorna vacia para cuando no se ingresan palabras
        res.status(200)({});
    else
        res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ error: `Error al buscar una app  ${error}` });
  }
    
  });

  
app.post("/apps", async (req, res) => {
var data  = req.body;
  console.log(`data : ${data}`);
  try {
    const nuevapp = await prisma.apps.createManyAndReturn({
        data:  data
      })
    res.json(nuevapp);
  } catch (error) {
    res.status(500).json({ error: `Error al crear app ${error}` });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
