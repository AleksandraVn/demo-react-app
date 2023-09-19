import {Container, Atom} from "@svendeichsel/route-gen";
import {Grid} from "@mui/material";

export const HorizontalGridContainer = Container(
    Atom(Grid, {
        container: true,
        direction: "row"
    }),
    Atom(Grid, {
        item: true,
    })
);

export const HorizontalGridContainerCentred = Container(
    Atom(Grid, {
        container: true,
        direction: "row",
        justifyContent: "center"
    }),
    Atom(Grid, {
        item: true,
    })
);
