import react, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";

function WasteProduction() {

    let history = useHistory();

    const [dateOfEntry, setDateOfEntry] = useState("");
    const [entryBy, setEntryBy] = useState("");
    const [specialEvent, setSpecialEvent] = useState("");
    const [recycledAndLandfilledWaste, setRecycledAndLandfilledWaste] = useState("");
    const [wasteCategory, setWasteCategory] = useState("");
    const [typeOfWaste, setTypeOfWaste] = useState("");
    const [weight, setWeight] = useState("");
    const [weightUnit, setWeightUnit] = useState("");
    const [quality, setQuality] =useState("");
    const [note, setNote] = useState("");

    function handleEntryDate(event) {
        setDateOfEntry(event.target.value);
    }

    function handleSetEntryBy(event) {
        setEntryBy(event.target.value);
    }

    function handleSpecialEvent(event) {
        setSpecialEvent(event.target.value);
    }

    function handleRecycledAndLandfilledWaste(event) {
        setRecycledAndLandfilledWaste(event.target.value);
    }

    function handleWasteCategory(event) {
        setWasteCategory(event.target.value);
    }

    function handleTypeOfWaste(event) {
        setTypeOfWaste(event.target.value);
    }

    function handleWeight(event) {
        setWeight(event.target.value);
    }

    function handleWeightUnit(event){
        setWeightUnit(event.target.value);
    }

    function handleQuality(event) {
        setQuality(event.target.value);
    }

    function handleNote(event){
        setNote(event.target.value);
    }

    function handleSave(){
        Axios.post("http://localhost:4000/wasteProductData", {
            dateOfEntry: dateOfEntry,
            entryBy: entryBy,
            specialEvent: specialEvent,
            recycledAndLandfilledWaste: recycledAndLandfilledWaste,
            wasteCategory: wasteCategory,
            typeOfWaste: typeOfWaste,
            weight: weight,
            weightUnit: weightUnit,
            quality: quality,
            note: note
        }).then(() => {
            console.log("Success");
        });
        alert("Data Saved!");
        history.push("/tableWasteProduction")
        // setDateOfEntry("");
        // setEntryBy("");
        // setSpecialEvent("");
        // setRecycledAndLandfilledWaste("");
        // setWasteCategory("");
        // setTypeOfWaste("");
        // setWeight("");
        // setWeightUnit("");
        // setQuality("");
        // setNote("");

        // Axios.get("http://localhost:3001/getWasteProducts").then((response) => {
        //     console.log(response);
        //     setWasteProductList(response.data);
        // });
    }
    return (
        <div className="container">

            <div className="row mt-3">
                <h1>Waste Production</h1>
            </div>

            <div className="row mt-3">
                <div className="col-md-4">
                    <label>Date of entry</label><br></br>
                    <input type="date" onChange={handleEntryDate} />
                </div>
                <div className="col-md-4">
                    <label>Entry by</label><br></br>
                    <input type="text" onChange={handleSetEntryBy} />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-4">
                    <label>Special event</label><br></br>
                    <input type="text" placeholder="Enter any special event" onChange={handleSpecialEvent} />
                </div>
                <div className="col-md-4">
                    <label>Recycled & Landfilled waste</label><br></br>
                    <select onChange={handleRecycledAndLandfilledWaste} >
                        <option value="Select any recycled & landfilled waste" >Select any recycled & landfilled waste</option>
                        <option value="ABCD">ABCD</option>
                    </select>
                </div>
            </div>

            <hr></hr>

            <div className="row mt-3">
                {/* <div className="col-md-3">
                    <label>Waste Category</label><br></br>
                    <select name="waste">
                        <option value="paper">Paper</option>
                        <option value="metals">Metals</option>
                        <option value="plastics">Plastics</option>
                        <option value="glass">Glass</option>
                        <option value="clothes">Clothes</option>
                        <option value="furniture">Furniture</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label>Type of waste</label><br></br>
                    <select name="typeofwaste">
                        <option value="newsprint">Newsprint</option>
                        <option value="foodwaste">Food Waste</option>
                        <option value="yardwaste">Yard Waste</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label>Weight</label><br></br>
                    <input type="text" />
                    <select name="weight">
                        <option value="kg">Kg</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label>Quality</label><br></br>
                    <select name="quality">
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                    </select>
                </div> */}

                <table className="table">
                    <tbody>
                        <tr>
                            <td><label>Waste Category</label><br></br>
                                <select name="waste" onChange={handleWasteCategory}>
                                    <option value="Paper">Paper</option>
                                    <option value="Metals">Metals</option>
                                    <option value="Plastics">Plastics</option>
                                    <option value="Glass">Glass</option>
                                    <option value="Clothes">Clothes</option>
                                    <option value="Furniture">Furniture</option>
                                </select>
                            </td>
                            <td><label>Type of waste</label><br></br>
                                <select name="typeofwaste" onChange={handleTypeOfWaste}>
                                    <option value="Newsprint">Newsprint</option>
                                    <option value="Foodwaste">Food Waste</option>
                                    <option value="Yardwaste">Yard Waste</option>
                                    <option value="Others">Others</option>
                                </select>
                            </td>
                            <td>
                                <label>Weight</label><br></br>
                                <input type="text"  onChange={handleWeight}/>
                                <select name="weight" onChange={handleWeightUnit}>
                                    <option value="Kg">Kg</option>
                                    <option value="Pound">Pound</option>
                                </select>
                            </td>
                            <td>
                                <label>Quality</label><br></br>
                                <select name="quality" onChange={handleQuality}>
                                    <option value="Fair">Fair</option>
                                    <option value="Poor">Poor</option>
                                </select>
                            </td>

                            {/* <td><button>Add</button></td> */}

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row-mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Waste Category</th>
                            <th>Type of Waste</th>
                            <th>Weight</th>
                            <th>Quality</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        <tr>
                            <td>Paper</td>
                            <td>Newsprint</td>
                            <td>100 KG</td>
                            <td>Poor</td>
                            <td><a href="">Remove</a></td>
                        </tr>
                        <tr>
                            <td>Plastic</td>
                            <td>Newsprint</td>
                            <td>50 KG</td>
                            <td>Poor</td>
                            <td><a href="">Remove</a></td>
                        </tr>
                    </tbody> */}
                </table>
            </div>

            <hr></hr>

            <div className="row-mt-3">
                <label>Note</label><br></br>
                <textarea rows="4" cols="120" onChange={handleNote}></textarea>
            </div>

            <div className="row-mt-3">
                {/* <div className="col-md-6">
                    <button className="mt-5 btn" >Cancel</button>
                </div>
                <div className="col-md-6">
                    <button className="mt-5 btn btn-success">Save</button>
                </div>
            </div> */}

                <div>
                    <button className="btn mb-3">Cancel</button>
                    <button style={{ marginLeft: "950px" }} className="btn btn-success mb-3" onClick={handleSave} >Save</button>
                </div>
            </div>

            {/* <div>
                {wasteProductList.map((val, key) => {
                    return <div>
                        {val.dateOfEntry}
                    </div>
                })}
            </div> */}

        </div >
    )
}

export default WasteProduction;