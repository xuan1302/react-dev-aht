import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from '../../../../api/categoryApi';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();
                setCategoryList(list.map(x => ({
                    id: x.id,
                    name: x.name,
                })))
            } catch (error) {
                console.log('Fail')
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {

        if (onChange) {
            onChange(category.id);
        }
    }
    return (
        <Box>
            <Typography>Danh muc</Typography>
            <ul>
                {categoryList.map(category => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>{category.name}</li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;