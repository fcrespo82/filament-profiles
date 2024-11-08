export function GET(printer: string) {

    

    const profiles = [
        {
            name: "Profile 1"
        }
    ]

    return new Response(JSON.stringify(profiles), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    })

}