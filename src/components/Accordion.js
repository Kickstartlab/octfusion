import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item cursor-pointer border-2 border-white-50 rounded-xl p-6 group">
            <div className="accordion-title flex justify-between items-start gap-4" onClick={() => setIsActive(!isActive)}>

                <div className='font-montserat font-semibold lg:text-xl text-white-100'>
                    {title}
                </div>

                <div className='text-2xl rotate-90 text-white-70 group-hover:text-white-100'>{isActive ? '>' : '<'}</div>
            </div>
            {isActive && <div className="accordion-content font-thin mt-4">{content}</div>}
        </div>
    );
};

export default Accordion
