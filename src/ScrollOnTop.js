import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    zIndex: 1000,
                }}
                title="Scroll to top"
            >
                ↑
            </button>
        )
    );
};

export default ScrollToTopButton;
