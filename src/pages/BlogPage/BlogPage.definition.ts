import {Atom, EmptyAtom, HookWithPropsInput, Molecule, UiContainer} from "@svendeichsel/route-gen";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {Heading} from "../../atoms/Heading";
import {useBlogPageMessages} from "../../messages/BlogPageMessages";
import {ImageView} from "../../atoms/ImageView";
import {BlogEntry} from "../../molecules/BlogEntry/BlogEntry.generated";
import {ContentView} from "../../atoms/ContentView";
import {Wrapper} from "../../Generate/Wrapper";

const messages = HookWithPropsInput(useBlogPageMessages);

export const BlogPageDefinition = Molecule(
    "BlogPage",
    [
        Atom(ImageView, {
            height: "194",
            width: "100%",
            image: "1.png",
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
                        Atom(BlogEntry, {
                            image: "2.png",
                            heading: messages.get("blog1Title"),
                            text: messages.get("blog1Text"),
                        }),
                        Atom(BlogEntry, {
                            image: "3.png",
                            heading: messages.get("blog2Title"),
                            text: messages.get("blog1Text"),
                        }),
                        Atom(BlogEntry, {
                            image: "4.png",
                            heading: messages.get("blog3Title"),
                            text: messages.get("blog1Text"),
                        })
                    ]
                )
            ]
        )
    ],
    {
        routing: "blog",
        container: VerticalGridContainer,
    }
)