const { Level } = require('level')
const path = require('path');
const os = require('os');

let chromeLeveldbPath = path.join(os.homedir(), 'Library/Application Support/Google/Chrome/Default/Local Storage/leveldb');
if (os.platform() === 'win32') {
    chromeLeveldbPath = path.join(os.homedir(), '\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Storage\\leveldb');
}

function decode(v) {
    try {
        const buffer = Buffer.from(v)
        return buffer.toString('utf8');
    } catch (e) {
        return v;
    }
}

function show(k, v) {
    console.log("------------------------------------------");
    console.log(k + ": " + decode(v));
    console.log("------------------------------------------");
    console.log();
}

async function getByKey(key) {
    try {
        const value = await db.get(key);
        show(key, value)
    } catch (e) {
        console.error(`Key '${key}' not found in Chrome's LevelDB.`);
    }
}

async function getAll() {
    const ks = await db.iterator().all();
    ks.forEach(([k, v]) => show(k, v))
}

const db = new Level(chromeLeveldbPath)

const main = async () => {
    try {
        if (process.argv.length > 2) {
            await getByKey(process.argv[2])
        } else {
            await getAll();
        }
    } catch (e) {
        console.log("Please terminate your Chrome browser to access the value.");
    }
};

main();
