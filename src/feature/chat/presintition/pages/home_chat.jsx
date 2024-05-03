import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, TextField } from '@mui/material';
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
import welcome from '../../../../assets/lottie/welcome.json';

function ChatBot() {
        const [showQuestions, setShowQuestions] = useState(false);
        const [selectedQuestion, setSelectedQuestion] = useState(null);
        const [loading, setLoading] = useState(false);
        const [answer, setAnswer] = useState('');
        const [maps, setMaps] = useState(false);
        const [questions, setQuestions] = useState([]);
        const [isQuery, setIsQuery] = useState(false);

        const dispatch = useDispatch();

        const { data, loadingQuestion } = useSelector(state => state.getAnswer);

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
                        if (question.id === 2) {
                                console.log("question.id: " + question.id);
                                setMaps(true);
                                setAnswer(
                                        <div>
                                                The company has three branches in three different cities in the UAE: <br />
                                                Name: Abu Dhabi Branch <br />
                                                Location:<br />
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7225.196091619209!2d54.37028892547642!3d24.47645607204847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e66fd0e213d97%3A0xbde6320ab658c40e!2sAbu%20Dhabi%20Branch!5e0!3m2!1sen!2sae!4v1648877846752!5m2!1sen!2sae" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe><br />
                                                Name: Sharjah Branch <br />
                                                Location:<br />
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.8254439619113!2d55.40526171610472!3d25.274244311972497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e37a1a23f13%3A0x4a1e1416f06b89f4!2sSharjah%20Branch!5e0!3m2!1sen!2sae!4v1648877897892!5m2!1sen!2sae" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe><br />
                                                Name: Al Ain Branch <br />
                                                Location:<br />
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11505.252916736474!2d55.72079707095389!3d24.215249930759437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef56fd30b2c9c11%3A0x4ad13fb56b8a5646!2sAl%20Ain%20Branch!5e0!3m2!1sen!2sae!4v1648877930677!5m2!1sen!2sae" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe><br />
                                        </div>
                                );

                        }
                        if (question.id === 4) {
                                setAnswer('');
                                setIsQuery(true);
                        }

                        else {
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


        return (
                <Box sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                }}>
                        <Header />

                        {loadingQuestion && (
                                <LoaderCard />
                        )}

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
                                }} >
                                        {loading ? (
                                                <LoaderCard />
                                        ) : (
                                                isQuery ?
                                                        <Box sx={{
                                                                width: '100%',
                                                                position: 'fixed',
                                                                bottom: 15,
                                                                // backgroundColor: 'red'
                                                        }}>
                                                                <MDTypography typography={typography.body1} pb={1}>
                                                                        Please Enter Shipment Number
                                                                </MDTypography>
                                                                <MDTextFeild />
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
                                                                                                        <Typography typography={typography.body2}>{item.text}</Typography>
                                                                                                </Box>
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

                        {!showQuestions && (
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
                        )}
                </Box>
        );
}

export default ChatBot;



// import React, { useState } from 'react';
// import { Box, Typography, Avatar } from '@mui/material';
// import colors from '../../../../assets/theme/base/colors';
// import typography from '../../../../assets/theme/base/typography';
// import logo from '../../../../assets/images/logo-ct.png';
// import MainButton from '../components/main_button';
// import Header from '../components/header';
// import LoaderCard from '../../../../components/loader';
import MDTypography from './../../../../items/MDTypography/index';
import Lottie from 'lottie-react';

// function ChatBot() {
//         const [showQuestions, setShowQuestions] = useState(false);
//         const [selectedQuestion, setSelectedQuestion] = useState(null);
//         const [loading, setLoading] = useState(false);
//         const [answer, setAnswer] = useState('');

//         const questions = [
//                 { id: 1, text: 'What is prime shippa?' },
//                 { id: 2, text: 'How much does the company own from branches with addresses?' },
//                 { id: 3, text: 'What is the mechanism for receiving and delivering the shipment?' },
//                 { id: 4, text: 'Inquire about a particular shipment?' },
//                 { id: 5, text: 'Close the conversation' },

//         ];

//         const handleStart = () => {
//                 setShowQuestions(true);
//         };

//         const handleQuestionSelect = (question) => {
//                 setSelectedQuestion(question);
//                 setLoading(true);

//                 setTimeout(() => {
//                         switch (question.id) {
//                                 case 1: {
//                                         setAnswer('Is a shipping company specializing in cargo transfers between its branches located in the UAE, The company was founded in 2018 and is one of the startups in this field to carry out logistics operations on shipments that need to be transported from receipt, storage, transportation and delivery');
//                                         break;
//                                 }
//                                 case 2: {
//                                         setAnswer(
//                                                 <div>
//                                                         The company has three branches in three different cities in the UAE: <br />
//                                                         Name: Abu Dhabi Branch <br />
//                                                         Location:<br />
//                                                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7225.196091619209!2d54.37028892547642!3d24.47645607204847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e66fd0e213d97%3A0xbde6320ab658c40e!2sAbu%20Dhabi%20Branch!5e0!3m2!1sen!2sae!4v1648877846752!5m2!1sen!2sae" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe><br />
//                                                         Name: Sharjah Branch <br />
//                                                         Location:<br />
//                                                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.8254439619113!2d55.40526171610472!3d25.274244311972497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e37a1a23f13%3A0x4a1e1416f06b89f4!2sSharjah%20Branch!5e0!3m2!1sen!2sae!4v1648877897892!5m2!1sen!2sae" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe><br />
//                                                         Name: Al Ain Branch <br />
//                                                         Location:<br />
//                                                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11505.252916736474!2d55.72079707095389!3d24.215249930759437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef56fd30b2c9c11%3A0x4ad13fb56b8a5646!2sAl%20Ain%20Branch!5e0!3m2!1sen!2sae!4v1648877930677!5m2!1sen!2sae" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe><br />
//                                                 </div>
//                                         );
//                                         break;
//                                 }

//                                 case 3: {
//                                         setAnswer(
//                                                 <div>
//                                                         Receipt of shipment:<br />
//                                                         Firstly Customer's Arrival <br />
//                                                         - Enter the shipment into their phases:<br />
//                                                         - Introduction of shipment type and capacity "by container" and verification as possible<br />
//                                                         Storage in branch warehouses is moved to phase II<br />
//                                                         - The remaining shipment information is entered.<br />
//                                                         <br />
//                                                         Receipt from another branch  <br />
//                                                         After the shipment arrives at the other branch, the receptionists confirm the receipt process  <br />
//                                                         Cargo and guide the driver verbally to the specified warehouse  <br />
//                                                         The warehouse supervisor reviews shipments that need to be entered  <br />
//                                                         Then the driver scans the shipment and then it is cleared by the warehouse supervisor  <br />
//                                                         The customer is contacted to inform him of the arrival of the shipment  <br />
//                                                 </div>
//                                         )
//                                         break;
//                                 }
//                                 case 5: {
//                                         setLoading(false);
//                                         setSelectedQuestion(null);
//                                         setAnswer('');
//                                         setShowQuestions(false);
//                                         break;
//                                 }
//                                 default: {
//                                         setLoading(false);
//                                         setSelectedQuestion(null);
//                                         break;
//                                 }
//                         }
//                         setLoading(false);
//                 }, 1700);
//         };

//         return (
//                 <Box sx={{
//                         minHeight: '100vh',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                 }}>
//                         <Header />

//                         {showQuestions && !selectedQuestion && (
//                                 <>
//                                         <Box sx={{
//                                                 pt: 10,
//                                                 width: "85%",
//                                                 position: 'fixed',
//                                                 bottom: 10,
//                                                 justifyContent: 'center',
//                                                 textAlign: 'center'
//                                         }}>
//                                                 {/* <Typography typography={typography.body1}>Select a question:</Typography> */}

//                                                 {questions.map(question => (
//                                                         <MainButton
//                                                                 key={question.id}
//                                                                 title={question.text}
//                                                                 colorTitle={colors.white.main}
//                                                                 backgroundColor={colors.gradients.info.state}
//                                                                 hoverBackgroundColor={colors.gradients.info.main}
//                                                                 onClick={() => handleQuestionSelect(question)}
//                                                                 height="10%"
//                                                                 width="100%"

//                                                         />

//                                                 ))}
//                                         </Box>

//                                 </>
//                         )}

//                         {selectedQuestion && (
//                                 <Box sx={{
//                                         pt: 10,
//                                         width: "95%",
//                                         bottom: 0,
//                                         // backgroundColor: 'red'
//                                 }} >
//                                         {loading ? (
//                                                 <LoaderCard />
//                                         ) : (
//                                                 <>
//                                                         {answer &&
//                                                                 <Box
//                                                                         sx={{
//                                                                                 width: '100%',
//                                                                                 padding: '10px',
//                                                                                 display: 'flex',
//                                                                                 alignItems: 'center'
//                                                                         }}>
//                                                                         <Avatar
//                                                                                 src={logo}
//                                                                                 sx={{
//                                                                                         p: 0.7,
//                                                                                         backgroundColor: colors.grey[200],
//                                                                                         marginRight: 2,
//                                                                                         width: 35,
//                                                                                         height: 35
//                                                                                 }}
//                                                                         />
//                                                                         <Box
//                                                                                 sx={{
//                                                                                         borderRadius: '25px 10px 10px 0px',
//                                                                                         backgroundColor: colors.gradients.warning.state,
//                                                                                         color: colors.white.main,
//                                                                                         maxWidth: '60%',
//                                                                                         padding: '10px',
//                                                                                         marginBottom: '10px',
//                                                                                         display: 'flex',
//                                                                                         flexDirection: 'column',
//                                                                                         alignItems: 'flex-start'
//                                                                                 }}
//                                                                         >
//                                                                                 <Typography typography={typography.body2}>{answer}</Typography>
//                                                                         </Box>
//                                                                 </Box>
//                                                         }
//                                                         <Box sx={{
//                                                                 width: "10%",
//                                                                 display: 'flex',
//                                                                 justifyContent: 'flex-end',
//                                                                 position: 'fixed',
//                                                                 bottom: 10,
//                                                                 right: 30,

//                                                         }}>
//                                                                 <MainButton
//                                                                         borderRadius={10}
//                                                                         title={"Back"}
//                                                                         colorTitle={colors.white.main}
//                                                                         backgroundColor={colors.gradients.info.state}
//                                                                         hoverBackgroundColor={colors.gradients.info.main}
//                                                                         onClick={() => setSelectedQuestion(null)}
//                                                                         height="50%"
//                                                                         width="100%"
//                                                                 />
//                                                         </Box>
//                                                 </>
//                                         )}
//                                 </Box>
//                         )}

//                         {!showQuestions && (
//                                 <Box sx={{
//                                         pt: 10,
//                                         width: "85%",
//                                         position: 'fixed',
//                                         bottom: 10
//                                 }}> <MainButton
//                                                 title="Start"
//                                                 colorTitle={colors.white.main}
//                                                 backgroundColor={colors.gradients.info.state}
//                                                 hoverBackgroundColor={colors.gradients.info.main}
//                                                 onClick={handleStart}
//                                                 height="10%"
//                                                 width="100%"
//                                         />
//                                 </Box>)}
//                 </Box>
//         );
// }

// export default ChatBot;
