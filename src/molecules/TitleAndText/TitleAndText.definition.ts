import {Atom, Molecule, Property} from "@svendeichsel/route-gen";
import {Heading} from "../../atoms/Heading";
import {TextComponent} from "../../atoms/TextComponent";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";


export const TitleAndTextDefinition = Molecule(
    "TitleAndText",
    [
        Atom(Heading, {
            text: Property("title", "string"),
        }),
        Atom(TextComponent, {
            text: Property("text", "string"),
        })
    ],
    {
        container: VerticalGridContainer,
        routing: false,
    }
);