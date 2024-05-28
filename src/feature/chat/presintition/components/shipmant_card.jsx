import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { CardTravelOutlined, TypeSpecimenOutlined, NumbersOutlined, LocationOnOutlined, ReduceCapacityOutlined } from '@mui/icons-material';
import colors from '../../../../assets/theme/base/colors';
import borders from './../../../../assets/theme/base/borders';

const ShipmentCard = ({
        isSearch,
        shipmentId,
        shipmentCapacity,
        shipmenthName,
        shipmentStatus,
        shipmentIdentifier,
        shipmentCategoryType,
        shipmentReceiverBranchName,
        colorShipmentState,
        titleButtonAction,
        backgroundColorButtonAction,
        hoverBackgroundColorButtonAction,
        onClickButtonAction
}) => {
        return (
                <Box
                        sx={{
                                transition: 'transform 0.4s ease',
                                '&:hover': {
                                        transform: 'scale(0.98)',
                                },
                                borderRadius: 2,
                                border: `1px solid ${colors.grey[300]}`,
                                width: '100%',
                        }}
                >
                        <Box display="block" alignItems="center" color="black" borderRadius={borders.borderRadius.lg} bgColor={colors.white.main}>
                                <Box p={1} display="flex" pb={0.1} justifyContent='space-between'>
                                        <Box display="flex">
                                                <CardTravelOutlined sx={{ color: colors.gradients.dark.main }} />
                                                <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>Shipment Name</Typography>
                                        </Box>
                                        <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>{shipmenthName}</Typography>
                                </Box>
                                <Box px={1} display="flex" pb={0.1} justifyContent='space-between'>
                                        <Typography fontWeight="light" fontSize={'15px'} px={1} sx={{ color: colorShipmentState }}>{shipmentStatus}</Typography>
                                </Box>
                                <Divider sx={{ backgroundColor: colors.grey[500] }} />

                                <Box px={1} display="flex" justifyContent='space-between'>
                                        <Box display="flex">
                                                <ReduceCapacityOutlined sx={{ color: colors.gradients.dark.main }} />
                                                <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>Shipment Capacity</Typography>
                                        </Box>
                                        <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>{shipmentCapacity}</Typography>
                                </Box>
                                <Box p={1} display="flex" pb={0.1} justifyContent='space-between'>
                                        <Box display="flex">
                                                <TypeSpecimenOutlined sx={{ color: colors.gradients.dark.main }} />
                                                <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>Shipment Category Type</Typography>
                                        </Box>
                                        <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>{shipmentCategoryType}</Typography>
                                </Box>
                                <Box p={1} display="flex" pb={0.1} justifyContent='space-between'>
                                        <Box display="flex">
                                                <NumbersOutlined sx={{ color: colors.gradients.dark.main }} />
                                                <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>Shipment Identifier</Typography>
                                        </Box>
                                        <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>{shipmentIdentifier}</Typography>
                                </Box>
                                <Box px={1} display="flex" pb={0} justifyContent='space-between'>
                                        <Box display="flex">
                                                <LocationOnOutlined sx={{ color: colors.gradients.dark.main }} />
                                                <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>Shipment Receiver Branch Name</Typography>
                                        </Box>
                                        <Typography fontWeight="light" color="black" fontSize={'15px'} px={1}>{shipmentReceiverBranchName}</Typography>
                                </Box>

                              
                        </Box>
                </Box>
        );
}
export default ShipmentCard;
