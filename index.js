const express = require('express');
const app = express();
var cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! life is beautiful at PUST')
})

const users=[
  {id:0, name:'sabina', email:'sabina420@gmail.com'},
  {id:1, name:'sima', email:'sima@gmail.com'},
  {id:2, name:'sultana', email:'sultana@gmail.com'},
  {id:3, name:'soma', email:'soma420@gmail.com'},
]


app.get('/user', (req, res) => {
  const search = req.query.search;
  if(search){
    const searchRes = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchRes)
  }
  else{
    res.send(users)
  }

})

app.get('/user/:id',(req, res)=>{
  const id = req.params.id;
  const user = users[id];
  res.send(user)
})

app.post('/user', (req, res) =>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  res.json(newUser)
})

app.get('/fruit', (req, res) => {
  res.send(['mango', 'orange', 'banana'])
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})