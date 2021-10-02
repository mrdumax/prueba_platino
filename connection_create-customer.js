const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://admin_peluqueria:EveeCBH5szdHNeNq@cluster0.4eyd6.mongodb.net/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await createCustomer(client,
			      {
				  nombres: "Juan Alejandro",
				  apellidos: "Piguabe Vera",
				  celular: "099-1234-567",
				  correo: "prueba1@platino.org"
			      }
			  );

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function createCustomer(client, newCustomer){
    const result = await client.db("peluqueria_anita").collection("customer").insertOne(newCustomer);
    console.log(`New Customer created with the following id: ${result.insertedId}`);
}

