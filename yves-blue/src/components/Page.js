import React from 'react';
import './Page.scss';

const Page = ({totalPages, changePage, currentPage}) => {
    return (
        <nav className="page-nav">
            <button onClick={() => changePage(currentPage - 1)} 
                style={currentPage > 1 ? {} : {visibility: 'hidden'}}>
                    PREV
            </button>
            <span className="page-word">PAGE</span> 
            <span className="page-number">{currentPage}</span>
            <button onClick={() => changePage(currentPage + 1)}
                style={currentPage < totalPages ? {} : {visibility: 'hidden'}}>
                    NEXT
            </button>
        </nav>
    )
}
export default Page;