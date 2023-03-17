const readLine = require('readline').promises
const cp = require('child_process')
const fs = require('fs').promises

function objetcToString(ob){
    let finalString = ''
    for (const element in ob) {
        finalString += `${element}="${ob[element]}"\n`
    }

    return finalString
}

async function setUpDotEnv(ob){
    try {
        const data = objetcToString(ob)
        await fs.writeFile('./.env', data)
        console.log("File written")
    } catch (error) {
        console.log(error)
    } 
} 

async function setUpDB(){
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let user =  await rl.question('Enter your MYSQL user name: ')
    let password =  await rl.question('Enter your MYSQL password: ')
    rl.close()

    const connectionData = {
        DB_HOST: 'localhost',
        DB_USER: user,
        DB_PASSWORD: password,
        DB_NAME: 'travel_journal',
        AUTHORIZED_DOMAIN:"*"
    }

    let cmdCommand = `mysql --user=${connectionData.DB_USER} --password=${connectionData.DB_PASSWORD} < db/travel_journal.sql`

    cp.exec(cmdCommand, function(error,stdout,stderr) {
        console.log(error,stdout,stderr);
    });

    console.log("\t----DATABASE SETTED UP----")
    await setUpDotEnv(connectionData)
    console.log("\t----CONNECTION WITH DATABASE SETTED UP----")   
}

setUpDB()

