import {Card, CardMedia} from "@mui/material";
import React from "react";
import {Heading} from "../atoms/Heading";

interface Props {
    heading1: string
    heading2: string
}

export const VideoView = (props: Props) => {
    const {
        heading1,
        heading2,
    } = props;

    return (
        <Card
            style={{ position: "relative" }}
        >
            <CardMedia
                component={"video"}
                height={"300px"}
                width={"100%"}
                src={"beach-video.mp4"}
                autoPlay
                loop
                muted
                sx={{
                    objectFit: "cover",
                    objectPosition: "0% 60%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "30%",
                    color: "black",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: "20px",
                }}
            >
                <Heading variant={"h3"} text={heading1} color={"#3047b0"}/>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "60%",
                    left: "30%",
                    color: "black",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: "20px"
                }}
            >
                <Heading variant={"h3"} text={heading2} color={"#3047b0"}/>
            </div>
        </Card>
    );
}