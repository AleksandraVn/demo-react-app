import {Atom, HookWithPropsInput, Molecule, UiContainer} from "@svendeichsel/route-gen";
import {VerticalGridContainer} from "../../Container/VerticalGridContainer";
import {CheckboxItem} from "../../atoms/CheckboxItem";
import {useGoalsPageMessages} from "../../messages/GoalsPageMessages";

const messages = HookWithPropsInput(useGoalsPageMessages);

export const ItemsListDefinition = Molecule(
    "ItemsList",

    [
        UiContainer(
            VerticalGridContainer,
            [
                Atom(
                    CheckboxItem,
                    {
                        "description": messages.get("goal1")
                    }
                ),
                Atom(
                    CheckboxItem,
                    {
                        "description": messages.get("goal2")
                    }
                ),
                Atom(
                    CheckboxItem,
                    {
                        "description": messages.get("goal3")
                    }
                ),
                Atom(
                    CheckboxItem,
                    {
                        "description": messages.get("goal4")
                    }
                )
            ]
        )
    ],
    {
        routing: false,
    }
);