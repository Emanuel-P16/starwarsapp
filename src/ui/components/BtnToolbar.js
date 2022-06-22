import { useState } from "react"

export const BtnToolbar = ({ buttons, getAllPeople, whatPage,startIndex,endIndex }) => {  
    return (
        <ul className="pagination justify-content-end mt-5 mb-2" style={{ marginRight: '0.25rem' }}>
            {(whatPage === 1) ? null : <li className="page-item">
                <button
                    className="page-link"
                    onClick={() => { (whatPage !== 1) && getAllPeople(whatPage - 1) }}
                >{"<"}</button>
            </li>}
            {/* <li className="page-item">
                <button
                    className="page-link"
                    onClick={() => { (whatPage !== 1) && getAllPeople(whatPage - 1) }}
                >{"<"}</button>
            </li> */}
             {/* {Array.from(Array(buttons)).slice(startIndex,endIndex).map((x, index) => { */}
            {buttons.slice(startIndex,endIndex).map((x, index) => {
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
                    // {(whatPage > index + 3) ?  console.log('hola') :  console.log('nou') }
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
            {(whatPage === buttons ? null : <li className="page-item">
                <button
                    className="page-link"
                    onClick={() => { (whatPage < buttons) && getAllPeople(whatPage + 1) }}
                >{">"}</button>
            </li>)}

        </ul>
    )
}