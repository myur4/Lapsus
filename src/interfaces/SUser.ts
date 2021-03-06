interface _balance {
    stars: number
    gems: number
    items: string[]
}

interface _profile {
    banner: string
    medals: string[]
    reputation: number
    description: string
}

interface SUser {
    id: string
    xp: number
    balance: _balance
    profile: _profile
    blacklisted: boolean
}

export default SUser;
