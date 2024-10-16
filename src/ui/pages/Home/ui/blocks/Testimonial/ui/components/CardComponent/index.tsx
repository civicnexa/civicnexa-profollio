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
            // maxWidth: {
            //     xxs: 353,
            //     md: 700,
            // },
            fontFamily: (theme) => theme.typography.fontFamily,
            overflow:'hidden',
            background: '#F9FAFC',
            width:'100%'
        
        }}
       >
        {/* <Box
         sx={{
            width: "100%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
         }}
        >
           
        </Box> */}
        <CustomStack sx={{width:'100%' }} direction={{
          xxs:'column',
          sm:'row'
        }} >
            <StyledImage src={teamImg} alt="team photo"  
            sx={{
              position: "center", 
              width: {
              xxs:'100%',md:'100%'
            }, height: {
              xxs:'200px',md:'400px'
            },  }} />
            <CardContent sx={{width:'100%',background: '#F9FAFC',border:"none",height:'100%'}}>

                <Typography gutterBottom variant="h1" component="p"
                 sx={{
                    fontSize: pxToRem(18),
                    fontWeight: 600,
                    lineHeight: "24px",
                    color: (theme) => theme.general.darkColor,
                 }}
                >
              Michael Balogun
                </Typography>
                <Typography gutterBottom variant="h5" component="p"
                 sx={{
                    fontSize: pxToRem(14),
                    lineHeight: "14px",
                    color: (theme) => theme.general.darkColor,
                 }}
                >
               Chief Executive Officer, XKart Racing Series
                </Typography>
                <Typography gutterBottom component="p"
                 sx={{
                    fontSize: pxToRem(14),
                    lineHeight: "14px",
                    color: (theme) => theme.general.darkColor,
                    marginTop:'25px',
                    width:'90%'
                 }}
                >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget
                </Typography>
            </CardContent>
           
        </CustomStack>
      </Card>
    )
}



