import {Container, Atom} from "@svendeichsel/route-gen";
import {Grid} from "@mui/material";

export const VerticalGridContainer = Container(
    Atom(Grid, {
        container: true,
        direction: "column",
        spacing: 4,
    }),
    Atom(Grid, {
        item: true,
        xs: 12,
    })
);