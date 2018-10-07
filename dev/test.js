const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2389, "sfjjbdkvbsdi", "afhaiufgaiufg");
// bitcoin.createNewTransaction(100, 'MK894GHBDJVHB', "KSM8G9HGSBJBVDH");
// bitcoin.createNewBlock(8679, "lkthnvehvrdu", "ekeghrvgbrj");

const previousBlockHash = 'NGIEBGUBRIUBE8HG39';
const currentBlockData = [
    {
        amount : 200,
        sender : 'IGBREIUGBKJVOIN',
        recipient : 'JKGNIGBJVBWJVBWE'
    }
];
// const nonce = 5;

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 113167));
