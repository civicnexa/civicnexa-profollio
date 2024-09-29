import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CustomStack } from '@/ui/modules/components/CustomStack';
import teamImg from '../../assets/images/Team1.jpg';
import { StyledImage } from '@/ui/modules/components';
import { Box } from '@mui/material';
import { pxToRem } from '@/common/utils';
import { AppButton } from '@/ui/modules/components/AppButton';
import { ArrowRightAlt } from '@mui/icons-material';


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
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap:'10px'
         }}
        >
            <StyledImage src={teamImg} alt="team photo"  sx={{ width: "100%", height: "100%",  margin: "auto" }} />
        </Box>
        <CustomStack>
            <CardContent>
                <Typography gutterBottom variant="h5" component="p"
                 sx={{
                    fontSize: pxToRem(18),
                    fontWeight: 600,
                    lineHeight: "24px",
                    color: (theme) => theme.general.darkColor,
                 }}
                >
               Saka Akeem Ayopelumi
                </Typography>
                <Typography gutterBottom  component="p"
                 sx={{
                    fontSize: pxToRem(14),
                    lineHeight: "14px",
                    color: (theme) => theme.general.darkColor,
                 }}
                >
               Product Designer
                </Typography>
            </CardContent>
           
        </CustomStack>
      </Card>
    )
}
