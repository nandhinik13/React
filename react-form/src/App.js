import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const initialValues = {firstname:"",middlename:"",lastname:"",email:"",mobnum:""};
  const [formValues,setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});
  const[isSubmit,setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const{name,value} = e.target;
    setFormValues({...formValues,[name]:value});
    //console.log(formValues);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) =>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.firstname){
      errors.firstname = "Enter your First Name";
    }
    if(!values.lastname){
      errors.lastname = "Enter your Last Name";
    }
    if(!values.email){
      errors.email = "Enter your email";
    }else if (!regex.test(values.email)){
      errors.email="Enter a valid email";
    }
    if(!values.mobnum){
      errors.mobnum = "Enter your Mobile Number";
    }
    return errors;
  };
  return (
    <div className="App">
      <header/>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className='ui message success'>Signed in successfully</div>
      ) : (
     <pre>{JSON.stringify(formValues,undefined,2)}</pre>
      )}  */}
      <form onSubmit={handleSubmit}>
        <h1>Let's Get Started</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className='field'>
            <label>First Name*</label><br></br>
            <input type="text" name="firstname"  value={formValues.firstname} onChange={handleChange}/>
          </div>
          <p>{formErrors.firstname}</p>
          <div className='field'>
            <label>Middle Name</label><br></br>
            <input type="text" name="middlename" value={formValues.middlename} onChange={handleChange}/>
          </div>
          <div className='field'>
            <label>Last Name*</label><br></br>
            <input type="text" name="lastname"  value={formValues.lastname} onChange={handleChange}/>
          </div>
          <p>{formErrors.lastname}</p>
          <div className='field'>
            <label>E-mail*</label><br></br>
            <input type="email" name="email"  value={formValues.email} onChange={handleChange}/>
          </div>
          <p>{formErrors.email}</p>
          <div className='field'>
            <label>Mobile Number*</label><br></br>
            <input type="number" name="mobnum"  value={formValues.mobnum} onChange={handleChange}/>
          </div>
          <p>{formErrors.mobnum}</p>
          <button className='button'>Save & Continue</button>
          
        </div>
      </form>
    </div>
  );
}

export default App;
