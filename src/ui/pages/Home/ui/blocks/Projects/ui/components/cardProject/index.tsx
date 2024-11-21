import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CustomStack } from '@/ui/modules/components/CustomStack';
// import teamImg from '../../assets/images/team-img.jpeg';
import { AppButton, StyledImage, StyledLink } from '@/ui/modules/components';
import { ArrowForward } from '@mui/icons-material';
import { pxToRem } from '@/common/utils';

type CardComponentProps = {
    name: string;
    href?: string;
    img?: any;
};

export function CardProject({
    name,
    href,
    img
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
                <StyledImage src={img} alt={name}  sx={{ width: "100%", height: "200px",  margin: "auto" }} />
                <CustomStack>
                    <CardContent>
                        <StyledLink
                            href={href || "#"}
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
                        <AppButton
                        size="small"
                        sx={{
                            width: "fit-content",
                            borderRadius: "30px",
                            padding: "5px 10px",
                            background: (theme) => theme.general.btnArrowBg,
                            "&:hover": {
                                background: (theme) => theme.palette.primary.main
                            },
                        }}
                    >
                        <StyledLink target='_blank' href={href || "#"}
                         sx={{
                            color: (theme) => theme.palette.background.default,
                         }}
                        >
                            <ArrowForward />
                        </StyledLink>
                    </AppButton>
                    </StyledLink>
                    </CardContent>
                
                </CustomStack>
            </Card>
    )
}
