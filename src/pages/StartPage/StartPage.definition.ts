import {Atom, EmptyAtom, HookWithPropsInput, Molecule, UiContainer} from "@svendeichsel/route-gen";
import {Heading} from "../../atoms/Heading";
import {useStartPageMessages} from "../../messages/StartPageMessages";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {TextComponent} from "../../atoms/TextComponent";
import {VideoView} from "../../molecules/VideoView";
import {ContentView} from "../../atoms/ContentView";


const messages = HookWithPropsInput(useStartPageMessages);

export const StartPageDefinition = Molecule(
    "StartPage",
    [
        Atom(VideoView, {
            heading1: messages.get("imageTitle1"),
            heading2: messages.get("imageTitle2"),
        }),
        UiContainer(
            {
                container: EmptyAtom(ContentView)
            },
            [
                UiContainer(
                    VerticalGridContainer,
                    [
                        Atom(Heading, {
                            text: messages.get("title"),
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