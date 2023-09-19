import {useState} from "react";

export const useCheckList = () => {

    const onCheckboxClick = (index: number) => {
        if(checkedItems.length < 4 && !checkedItems.includes(index)) {
            const result = [
                ...checkedItems
            ];
            result.push(index);
            setCheckedItems(result);
            if(result.length == 4) {
                setShowMeme(true);
            }
        }
    }

    const [showMeme, setShowMeme] = useState(false);
    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    return {
        onCheckboxClick,
        showMeme
    }
}