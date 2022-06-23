
export const Footer = () => {
    return (
        <footer className="text-center text-white">
            <div className="container pt-4">
                <section className="mb-4">
                    <h5>
                        {"Developed By  "} 
                        <a
                            href="https://portafolioemanuelpalazon.herokuapp.com/"
                            className="link-warning text-decoration-none"
                        >
                            {"Emanuel Palazon"}
                        </a>
                    </h5>
                    <a
                        className="btn btn-link btn-floating btn-lg text-warning m-1"
                        href="https://github.com/Emanuel-P16"
                        role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                    <a
                        class="btn btn-link btn-floating btn-lg text-warning m-1"
                        href="https://www.linkedin.com/in/emanuel-palazon/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-linkedin"></i
                    ></a>
                </section>
            </div>
            <div className="text-center p-3">
                <p>
                    Star Wars and all associated names and/or images are copyright Lucasfilm Ltd.
                </p>
            </div>
        </footer>
    )
}