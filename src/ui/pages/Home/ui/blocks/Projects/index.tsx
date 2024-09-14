import { Box } from "@mui/material";
import { PageSubtitles } from "../../components";
import { CardComponent } from "./ui/components";

export function Projects() {
    return(
        <Box
         sx={{
            padding: "20px"
         }}
        >
            <PageSubtitles subtitle="Projects" />
            <CardComponent />
        </Box>
    )
}