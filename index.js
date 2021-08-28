const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc"});

const activity = {
    details: "No, I can't code. ",
    assets: {
large_image: "image_1",
large_text: "Visual Studio Code",
small_image: "Image_2",
small_text: "hello",

},
buttons: [
{

    "label":"Don't click on me",
    "url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ"


}

],


timestamps: {start: Date.now()},
instance: true
};

client.on("ready", () => {
client.request("SET_ACTIVITY", {pid: process.pid, activity: activity });
console.log("Done.");



}



)
client.login({ clientId: "Idofclient"});
