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
        OR: [
          {
            name: {
              startsWith: req.query.name,
            },
          },
          { domains: { startsWith: req.query.name } },
          { id: { startsWith: req.query.name } },
        ],
        },
    });
    if(req.query.name === "")
      //retorna vacia para cuando no se ingresan palabras
        res.status(200).json({});
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

app.delete("/delete", async (req, res) => {
  const {id} = req.body;
    console.log(`data : ${id}`);
    try {
      const deleted = await prisma.apps.delete({
        where: {
          id: id,
        },
      })
      res.json(deleted);
    } catch (error) {
      res.status(500).json({ error: `Error al crear app ${error}` });
    }
  });
  

  app.put("/update", async (req, res) => {
    const {id , name , domains} = req.body;
      console.log(`id : ${id}`);
      console.log(`name : ${name}`);
      console.log(`domains : ${domains}`);
      try {
        const deleted = await prisma.apps.update({
          where: {
            id: id,
          },
          data:{
             name :name,
             domains : domains

          }
        })
        res.json(deleted);
      } catch (error) {
        res.status(500).json({ error: `Error al crear app ${error}` });
      }
    });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
