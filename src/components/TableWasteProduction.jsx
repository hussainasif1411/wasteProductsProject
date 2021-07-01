import react, { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function TableWasteProduction() {

    const [wasteProductList, setWasteProductList] = useState([]);
    let history = useHistory();

    function showData() {
        Axios.get("http://localhost:4000/getWasteProducts").then((response) => {
            console.log(response);
            setWasteProductList(response.data);
        });
    }

    function updateWasteProduct() {

    }

    const deleteProduct = (id) => {
        Axios.delete(`http://localhost:4000/deleteProduct/${id}`).then((response) => {
            setWasteProductList(
                wasteProductList.filter((val) => {
                    return val.id !== id;
                })
            );
        });
    };

    // function deleteWasteProduct(id) {
    //     Axios.delete(`http://localhost:4000/deleteProduct/${id}`);
    // }

    return (<div className="container">
        <button onClick={showData}>Show Data</button>
        <div className="container">
            {/* <div>
                <button onClick={getProducts}>Get Waste Product</button>
           </div> */}

            <h1>Waste Production</h1>
            <div className="row-mt-3">
                <table className="table">


                    {wasteProductList.map((val, key) => {
                        return <div>
                            <tr>
                                <th>Id</th>
                                <th>Date of entry</th>
                                <th>Entry by</th>
                                <th>Special event</th>
                                <th>Recycled & Landfilled waste</th>
                                <th>Waste Category</th>
                                <th>Type of waste</th>
                                <th>Weight</th>
                                <th>Unit</th>
                                <th>Quality</th>
                                <th>Note</th>

                            </tr>
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.date_of_entry}</td>
                                <td>{val.entry_by}</td>
                                <td>{val.special_event}</td>
                                <td>{val.recycled_and_landfilled_waste}</td>
                                <td>{val.waste_category}</td>
                                <td>{val.type_of_waste}</td>
                                <td>{val.weight}</td>
                                <td>{val.unit}</td>
                                <td>{val.quality}</td>
                                <td>{val.note}</td>
                                <td><button onClick={updateWasteProduct}>Update</button></td>
                                <td>
                                    <button
                                        onClick={() => {
                                            deleteProduct(val.id);
                                        }}>Delete
                                    </button>
                                </td>


                                {/* <td><button
                                // onClick={deleteWasteProduct(val.id)}
                                >Delete</button></td> */}


                                {/* <td><Link to='/update' onClick={() => {
                                    history.push("/");
                                }} >Update</Link></td>
                                <td><Link to='/delete' onClick={() => {
                                    history.push("/");
                                }} >Delete</Link></td> */}
                            </tr>

                        </div>
                    })}
                </table>
            </div>
        </div>
    </div>

    )
}

export default TableWasteProduction;

// import react, { useState } from "react";
// import Axios from "axios";
// //import { Link, useHistory } from "react-router-dom";

// function TableWasteProduction() {

//     const [wasteProductList, setWasteProductList] = useState([]);
//     //let history = useHistory();

//     Axios.get("http://localhost:4000/getWasteProducts").then((response) => {
//         console.log(response);
//         setWasteProductList(response.data);
//     });

//     function updateWasteProduct() {

//     }

//     const deleteProduct = (id) => {
//         Axios.delete(`http://localhost:4000/deleteProduct/${id}`).then((response) => {
//             setWasteProductList(
//                 wasteProductList.filter((val) => {
//                     return val.id !== id;
//                 })
//             );
//         });
//     };

//     // function deleteWasteProduct(id){
//     //     Axios.delete(`http://localhost:4000/deleteProduct/${id}`);
//     // }

//     return (
//         <div className="container">
//             {/* <div>
//                 <button onClick={getProducts}>Get Waste Product</button>
//             </div> */}

//             <h1>Waste Production</h1>
//             <div className="row-mt-3">
//                 <table className="table">


//                     {wasteProductList.map((val, key) => {
//                         return <div>
//                             <tr>
//                                 <th>Date of entry</th>
//                                 <th>Entry by</th>
//                                 <th>Special event</th>
//                                 <th>Recycled & Landfilled waste</th>
//                                 <th>Waste Category</th>
//                                 <th>Type of waste</th>
//                                 <th>Weight</th>
//                                 <th>Unit</th>
//                                 <th>Quality</th>
//                                 <th>Note</th>

//                             </tr>
//                             <tr>
//                                 <td>{val.date_of_entry}</td>
//                                 <td>{val.entry_by}</td>
//                                 <td>{val.special_event}</td>
//                                 <td>{val.recycled_and_landfilled_waste}</td>
//                                 <td>{val.waste_category}</td>
//                                 <td>{val.type_of_waste}</td>
//                                 <td>{val.weight}</td>
//                                 <td>{val.unit}</td>
//                                 <td>{val.quality}</td>
//                                 <td>{val.note}</td>
//                                 <td><button onClick={updateWasteProduct}>Update</button></td>

//                                 <td><button
//                                     onClick={deleteProduct(val.id)}
//                                 >Delete</button></td>

//                                 {/* <td><button
//                                 // onClick={deleteWasteProduct(val.id)}
//                                 >Delete</button></td> */}
//                                 {/* <td><Link to='/update' onClick={() => {
//                                     history.push("/");
//                                 }} >Update</Link></td>
//                                 <td><Link to='/delete' onClick={() => {
//                                     history.push("/");
//                                 }} >Delete</Link></td> */}
//                             </tr>

//                         </div>
//                     })}
//                 </table>
//             </div>
//         </div>

//     )
// }
// export default TableWasteProduction;



