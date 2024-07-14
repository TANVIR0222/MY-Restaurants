import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const ContactCard = ({ title, location }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, maxHeight: 300, backgroundColor:'black',  color:"white" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" >
              {location}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ContactCard;
