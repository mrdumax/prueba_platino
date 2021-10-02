const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://admin_peluqueria:EveeCBH5szdHNeNq@cluster0.4eyd6.mongodb.net/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

module.exports = client;