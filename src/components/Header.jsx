import React from 'react'

function Header() {
  return (
    <>
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Food Ordering</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className=" hover:text-gray-400">Home</a></li>
                    <li><a href="#" className=" hover:text-gray-400">About</a></li>
                    <li><a href="#" className=" hover:text-gray-400">Contact</a></li>
                    <li><a href="#" className=" hover:text-gray-400">Cart</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header