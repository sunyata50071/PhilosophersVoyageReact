import { words } from "./words"

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

export function getFarewellText(language) {
    const options = [
        `We've lost ${language}, captain.`,
        `${language} is now making the journey to Duat.`,
        `R.I.P., ${language}`,
        `${language} fell into Hades, soon to be met by Dante.`,
        `"arggggh....." ${language} fell off the ship!`,
        `${language} has perished.`,
        `${language} has vanished!`,
        `${language} is now gone.`,
        `Rest in pieces, ${language}.`,
        `${language} has corked it.`,
        `${language} has gone to Valhalla, captain.`,
        `Now ${language} is headed for Xibalba.`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}