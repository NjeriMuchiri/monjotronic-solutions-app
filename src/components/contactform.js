import React,{useState} from 'react'
    
const ContactForm =()=>{
   const[email,setEmail] = useState('');
    const[fullname,setFullName]=useState('');
    const[message,setMessage] = useState('');
       
    const[errorMessage,setErrorMessage] = useState('');

    //Validate our form
       const validate = () =>{
           let errorMessage = "";
           if(fullname === "" || message === ""){
               errorMessage = "please fill in the field";
           }
           if(errorMessage){
               setErrorMessage(errorMessage);
               return false;
           }
           return true;
       }

    // handle submit
    const handleSubmit = async (e) =>{
           e.preventDefault();
              
           const isValid = validate();
           if(isValid){
               const newPerson = {
                   fullname:fullname,
                    email:email,
                    message:message
               }
               console.log(newPerson);
           }

           await fetch("http://localhost:3001/send",{
           method: "POST",
           headers:{
              "Content-type":"application/json"
           },
              body: JSON.stringify({fullname,email,message})
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
                 setFullName("")
                 setEmail("");
                 setMessage("");
                 
        }
    
     return(
         <form onSubmit={handleSubmit}>
          <input 
                     type="text"
                     value={fullname}
                     onChange = {(e) =>setFullName(e.target.value)}
                     placeholder="Full Name"
                     className="contact-in-input"
                     />
                    <p style={{color:'red',fontSize:12}}>{errorMessage}</p>
                    <br/>
                    <input 
                     type="email"
                     value={email}
                     onChange = {(e) =>setEmail(e.target.value)}
                     placeholder="Your Email..."
                     className="contact-in-input"
                     
                     />
                <br/>
                    <textarea 
                    value={message}
                    onChange = {(e) =>setMessage(e.target.value)}
                    placeholder="Leave a Message..."
                    className="contact-in-textarea"
                    />
                    <p style={{color:'red'}}>{errorMessage}</p>
                <button 
                type="submit" 
                className="contact-in-btn"
                onClick={handleSubmit}
                 >Submit</button>
            
         </form>
     )
}
export default ContactForm;