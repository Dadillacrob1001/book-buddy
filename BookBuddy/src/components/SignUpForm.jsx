import { useState } from "react"

function SignUpForm() {
  const [ user, setUser ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(null)

  async function handleSubmit(event) {
    const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/api/users/register");
    const result = await response.json();
    console.log(result);
    event.preventDefault();

    try {
    } catch (error) {
      setError(error.message);
    }
  }

  console.log("HELLO")

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input 
          placeholder='Enter Username' type='text'
          onChange={ (event) => setUser(event.target.value)}
          />
        </label>

        <label>
          Password
          <input 
          placeholder='Enter Password' type='text'
          onChange={ (event) => setPassword(event.target.value)}
          />
        </label>

        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm