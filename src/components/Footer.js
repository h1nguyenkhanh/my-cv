import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        {/* Footer Location*/}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="mb-4">LOCATION</h4>
                            <p className="pre-wrap lead mb-0">Long Bien district, Ha Noi city</p>
                        </div>
                        {/* Footer Social Icons*/}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="mb-4">AROUND THE WEB</h4><a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/StartBootstrap"><i className="fab fa-fw fa-facebook-f" /></a>
                        </div>
                        {/* Footer About Text*/}
                        <div className="col-lg-4">
                            <h4 className="mb-4">ABOUT FREELANCER</h4>
                            <p className="pre-wrap lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap</p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Copyright Section*/}
            <section className="copyright py-4 text-center text-white">
                <div className="container"><small className="pre-wrap">Have a nice day! </small></div>
            </section>
        </div>

    )
}

export default Footer
