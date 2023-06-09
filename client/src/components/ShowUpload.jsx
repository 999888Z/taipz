/* eslint-disable */
import React, { useState } from "react";

const ShowUpload = () => {
  const [formData, setFormData] = useState({
    artist: "",
    date: "",
    venue: "",
    city: "",
    state: "",
    country: "",
    tourName:"",
    artistImage: "",
    showImage: "",
    songName: "",
    audioLink: "",
    track: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    if (formData) {
      try {
        
        const response = await fetch("http://localhost:3001/api/artist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            artistName: formData.artist,
            artistImage: formData.artistImage,
            date: formData.date,
            venue: formData.venue,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            tourName: formData.tourName,
            showImage: formData.showImage,
            songName: formData.songName,
            audioLink: formData.audioLink,
            track: formData.track  
          }),
        });

        const data = await response.json();
       
        
      } catch (err) {
        alert(err);
      } 
    //   finally {
    //     setGeneratingImg(false);
    //   }
    // } else {
    //   alert("Please provide proper prompt");
    // }
    

  };
}

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <label className="upload-label">Artist:</label>
          
          <br />
          <input
            className="upload-input"
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        
        <br />
        <label className="upload-label">
          Date:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        
        <br />
        <label className="upload-label">
          Venue:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
          />
        
        <br />
        <label className="upload-label">
          City:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        
        <br />
        <label className="upload-label">
          State/Province:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        
        <br />
        <label className="upload-label">
          Country: </label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
       
        <br />
        <label className="upload-label">
          Tour Name: </label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="tourName"
            value={formData.tourName}
            onChange={handleChange}
          />
       
        <br />
        <label className="upload-label">
          Artist Image:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="artistImage"
            value={formData.artistImage}
            onChange={handleChange}
          />
        
        <br />
        <label className="upload-label">
          Concert Image:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="showImage"
            value={formData.showImage}
            onChange={handleChange}
          />
        
        <br />
        <label className="upload-label">
          Song Name:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="songName"
            value={formData.songName}
            onChange={handleChange}
          />
        
        <br />
        <label className="upload-label">
          Audio File Link:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="audioLink"
            value={formData.audioLink}
            onChange={handleChange}
          />
          <br/>
                  <label className="upload-label">
          Track Number:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="track"
            value={formData.track}
            onChange={handleChange}
          />
        
        <br />
        <button className='upload-button'type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShowUpload;
