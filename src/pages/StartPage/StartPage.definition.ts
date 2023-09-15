import {Atom, EmptyAtom, HookWithPropsInput, Molecule, UiContainer} from "@svendeichsel/route-gen";
import {Heading} from "../../atoms/Heading";
import {useStartPageMessages} from "../../messages/StartPageMessages";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {TextComponent} from "../../atoms/TextComponent";
import {VideoView} from "../../molecules/VideoView";
import {ContentView} from "../../atoms/ContentView";
import {Wrapper} from "../../Generate/Wrapper";


const messages = HookWithPropsInput(useStartPageMessages);

export const StartPageDefinition = Molecule(
    "StartPage",
    [
        Atom(VideoView, {
            heading1: messages.get("imageTitle1"),
            heading2: messages.get("imageTitle2"),
        }),
        Wrapper(
            EmptyAtom(ContentView),
            [
                UiContainer(
                    VerticalGridContainer,
                    [
                        Atom(Heading, {
                            text: messages.get("title"),
                            color: "#2D4291",
                            isBold: true
                        }),
                        Atom(TextComponent, {
                            text: messages.get("text"),
                        })
                    ]
                )
            ]
        )
    ],
    {
        routing: "home",
        container: VerticalGridContainer,
    }
)