import React, { Component } from 'react';
import Navbar from "./Navbar.jsx";
import "./Upload.css"


export class Upload extends Component {
  state={
    Img:null,
	person:null,
	profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  };
  imageHandler = (e) => {
	  console.log(e.target.files[0])
      this.setState({Img:e.target.files[0]})
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
	
  };

  /*filehandler = (e) =>{
	  const fd=new FormData();
	  fd.append("image",this.state.Img);
	  console.log(this.state.Img.name)
	  console.log("finally hello dear")

	  fetch("/app/predict",{
		 method:'POST',
		 body: fd
	  }).then(response=>response.json())
	  .then(message=>console.log(message))

	  console.log("done")

  };*/
  filehandler = async(e) =>{
	const fd=new FormData();
	fd.append("image",this.state.Img);
	console.log(this.state.Img.name)
	console.log("finally hello dear")

	const response= await fetch("/app/predict",{
	   method:'POST',
	   body: fd
	});
	const data= await response.json();
	console.log(data);
	this.setState({person:data.imge})
	console.log(data.imge);
	/*
	.then(response=>response.json())
	.then(message=>console.log(message))
	*/

	console.log("done")

};
	render() {
    const { profileImg} = this.state
		return (
			<div className="imp">
				<Navbar/>
				<h1 className="head"><span>UPLOAD IMAGE</span></h1>
				<div className="page">
				<div className="container2">
					<p className="heading">Add your Image</p>
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<p className="material-icons">Choose your Photo</p>
						
					</label>
          </div>
				</div>
			</div>
			</div>
			
		);
	}
}

export default Upload;
