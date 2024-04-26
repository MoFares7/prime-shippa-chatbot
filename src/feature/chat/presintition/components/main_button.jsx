import React from 'react';
import { Button, CircularProgress } from '@mui/material'
import colors from '../../../../assets/theme/base/colors'
import typography from '../../../../assets/theme/base/typography';

const MainButton = ({ borderRadius, key, isLoading, title, colorTitle, backgroundColor, hoverBackgroundColor, onClick, height, width }) => {
        return (
                <Button
                        key={key}
                        sx={{
                                borderRadius: { borderRadius },
                                my: 1,
                                height: { height },
                                width: { width },
                                backgroundColor: { backgroundColor },
                                hoverBackgroundColor: { backgroundColor },
                                color: colorTitle,
                                fontFamily: 'Mulish',
                                "&:hover": {
                                        backgroundColor: hoverBackgroundColor,
                                        color: colorTitle
                                },

                        }}

                        onClick={onClick}
                >
                        {isLoading ? <CircularProgress size={24} sx={{ color: colors.white.main }} />

                                :
                                title}
                </Button>
        )
}

export default MainButton
