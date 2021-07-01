import react from "react";

function AccountSetting() {
    
    // function updatePassword(){
    //     console.log("I got clicked");
    // }

    return (
        <div className="container">
            <h1 style={{ fontWeight: "bold" }}>Settings</h1>
            <div className="row mt-4">
                <div className="col-md-4 mt-3" style={{ color: "green" }}>
                    <h5>Account Settings</h5>
                </div>
                <div className="col-md-4 mt-3" style={{ color: "green" }}>
                    <h5>Metrics</h5>
                </div>
                <div className="col-md-4 mt-3" style={{ color: "green" }}>
                    <h5>Language</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mt-3">
                    <h6 style={{ fontWeight: "bold" }}>Account Type:</h6>
                </div>
                <div className="col-md-4 mt-3">
                    <h6 style={{ fontWeight: "bold" }}>Language:</h6>
                </div>
                <div className="col-md-4 mt-3">
                    <h6 style={{ fontWeight: "bold" }}>Language:<br></br><p className="mt-1"><h6>English</h6></p></h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h6 style={{ fontWeight: "bold" }}><a href="">
                        Change Password:</a></h6>
                </div>

            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                <h6 style={{ fontWeight: "bold" }}>E-mail Verification:<p className="mt-1"><h6>email@email.com(verified)</h6></p></h6>
                </div>
            </div>
        </div>
    )
}

export default AccountSetting;