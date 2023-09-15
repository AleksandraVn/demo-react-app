import {AnyAtomType, MoleculeChild, UiContainer} from "@svendeichsel/route-gen";


export const Wrapper = (
    wrapper: AnyAtomType,
    children: MoleculeChild[]
) => UiContainer(
    {
        container: wrapper,
    },
    children
)