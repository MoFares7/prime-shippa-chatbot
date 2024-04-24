import Lottie from 'lottie-react'
import React from 'react'
import loader from '../assets/lottie/loader.json';
import { Box } from '@mui/material';

const LoaderCard = () => {

        return (
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center', alignItems: 'center', justifyContent: 'cetner'
                }}>
                        <Lottie animationData={loader} autoplay loop style={{ alignItems: 'center', width: 200, height: 200 }} />
                </Box>
        )
}

export default LoaderCard