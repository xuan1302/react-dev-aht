import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import productApi from '../../../api/productApi';
import ProductSkeleton from '../components/ProductSkeleton';
import ProductList from '../components/ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';
import FilterViewer from '../components/Filters/FilterViewer';
import { useHistory } from 'react-router';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

ListPage.propTypes = {

};

const useStyles = makeStyles({
    root: {},
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 0'
    },
});




function ListPage(props) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const queryParam = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 10,
            _sort: params._sort || 'salePrice:ASC',
            isFreeShip: params.isFreeShip === 'true',
            isPromotion: params.isPromotion === 'true',
        }
    }, [location.search]);

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(queryParam);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Fail ', error)
            }
            setLoading(false);
        })();
    }, [queryParam]);

    const handlePageChange = (e, page) => {

        const filters = {
            ...queryParam,
            _page: page,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }

    const handleSortChange = (newSortValue) => {

        const filters = {
            ...queryParam,
            _sort: newSortValue,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }
    const handleFiltersChange = (newFilters) => {

        const filters = {
            ...queryParam,
            ...newFilters
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }

    const setNewFilters = (newFilters) => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilters),
        })
    }


    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilters filters={queryParam} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>

                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParam._sort} onChange={handleSortChange} />
                            <FilterViewer filters={queryParam} onChange={setNewFilters} />
                            {
                                loading ? <ProductSkeleton /> : <ProductList data={productList} />
                            }
                            {/* paginamtion */}
                            <Pagination
                                color='primary' count={Math.ceil(pagination.total / pagination.limit)} page={pagination.page}
                                onChange={handlePageChange}
                            ></Pagination>
                        </Paper>


                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;