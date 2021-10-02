/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const { MongoClient } = require('mongodb');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

async function getClientesList() {
    const uri = "mongodb+srv://admin_peluqueria:EveeCBH5szdHNeNq@cluster0.4eyd6.mongodb.net/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        const cursor = client.db("peluqueria_anita").collection("customer").find();
	return await cursor.toArray();

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  res.render("index", { title: "Login" });
});

app.get("/user", (req, res) => {
  res.render("user", { title: "Inicio", userProfile: { nickname: "dmedina" } });
});

app.get('/clientes', async function(req, res) {
	var clienteList = await getClientesList();
	res.render('clientes', {title: "Clientes", userProfile: { nickname: "dmedina" }, clienteList: clienteList});
});
/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
  
