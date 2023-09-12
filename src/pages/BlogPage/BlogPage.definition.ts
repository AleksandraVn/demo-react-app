import {Atom, HookWithPropsInput, Molecule} from "@svendeichsel/route-gen";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {Heading} from "../../atoms/Heading";
import {useBlogPageMessages} from "../../messages/BlogPageMessages";
import {ImageView} from "../../atoms/ImageView";
import {BlogEntry} from "../../molecules/BlogEntry/BlogEntry.generated";

const messages = HookWithPropsInput(useBlogPageMessages);

export const BlogPageDefinition = Molecule(
    "BlogPage",
    [
        Atom(ImageView, {
            height:"194",
            width: "100%",
            image: "1.png",
        }),
        Atom(Heading, {
            text: messages.get("title"),
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
    ],
    {
        routing: "blog",
        container: VerticalGridContainer,
    }
)