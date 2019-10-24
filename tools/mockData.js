const students = [
  {
    id: 1,
    studentName:'prasanth',
    age:'22',
    email:'prasanth@gmail.com',
    phnNumber:'9441256491',
    branchId:1
  },
  {
    id: 2,
    studentName:'Manideep',
    age:'22',
    email:'manideep@gmail.com',
    phnNumber:'9440657891',
    branchId:1
  },
  {
    id: 3,
    studentName:'Sandeep',
    age:'22',
    email:'sandeep@gmail.com',
    phnNumber:'8885609834',
    branchId:1
  },
  {
    id: 4,
    studentName:'Ramakrishna',
    age:'22',
    email:'ramakrishna@gmail.com',
    phnNumber:'9494808061',
    branchId:1
  },
  {
    id: 5,
    studentName:'Chandrakanth',
    age:'22',
    email:'chandrakanth@gmail.com',
    phnNumber:'7730847979',
    branchId:1
  },
  {
    id: 6,
    studentName:'Uday Guptha',
    age:'22',
    email:'uday@gmail.com',
    phnNumber:'7981547798',
    branchId:1
  },
  {
    id: 7,
    studentName:'Harika',
    age:'22',
    email:'harika@gmail.com',
    phnNumber:'8905444367',
    branchId:1
  },
  {
    id: 8,
    studentName:'Chandramouli',
    age:'22',
    email:'chandramouli@gmail.com',
    phnNumber:'7788999667',
    branchId:1
  },
  {
    id: 9,
    studentName:'prasanth',
    age:'22',
    email:'prasanth@gmail.com',
    phnNumber:'9441256491',
    branchId:1
  },
  {
    id: 10,
    studentName:'praveen',
    age:'22',
    email:'praveen@gmail.com',
    phnNumber:'9887667788',
    branchId:1
  }
];

const branches = [
  {id:1,name:"Mechanical"},
  {id:2,name:"CSE"},
  {id:3,name:"ECE"},
  {id:4,name:"EEE"},
  {id:5,name:"CIVIL"}
]



const newStudent = {
  id: null,
  studentName: "",
  age: "",
  email: "",
  phnNumber:"",
  branchId:null
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newStudent,
  students,
  branches
};
