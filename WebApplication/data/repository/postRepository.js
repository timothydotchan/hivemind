
exports.getAll=function(){
     var posts=[
        {
            poll:{
                question:"Lorem ipsum dolor sit amet, consectetur?",
                choices:["yes","no"],
                attachments:[
                    {
                        type:"image",
                        ref:"http://media.npr.org/assets/img/2014/04/18/clam_01_wide-10cd767af7fb4c4517b8eaf9687adac17fe23d8f-s3-c85.jpg"
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
                    text: "hahaha",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                },
                {
                    createdOn: new Date(),
                    text: "good one",
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
        },
        {
            poll:{
                question:"Lorem ipsum dolor sit amet, consectetur?",
                choices:["yes","no"],
                attachments:[
                    {
                        type:"image",
                        ref:"http://o.aolcdn.com/hss/storage/midas/74ecaaef6540a7f79b6482cf66237261/200048191/rufus-cuff.jpg"
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
                    text: "hahaha",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                },
                {
                    createdOn: new Date(),
                    text: "good one",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                },
                {
                    createdOn: new Date(),
                    text: "good one",
                    user: {
                         id:"123",
                         name:"Timothyc",
                         profilePictureUrl:"http://a.disquscdn.com/1396297849/images/noavatar92.png",
                    }
                }
            ]
        }
    ]
    return posts;
}

