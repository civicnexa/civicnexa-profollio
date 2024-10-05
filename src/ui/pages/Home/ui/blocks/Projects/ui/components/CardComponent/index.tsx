import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CustomStack } from '@/ui/modules/components/CustomStack';
import projectImg from '../../assets/images/projectImg.png';
import { StyledImage } from '@/ui/modules/components';
import { Box } from '@mui/material';
import { pxToRem } from '@/common/utils';
import { AppButton } from '@/ui/modules/components/AppButton';
import { ArrowForward } from '@mui/icons-material';


export function CardComponent() {
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
            height: "140px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
         }}
        >
            <StyledImage src={projectImg} alt="project photo" width={30} height={30} sx={{ width: "50%", height: "50%",  margin: "auto" }} />
        </Box>
        <CustomStack direction={"column"}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="span"
                 sx={{
                    fontSize: pxToRem(18),
                    fontWeight: 500,
                    lineHeight: "24px",
                    color: (theme) => theme.general.darkColor,
                 }}
                >
                X-Kart Racing Series
                </Typography>
            </CardContent>
            <CardActions>
                <AppButton size="small"
                 sx={{
                    // width: "100%",
                    background: (theme) => theme.general.btnArrowBg,
                    color: (theme) => theme.palette.background.default,
                    borderRadius: "30px"
                 }}
                >
                    <CustomStack justifyContent={"space-between"} spacing={2}>
                        {/* <Typography component="span">View</Typography> */}
                        <ArrowForward />
                    </CustomStack>
                </AppButton>
            </CardActions>
        </CustomStack>
      </Card>
    )
}
