const SHA256 = require('crypto-js/sha256');

class Block { 
  constructor(timestamp, data){
    this.index = 0;
    this.timestamp = new date();
    this.data = data;
    this.previousHash = "0";
    this.hash = this.calculateHash();
    this.nonce = 0;
  }
  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + this.date + this.nonce).toString();
  }

  mineBlock(difficulty) {
  }
}

class Blockchain{
  constructor() {
    this.chain = [ this.createGenesis() ]
  }
  createGenesis(){
    return new Block(0, "13,08/2019", "Genesis block", "0" )
  }
  latestBlock(){
    return this.chain[this.chain.length -1]
  }
  addBlock(newBlock){
    newBlock.previousHash = this.latestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
  checkValid(){
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[ i ];
      const previousBlock = this.chain[ i -1 ];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
    }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
      return true;
    }
  }
}

let jsChain = new Blockchain();
jsChain.addBlock(new Block("12/25/2019", {amount: 5131234}));
jsChain.addBlock(new Block("12/25/2019", {amount: 5131234}));
jsChain.addBlock(new Block("12/26/2019", {amount: 10123464}));
jsChain.addBlock(new Block("12/25/2019", {amount: 5123412}));
jsChain.addBlock(new Block("12/26/2019", {amount: 11234120}));
jsChain.addBlock(new Block("12/25/2019", {amount: 5123123}));
jsChain.addBlock(new Block("12/26/2019", {amount: 1123120}));

console.log(JSON.stringify(jsChain, null, 4));
console.log("Is blockchain valid? " + jsChain.checkValid());

