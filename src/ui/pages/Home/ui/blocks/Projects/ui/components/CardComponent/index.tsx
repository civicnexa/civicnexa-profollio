import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CustomStack } from '@/ui/modules/components/CustomStack';
import projectImg from '@/ui/pages/Home/ui/blocks/Teams/ui/assets/images/team-img.jpeg';
import { StyledImage, StyledLink } from '@/ui/modules/components';
import { Box, Stack } from '@mui/material';
import { pxToRem } from '@/common/utils';
import { AppButton } from '@/ui/modules/components/AppButton';
import { ArrowForward } from '@mui/icons-material';

type CardComponentProps = {
    name: string;
    link: string;
    img?: any
};

export function CardComponent({
    name,
    link,
    img
}: CardComponentProps) {
    return (
      <Stack 
        sx={{ 
            maxWidth: {
                xxs: 353,
                md: 405,
            },
            fontFamily: (theme) => theme.typography.fontFamily,
       
        }}
        spacing={2}
       >
        <Box
         sx={{
            width: "100%",
            height: "140px",
            display: "flex",
            alignItems: "center",
            // justifyContent: "center"
         }}
        >
            <StyledImage src={img} alt="project photo" width={30} height={30} sx={{ 
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                objectFit: "contain",
             }} />
        </Box>
        <CustomStack direction={"column"}>
            <Typography gutterBottom variant="h5" component="span"
                sx={{
                fontSize: pxToRem(18),
                fontWeight: 500,
                lineHeight: "24px",
                color: (theme) => theme.general.darkColor,
                }}
            >
            {name}
            </Typography>
            <AppButton size="small"
                sx={{
                    width: "fit-content",
                    background: (theme) => theme.general.btnArrowBg,
                    color: (theme) => theme.palette.background.default,
                    borderRadius: "30px",
                    padding: "5px 10px"
                }}
            >
                <StyledLink target='_blank'
                    href={link}
                >
                    <ArrowForward />
                </StyledLink>
            </AppButton>
        </CustomStack>
      </Stack>
    )
}
