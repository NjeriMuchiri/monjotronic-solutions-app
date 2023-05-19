import React, { useState} from 'react';


function Form(){
    const[description,setDescription] = useState('Preventive Maintenance');
    const[email,setEmail] = useState('');
    const[phonenumber,setPhoneNumber]=useState('');
    const[message,setMessage] = useState('');
    
    const handleSubmit = async (e) =>{
           e.preventDefault();
           //console.log ({description,email,phonenumber,message});

           await fetch("http://localhost:3001/send",{
           method: "POST",
           headers:{
              "Content-type":"application/json"
           },
              body: JSON.stringify({description,email,phonenumber,message})
                 
           })
           .then((res) =>res.json())
           .then(async (res)=>{
               const resData = await res;
                  console.log(resData);
               if(resData.status === "success"){
                   alert("Message Sent");
               } else if(resData.status === "fail")  {
                   alert("Message failed to send");
               }  
           })
                 setDescription("Preventive Maintenance");
                 setEmail("");
                 setPhoneNumber("");
                 setMessage("");
                 
        }
        
    return(
        <form onSubmit={handleSubmit}>
           <div className="section quotation">
                     <h4>Get a Quotation.</h4>
                    <label>Description:</label>
                    <select 
                    value={description}
                    onChange = {(e) =>setDescription(e.target.value)}
                     className="selected" 
                     >
                     <option value="Maintenance">Preventive Maintenance</option>
                      <option value="Service">Service</option>
                      <option value="Networking">LAN/WLAN Infrastructure</option>
                      <option value="Security">CCTV installation</option>
                      <option value="Security">Electric-Fence Installation</option>
                      <option value="Cabling">Structured Cabling</option>
                      <option value="Access">Access Control</option>
                      <option value="PowerInstallation">Clean Power Installation</option>
                      <option value="Equipment">ICT-Equipment</option>
                      <option value="Repair">Computer & Software Repair</option>
                      <option value="Repair">Computer Accesories</option>
                    </select>

                    <br/>
                    <input type="email" 
                     value={email}
                     onChange = {(e) =>setEmail(e.target.value)}
                     placeholder="Your Email..."
                     className="text_input"
                     />

                    <br />
                    <input 
                     type="phonenumber"
                     value={phonenumber}
                     onChange = {(e) =>setPhoneNumber(e.target.value)}
                     placeholder="Phone Number"
                     className="text_input"
                     />

                <br/>
                    <textarea 
                    value={message}
                    onChange = {(e) =>setMessage(e.target.value)}
                    placeholder="Leave a Message..."
                    className="text_input"
                    />

                     </div>
                <button
                 type="submit" 
                 onClick={handleSubmit}
                 className="contact-in-btn" >Submit</button>
        </form>
    )

    }


export default Form;