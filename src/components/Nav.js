import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
	return (
		<div className="flex fixed w-full h-auto p-3 bg-white justify-between items-center">
			<div className="flex items-center ">
				<FontAwesomeIcon color="rgb(255,69,0" size="2x" icon={faReddit} />
				<h2 className="text-xl text-black pl-3">reddit</h2>
			</div>
			<div className="bg-gray-100 flex items-center w-2/5 h-10 hover:border-black cursor-pointer p-3 text-gray-500 text-sm">
				<FontAwesomeIcon icon={faSearch} /> Search{' '}
			</div>
			<div className="flex items-center w-1/4 justify-evenly text-gray-500">
				<button className="uppercase text-xs text-blue-600 px-5 py-2 rounded-md border-blue-600 border-2">
					Log in
				</button>
				<button className="uppercase text-xs bg-blue-600 px-5 py-2 text-white rounded-md">sign up</button>
				<FontAwesomeIcon icon={faUser} />
				<FontAwesomeIcon icon={faCaretDown} />
			</div>
		</div>
	);
};

export default Nav;
