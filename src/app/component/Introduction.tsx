import Image from "next/image"

export default function Introduction(){
    return(
        <>
            <div className="w-screen h-[500px] bg-slate-800 p-8">
                <div className="flex justify-between items-start">
                    <div>
                        {/* <p className="text-white text-2x1 font-bold">
                            Teknik Informatika
                        </p>  */}
                        <h2 className="text-5x1 text-white font-bold">Hello, Welcome To</h2>
                        <h2 className="text-7x1 text-blue-400 font-bold ">Virgonita Blog!</h2>
                        <p className="text-white max-w-lg">
                        I am undergraduate student majoring in Informatics Engineering at Sekolah Tinggi Teknologi Indonesia, Tanjungpinang. I am alumni intern MSIB Batch 7 at Infinite Learning as a Web Developer, and I truly enjoy this role.

                        In addition to my technical skills, I possess strong public speaking abilities and leadership. I am committed to continuous self-improvement and achieving my academic and professional goals.

                        I am excited to apply my skills and continue learning in the ever-evolving field of web development. Let’s connect and explore how we can collaborate!
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative w-96 h-96">
                        <Image src={"/img/nita.jpg"} 
                            alt="foto nita" 
                            fill={true} 
                            priority={true}
                            className="rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    )

}
