import {
  Button,
  Divider,
  Fade,
  IconButton,
  Menu,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React, { FormEvent } from "react";

// TODO: extend this with songSubmissionCard
interface SongSubmissionCardProps {
  songName: string;
  venueLocation: string;
  venueName: string;
  date: string;
  description: string;
  voteCount: string;
  addComment: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  commentTyped: React.Dispatch<React.SetStateAction<string>>;
  comments: { comment: string; username: string; _id: string }[];
  upVote: () => Promise<void>;
  comment: string;
}

const SongCard = ({
  songName,
  venueLocation,
  venueName,
  date,
  description,
  voteCount,
  upVote,
  addComment,
  commentTyped,
  comments,
  comment,
}: SongSubmissionCardProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const closeComments = () => {
    setAnchorEl(null);
  };
  const openComments = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Stack
        width={"30rem"}
        zIndex={999}
        borderRadius={open ? "16px 16px 0px 0px" : 4}
        sx={{ backgroundColor: "white" }}
        direction={"row"}
        p={1}
        height={"204px"}
      >
        <Stack>
          <IconButton disableRipple onClick={upVote}>
            <ArrowUpwardIcon />
          </IconButton>
          <Typography
            my={"auto"}
            mx={3}
            border={"3px solid #4162ff"}
            p={2}
            borderRadius={"50%"}
            fontWeight={600}
            padding={"10px 15px"}
          >
            {voteCount}
          </Typography>
        </Stack>
        <Stack gap={1}>
          <Typography fontWeight={500}>{songName}</Typography>
          <Divider />
          <Typography>
            {date} - {venueLocation}, {venueName}
          </Typography>
          {/* TODO set a new Typography variant with correct styles using rem or em */}
          <Typography fontSize={"13px"} color={"grey"}>
            Description:
          </Typography>
          <Typography>{description}</Typography>
          <Stack direction={"row"} gap={1}>
            <Button onClick={openComments}>View Comments</Button>
            <Menu
              onClose={closeComments}
              anchorEl={anchorEl}
              open={open}
              TransitionComponent={Fade}
            >
              {comments.map(({ username, comment, _id }) => {
                return (
                  <Stack direction={"row"} gap={1} key={_id} p={1}>
                    <Typography color={"primary"}>{username}:</Typography>
                    <Typography color={"primary"}>{comment}</Typography>
                  </Stack>
                );
              })}
              <form onSubmit={addComment}>
                <TextField
                  value={comment}
                  sx={{ display: "flex", alignItems: "center" }}
                  color="primary"
                  onChange={(e) => commentTyped(e.target.value)}
                  fullWidth
                  label="comment"
                ></TextField>
                <Button
                  sx={{ borderRadius: 2, color: "white" }}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Menu>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SongCard;
