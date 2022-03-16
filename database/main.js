// const express = require('express')
// const app = express()
// const PORT = 7878
 
// // reply to request with the hello world html file
// app.get('/', function (req, res) {
//   res.send("{'works':'true'}")
//   console.log("{'works':'true'}")
// })

// // start a server on port 7878 and log its start to our console
// app.listen(PORT, () => {
//   console.log(`Database app listening on port ${PORT}`)
// })
// const IPFS = require('ipfs')
// const OrbitDB = require('orbit-db')

// async function main () {
//   // Create IPFS instance
//   const ipfsOptions = { repo : './ipfs', }
//   const ipfs = await IPFS.create(ipfsOptions)

//   // Create OrbitDB instance
//   const orbitdb = await OrbitDB.createInstance(ipfs)
//   const db = await orbitdb.keyvalue('first-database')
//   console.log(db.address.toString())
//    }

// main()

// const IPFS = require('ipfs')
// const OrbitDB = require('orbit-db')

// async function main () {
//   const ipfsOptions = { repo: './ipfs',}
//   const ipfs = await IPFS.create(ipfsOptions)
//   const orbitdb = await OrbitDB.createInstance(ipfs)
//   const options = {
//     // Give write access to ourselves
//     accessController: {
//       write: [orbitdb.identity.id]
//     }
//   }

//   const db = await orbitdb.keyvalue('first-database', options)
//   console.log(db.address.toString())
//   console.log(orbitdb.identity.id)
//   const identity = db.identity
//   console.log(identity.toJSON())
//   // /orbitdb/Qmd8TmZrWASypEp4Er9tgWP4kCNQnW4ncSnvjvyHQ3EVSU/first-database
// }
// main()



const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

async function main () {
  const ipfsOptions = { repo: './ipfs',}
  const ipfs = await IPFS.create(ipfsOptions)
  const orbitdb = await OrbitDB.createInstance(ipfs)
  const options = {
    // Give write access to everyone
    accessController: {
      write: ["*"]
    }
  }

  const db = await orbitdb.keyvalue('first-database', options)

  await db.put('name', 'hello', { pin: true })
  console.log(db.address.toString())
  console.log(orbitdb.identity.id)
  const identity = db.identity
  console.log(identity.toJSON())
  // /orbitdb/Qmd8TmZrWASypEp4Er9tgWP4kCNQnW4ncSnvjvyHQ3EVSU/first-database
}
main()