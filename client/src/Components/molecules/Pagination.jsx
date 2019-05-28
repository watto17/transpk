import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

const PaginationComp = (props) => {
    const {page,totalPages,hasPrevPage,hasNextPage,nextPage,prevPage}=props;
    function handleClick(e) {
        props.handleClick({page:e.target.id})
    }
    function handleFirstClick(e) {
        props.handleClick({page:1})
    }
    function handleLastClick(e) {
        props.handleClick({page:totalPages})
    }
    function handleNextClick(e) {
        props.handleClick({page:nextPage})
    }
    function handlePrevClick(e) {
        props.handleClick({page:prevPage})
    }
    function showPagination() {
        let pagination = [];
        for (let i = 0; i < totalPages; i++) {
            pagination.push(
                <PaginationItem active={page-1===i?true:false}>
                    <PaginationLink onClick={handleClick} id={i+1} href="#">
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        return pagination;
    }

    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink onClick={handleFirstClick} first />
            </PaginationItem>
            <PaginationItem disabled={!hasPrevPage}>
                <PaginationLink previous onClick={handlePrevClick}/>
            </PaginationItem>
            {showPagination()}
            <PaginationItem disabled={!hasNextPage}>
                <PaginationLink next onClick={handleNextClick}/>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={handleLastClick} last />
            </PaginationItem>
        </Pagination>
    )
};
export default PaginationComp;