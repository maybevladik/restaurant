import React, {useContext} from 'react';
import {Pagination} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Pages = observer( () => {
    const {dish} = useContext(Context)
    const pageCount = Math.ceil(dish.totalCount / dish.limit)
    const pages = []

    for(let i = 0; i < pageCount; i++){
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item
                key = {page}
                active = {dish.page === page}
                onClick = {() => dish.setPage(page)}
                >{page}</Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;