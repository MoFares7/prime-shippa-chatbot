import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import colors from '../../../../assets/theme/base/colors'
import typography from '../../../../assets/theme/base/typography'
import logo from '../../../../assets/images/logo-ct.png';
import Lottie from 'lottie-react';
import animationData from '../../../../assets/lottie/bot.json';

const Header = ({ onClick }) => {
        return (
                <Box sx={{
                        borderRadius: '10px 10px 10px 10px',
                        color: colors.white.main,
                        maxWidth: '100%',
                        padding: '10px',
                        marginBottom: '10px',
                        position: 'fixed',
                        top: 0,
                        mb: 30,
                        width: "100%",
                        alignItems: 'center',
                        backgroundColor: colors.gradients.info.state,
                        display: 'flex',
                        justifyContent: 'space-between'
                }}>
                        <Box sx={{
                                alignItems: 'center',
                                display: 'flex',
                        }}>
                                <Avatar
                                        src={logo}
                                        sx={{
                                                ml: 2,
                                                p: 0.7,
                                                backgroundColor: colors.white.main,
                                                marginRight: 2,
                                                width: 40,
                                                height: 40
                                        }}
                                />
                                <Typography typography={typography.d6} sx={{fontSize: '25px', color: colors.white.main }}>Prime Shippa Company</Typography>

                        </Box>
                        <Button onClick={onClick}>
                                <Lottie animationData={animationData} autoplay loop style={{ alignItems: 'center', width: 75, height: 75 }} />
                        </Button>
                </Box>
        )
}

export default Header
