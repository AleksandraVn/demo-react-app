import {Atom, HookWithPropsInput, Molecule} from "@svendeichsel/route-gen";
import {Heading} from "../../atoms/Heading";
import {useStartPageMessages} from "../../messages/StartPageMessages";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {TextComponent} from "../../atoms/TextComponent";
import {VideoView} from "../../molecules/VideoView";


const messages = HookWithPropsInput(useStartPageMessages);

export const StartPageDefinition = Molecule(
    "StartPage",
    [
        Atom(VideoView, {
            heading1: messages.get("imageTitle1"),
            heading2: messages.get("imageTitle2"),
        }),
        Atom(Heading, {
            text: messages.get("title"),
            color: "#3047b0"
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