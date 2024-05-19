import React from 'react';
import { Box} from '@mui/material';
import colors from '../../../../assets/theme/base/colors';
import MainButton from '../components/main_button';
import welcome from '../../../../assets/lottie/welcome.json';
import Lottie from 'lottie-react';

const WelcomeCard = ({handleStart}) => {
        return (
                <Box sx={{
                        pt: 10,
                        width: "85%",
                        position: 'fixed',
                        bottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',

                }}>
                        <Lottie animationData={welcome} autoplay loop
                                style={{

                                        width: 500,
                                        height: 500
                                }} />

                        <MainButton
                                title="Start"
                                colorTitle={colors.white.main}
                                backgroundColor={colors.gradients.info.state}
                                hoverBackgroundColor={colors.gradients.info.main}
                                onClick={handleStart}
                                height="10%"
                                width="100%"
                        />
                </Box>
        )
}

export default WelcomeCard
