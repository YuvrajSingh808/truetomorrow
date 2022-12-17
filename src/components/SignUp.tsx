import { Input } from '@material-tailwind/react';
import type { InputStylesType } from "@material-tailwind/react";
import zero from '../assets/zero.jpg';

export default function SignUp() {
    return (
        <div className="bg-cover w-full h-full flex flex-col justify-end items-end bg-center bg-no-repeat my-20 py-20 px-20" style={{ backgroundImage: `url(${zero})` }}>
            <div className="w-full flex flex-col items-end">
                <div className="w-1/3 px-20 mb-10">
                    <p className='uppercase text-xl font-semibold text-center'>
                        LET’S JOiN HANDS FOR A
                        BETTER TOMORROW
                    </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <div className="relative mb-4">
                        <Input type="text" variant='outlined' label='Your Name' className='focus:border-blue-900' />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
        </div>
    );
}