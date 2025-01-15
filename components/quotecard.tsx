export function QuoteCard() {
    return (
        <div className="quote-card rounded-lg p-6 max-w-md">
            <div className="flex items-start">
                <div className="text-2xl mr-2">💭</div>
                <blockquote className="italic">
                    In high tide or in low tide, I'll be by your side.
                    <footer className="mt-2 font-semibold">
                        — Bob Marley 🌿
                    </footer>
                </blockquote>
            </div>
        </div>
    )
}

