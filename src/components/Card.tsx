import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const CustomCard = ({ article }: any) => {
  const { title, published_at, cover_image, description, user } = article;

  const dateObj = new Date(published_at);
  const formattedDate = dateObj.toLocaleDateString("en-GB");

  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#ff5480" }} aria-label="recipe">
            <img
              src={user.profile_image}
              style={{
                width: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={formattedDate}
      />
      <CardMedia
        component="img"
        style={{
          cursor: "pointer",
          width: "80%",
          height: "120px",
          margin: "0 auto",
          borderRadius: "10px",
          objectFit: "cover",
          overflow: "hidden",
        }}
        // image={require("../assets/images/card-img.png")}
        image={cover_image}
      />
      <CardContent>
        <Typography variant="body2" color="#18003c">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: "#18003c" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ color: "#18003c" }} />
        </IconButton>
        <ExpandMoreIcon sx={{ marginLeft: "auto", color: "#18003c" }} />
      </CardActions>
    </Card>
  );
};
