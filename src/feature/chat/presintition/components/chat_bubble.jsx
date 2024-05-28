import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import colors from '../../../../assets/theme/base/colors';
import logo from '../../../../assets/images/logo-ct.png';
import styledComponents, { keyframes } from 'styled-components';
import { bounceInDown } from 'react-animations';

const ChatBubbleContainer = styled(Box)(({ theme, isSender }) => ({
        display: 'flex',
        justifyContent: isSender ? 'flex-end' : 'flex-start',
        marginBottom: theme.spacing(2),
}));

const ChatBubbleMessage = styled(Box)(({ theme, isSender }) => ({
        maxWidth: '60%',
        padding: theme.spacing(2),
        borderRadius: isSender
                ? `11px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`
                : `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 ${theme.shape.borderRadius}px`,
        backgroundColor: isSender ? colors.gradients.warning.main : colors.gradients.success.main,
        color: colors.white.main,
        padding: '10px',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }
}));

const bounceInDownAnimation = keyframes`${bounceInDown}`;

const BounceInDown = styledComponents.div`
    animation: 2s ${bounceInDownAnimation};
`;

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
                />
                <BounceInDown>
                        <ChatBubbleMessage isSender={isSender}>
                                <Typography variant="body2" sx={{ textAlign: 'center' }}>{message}</Typography>
                        </ChatBubbleMessage>
                </BounceInDown>
        </ChatBubbleContainer>
);

export default ChatBubble;
