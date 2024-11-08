



export default async function Ender3V3() {
    const data = await fetch('http://localhost:3000/profiles/Ender3V3')
    const profiles = await data.json()

    return (
        <main>
            <h2>Ender3V3</h2>
            <aside>
                <h3>Profiles</h3>

                <ul>
                { profiles.map((profile) => {
                    return (
                        <li key={profile.name}>{profile.name}</li>
                    )
                })}
                </ul>
            </aside>
        </main>
    )
}