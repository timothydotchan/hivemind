var express= require('express')
	http = require('http')
	solr= require('solr')
	path = require('path')

var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
	res.render('./public/index.html');
})

app.get('/api/post',function(req,res){

      var posts=[
        {
            poll:{question:"Lorem ipsum dolor sit amet, consectetur?",
                choices:["yes","no"]
            },
            numberOfComments:90,
            numberOfAnswers:6,
            createdOn: new Date(),
            author:"timothychan"
        },
        {
            poll:{
                question:"Lorem ipsum dolor sit amet, consectetur?",
                choices:["yes","no"]
            },
            numberOfComments:90,
            numberOfAnswers:6,
            createdOn: new Date(),
            author:"timothychan"
        }
    ]

    res.json(posts);
})


/*
// customer
// customer/contact
//customer/20
app.get('/customers/:id',function(req,res){
	res.send('Welcome to customers!' + req.params.id);
})

app.get('/customers/create',function(req,res){
	res.send('this page is for creating customers');
})
*/

app.listen('80');
