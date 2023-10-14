

export default function Page({ params }: { params: { id: string } }) {
    return <>
        <div className="py-10">
            <div className="card-actions justify-center">
                <div className="badge p-5 text-black text-md hover:text-white ring-[#F2C762] cursor-pointer hover:bg-[#F2C762]">Bussiness</div>
                <div className="badge p-5 text-black text-md hover:text-white ring-[#F2C762] cursor-pointer hover:bg-[#F2C762]">Products</div>
            </div>

            <h1 className="text-5xl text-center py-10">BRANDING การตลาดสุดฉ่ำ!</h1>
            <div className="px-48">
                <div className="rounded-xl overflow-hidden"><img src="/images/cover2.png" alt="" /></div>
                <div className="py-10">
                        Lorem ipsum dolor sit amet consectetur a
                    dipisicing elit. Minus assumenda delectus, au
                    t at numquam quas quidem, ullam tempore similique
                    atque debitis? Inventore sed atque beatae! Nobis fugit, mo
                    lestiae obcaecati repudiandae blanditiis quaerat vitae, quam animi
                    quo totam sed sit, dolore et eos eligendi id vero a doloremque fuga
                    aliquam quos?
                    <br />
                        Lorem ipsum dolor sit amet consectetur a
                    dipisicing elit. Minus assumenda delectus, au
                    t at numquam quas quidem, ullam tempore similique
                    atque debitis? Inventore sed atque beatae! Nobis fugit, mo
                    lestiae obcaecati repudiandae blanditiis quaerat vitae, quam animi
                    quo totam sed sit, dolore et eos eligendi id vero a doloremque fuga
                    aliquam quos?
                </div>
            </div>
        </div>
    </>
}