var express= require('express')
	http = require('http')
	solr= require('solr')
	path = require('path')

var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
	res.render('./public/index.html');
})

app.get('/api/topSectionNews',function(req,res){
        var topSectionNews = [
            {
                headline:"Action Flouts U.S. Warning to Respect Sovereignty",
                author:"anonymous",
                imageReferences:["http://media.npr.org/assets/img/2014/03/01/10707561_h27722572_wide-1355abe6dc154523157cd071bbfe16cdfe665a4b-s18-c85.jpg"],
                description:"As Russian armed forces effectively seized control of Ukraine’s Crimean peninsula on Saturday, the Russian Parliament granted President Vladimir V. Putin the authority he sought to use military force in response to the deepening instability in Ukraine.",
                created:"12/12/2013"
            },
            {
                headline:"Russia's Parliament Approves Putin's Call For Troops In Ukraine",
                author:"anonymous",
                imageReferences:["http://graphics8.nytimes.com/images/2014/03/02/world/02ukraine-375-ss-slide-W8WK/02ukraine-375-ss-slide-W8WK-largeWidescreen573-v2.jpg"],
                description:"Russia's parliament has unanimously approved a request by President Vladimir Putin to authorize the intervention of Moscow's forces in Ukraine until the normalization of the political situation there. In response, Ukraine put its own forces on alert and warned that a Russian invasion would spark war between the two countries.",
                created:"12/12/2013"
            },
            {
                headline:"Oscar-nominated films begins with a deliciously idiosyncratic pickup line",
                author:"anonymous",
                imageReferences:["http://media.npr.org/assets/img/2014/03/01/her-fp-0864_wide-a42c0635f94efe46641dad51f06d6950b815ba71-s5-c85.jpg"],
                description:"The most romantic scene from any of this year's Oscar-nominated films begins with a deliciously idiosyncratic pickup line. At a swinger's pool party in 1978, a flabby yet still somehow alluring Christian Bale gently grabs the arm of Sydney Prosser, played by Amy Adams at her most wide-eyed and guileful. Is that Duke Ellington on your bracelet? he murmurs. The pair quickly retire to a private room, where Rosenfeld has a stereo at the ready; he drops the needle on Jeep's Blues, the pivotal Duke piece these made-for-each other lovers both love. The way they listen together is as intimate and quietly climactic as real sex.",
                created:"12/12/2013"
            }
        ];
    res.json(topSectionNews);
})

app.get('/api/mainsectionnews',function(req,res){
        var mainSectionNews=[
            {
                headline:"One Last Dash to Freedom",
                author:"anonymous",
                imageReferences:["http://media.npr.org/assets/img/2014/03/01/mariarita_wide-767112515c4757b3ccf7f47c39dab0e0dbbeba53-s5-c85.jpg"],
                description:"Abdel clings to his pregnant wife and kids as they cross the Mediterranean in a boat. If they make it, his young family will be one step closer to freedom. Many have died making the same voyage.",
                created:"12/12/2013"
            },
            {
                headline:"Mobile World Congress in 14 lines ",
                author:"anonymous",
                imageReferences:["http://media.npr.org/assets/img/2014/03/01/essm-still-4_wide-5a4cc27885e314481869bc85d5e2ba4e3b6fc6f8-s5-c85.jpg"],
                description:"In Barcelona we all tried to thrive And strove to not imbibe too many beers When Samsung trotted out the GS5 Then shortly after highlighted new Gears. Mozilla's and Ubuntu's phones seemed cheap, Along with some of Waterloos new wares, But Sonys flagship stuff atop the heap And Blackphone puts an end to snooping scares.",
                created:"12/12/2013"
            },
            {
                headline:"Tim Cook rejects NCPPR proposal to end environmental programs for increased profit, suggests group sell stock",
                author:"anonymous",
                imageReferences:["http://media.npr.org/assets/img/2014/03/01/ngs26_0196_wide-fa06c9d6df8e610fc7ad11555e5a063fb669fa6a-s5-c85.jpg"],
                description:"Apple CEO Tim Cook rejected an propsal from a representative of the National Center for Public Policy Research during today’s shareholder meeting. The proposal would have required the tech company to disclose the cost of any environmental initiatives it engaged in and end those that could take away from the company’s bottom line. Cook reportedly became angry at the question, telling the representative that financial gain was not the purpose of ensuring environmental responsibility, saying, ”If you want me to do things only for ROI reasons, you should get out of this stock.” Cook also pointed out that making devices accessible for disabled users does not necessarily lead to increased revenue, but that doesn’t stop the company from searching for new ways to do so",
                created:"12/12/2013"
            }

        ];
    res.json(mainSectionNews);
})

app.get('/api/slideSectionNews',function(req,res){
         var slideSectionNews=[
            {
                headline:"One Last Dash to Freedom",
                author:"anonymous",
                imageReferences:["http://media.npr.org/assets/img/2014/03/01/mariarita_wide-767112515c4757b3ccf7f47c39dab0e0dbbeba53-s5-c85.jpg"],
                description:"Abdel clings to his pregnant wife and kids as they cross the Mediterranean in a boat. If they make it, his young family will be one step closer to freedom. Many have died making the same voyage.",
                created:"12/12/2013"
            },
            {
                headline:"Mobile World Congress in 14 lines ",
                author:"anonymous",
                imageReferences:["http://media.npr.org/assets/img/2014/03/01/essm-still-4_wide-5a4cc27885e314481869bc85d5e2ba4e3b6fc6f8-s5-c85.jpg"],
                description:"In Barcelona we all tried to thrive And strove to not imbibe too many beers When Samsung trotted out the GS5 Then shortly after highlighted new Gears. Mozilla's and Ubuntu's phones seemed cheap, Along with some of Waterloos new wares, But Sonys flagship stuff atop the heap And Blackphone puts an end to snooping scares.",
                created:"12/12/2013"
            },
            {
                headline:"Tim Cook rejects NCPPR proposal to end environmental programs for increased profit, suggests group sell stock",
                author:"anonymous",
                imageReferences:["http://media.npr.org/assets/img/2014/03/01/ngs26_0196_wide-fa06c9d6df8e610fc7ad11555e5a063fb669fa6a-s5-c85.jpg"],
                description:"Apple CEO Tim Cook rejected an propsal from a representative of the National Center for Public Policy Research during today’s shareholder meeting. The proposal would have required the tech company to disclose the cost of any environmental initiatives it engaged in and end those that could take away from the company’s bottom line. Cook reportedly became angry at the question, telling the representative that financial gain was not the purpose of ensuring environmental responsibility, saying, ”If you want me to do things only for ROI reasons, you should get out of this stock.” Cook also pointed out that making devices accessible for disabled users does not necessarily lead to increased revenue, but that doesn’t stop the company from searching for new ways to do so",
                created:"12/12/2013"
            }
        ];
    res.json(slideSectionNews);
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
