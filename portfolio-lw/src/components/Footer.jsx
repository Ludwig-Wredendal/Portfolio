import React from 'react';

function Footer () {
    return (
        <div className='py-5 text-center'>
            <p className='text-sm mt-2 opacity-50'>
                {new Date().getFullYear()} Ludwig Wredendal.
            </p>
        </div>
    )
}

export default Footer;