import React from 'react';




import { GradualSpacingDemo } from '@/components/Web/gradual-spacing';
import Navbar from '@/components/Web/Navbar';
import Search from '@/components/SearchDiv/Search';
import Jobs from '@/components/JobDiv/Jobs';
import Value from '@/components/ValueDiv/Value';


const Home = () => {
    return (
        <div className='w-[85%] m-auto bg-white dark:bg-black'>
           <Navbar/>
            <div className='h-full w-full flex justify-between items-center p-8'>
                <GradualSpacingDemo />
                <img 
                    className='h-80 w-70 object-cover' 
                    src='https://ideausher.com/wp-content/uploads/2021/02/Web-1920-%E2%80%93-2-3.png' 
                    alt='Landing Page' 
                />
            </div>
            <Search/>
            <Jobs/>
            <Value/>
            
           
            
        </div>
    );
};

export default Home;