import {Atom, Molecule, Property, UiContainer} from "@svendeichsel/route-gen";
import {HorizontalGridContainer} from "../../Container/HorizontalGridContainer";
import {ImageView} from "../../atoms/ImageView";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {Heading} from "../../atoms/Heading";
import {TextComponent} from "../../atoms/TextComponent";
import {Grid} from "@mui/material";
import {ContentView} from "../../atoms/ContentView";
import {Wrapper} from "../../Generate/Wrapper";


export const BlogEntryDefinition = Molecule(
    "BlogEntry",
    [
        Wrapper(HorizontalGridContainer.container,
            [
                Wrapper(
                    Atom(Grid, {
                        item: true,
                        xs: 3,
                    }),
                    [
                        Atom(ImageView, {
                            height: "200",
                            width: "200",
                            image: Property("image", "string"),
                        })
                    ]),
                Wrapper(
                    Atom(Grid, {
                        item: true,
                        xs: 9,
                    }),
                    [
                        Wrapper(
                            Atom(ContentView, {}),
                            [
                                UiContainer(
                                    VerticalGridContainer,
                                    [
                                        Atom(Heading, {
                                            variant: "h5",
                                            text: Property("heading", "string"),
                                            center: false,
                                            color: "#2D4291",
                                            isBold: true
                                        }),
                                        Atom(TextComponent, {
                                            text: Property("text", "string"),
                                            center: false,
                                        }),
                                    ]
                                )
                            ]
                        )
                    ]
                ),
            ]
        )
    ],
    {
        routing: false,
    }
);