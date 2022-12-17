import logo from '../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props: { selected: string; }) {
  const [selected, changeSelected] = useState(props.selected);
  const [navbarOpen, setNavbarOpen] = useState(false);
  function NavTextElement(props: { text: string; isSelected: any; pathname: string; }) {
    return (
      <div>
        <Link
          to={
            {
              pathname: props.pathname == null ? '/' : props.pathname,
            }
          }
        >
          <button onClick={() => { }} className={` text-sm ${props.isSelected ? "font-bold text-identityBlue" : "font-normal hover:text-identityBlue"}`}>{props.text}</button>
        </Link>
      </div>
    );

  }
  function NavButtonElement(props: { textColor: string; isSelected: boolean; reference: any; }) {
    return (
      <>
        <div className="z-50 relative font-WorkSans">

          <div className="dropdown inline-block relative mx-auto z-50">
            <button className="flex items-center space-x-2 hover:text-identityBlue">
              <span className={props.textColor + ` text-sm ${props.isSelected ? "font-bold" : "font-normal hover:text-identityBlue "}`}>Portfolio</span>
              <svg className="fill-current h-4 w-4 hover:text-identityBlue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
            </button>
            <ul className="dropdown-menu absolute hidden z-80 text-gray-700 pt-1 text-xs -ml-8 w-40 text-center mx-auto">
              <Link to={{ pathname: '/rangde' }} >
                <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  Rang De
                </li>
              </Link>
              <Link to={{ pathname: '/storeinstore' }} >
                <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Store in store

                </li>
              </Link>
              <Link to={{ pathname: '/optimize' }} >
                <li className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                  Optimize
                </li>
              </Link>
            </ul>
          </div>

        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-full sticky top-0 z-50 flex items-center justify-between px-10p py-4">

        <Link to={{ pathname: '/' }} >
          <div className="flex space-x-4 items-center">
            <img src={logo} alt="" className="w-40" />
          </div>
        </Link>
        <div className="flex lg:flex-row flex-col sm:items-start items-center sm:justify-end sm:space-x-10 sm:space-y-0 space-y-4 justify-between">
          <NavTextElement text="Home" isSelected={selected === 'Home'} pathname="/" />
          {/* <NavButtonElement text="Portfolio" isSelected={selected === 'Portfolio'} reference={props.reference} /> */}
          {/* <NavTextElement text="Passion Projects" isSelected={selected === 'Passion Projects'} pathname="/passionProjects" passionprojectsonclick={props.passionprojectsonclick ? props.passionprojectsonclick : null} /> */}
          <NavTextElement text="Resume" isSelected={selected === 'Resume'} pathname="/resume" />
          <NavTextElement text="About Me" isSelected={selected === 'About Me'} pathname="/aboutme" />
        </div>

      </div>
    </>
  );
}