import React from 'react';

const Bannar = () => {
    return (
        <div className="hero max-w-5xl mx-auto bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/vCNkqktX/pngwing-1.png"
                    className="max-w-sm"
                />
                <div>
                    <h1 className="text-4xl max-w-[500px] font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn mt-10 bg-[#23BE0A] text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;