import {Atom, Molecule, Property, UiContainer} from "@svendeichsel/route-gen";
import {HorizontalGridContainer} from "../../Container/HorizontalGridContainer";
import {ImageView} from "../../atoms/ImageView";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {Heading} from "../../atoms/Heading";
import {TextComponent} from "../../atoms/TextComponent";
import {Grid} from "@mui/material";


export const BlogEntryDefinition = Molecule(
    "BlogEntry",
    [
        UiContainer(
            {
                container: HorizontalGridContainer.container,
            },
            [
                UiContainer({
                    container: Atom(Grid, {
                        item: true,
                        xs: 3,
                    })
                }, [
                    Atom(ImageView, {
                        height: "200",
                        width: "200",
                        image: Property("image", "string"),
                    })
                ]),
                UiContainer({
                    container: Atom(Grid, {
                        item: true,
                        xs: 9,
                    })
                }, [
                    UiContainer(
                        VerticalGridContainer,
                        [
                            Atom(Heading, {
                                variant: "h6",
                                text: Property("heading", "string"),
                                center: false,
                            }),
                            Atom(TextComponent, {
                                text: Property("text", "string"),
                                center: false,
                            }),
                        ]
                    )
                ]),
            ]
        )
    ],
    {
        routing: false,
    }
);