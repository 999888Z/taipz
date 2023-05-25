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
    artistImage: "",
    concertImage: "",
    songName: "",
    audioFile: "",
    track: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    console.log(formData);
  };

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
            name="concertImage"
            value={formData.concertImage}
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
          Audio File:</label>
          <br />
          <input
            className="upload-input"
            type="text"
            name="audioFile"
            value={formData.audioFile}
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
