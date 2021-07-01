const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "waste_management",
});

app.post("/create", (req, res) => {
    //console.log(req.body);
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;

    db.query("INSERT INTO users(first_name, last_name, email, phone, password) VALUES (?,?,?,?,?)", [fname, lname, email, phoneNumber, password],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Data Inserted!");
                //res.redirect("/home/tis-41/Desktop/waste-management-project/client/src/components/Login.jsx");
            }
        }
    )
});

app.post("/login", (req, res) => {
    const userName = req.body.userName;
    const userPassword = req.body.userPassword;

    db.query("SELECT * FROM users WHERE email = ? AND password = ?", [userName, userPassword], (err, result) => {
        if (err) {
            res.send({ err: err });
        }

        if (result.length > 0) {
            console.log("User found!");
            console.log(result);
            res.send(result);
        } else {
            console.log(result);
            console.log("User not found!");
            res.send({ message: ", Wrong username and password" });
        }

    });
});

app.post("/wasteProductData", (req, res) => {
    console.log(req.body);

    const dateOfEntry = req.body.dateOfEntry;
    const entryBy = req.body.entryBy;
    const specialEvent = req.body.specialEvent;
    const recycledAndLandfilledWaste = req.body.recycledAndLandfilledWaste;
    const wasteCategory = req.body.wasteCategory;
    const typeOfWaste = req.body.typeOfWaste;
    const weight = req.body.weight;
    const weightUnit = req.body.weightUnit;
    const quality = req.body.quality;
    const note = req.body.note

    const sql = "INSERT INTO waste_record(date_of_entry, entry_by, special_event, recycled_and_landfilled_waste, waste_category, type_of_waste, weight, unit, quality,  note) VALUES (?,?,?,?,?,?,?,?,?,?)";

    db.query(sql, [dateOfEntry, entryBy, specialEvent, recycledAndLandfilledWaste, wasteCategory, typeOfWaste, 
    weight, weightUnit, quality, note], (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("Data Inserted!!");
        }
    });

    //console.log(req.body);
});

app.get("/getWasteProducts", (req, res) => {
    db.query("SELECT * FROM waste_record", (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    });
});

app.put("/updateWasteProducts", (req, res) => {
    const id = req.body.id;
    const entryBy = req.body.entryBy;
    db.query("UPDATE waste_record SET entry_by = ? WHERE id = ?", [entryBy, id], (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
});

app.delete("/deleteProduct/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM waste_record WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// app.get("/getLogin", (req, res) => {
//     console.log("Success");
//     res.sendFile("/home/tis-41/Desktop/waste-management-project/client/src/components/Login.jsx");
//     console.log("File sent");
// });



app.listen(4000, () => {
    console.log("Server is running on port 4000");
});