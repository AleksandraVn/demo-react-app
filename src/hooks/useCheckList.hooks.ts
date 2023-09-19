import {useCallback, useMemo, useState} from "react";

export const useCheckList = () => {

    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const onCheckboxClick = useCallback((index: number) => {
        if (checkedItems.includes(index)) {
            setCheckedItems(pre => pre.filter(e => e !== index));
        } else {
            setCheckedItems(pre => [
                ...pre,
                index,
            ]);
        }
    }, [checkedItems]);

    const showMeme = useMemo(() => {
        return checkedItems.length === 4;
    }, [checkedItems]);

    return {
        onCheckboxClick,
        showMeme
    }
}