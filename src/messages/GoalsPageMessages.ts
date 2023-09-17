import {useMemo} from "react";

export const GoalsPageMessages = {
    goal1: "Ihr habt was gelernt",
    goal2: "Ihr hattet Spaß",
    goal3: "Ihr habt Bock auf Code Generatoren",
    goal4: "Sven und Aleks können jetzt CSS (vielleicht)",
}

export const useGoalsPageMessages = () => {
    return useMemo(() => GoalsPageMessages, []);
}