// import { useState } from "react";

// const Fullname=()=>{
//     const[fname,setFname]=useState("")
//     const[lname,setLname]=useState("")
//     const[fullname,setFullname]=useState("");
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         setFullname(fname+lname)
//     }
//     return(
//         <>
//         <form onSubmit={handleSubmit()}>
//             <div>
//             <label for="firstname">FullName:</label>
//             <input type="text" name="firstname" id="fistname" onChange={(e)=>setFname(e.target.value)}/>
//             </div>
//             <div>
//             <label for="lastname">LastName:</label>
//             <input type="text" name="lastname" id="lastname" onChange={(e)=>setLname(e.target.value)}/>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//         {(fname.length>0 && lname.length>0) && <p>{fullname}</p>}
//         </>
//     )
// }

// export default Fullname;

import { useState } from "react";

const Fullname = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [fullname, setFullname] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        if(!fname || !lname)
        {
            return;
        }
        setFullname(`${fname} ${lname}`); // Concatenate with space
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <h1>Full Name Display</h1>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        onChange={(e) => setFname(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        onChange={(e) => setLname(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button> {/* Set button type to submit */}
            </form>
            {fullname.length>0&&(<p>FullName: {fullname}</p>)}
        </>
    );
};

export default Fullname;
