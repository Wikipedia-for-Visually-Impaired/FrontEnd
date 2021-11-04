import React, { Component } from 'react';
import Navbar from "./Navbar.jsx";
import "./Upload.css"

export class Upload extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
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