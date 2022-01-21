import { faFacebook, faInstagram, faLine, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardHeader, Stack, Typography, Box } from '@mui/material';
import { useState } from 'react';


const ProfileSection = ({ title="{{section_title}}", member, attributes=false}) => {
    const emails = member.attributes.emails;
    const phones = member.attributes.phones;
    const attrs = member.attributes.attrs;
    const socials = member.attributes.socials;
    const socialIcons = {
        facebook: faFacebook,
        twitter: faTwitter,
        telegram: faTelegram,
        line: faLine,
        instagram: faInstagram,
        linkedin: faLinkedin,
        web: faGlobe
    };
    return <Card  variant="outlined" sx={{height: '100%'}}>
        <CardContent>
            
            <Typography variant='h6'  component="div" color="textPrimary" fontWeight="600">
                {title}
            </Typography>
            { 
                attributes ? 
                <Stack direction={"column"} gap={2}>
                    {attrs.map(({name, value}, index) => <Typography variant='p'  component="div" color="textPrimary">
                            <Box>
                                <Typography variant='b' component="b">{name}</Typography>
                                <Typography variant='body2' component="div" dangerouslySetInnerHTML={{__html: value.split('\n').join('<br>')}}></Typography>
                            </Box>
                        </Typography>)}
                </Stack> 
                : 
                <Stack direction={"column"} gap={2}>
                    {/* Email */}
                    <Box>
                        {emails.map(({email, title}, index) => <Typography variant='p'  component="div" color="textPrimary">
                            <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '.25rem', opacity: index > 0 ? 0 : 1}}/> {email} { emails.length > 1 && <Typography variant="b" component="span" color="textPrimary" style={{opacity: '.5'}}>• {title}</Typography>}
                        </Typography>)}
                    </Box>
                    
                    {/* Phone */}
                    <Box>
                        {phones.map(({phone, title}, index) => <Typography variant='p'  component="div" color="textPrimary">
                            <FontAwesomeIcon icon={faPhone} style={{marginRight: '.25rem', opacity: index > 0 ? 0 : 1}}/> {phone} { emails.length > 1 && <Typography variant="b" component="span" color="textPrimary" style={{opacity: '.5'}}>• {title}</Typography>}
                        </Typography>)}
                    </Box>

                    {/* Social */}
                    <Box>
                        {socials.map(({type, value, link, title}, index) => <Typography variant='p'  component="div" color="textPrimary">
                            <FontAwesomeIcon icon={socialIcons[type] || socialIcons.web} style={{marginRight: '.25rem'}}/> 
                            {title ? 
                            <a href={value} target="_blank">{title}</a> : (
                                link ? <a href={value} target="_blank">{value}</a> : value
                            )} { emails.length > 1 && <Typography variant="b" component="span" color="textPrimary" style={{opacity: '.5', textTransform: 'capitalize'}}>• {type}</Typography>}
                        </Typography>)}
                    </Box>
                </Stack>
            }
        </CardContent>
    </Card>
};

export default ProfileSection;