import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
const Cardis= () => {
     return (
     <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-5">
        {" "}
        
        </h1> 
        <marquee>------------- "STARTS EVERY DAY AT 9AM" -------------</marquee> 
        <div className="container ">
  <div className="row">
    <div className="col">
    <div class="card" >
  <img src="https://th.bing.com/th/id/OIP.ZDh5gYQUTMppYPoZOlWiVAHaEK?pid=ImgDet&rs=1" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Catering Services</h5>
    <p><b>Lawns & Parks</b></p>
       Arrangments are based on capacity<br/>
       <br/>
       ₹ 200 for NV each plate and ₹ 150 for Veg each plate
       <br/>
    <p class="card-text">Arrangement of catering foods are based as the wish of the customer</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
  <img src="https://th.bing.com/th/id/R.9919e8c8953922269467ef8337166a74?rik=DTAMRXmH3HSOBg&riu=http%3a%2f%2fpureenergy.net%2fwp-content%2fuploads%2f2017%2f10%2fline-array-audio-2.jpg&ehk=TvjwvifNuqW%2figxFtMBXUizO2pR3f3a9OxCn%2b9qRcus%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Music System</h5>
    <p><b>Lawns,Function Halls & Parks</b></p>
       Arrangments are based on capacity<br/>
       <br/>
    <p class="card-text">Music system will be arranged based on the type of entertainment you chose</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
  <img src="https://i.pinimg.com/originals/5e/ce/27/5ece270c2c0928cd641bebd1a1968cb4.jpg" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Decorations</h5>
    <p><b>Lawns,Function Halls & Parks</b></p>
       Cost is based on area & event<br/>
       <br/>
    <p class="card-text">We are the best in decorating our </p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  </div>
</div>
     </React.Fragment>
     ); 
    }; 
export default Cardis;