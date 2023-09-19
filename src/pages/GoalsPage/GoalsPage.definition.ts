import {Atom, EmptyAtom, Molecule, UiContainer} from "@svendeichsel/route-gen";
import {ItemsList} from "../../molecules/ItemsLIst/ItemsList.generated";
import {Wrapper} from "../../Generate/Wrapper";
import {ContentView} from "../../atoms/ContentView";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {Heading} from "../../atoms/Heading";
import {ImageView} from "../../atoms/ImageView";

export const GoalsPageDefinition = Molecule(
    "GoalsPage",
    [
        Atom(ImageView, {
            height: "194",
            width: "100%",
            image: "Developer-Summit.jpg",
        }),
        Wrapper(
            Atom(ContentView, {}),
            [
                UiContainer(
                    VerticalGridContainer, [
                        Atom(Heading, {
                            text: "Breakout Session - Design und Code aus einem Guss"
                        }),
                        EmptyAtom(
                            ItemsList
                        )
                    ]
                )
            ]
        ),
    ],
    {
        routing: "/goals",
        container: VerticalGridContainer,
    }
)