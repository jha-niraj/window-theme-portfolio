"use client"

import { IconNavigation } from "@/components/iconnavigation";
import { QuoteCard } from "@/components/quotecard";
import { MusicPlayer } from "@/components/musicplayer";

export default function App() {
	return (
		<main className="flex items-center bg-black text-white justify-center gap-2">
			<main className="min-h-screen p-4">
				<IconNavigation />
				<div className="fixed top-4 right-4">
					<QuoteCard />
				</div>
				<div className="fixed bottom-4 right-4">
					<MusicPlayer />
				</div>
			</main>
		</main>
	)
}

