import React from "react"

function SignIn() {
  return (
    <div id="sign-in" className="text-center">
      <form className="form-signin">
        <img className="mb-4" src="logo192.png" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Transaction Monitoring</h1>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
      </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
      </form>
    </div>
  )
}

export default SignIn