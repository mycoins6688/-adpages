import { Search, Moon, Send, UserPlus, LogIn } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section: Logo & Telegram Links */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-lg group-hover:bg-cyan-500/30 transition-colors" />
              <div className="relative w-full h-full bg-linear-to-br from-slate-800 to-slate-900 border border-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-transparent opacity-50" />
                <span className="text-white font-black text-xl tracking-tighter italic">T+</span>
              </div>
            </div>
            <span className="text-white font-display font-bold text-xl tracking-tight">
              Token<span className="text-cyan-400">Plus</span><span className="text-xs font-normal text-white/40 ml-0.5">.io</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[13px] font-medium">
              <Send size={14} className="text-cyan-400" />
              <span>Telegram交流群</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[13px] font-medium">
              <Send size={14} className="text-cyan-400" />
              <span>Telegram频道</span>
            </a>
          </div>
        </div>

        {/* Right Section: Search, Theme, Auth */}
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
              <Search size={15} className="text-white/30" />
            </div>
            <input 
              type="text" 
              placeholder="搜索" 
              className="bg-white/[0.03] border border-white/10 rounded-full py-1.5 pl-10 pr-5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/50 w-64 transition-all focus:bg-white/[0.06]"
            />
          </div>

          <div className="flex items-center gap-5">
            <button className="p-2 text-white/40 hover:text-white transition-colors">
              <Moon size={18} />
            </button>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-4">
              <button className="text-white/60 hover:text-white transition-colors text-[13px] font-semibold cursor-pointer">
                注册
              </button>
              <button className="text-white/60 hover:text-white transition-colors text-[13px] font-semibold cursor-pointer">
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
