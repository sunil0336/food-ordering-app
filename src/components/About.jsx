import React from 'react'

function About() {
    return (
        <div className="max-w-screen-md mx-auto text-center p-5 bg-white rounded-lg shadow-lg my-10 md:my-16" id="about">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
                Welcome to our restaurant discovery platform! We help food lovers find the best
                restaurants near them with ease. Our mission is to make dining out a delightful experience.
            </p>
            <img
                src="https://github.com/user-attachments/assets/90e817bc-65ab-48ed-9aab-afdada58cb38"
                alt="About Us"
                className="w-full max-w-lg h-auto rounded-lg mx-auto mb-6"
            />
            <p className="text-base text-gray-600 leading-relaxed">
                Whether you're looking for a cozy café, fine dining, or quick bites, we’ve got you covered.
                Explore now and enjoy the best flavors in town!
            </p>
        </div>

    )
}

export default About