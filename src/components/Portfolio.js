import React from 'react'

function Portfolio() {
    return (
        <div>
            <section className="page-section portfolio mt-5" id="portfolio">
                <div className="container">
                    {/* Portfolio Section Heading*/}
                    <div className="text-center">
                        <h2 className="page-section-heading text-secondary mb-0 d-inline-block">PORTFOLIO</h2>
                    </div>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Grid Items*/}
                    <div className="row justify-content-center">
                        {/* Portfolio Items*/}
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal0">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="Log Cabin" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/cake.png" alt="Tasty Cake" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/circus.png" alt="Circus Tent" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/game.png" alt="Controller" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/safe.png" alt="Locked Safe" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/submarine.png" alt="Submarine" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Portfolio Modal*/}
            <div className="portfolio-modal modal fade" id="portfolioModal0" tabIndex={-1} role="dialog" aria-labelledby="#portfolioModal0Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times" /></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title*/}
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Log Cabin</h2>
                                        {/* Icon Divider*/}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="Log Cabin" />
                                        {/* Portfolio Modal - Text*/}
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw" />Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-labelledby="#portfolioModal1Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times" /></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title*/}
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Tasty Cake</h2>
                                        {/* Icon Divider*/}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="Tasty Cake" />
                                        {/* Portfolio Modal - Text*/}
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw" />Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-labelledby="#portfolioModal2Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times" /></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title*/}
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Circus Tent</h2>
                                        {/* Icon Divider*/}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="Circus Tent" />
                                        {/* Portfolio Modal - Text*/}
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw" />Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-labelledby="#portfolioModal3Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times" /></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title*/}
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Controller</h2>
                                        {/* Icon Divider*/}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="Controller" />
                                        {/* Portfolio Modal - Text*/}
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw" />Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-labelledby="#portfolioModal4Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times" /></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title*/}
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Locked Safe</h2>
                                        {/* Icon Divider*/}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="Locked Safe" />
                                        {/* Portfolio Modal - Text*/}
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw" />Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-labelledby="#portfolioModal5Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times" /></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title*/}
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Submarine</h2>
                                        {/* Icon Divider*/}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image*/}<img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="Submarine" />
                                        {/* Portfolio Modal - Text*/}
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw" />Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
