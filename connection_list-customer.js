const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://admin_peluqueria:EveeCBH5szdHNeNq@cluster0.4eyd6.mongodb.net/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await createCustomer(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function createCustomer(client){
    const cursor = client.db("peluqueria_anita").collection("customer").find();
    const results = await cursor.toArray();
    results.forEach((result, i) => {
            date = new Date(result.last_review).toDateString();
            console.log(result);
        });
    
}

