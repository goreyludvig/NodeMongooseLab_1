import Dai from "./model"
import mongoose from "mongoose"
import Driver from "../driver/model";


const daiControler = {
    //отримати всі
    get: function (request, response) {
        Dai.find().populate("driver")
        .then(dais=>{
                response.send(dais);
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //get
    //отримати одну з вказаним ІД
    get_id: function (request, response) {
        Dai.findById(request.params.id)
        .then(dai=>{
            if (dai)
                response.send(dai);
            else
                response.status(404).send("Не знайдено");  
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    }, //getById
    //додати нову
    post: function (request, response) {  
        console.log("dai")    
        const newDai = new Dai(request.body.dai);
        newDai.save()
        .then(dai=>{
            response.send(dai);    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },//post
    //вилучити із вказаним ІД
    delete_id: function (request, response) {
        Dai.findByIdAndDelete(request.params.id).
        then(dai=>{
            if (dai)
                response.send(dai);
            else
                response.status(404).send("Не знайдено");    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },//deleteById
    init: async (req,res) =>{
        console.log("init");
        let vasya = await Driver.findOne({Name:"Vasya"});
        console.log(vasya);
        let d1 = new Dai({
            title: "Driver1",
            driver: vasya._id
        });
        await d1.save();
        res.send(d1);
    }
}
//валідатор чи є в книги назва  і автор
function isValid(dai) {
    return dai && dai.title && dai.driver;
}

export default daiControler;