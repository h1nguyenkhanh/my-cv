import React from 'react'

function Home() {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* Masthead Avatar Image*/}<img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
                {/* Masthead Heading*/}
                <h1 className="masthead-heading mb-0">I'm Khanh</h1>
                {/* Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Masthead Subheading*/}
                <p className="pre-wrap masthead-subheading font-weight-light mb-0">Intern Front-end developer </p>
            </div>
        </header>

    )
}

export default Home
