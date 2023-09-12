import {Atom, HookWithPropsInput, Molecule} from "@svendeichsel/route-gen";
import {Heading} from "../../atoms/Heading";
import {useStartPageMessages} from "../../messages/StartPageMessages";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {TextComponent} from "../../atoms/TextComponent";


const messages = HookWithPropsInput(useStartPageMessages);

export const StartPageDefinition = Molecule(
    "StartPage",
    [
        Atom(Heading, {
            text: messages.get("title"),
        }),
        Atom(TextComponent, {
            text: messages.get("text"),
        })
    ],
    {
        routing: "home",
        container: VerticalGridContainer,
    }
)