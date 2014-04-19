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
            poll:{
                question:"Lorem ipsum dolor sit amet, consectetur?",
                choices:["yes","no"],
                attachments:[
                    {
                        type:"image",
                        ref:"http://media.npr.org/assets/img/2014/04/18/clam_01_wide-10cd767af7fb4c4517b8eaf9687adac17fe23d8f-s3-c85.jpg"
                    },
                    {
                        type:"image",
                        ref:"http://media.npr.org/assets/img/2014/04/19/istock_000011425202medium_wide-59c924d6a9b633736f082c510c16b147fad4b15e-s3-c85.jpg"
                    }
                ]
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
