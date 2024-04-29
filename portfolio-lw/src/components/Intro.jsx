import React from 'react';

function Intro () {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl 
            md:text-7xl mb-1
            md:mb-3 font-bold">Ludwig Wredendal</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Engineering program in Interaction Technology and Design</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Im a student currently getting my MSc in a five-year integrated MSc 
            program at Umeå University.
            <br/>
            My {' '}
            <a
                href="https://linkedin.com/in/ludwig-wredendal-299530276" // viktigt med hela adressen annars knasar det sig.
                target="_blank" // detta tar dig till ett nytt fönster.
                className="text-cyan-600 hover:underline
                underline-offset-2 decoration-2
                decoration-red-600"
                rel="noreferrer noopener"
            >
                LinkedIn
            </a>{' '}
            profile.
            </p>
        </div>
    )
}

export default Intro;