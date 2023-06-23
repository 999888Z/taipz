/* eslint-disable */

// 1S1nUYpFy3XX_DE7GQEavxv_fO65JemeO
// import { Error, Loader, SongCard } from '../components';

// import { useGetShowsByJohnsQuery } from '../redux/services/shazamCore';
// import { useEffect, useState } from 'react';

// const axios = require('axios');

// const apiKey = 'AIzaSyA-C-FUFiS1Ch984SSsmyLiGDrvD4i78M0';
// const apiUrl = 'https://apis.google.com/js/api.js';

// axios.get(apiUrl, {
//     params: {
//       key: apiKey,
//       // Additional parameters as required by the API
//     }
//   })
//     .then(response => {
//       // Handle the response data
//       console.log(response.data);
//     })
//     .catch(error => {
//       // Handle errors
//       console.error(error);
//     });

// const JohnsShows = () => {
//     const apiKey = 'AIzaSyA-C-FUFiS1Ch984SSsmyLiGDrvD4i78M0';
// const apiUrl = 'https://www.googleapis.com/drive/v3/files/1wCwukfzmEH30QM26nE_4-_L4-IYmsGwD';

// fetch(apiUrl + '?key=' + apiKey)
//   .then(response => {
//     if (response.ok) {
//       return response.json(); // Parse the response data as JSON
//     } else {
//       throw new Error('Request failed with status code ' + response.status);
//     }
//   })
//   .then(data => {
//     // Handle the response data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error(error);
//   });

//     const [musicData, setMusicData] = useState({})
    
//     useEffect(() => {
//     const getMusic = async () => {
        
//         const response = await fetch ('http://localhost:3001/api/artist', {
//             method: 'GET', 
//             headers: {
//                 "Content-Type": "application/json",
//               },
//     }) 
//     // if (response.ok) {
//     const result = await response.json()
    
//     setMusicData(result)
 
//     // }
//     }
    
//     getMusic()
// },[]) 
// console.log(musicData[2])
    // const { activeSong, isPlaying } = useSelector((state) => state.player);
    // const { data, isFetching, error } = useGetShowsByJohnsQuery();


   

    // if (isFetching) return <Loader title="Loading John's Shows" />;

    // if (error) return <Error />;

/* eslint-disable */

import { useState, useEffect } from 'react';

// // Initialize Google Sign-In
// function initGoogleSignIn() {
//     gapi.load('auth2', function() {
//       gapi.auth2.init({
//         client_id: '74125366778-77enc57cag2a25sh738smqqvemevipcu.apps.googleusercontent.com',
//       }).then(function() {
//         // Google Sign-In initialized successfully
//       }).catch(function(error) {
//         // Error initializing Google Sign-In
//         console.error('Error initializing Google Sign-In: ', error);
//       });
//     });
//   }
  
//   // Call the initGoogleSignIn function when the API script is loaded
//   gapi.load('client:auth2', initGoogleSignIn);

const JohnsShows = () => {
  const [fileData, setFileData] = useState(null);
  const fileId = '1S1nUYpFy3XX_DE7GQEavxv_fO65JemeO';
  const apiKey = 'AIzaSyA-C-FUFiS1Ch984SSsmyLiGDrvD4i78M0';
  const apiUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?key=${apiKey}&fields=kind,id,name,mimeType,thumbnailLink,webContentLink,createdTime,modifiedTime,size`;


  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON
        } else {
          throw new Error('Request failed with status code ' + response.status);
        }
      })
      .then(data => {
        // Handle the response data
        setFileData(data);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  }, [apiUrl]);

  if (!fileData) {
    return 
  }

  const { name, webContentLink } = fileData;
console.log(fileData)
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>John's Shows</h2>

      <h3>{name}</h3>
      
      {/* Render the image */}
      
      <img src={webContentLink} alt={name} />
      <audio controls>
        <source src={webContentLink} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default JohnsShows;






    

// return (

// <div className='flex flex-col'>
//     <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'
//     >John's Shows
//     </h2>

//     {/* <p className='text-white'>{musicData[2]?.artistName}</p>  */}

//     <br/> 
//     {/* <img src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png'/> */}



// {/* <div className='flex flex-wrap sm:justify-start justify=center gap-8'>
//         {data?.map((song,i) => (
//             <SongCard
//                 key={song.key}
//                 song={song}
//                 isPlaying={isPlaying}
//                 activeSong={activeSong}
//                 data={data}
//                 i={i}
//             />



//         ))}

// </div> */}

// </div>

// )
// }


// export default JohnsShows;
