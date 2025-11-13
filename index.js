const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const uri =
  "mongodb+srv://finesae-db:bOR5b3O02KLRYumw@something.fhficer.mongodb.net/?appName=Something";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    
    const db = client.db("Finease-db");
    const transactionsCollection = db.collection("transactions");

    app.get("/transactions", async (req, res) => {
      try {
        const { sortBy, order } = req.query;

        let sortField = { date: -1 };

        if (sortBy === "amount") {
          sortField = { amount: order === "asc" ? 1 : -1 };
        } else if (sortBy === "date") {
          sortField = { date: order === "asc" ? 1 : -1 };
        }

        const result = await transactionsCollection.find().sort(sortField);
        const transactions = await result.toArray();
        res.send(transactions);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        res.status(500).send({ message: "Server error" });
      }
    });

    app.get("/transactions/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const transaction = await transactionsCollection.findOne(query);
      res.send(transaction);
    });

    app.post("/transactions", async (req, res) => {
      const transaction = req.body;
      const result = await transactionsCollection.insertOne(transaction);
      res.send(result);
    });

    app.delete("/transactions/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await transactionsCollection.deleteOne(query);
      res.send(result);
    });

    app.put("/transactions/:id", async (req, res) => {
      const id = req.params.id;
      const transaction = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: transaction.name,
          email: transaction.email,
        },
      };
      const result = await transactionsCollection.updateOne(
        query,
        updateDoc,
        options
      );
      res.send(result);
    });

   
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
