import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function TypingAnimation({ content }) {
    useEffect(() => {
        const typeWriterInstance = new Typewriter('#typewriter', {
            strings: [content],
            autoStart: true,
            loop: false,
            delay: '1',
            pauseFor: 1000000000000000
        });

        


    }, [content]); 
    return (
        <span id="typewriter" style={{ fontSize: '16px', display: 'inline-block' }}></span>
    );
}

export default TypingAnimation;
