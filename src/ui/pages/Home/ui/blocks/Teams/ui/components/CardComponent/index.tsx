import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CustomStack } from '@/ui/modules/components/CustomStack';
import teamImg from '../../assets/images/team-img.jpeg';
import { StyledImage, StyledLink } from '@/ui/modules/components';
// import { Box } from '@mui/material';
import { pxToRem } from '@/common/utils';
import { StaticImageData } from 'next/image';
import { Box } from '@mui/material';

type CardComponentProps = {
    name: string;
    position: string;
    href?: string;
    image?: StaticImageData
};

export function CardComponent({
    name,
    position,
    href, 
    image
}: CardComponentProps) {
    return (
        
            <Card 
                sx={{ 
                    maxWidth: {
                        xxs: 353,
                        md: 405,
                    },
                    fontFamily: (theme) => theme.typography.fontFamily,
                 
                }}
            >
                <Box
                sx={{
                    width: "100%",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap:'10px'
                }}
                >
                    <StyledImage src={image || teamImg} alt={name}  sx={{ width: "100%", height: "100%",  margin: "auto" }} />
                </Box>
                <CustomStack>
                    <CardContent>
                        <StyledLink
                            href={href || "https://www.linkedin.com/company/civicnexa-digital-solutions/"}
                            target="_blank"
                            sx={{
                                width: {
                                    xxs: 353,
                                    md: 405,
                                },
                            }}
                        >
                        <Typography gutterBottom variant="h5" component="p"
                        sx={{
                            fontSize: pxToRem(18),
                            fontWeight: 600,
                            lineHeight: "24px",
                            color: (theme) => theme.palette.primary.main
                        }}
                        >
                            {name}
                        </Typography>
                        <Typography gutterBottom  component="p"
                        sx={{
                            fontSize: pxToRem(14),
                            lineHeight: "14px",
                            color: (theme) => theme.general.darkColor,
                        }}
                        >
                            {position}
                        </Typography>
                    </StyledLink>
                    </CardContent>
                
                </CustomStack>
            </Card>
    )
}
