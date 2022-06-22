export const BtnToolbar = ({ buttons, getAllPeople, whatPage,startIndex,endIndex }) => {  
    return (
        <ul className="pagination justify-content-end mt-2 mb-2" style={{ marginRight: '0.25rem' }}>
            {(whatPage === 1) ? null : <li className="page-item">
                <button
                    className="page-link"
                    onClick={() => { (whatPage !== 1) && getAllPeople(whatPage - 1) }}
                >{"<"}</button>
            </li>}
            {buttons.slice(startIndex,endIndex).map((x, index) => {
                if(x === null){return null}
                if (x + 1 === whatPage) {
                    return (
                        <li className={`'page-item'`} key={index + 1}>
                            <button
                                className="page-link active"
                                onClick={() => getAllPeople(x + 1)}
                            >{x+1}</button>
                        </li>
                    )
                } else {
                    return (
                        <li className={`'page-item'`} key={index + 1}>
                            <button
                                className="page-link"
                                onClick={() => getAllPeople(x + 1)}
                            >{x+1}</button>
                        </li>
                    )
                }
            })}
            {(whatPage === buttons.length ? null : <li className="page-item">
                <button
                    className="page-link"
                    onClick={() => { (whatPage < buttons.length) && getAllPeople(whatPage + 1) }}
                >{">"}</button>
            </li>)}

        </ul>
    )
}