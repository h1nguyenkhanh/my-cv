import React from 'react'

function Contact() {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                {/* Contact Section Heading*/}
                <div className="text-center">
                    <h2 className="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
                </div>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                {/* Contact Section Content*/}
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="icon-contact mb-3"><i className="fas fa-mobile-alt" /></div>
                            <div className="text-muted">Phone</div>
                            <div className="lead font-weight-bold">0978434621</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="icon-contact mb-3"><i className="far fa-envelope" /></div>
                            <div className="text-muted">Email</div><a className="lead font-weight-bold" href="mailto:h1.nguyenkhanh@gmail.com">h1.nguyenkhanh@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact
