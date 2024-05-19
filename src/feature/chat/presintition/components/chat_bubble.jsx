import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import colors from '../../../../assets/theme/base/colors';
import logo from '../../../../assets/images/logo-ct.png';

const ChatBubbleContainer = styled(Box)(({ theme, isSender }) => ({
        display: 'flex',
        justifyContent: isSender ? 'flex-end' : 'flex-start',
        marginBottom: theme.spacing(-45),
}));

const ChatBubbleMessage = styled(Box)(({ theme, isSender }) => ({
        maxWidth: '60%',
        padding: theme.spacing(2),
        borderRadius: isSender
                ? `11px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`
                : `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 ${theme.shape.borderRadius}px`,
        backgroundColor: isSender ? colors.gradients.warning.main : colors.gradients.success.main,
        color: colors.white.main,
        backgroundColor: colors.gradients.warning.state,
        padding: '10px',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
}));

const ChatBubble = ({ message, isSender }) => (
        <ChatBubbleContainer isSender={isSender}>
                <Avatar
                        src={logo}
                        sx={{
                                p: 0.7,
                                backgroundColor: colors.grey[200],
                                marginRight: 2,
                                width: 50,
                                height: 50
                        }}
                />  <ChatBubbleMessage isSender={isSender}>

                        <Typography variant="body2" sx={{ textAlign: 'center' }}>{message}</Typography>
                </ChatBubbleMessage>
        </ChatBubbleContainer>
);

export default ChatBubble;
