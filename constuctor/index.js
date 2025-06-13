import {Config} from './constuctor/config.js';

const config = new Config((appConfig) => {
    appConfig.set("port", 3000);
    appConfig.set("env", "development")
    appConfig.setMultiple({
        database: "myappdb",
        debug: true
    })
});



console.log("APP port", config.get("port"));
console.log("All Settings", config.getAll())



console.log("App Port after modification attempt", config.get("port"));