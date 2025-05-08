"user client";

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full p-[4px] px-[13px] bg-[#0D1117]">
            <div className="gap-2 flex w-8 md:w-auto">
                <div className="bg-red-400 rounded-full w-2 md:h-2 h-[5px]"></div>
                <div className="bg-orange-400 rounded-full w-2 md:h-2 h-[5px]"></div>
                <div className="bg-green-300 rounded-full w-2 md:h-2 h-[5px]"></div>
            </div>
            <div className="text-gray-300 text-sm flex-1 text-center opacity-50">shibam_das</div>
            <div className="w-8 sm:w-auto">&nbsp;&nbsp;</div>
        </div>
    )
}