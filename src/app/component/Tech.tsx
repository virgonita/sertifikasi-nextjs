import TechCard from "./TechCard";

export default function Tech() {
    return(
        <>
        <div className="bg-slate-800 w-screen min-h-[300px] p-8">
            <h1 className="text-4xl text-white font-bold mb-4">TECHS</h1>
            <div className="w-32 border-2 mb-8 mx-4"/>
                <div className="flex justify-center items-center w-full flex-wrap">
                    <TechCard imageURL="/img/js.png" alt="JavaScript" techStack="JavaScript"/>
                    <TechCard imageURL="/img/react.png" alt="React" techStack="React"/>
                    <TechCard imageURL="/img/ts.png" alt="TypeScript" techStack="TypeScript"/>
                </div>
            </div>
        </>
    )
}