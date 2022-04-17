// import * as React from 'react';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from '../../features/Auth/components/Register';
import Login from '../../features/Auth/components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { AccountCircle, ShoppingBag, ShoppingCart } from '@mui/icons-material';
import { Badge, Menu, MenuItem } from '@mui/material';
import { logout } from '../../features/Auth/userSlice';
import { cartItemCountSelector } from '../../features/Cart/selector';
import { useHistory } from 'react-router-dom';

export default function Header() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const open_sub = Boolean(anchorEl);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleLogOutClick = () => {
        const action = logout();
        dispatch(action);
    }
    const MODE = {
        LOGIN: 'login',
        REGISTER: 'register',
    }
    const cartItemCount = useSelector(cartItemCountSelector);

    const [mode, setMode] = useState(MODE.LOGIN);
    const loginedInUser = useSelector(state => state.user.current);
    const isLogin = !!loginedInUser.id;
    const handleCartClick = () => {
        history.push('/cart');
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    Logo
                    <Button color="inherit">Menu 1</Button>
                    <Button color="inherit">Menu 2</Button>
                    {
                        !isLogin && (
                            <Button color="inherit" onClick={handleClickOpen}>Login</Button>
                        )
                    }

                    <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleCartClick}>
                        <Badge badgeContent={cartItemCount} color="error">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    {
                        isLogin && (
                            <>
                                <IconButton onClick={handleUserClick}>
                                    <AccountCircle></AccountCircle>
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open_sub}
                                    onClose={handleCloseMenu}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                                    <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                                    <MenuItem onClick={handleLogOutClick}>Logout</MenuItem>
                                </Menu>
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />
                            <Box textAlign="center">
                                <button onClick={() => { setMode(MODE.REGISTER) }}>Register here</button>
                            </Box>
                        </>
                    )}

                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Box textAlign="center">
                                <button onClick={() => { setMode(MODE.LOGIN) }}> Login here</button>
                            </Box>
                        </>
                    )}


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>

            </Dialog>
        </Box>
    );
}
