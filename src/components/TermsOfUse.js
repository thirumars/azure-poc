import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import axios from 'axios';

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
};

function TermsOfUse() {

    const [accepted, setAccepted] = useState(false)

    const [acceptMessage, setAcceptMessage] = useState('Accept')

    const [declineMessage, setDeclineMessage] = useState('Decline')

    const { search } = useLocation()

    console.log(search)

    //const queryParams = new URLSearchParams(search)

    //const transactionId = queryParams.get('transactionId')

    const {transactionId} = queryString.parse(search)
    
    console.log(transactionId)

    useEffect(() => {
        getAcceptStatus();
        getDeclineStatus();
    }, []);

    const getAcceptStatus = () => {
        axios.get("https://my-json-server.typicode.com/thirumars/jsonserver/consent/1")
            .then(response => response.data)
            .then((data) => {
                setAcceptMessage(previousAcceptStatus => data.status)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getDeclineStatus = () => {
        axios.get("https://my-json-server.typicode.com/thirumars/jsonserver/consent/2")
            .then(response => response.data)
            .then((data) => {
                setDeclineMessage(previousDeclineStatus => data.status)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (


        <View style={styles.container}>
            <Text style={styles.title}>Terms and conditions</Text>
            <ScrollView
                style={styles.tcContainer}
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        setAccepted(prevousAccept => true)
                    }
                }}
            >
                <Text style={styles.tcP}>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [business name]’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</Text>
                <Text style={styles.tcP}>The term ‘[business name]’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is [address]. Our company registration number is [company registration number and place of registration]. The term ‘you’ refers to the user or viewer of our website.</Text>
                <Text style={styles.tcL}>{'\u2022'} The content of the pages of this website is for your general information and use only. It is subject to change without notice.</Text>
                <Text style={styles.tcL}>{'\u2022'} This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [insert list of information].</Text>
                <Text style={styles.tcL}>{'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</Text>
                <Text style={styles.tcL}>{'\u2022'} Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</Text>
                <Text style={styles.tcL}>{'\u2022'} This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</Text>
                <Text style={styles.tcL}>{'\u2022'} All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                    Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</Text>
                <Text style={styles.tcL}>{'\u2022'} From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</Text>
                <Text style={styles.tcL}>{'\u2022'} Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.</Text>
                <Text style={styles.tcP}>The use of this website is subject to the following terms of use</Text>
                <Text style={styles.tcP}>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [business name]’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</Text>
                <Text style={styles.tcP}>The term ‘[business name]’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is [address]. Our company registration number is [company registration number and place of registration]. The term ‘you’ refers to the user or viewer of our website.</Text>
                <Text style={styles.tcL}>{'\u2022'} The content of the pages of this website is for your general information and use only. It is subject to change without notice.</Text>
                <Text style={styles.tcL}>{'\u2022'} This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [insert list of information].</Text>
                <Text style={styles.tcL}>{'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</Text>
                <Text style={styles.tcL}>{'\u2022'} Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</Text>
                <Text style={styles.tcL}>{'\u2022'} This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</Text>
                <Text style={styles.tcL}>{'\u2022'} All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                    Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</Text>
                <Text style={styles.tcL}>{'\u2022'} From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</Text>
                <Text style={styles.tcL}>{'\u2022'} Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.</Text>
                <Text style={styles.tcP}>The use of this website is subject to the following terms of use</Text>
            </ScrollView>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <TouchableOpacity disabled={!accepted} onPress={() => alert(acceptMessage)} style={accepted ? styles.acceptButton : styles.acceptButtonDisabled}><Text style={styles.acceptButtonLabel}>Accept</Text></TouchableOpacity>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TouchableOpacity disabled={!accepted} onPress={() => alert(declineMessage)} style={accepted ? styles.deniedButton : styles.deniedButtonDisabled}><Text style={styles.deniedButtonLabel}>Denied</Text></TouchableOpacity>
                        </td>
                    </tr>
                </tbody>
            </table>
        </View>
    )
}

const { height } = Dimensions.get('window');

const styles = {

    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        fontSize: 22,
        alignSelf: 'center'
    },
    tcP: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12
    },
    tcL: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12
    },
    tcContainer: {
        marginTop: 15,
        marginBottom: 15,
        height: height * .7
    },

    acceptButton: {
        backgroundColor: '#136AC7',
        alignItems: "right",
        borderRadius: 5,
        padding: 10,
        size: 'sm'
    },

    acceptButtonDisabled: {
        backgroundColor: '#999',
        alignItems: "right",
        borderRadius: 5,
        padding: 10,
        size: 'sm'
    },

    acceptButtonLabel: {
        fontSize: 14,
        color: '#FFF',
        alignSelf: 'center'
    },
    deniedButton: {
        backgroundColor: '#136AC7',
        borderRadius: 5,
        padding: 10,
        alignItems: "left"
    },

    deniedButtonDisabled: {
        backgroundColor: '#999',
        borderRadius: 5,
        padding: 10,
        alignItems: "left"
    },

    deniedButtonLabel: {
        fontSize: 14,
        color: '#FFF',
        alignSelf: 'center'
    }

}

export default TermsOfUse