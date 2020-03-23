import Driver from "./model.js";

const driverControler = {
    get1: (req, res) => {
        Driver.find((err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            }
            else {
                res.send(result);
            }
        });
    },
    get2: (req, res) => {
        Driver.find().then(
            result => res.send(result)
        ).catch(
            err => {
                console.log(err);
                res.status(500).send(err);
            }
        )
    },
    get3: async (req, res) => {
        try {
            let driversList = await Driver.find();
            res.send(driversList);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },
    init: async (req, res) => {
        let n = await Drivers.find().count();
        console.log(n);
        if (n == 0) {
            let driver1 = new Driver({
                Name: "Ludvig",
                Mark: "Mercedes",
            });
            await driver1.save();
            let driver2 = new Driver({
                Name: "Vanya",
                Mark: "Volkswagen"
            });
            await driver2.save();
        }
        res.send("intialised");
    }
};

export default driverControler;