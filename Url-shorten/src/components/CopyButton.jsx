import React, {useState} from 'react';
import '../styles/CopyButton.css'

const CopyButton  = ({url}) => {
    const [isClick, setIsClick] = useState(false)
    const handleClick = () => {
        navigator.clipboard.writeText(url||'');
        if (url) {
            setIsClick(true)
        }

        setTimeout(() => {
            setIsClick(false);
        }, 2000);
    };

    return (
        <button
            className={`Copy ${isClick ? "clicked" : ""}`}
            onClick={handleClick}
        >
            {isClick ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-check" viewBox="0 0 16 16">
                    <path
                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-copy" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                </svg>
            }
        </button>
    );
};

export default CopyButton;
