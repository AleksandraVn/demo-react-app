import {EmptyAtom, Molecule} from "@svendeichsel/route-gen";
import {ItemsList} from "../../molecules/ItemsLIst/ItemsList.generated";
import {Wrapper} from "../../Generate/Wrapper";
import {ContentView} from "../../atoms/ContentView";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";

export const GoalsPageDefinition = Molecule(
    "GoalsPage",
    [
        Wrapper(
            EmptyAtom(ContentView),
            [
                EmptyAtom(
                    ItemsList
                )
            ]
        )

    ],
    {
        "routing": "/goals",
        container: VerticalGridContainer,
    }
)