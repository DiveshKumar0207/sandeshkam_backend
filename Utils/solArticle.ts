import anchor, {
  AnchorProvider,
  Program,
  setProvider,
  Idl,
  Wallet,
} from "@coral-xyz/anchor";

require("dotenv").config();

import { getKeypairFromEnvironment, } from "@solana-developers/helpers";


import idl from "../idl.json";


const keypair = getKeypairFromEnvironment('KEYPAIR')


const programIdBase58 =  "AwAs8btAKz13empgm4NuzWj9FmYokKLzskPAwzXY1Yzh";
const programId = new anchor.web3.PublicKey(programIdBase58);


const connection = new anchor.web3.Connection("https://api.devnet.solana.com");

// Create a Provider object with the connection and your keypair as the wallet
const provider = new AnchorProvider(connection, new Wallet(keypair));
setProvider(provider);


const program = new anchor.Program(idl as Idl, provider, programId)


// Example: Call the "addArticle" instruction
const addArticleTx = await program.methods
  .addArticle('My Article Title', 'This is the article body', 'John Doe')
  .accounts({
    articleInfo: /* Account address for your "Article" account */,
    myAccount: keypair.publicKey,
    systemProgram: anchor.web3.SystemProgram.programId,
  })
  .signers([keypair]) // Sign the transaction with your private key
  .rpc(); // Send the transaction

console.log(`Transaction signature: ${addArticleTx}`);
