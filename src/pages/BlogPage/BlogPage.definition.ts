import {Atom, HookWithPropsInput, Molecule} from "@svendeichsel/route-gen";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {Heading} from "../../atoms/Heading";
import {useBlogPageMessages} from "../../messages/BlogPageMessages";

const messages = HookWithPropsInput(useBlogPageMessages);

export const BlogPageDefinition = Molecule(
    "BlogPage",
    [
        Atom(Heading, {
            text: messages.get("title"),
        })
    ],
    {
        routing: "blog",
        container: VerticalGridContainer,
    }
)