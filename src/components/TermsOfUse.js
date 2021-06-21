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

    const { transactionId } = queryString.parse(search)

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
            <Text style={styles.title}>Terms of Use</Text>
            <ScrollView
                style={styles.tcContainer}
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        setAccepted(prevousAccept => true)
                    }
                }}
            >
                <Text style={styles.tcP}>1.  INTRODUCTION
                    Welcome to the Internet site operated by Cricket Wireless LLC ("Cricket", "our", or "we"). This Internet site offers a wide variety of resources, products and services, which include shopping services, branded and personalized content and entertainment services, communication tools, online directories, administrative services, download areas, advertising, games and information, some or all of which may be accessed through a variety of means (all of which are collectively called our "Site" or "Sites"). The term "you" or "your" includes any of your subsidiaries, affiliates, employees and parent or legal guardian.

                    PLEASE READ THESE TERMS OF USE CAREFULLY.  By accessing or using our Site in any way you are agreeing to comply with these Terms of Use, including any documents, policies and guidelines incorporated by reference (referred to collectively as the "Terms"). Certain services available through our Site, especially services for which you are asked to subscribe or pay money, may have their own terms and conditions that apply to your purchase or use of that particular service. The Terms do not alter in any way the terms or conditions of any of these other written or online terms and conditions or agreements you may have or will have with Cricket, including any other website terms of use with an Cricket affiliate. To the extent that there is any conflict between these Terms and any terms and conditions or agreements relating to services you have purchased or online tools you use or to which you subscribe, those other terms and conditions or agreements will govern.</Text>
                <Text style={styles.tcL}>2.  AUTHORITY
                    By using our Site, you represent that you are at least 13 years old. Persons who are at least 13 years of age but under the age of 18 may only use our Sites with legal parental or guardian consent.  Accordingly, you agree that you are at least 18 years of age or older or possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, representations and warranties set forth in the Terms; otherwise, please exit the Site.  Cricket suggests that you take advantage of any access controls offered through the Site or third-party sites, which are designed to assist you in limiting or blocking access to certain types of web content you may feel are harmful to or inappropriate for minors.</Text>
                <Text style={styles.tcL}>3.  CHANGES TO THE TERMS OR SITE
                    We may change or modify the Terms from time to time without notice other than posting the amended Terms on the Site.  The amended Terms will automatically be effective when posted on our Site.  Your continued use of our Site after any changes in these Terms shall constitute your consent to such changes.  We reserve the right to change, modify or discontinue, temporarily or permanently, the Site (or any portion of the Site), including any and all content contained on the Site, at any time without notice. You agree that Cricket shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Site (or any portion thereof).</Text>
                <Text style={styles.tcL}>4.  REGISTRATION, PASSWORD AND SECURITY
                    Whenever you provide us information on our Site, you agree to: (a) provide true, accurate, current and complete information and (b) maintain and promptly update such information to keep it true, accurate, current and complete.  If you provide any information that is, or we have reasonable grounds to suspect that the information is, untrue, inaccurate, not current or incomplete, Cricket may without notice suspend or terminate your access to our Site and refuse any and all current or future use of our Site (or any portion of the Site).

                    If any portion of our Site requires you to register or open an account you may also be asked to choose a password and a user name.  Please select a password that would not be obvious to someone trying to guess your password, and change it regularly as an added precaution.  You are responsible for maintaining the confidentiality of the password and account, and you are fully responsible for all activities that occur under your password or account identification.  You agree to immediately notify Cricket of any unauthorized use of your password or account or any other breach of security.  Without limiting any rights which Cricket may otherwise have, Cricket reserves the right to take any and all action, as it deems necessary or reasonable, to ensure the security of the Sites and your account, including without limitation terminating your account, changing your password, or requesting additional information to authorize transactions on your account. Notwithstanding the above, Cricket may rely on the authority of anyone accessing your account or using your password and in no event and under no circumstances shall Cricket be held liable to you for any liabilities or damages resulting from or arising out of (i) any action or inaction of Cricket under this provision, (ii) any compromise of the confidentiality of your account or password and (iii) any unauthorized access to your account or use of your password. You may not use anyone else's account at any time, without the permission of the account holder.

                    The security of your personally identifying information is important to us. While there is no such thing as "perfect security" on the Internet, we will take reasonable steps to help ensure the safety of your personally identifying information. However, you understand and agree that such steps do not guarantee that use of the Site is invulnerable to all security breaches, and that Cricket makes no warranty, guarantee, or representation that use of any of our Site is protected from viruses, security threats or other vulnerabilities.</Text>
                <Text style={styles.tcL}>5.  PRIVACY POLICY
                    Please view our Privacy Policy, which explains Cricket's practices relating to the collection and use of your information through or in connection with our Site.  Cricket's use of your information is governed at all times by our Privacy Policy, which is incorporated into these Terms.  You understand that through your use of the Site you consent to the collection and use of this information (as set forth in the Privacy Policy).</Text>
                <Text style={styles.tcL}>6.  COPYRIGHT AND AUTHORIZATION
                    The Sites provide you access to a wide variety of information, shopping, communications, entertainment, games, advertising and other services, products, data and materials ("Content"). Some of the Content is owned by Cricket and/or its affiliates.  Other portions are owned by non-Cricket companies or third parties such as suppliers, vendors, and licensors (including Content that is generated by users as further described in Section 11).

                    Some portions of the Site may require you to download software ("Software") in order that you may access the Site, the services provided through the Site and/or the Content.  The Software may be the property of Cricket or a supplier, vendor, or licensor to Cricket.  The Content and Software are protected by a variety of laws governing the use of copyrights, trademarks, patents, or trade secrets.  Subject to the rules and limitations set forth in the Terms, you are granted a limited, non-sublicensable right to access the Sites, the Content and the Software for your personal non-commercial use only, except as otherwise permitted.  Without limiting the generality of the foregoing, no Software or underlying information or technology may be downloaded or otherwise exported or re-exported (a) into Cuba, North Korea, Iran, Sudan, Syria or any other country for which the U.S. maintains an embargo on such exports, or (b) to a person or entity identified on lists of the U.S. Treasury Department (e.g., Specially Designated Nationals, Denied Persons or Entities) or the U.S. Commerce Department (e.g., Entity List, Table of Deny Orders), which control such exports.  By downloading or using the Software or underlying information or technology, you agree to the foregoing and represent and warrant that you are not located in, under the control of, or a national or resident of any such country or on any such list.</Text>
                <Text style={styles.tcL}>7.  COPYRIGHT COMPLAINTS
                    Cricket respects the intellectual property rights of others.  If you believe that your work has been copied and has been posted, stored or transmitted to the Sites in a way that constitutes copyright infringement, please submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing Cricket's Copyright Agent the following written information:

                    An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;

                    A description of the copyrighted work that you claim has been infringed upon;

                    A specific description of where the material that you claim is infringing is located on the Sites;
                    Your address, telephone number, and email address;

                    A statement by you that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;

                    A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.

                    Cricket's Copyright Agent for notice of claims of copyright infringement on the Sites can be reached as follows:

                    Manager of Security & Copyright Infringement 1800 Perimeter Park Drive, Suite 100, Morrisville, NC 27560 Phone: (919) 319-5737 Fax: (919) 319-8154 Email: copyright@cricketwireless.com

                    For more information about Cricket's copyright protection practices under the DMCA and for information on how to contact Cricket's DMCA agent, please refer to www.cricketwireless.com/aup.</Text>
                <Text style={styles.tcL}>8.  TRADEMARKS AND SERVICE MARKS
                    Trademarks (including but not limited to the Cricket logo) that are used or displayed on the Sites are owned by Cricket Wireless LLC or its affiliates or by third parties other than Cricket that offer and provide products and services on or through the Sites. The Cricket trademarks may not be copied or used, in whole, partial or modified form, without the prior written permission of Cricket Wireless LLC or, if applicable, its licensor. In addition, Cricket custom graphics, logos, button icons, scripts, and page headers are covered by trademark, trade dress, copyright or other proprietary right law, and may not be copied, imitated, or used, in whole, partial or modified form, without the prior written permission of Cricket Wireless LLC. Other trademarks, service marks, registered trademarks, product and service names, and company names or logos that appear on the Sites are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Cricket. You may not use any meta tags or any other "hidden text" utilizing an Cricket name, trademark, or product name without Cricket's express written consent.</Text>
                <Text style={styles.tcL}>9.  THIRD-PARTY PRODUCTS AND SERVICES
                    Parties other than Cricket may offer and provide products and services on or through the Sites.  Except for Cricket branded information, products or services that are identified as being supplied by Cricket, Cricket does not operate, control, or endorse any information, products, or services on the Sites or accessible through the Sites in any way. Cricket is not responsible for examining or evaluating, and Cricket does not warrant the offerings of, any of these businesses or individuals or the content of their websites. We do not assume any responsibility or liability for the actions, product, and content of all these and any other third parties. You should carefully review their privacy statements and other conditions of use.

                    The Sites may contain links to other websites not operated by Cricket. The links are provided for your convenience. The inclusion of any links to other websites does not imply affiliation, endorsement or adoption by Cricket of those websites or the contents therein. We are not responsible for the contents, links or privacy of any linked website. Access to any other websites linked to the Sites is at your own risk. When leaving the Site, you should carefully review the applicable terms and policies, including privacy and data gathering practices, of any third-party website.</Text>
                <Text style={styles.tcL}>10.  PRODUCT AND SERVICE INFORMATION
                    Cricket does not warrant that information, graphic depictions, product and service descriptions or other content of the Sites is accurate, complete, reliable, updated, current, or error-free.  Despite our efforts, it is possible that a price for a product or service offered on the Site may be inaccurate or the product or service description may contain an inaccuracy. In the event Cricket determines that a product or service contains an inaccurate price or description, Cricket reserves the right to take any action it deems reasonable and necessary, in its sole discretion, to rectify the error, including without limitation canceling your order, unless prohibited by law. Cricket may make improvements or changes to any of its content, information products, services, or programs described on the Sites at any time without notice. You agree to notify Cricket immediately if you become aware of any pricing or descriptive errors or inconsistencies with any products or services you order through the Sites and comply with any corrective action taken by Cricket.</Text>
                <Text style={styles.tcL}>11.  ONLINE ORDERS
                    In order to protect Cricket and its customers from fraudulent activity, we may implement reasonable procedures regarding any online orders including, but not limited to, validating information provided or limiting the amount of equipment (e.g. wireless phones) and/or services that may be ordered online by a single individual or entity. Cricket reserves the right to further limit quantities or to cancel or reject orders in its sole discretion.</Text>
                <Text style={styles.tcL}>12.  USER SUBMITTED CONTENT
                    Our Site may have "publicly accessible areas" such as message boards, forums, member profiles, yellow pages, job folders or other features that allow users to post Content that will be accessible by the public or the user population generally. With respect to any message, data, image, text, photos, graphics, audio, video or other material you elect to post to such publicly accessible areas of our Site, while you retain any and all of your lawfully owned rights in such Content, you grant Cricket a royalty-free, perpetual, irrevocable, non-exclusive and fully sublicensable right and license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display such Content which you provide (in whole or part) worldwide and/or to incorporate it in other works in any form, media, or technology now known or later developed and to exercise the same rights with respect to such works. You also permit any user of our Site to access, display, view, store, distribute, perform, reproduce and prepare derivative works of such Content that you have placed in publicly accessible areas of our Site.  No compensation will be paid to you or to any other person or entity with respect to the posting or use of your Content. Cricket is under no obligation to post or use any Content you may provide and we may remove your Content at any time in our sole discretion. You agree that Cricket is not under any obligation of confidentiality, express or implied, with respect to your Content. You represent and warrant that you own or otherwise control all necessary rights to the Content that you post, that such Content is accurate, that use of the Content you supply does not violate these Terms, specifically including without limitation the requirements of Section 14 (Acceptable Use), and will not cause injury to any person or entity, and that you will indemnify Cricket for all claims resulting from the Content you supply.

                    Cricket does not generally pre-screen or control Content posted by users of our Site, and, therefore, does not guarantee the accuracy, integrity or quality of such Content. Cricket shall have the right (but not the obligation) in its sole discretion to monitor, refuse or remove any Content that is available via our Site for any or no reason, including that any Content violates these Terms or is otherwise objectionable.  We take no responsibility and assume no liability for any Content uploaded, transmitted, or downloaded by you or any third party, or for any mistakes, defamation, slander, libel, omissions, falsehoods, obscenity, pornography, or profanity you may encounter.  As the provider of the Sites, we are only a forum and are not liable for any statements, representations, or Content provided by Site users.  Any opinions, advice or recommendations expressed therein are those of the users providing such Content and not those of Cricket. We do not endorse any Content or any opinion, recommendation or advice expressed therein. It is not our intent to discourage you from taking controversial positions or expressing vigorously what may be unpopular views; however, we reserve the right to take such action as we deem appropriate in cases where the Site is used to disseminate statements that are harmful or inflammatory.</Text>
                <Text style={styles.tcL}>13.  SUBMISSIONS TO CRICKET
                    You agree not to propose, post or submit to Cricket ideas, concepts, copy, proposals, inventions, methods or techniques for new or proposed services or products (collectively referred to as "Submitted Material") through the Site.  In the event you do so, you hereby grant to Cricket a perpetual, worldwide, irrevocable, unrestricted, non-exclusive, royalty-free license to use all such Submitted Material in any manner whatsoever without compensation or attribution to you.  You also grant to Cricket the right, at its sole discretion, to use your name in connection with the Submitted Materials and other information as well as in connection with all advertising, marketing and promotional material related to such material and information. Use of such Submitted Material shall not require permission from or payment to you or to any other person or entity. You agree that Cricket is not under any obligation of confidentiality, express or implied, with respect to the Submitted Material. You agree that you shall have no recourse against Cricket for any alleged or actual infringement or misappropriation of any proprietary right in Submitted Material and that the submission of any Submitted Material to Cricket, including the posting of materials to any forum or interactive area on the Sites, irrevocably waives any and all "moral rights" in such materials. You represent and warrant that you own or otherwise control all of the rights to the Submitted Material that you post, that the Submitted Material is accurate and, that use of the Submitted Material you supply does not violate these Terms and will not cause injury to any person or entity.</Text>
                <Text style={styles.tcL}>14. ACCEPTABLE USE
                    You agree to use our Site and the Content (whether provided by us or others), as well as any Software provided in connection with the Site, in a manner consistent with all applicable laws and regulations. Additionally, you will not take any of the following actions with respect to our Site, related Software, or Content, nor will you use our Site or related Software to upload, post, email, distribute, transmit, link, solicit or otherwise make available any Content or use our Site in any manner that:

                    is unlawful, harmful to minors, threatening, harassing, abusive, defamatory, slanderous, vulgar, gratuitously violent, obscene, pornographic, indecent, lewd, libelous, invasive of another's privacy, or racially, ethnically or otherwise offensive, hateful or abusive;
                    infringes someone else's patent, trademark, trade secret, copyright or other intellectual property or other rights;
                    removes any proprietary notices or labels on the Content;
                    advocates or solicits violence, criminal conduct or the violation of any local, state, national or international law or the rights of any third party;
                    advocates or solicits violence, criminal conduct or the violation of any local, state, national or international law or the rights of any third party;
                    is deceptive in any way, such as an offer to sell fraudulent goods or contains an impersonation of any person or entity or misrepresents an affiliation with a person or entity;
                    specifically advertises firearms or ammunition, tobacco, alcohol, illegal drugs, or other contraband;
                    constitutes unsolicited or unauthorized advertising, junk or bulk e-mail (SPAM), chain letters, or any other unsolicited commercial or non-commercial communication;
                    interferes with others using the Sites;
                    is off-topic according to the description of the group, forum or webpage;
                    contains software viruses, worms, time bombs, corrupted files, Trojan horses or any other computer code, files, or programs that are designed or intended to disrupt, damage, overburden, impair or limit the functioning of any software, hardware, network, server or communications systems or equipment;
                    contains a charity request, petitions for signatures, chain letters or letters relating to a pyramid scheme;
                    disrupts, interferes or inhibits any other user from enjoying the Sites or other affiliated or linked websites, material, contents, products and/or services;
                    uses any robot, spider, or other such programmatic or automatic device, including, but not limited to, automated dial-in or inquiry devices, to obtain information from the Site or otherwise monitor or copy any portion of the Site, products and/or services;
                    creates a false identity for the purpose of misleading others;
                    prepares, compiles, uses, downloads or otherwise copies any user information and/or usage information for any portion thereof, or transmit, provide or otherwise distribute (whether or not for a fee) such information to any third party;
                    uses any Cricket domain name as a pseudonymous return email address;
                    contains any offer for unsolicited goods or services or any advertising or promotional materials, except in those areas specifically designated for such purpose (e.g., classified bulletin board);
                    provides material support or resources (or conceals or disguises the nature, location, source, or ownership of material support or resources) to any organization(s) designated by the United States government as a foreign terrorist organization pursuant to section 219 of the Immigration and Nationality Act;
                    attempts to disable, bypass, modify, defeat or otherwise circumvent any of the digital rights management or other security related tools incorporated into the Software or any Content or the Sites;
                    reproduces, duplicates, copies, sells, trades, resells or exploits for any commercial purposes, any portion of the Sites or Content, use of the Sites, or access to the Sites;
                    publishes, publicly performs or displays, or distributes to any third party any Content, including reproduction on any computer network or broadcast or publications media;
                    systematically collects and uses any Content including the use of any data mining, or similar data gathering and extraction methods;
                    makes derivative uses of the Sites or the Content;
                    uses, frames, or utilizes framing techniques to enclose any portion of the Sites (including the images found at the Sites or any text or the layout/design of any page or form contained on a page); and/or
                    modifies, translates, decompiles, disassembles, uses reverse engineering or otherwise attempts to derive the source code for the computer systems and other technology that operate our Site. For purposes of these Terms, "reverse engineering" shall include the examination or analysis of the Site to determine the source code, structure, organization, internal design, algorithms or encryption devices of our Site's underlying technology.
                    Unless you are participating in an area of the Site that requires or encourages anonymity, we encourage you to use your real name.</Text>
                <Text style={styles.tcL}>15.  SITE SECURITY
                    Violating the security of our Site is prohibited and may result in criminal and civil liability.  Cricket may investigate incidents involving such violations and may involve and will cooperate with law enforcement if a criminal violation is suspected.  Examples of security violations include, without limitation, unauthorized access to or use of data or systems including any attempt to probe, scan, or test the vulnerability of the Site or to breach security or authentication measures, unauthorized monitoring of data or traffic, interference with service to any user, host, or network including, without limitation, mail bombing, news bombing, other flooding techniques, deliberate attempts to overload a system, forging any TCP-IP packet header, e-mail header, or any part of a message header, except for the authorized use of aliases or anonymous remailers, and using manual or electronic means to avoid any use limitations.</Text>
                <Text style={styles.tcL}>16. GEOGRAPHICAL RESTRICTIONS
                    Unless expressly and specifically stated otherwise on the Site, Cricket provides this Site for use only by persons located within the United States. Certain affiliates of Cricket only provide certain regulated telecommunications and other services in certain portions of the United States.  Cricket makes no representation that all products, services and/or material described on the Site are appropriate or available for use in locations outside the United States or all territories within the United States. Those who choose to access our Site from other locations do so of their own initiative and are responsible for compliance with local laws. Certain companies affiliated with Cricket provide services and operate websites in various other countries throughout the world, some of which websites may be linked to from our Site. Any such international websites will be governed by their own terms of use and privacy policies and not by these Terms.</Text>
                <Text style={styles.tcL}>17.  GENERAL PRACTICE REGARDING USE AND STORAGE
                    You acknowledge that Cricket may establish general practices and limits concerning use of the Site, including without limitation the maximum number of days that email messages, message board postings or other uploaded Content will be retained by the Site, the maximum number of email messages that may be sent from or received by an account on the Site, the maximum size of any email message that may be sent from or received by an account on the Site, the maximum disk space that will be allotted on Cricket's servers on your behalf, and the maximum number of times (and the maximum duration for which) you may access the Site in a given period of time.  Your use of this Site constitutes your consent to allow Cricket to store electronic communications on its servers. You agree that Cricket has no responsibility or liability for the deletion or failure to store any messages and other communications or other content maintained or transmitted by the Site. You acknowledge that Cricket reserves the right to terminate accounts that are inactive for an extended period of time. You further acknowledge that Cricket reserves the right to modify these general practices and limits from time to time.</Text>
                <Text style={styles.tcP}>18.  DISCLAIMER OF WARRANTIES
                    YOU EXPRESSLY UNDERSTAND AND AGREE THAT:

                    YOUR USE OF OUR SITE, INCLUDING ANY CONTENT OR INFORMATION CONTAINED WITHIN THE SITES, ANY SITE-RELATED SERVICE OR SOFTWARE THAT IS PROVIDED TO YOU, IS AT YOUR SOLE RISK. OUR SITE, INCLUDING ANY CONTENT, SOFTWARE OR INFORMATION CONTAINED WITHIN THE SITES AND ANY SITE-RELATED SERVICE, IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.  CRICKET AND ITS CO-BRANDERS, SUPPLIERS, LICENSORS, AND OTHER RELATED PARTIES, AND THEIR RESPECTIVE OFFICERS, AGENTS, REPRESENTATIVES, AND EMPLOYEES EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, STATUTORY OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY OF DATA AND NON-INFRINGEMENT. BECAUSE SOME JURISDICTIONS MAY NOT PERMIT THE EXCLUSION OF CERTAIN WARRANTIES, SOME OF THESE EXCLUSIONS MAY NOT APPLY TO YOU.
                    CRICKET AND ITS CO-BRANDERS, SUPPLIERS, LICENSORS, AND OTHER RELATED PARTIES, AND THEIR RESPECTIVE OFFICERS, AGENTS, REPRESENTATIVES, AND EMPLOYEES MAKE NO WARRANTY THAT:  (i) OUR SITE WILL MEET YOUR REQUIREMENTS; (ii) MATERIALS, SOFTWARE OR CONTENT AVAILABLE FOR DOWNLOAD FROM THE SITE ARE FREE OF INFECTION OR VIRUSES, WORMS, TROJAN HORSES, OR OTHER CODE THAT MANIFESTS CONTAMINATING OR DESTRUCTIVE PROPERTIES; (iii) OUR SITE WILL BE UNINTERRUPTED, TIMELY, SECURE (INCLUDING FREE FROM UNAUTHORIZED ACCESS), PROVIDE CONTINUOUS STORAGE OR ACCESS, OR ERROR-FREE; (iv) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF OUR SITE WILL BE ACCURATE, COMPLETE OR RELIABLE; (v) THE QUALITY OF ANY PRODUCTS, SERVICES, SOFTWARE, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH OUR SITE WILL MEET YOUR EXPECTATIONS; AND (vi) ANY ERRORS IN OUR SITE OR SOFTWARE WILL BE CORRECTED.
                    ANY MATERIAL DOWNLOADED, UPLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF OUR SITE OR SOFTWARE IS DONE AT YOUR OWN DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR BUSINESS OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OR UPLOAD OF ANY SUCH MATERIAL OR THE USE OF OUR SITE OR OUR SOFTWARE.
                    NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM CRICKET OR THROUGH OR FROM OUR SITE SHALL CREATE ANY WARRANTY. ADVICE OR INFORMATION RECEIVED BY MEANS OF OUR SITE SHOULD NOT BE RELIED UPON FOR SIGNIFICANT PERSONAL, BUSINESS, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR PARTICULAR SITUATION.</Text>

                <Text style={styles.tcL}>19.  ENFORCEMENT
                    Cricket reserves the right but does not assume the obligation to strictly enforce these Terms, including without limitation by issuing warnings, suspension, or termination of access to the Sites and/or services, and/or by removing, screening, or editing of Content, or by engaging in self-help and active investigation, litigation and prosecution in any court or other appropriate venue.

                    Cricket may access, use, and disclose transaction information and any Content provided by you to comply with the law (e.g., a lawful subpoena) or based on Cricket's reasonable judgment that disclosure is necessary, or to enforce or apply our agreements (including these Terms), to initiate, render, bill, and collect for services, to protect our rights or property, or to protect users of Cricket's services, the Site and other persons or entities from fraudulent, abusive, or unlawful use of the Site or any such services. INDIRECT, ATTEMPTED OR ACTUAL VIOLATIONS OF THESE TERMS OR ANY RELATED POLICY BY YOU OR ANY THIRD PARTY ON YOUR BEHALF SHALL BE CONSIDERED VIOLATIONS OF THESE TERMS BY YOU.</Text>
                <Text style={styles.tcL}>20.  LIMITATION OF LIABILITY
                    IN NO EVENT SHALL CRICKET, ITS EMPLOYEES, OFFICERS, REPRESENTATIVES, SERVICE PROVIDERS, SUPPLIERS, LICENSORS, AND AGENTS BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO, LOSS OF USE, LOSS OF PROFITS, OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING BUT NOT LIMITED TO NEGLIGENCE), OR OTHERWISE, ARISING OUT OF OR IN ANY WAY CONNECTED WITH: (i) THE USE OR INABILITY TO USE THE SITES OR THE CONTENT, MATERIALS, SOFTWARE, INFORMATION OR TRANSACTIONS PROVIDED ON OR THROUGH THE SITES; (ii) ANY CLAIM ATTRIBUTABLE TO ERRORS, OMISSIONS, OR OTHER INACCURACIES IN THE SITES OR THE CONTENT, MATERIALS, SOFTWARE, INFORMATION, PRODUCTS, OR SERVICES ON OR AVAILABLE THROUGH THE SITES; (iii) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY PRODUCTS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM OUR SITE; (iv) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (v) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON OUR SITE; (vi) THE DELAY OR FAILURE IN PERFORMANCE RESULTING FROM AN ACT OF FORCE MAJEURE, INCLUDING WITHOUT LIMITATION, ACTS OF GOD, NATURAL DISASTERS, COMMUNICATIONS FAILURE, GOVERNMENTAL ACTIONS, WARS, STRIKES, LABOR DISPUTES, RIOTS, SHORTAGES OF LABOR OR MATERIALS, VANDALISM, TERRORISM, NON-PERFORMANCE OF THIRD PARTIES OR ANY REASONS BEYOND THEIR REASONABLE CONTROL; OR (vii) ANY OTHER MATTER RELATING TO OUR SITE, EVEN IF AIO OR ITS AUTHORIZED REPRESENTATIVES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.  YOUR SOLE REMEDY FOR DISSATISFACTION WITH THE SITE AND/OR SITE-RELATED SERVICES IS TO STOP USING THE SITE AND/OR THOSE SERVICES.

                    APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OF LIABILITY, IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES SET FORTH ABOVE, SO THIS LIMITATION OF LIABILITY MAY NOT APPLY TO YOU.  IF ANY PART OF THIS LIMITATION ON LIABILITY IS FOUND TO BE INVALID OR UNENFORCEABLE FOR ANY REASON, THEN THE AGGREGATE LIABILITY OF CRICKET UNDER SUCH CIRCUMSTANCES FOR LIABILITIES THAT OTHERWISE WOULD HAVE BEEN LIMITED SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).</Text>
                <Text style={styles.tcL}>21.  INDEMNIFICATION
                    You agree to indemnify, defend and hold harmless Cricket and its underlying content and service providers, licensors and suppliers, and each of their respective subsidiaries, affiliates, officers, agents, and employees, from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, made by any third party due to or arising out of Submitted Material or any other content you submit, post or upload to or transmit through our Site, your use of our Site, your connection to our Site, your violation of these Terms, or your violation of any law or the rights of another. These obligations will survive any termination of your relationship with Cricket or your use of our Site. Cricket reserves the right to assume the defense and control of any matter subject to indemnification by you, in which event you will cooperate with Cricket in asserting any available defenses.</Text>
                <Text style={styles.tcL}>22. TERMINATION/SUSPENSION
                    You agree that Cricket may immediately terminate or suspend your account, any associated email address, and access to all or any part of the Sites or change your password without notice.  Cause for such termination, suspension or change shall include, but not be limited to, (a) breaches or violations of these Terms or other incorporated agreements or guidelines, (b) requests by law enforcement or other government agencies, (c) a request by you (self-initiated account deletions), (d) discontinuance or material modification to the Sites (or any part thereof,) (e) unexpected technical or security issues or problems, (f) extended periods of inactivity, and/or (g) engagement by you in fraudulent or illegal activities. Termination of your account includes (or, if Cricket elects instead to suspend your account, may include any one or more of the following) (a) removal of access to all offerings within the Sites, (b) deletion of your password and all related information, files and other content associated with or inside your account (or any part thereof) and (c) barring of further use of the Sites.  You agree that all terminations and suspensions for cause shall be made in Cricket's sole discretion and that Cricket shall not be liable to you or any third party for any termination or suspension of your account, loss of storage, any associated email address, or access to the Sites. Further, Cricket reserves the right, to immediately terminate or suspend your account, any associated email address, and access to the Sites at any time for any reason and without notice to you in its sole discretion.</Text>
                <Text style={styles.tcL}>23. MISCELLANEOUS
                    Cricket's failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. If any provision of these Terms shall be deemed unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from the Terms and shall not affect the validity and enforceability of any remaining provisions.  These Terms shall be governed and construed in accordance with the laws of the State of Texas applicable to agreements made and to be performed in Texas. You agree that any legal action or proceeding between Cricket and you for any purpose concerning these Terms or the parties' obligations hereunder shall be brought exclusively in a federal or state court of competent jurisdiction sitting in Texas. Neither the course of conduct and/or course of dealing between the parties nor trade practice shall act to modify any provision of this Agreement. Cricket may assign its rights and duties under this Agreement to any party at any time without notice to you. Your rights and duties under these Terms are not assignable by you without written consent of Cricket.  These Terms do not provide any third party with a remedy, claim, or right of reimbursement.  You must file any claim or suit related to our Site within one year after it arises.</Text>
                <Text style={styles.tcL}>Effective: May 18, 2014</Text>
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