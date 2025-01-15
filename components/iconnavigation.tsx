import { Briefcase, FileText, Globe, Settings, Pencil, Gamepad2, Calculator } from 'lucide-react'

export function IconNavigation() {
    return (
        <nav className="fixed left-4 top-4 icon-nav rounded-lg p-4 space-y-8">
            <button className="flex flex-col items-center w-16 text-white/80 hover:text-white transition-colors">
                <Briefcase size={24} />
                <span className="text-xs mt-1">Portfolio</span>
            </button>
            <button className="flex flex-col items-center w-16 text-white/80 hover:text-white transition-colors">
                <FileText size={24} />
                <span className="text-xs mt-1">Note</span>
            </button>
            <button className="flex flex-col items-center w-16 text-white/80 hover:text-white transition-colors">
                <Globe size={24} />
                <span className="text-xs mt-1">Browser</span>
            </button>
            <button className="flex flex-col items-center w-16 text-white/80 hover:text-white transition-colors">
                <Settings size={24} />
                <span className="text-xs mt-1">Settings</span>
            </button>
            <button className="flex flex-col items-center w-16 text-white/80 hover:text-white transition-colors">
                <Pencil size={24} />
                <span className="text-xs mt-1">Paint</span>
            </button>
            <button className="flex flex-col items-center w-16 text-white/80 hover:text-white transition-colors">
                <Gamepad2 size={24} />
                <span className="text-xs mt-1">Game</span>
            </button>
            <button className="flex flex-col items-center w-16 text-white/80 hover:text-white transition-colors">
                <Calculator size={24} />
                <span className="text-xs mt-1">Calculator</span>
            </button>
        </nav>
    )
}

