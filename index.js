const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const sequelize = require('./config/database');
const property = require('./models/properties');

//synchronize table on new changes
sequelize.sync({
    force: true,
    logging: console.log
})


const app = express();

const PORT = process.env.PORT || 3000;

const website = "https://firstavenueproperties.co.ke/property-listing/";




                
// page/2/

    //i =pages

        for (let i = 0; i <= 10; i++) {
            let url = i > 0 ? `${website}/page/${i}/` : website;

            axios(url).then((res) => {
    
                const $=cheerio.load(res.data);
            //    let pagination= $('.pagination').children().length;
            //    console.log(pagination.length);
            
            //     $('.pagination').each((i,element)=>{
            //         const pagination=$(element).find('.real-btn');
            //         console.log(pagination);
            //     });
                
                let test =$('#home-properties-wrapper').text();
                 $('.property-item')
                .each((i,el) =>{
                    const tittle =$(el).find('h4').text();
                    const image =$(el).find('figure > a').attr('href');
                    const propertyDescription=$(el).find('h4 >a').attr('href');
                    const price=$(el).find('span').text();
                    const details =$(el).find('p').text();
                    const caption =$(el).find('figcaption').text();
                
             
            //insert record
                property.create({
                    'title': tittle,
                    'image': image,
                    'description':propertyDescription,
                    'price':price,
                    'details':details,
                    'caption':caption
                })
                });
             
              });
           
           
        }
       
   




app.listen(PORT, () => {
//   console.log(`server is running on PORT:${PORT}`);
  console.log('Fetching date please wait.................')
});