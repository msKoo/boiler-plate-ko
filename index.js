const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const config = require('./config/key')
const {User} = require('./models/User');

//application/x-www-form-urlencoded를 분석해서 가져올 수 있도록
app.use(bodyParser.urlencoded({extended:true}));

//applicaion/json 을 가져올 수 있도록
app.use(bodyParser.json());

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI, {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 안녕하세요 하위'))

//회원가입
app.post('/register', (req, res) => {
    //회원가입 시 필요한 정보를 client에서 가져오면 
    //그것들을 DB에 넣어준다
    const user = new User(req.body) //bodyparser를 이용해서 리퀘스트 바디에 정보가 들어갈 수 있도록

    user.save((err, userInfo)=>{
        console.log(err);
        if(err) return res.json({success:false, err})
        return res.status(200).json({
        success:true
        })
    })
})


app.listen(port, () => console.log('Example app listening on port '+port+'!'))