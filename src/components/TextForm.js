import React from 'react'

export default function TextForm() {
  return (
    <div>
        <form>
        
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remind me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button><br/><br/>
  <center>
  <button type="submit" class="btn btn-primary">Sign in</button>

        
<button type="submit" class="btn btn-primary mx-3">Sign up</button>

  </center>

 
</form>
    </div>
  )
}
