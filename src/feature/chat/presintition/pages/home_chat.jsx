import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import colors from '../../../../assets/theme/base/colors';
import typography from '../../../../assets/theme/base/typography';
import logo from '../../../../assets/images/logo-ct.png';
import MainButton from '../components/main_button';
import Header from '../components/header';
import LoaderCard from '../../../../components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer } from '../../services/get_answer_service';
import { getQuestions } from '../../services/get_question_service';
import MDTextFeild from '../../../../items/MDTextFeild/textfeild';
import WelcomeCard from '../components/welcome_card';
import MDTypography from './../../../../items/MDTypography/index';
import Lottie from 'lottie-react';
import world from '../../../../assets/lottie/world.json';
import { getMyShipment } from '../../services/get_my_shipment_service';
import ChatBubble from '../components/chat_bubble';
import styled, { keyframes } from 'styled-components';
import { bounceInDown } from 'react-animations';
import ShipmentCard from '../components/shipmant_card';


function ChatBot() {
        const [showQuestions, setShowQuestions] = useState(false);
        const [selectedQuestion, setSelectedQuestion] = useState(null);
        const [loading, setLoading] = useState(false);
        const [answer, setAnswer] = useState('');
        const [maps, setMaps] = useState(false);
        const [questions, setQuestions] = useState([]);
        const [isQuery, setIsQuery] = useState(false);
        const [identifier, setIdentifier] = useState('');

        const dispatch = useDispatch();
        const { loadingQuestion } = useSelector(state => state.getAnswer);

        const fetchQuestions = async () => {
                try {
                        const response = await dispatch(getQuestions());
                        setQuestions(response.payload);
                } catch (error) {
                        console.error('Failed to fetch questions:', error.message);
                }
        };

        useEffect(() => {
                fetchQuestions();
        }, []);

        const handleStart = () => {
                setShowQuestions(true);
        };

        const handleQuestionSelect = async (question) => {
                setSelectedQuestion(question);
                setLoading(true);

                try {
                        if (question.id === 4) {
                                setAnswer('');
                                setIsQuery(true);
                        } else {
                                setMaps(false);
                                const response = await dispatch(getAnswer({ questionId: question.id }));
                                setAnswer(response.payload);
                                console.log("API response:", response.payload);
                        }
                } catch (error) {
                        console.error('Failed to fetch answer:', error.message);
                } finally {
                        setLoading(false);
                }
        };

        const handleSearch = () => {
                dispatch(getMyShipment({ identifier }));
        };

        const cleanKeys = (obj) => {
                if (Array.isArray(obj)) {
                        return obj.map(cleanKeys);
                } else if (obj !== null && typeof obj === 'object') {
                        return Object.keys(obj).reduce((acc, key) => {
                                const cleanKey = key.trim();
                                acc[cleanKey] = cleanKeys(obj[key]);
                                return acc;
                        }, {});
                }
                return obj;
        };
        const { data, loadingData, error } = useSelector((state) => state.getMyShipment);

        const shipment = data && Array.isArray(data) && data.length > 0 ? data[0] : null;
        const shipmentIdentifier = shipment ? cleanKeys(shipment) : null;

        const bounceInDownAnimation = keyframes`${bounceInDown}`;

        const AnimatedCard = styled(Box)`
        animation: 1s ${bounceInDownAnimation};
    `;

        return (
                <Box sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                }}>
                        <Header onClick={() => setShowQuestions(false)} />

                        {loadingQuestion && <LoaderCard />}

                        {showQuestions && !selectedQuestion && !loadingQuestion && (
                                <Box sx={{
                                        pt: 10,
                                        width: "85%",
                                        position: 'fixed',
                                        bottom: 10,
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                }}>
                                        {questions.map(question => (
                                                <AnimatedCard key={question.id}>
                                                        <MainButton
                                                                key={question.id}
                                                                title={question.question}
                                                                colorTitle={colors.white.main}
                                                                backgroundColor={colors.gradients.info.state}
                                                                hoverBackgroundColor={colors.gradients.info.main}
                                                                onClick={() => handleQuestionSelect(question)}
                                                                height="10%"
                                                                width="100%"
                                                        />
                                                </AnimatedCard>
                                        ))}
                                </Box>
                        )}

                        {!showQuestions && !loadingQuestion && (
                                <Box sx={{
                                        pt: 10,
                                        width: "85%",
                                        position: 'fixed',
                                        bottom: 10
                                }}>
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
                        )}

                        {selectedQuestion && (
                                <Box sx={{
                                        pt: 10,
                                        width: "95%",
                                        bottom: 0,
                                }}>
                                        {loading ? (
                                                <LoaderCard />
                                        ) : (
                                                isQuery ?
                                                        <Box>
                                                                <Box sx={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        flexDirection: 'column',
                                                                }}>
                                                                        <Box sx={{

                                                                        }}>

                                                                                {loadingData ? (
                                                                                        <LoaderCard />
                                                                                ) :
                                                                                        !shipmentIdentifier ? (
                                                                                                <Box sx={{ textAlign: 'center' }}>
                                                                                                        <Lottie animationData={world} autoPlay style={{
                                                                                                                width: 320,
                                                                                                                height: 320,
                                                                                                                textAlign: 'center', justifyContent: 'center', alignContent: 'center'
                                                                                                        }} />
                                                                                                        <Typography>Not Found Shipment</Typography>
                                                                                                </Box>

                                                                                        ) : (
                                                                                                <ShipmentCard
                                                                                                        isSearch={true}
                                                                                                        key={shipmentIdentifier.id}
                                                                                                        shipmentCapacity={shipmentIdentifier.capacity}
                                                                                                        shipmentName={shipmentIdentifier.name}
                                                                                                        shipmentStatus={shipmentIdentifier.status}
                                                                                                        shipmentIdentifier={shipmentIdentifier.identifier}
                                                                                                        shipmentCategoryType={shipmentIdentifier.category_id?.name}
                                                                                                        shipmentReceiverBranchName={shipmentIdentifier.receiver_branch_id?.name}
                                                                                                        colorShipmentState={colors.success.main}
                                                                                                />
                                                                                        )}

                                                                        </Box>

                                                                </Box>
                                                                <Box sx={{
                                                                        width: '100%',
                                                                        position: 'fixed',
                                                                        bottom: 65,
                                                                }}>
                                                                        <MDTypography typography={typography.body1} pb={1}>
                                                                                Please Enter Shipment Number
                                                                        </MDTypography>
                                                                        <MDTextFeild
                                                                                value={identifier}
                                                                                onClick={handleSearch}
                                                                                onChange={(e) => setIdentifier(e.target.value)}
                                                                        />
                                                                </Box>
                                                                <Box sx={{
                                                                        width: "10%",
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-end',
                                                                        position: 'fixed',
                                                                        bottom: 10,
                                                                        left: 30,
                                                                }}>
                                                                        <MainButton
                                                                                borderRadius={10}
                                                                                title={"Back"}
                                                                                colorTitle={colors.white.main}
                                                                                backgroundColor={colors.gradients.info.state}
                                                                                hoverBackgroundColor={colors.gradients.info.main}
                                                                                onClick={() => {
                                                                                        setSelectedQuestion(null)
                                                                                        setIsQuery(false)
                                                                                }}
                                                                                height="50%"
                                                                                width="100%"
                                                                        />
                                                                </Box>


                                                        </Box>
                                                        :
                                                        <>
                                                                {answer && (
                                                                        Array.isArray(answer) ? (
                                                                                answer.map((item, index) => (
                                                                                        <Box
                                                                                                key={index}
                                                                                                sx={{
                                                                                                        width: '100%',
                                                                                                        padding: '10px',
                                                                                                        display: 'flex',
                                                                                                        alignItems: 'center',
                                                                                                }}
                                                                                        >
                                                                                                <ChatBubble key={index} message={item.text} isSender={true} />
                                                                                        </Box>
                                                                                ))
                                                                        ) : (
                                                                                <Box
                                                                                        sx={{
                                                                                                width: '100%',
                                                                                                padding: '10px',
                                                                                                display: 'flex',
                                                                                                alignItems: 'center'
                                                                                        }}
                                                                                >
                                                                                        <Avatar
                                                                                                src={logo}
                                                                                                sx={{
                                                                                                        p: 0.7,
                                                                                                        backgroundColor: colors.grey[200],
                                                                                                        marginRight: 2,
                                                                                                        width: 35,
                                                                                                        height: 35
                                                                                                }}
                                                                                        />
                                                                                        <Box
                                                                                                sx={{
                                                                                                        borderRadius: '25px 10px 10px 0px',
                                                                                                        backgroundColor: colors.gradients.warning.state,
                                                                                                        color: colors.white.main,
                                                                                                        maxWidth: '60%',
                                                                                                        padding: '10px',
                                                                                                        marginBottom: '10px',
                                                                                                        display: 'flex',
                                                                                                        flexDirection: 'column',
                                                                                                        alignItems: 'flex-start'
                                                                                                }}
                                                                                        >
                                                                                                <Typography typography={typography.body2}>{maps ? answer : answer.text}</Typography>
                                                                                        </Box>
                                                                                </Box>
                                                                        )
                                                                )}
                                                                <Box sx={{
                                                                        width: "10%",
                                                                        display: 'flex',
                                                                        justifyContent: 'flex-end',
                                                                        position: 'fixed',
                                                                        bottom: 10,
                                                                        right: 30,
                                                                }}>
                                                                        <MainButton
                                                                                borderRadius={10}
                                                                                title={"Back"}
                                                                                colorTitle={colors.white.main}
                                                                                backgroundColor={colors.gradients.info.state}
                                                                                hoverBackgroundColor={colors.gradients.info.main}
                                                                                onClick={() => setSelectedQuestion(null)}
                                                                                height="50%"
                                                                                width="100%"
                                                                        />
                                                                </Box>
                                                        </>
                                        )}
                                </Box>
                        )}

                        {!showQuestions && !selectedQuestion && (
                                <WelcomeCard handleStart={handleStart} />
                        )}



                </Box>
        );
}

export default ChatBot;

