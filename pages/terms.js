import React, { Component, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { cartNum } from '../Helper/Context';


const Terms = () => {
    const [cartNumber, setCartNumber] = useState([]);
  return (
    
            <div> 
                        <div>
                            <div>
                                <cartNum.Provider value={{cartNumber, setCartNumber}}>
                            <div className="sticky top-0 z-10">
                            <Header/>
                            </div>
                                </cartNum.Provider>
                            </div>
    
                            <div className="w-2/3 m-auto pb-20">
                            <h3 className="py-8"><b>LEGAL STATEMENT & PRIVACY POLICY</b></h3>
    
            <b>1.- General information on the website owner</b> <br/>
            <br/>
    
            This website: www.GSTDM.com (the “Website”) belongs to GSTDM, S.L.U. (hereinafter referred to as GSTDM, hereby acting in its name and on behalf of any of its subsidiaries or holding company or any affiliate of its holding company) a legally-constituted Spanish company, based at Complejo Mirall Balear, Torre A, 5ª Planta, 1A-2A, Camí de Son Fangos 100, 07007 Palma de Mallorca, Illes Balears, Spain, with travel agent license 512 M/D, granted by the Conselleria de Turisme de les Illes Balears. <br/>
    
            <br/> <b>2.- Products and services</b> <br/>
            <br/>
            The products of GSTDM, referred to collectively as “Tourist Services” and which are sold via the Website, consist of accommodation, transfers, excursions, tickets, vehicle hire and other receptive tourism services (the “Travel Services”). <br/>
    
            In any event, these services will be subject to the general agreement conditions displayed and accepted on the website and in accordance with the prices, rates and cancellation conditions shown at the time of making the booking. The website will inform users of the process followed to make the booking. <br/>
    
            <br/> <b>3.- Website modifications and updates</b> <br/>
            <br/>
            GSTDM, the legal owner of the website, reserves the right to modify unilaterally, at any time and without prior notice, the information contained in this document, as well as the general terms and conditions published on the www.GSTDM.com website. In these cases the information will be published and communication given as soon as possible. Similarly, the right is reserved to modify the website’s appearance and configuration unilaterally, at any time and without prior notice. Access to the system used for this program may be suspended at any time due to maintenance work, for network security reasons or due to force majeure.<br/>
    
            GSTDM does not guarantee that the contents of its website will be fully up to date, accurate and/or available at all times, although every effort will be made for this to be so. Despite the fact that GSTDM wishes to provide the CLIENT with a continuous service through the website, this service may be interrupted for various reasons. In such cases and whenever possible, GSTDM will attempt to inform users sufficiently in advance, but accepts no responsibility whatsoever for any damages that users may incur as a result of interruptions to the service allowing access to the website.<br/>
            <br/>
            <b>4.- Website access</b><br/>
            <br/>
            Access to this website will be provided exclusively by GSTDM.<br/>
    
            Access to certain services is conditional to the user registering on the GSTDM database. In these cases the CLIENT agrees to duly safeguard the access codes (user name and password) as they are for sole use by their holder and the safeguarding and correct use of them is entirely the user’s responsibility. The CLIENT, which freely and voluntarily registers as a user or informs GSTDM of any personal data through the procedures established on this website, expressly authorises GSTDM to use said data to send the user commercial information about its products or services, until the user ceases to be a client of GSTDM. In any event, said data will be treated in accordance with the description provided in the “privacy policy” published on this website, and always respecting the legislation in force at all times in matters pertaining to personal data and services relating to the information society. All information provided for GSTDM by the CLIENT must be accurate. To this effect, the CLIENT guarantees the authenticity of any data it may provide as a consequence of completing the forms needed to register as a client or user. Similarly, the user will be responsible for ensuring that all information provided to GSTDM is kept permanently up to date, so that it corresponds at all times to the user’s real situation. In any event, the CLIENT shall be held solely responsible for any false or inexact information provided and for any damages that this may cause to GSTDM or any third parties due to the information provided.<br/>
    
            <br/><b>5.- Unauthorised use</b><br/>
            <br/>
            The CLIENT or the users in general who use this website agree not to make any use of this site for any purposes or activities that are illegal or illicit, or that contravene the norms of good conduct, and have no right to modify any of the materials included on our website, nor to copy, distribute, broadcast, present, produce or in general reproduce in any way, publish, authorise or create any work based on the information or the content included on this website.<br/>
    
            <br/><b>6.- Process for contracting services</b><br/>
            <br/>
            6.1 Age and responsibility<br/>
    
            <br/>The CLIENT guarantees i) that it makes legitimate requests and bookings for the CLIENT or in representation of other persons who have legally authorised the CLIENT to proceed with the booking; ii) that the CLIENT User is at least 18 years of age or has the legal capacity necessary to create a legal contract on behalf of the CLIENT; and iii) that any and all information supplied during the booking process is correct and true, for which the CLIENT accepts all financial responsibility resulting from any transaction carried out using the CLIENT’S access codes or on behalf of the CLIENT.<br/>
    
            <br/>6.2 Access codes<br/>
    
            <br/>The access codes for this program (user names and password) will be provided by GSTDM for each CLIENT, including any passwords that may be needed for each CLIENT user.<br/>
    
            Immediately after the initial access codes have been used for the first time to access the GSTDM booking service, each registered user assigned to the CLIENT must change their personal password (initially provided by GSTDM), to guarantee an absolute safeguard of the confidentiality, priority and independence when using the program.<br/>
    
            The access codes provided by GSTDM are for the sole use of each CLIENT and user, in such a way that no access code may be transferred or revealed to third parties, including their representatives or subsidiaries of the CLIENT.<br/>
    
            Each CLIENT and the personal user are directly responsible for the use of their own access codes, which must not be shared with other users nor disclosed by any means. In the event of improper use thereof, such access codes shall be withdrawn; sales will immediately be stopped and fraudulent bookings will be cancelled. In the event that GSTDM or the CLIENT  detect fraudulent or improper use of the access codes by the CLIENT, including its current and former employees, GSTDM reserves the right to take any legal action pursuant to the protection of its legitimate interest and claim the cancellation costs of the fraudulent bookings from CLIENT.<br/>
    
            For reasons of security, GSTDM reserves the right to change the access codes of the CLIENT so long as such changes shall not disrupt the use of the system by said CLIENT, and that sufficient notice of the planned change(s) is received by said CLIENT. In addition, the CLIENT should change the access codes from time to time for security reasons, especially every time a user is no longer employed by the CLIENT.<br/>
    
            <br/>6.3.- Contracting services<br/>
    
            <br/>The conclusion of the contracting process via the website is conditioned by this document and by the GSTDM Contract Terms and Conditions (hereinafter referred to as “Terms and Conditions”). The Terms and Conditions are an integral part of the website, and may not be separated from the Contract Terms and Conditions, the operational section or any bookings made. By accessing, viewing, using or contracting the website, the CLIENT consents to be governed by these Terms and Conditions. The CLIENT also agrees to abide by all laws and regulations that are applicable to this website and the bookings made through it.<br/>
    
            If the CLIENT does not wish to be bound by these Terms and Conditions, it must not proceed to book any tourist services on the website.<br/>
    
            Booking and contracting the product offered by GSTDM may only be made by a person of legal age and with full legal capacity to act in accordance with current law. The CLIENT, therefore:<br/>
    
            May not use the website for any purpose other than for contracting the GSTDM product.<br/>
            May not send, transmit or issue on or via the website any information that may be damaging, obscene, defamatory or illegal in any other way for the rights of the GSTDM or any third parties.<br/>
            Shall not make any unauthorised, false or fraudulent bookings.<br/>
            <br/>Shall not use any software, routine or mechanism that interferes or has the possibility of interfering, electronically or manually, with the operability and functionality of the website, including but not limited to the loading or transfer of corrupt data or computer viruses of any kind.
            <br/>Shall not distort, alter or interfere in the appearance, availability or format of the website or its source code.
            <br/>Shall not undertake actions that lead to an unreasonable or disproportionate overload of the website or its infrastructure.
            <br/><br/>6.4 Impossibility of handwritten signature
    
            <br/><br/>Due to the special nature of remote contracts, you hereby recognise the impossibility of signing the payment receipt, which is considered to acknowledge acceptance of the transaction. For this reason you hereby waive the need for a signature for all electronic transactions generated by bookings made through the GSTDM website.
    
            <br/>Notwithstanding any other of its rights, GSTDM reserves the right to deny access to this website and/or to cancel any bookings, should GSTDM deem (at its own discretion) that the CLIENT is failing to comply with any of the Terms and Conditions of this agreement.
    
            <br/><br/>6.5 Independent contracting parties
    
            <br/><br/>GSTDM and the CLIENT are independent parties to the agreement. No joint venture or other business relationship, franchise, representation or CLIENT exists between the parties. Neither party shall have the power to bind the other or to accept obligations on its own behalf without the prior consent of the other party.
    
            <br/><br/><b>7.- Confidentiality and Personal Data Protection</b><br/>
    
            <br/>&quot;Confidential information&quot; is considered as any information or datum relating to this contract and commercial relationship.
    
            <br/>It is expressly prohibited to fully or partially disclose to third parties, be they natural persons or legal entities, which are not party to this commercial relationship, any confidential information that the parties may be able to access through the contracting and performance of this commercial relationship.
    
            <br/>Both parties guarantee that their employees, customers, providers, subcontractors and other persons involved in the cooperation agreements between GSTDM and the CLIENT, comply with the confidentiality obligations contained in this agreement. These confidentiality obligations are of an indefinite nature and must be maintained whether or not relations between the parties come to an end, from the date that this contract is signed.
    
            <br/><br/>ACCESSING PERSONAL DATA<br/>
    
            <br/>“Personal Data” refers to any information that directly or indirectly identifies or allows the identification of an individual person) (“Personal Data”
    
                <br/>Each Party and, where applicable, its affiliates, employees, subcontractors or representative/s, shall inform the other if any  Personal Data will be processed by the other Party for the purpose of allowing the correct development, compliance and control of the agreed provision of services, with the basis of the processing being the fulfilment of the contractual relationship between the Parties. In the event that either Party processes personal data on behalf of the other as part of the provision of the services under this Agreement, the Parties shall ensure compliance with the relevant and applicable Data Protection regulations including the Regulation (EU) 2016/679, also known as “General Data Protection Regulation” or “GDPR”. The Parties shall regulate such processing by means of a Data Processing Agreement (DPA), which may be accessible through this link (http://corporate.GSTDM.com/comms/Data_Processing_Agreement_Terms_FINAL.pdf) or attached to this Agreement and shall make up part of the terms and conditions of this Agreement.
    
                <br/>The Personal Data will be kept by the relevant Party during the term of the Agreement and even once the same has been terminated, until the eventual responsibilities derived from the Agreement have prescribed. With the specific consent given by the data owner through legally acceptable ways of obtaining consent, certain relevant and limited Personal Data may be disclosed to banks and other financial entities for the management of payments to be made under the Agreement, and to Public Administrations as required by applicable Law and for the purposes contained therein.
    
                <br/>The Personal Data owners may exercise their rights to request access to their Personal Data, rectification or erasure of such data, and their right to object, data portability and restriction of their processing, by means of a written request to the other Party, to the addresses indicated in the heading of this Agreement, in addition to filing a claim before the any relevant Data Protection Authority).
    
                <br/>Each Party may contact the other Party&apos;s Data Protection Officer (DPO) though the following e-mail and/or postal addresses: dataprotection@GSTDM.com. 
    
                <br/><br/><b>8.- Intellectual/industrial property and other rights</b><br/>
    
                <br/><br/>8.1 Website content<br/>
    
                <br/>All the designs, brands, patents, names, images, logos, graphics, icons, applications and other website content are the property of GSTDM, or where applicable GSTDM has a licence for their use, and are under protection from industrial and property rights. Under no circumstances does access to the website imply a transfer of said rights by GSTDM to the CLIENT, which may not make any commercial use of such content, or in any way alter, reproduce, distribute or publicly communicate said content without authorisation by GSTDM.
    
                <br/><br/>8.2 Ownership<br/>
    
                <br/>The CLIENT recognises and agrees that, with the exception of the regulations herein provided, it shall acquire no right or interest with regard to the information or data to which it has access, and that GSTDM shall continue to be the sole owner of the information and data, including but not limited to all patents, copyrights, brands, business secrets, commercial names, contracts, industrial designs and other property rights belonging to them, anywhere in the world.
    
                <br/>All brands, copyrights, database rights and other intellectual and industrial property rights over the contents of the website (and its organisation and appearance), as well as the source codes, are the property of GSTDM or its providers. Neither the CLIENT nor any other representative may copy, modify, alter, publish, publicly communicate, distribute, sell or transmit the contents of this website or its source code, either wholly or in part, without written authorisation from GSTDM.
    
                <br/>In the event of the CLIENT making inappropriate use of any brand belonging to GSTDM, without the express authorisation of GSTDM through the corresponding licence, the CLIENT shall be immediately denied access to the GSTDM product, which shall not affect the right of GSTDM to bring any legal action it deems fit in defence of its rights.
    
                <br/><br/>8.3 Restrictions<br/>
    
                <br/>With the exception of the stipulations in the General Conditions, the CLIENT is prohibited from copying, reproducing, modifying, transmitting, selling, leasing, marketing or disclosing the contents (and/or any of their elements) provided and disclosed by GSTDM.
    
                <br/>The CLIENT recognises and accepts that merely revealing or accessing the information or data available on this website does not constitute an offer by GSTDM for the sale or transfer of such elements.
    
                <br/><br/>8.4 Content waiver<br/>
    
                <br/>The information on this website has been entered in good faith and with reasonable diligence. GSTDM cannot guarantee that the content is completely free of defects or typographical errors, and as such GSTDM accepts no liability whatsoever for any errors or omissions that may exist on this website. The information on accommodation and other services provided by GSTDM is as accurate as possible derived from the information supplied by the various service providers. GSTDM is not responsible for any inaccuracies in the information with regard to the actual service provided by the service providers.
    
                <br/>The website may include links to third-party websites, which are provided solely for purposes of information. Any such websites are independent from GSTDM, which shall not be held responsible for them or for any material that they may contain.
    
                <br/>The service providers promoted on our website are independent entities and entrepreneurs and in no case are they agents, representatives or employees of GSTDM. They provide their services in accordance with their Terms and Conditions, which may limit or exclude their liability with regard to the CLIENT or the CLIENT. GSTDM and its affiliates are not liable for any action, omission, negligence or breach of contract by these independent entities and entrepreneurs, or for any damages or costs that may result from such circumstances. GSTDM and its affiliates are not liable for any reimbursements in the event of overbookings, force majeure or any other cause beyond control of GSTDM.
    
                <br/>To the extent permitted by Law, GSTDM excludes any implicit guarantee with regard to the veracity and accuracy of the information, services and materials contained in this website. Such information, services and materials are provided as they are by the service providers and subject to availability, with no guarantee of any kind.
    
                <br/>Claims and liability. Liability disclaimer clause
                <br/>Under no circumstances will GSTDM (or its affiliates) be held liable for any direct or indirect losses or damages of any kind resulting from the website being accessed or otherwise, from its use or from the information contained on said website, including the interruption of business and any similar circumstance.
                <br/>The liability of GSTDM will not under any circumstances exceed the amount paid by the CLIENT to GSTDM for the specific services offered, regardless of whether said liability is the result of a breach of these Terms and Conditions, a breach of the agreement that these Terms and Conditions relate to, an action or omission that violates any legal or regulatory obligations, or any other cause.
            
    
                <br/>Transfer of rights
                <br/>GSTDM reserves the right to transfer part or all of the obligations or rights resulting from these Terms and Conditions to any subsidiary, associate or parent company, and any subsidiary of said parent company.
                <br/>The CLIENT is not authorised to transfer to a third party any obligation or right resulting from these Terms and Conditions, or any other agreement that forms part of it with regard to a third party, unless express authorisation has been given by GSTDM. 
            
                <br/>Use of cookies
                <br/>Accessing GSTDM may involve the use of cookies, even though the page may function without their Cookies are small files that store information on each user’s browser so that the server can recognise certain information that can only be read by the server. Cookies have a limited duration. No cookie allows any telephone number, email address or any other information details to be revealed. Cookies cannot extract any information from the user’s hard drive or obtain personal information about it. The only way that a user’s private information may form part of a cookie file is if the user personally provides the server with this information.
                <br/>Although cookies help to optimise the bookings process, users who do not wish to receive cookies or who do not want their visit to be reported may configure their browser to this end.
    
                <br/>All internet browsers include options in their configuration that allows cookies from specific websites to be blocked or for access to be allowed.
    
                
    
                <br/><br/><b>9.- Hyperlinks</b><br/>
    
                <br/>The website may contain hyperlinks to other websites that are not edited, controlled, maintained or supervised by GSTDM, which is therefore not liable for the content of said websites. Their content is the responsibilitycalculating statisticsGSTDM of their respective owners and GSTDM does not guarantee or approve said content. The purpose of any links that appear or may appear on website is solely that of informing the user about the existence of other sources of information about the subject matter to be found on the internet. Under no circumstance will GSTDM be held responsible for the results that entail through said hyperlinks. Any users who wish to establish hyperlinks to this website must abstain from making any false, inaccurate or incorrect representations concerning the website or its content. In no cases should it be stated or suggested that GSTDM authorises the hyperlink, or that it supervises, approves of or accepts in any way the contents or services offered or made available on the website which the hyperlink leads to. Under no circumstance does establishing a hyperlink imply the existence of any kind of relationship between GSTDM and the owner of the website within the hyperlink. No hyperlinks will be established to websites that include information or content that is illicit, immoral or that contravenes the norms of good conduct, public order or any accepted internet usages, or which contravenes the rights of third parties in any way. Hyperlinks which link to the website from other websites may allow access to the website, provided they respect the previously established requirements, but may not reproduce its content in any way.
                <br/><br/><b>10.- Consent</b><br/>
    
                <br/>If you are using this website this means that you accept and agree with the information provided herein, and therefore that you accept these Terms and Conditions.
    
                <br/>Furthermore, it is the sole responsibility of the CLIENT to ensure that these Terms and Conditions are brought to the attention and obtain the acceptance of its end consumers, intermediaries and any other person or company involved that may affect or be affected by said Terms and Conditions. By facilitating any transaction carried out through this website, the CLIENT accepts that these Terms and Conditions apply to each and every transaction made.
    
                <br/><br/><b>11.- News bulletins</b><br/>
    
                <br/>GSTDM does not automatically subscribe users to our news bulletin. To receive it, you are given the option of subscribing. If you do subscribe, you can be informed by email of hotel news and offers. If you wish to unsubscribe from receiving our news bulletins, you can do so in the “News bulletins” section.
    
                <br/><br/><b>12.- Non-waiver</b><br/>
    
                <br/>In the event that GSTDM fails to apply any of the stipulations set out in the previous points, under no circumstance shall this be deemed to be a waiver of said stipulation.
    
                <br/><br/><b>13.- Regulatory references</b><br/>
    
                <br/>All regulatory references made in these Terms and Conditions are understood to have been made in observance of the regulation indicated herein, of the regulation that it is replaced by or by whichever regulation is in force at any time.
    
                <br/><br/><b>14.- Legislation and privilege</b><br/>
    
                <br/>These Terms and Conditions and any non-contractual obligations arising out of or in connection with it, shall be governed by the laws of Spain.
    
                <br/>Without prejudice to the above, in case of judicial dispute, each party agrees that the governing law shall be the one of the domicile of the defendant.
    
                <br/>Each party agrees that courts of the country of domicile of the defendant of the relevant action shall have exclusive jurisdiction to determine any dispute arising out of or in connection with this Agreement (including in relation to any non-contractual obligations). Any counterclaims shall be ignored in deciding who the defendant is. Where there are separate but related actions the courts with jurisdiction shall be decided by the first of such actions to be issued.  Each party irrevocably waive any right that it may have to object to an action being brought in such courts, to claim that the action has been brought in an inconvenient forum, or to claim that such courts do not have jurisdiction.
                            </div>
    
                            <div>
                                <Footer/>
                            </div>
                        </div>
                    
                </div>)
  
}

export default Terms