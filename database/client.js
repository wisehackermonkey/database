// const IPFS = require('ipfs')
// const OrbitDB = require('orbit-db')

// async function main () {
//   const ipfsOptions = { repo: './ipfs2', }
//   const ipfs = await IPFS.create(ipfsOptions)
//   const orbitdb = await OrbitDB.createInstance(ipfs)

//   const options = {
//     // Setup write access
//     accessController: {
//       write: [
//         // Give access to ourselves
//         "02382b3f231bf18d987e407d861750a99ba57c93cf1eaf917b5a501205b5404d6d",
//         // Give access to the second peer
//         '0448bc379e7f2358a8b3d3815fdb4858b700b9aa5f4d1bc67d8fd948c9366f088439dcfa317c12897941461812c2bbece7f65bc21d5b23dad60b0c61c2710d66f4',
//       ]
//     }
//   }

//   const db1 = await orbitdb.keyvalue('first-database', options)
//   console.log(db1.address.toString())
//   // /orbitdb/Qmdgwt7w4uBsw8LXduzCd18zfGXeTmBsiR8edQ1hSfzcJC/first-database

//   // Second peer opens the database from the address
//   const db2 = await orbitdb.keyvalue(db1.address.toString())
// }

// main()

const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

async function main () {
  const ipfsOptions = { repo: './ipfs'}
  const ipfs = await IPFS.create(ipfsOptions)
  const orbitdb = await OrbitDB.createInstance(ipfs)
  const db = await orbitdb.keyvalue('first-database')
  await db.put('name', 'hello')
}

main()