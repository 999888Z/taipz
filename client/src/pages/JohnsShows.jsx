/* eslint-disable */


import { Error, Loader, SongCard } from '../components';

// import { useGetShowsByJohnsQuery } from '../redux/services/shazamCore';

const JohnsShows = () => {
    
    // const { activeSong, isPlaying } = useSelector((state) => state.player);
    // const { data, isFetching, error } = useGetShowsByJohnsQuery();


   

    // if (isFetching) return <Loader title="Loading John's Shows" />;

    // if (error) return <Error />;


    

return (

<div className='flex flex-col'>
    <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'
    >John's Shows
    </h2>

{/* <div className='flex flex-wrap sm:justify-start justify=center gap-8'>
        {data?.map((song,i) => (
            <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
            />



        ))}

</div> */}

</div>

)
}


export default JohnsShows;