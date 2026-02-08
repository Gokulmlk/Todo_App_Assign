import React from "react";

function Header({ totalTodos, completedTodos, activeTodos }) {
  return (
    <header className="text-center mb-12 animate-fadeIn">
        <div>
             {/* Title */}
            <h1 className="text-6xl font-bold 
                           bg-linear-to-r from-orange-600 via-rose-600 to-pink-600 
                           bg-clip-text text-transparent mb-5">
              My To-Do List
            </h1>

            <p className="text-gray-600 text-lg font-light mb-10">
              Organize your tasks and boost your productivity
            </p>
        </div>
      
     

      {/* Statistics */}
      <div className="flex justify-center gap-6 flex-wrap">
        
        {/* Card */}
        <div className="relative px-7 py-4 rounded-2xl
                        bg-white/60 backdrop-blur-xl
                        border border-white/70
                        shadow-[0_15px_30px_rgba(0,0,0,0.12)]
                        overflow-hidden">

          {/* Border light */}
          <div className="absolute inset-0 rounded-2xl 
                          bg-linear-to-br from-white/70 via-transparent to-white/20 
                          opacity-60 pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-2xl font-semibold text-gray-800">
              {totalTodos}
            </span>
            <span className="text-sm text-gray-600 ml-2">Total</span>
          </div>
        </div>

        {/* Card */}
        <div className="relative px-7 py-4 rounded-2xl
                        bg-white/60 backdrop-blur-xl
                        border border-white/70
                        shadow-[0_15px_30px_rgba(0,0,0,0.12)]
                        overflow-hidden">

          <div className="absolute inset-0 rounded-2xl 
                          bg-linear-to-br from-green-200/60 via-transparent to-white/20 
                          opacity-60 pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-2xl font-semibold text-green-600">
              {completedTodos}
            </span>
            <span className="text-sm text-gray-600 ml-2">Completed</span>
          </div>
        </div>

        {/* Card */}
        <div className="relative px-7 py-4 rounded-2xl
                        bg-white/60 backdrop-blur-xl
                        border border-white/70
                        shadow-[0_15px_30px_rgba(0,0,0,0.12)]
                        overflow-hidden">

          <div className="absolute inset-0 rounded-2xl 
                          bg-linear-to-br from-orange-200/60 via-transparent to-white/20 
                          opacity-60 pointer-events-none"></div>

          <div className="relative z-10">
            <span className="text-2xl font-semibold text-orange-600">
              {activeTodos}
            </span>
            <span className="text-sm text-gray-600 ml-2">Active</span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
