import React from 'react';
import person from '../../Shared/assets/images/about_us/person.jpg';
import parts from '../../Shared/assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={parts} alt="" className=" rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={person} alt="" className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl " />
                </div>
                <div className='w-1/2'>
                    <p className="2xl">About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6"><small>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</small>
                        <br />
                        <small>
                            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </small></p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;