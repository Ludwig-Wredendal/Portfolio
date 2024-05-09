import React from 'react';

function Intro () {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl 
            md:text-7xl mb-1
            dark:text-white
            md:mb-3 font-bold">Ludwig Wredendal</h1>
            
            <p className="text-base md:text-xl mb-3 font-medium">Engineering program in Interaction Technology and Design</p>
            <div>
                <img src="assets\bild_lw24.jpg" alt="Ludwig Wredendal" className="w-48 h-auto" /> {/* Adjust width and height as needed */}
            </div>
            <br/>
            <p className="text-sm max-w-xl mb-6 font-bold">Hi! Im a student currently getting my MSc in a five-year integrated MSc 
            program at Umeå University in Umeå, where I am also currently based. I started my university studies in fall of 2021 and aim
            to graduate in spring 2026. After my studies I aspire to be working as a software engineer.
            <br/>
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
            <br/>
            My {' '}
            <a
                href="https://github.com/Ludwig-Wredendal" // viktigt med hela adressen annars knasar det sig.
                target="_blank" // detta tar dig till ett nytt fönster.
                className="text-cyan-600 hover:underline
                underline-offset-2 decoration-2
                decoration-red-600"
                rel="noreferrer noopener"
            >
                GitHub
            </a>{' '}
            profile.
            </p>
            
        </div>
    )
}

export default Intro;