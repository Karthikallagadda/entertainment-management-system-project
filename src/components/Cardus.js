import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
const Cardus= () => {
     return (
     <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-5">
        {" "}
        
        </h1>  
        <div className="container ">
  <div className="row">
    <div className="col">
    <div class="card" >
  <img src="https://i.pinimg.com/736x/e7/37/10/e737107c236aacafd59678aef21c8346.jpg" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Best games for Family Getogether </h5>
    <p><b>Lawns,Function Halls & Parks</b></p>
       <br/>
       <br/>
    <p class="card-text">In this day of family gettogether we conduct small fun games etc</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
  <img src="https://orlandodatenightguide.com/wp-content/uploads/2017/08/leu-gardens-movie-night-1024x1024.jpg" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Movie Nights</h5>
    <p><b>Lawns,Picnic spots & Parks</b></p>
       <br/>
       <br/>
    <p class="card-text">We think so you could spend your family time in the form of seeing movies</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
  <img src="https://www.kovaiweddingdecorator.com/wp-content/uploads/2020/08/Outdoor.jpg" class="card-img-top" alt="..."
  height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Outdoor Backdrops</h5>
    <p class="card-text">We are the best Outdoor backdrop decorators . We have trendy ideas and themes for your special occasions.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  </div>
</div>
     </React.Fragment>
     ); 
    }; 
export default Cardus;