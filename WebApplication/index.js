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
            createdOn: new Date(),
            user: {
             id:"123",
             name:"Timothyc",
             profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
            },
            votes:[
                {
                    choice:"yes",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                },
                {
                    choice:"yes",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                },
                {
                    choice:"no",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                }
            ],
            comments:[
                {

                    createdOn: new Date(),
                    text: "Nice Job!",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                },
                {
                    createdOn: new Date(),
                    text: "Yeah man nice job!",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                }
            ]
        },
        {
            poll:{
                question:"Lorem ipsum dolor sit amet, consectetur?",
                choices:["yes","no"]
            },
            numberOfComments:90,
            numberOfAnswers:6,
            createdOn: new Date(),
            user: {
             id:"123",
             name:"Timothyc",
             profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
            },
            votes:[
                {
                    choice:"yes",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                },
                {
                    choice:"yes",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                },
                {
                    choice:"no",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                }
            ],
            comments:[
                {
                    createdOn: new Date(),
                    text: "Nice Job!",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                },
                {
                    createdOn: new Date(),
                    text: "Yeah man nice job!",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                }
            ]
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
