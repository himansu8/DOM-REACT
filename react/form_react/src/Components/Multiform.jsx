import { useState } from "react"

function Multiform() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })
  function changeHandler(e) {
    // console.log(e.target.name, e.target.value )
    // let obj = {
    //   ...formData,
    //   [e.target.name] : e.target.value
    // }
    // setFormData(obj);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <form>
        <label>
          First Name:
          <input type="text" placeholder="Enter Your First Name" onChange={changeHandler} name="firstname" value={formData.firstname} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" placeholder="Enter Your Last Name" onChange={changeHandler} name="lastname"value={formData.lastname}/>
        </label>
        <br />
        <label>
          Email:
          <input type="text" placeholder="Enter Your Email" onChange={changeHandler} name="email" value={formData.email}/>
        </label>

      </form>
      <p>Firstname :{formData.firstname}</p>
      <p>Lastname :{formData.lastname}</p>
      <p>Email :{formData.email}</p>

    </>

  )
}

export default Multiform