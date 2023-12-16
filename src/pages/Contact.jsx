import { useState } from "react"

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: ''
  })

  const handleOnChange = (event) => {
    const target = event.target;
    console.log(target)
  }


  return (
    <div className="form-container">
      <h1>Contact Me!</h1>
      <form>

        <label>
          Name:
          <input 
            type="text"
            name="name"
            className="input-form"
            required
          />
        </label>

        <label>
          Email:
          <input 
            type="email"
            name="email"
            className="input-form" 
            required
          />
        </label>

        <label>
          Message:
          <input 
            type="text"
            name="message"
            className="input-form"
            required    
          />
        </label>


        <button>Submit</button>

      </form>

    </div>
  )
}
