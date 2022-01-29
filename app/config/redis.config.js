
const { createClient } = require("redis");
let client;

try {
    client = createClient({ url: 'redis://redis:6379' });
  
    (async () => {

        client.on("error", (err) => {
            console.log('Redis client error: ');
        });

        client.on("connect", () => {
            console.log('Redis client connected: ');
        })

        await client.connect();

    })();
} catch (error) {
    console.log('Error in creating redis client: ', error)
    client.connected = false;
}

module.exports = client;