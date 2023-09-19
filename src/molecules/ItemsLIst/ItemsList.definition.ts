import {Atom, AtomWithCondition, HookWithPropsInput, Molecule, UiContainer} from "@svendeichsel/route-gen";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {CheckboxItem} from "../../atoms/CheckboxItem";
import {useGoalsPageMessages} from "../../messages/GoalsPageMessages";
import {ImageView} from "../../atoms/ImageView";
import {useCheckList} from "../../hooks/useCheckList.hooks";
import {HorizontalGridContainerCentred} from "../../Container/HorizontalGridContainer";
import {ContentView} from "../../atoms/ContentView";

const messages = HookWithPropsInput(useGoalsPageMessages);

const hookVariable = HookWithPropsInput(useCheckList);

export const ItemsListDefinition = Molecule(
    "ItemsList",

    [
        UiContainer(
            VerticalGridContainer,
            [
                Atom(
                    CheckboxItem,
                    {
                        "description": messages.get("goal1"),
                        index: 0,
                        onCLick: hookVariable.get("onCheckboxClick")
                    }
                ),
                Atom(
                    CheckboxItem,
                    {
                        "description": messages.get("goal2"),
                        index: 1,
                        onCLick: hookVariable.get("onCheckboxClick")
                    }
                ),
                Atom(
                    CheckboxItem,
                    {
                        "description": messages.get("goal3"),
                        index: 2,
                        onCLick: hookVariable.get("onCheckboxClick")
                    }
                ),
                Atom(
                    CheckboxItem,
                    {
                        "description": messages.get("goal4"),
                        index: 3,
                        onCLick: hookVariable.get("onCheckboxClick")
                    }
                ),
                UiContainer(
                    HorizontalGridContainerCentred,
                    [
                        AtomWithCondition(
                            ImageView,
                            {
                                image: "meme.jpg",
                                height: "200",
                                width: "200",
                            },
                            hookVariable.get("showMeme")
                        ),
                    ]
                )

            ]
        )
    ],
    {
        routing: false,
        container: {
            container: Atom(ContentView, {
                marginX: "200px",
                marginY: "8px",
            })
        }
    }
);