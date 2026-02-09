export type status = 
    | {type: "playing"}
    | {type: "lost"}
    | {type: "won"}

const ActionType = {
    Reset: "reset",
}

export type Action = 
    | { type: typeof ActionType.Reset };