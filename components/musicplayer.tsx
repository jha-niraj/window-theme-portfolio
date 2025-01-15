import { SkipBack, Play, SkipForward } from 'lucide-react'
import Image from 'next/image'

export function MusicPlayer() {
    return (
        <div className="music-player rounded-lg p-4 w-80">
            <div className="flex items-center justify-between mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs ml-auto">SONGS I HEAR ALL THE TIME</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative">
                    <Image
                        src="/placeholder.svg"
                        alt="Album cover"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-sm font-medium">Hotel California</h3>
                    <p className="text-xs text-gray-400">Eagles</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
                <button className="text-white/80 hover:text-white">
                    <SkipBack size={20} />
                </button>
                <button className="text-white/80 hover:text-white">
                    <Play size={24} />
                </button>
                <button className="text-white/80 hover:text-white">
                    <SkipForward size={20} />
                </button>
            </div>
        </div>
    )
}

