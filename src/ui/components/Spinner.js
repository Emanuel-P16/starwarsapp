

export const Spinner = () => {
    return(
        <div className='container-fluid' style={{ height: '100vh' }}>
                <div className="h-100 d-flex align-items-center justify-content-center" >
                    <div className='spinner-border text-light' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            </div>
    )
}