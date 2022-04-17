import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => 'Giao hang free',
        isActive: (filters) => filters.isFreeShip,
        isVisible: (filters) => true,
        isRemoveable: false,
        onRemove: () => { },
        onToggle: (filters) => {
            const newFilters = { ...filters };
            if (newFilters.isFreeShip) {
                newFilters.isFreeShip = false;
            } else {
                newFilters.isFreeShip = true;
            }
            return newFilters;
        },
    },
    {
        id: 2,
        getLabel: () => 'Co khuyen mai',
        isActive: () => false,
        isVisible: (filters) => filters.isPromotion,
        isRemoveable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.isPromotion;
            return newFilters;
        },
        onToggle: () => { },
    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => false,
        isVisible: (filters) => Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
        isRemoveable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.salePrice_lte;
            delete newFilters.salePrice_gte;
            return newFilters;
        },
        onToggle: () => { },
    },
    // {
    //     id: 4,
    //     getLabel: () => 'Danh muc',
    //     isActive: () => true,
    //     isVisible: (filters) => true,
    //     isRemoveable: true,
    //     onRemove: (filters) => { },
    //     onToggle: (filters) => { },
    // },
];

FilterViewer.propTypes = {

};

function FilterViewer({ filters = {}, onChange = null }) {

    return (
        <Box component='ul'>
            {
                FILTER_LIST.filter(x => x.isVisible(filters)).map(x => (
                    <li key={x.id}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label={x.getLabel(filters)}
                                color={x.isActive(filters) ? 'success' : 'default'}
                                clickable={!x.isRemoveable}
                                onClick={
                                    x.isRemoveable ? null : () => {
                                        if (onChange) {
                                            const newFilters = x.onToggle(filters);
                                            onChange(newFilters);
                                        }
                                    }
                                }
                                onDelete={x.isRemoveable ? () => {
                                    if (onChange) {
                                        const newFilters = x.onRemove(filters);
                                        onChange(newFilters);
                                    }
                                } : null}
                                deleteIcon={<DeleteIcon />}
                            />
                        </Stack>
                    </li>
                ))
            }
        </Box >
    );
}

export default FilterViewer;